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
                       <Link to="/examrequestform">find exam budyy</Link> 
                    </div>
                    <div className = "col-1">
                    </div>
                    < div className = "col-3 buddy-card" >
                        <Link to="/findintern">find Intern</Link>
                    </div>
                     <div className="col-1 ">
                    </div>
                    < div className = "col-3  buddy-card" >
                         <Link to="/examrequestform">find your collegemate</Link>
                    </div>
                   
                
                </div>
                < div className = "row mt-5" >
                    <div className="col-3 buddy-card">
                         <Link to="/findroompartner">Find your room partner</Link>
                    </div>
                    < div className = "col-1  " >
                    </div>
                    < div className = "col-3 buddy-card" >
                         <Link to="/examrequestform">Find your project partner</Link>
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
