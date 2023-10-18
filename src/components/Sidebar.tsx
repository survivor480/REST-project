import { Button, Popover, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import FileSystemNavigator from './Custom/TreeView';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar(props: Props) {
    const [apiResponse, setApiResponse] = useState({});

    const api_call = async () => {
        try{
            const response = await axios({
                method: 'post',
                headers: {"Access-allow-control-origin": "*"},
                url: 'http://monster-dev-test.distronix.in:3300/login',
                data: {
                    "username": "survivor_48",
                    "password": "#Kanoon314#"
                }});

            setApiResponse(response);
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        return api_call;
    }

    useEffect(() => {
        api_call()
    }, []);

    console.log("This is the API response", apiResponse);

    // api_call();


    return (
        <div className='flex flex-col w-[3.5rem] justify-between border-r border-r-[#2d2929] bg-[#231f1f] h-screen px-3'>
            <div className='flex flex-col gap-4 justify-center items-center pt-2'>
                <i className="fa-solid fa-hippo text-3xl text-[#fda64e]"></i>
                <div onClick={() => props.setOpen(!props.open)} className='cursor-pointer'>
                    {props.open ? <i className="fa-solid text-[#92918d] fa-sun text-xl"></i> : <i className="fa-regular fa-sun text-[#92918d] text-xl"></i>}
                </div>
            </div>
            <div className='flex flex-col gap-[0.8rem] justify-center items-center pb-6'>
                <i className="fa-solid fa-circle-question text-[#92918d] text-xl"></i>
                <div className='h-1 border-b w-full border-b-[#2d2929]'></div>
                <i className="fa-solid fa-gear text-[#92918d] text-xl"></i>
            </div>
        </div>
    )
}
