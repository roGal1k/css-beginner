import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';

//const [pageSelected,setPageSelected] = useState(0); 

const Header = ({ setCurrentPage }) => {
    return ( 
        <main className={styles.main}>
            <section className={styles.content}>
                <div className={styles.menuButton}>
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                </div>

                <div className={styles.navbar}>
                    <Link 
                    to="/Home" 
                    className={styles.navbarPages} 
                    title="Home"
                    onClick={() => setCurrentPage('Home')} >Home</Link>
                    <Link 
                    to="/Library" 
                    className={styles.navbarPages} 
                    title="Library"
                    onClick={() => setCurrentPage('Library')}>Library</Link>
                    <Link 
                    to="/Community" 
                    className={styles.navbarPages} 
                    title="Community"
                    onClick={() => setCurrentPage('Community')}>Community</Link>
                    <Link 
                    to="/Templates" 
                    className={styles.navbarPages} 
                    title="Templates"
                    onClick={() => setCurrentPage('Templates')}>Templates</Link>
                </div>

                <Link 
                to="/Editor" 
                className={styles.createButton} 
                title="Create Project"
                onClick={() => setCurrentPage('Editor')}>
                    Create Project
                </Link>
            </section>
        </main>
    );
}
 
export default Header;