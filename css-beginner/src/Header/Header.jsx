import React from "react";
import "./styles.css"

//const [pageSelected,setPageSelected] = useState(0); 

const Header = () => {
    return ( 
        <div className="top-pannel">
            <div className="menu-button">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            <div className="navbar">
                <button className="navbar-button" title="Home" >Home</button>
                <button className="navbar-button" title="Library">Library</button>
                <button className="navbar-button" title="Comunity">Comunity</button>
                <button className="navbar-button" title="Templaytes">Templaytes</button>
            </div>

            <button className="create-button" title="Create Project">Create Project</button>
        </div>
    );
}
 
export default Header;