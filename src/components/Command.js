import React, { useEffect, useState } from 'react';
import docStyles from '../stylesheets/docs.module.css';
import 'simplebar/dist/simplebar.min.css';
import arrowRight from '../images/arrow-right.png';
import arrowDown from '../images/arrow-down.png';

const Command = ({commandName, description, usage, advancedDesc, advancedUsage, examples, permissions, display, setDisplay}) => {
    if(!permissions) permissions = "n/a"

    return(
        <div className = {docStyles.subsection}>
            <h3 className = {docStyles.commandHeading}>{commandName}</h3>
                {description}
            <br /><br />
            <div className = {docStyles.commandUsage}>
                {usage}
            </div>
            <br />

            {display && <img className = {docStyles.arrowImg} src = {arrowDown} onClick = {() => { setDisplay(!display)}} />}
            {!display && <img className = {docStyles.arrowImg} src = {arrowRight} onClick = {() => {setDisplay(!display)}} />}
            {display && <div>
                
                {advancedDesc && advancedUsage && <div>
                        <br />
                        <div>
                            {advancedDesc}
                        </div>
                        <br />
                        <div className = {docStyles.commandUsage}>
                            {advancedUsage}
                        </div>
                    </div>
                }

                {examples && <div>
                        <br />
                        <div>
                            Examples:
                        </div><br />
                        <div className = {docStyles.commandUsage}>
                            {examples}
                        </div>
                    </div>
                }
                <br />
                <div>
                    Permissions: {permissions}
                </div>
            </div>}
        </div>
    );
}

export default Command;