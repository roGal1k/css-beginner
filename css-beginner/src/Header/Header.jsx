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
                to="/home" 
                className={styles.navbarButton} 
                title="Home"
                onClick={() => setCurrentPage('Home')} >Home</Link>
                <Link 
                to="/Library" 
                className={styles.navbarButton} 
                title="Library"
                onClick={() => setCurrentPage('Library')}>Library</Link>
                <button className={styles.navbarButton} title="Community">Community</button>
                <button className={styles.navbarButton} title="Templaytes">Templaytes</button>
            </div>

            <button className={styles.createButton} title="Create Project">Create Project</button>
        </section>
    );
}
 
export default Header;