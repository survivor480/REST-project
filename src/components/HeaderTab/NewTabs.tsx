import React, { useState } from 'react'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export default function NewTabs(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    const [tabPanelno, setTabPanelno] = useState(1);

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
            className='flex w-full gap-2 items-center h-8 text-sm'
        >
            {Array.from(Array(tabPanelno), (e, i) => {
                return <div className='p-1 rounded-md flex  items-center gap-2 px-2 bg-[#2e2b2b]' key={i}>
                    untitled
                    <div onClick={() => setTabPanelno(tabPanelno => tabPanelno - 1)}><i className="fa-solid fa-xmark p-1 hover:bg-[#3f3838] rounded-md cursor-pointer"></i></div>
                </div>
            })}
            <div onClick={() => setTabPanelno(tabPanelno => tabPanelno + 1)}><i className="fa-solid fa-plus p-1 bg-[#3c3938]"></i></div>
        </div>
    )
}
