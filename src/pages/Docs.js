import React, {useEffect, useState} from 'react';
import Header from '../components/Header.js';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import styles from '../stylesheets/index.module.css';
import DocRoleManagement from '../components/DocRoleManagement.js';
import DocServerManagement from '../components/DocServerManagement.js';

const Docs = (props) => {

  const [section, setSection] = useState('Setting Up');
  const sections = ['Setting Up', 'Server Management', 'Role Management', 'Music', 'Miscallaneous'];

  useEffect(() => {

  },[section]);

  if(section === 'Setting Up'){
    return(
      <main style={styles}>
        <div className = {styles.window}>
          <Header />
          <div className={docStyles.docStyles}>
            <div>
              <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <div className = {docStyles.documentation}>
              <div>
                <h3 className = {docStyles.sectionHeading}>Getting Started</h3>
                You haven't invited TOA5T bot to your server yet? What are you doing?!
                Use the link below to invite TOA5T!
        
                <a style = {{display: "block"}} href = "https://discord.com/oauth2/authorize?client_id=795736084327301160&scope=bot&permissions=8">Invite Me!</a>



              </div>
              
            </div>
          </div>
        </div>  
      </main>
    );
  }
  else if(section === 'Server Management'){
    return(
      <main style={styles}>
        <div className = {styles.window}>
          <Header />
          <DocServerManagement sections = {sections} section = {section} setSection = {setSection}/>
        </div>  
      </main>
    );
  }
  else if(section === 'Role Management'){
    return(
      <main style={styles}>
        <div className = {styles.window}>
          <Header />
          <DocRoleManagement sections = {sections} section = {section} setSection = {setSection}/>
        </div>  
      </main>
    );
  }
  else if(section === 'Music'){
    return(
      <main>

      </main>
    );
  }
  else if(section === 'Miscallaneous'){
    return(
      <main>

      </main>
    );
  }
}

export default Docs;