import React from "react";
import styles from "./Sidebar.Editor.module.css"

export const Sidebar = () => {

    const [selectedOption, setSelectedOption] = React.useState("t2");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };  

    return ( 
        <section >
            <section className={styles.container}>
                
                <div className={styles.customSelect}>
                    <select className={styles.listTemplates} value={selectedOption} onChange={handleOptionChange}>
                        <option value="t1">New Templates</option>
                        <option value="t2">Projects Templates</option>
                        <option value="t3">Books Templaytes</option>
                    </select>
                    <div className={styles.arrow}></div>
                </div>
                
                <div className={styles.listAction}>
                    <div className={styles.action}>+ Preview</div>
                    <div className={styles.action}>+ Description</div>
                    <div className={styles.action}>+ Tasks</div>
                    <div className={styles.action}>+ Points</div>
                    <div className={styles.action}>+ Links</div>
               </div>
            </section>

            <br/>

            <div className={styles.action}>
                + New Template
            </div>
        </section>
    );
}