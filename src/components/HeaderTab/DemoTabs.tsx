import React, { useEffect, useState } from 'react'
import Tabpanel from '../Tabpanel/Tabpanel';
import './demoTabs.css'


export default function DemoTabs() {

    const [currentTab, setCurrentTab] = useState(0);
    const [reload, setReload] = useState(1);


    const [tabPanel, setTabPanel] = useState<{
        id: number;
        name: string;
        label: string;
        content: JSX.Element;
    }[]>([]);

    const tabList: {
        id: number;
        name: string;
        label: string;
        content: JSX.Element;
    }[] = [...tabPanel]

    document.onclick = (e) => {
        e.preventDefault();
        let contextMenu: HTMLElement | null = document.getElementById("contextMenu");
        if (contextMenu != null) {
            contextMenu.style.display = "none";
        } else {
            console.log("Invalid contextMenu")
        }
    }

    document.oncontextmenu = (e) => {
        e.preventDefault();
        let contextMenu: HTMLElement | null = document.getElementById("contextMenu");
        if (contextMenu !== null) {
            if (contextMenu.style.display == "block") {
                contextMenu
                    .style.display = "none";
            } else {
                contextMenu.style.display = 'block';
                if (window.innerHeight - e.pageY < contextMenu.getBoundingClientRect().height) {
                    contextMenu.style.top = e.pageY - contextMenu.getBoundingClientRect().height - (window.innerHeight - e.pageY)  + "px";
                } else {
                    contextMenu.style.top = e.pageY + "px";
                }
                contextMenu.style.left = e.pageX + "px";
            }
        } else {
            console.log("Invalid menu");
        }
    }

    return (
        <div className="simple-tabs">
            <div id="contextMenu" className="context-menu" style={{ display: 'none' }}>
                <ul className="menu">
                    <li className="share"><a href="#"><i className="fa fa-share" aria-hidden="true"></i> Share</a></li>
                    <li className="rename"><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i> Rename</a></li>
                    <li className="link"><a href="#"><i className="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li>
                    <li className="copy"><a href="#"><i className="fa fa-copy" aria-hidden="true"></i> Copy to</a></li>
                    <li className="paste"><a href="#"><i className="fa fa-paste" aria-hidden="true"></i> Move to</a></li>
                    <li className="download"><a href="#"><i className="fa fa-download" aria-hidden="true"></i> Download</a></li>
                    <li className="trash"><a href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                </ul>
            </div>
            <div className="tabs">
                <div className='flex gap-2 items-center h-8 text-sm overflow-x-scroll example text-white'>
                    {
                        tabPanel?.map((tab: { id: number; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, i: number) => (
                            <div
                                key={i}
                                onClick={() => setCurrentTab(i)}
                                className={`${tab.id === currentTab ? 'text-red-600' : ''} p-1 rounded-md flex cursor-default items-center gap-2 px-2 bg-[#2e2b2b]`}>
                                {tab.label}
                                <div onClick={() => (tabList.splice(i, 1), setTabPanel([...tabList]))}><i className="fa-solid fa-xmark text-[#92918d] p-1 hover:bg-[#3f3838] rounded-md cursor-pointer"></i></div>
                            </div>
                        ))
                    }
                    <div onClick={() => (tabList.push({
                        id: tabList.length,
                        name: 'tab',
                        label: 'Tab',
                        content: (
                            <Tabpanel />
                        )
                    }), setTabPanel([...tabList]))}><i className="fa-solid fa-plus p-2 rounded-md cursor-pointer text-[#92918d] bg-[#3c3938]"></i></div>
                </div>
            </div>

            {
                tabPanel.map((tab, i) => {
                    if (tab.id === currentTab) {
                        return <div key={i}>{tab.content}</div>;
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}
