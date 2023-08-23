import React from "react";

import styles from "./CreateChapter.module.css"

const CreateChapter = ({image}) => {
    return (
        <section className={styles.section}>
            <button className={styles.buttonAddNew}>
                + Add Chapter
            </button>

            <div className={styles.block}>
            
                <h2 style={{color:"white"}}>Name block</h2>'
                {image!==null ? 
                    <div>
                        <img alt="Preview project"/>
                    </div>
                    : console.log("image not install")
                }
                <p style={{color:"white"}}>
                    This is a reducer, a pure function with (state, action) state signature.
                    It describes how an action transforms the state into the next state.
                    <br/>
                    The shape of the state is up to you: it can be a primitive, an array, an object,
                    or even an Immutable.js data structure. The only important part is that you should
                    not mutate the state object, but return a new object if the state changes.
                    <br/>
                    In this example, we use a `switch` statement and strings, but you can use a helper
                    follows a different convention (such as function maps) if it makes sense for your project...
                </p>
            </div>


        </section>
    );
}
 
export default CreateChapter;