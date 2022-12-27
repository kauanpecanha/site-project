import React from "react";
import './StyledContent.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import SignIn from '../../Pages/Sign In/SignIn'
import Services from '../../Pages/Services/Services'
import ContactUs from '../../Pages/Contact Us/ContactUs'
import Error from '../../Pages/Error/Error'

import Footer from '../../components/Footer/Footer.jsx'

const Content = props =>{
    return(
        <div className="content">
            <Routes>
                <Route exact path = '/' element={<Home />}></Route>
                <Route path = '/about' element={<About />}></Route>
                <Route path = '/signin' element={<SignIn />}></Route>
                <Route path = '/services' element={<Services />}></Route>
                <Route path = '/contactus' element={<ContactUs />}></Route>
                <Route path = '/404' element={<Error />}></Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default Content;