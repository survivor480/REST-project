import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Tabpanel from '../Tabpanel/Tabpanel';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function NewTabs(props: TabPanelProps) {
    const { children, index, ...other } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const [tabPanelno, setTabPanelno] = useState(1);

    return (
        <div className='mt-2'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" {...a11yProps(0)}></Tab>
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Tabpanel />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Tabpanel />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Tabpanel />
                </CustomTabPanel>
            </Box>
            {/* <div
                role="tabpanel"
                hidden={value !== index}
                {...other}
                className='flex w-[1400px] gap-2 items-center h-8 text-sm overflow-x-scroll example text-white'
            >
                {Array.from(Array(tabPanelno), (e, i) => {
                    return <div className='p-1 rounded-md flex cursor-default items-center gap-2 px-2 bg-[#2e2b2b]' key={i}>
                        untitled
                        <div onClick={() => setTabPanelno(tabPanelno => tabPanelno === 1 ? 1 : tabPanelno - 1)}><i className="fa-solid fa-xmark text-[#92918d] p-1 hover:bg-[#3f3838] rounded-md cursor-pointer"></i></div>
                    </div>
                })}
                <div onClick={() => setTabPanelno(tabPanelno => tabPanelno + 1)}><i className="fa-solid fa-plus p-2 rounded-md cursor-pointer text-[#92918d] bg-[#3c3938]"></i></div>
            </div> */}
        </div>
    )
}
