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

                    {/*AUTOROLE COMMAND*/}
                    <div className = {docStyles.subsection}>
                        <h3 className = {docStyles.commandHeading}>Autorole</h3>
                            If instead you want to automatically give out roles to new members you can use the <span>~autorole</span> command. Any member that
                            joins the server will be given that role.
                        <div>
                            To use this command just follow the following format:
                        </div>
                        <br />
                        <div className = {docStyles.commandUsage}>~autorole @role</div>
                        <br />@role is a Discord mention to that role.
                    </div>
                    {/*END AUTOROLE*/}
                    
                    <br />
                    
                    {/*REACTIONROLE COMMAND*/}
                    <div className = {docStyles.subsection}>
                        <h3 className = {docStyles.commandHeading}>Reactionrole</h3>
                            With the ~reactionrole command, you can let users pick their own roles just by sending out a single message.
                            This command creates a message post that users can react to in order to give out roles. <br /><br />
                        <div>
                            To use this command just follow the following format in whatever channel you want this post to be visible in:
                        </div>
                        <br />
                        <div className = {docStyles.commandUsage}>
                            <span className = {docStyles.comment}># @role is a Discord mention to that role</span><br />
                            <span className = {docStyles.comment}># reaction is any discord emoji</span><br /><br />
                            ~reactionrole @role:reaction, @role2:reaction2...
                        </div>
                        <br />
                        <div>
                            Examples:
                        </div>
                        <br />
                        <div className = {docStyles.commandUsage}>
                            <span className = {docStyles.comment}># Create a reaction post which when reacted to gives out either member or guest role</span><br /><br />
                            ~reactionrole @member:🔴, @guest:🔵
                        </div>
                        <br />
                        <div>
                        Permissions: MANAGE_ROLES
                        </div>
                    </div>
                    {/*END REACTIONROLE*/}

                    <br />
                </div>
            </div>
        </div>
    );
}

export default DocRoleManagement;