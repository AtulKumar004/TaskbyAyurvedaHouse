import React from 'react';
import "./Navbar.css";
import logo from "./logo.jpg"
function Navbar() {
    return (
        <>
            <div className="nav_container w-full h-14 bg-white shadow-lg flex items-center pl-1 pr-1">

                <div className="logo w-1/5  h-12 flex items-center justify-start pl-4">
                    <div className="logo w-12 h-12 rounded-full   ">
                        <img  className = "rounded-full h-12 "  src= {logo} alt="" />
                    </div>
                </div>


                <div className="nav_comp w-3/5  h-12 flex justify-center">
                    <ul className='sub-navbar-features w-3/4 '>

                        <li className='sub-navbar-item'>
                            

                                <div className='sub-navbar-item-logo '>
                                    <span className="material-symbols-outlined">
                                    live_tv
                                    </span>


                                </div>

                            <span tital="Live">Live</span> 
                            
                        </li>


                        <li className='sub-navbar-item'>


                            <div className='sub-navbar-item-logo '>
                                <span className="material-symbols-outlined">
                                    card_membership
                                </span>


                            </div>

                            <span tital="Membership">Membership</span>

                        </li>


                        <li className='sub-navbar-item'>


                            <div className='sub-navbar-item-logo '>
                                <span className="material-symbols-outlined">
                                    lightbulb
                                </span>


                            </div>

                            <span tital="Plans">Plans</span>

                        </li>


                        <li className='sub-navbar-item'>


                            <div className='sub-navbar-item-logo '>
                                <span className="material-symbols-outlined">
                                    grid_view
                                </span>


                            </div>

                            <span tital="More">More</span>

                        </li>


                        
                    </ul>
                </div>
                

                    <div className="logo w-1/5   h-12 flex items-center justify-end pr-4">

                        <div className="logo flex items-center ">
                            <span class="material-symbols-outlined mr-2">
                                person
                            </span>
                            <span>Login</span>
                        </div>
                    </div>
                    
                
            </div>
        </>
    )
}



export default Navbar



