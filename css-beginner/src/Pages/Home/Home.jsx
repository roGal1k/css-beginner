import React from "react";
import "./styles.css"

const Home = () => {
    return ( 
        <body>
            <div className="center">

                <div className="workspace">
                    <div className="name-pannel">
                        <name-paragraph>
                            Last seen
                        </name-paragraph>
                        <div style={{color:'rgba(255,255,255,0.8)'}}>
                            Show all
                        </div>
                    </div>
                    <div className="home-page">
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                    </div>
                    <div className="name-pannel">
                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: 'large' }}>
                            Completed projects
                        </div>
                        <div style={{color:'rgba(255,255,255,0.8)'}}>
                            Show all
                        </div>
                    </div>
                    <div className="home-page">
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                        <div className="project-home-page"></div>
                    </div>
                </div>
                </div>
        </body>
    );
}
 
export default Home;