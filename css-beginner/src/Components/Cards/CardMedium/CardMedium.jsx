import React from "react";

import styles from "./cardMedium.module.css"
import img from "../../../assets/img/img.png"

const CardMedium = ({title, image, description, tasks, points, link}) =>{
  
  console.log(title, image, description, tasks, points, link);
  
  return (
    <section className={styles.section}>
      
      <container className={styles.containerTitle}>
        <h1 className={styles.titles}>
          {title==='' ? "title" : title}
        </h1>
      </container>
      
      <img className={styles.preview}
      src=
      {image==='' ? img : image}
      alt={title} />

      <p className={styles.paragraph}>
        {description==='' ? "descrption" : description}
      </p>
      <p className={styles.paragraph}>
        {tasks ==='' ? "tasks" : tasks}
      </p>
      <a href={link}>github.com</a>
      <p className={styles.paragraph}>
        {points ==='' ? "points" : points}
      </p>
    </section>
  );
}
  
export default CardMedium;