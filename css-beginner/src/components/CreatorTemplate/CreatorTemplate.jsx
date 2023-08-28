import React from "react";
import ChapterNewTemplate from "./CreateChapterEditor"

import style from "./CreatorTemplate.module.css"

const CreatorTemplate = () => {
    return ( 
        <section className={style.creatorTemplate}>
            <h2 className={style.titleFrame}>New Template</h2>

            <div className={style.container}>

                <section className={style.horizontalLayout}>
                    <div className={style.nameBlock}>Icon:</div>
                    <input type="text" className={style.inputBlock}/>
                </section>

                <section className={style.horizontalLayout}>
                    <div className={style.nameBlock}>Name Template:</div>
                    <input type="text" className={style.inputBlock}/>
                </section>

                <section className={style.creator}>
                    <container>
                        <ChapterNewTemplate/>
                    </container>
                    <br/>
                    <div className={style.addChapter}>+Add chapter</div>
                </section>
            </div>
        </section>
     );
}
 
export default CreatorTemplate;