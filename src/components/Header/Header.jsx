import React from "react";
import { Icon } from '../../assets/Icon'
import { ChevromDown } from "../../assets/ChevromDown";
import { StyledHeader } from './header'

const Header = props => {
    return(
        <StyledHeader>
            <div className="title">
                <a href = '/'>
                    <div className="circle">
                        <Icon size="80" className="App-logo"></Icon>
                    </div>
                    <h1>{props.title}</h1>
                </a>
            </div>
            <div className="routes">
                <ul>
                    <li>
                        <a href= '/about'>
                            About
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a href= '/services'>
                            Services
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a href= '/contactus'>
                            Contact Us
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a href= '/signin'>
                            Sign In
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                </ul>
            </div>
        </StyledHeader>
    )
}

export default Header;