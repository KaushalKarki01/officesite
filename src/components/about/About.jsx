import React from 'react'
import './about.scss'
export const About = () => {
  return (
    <div className='abt' id='abt'>
        <div className="container p-4 about">
                <div>
                    <h2 className='mb-4'>Why Customers in over 15+ countries choose The Us?</h2>
                    <ul>
                        <li>Flexible engagement models</li>
                        <li>Competitive pricing & ontime delivery</li>
                        <li>State of the art IT infrastructure</li>
                        <li>24×7 Support across all timezones</li>
                        <li>Strong technology competency</li>
                        <li>Seamless communication</li>
                    </ul>
                </div>
                <div className='four-cols'>
                    <div>
                        <p><span>7+</span> Years of Experience</p>
                    </div>
                    <div>
                        <p><span>20+</span> Team Members</p>
                    </div>
                    <div>
                        <p><span>100%</span> Customer Satisfaction</p>
                    </div>
                    <div>
                        <p><span>50+</span> Customer Satisfaction</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
