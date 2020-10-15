import React, { useState } from 'react';

const Contact = () => {

const [data, setData] = useState({

    fullname:'',
    mobile:'',
    email:'',
    message:'',

});
const InputEvent=(event)=>{
    
    const {name,value} = event.target;

    setData((preVal)=>{
        return {
        ...preVal,
        [name]:value,
        }
    })

};

const formSubmit=(e) => {

    e.preventDefault();
    
    alert(`My Name is ${data.fullname} and My Mobile is ${data.mobile} and my Email is ${data.email} and Message is ${data.message}`);

};

    return(<>

            <div className="my-5">
                <h1 className="text-center">Contact Us</h1> 
            </div>

            <div className="container contact_div">

                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent}  id="exampleFormControlInput1" placeholder="Full Name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1">Email</label>
    <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1">Mobile</label>
    <input type="number" className="form-control" name="mobile" value={data.mobile} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Mobile"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
                        </form>

                    </div>
                </div>            
            </div>

        </>);
};

export default Contact;