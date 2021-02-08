import React from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';

const DocRoleManagement = ({sections, section, setSection}) => {
    return(
        <div className={docStyles.docStyles}>
            <div>
                <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <div className = {docStyles.documentation}>
                <div>
                    <h2 className = {docStyles.sectionHeading}>Role Management</h2>
                    Tired of manually giving out users roles and colors? Let TOA5T do all the work for you!

                    <div className = {docStyles.subsection}>
                        <h3 className = {docStyles.commandHeading}>Reactionrole</h3>
                            With the <span>~reactionrole</span> command, you can let users pick their own roles just by sending out a single message.
                            This command creates a message post that users can react to in order to give out roles. <br /><br />
                        <div>
                            To use this command just follow the following format in whatever channel you want this post to be visible in:
                        </div>
                        <br />
                        <div className = {docStyles.commandUsage}>~reactionrole @role:reaction, @role2:reaction2...</div>
                        <br />@role is a Discord mention to that role 
                        <br />reaction is any emoji that you can use.
                    </div>
                    <br />
                    <div className = {docStyles.subsection}>
                        <h3 className = {docStyles.commandHeading}>Autorole</h3>
                            If instead you want to automatically give out roles to new members you can use the <span>~autorole</span> command. Any member that
                            joins the server will be given that role.

                            To use this command just follow the following format:
                        <br /><br />
                        <div className = {docStyles.commandUsage}>~autorole @role</div>
                        <br />@role is a Discord mention to that role.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocRoleManagement;