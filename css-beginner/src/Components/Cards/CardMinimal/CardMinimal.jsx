import React from "react";

import styles from "./cardMinimal.module.css"
import img from "../../../assets/img/img.png"
import remove from "../../../assets/img/remove.png"
import share from "../../../assets/img/share.png"

const CardMinimal = ({title, image, description, tasks, points, link}) =>{
  
  console.log(title, image, description, tasks, points, link);
  
  return (
    <section className={styles.section}>

      <div className={styles.buttonBlock}>
        <img className={styles.button}
          src={share}
          alt="share" />
        <img className={styles.button}
          src={remove}
          alt="remove" />
      </div>

      <img className={styles.preview}
      src=
      {image==='' ? img : image}
      alt={title} />

      <p className={styles.paragraph}>
        {description==='' ? "description" : description}
      </p>
      <p className={styles.paragraph}>
        {tasks ==='' ? "tasks" : tasks}
      </p>
    </section>
  );
}
  
export default CardMinimal;