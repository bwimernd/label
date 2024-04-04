// Main.js

import Home from "../Home/Home.js";
import IntUser from "../Products/Interactive/Usability.js"
import StatUser from "../Products/Static/Usability.js"
import Tutorial from "../Products/Tutorial/Tutorial.js"
import IntA from "../Products/Interactive/ProductA.js"
import IntB from "../Products/Interactive/ProductB.js"
import IntC from "../Products/Interactive/ProductC.js"
import IntRank from "../Products/Interactive/Ranking.js"
import StatA from "../Products/Static/ProductA.js"
import StatB from "../Products/Static/ProductB.js"
import StatC from "../Products/Static/ProductC.js"
import StatRank from "../Products/Static/Ranking.js"

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

function Main() {
    return (
        // All my routes for navigation, including a header and footer outside of the routes

        //Protected routes so that only authenticated users can access this any of the pages
        <Router>
            
            <main>
                <Routes>
                
                <Route path="/int-usability" element={<IntUser />} />
                <Route path="/intA" element={<IntA />} />
                <Route path="/intB" element={<IntB />} />
                <Route path="/intC" element={<IntC />} />
                <Route path="/statA" element={<StatA />} />
                <Route path="/statB" element={<StatB />} />
                <Route path="/statC" element={<StatC />} />
                <Route path="/intRank" element={<IntRank />} />
                <Route path="/statRank" element={<StatRank />} />
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
