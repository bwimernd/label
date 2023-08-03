// Main.js

import Home from "../Home/Home.js";
import Header from "../Header/Header.js";
import IntA from "../Products/Interactive/ProductA.js"
import IntB from "../Products/Interactive/ProductB.js"
import IntC from "../Products/Interactive/ProductC.js"
import StatA from "../Products/Static/ProductA.js"
import StatB from "../Products/Static/ProductB.js"
import StatC from "../Products/Static/ProductC.js"


import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

function Main() {
    return (
        // All my routes for navigation, including a header and footer outside of the routes

        //Protected routes so that only authenticated users can access this any of the pages
        <Router>
            
            <main>
                <Routes>
                <Route path="/int-A" element={ <IntA /> } />
                <Route path="/int-B" element={ <IntB /> }/>
                <Route path="/int-C" element={<IntC />} />
                <Route path="/stat-A" element={<StatA />} />
                <Route path="/stat-B" element={<StatB />} />
                <Route path="/stat-C" element={ <StatC/>} />
                <Route path="/" element={ <Home /> }/>
                <Route path="*" element={<Navigate to="/" replace />} />
      
                    
                </Routes>
            </main>
        </Router>
    );
};

export default Main;
