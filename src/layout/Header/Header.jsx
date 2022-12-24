import React from "react";
import { Icon } from '../../assets/Icon'
import { ChevromDown } from "../../assets/ChevromDown";
import { StyledHeader } from './header'

const Header = props => {
    return(
        <StyledHeader>
            <div className="title">
                <div className="circle">
                    <Icon size="80" className="icon"></Icon>
                </div>
                <h1><a href = "/">{props.title}</a></h1>
            </div>
            <div className="routes">
                <ul>
                    <li>
                        <a>
                            About
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a>
                            Services
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a>
                            Contact Us
                            <ChevromDown size = "24" color = "white"></ChevromDown>
                        </a>
                    </li>
                    <li>
                        <a>
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