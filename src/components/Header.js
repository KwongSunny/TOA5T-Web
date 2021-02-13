import React, { useEffect } from 'react';
import {Link} from 'gatsby';
import styles from '../stylesheets/componentStyles.module.css';
import toastIcon from '../images/toast-icon.png';

function Header(props){
    return (
        <div className = {styles.Header}>
            <div className = {styles.headerLeft}>
                <img className = {styles.toastIcon} src = {toastIcon}/>
                <div style = {{marginTop: 'auto'}}>TOA5T</div>
            </div>
            <div className = {styles.headerLinks}>
                <Link to="/">Home</Link>
                <Link to='/Docs'>Commands</Link>
                <a href = 'https://github.com/KwongSunny/PixelBot'>Github</a>
                <a href = 'https://discord.gg/2wJA6N2m3V'>Support</a>
            </div>
        </div>
    )
}

export default Header;