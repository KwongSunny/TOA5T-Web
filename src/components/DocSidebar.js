import React, { useEffect } from 'react';
import docStyles from '../stylesheets/docs.module.css';

function DocSidebar({sections, currentSection, setSection}){
    return (    
        <div className = {docStyles.docSidebar}>
            {sections.map(sec => {
                if(currentSection === sec)
                    return <div><button style = {{color:"white"}} onClick = {() => {setSection(sec)}} className = {docStyles.sectionButton}>{sec}</button></div>
                else
                    return <div><button onClick = {() => {setSection(sec)}} className = {docStyles.sectionButton}>{sec}</button></div>
            })}

        </div>
    )
}

export default DocSidebar;