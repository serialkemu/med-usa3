import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import styles from './style.module.css';
import {useTransition,useSpring,useChain,config,animated as animatedRS,useSpringRef,} from '@react-spring/web';
import data from './data';
import firstcard from '../../assets/images/firstcard.png'
import  secondcard from '../../assets/images/secondcard.png'
import  thirdcard from '../../assets/images/thirdcard.png'
import  fourthcard from '../../assets/images/fourthcard.png'
import  fifthcard from '../../assets/images/fifthcard.png'
import abuser1 from '../../assets/images/abuser1.png'

function SpringAnimation() {
    const [open, set] = useState(false);
  
    const springApi = useSpringRef();
    const { size, ...rest } = useSpring({
      ref: springApi,
      config: config.stiff,
      from: { size: '20%', background: 'hotpink' },
      to: {
        size: open ? '100%' : '20%',
        background: open ? 'white' : 'hotpink',
      },
    });
  
    const transApi = useSpringRef();
    const transition = useTransition(open ? data : [], {
      ref: transApi,
      trail: 400 / data.length,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
    });
  
    useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);
  
    return (
      <div className={styles.wrapper}>
        <animatedRS.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container1}
          onClick={() => set(open => !open)}>
          {transition((style, item) => (
            <animatedRS.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            />
          ))}
        </animatedRS.div>
      </div>
    );
  }
  
  const cards = [
    abuser1,
    fifthcard,
    fourthcard,
    thirdcard,
    secondcard,
    firstcard,
  ];
  
  const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });
  
  const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
  
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
  
  function Deck() {
    const [gone, setGone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, (i) => ({
      ...to(i),
      from: from(i),
    }));
  
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) setGone(new Set(gone.add(index)));
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length) {
        setTimeout(() => {
          setGone(new Set());
          api.start((i) => to(i));
        }, 600);
      }
    });
  
    return (
      <>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
      </>
    );
  }


const Home2 = () => {
    const [open, set] = useState(false)
  return (
    <div>
        <Deck/>
    </div>
  )
}

export default Home2