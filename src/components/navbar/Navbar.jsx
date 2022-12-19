import React from 'react'
import {Link} from 'react-scroll'
import './navbar.scss';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid mx-4 my-2">
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="navbar-brand logo">Octane</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-auto">
                        <li className="nav-item">
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="abt" spy={true} smooth={true} offset={30} duration={500} className="nav-link active">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="service" spy={true} smooth={true} offset={10} duration={500} className="nav-link active">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="testimonial" spy={true} smooth={true} offset={10} duration={500} className="nav-link active" >Testimonials</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="contacts" spy={true} smooth={true} offset={10} duration={500} className="nav-link active">Contact</Link>
                        </li>
                       
                    </ul>
                    <button type='button' className='btn btn-primary btn-lg contact-btn'>Get in touch</button>
                </div>
            </div>
        </nav>
    </div>
  )
}
