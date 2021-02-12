import React, { useEffect, useState } from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Command from './Command.js';


const DocRoleManagement = ({sections, section, setSection}) => {
    const [autoroleDisplay, setAutoroleDisplay] = useState(false);
    const [reactionroleDisplay, setReactionroleDisplay] = useState(false);

    useEffect(() => {

    }, [autoroleDisplay, reactionroleDisplay]);

    return(
        <div className={docStyles.docStyles}>
            <div>
                <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <SimpleBar className = {docStyles.documentation}>
                <div>
                    <h2 className = {docStyles.sectionHeading}>Role Management</h2>
                    Tired of manually giving out users roles and colors? Let TOA5T do all the work for you!

                    {/*AUTOROLE COMMAND*/}
                        <Command
                            commandName = "Autorole"
                            description = "Gives the server a default role, new members will automatically be given this role."
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># @role is a Discord mention to that role.</span><br /><br />
                                    ~autorole @role
                                </div>
                            }
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># sets the server's default role to @member</span><br /><br />
                                    ~autorole @member
                                </div>
                            }
                            permissions = "MANAGE_ROLES"
                            display = {autoroleDisplay}
                            setDisplay = {setAutoroleDisplay}
                        />
                    {/*END AUTOROLE*/}
                    
                    <br />

                    {/*REACTIONROLE COMMAND*/}
                        <Command
                            commandName = "Reactionrole"
                            description = "Creates a reaction post which grants users roles in the server."
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># @role is a Discord mention to that role</span><br />
                                    <span className = {docStyles.comment}># reaction is any discord emoji</span><br /><br />
                                    ~reactionrole @role:reaction, @role2:reaction2...
                                </div>
                            }
                            advancedDesc = "For more advanced usages, you can also reassign reactionrole posts using another message's Id."
                            advancedUsage = {
                                <div>
                                    <span className = {docStyles.comment}># messageId is the Id of the message to be set as the reactionrole post</span><br /><br />
                                    ~reactionrole messageId
                                </div>
                            }
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># Create a reaction post which when reacted to gives out either member or guest role</span><br /><br />
                                    ~reactionrole @member:🔴, @guest:🔵 <br /><br />

                                    <span className = {docStyles.comment}># Sets the reactionrole post to the message with Id: 00000000000000000001</span><br /><br />
                                    ~reactionrole 00000000000000000001
                                </div>
                            }
                            permissions = "MANAGE_ROLES"
                            display = {reactionroleDisplay}
                            setDisplay = {setReactionroleDisplay}
                        />
                    {/*END REACTIONROLE*/}

                    <br />
                </div>
            </SimpleBar>
        </div>
    );
}

export default DocRoleManagement;