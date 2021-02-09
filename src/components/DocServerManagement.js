import React from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';

const DocServerManagement = ({sections, section, setSection}) => {

    return(
        <div className={docStyles.docStyles}>
        <div>
            <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
        </div>
        <div className = {docStyles.documentation}>
            <div>
                <h2 className = {docStyles.sectionHeading}>Server Management</h2>
                Manage your server with our suite of management commands!

                {/*BAN COMMAND SUBSECTION*/}
                <div className = {docStyles.subsection}>
                    <h3 className = {docStyles.commandHeading}>Ban</h3>
                        Bans a user in the server<br /><br />
                    <div>
                        To use this command just follow the following format:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br /><br />
                        ~ban @user
                    </div>

                    <br />
                    <div>
                        For more advanced usages, you can also use optional command flags:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># include the -n flag if you want to notify the user of their ban </span><br />
                        <span className = {docStyles.comment}># include the -m flag if you want to include a reason for the ban </span><br /><br />
                        ~ban @user ( -n / -m "reason" )<br />
                    </div>
                    <br />
                    <div>
                        Examples:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># ban TOA5T for spamming chat without notifying the user</span><br /><br />
                        ~ban @TOA5T -m "spamming chat"<br /><br />
                        <span className = {docStyles.comment}># ban TOA5T for spamming chat as well as notify them</span><br /><br />
                        ~ban @TOA5T -n -m "spamming chat"
                    </div>
                    <br />
                    <div>
                        Permissions: BAN_MEMBERS
                    </div>
                </div>
                {/*END BAN SUBSECTION*/}

                <br />
                
                {/*KICK COMMAND SUBSECTION*/}
                <div className = {docStyles.subsection}>
                    <h3 className = {docStyles.commandHeading}>Kick</h3>
                        Kicks a user in the server<br /><br />
                    <div>
                        To use this command just follow the following format:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br /><br />
                        ~kick @user
                    </div>

                    <br />
                    <div>
                        For more advanced usages, you can also use optional command flags:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># include the -n flag if you want to notify the user of their kick </span><br />
                        <span className = {docStyles.comment}># include the -m flag if you want to include a reason for the kick </span><br /><br />
                        ~kick @user ( -n / -m "reason" )<br />
                    </div>
                    <br />
                    <div>
                        Examples:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># kick TOA5T for spamming chat without notifying the user</span><br /><br />
                        ~kick @TOA5T -m "spamming chat"<br /><br />
                        <span className = {docStyles.comment}># kick TOA5T for spamming chat as well as notify them</span><br /><br />
                        ~kick @TOA5T -n -m "spamming chat"
                    </div>
                    <br />
                    <div>
                        Permissions: KICK_MEMBERS
                    </div>
                </div>
                {/*END KICK SUBSECTION*/}

                <br />






            </div>
        </div>
    </div>
    );
}

export default DocServerManagement;