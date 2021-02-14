import React, { useEffect, useState } from 'react';
import DocSidebar from './DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Command from './Command.js';

const DocMisc = ({sections, section, setSection}) => {
    const [getprefixDisplay, setGetprefixDisplay] = useState(false);
    const [helpDisplay, setHelpDisplay] = useState(false);
    const [infoDisplay, setInfoDisplay] = useState(false);
    const [randomDisplay, setRandomDisplay] = useState(false);
    const [resetPrefixDisplay, setResetprefixDisplay] = useState(false);
    const [setPrefixDisplay, setSetprefixDisplay] = useState(false);

    return(
        <div className = {docStyles.docStyles}>
            <div>
                <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <SimpleBar className = {docStyles.documentation}>
                <div>
                    <h2 className = {docStyles.sectionHeading}>Miscellaneous</h2>
                    Randomly added features that you might like!

                    {/*GETPREFIX COMMAND*/}
                        <Command
                            commandName = "Getprefix"
                            description = "Gets TOA5T's prefix for the server. This will always use the default prefix ~."
                            usage = "~getprefix"
                            display = {getprefixDisplay}
                            setDisplay = {setGetprefixDisplay}
                        />
                    {/*END GETPREFIX*/}

                    <br />

                    {/*HELP COMMAND*/}
                        <Command
                            commandName = "Help"
                            description = "Gets a list of commands."
                            usage = "~help"
                            display = {helpDisplay}
                            setDisplay = {setHelpDisplay}
                        />
                    {/*END HELP*/}

                    <br />

                    {/*INFO COMMAND*/}
                    <Command
                            commandName = "Info"
                            description = "Gets information about the bot."
                            usage = "~info"
                            display = {infoDisplay}
                            setDisplay = {setInfoDisplay}
                        />
                    {/*END INFO*/}

                    <br />

                    {/*RANDOM COMMAND*/}
                        <Command
                            commandName = "Random"
                            description = "A handy random number generator."
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># returns a number between 1 and n</span><br /><br />
                                    ~random n
                                </div>
                            }
                            advancedDesc = "You can also use random in a specific range, list, and weighted list."
                            advancedUsage = {
                                <div>
                                    <span className = {docStyles.comment}># gives a random number between n and m</span><br /><br />
                                    ~random n m <br /><br />
                                    <span className = {docStyles.comment}># gives a random item in the list, separated by commas</span><br /><br />
                                    ~random item1, item2, item3 <br /><br />
                                    <span className = {docStyles.comment}># similar to the command above, but each item can be given a weight; the higher the number, the more likely</span><br /><br />
                                    ~random item1:weight, item2:weight, item3:weight <br /><br />
                                </div>
                            }
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># gives a random number between 3 and 6</span><br /><br />
                                    ~random 3 6 <br /><br />
                                    <span className = {docStyles.comment}># gives either red, blue or green</span><br /><br />
                                    ~random red, blue, green <br /><br />
                                    <span className = {docStyles.comment}># similar to the command above, but each item is given a different weight; the higher the number, the more likely</span><br /><br />
                                    ~random red:3, blue:1, green:5 <br /><br />
                                </div>
                            }
                            display = {randomDisplay}
                            setDisplay = {setRandomDisplay}

                        />
                    {/*END RANDOM*/}

                    <br />

                    {/*RESETPREFIX COMMAND*/}
                        <Command
                            commandName = "Resetprefix"
                            description = "Resets TOA5T's prefix to ~."
                            usage = "~resetprefix"
                            display = {resetPrefixDisplay}
                            setDisplay = {setResetprefixDisplay}
                        />
                    {/*END RESETPREFIX*/}

                    <br />

                    {/*SETPREFIX COMMAND*/}
                        <Command
                            commandName = "Setprefix"
                            description = "Gives TOA5T a custom prefix."
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># newPrefix is whatever character(s) you want the new custom prefix to be</span><br /><br />
                                    ~setprefix newPrefix
                                </div>
                            }
                            permissions = "ADMINISTRATOR"
                            display = {setPrefixDisplay}
                            setDisplay = {setSetprefixDisplay}
                        />
                    {/*END SETPREFIX*/}

                    <br />


                </div>
            </SimpleBar>
        </div>  
    );  
}

export default DocMisc;