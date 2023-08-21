import React from "react";
import styles from "./Sidebar.Library.module.css"

export const Sidebar = () => {
    return (
    <section className={styles.section}>
      <container className={styles.container}>
        <div className={styles.action}>Last</div>
        <div className={styles.action}>Completed</div>
        <div className={styles.action}>Planned</div>
        <div className={styles.action}>Abandoned</div>
        <div className={styles.action}>Favorites</div>
      </container>

      <br/>

      <container className={styles.container}>
        <div className={styles.action}>React</div>
        <div className={styles.action}>Golang</div>
        <div className={styles.action}>Qt++</div>
        <div className={styles.action}>Python</div>
        <div className={styles.action}>Other</div>
      </container>

      <br/>

      <div className={styles.action}>+ New list</div>

    </section>
    );
}