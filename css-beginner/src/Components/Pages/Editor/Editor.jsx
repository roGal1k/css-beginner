import React from "react";

import {Sidebar} from "../../Sidebar/SidebarEditor"
import CreateChapter from "../../CreateChapterEditor/CreateChapter"
import style from "./Editor.module.css";

const Editor = () => {
    return ( 
    <section className={style.section}>
        <Sidebar/>
        <CreateChapter/>
    </section>
    );
}
 
export default Editor;