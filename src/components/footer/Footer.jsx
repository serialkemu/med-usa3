import React from 'react';
import twitter from"../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"

const Footer = () => {
  return (
    <div className="bg-info row " style={{height:"20rem"}}>
      <hr className='text-secondary'></hr>
      <div className=" col-6">
        <form action="post" style={{width:"25rem"}} className=''> 
        <h4>Talk to us! Add your suggentions</h4>
          <div className='row m-2 '>
              <div className="form-floating col-6 ">
              <input type="" className="form-control bg-primary border border-secondary" id="" placeholder=""/>
              <label htmlFor="" className=''>First Name</label>
              </div>
              <div className="form-floating col-6">
              <input type="" className="form-control bg-primary border border-secondary" id="" placeholder=""/>
              <label htmlFor="">Last Name</label>
              </div>
          </div>
        <div class="form-floating m-3">
          <input type="email" className="form-control bg-primary border border-secondary" id="femail" placeholder="name@example.com"/>
            <label htmlFor="femail">Email address</label>
            </div>
            <div className="form-floating m-3">
              <textarea className="form-control bg-primary border border-secondary" placeholder="Leave a comment here" id="Comment" ></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
              </div>
        </form>
      </div>
     <div className='col-6 '>
       <div className='m-3'>
        <a href=''>
          <img src={twitter} alt="..l" style={{height:"2rem"}} />
        </a> 
        </div>
        <div className='m-3'>
          <a href=''><img src={instagram} alt="" style={{height:"2rem"}} />
        </a>
        </div>
        <div className='m-3'>
          <a href=''><img src={linkedin} alt="" style={{height:"2rem"}} />
        </a>
        </div>
     </div>  
    </div>
  );
};

export default Footer;
