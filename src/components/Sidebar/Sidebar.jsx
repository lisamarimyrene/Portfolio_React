import React from "react";
import './Sidebar.css';

function Sidebar() {

    return (
        <aside className="sidebar">
            <div className="sidebar__flexcontainer--desktop">

                <div className="sidebar__icons">
                    {/* https://www.sanity.io/guides/import-svg-files-in-react  */}

                        <a href="https://github.com/lisamarimyrene">
                        <svg version="1.1" className="sidebar__icons--icon" id="Layer_1"
                            imageRendering="optimizeQuality" textRendering="geometricPrecision"
                            shapeRendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64"
                            xmlSpace="preserve">

                            <path className="st0" d="M32,0.8c-17.7,0-32,14.3-32,32c0,14.1,9.2,26.1,21.9,30.4c1.6,0.3,2.2-0.7,2.2-1.5c0-0.8,0-3.3,0-6
                            c-8.9,1.9-10.8-3.8-10.8-3.8c-1.5-3.7-3.6-4.7-3.6-4.7c-2.9-2,0.2-1.9,0.2-1.9c3.2,0.2,4.9,3.3,4.9,3.3c2.9,4.9,7.5,3.5,9.3,2.7
                            c0.3-2.1,1.1-3.5,2-4.3c-7.1-0.8-14.6-3.6-14.6-15.8c0-3.5,1.3-6.3,3.3-8.6c-0.3-0.8-1.4-4.1,0.3-8.5c0,0,2.7-0.9,8.8,3.3
                            c2.6-0.7,5.3-1.1,8-1.1c2.7,0,5.5,0.4,8,1.1c6.1-4.1,8.8-3.3,8.8-3.3c1.7,4.4,0.6,7.7,0.3,8.5c2.1,2.2,3.3,5.1,3.3,8.6
                            c0,12.3-7.5,15-14.6,15.8c1.1,1,2.2,2.9,2.2,5.9c0,4.3,0,7.7,0,8.8c0,0.9,0.6,1.8,2.2,1.5C54.8,58.9,64,46.9,64,32.8
                            C64,15.1,49.7,0.8,32,0.8L32,0.8L32,0.8z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/lisamarimyrene/">
                        <svg version="1.1" className="sidebar__icons--icon"
                            id="Layer_1" imageRendering="optimizeQuality" textRendering="geometricPrecision"
                            shapeRendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 3333 3333"
                             xmlSpace="preserve">

                            <path className="st0" d="M1667,0c920,0,1667,746,1667,1667c0,920-746,1667-1667,1667C747,3334,0,2588,0,1667C0,747,746,0,1667,0z
                            M1452,1336h342v175h5c48-86,164-175,338-175c361,0,428,225,428,517v596h-357v-528c0-126-3-288-186-288c-186,0-214,137-214,279v537
                            h-357V1336H1452z M1205,1027c0,102-83,186-186,186c-102,0-186-83-186-186c0-102,83-186,186-186C1121,841,1205,924,1205,1027z
                            M834,1336h371v1113H834V1336z" />
                        </svg>
                    </a>
                </div>
                <div className="sidebar__verticaltxt">
                    <p>L</p>
                    <p>M</p>
                    <p>M</p>
                </div>

                <div className="sidebar__verticaltxt">
                    <p>2</p>
                    <p>0</p>
                    <p>2</p>
                    <p>2</p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;