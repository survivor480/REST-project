import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
// @ts-ignore
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import Dropdown from '../Custom/Dropdown';
import InputBox from '../Custom/Inputbox';
import SaveButton from '../Custom/SaveButton';
import { methods } from '../../Data/methods';

type Props = {
    data?: []
}

export default function Tabpanel({data}: Props) {
    const initialValues = {
        method: "",
        endpoint: "",
    }

    const validationSchema = Yup.object().shape({
        method: Yup.string().required('Required!'),
    })

    const [show, setShow] = useState(false);


  return (
      <div>
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
                  <Form className='flex gap-2 justify-center items-center'>
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
          <PanelGroup autoSaveId="conditional" direction="horizontal" className="pt-2">
              <Panel id="left" order={1} className="rounded-tl-xl" minSize={20}>
                  <div className='bg-[#231f1f] h-screen flex justify-between p-2'>
                      Left
                      <i className="fa-solid fa-code" onClick={() => setShow(!show)}></i>
                  </div>
              </Panel>
              {show && (
                  <>
                      <PanelResizeHandle className="w-[1px] active:bg-[#fda64e] transition duration-300 bg-[#2d2929]" />
                      <Panel id="center" order={2} className=" bg-[#231f1f] p-1" minSize={20}>
                          <div className='bg-[#231f1f] h-screen flex justify-between p-2'>
                              Middle
                              <div>
                                  <i className="fa-solid fa-xmark p-1 px-2 rounded-md hover:bg-[#3c3938]" onClick={() => setShow(!show)}></i>
                              </div>
                          </div>
                      </Panel>
                  </>
              )}
              <PanelResizeHandle className="w-[1px] active:bg-[#fda64e] transition duration-300 bg-[#2d2929]" />
              <Panel id="right" order={3} className="bg-[#231f1f] rounded-tr-xl p-1" minSize={20}>
                  right
              </Panel>
          </PanelGroup>
      </div>
  )
}
