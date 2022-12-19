import React from 'react'
import {CiPhone} from 'react-icons/ci'
import {FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import './footer.scss'
export const Footer = () => {
    const myStyle={
        color:'#FFA630',
    }
  return (
    <div className='container'>
        <footer>
            <div className='grid'>
                <div className='lets-flex'>
                    <h2 style={myStyle}>Octane</h2>
                    <p>We're Available 24/7. </p>
                    <div className="contact-info flex">
                        <div>
                        <CiPhone size={20}/>
                        <p>+ 1645 4457 09</p>
                        </div>
                        <div>
                        <FaWhatsapp size={20}/>
                        <p>+ 1645 4457 09</p>
                        </div>  
                    </div>
                </div>

                <div className='lets-flex'>
                    <h6>Follow Us</h6>
                    <div className="follow-links flex">
                        <div>
                            <FaFacebookF/>
                            <p>Facebook</p>
                        </div>
                        <div>
                            <FaInstagram/>
                            <p>Instagram</p>
                        </div>
                        <div>
                            <FaTwitter/>
                            <p>Twitter</p>
                        </div>
                        <div>
                            <FaLinkedin/>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <h6>Services</h6>
                    <p>Web Design</p>
                    <p>Game Development</p>
                    <p>Web Development</p>
                    <p>Digital Marketing</p>
                    <p>Ecommerce Solutions</p>
                    <p>Blockchain Development</p>
                </div>

                <div className='flex'>
                    <h6>Resource</h6>
                    <p>Web Design</p>
                    <p>Game Development</p>
                    <p>Web Development</p>
                    <p>Digital Marketing</p>
                    <p>Ecommerce Solutions</p>
                    <p>Blockchain Development</p>
                </div>
            </div>
            <p style={{padding:16}}>&copy; 2022 OctagonTech. All Rights Reserved.</p>
        </footer>
    </div>
  )
}
