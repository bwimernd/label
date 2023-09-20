// Main.js

import Home from "../Home/Home.js";
import IntUser from "../Products/Interactive/Usability.js"
import StatUser from "../Products/Static/Usability.js"
import Tutorial from "../Products/Tutorial/Tutorial.js"


import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

function Main() {
    return (
        // All my routes for navigation, including a header and footer outside of the routes

        //Protected routes so that only authenticated users can access this any of the pages
        <Router>
            
            <main>
                <Routes>
                
                <Route path="/int-usability" element={<IntUser />} />
                <Route path="/stat-usability" element={<StatUser />} />
                <Route path="/tutorial" element={ <Tutorial /> }/>
                <Route path="/" element={ <Home /> }/>
                <Route path="*" element={<Navigate to="/" replace />} />
      
                    
                </Routes>
            </main>
        </Router>
    );
};

export default Main;
