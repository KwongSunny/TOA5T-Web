import React, { useEffect, useState } from 'react';
import DocSidebar from '../components/DocSidebar.js';
import docStyles from '../stylesheets/docs.module.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import arrowRight from '../images/arrow-right.png';
import arrowDown from '../images/arrow-down.png';
import Command from '../components/Command.js';

const DocMusic = ({sections, section, setSection}) => {
    const [clearDisplay, setClearDisplay] = useState(false);
    const [joinDisplay, setJoinDisplay] = useState(false);
    const [leaveDisplay, setLeaveDisplay] = useState(false);
    const [loopDisplay, setLoopDisplay] = useState(false);
    const [pauseDisplay, setPauseDisplay] = useState(false);
    const [playDisplay, setPlayDisplay] = useState(false);
    const [queueDisplay, setQueueDisplay] = useState(false);
    const [resumeDisplay, setResumeDisplay] = useState(false);
    const [setmusicroleDisplay, setSetmusicroleDisplay] = useState(false);
    const [skipDisplay, setSkipDisplay] = useState(false);
    const [stopDisplay, setStopDisplay] = useState(false);
    const [volumeDisplay, setVolumeDisplay] = useState(false);

    return(
        <div className = {docStyles.docStyles}>
            <div>
                <DocSidebar sections = {sections} currentSection = {section} setSection = {setSection}/>
            </div>
            <SimpleBar className = {docStyles.documentation}>
                <div>
                    <h2 className = {docStyles.sectionHeading}>Music</h2>
                    Play all the audio you want! (supports Youtube links)

                    {/*CLEAR COMMAND*/}
                        <Command  
                            commandName="Clear"
                            description="Clears the queue."
                            usage= "~clear"
                            permissions= "MANAGE_ROLES"
                            display={clearDisplay}
                            setDisplay={setClearDisplay}
                        />
                    {/*END CLEAR*/}
                    <br />
                    {/*JOIN COMMAND*/}
                        <Command
                            commandName = "Join"
                            description = "Makes the bot join the channel."
                            usage = "~join"
                            permissions = "manage_music"
                            display = {joinDisplay}
                            setDisplay = {setJoinDisplay}
                        />
                    {/*END JOIN*/}

                    <br />

                    {/*LEAVE COMMAND*/}
                        <Command
                            commandName = "Leave"
                            description = "Makes the bot leave the channel."
                            usage = "~leave"
                            permissions = "manage_music"
                            display = {leaveDisplay}
                            setDisplay = {setLeaveDisplay}  
                        />
                    {/*END LEAVE*/}

                    <br />

                    {/*LOOP COMMAND*/}
                        <Command
                            commandName = "Loop"
                            description = "Toggles loop for the song."
                            usage = "~loop"
                            permissions = "manage_music"
                            display = {loopDisplay}
                            setDisplay = {setLoopDisplay}
                        />
                    {/*END LOOP*/}

                    <br />

                    {/*PAUSE COMMAND*/}
                        <Command
                            commandName = "Pause"
                            description = "Pauses the current song."
                            usage = "~pause"
                            permissions = "play_music"
                            display = {pauseDisplay}
                            setDisplay = {setPauseDisplay}
                        />
                    {/*END PAUSE*/}

                    <br />

                    {/*PLAY COMMAND*/}
                        <Command
                            commandName = "Play"
                            description = "Adds and or plays a youtube link."
                            usage = "~play youtubeLink"
                            advancedDesc = "You can also just play the queue if it's stopped or paused."
                            advancedUsage = "~play"
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># plays a video with the following link</span><br /><br />
                                    ~play https://www.youtube.com/watch?v=5qap5aO4i9A&ab&ab_channel=ChilledCow
                                </div>
                            }
                            permissions = "play_music"
                            display = {playDisplay}
                            setDisplay = {setPlayDisplay}
                        />
                    {/*END PLAY*/}

                    <br />

                    {/*QUEUE COMMAND*/}
                        <Command
                            commandName = "Queue"
                            description = "Displays a queue of the server."
                            usage = '~queue'
                            permissions = "n/a"
                            display = {queueDisplay}
                            setDisplay = {setQueueDisplay}

                        />
                    {/*END QUEUE*/}

                    <br />

                    {/*RESUME COMMAND*/}
                        <Command
                            commandName = "Resume"
                            description = "Resumes the queue."
                            usage = "~resume"
                            permissions = "play_music"
                            display = {resumeDisplay}
                            setDisplay = {setResumeDisplay}
                        />
                    {/*END RESUME*/}

                    <br />

                    {/*SETMUSICROLE COMMAND*/}
                        <Command
                            commandName = "Setmusicrole"
                            description = "Adds a music role to the server, with default music permissions. (play_music, manage_music)"
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># @role is a Discord role mention</span><br /><br />
                                    ~setmusicrole @role
                                </div>
                            }
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># Add @DJ to the music role</span><br /><br />
                                    ~setmusicrole @DJ
                                </div>
                            }
                            permissions = "ADMINISTRATOR"
                            display = {setmusicroleDisplay}
                            setDisplay = {setSetmusicroleDisplay}
                        />
                    {/*END SETMUSICROLE*/}

                    <br />

                    {/*SKIP COMMAND*/}
                        <Command
                            commandName = "Skip"
                            description = "Skip the current song in the queue."
                            usage = "~skip"
                            permissions = "play_music"
                            display = {skipDisplay}
                            setDisplay = {setSkipDisplay}
                        />
                    {/*END SKIP*/}

                    <br />

                    {/*STOP COMMAND*/}
                        <Command
                            commandName = "Stop"
                            description = "Stops the queue."
                            usage = "~stop"
                            permissions = "play_music"
                            display = {stopDisplay}
                            setDisplay = {setStopDisplay}
                        />
                    {/*END STOP*/}

                    <br />

                    {/*VOLUME COMMAND*/}
                        <Command
                            commandName = "Volume"
                            description = "Adjusts the volume of the bot globally. (default: 30)"
                            usage = {
                                <div>
                                    <span className = {docStyles.comment}># n is the new volume of the bot</span><br /><br />
                                    ~volume n
                                </div>
                            }
                            examples = {
                                <div>
                                    <span className = {docStyles.comment}># the volume of the bot is set to 100</span><br /><br />
                                    ~volume 100
                                </div>
                            }
                            permissions = "play_music"
                            display = {volumeDisplay}
                            setDisplay = {setVolumeDisplay}
                        />
                    {/*END VOLUME*/}

                    <br />

                </div>
            </SimpleBar>
        </div>
    );
}
export default DocMusic