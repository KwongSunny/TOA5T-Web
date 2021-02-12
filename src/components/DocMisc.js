import React, { useEffect, useState } from 'react';
import DocSidebar from './DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Command from './Command.js';

const DocMisc = ({sections, section, setSection}) => {

    return(
        <div className = {docStyles.docStyles}>
            <div>
                <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <SimpleBar className = {docStyles.documentation}>
                <div>
                    <h2 className = {docStyles.sectionHeading}>Miscallaneous</h2>
                    Randomly added features that you might like!




                </div>
            </SimpleBar>
        </div>  
    );  
}

export default DocMisc;