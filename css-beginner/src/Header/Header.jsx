import React from "react";
import ReactDOM from 'react-dom';
import "./styles.css"
import {Link} from 'react-router-dom';

//const [pageSelected,setPageSelected] = useState(0); 

const Header = ({ setCurrentPage }) => {
    return ( 
        <div className="top-pannel">
            <div className="menu-button">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            <div className="navbar">
                <Link 
                to="/Pages/Home/Home" 
                className="navbar-button" 
                title="Home"
                onClick={() => setCurrentPage('Home')} >Home</Link>
                <Link 
                to="/Pages/Library/Library" 
                className="navbar-button" 
                title="Library"
                onClick={() => setCurrentPage('Library')}>Library</Link>
                <button className="navbar-button" title="Community">Community</button>
                <button className="navbar-button" title="Templaytes">Templaytes</button>
            </div>

            <button className="create-button" title="Create Project">Create Project</button>
        </div>
    );
}
 
export default Header;