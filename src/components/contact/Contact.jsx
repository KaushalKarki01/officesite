import React from 'react'
import {CiPhone, CiMail} from 'react-icons/ci'
import {GoLocation} from 'react-icons/go'
import {RiEarthLine} from 'react-icons/ri'
import './contact.scss'
export const Contact = () => {
    const myStyle={
        fontSize:24,
        color:'#fff',
        marginBottom:14,
    }
  return (
    <div className='contacts' id='contacts'>
        <div className="container contact p-4">
            <div className="contact-form">
                <div className='contact-input padding'>
                    <h4>Write Us</h4>
                    <div className="inputs">
                        <input type="text" name="name" placeholder='Name' />
                        <input type="email" name="email" placeholder='Email' />
                        <input type="text" name="subject" placeholder='Subject' />
                        <textarea name="msg" cols="30" rows="7"></textarea>
                    </div>
                </div>

                <div className='infos padding'>
                    <div>
                        <p style={myStyle}>Contact Information</p>
                        <p>We are open for any suggestions or just to have a chat</p>
                    </div>
                    
                    <div className="contact-info">
                        <div>
                            <GoLocation size={23}/>
                            <p><span>Address:</span> 856 West Corona St. Brooklyn, NY 11201</p>
                        </div>

                        <div>
                            <CiPhone size={23}/>
                            <p><span>Phone:</span> + 1645 4457 09</p>
                        </div>

                        <div>
                            <CiMail size={23}/>
                            <p><span>Email:</span> info@octagon.com</p>
                        </div>

                        <div>
                            <RiEarthLine size={23}/>
                            <p><span>Website:</span> Octagontech.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
