import * as React from "react"
import Header from '../components/Header.js';
import styles from '../stylesheets/index.module.css';
import discordTransparent from '../images/discord-transparent.png';
import toastImg from '../images/toast-icon.png'; 

// markup
const IndexPage = () => {
  return (
    <main style={styles}>
      <Header/>
      <div>
        <div className = {styles.middle}>
          <div>
            An ever-updating Discord bot with easy to use, and easy to manage commands! Use TOA5T's feature rich services to enhance YOUR server!
          </div>

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
          <div>
            Easy to use commands!
          </div>
          <div>
            Manage your server with ease!
          </div>
          <div>
            Music playability!
          </div>
        </div>


      </div>
    </main>
  )
}

export default IndexPage
