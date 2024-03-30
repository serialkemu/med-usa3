import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../../components/cards/Carousel';


const HomeMid = ({iconMid, titleMid,desMid,refMid}) => {
    return(
        <div className=" gap-1  position-relative col-6 p-3 border">
            <div className="col-md-6 mb-md-0 p-md-4 ">
              <img src={iconMid} className="w-100" alt="..."/>
              </div>
              <div className="col-md-6 p-4 ps-md-0">
                <h5 className="mt-0">{titleMid}</h5>
                <div>
                <p>{desMid}.</p>
                </div>
                <Link to={refMid} className="btn btn-secondary  stretched-link">Go somewhere</Link>
                </div>
                </div>
    )
  }

const Home = () => {
  return (
    <div>
        <div>
            <div>
                <Carousel/>
                <div  className='m-2  row rounded-end p-5 bg-success'>
          <div className='col-4'><h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2> </div> 
        <div  className='mb-3 row  rounded-end p-3'>
          <div className='col-4'><h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2> </div> 
          <div className='col-4 text-center mt-5'>
            <button className='btn btn-secondary p-4 '><p className="h4">call <Link href='0800724635' className='text-dark'>0800724635</Link> </p>toll free</button>
            </div> 
            <div className='col-4 text-center mt-5 '> 
              <button className='btn btn-secondary p-4'><p className='h4'><Link to="/report" className='text-dark'>Get Help</Link></p> </button>
              </div>    
        </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Home