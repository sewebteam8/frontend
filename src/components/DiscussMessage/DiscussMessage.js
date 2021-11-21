import React, { useState,useEffect,useRef} from 'react'
import { Redirect } from 'react-router';
import io from "socket.io-client";
import './DiscussMessage.css'
import Users from '../DiscussUsers/DiscussUsers'
import ChatBox from '../ChatBox/ChatBox';
function DiscussMessage() {
    const [user, setUser] = useState(null);
    const account = JSON.parse(localStorage.getItem('currentUser')).user;
    // if (account === undefined) {
    //     <Redirect to="/authorise" />
    //     console.log(account);
    // }
    // const socket=useRef() ;
    // useEffect(() => {
    //     socket.current = io('ws://localhost:9000');
    // }, []);
    const socket = io('ws://localhost:9000');
    console.log(socket);
    return (
        <div className="meesage-page-main-box">
            <div className="container">
                < div className = "row message-page-main-inner-box" >
                    {/* <div className="user-probile-box col-1">
                        <div className="user-img">
                            <img src="images/dummy_user.jpg" />
                        </div>
                        <p>Agela Grey</p>
                    </div> */}
                    <div className="users-box col-4">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            
                        {/* <div className="users-profile-div d-flex flex-row ">
                            <img src="images/dummy1_user.jpg" />
                            <div className="users-desc ">
                                <p className="name">Maris Mano</p>
                                <p className="users-collegename">raj rishi collge alwar Raj.</p>
                            </div>
                        </div>
                        <div className="users-profile-div d-flex flex-row ">
                            <img src="images/dummy1_user.jpg" />
                            <div className="users-desc ">
                                <p className="name ">Angela Grey</p>
                                <p className="users-collegename">B.S.R collge alwar Raj.</p>
                            </div>
                        </div> */}
                        <Users setUser={setUser} account={account} socket={socket}/>
                    </div>
                    <div className="messages-box col-8">
                        {/* <div className="current-user-conversation-profile d-flex flex-row">
                            <img src="images/dummy1_user.jpg" />
                            <p className="current-user-conversation-profile-name">Maris Mano</p>
                        </div>
                        <hr className="horizontal-line" /> */}
                        {
                           
                            user ? <ChatBox person={user} account={account} socket={ socket}/> : <p>raj</p>
                           
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscussMessage
