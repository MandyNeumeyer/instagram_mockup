import React from 'react';
import Logo from '../../img/instagram.jpeg';
import {IoHomeOutline, IoCompassOutline, IoPaperPlaneOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import ProfileS from '../../img/hawaiian.jpeg';
import { IconContext } from 'react-icons';


function Header () {
    return (
        <div className="header-container">
            <div className="logo-box">
            <img className="logo" src={Logo} alt="Instagram Logo"/>
            </div>
            <div className="search-box">
                <input type="text" placeholder="🔍 Search"/>
            </div>
            <div className="icons-box">
            <IconContext.Provider value={{className: 'react-icons'}}>
            <IoHomeOutline/>
            <IoPaperPlaneOutline/>
            <IoCompassOutline/>
            <AiOutlineHeart/>
            </IconContext.Provider>
            <img src={ProfileS} alt=""/>
            </div>
        </div>
    )
}

export default Header
