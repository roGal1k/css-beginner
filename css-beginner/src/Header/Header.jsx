import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';

//const [pageSelected,setPageSelected] = useState(0); 

const Header = ({ setCurrentPage }) => {
    return ( 
        <section className={styles.topPannel}>
            <div className={styles.menuButton}>
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
            </div>

            <div className={styles.navbar}>
                <Link 
                to="/Home" 
                className={styles.navbarButton} 
                title="Home"
                onClick={() => setCurrentPage('Home')} >Home</Link>
                <Link 
                to="/Library" 
                className={styles.navbarButton} 
                title="Library"
                onClick={() => setCurrentPage('Library')}>Library</Link>
                <Link 
                to="/Community" 
                className={styles.navbarButton} 
                title="Community"
                onClick={() => setCurrentPage('Community')}>Community</Link>
                <Link 
                to="/Templates" 
                className={styles.navbarButton} 
                title="Templates"
                onClick={() => setCurrentPage('Templates')}>Templates</Link>
            </div>

            <Link 
                to="/Editor" 
                className={styles.createButton} 
                title="Create Project"
                onClick={() => setCurrentPage('Editor')}>Create Project</Link>
        </section>
    );
}
 
export default Header;