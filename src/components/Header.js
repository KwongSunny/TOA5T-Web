import React, { useEffect } from 'react';
import styles from '../stylesheets/componentStyles.module.css';

function Header({page, setPage}){



    useEffect(() => {

    }, [page])

    return (
        <div className = {styles.Header}>
            <div>
                <img src = ''/>
                TOA5T
            </div>
            <div className = {styles.headerLinks}>
                <div onClick = {() => setPage('home')}>Home</div> 
                <div>Docs</div>
                <a className = {styles.githubLink} href = "https://github.com/KwongSunny/PixelBot">Github</a> 
                <span>Support</span>
            </div>
        </div>
    )
}

export default Header;