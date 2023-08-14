import React from "react";

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
        // Здесь вы можете сделать запрос к серверу для получения данных
        // Например, используя fetch или другую библиотеку для HTTP запросов
        // Затем обновите состояние компонента с полученными данными
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

        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={image} alt={name} />
                <a href={link}>Visit</a>
                {/* И так далее */}
            </div>
        );
    }
  }
  
  export default Card;