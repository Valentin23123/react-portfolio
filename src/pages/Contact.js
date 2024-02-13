
import React, { useState } from 'react';
import './ContactStyle.css'
export default function Contact()
{
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    
        
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      };
    return( 
       
        <div className="contact">
        <div className="left">
            <img
                src={`${process.env.PUBLIC_URL}/img/github.png`}
                alt=""
              />
               <br /> <br />
               <a href="https://github.com/Valentin23123" target="_blank" rel="noopener noreferrer">
            <button>
            <span className="github">GitHub</span>
        </button>
        </a>
        </div>
        <div className="right">
        <img
                src={`${process.env.PUBLIC_URL}/img/linkedin.png`}
                alt=""
              />
              <br /> <br />
              <a href="https://www.linkedin.com/in/valentin-petrov-bbb540211/" target="_blank" rel="noopener noreferrer">
        <button>
            <span className="linkedin">LinkedIn</span>
        </button>
        </a>
        </div>
        <div className="middle">
        <a href="mailto:petrovvalentin481@gmail.com"><img
                src={`${process.env.PUBLIC_URL}/img/mail.png`}
                alt=""
              />
              </a>
              <button onClick={() => copyToClipboard('petrovvalentin481@gmail.com')}>
          <span className="copy-button">Copy Email</span>
        </button>
        {isCopied && <p>Copied to clipboard!</p>}
        </div>
        </div>
        )
}