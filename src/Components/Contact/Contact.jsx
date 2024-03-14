import React from 'react'
import './Contact.css'
import rupalijaga from '../../assets/project-img3.png'
const Contact = ()=> {


    
    const [result, setResult] = React.useState("");
      
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1628fbb2-4d25-42ce-b904-566baa9f58dc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (

    
    <div className='contact container' id='contactus'>
        <div className="conatact-main">
            <div className="contact-left">
                <h2>Are you a celebrity?</h2>
                <h4>Fill the form and submit your query. You will get a call in next 48 hours.</h4>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" className='inputbox' placeholder='Your name' required />
            <input type="email" name="email" id="email" className='inputbox' placeholder='Your email' required />
            <input type="url" name="social-media" id="social-media" className='inputbox'  placeholder='Your social media link' required />
            <button className='btn'>Submit</button>
        </form>
        <span>{result}</span>
        </div>

        <div className="contact-right">
            <img src={rupalijaga} alt="image" />
        </div>
        </div>
    </div>
  )
}

export default Contact;
