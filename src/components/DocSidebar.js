import React, { useEffect } from 'react';
import styles from '../stylesheets/docs.module.css';

function DocSidebar(){
    const [subsection, setSubsection] = React.useState();

    const subsections = ['Setting Up', 'Role Management', 'Music', 'Miscellaneous'];


    return (    
        <div className = {styles.docSidebar}>
            {subsections.map(section => {return <div><button className = {styles.sectionButton}>{section}</button></div>})}

        </div>
    )
}

export default DocSidebar;