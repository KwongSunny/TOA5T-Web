import * as React from "react"
import Header from '../components/Header.js';
import styles from '../stylesheets/index.module.css';
import discordTransparent from '../images/discord-transparent.png';
import toastImg from '../images/toast-icon.png';
import alwaysAvailImg from '../images/always-avail.png';
import musicNoteImg from '../images/music-note.png';
import easyImg from '../images/easy-to-use.png';
import openDoorsImg from '../images/open-doors.png';

// markup
const IndexPage = () => {
  return (
    <main>
      <Header/>
      <div>
        <div className = {styles.middle}>
          <div style = {{textAlign:"center"}}>
            <div>
              <img className = {styles.bigToastImg} src = {toastImg} />
            </div>
            <div>
              <a href = "https://discord.com/oauth2/authorize?client_id=795736084327301160&scope=bot&permissions=8" className = {styles.discordButton}>
                <img className = {styles.discordLogo} src = {discordTransparent}/> 
                <span className = {styles.discordButtonText}> Add to Discord</span>
              </a>
            </div>
          </div>
        </div>

        <div className = {styles.footer}>
          <div className = {styles.footerSection}>
            <img className = {styles.footerImg} src = {easyImg}/><br />
            Easy to use!
          </div>
          <div className = {styles.footerSection}>
            <img className = {styles.footerImg}  src = {openDoorsImg}/><br />
            Open source!
          </div>
          <div className = {styles.footerSection}>
            <img className = {styles.footerImg}  src = {alwaysAvailImg}/><br />
            Always available!
          </div>
          <div className = {styles.footerSection}>
            <img className = {styles.footerImg} src = {musicNoteImg}/><br />
            Music playability!
          </div>
        </div>


      </div>
    </main>
  )
}

export default IndexPage
