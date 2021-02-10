import * as React from "react"
import Header from '../components/Header.js';
import styles from '../stylesheets/index.module.css';
import discordTransparent from '../images/discord-transparent.png';

// markup
const IndexPage = () => {
  return (
    <main style={styles}>
      <Header/>
      <div>
        <a href = "https://discord.com/oauth2/authorize?client_id=795736084327301160&scope=bot&permissions=8" className = {styles.discordButton}>
          <img className = {styles.discordLogo} src = {discordTransparent}/> Add to Discord
        </a>

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
