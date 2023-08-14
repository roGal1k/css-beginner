import React from "react";
import styles from "./styles.css"
import Card from "./../../Components/Card/Card"

const Home = () => {
    return ( 
        <section className={styles.section}>
            <div className={styles.monsray}>
                <div className={styles.projectsList}>
                </div>
                
                <div className={styles.helloMsg}>
                </div>
                
                <button className={styles.templaytes}>
                    Load templaytes from storage 
                </button>
                <button className={styles.templaytes}>
                    Save templaytes in storage 
                </button>
                
                <button className={styles.bigBlueButton}>
                    Open Library 
                </button>

                <button className={styles.bigBlueButton}>
                    New project
                </button>
            </div>

            <div>
                Last drafts
                {/*<Card/>*/}
            </div>
        </section >
    );
}
 
export default Home;