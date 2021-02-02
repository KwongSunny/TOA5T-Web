import React, {useState} from 'React';
import Header from '../components/Header.js';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import styles from '../stylesheets/index.module.css';

const Docs = (props) => {
  return(
      <main style={styles}>
        <div className = {styles.window}>
          <Header />
          <div className={docStyles.docStyles}>
            <div><DocSidebar /></div>
            <div>Test</div>
          </div>
        </div>  
    </main>
  )
}

export default Docs;