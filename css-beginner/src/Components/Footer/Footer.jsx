import React from "react";

import style from "./Footer.module.css"

import tg from "../../assets/img/tg.png"
import inst from "../../assets/img/inst.png"
import linkidin from "../../assets/img/linkidin.png"


const Footer = () => {
    return ( 
        <main className={style.main}>
            
                <div className={style.itemSocialNetwork}>
                    <img className={style.iconSocialNetwork} alt="image social network" src={tg} style={{width:'24px', height:'22px'}}></img>
                    <div className={style.textSocialNetwork}>@Re_Galik</div>
                </div>

                <div className={style.itemSocialNetwork}>
                    <img className={style.iconSocialNetwork} alt="image social network" src={inst} ></img>
                    <div className={style.textSocialNetwork}>@regalik_han</div>
                </div>

                <div className={style.itemSocialNetwork}>
                    <img className={style.iconSocialNetwork} alt="image social network" src={linkidin}></img>
                    <div className={style.textSocialNetwork}>@sergei-galikhanov</div>
                </div>
        </main>
    );
}
 
export default Footer;