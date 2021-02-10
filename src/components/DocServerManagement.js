import React from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const DocServerManagement = ({sections, section, setSection}) => {

    return(
        <div className={docStyles.docStyles}>
        <div>
            <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
        </div>
        <SimpleBar className = {docStyles.documentation}>
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
                        <span className = {docStyles.comment}># [optional] include the -n flag if you want to notify the user of their ban </span><br />
                        <span className = {docStyles.comment}># [optional] include the -m flag if you want to include a reason for the ban </span><br /><br />
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
                        <span className = {docStyles.comment}># [optional] include the -n flag if you want to notify the user of their kick </span><br />
                        <span className = {docStyles.comment}># [optional] include the -m flag if you want to include a reason for the kick </span><br /><br />
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

                {/*SETMAXWARNINGS COMMAND*/}
                <div className = {docStyles.subsection}>
                    <h3 className = {docStyles.commandHeading}>Setmaxwarnings</h3>
                    You can set the server's maximum amount of warnings a user can attain before they get banned. <br /><br />
                    <div>
                        To use this command just use the following format:
                    </div><br />

                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># sets the server's max amount of warnings before a user gets banned to n amount</span><br /><br />
                        ~setmaxwarnings n
                    </div><br />

                    <div>
                        Examples:
                    </div><br />

                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># sets the server's number of max warnings to 5</span><br /><br />
                        ~setmaxwarnings 5
                    </div><br />

                    <div>
                        Permissions: ADMINISTRATOR
                    </div>


                </div>
                {/*END SETMAXWARNINGS*/}

                <br />

                
                {/*UNBAN COMMAND*/}
                <div className = {docStyles.subsection}>
                    <h3 className = {docStyles.commandHeading}>Unban</h3>
                    Unbans a user from the server. <br /><br />
                    <div>
                        To use this command just use the following format:
                    </div><br />

                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># userId is the Discord ID given to the user</span><br /><br />
                        ~unban userId
                    </div><br />

                    <div>
                        Examples:
                    </div><br />

                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># unbans the users with id: 00000000000000000001</span><br /><br />
                        ~unban 00000000000000000001
                    </div><br />

                    <div>
                        Permissions: BAN_MEMBERS
                    </div>


                </div>
                {/*END SETMAXWARNINGS*/}

                <br />

                {/*WARN COMMAND SUBSECTION*/}
                <div className = {docStyles.subsection}>
                    <h3 className = {docStyles.commandHeading}>Warn</h3>
                        Warns a user in the server, if the user exceeds the max amount of warnings (default: 2) they will get banned.<br /><br />
                    <div>
                        To use this command just follow the following format:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br />
                        <span className = {docStyles.comment}># [optional] warning is the reason you are warning the user for </span><br /><br />
                        ~warn @user "warning"
                    </div>
                    <br />
                    <div>
                        Examples:
                    </div>
                    <br />
                    <div className = {docStyles.commandUsage}>
                        <span className = {docStyles.comment}># warn TOA5T for spamming chat</span><br /><br />
                        ~warn @TOA5T "spamming chat"<br /><br />
                        <span className = {docStyles.comment}># warn TOA5T</span><br /><br />
                        ~warn @TOA5T
                    </div>
                    <br />
                    <div>
                        Permissions: BAN_MEMBERS
                    </div>
                </div>
                {/*END KICK SUBSECTION*/}


            </div>
        </SimpleBar>
    </div>
    );
}

export default DocServerManagement;