import * as React from "react"
import Header from '../components/Header.js';
import styles from '../stylesheets/index.module.css';

// markup
const IndexPage = () => {
  //this variable will contain a string determining what 'page' to render
  const [page, setPage] = React.useState('docs');
  
  console.log(setPage);
  
  //home page (invite to server, general description)
  if(page === 'home'){
    return (
      <main style={styles}>
        <Header page = {page} setPage={setPage}/>
      
        <a href = "" className = {styles.discordButton}>Discord</a>
        
  
  
  
  
  
      </main>
    )
  }
  else if(page === 'docs'){
    return(
      <Header page = {page} setPage={setPage}/>
    )
  }
}

export default IndexPage
