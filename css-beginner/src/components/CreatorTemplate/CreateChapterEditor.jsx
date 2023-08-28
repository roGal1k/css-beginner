import React from "react";
import style from "./CreatorTemplate.module.css"

const ChapterNewTemplate = () => {
    return ( 
        <div className={style.chapter}>
            <section className={style.horizontalLayout}>
                <div className={style.nameBlock}>Chapter name:</div>
                <input type="text" className={style.inputBlock}/>
            </section>
            <section className={style.horizontalLayout}>
                <div className={style.nameBlock}>Chapter type:</div>
                <div>
                    <input type="radio" id="image" name="image" value="image" />
                    <input type="radio" id="video" name="video" value="video" />
                    <input type="radio" id="text"  name="text"  value="text" />
                    <input type="radio" id="link"  name="link"  value="link" />
                </div>
            </section>
        </div>
     );
}
 
export default ChapterNewTemplate;