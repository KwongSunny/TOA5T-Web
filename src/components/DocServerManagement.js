import React, { useEffect, useState } from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Command from '../components/Command.js';

const DocServerManagement = ({sections, section, setSection}) => {

    const [banDisplay, setBanDisplay] = useState(false);
    const [kickDisplay, setKickDisplay] = useState(false); 
    const [setmaxwarningsDisplay, setSetmaxwarningsDisplay] = useState(false);
    const [unbanDisplay, setUnbanDisplay] = useState(false);
    const [warnDisplay, setWarnDisplay] = useState(false);

    useEffect(() => {

    }, [banDisplay, kickDisplay, setmaxwarningsDisplay, unbanDisplay, warnDisplay]);

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
                    <Command
                        commandName = "Ban"
                        description = "Bans a user from the server"
                        usage = {
                            <div>
                                <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br /><br />
                                ~ban @user
                            </div>}
                        advancedDesc = "For more advanced usages, you can also use optional command flags:"
                        advancedUsage = {
                            <div>
                                <span className = {docStyles.comment}># [optional] include the -n flag if you want to notify the user of their ban </span><br />
                                <span className = {docStyles.comment}># [optional] include the -m flag if you want to include a reason for the ban </span><br /><br />
                                ~ban @user ( -n / -m "reason" )<br />
                            </div>}
                        examples = {
                            <div>
                                <span className = {docStyles.comment}># ban TOA5T for spamming chat without notifying the user</span><br /><br />
                                ~ban @TOA5T -m "spamming chat"<br /><br />
                                <span className = {docStyles.comment}># ban TOA5T for spamming chat as well as notify them</span><br /><br />
                                ~ban @TOA5T -n -m "spamming chat"
                            </div>}
                        permissions = "BAN_MEMBERS"
                        display = {banDisplay}
                        setDisplay = {setBanDisplay}
                    />
                {/*END BAN SUBSECTION*/}
                <br />
                
                {/*KICK COMMAND SUBSECTION*/}
                    <Command
                        commandName = "Kick"
                        description = "Kicks a user from the server"
                        usage = {
                            <div>
                                <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br /><br />
                                ~kick @user
                            </div>}
                        advancedDesc = "For more advanced usages, you can also use optional command flags:"
                        advancedUsage = {
                            <div>
                                <span className = {docStyles.comment}># [optional] include the -n flag if you want to notify the user of their kick </span><br />
                                <span className = {docStyles.comment}># [optional] include the -m flag if you want to include a reason for the kick </span><br /><br />
                                ~kick @user ( -n / -m "reason" )<br />
                            </div>}
                        examples = {
                            <div>
                                <span className = {docStyles.comment}># ban TOA5T for spamming chat without notifying the user</span><br /><br />
                                ~kick @TOA5T -m "spamming chat"<br /><br />
                                <span className = {docStyles.comment}># ban TOA5T for spamming chat as well as notify them</span><br /><br />
                                ~kick @TOA5T -n -m "spamming chat"
                            </div>}
                        permissions = "KICK_MEMBERS"
                        display = {kickDisplay}
                        setDisplay = {setKickDisplay}
                    />
                {/*END KICK SUBSECTION*/}

                <br />

                {/*SETMAXWARNINGS COMMAND*/}
                    <Command
                        commandName = "Setmaxwarnings"
                        description = "You can set the server's maximum amount of warnings a user can attain before they get banned."
                        usage = {
                            <div>
                                <span className = {docStyles.comment}># n is the desired max amount of warnings</span><br /><br />
                                ~setmaxwarnings n
                            </div>
                        }
                        examples = {
                            <div>
                                <span className = {docStyles.comment}># sets the server's number of max warnings to 5</span><br /><br />
                                ~setmaxwarnings 5
                            </div>
                        }
                        permissions = "ADMINISTRATOR"
                        display = {setmaxwarningsDisplay}
                        setDisplay = {setSetmaxwarningsDisplay}
                    />
                {/*END SETMAXWARNINGS*/}

                <br />

                {/*UNBAN COMMAND*/}
                    <Command
                        commandName = "Unban"
                        description = "Unbans a user from the server."
                        usage = {
                            <div>
                                <span className = {docStyles.comment}># userId is the Discord ID given to the user</span><br /><br />
                                ~unban userId
                            </div>
                        }
                        examples = {
                            <div>
                                <span className = {docStyles.comment}># unbans the users with id: 00000000000000000001</span><br /><br />
                                ~unban 00000000000000000001
                            </div>
                        }
                        permissions = "BAN_MEMBERS"
                        display = {unbanDisplay}
                        setDisplay = {setUnbanDisplay}
                    />
                {/*END SETMAXWARNINGS*/}

                <br />

                {/*WARN COMMAND SUBSECTION*/}
                    <Command
                        commandName = "Warn"
                        description = "Warns a user in the server, if the user exceeds the max amount of warnings (default: 2) they will get banned."
                        usage = {
                            <div>
                                <span className = {docStyles.comment}># @user is a Discord mention to that user </span><br />
                                <span className = {docStyles.comment}># [optional] warning is the reason you are warning the user for </span><br /><br />
                                ~warn @user "warning"
                            </div>
                        }
                        examples = {
                            <div>
                                <span className = {docStyles.comment}># warn TOA5T for spamming chat</span><br /><br />
                                ~warn @TOA5T "spamming chat"<br /><br />
                                <span className = {docStyles.comment}># warn TOA5T</span><br /><br />
                                ~warn @TOA5T
                            </div>
                        }
                        permissions = "BAN_MEMBERS"
                        display = {warnDisplay}
                        setDisplay = {setWarnDisplay}
                    />
                {/*END KICK SUBSECTION*/}


            </div>
        </SimpleBar>
    </div>
    );
}

export default DocServerManagement;