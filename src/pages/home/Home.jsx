import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/cards/Carousel';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import styles from './style.module.css';

const HomeMid = ({ iconMid, titleMid, desMid, refMid }) => {
  return (
    <div className="gap-1 position-relative col-6 p-3 border">
      <div className="col-md-6 mb-md-0 p-md-4 ">
        <img src={iconMid} className="w-100" alt="..." />
      </div>
      <div className="col-md-6 p-4 ps-md-0">
        <h5 className="mt-0">{titleMid}</h5>
        <div>
          <p>{desMid}.</p>
        </div>
        <Link to={refMid} className="btn btn-secondary stretched-link">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

const cards = [
  'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
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

const Home = () => {
  return (
    <div>
      <div>
        <div>
             <Carousel />
             </div>
          <div className="m-2 row rounded-end p-5 bg-success">
            <div className="col-4">
              <h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2>{' '}
            </div>
            <div className="mb-3 row rounded-end p-3">
              <div className="col-4">
                <h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2>{' '}
              </div>
              <div className="col-4 text-center mt-5">
                <button className="btn btn-secondary p-4">
                  <p className="h4">
                    call{' '}
                    <Link href="tel:0800724635" className="text-dark">
                      0800724635
                    </Link>{' '}
                  </p>
                  toll free
                </button>
              </div>
              <div className="col-4 text-center mt-5 ">
                <button className="btn btn-secondary p-4">
                  <p className="h4">
                    <Link to="/report" className="text-dark">
                      Get Help
                    </Link>
                  </p>{' '}
                </button>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
        <div  className='m-2 row p-5' style={{width:'100rem', height:'100rem'}} >
       <Deck/>
       
        </div>
        </div>
         
        
      </div>
    </div>
  );
};

export default Home;
