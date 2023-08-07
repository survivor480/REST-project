import { Box, Tabs, Tab } from '@mui/material'
import React from 'react'
import CustomTabPanel from './Tabs';
import Dropdown from '../Custom/Dropdown';
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import InputBox from '../Custom/Inputbox';
import SaveButton from '../Custom/SaveButton';
import NewTabs from './NewTabs';


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
            <NewTabs index={0} value={0} />
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
                    <Form className='flex gap-2 justify-center items-center pr-4'>
                        <div className='w-32'>
                            <Dropdown name={'method'} label={''} options={methods} />
                        </div>
                        <div className='flex-1'>
                            <InputBox name='endpoint' placeholder='Enter a url' />
                        </div>
                        <SaveButton props={{
                        }} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
