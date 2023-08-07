import { Box, Tabs, Tab } from '@mui/material'
import React from 'react'
import CustomTabPanel from './Tabs';
import Dropdown from '../Custom/Dropdown';
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import InputBox from '../Custom/Inputbox';


export default function HeaderTab() {

    const initialValues = {
        method: "",
        endpoint: "",
    }

    const validationSchema = Yup.object().shape({
        method: Yup.string().required('Required!'),
    })

    const methods = [
        { value: 'GET', name: 'GET', color: 'text-[#65b477]'},
        { value: 'POST', name: 'POST', color: 'text-[#c4c74e]' },
        { value: 'PATCH', name: 'PATCH', color: 'text-[#ffa24e]' },
        { value: 'PUT', name: 'PUT', color: 'text-[#f09a4c]' },
        { value: 'DELETE', name: 'DELETE', color: 'text-[#f7645a]' },
        { value: 'HEAD', name: 'HEAD', color: 'text-[#65b477]' },
        { value: 'OPTIONS', name: 'Options', color: 'text-[#87adc4]' },
        { value: 'Custom', name: 'Custom', color: 'text-[#a3a29f]'}
    ]

    return (
        <div className='mt-2 pl-2'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                    //@ts-ignore
                    errors,
                    values,
                    //@ts-ignore
                    touched,
                    setFieldValue
                }) => (
                    <Form className='grid sm:grid-cols-10 gap-2 pr-2'>
                        <Dropdown name={'method'} label={''} options={methods} />
                        <div className='sm:col-span-9'>
                            <InputBox name='endpoint' placeholder='Enter a url' />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
