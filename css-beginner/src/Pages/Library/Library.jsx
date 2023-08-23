import React from "react";
import styles from "./Library.module.css"
import {Sidebar} from "../../Components/Sidebar/SidebarLibrary";

const Library = () => {
    return (
        <main className={styles.main}> 
            <Sidebar/>

            <div className={styles.cardGalery}>
                <div className={styles.overCardList}>
                    <h1 className={styles.titleCardGalery}>Last projects</h1>
                    <button className={styles.buttonShowMore}>Show All</button>
                </div>
                <br/>
                <container className={styles.cardList}>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                    <div className={styles.card}/>
                </container>
            </div>
        
        </main>
    );
}
 
export default Library;