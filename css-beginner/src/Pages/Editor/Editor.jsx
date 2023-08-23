import React from "react";

import {Sidebar} from "../../Components/Sidebar/SidebarEditor"
import CreateChapter from "../../Components/CreateChapterEditor/CreateChapter"
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