import React from "react";
import style from "./home.module.css"
import CardLarge from "../../Cards/CardLarge/CardLarge"

const Home = () => {
    return ( 
        <section className={style.section}>
            
            <container className={style.gridContainer}>
                <div className={style.gridItemFirst}>1</div>
                <div className={style.gridItemTop}>2</div>
                <div className={style.gridItem}>4</div>
                <div className={style.gridItem}>5</div>
                <div className={style.gridItemBottom}>6</div>
                <div className={style.gridItemBottom}>7</div>
            </container>

            <br/>

            <container title="Card last projects">
                <h3 className={style.titleSection}>Last drafts</h3>
                {<CardLarge/>}
            </container>

            <br/>

            <container title="Favorites" style={{paddingBottom:"30px"}}>
                <section className={style.sectionTitleButton}>
                    <h3 className={style.titleSection}>Favorites</h3>
                    <button className={style.buttonSection}>Show all</button>
                </section>
                <div className={style.gridFavorite}>
                    <div className={style.gridFavoriteItem}>1</div>
                    <div className={style.gridFavoriteItem}>2</div>
                    <div className={style.gridFavoriteItem}>3</div>
                    <div className={style.gridFavoriteItem}>4</div>
                    <div className={style.gridFavoriteItem}>5</div>
                    <div className={style.gridFavoriteItem}>6</div>
                    <div className={style.gridFavoriteItem}>7</div>
                    <div className={style.gridFavoriteItem}>8</div>
                    <div className={style.gridFavoriteItem}>9</div>
                </div>
            </container>
            
            <br/>

        </section>
    );
}
 
export default Home;
