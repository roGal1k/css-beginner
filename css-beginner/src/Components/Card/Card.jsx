import React from "react";

import styles from "./card.module.css"

import img from "../../assets/img/img.png"

class Card extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          title: new Date(),
          description: "",
          image: "",
          link: "",
          name: "",
          tasks: [],
          points: [],      
      };
  }

  componentDidMount() {
    fetch("your-api-endpoint")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          description: data.description,
          image: data.image,
          link: data.link,
          name: data.name,
          tasks: data.tasks,
          points: data.points,
        });
      })
    .catch((error) => {
      console.error("Error fetching data:", error);
    }); 
  }

  render() {
      const { description, image, link, name, tasks, points } = this.state;

      console.info(image)
      
      return (
        <section className={styles.section}>
          
          <container className={styles.containerTitle}>
            <h1 className={styles.titles}>
              {name==='' ? "title" : name}
            </h1>
          </container>
          
          <img className={styles.preview}
          src=
          {image==='' ? img : image}
          alt={name} />

          <p className={styles.paragraph}>
            {description==='' ? "descrption" : description}
          </p>
          <p className={styles.paragraph}>
            {tasks.length===0 ? "tasks" : tasks}
          </p>
          <p className={styles.paragraph}>
            {points.length===0 ? "points" : points}
          </p>
          <a href={link}>github.com</a>
        </section>
      );
  }
}
  
export default Card;