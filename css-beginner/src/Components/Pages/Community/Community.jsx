import React from "react";

import style from "./Community.module.css"

import CardMedium from "../../Cards/CardMedium/CardMedium";
import CardMinimal from "../../Cards/CardMinimal/CardMinimal";

const Community = () => {
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
                        points={''}
                        link={''}
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                    <CardMinimal
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                </div>
            </section>

            <section className={style.section}>
                <div className={style.titleBlock}>
                    <h1 className={style.title}> Projects </h1>
                    <button className={style.showAll}> Show all</button>
                </div>

                <div className={style.container}>
                    <CardMedium 
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                    <CardMedium
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                    <CardMedium
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                    <CardMedium
                        title={''}
                        image={''} 
                        description={''} 
                        tasks={''} 
                        points={''}
                        link={''}
                    />
                </div>

            </section>

        </main> 
    );
}
 
export default Community;