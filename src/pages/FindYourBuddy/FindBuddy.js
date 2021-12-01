import React from 'react'
import { Link } from 'react-router-dom'
import './FindBuddy.css'
function FindBuddy() {
    return (
        <div className="find-buddy-main-page-container">
            <h1 className="buddy-page-head">Find your buddy here</h1>
            <p className="buddy-page-desc">you can find for you room partner, exam paper companion,Intern ,your college buddy,project partener</p>
            < div className = "container " >
                < div className = "row mt-5" >
                    <div className="col-3 buddy-card">
                        <p className='buddy-card-desc'>Find your exam mate</p>
                        <img src="images/examfind.webp" alt="exam-mate" />
                        <button class="btn"><Link to="/examrequestform">GO</Link></button>
                    </div>
                    <div className = "col-1">
                    </div>
                    < div className="col-3 buddy-card" >
                        <p className='buddy-card-desc'>Find your Intern</p>
                        <img src="images/internfind.webp" alt="intern" />
                        <button class="btn"><Link to="/findintern">GO</Link></button>
                        
                    </div>
                     <div className="col-1 ">
                    </div>
                    < div className="col-3  buddy-card" >
                         <p className='buddy-card-desc'>Find your college buddy</p>
                         <img src='images/collagematefind.webp'/>
                         <button class="btn"><Link to="/examrequestform">GO</Link></button>
                    </div>
                   
                
                </div>
                < div className = "row mt-5" >
                    <div className="col-3 buddy-card">
                         <p className='buddy-card-desc'>find your room partner</p>
                         <img src="images/roompartner.webp" alt="Avatar" className="avatar" />
                        <button class="btn"><Link to="/findroompartner">GO</Link></button>
                    </div>
                    < div className = "col-1  " >
                    </div>
                    < div className="col-3 buddy-card" >
                         <p className='buddy-card-desc'>find your project partner</p>
                        <img src="images/projectpartner.webp" alt="Avatar" className="avatar" />
                        <button class="btn"><Link to="/examrequestform">GO</Link></button>
                       
                    </div>
                     <div className="col-1 ">
                        
                    </div>
                    < div className = "col-3  buddy-card" >
                       
                    </div>
                   
                
                </div>
            </div>
                
           
        </div>
    )
}

export default FindBuddy
