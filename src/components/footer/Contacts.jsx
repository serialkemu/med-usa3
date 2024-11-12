import React from 'react'

const Contacts = () => {
  return (
    <div>
         <form action="post" style={{width:"30rem"}} className='border p-2 m-2'> 
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
  )
}

export default Contacts