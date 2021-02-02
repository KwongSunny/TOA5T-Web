import * as React from "react"
import Header from '../components/Header.js';
import styles from '../stylesheets/index.module.css';

// markup
const IndexPage = () => {
  return (
    <main style={styles}>
      <Header/>
    
      <a href = "https://discord.com/oauth2/authorize?client_id=795736084327301160&scope=bot&permissions=8" className = {styles.discordButton}>Discord</a>
      





    </main>
  )
}

export default IndexPage
