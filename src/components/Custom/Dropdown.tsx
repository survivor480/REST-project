/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useEffect, useRef, useState } from 'react'
import useOnClickOutsideRef from './useOnClickOutsideRef';
import { Field, FormikErrors, useFormikContext } from 'formik';

type Props = {
    name: string,
    label: string,
    options: any[],
    initialValue?: string;
    disabled?: boolean;
    asterisk?: boolean;
    error?: FormikErrors<{}> | undefined;
}

export default function Dropdown(props: Props) {
    const { values, setFieldValue }: any = useFormikContext()

    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('');

    const ref = useOnClickOutsideRef(() => setOpen(false))

    useEffect(() => {
        // @ts-ignore
        value !== 0 && setFieldValue(props.name, value)
    }, [value])


    useEffect(() => {
        const data: any = props.options?.filter((data) => data.value === (values[props?.name]));
        setName(data[0]?.name);
        setValue(data[0]?.value);
    }, [values[props?.name]])

    window.addEventListener('mousedown', (e: MouseEvent) => {
        console.log(e.clientY)
        console.log(window.innerHeight)
        // @ts-ignore
        // document.getElementById('dropdownbar')?.style.position = 'absolute';
        if (window.innerHeight - e.clientY > 100) {
            // @ts-ignore
            const dropdownbar = document.getElementById('dropdownbar')
            if(dropdownbar) {
                dropdownbar.style.top = 0 + 'px'
            } else {
                console.log(e.clientY)
            }
        }
    })

    return (
        <div ref={ref} className="relative" >
            <label id="listbox-label" className={`block text-xs leading-6  ${props.error ? 'text-[#FF0000]' : 'text-gray-900'}`}>{props.label}{props.asterisk && <i className="fa fa-solid fa-asterisk " style={{ color: 'red', fontSize: 6, position: 'absolute', top: 6, paddingLeft: 1 }} ></i>}</label>
            <div className="relative">
                <button type="button" onClick={() => setOpen(!open)} className={`${props.disabled ? 'pointer-events-none cursor-not-allowed bg-[#f1efef]' : 'bg-[#231f1f]'} relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left text-[#92918d] shadow-sm ring-1 ring-inset ${props?.error ? 'ring-[#Ff0000]' : 'ring-[#272323]'} focus:outline-none sm:text-sm sm:leading-6`} aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <span className="flex items-center">
                        <span className={`block truncate ${color ? `${color}` : 'text-[#92918d]'}`}>{name ? name : 'Select'}</span>
                        <Field name={props.name} className="invisible absolute" />
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
                {props.error && (
                    <div className="text-[#FF0000] text-xs">
                        {/* @ts-ignore */}
                        {props.error}
                    </div>
                )}
                <div>
                    {open && <ul className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-[#231f1f] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3" id='dropdownbar'>
                        {props.options?.map((data: any, i: number) => (
                            <li key={i} className={` ${data.color ? `${data.color}` : 'text-[#92918d]'} relative cursor-default select-none py-2 pl-3 pr-9`} id="listbox-option-0" role="option" onClick={() => (setValue(data.value), setOpen(false), setName(data.name), setColor(data.color))}>
                                <div className="flex items-center">
                                    <span className={`font-normal ml-3 block truncate ${data.color ? `${data.color}` : 'text-[#92918d]'}`}>{data.name}</span>
                                </div>
                                {name === data.name && value !== '' && <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                </span>}
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        </div>
    )
}
