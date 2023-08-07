import { Field, FormikErrors, useField, useFormikContext } from "formik";
import { useEffect, useRef } from 'react'

type InputBoxData = {
    name: string;
    label?: string;
    type?: string;
    numLength?: number;
    id?: string;
    placeholder?: string;
    message?: string;
    value?: string | null | undefined;
    asterisk?: boolean;
    max?: string;
    error?: FormikErrors<{}> | undefined;
    className?: string
    restrictNumber?: boolean
    allowDecimals?: boolean | undefined;
    capsOnly?: boolean | undefined;
    maxValue?: number | undefined;
    disabled?: boolean
};

export default function InputBox(props: InputBoxData) {
    const { values, setFieldValue }: any = useFormikContext()
    function lettersOnly(e: any) {
        var regex = /[^a-z ]/gi;
        e.target.value = e.target.value.replace(regex, "");
    }
    function capsOnly(e: any) {
        e.target.value = ("" + e.target.value).toUpperCase()
    }
    useEffect(() => {
        if (props?.maxValue) {
            values[props?.name] > props?.maxValue ? values[props?.name] = props.maxValue : values[props?.name] = values[props?.name]
        }
        if (props?.allowDecimals) {
            let index = 0
            if (values[props.name] % 1 !== 0) index = Number(values[props.name]).toString().indexOf('.');
            (values[props.name] % 1 !== 0 && values[props?.name]) ? values[props.name] = Number(Number(values[props.name]).toString().slice(0, index + 5)) : values[props.name] = values[props.name]
        }
    }, [props?.maxValue, values[props?.name]])

    return (
        <div className="relative ">
            <label className={`font-normal text-xs tracking-wide w-full ${props.error && 'text-[#FF0000]'}`}>
                {props?.label}
            </label>
            {props.asterisk && <i className="fa fa-solid fa-asterisk " style={{ color: 'red', fontSize: 6, position: 'absolute', top: 8, paddingLeft: 1 }} ></i>}
            {props?.value ? <Field
                type={props?.type}
                id={props?.id}
                name={props?.name}
                placeholder={props?.placeholder}
                // step={props.type === 'number' ? ".01" : "0" }
                maxLength={props?.max}
                value={props?.value}
                // onKeyup = {(e:any)=>  lettersOnly(e)}
                disabled={props?.value || props?.disabled ? true : false}
                onInput={(e: any) => {
                    return ((props.type === 'number' || props?.disabled) ? e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, props?.numLength ? props?.numLength : 10) : e.target.value)
                }}
                className={`w-full ${props?.value ? 'bg-[#f1efef] cursor-not-allowed' : 'bg-[#231f1f]'} rounded h-9 border input border-[#2d2929] text-[#888d8d] text-sm outline-none px-2 leading-8 ${props.error && 'border-[#FF0000]'} ${props?.className}`}
            /> : <Field
                type={props?.type}
                id={props?.id}
                name={props?.name}
                placeholder={props?.placeholder}
                // pattern = {props.type === 'number' && '^\d*(\.\d{0,2})?$'}
                // step={".25"}
                maxLength={props?.max ? props.max : 100}
                disabled={props?.value || props?.disabled ? true : false}
                // onKeyup = {(e:any)=>  lettersOnly(e)}
                onInput={(e: any) => {
                    return ((props.type === 'number' && !props.allowDecimals) ? e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, props?.numLength ? props?.numLength : 10) : props?.restrictNumber ? lettersOnly(e) : (props?.type === "text" && props?.capsOnly) ? capsOnly(e) : e.target.value)
                }}
                className={`w-full ${(props?.value || props?.disabled) ? 'bg-[#f1efef] cursor-not-allowed' : 'bg-[#231f1f]'} rounded h-9 border input border-[#2d2929] text-[#888d8d] text-sm outline-none px-2 leading-8 ${props.error && 'border-[#FF0000]'} ${props?.className}`}
            />
            }
            <div className="text-[#FF0000] text-xs">
                {/* @ts-ignore */}
                {props.error}
            </div>
        </div>
    );
}
