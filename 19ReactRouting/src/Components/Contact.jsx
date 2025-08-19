import React from 'react'
import { NavLink } from 'react-router';


function Contact() {
    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                <NavLink to='/'>Go Back</NavLink>
                <br /><br />
                <li>
                    <NavLink to="/contact/Shubham/Science/7880948400/93/95/Greater Noida">Shubham</NavLink><br />
                </li>
                <li>
                    <NavLink to="/contact/Shaan/Biology/7880948980/91/90/Delhi">Shaan</NavLink><br />
                </li>
                <li>
                    <NavLink to="/contact/Tender/English/7880975400/96/78/Faridabad  ">Tender</NavLink><br />
                </li>
            </ul>
        </div>
    );
}

export default Contact;