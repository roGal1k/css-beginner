import React from "react";

import style from "./Templates.module.css"

import CardMinimal from "../../Cards/CardMinimal/CardMinimal";
import CreatorTemplate from "../../CreatorTemplate/CreatorTemplate"

const Templates = () => {
    return ( 
        <main className={style.main}>
            <section className={style.section}>
                <div className={style.titleBlock}>
                    <h1 className={style.title}> Template </h1>
                    <button className={style.showAll}> Show all</button>
                </div>

                <div className={style.container}>
                    <CardMinimal 
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                    />
                </div>
            </section>
            <section className={style.editor}>
                <CreatorTemplate/>
            </section>

        </main> 
    );
}
 
export default Templates;