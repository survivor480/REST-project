import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThreeDots } from 'react-loader-spinner';

import JsonEditorPane from '../Panes/Json/JsonEditorPane';
import ResponseHeaderPane from '../Panes/ResponseHeader/ResponseHeaderPane';

export default function ResponseTabGroup({ doc, setDoc, response, loading }) {
  const responseTabs = [
    {
      slug:'response-body',
      title:'Response Body'
    },
    {
      slug: 'response-header',
      title: 'Response Header'
    }
  ]
  return (
    <div className=' border border-[#231f1f] p-1 rounded-xl my-2 mr-4'>
      <Tabs forceRenderTabPanel selectedTabClassName="text-white text-xs">
        <TabList className="flex rounded-t-lg">
          {responseTabs.map((tab) => (
            <Tab 
              className="mr-3 pt-2 pl-3 focus:outline-none cursor-pointer text-xs" 
              key={tab.slug}>
                {tab.title}
            </Tab>
          ))}
        </TabList>
       
        <div className="px-3 py-2 rounded-b-lg ">
        {loading ? ( 
        <ThreeDots 
          height="30"
          width="30"
          color="gray"
          visible={true} 
        />
          ) : ( <>
        <TabPanel>
          <JsonEditorPane
              paneValue={doc}
              setPaneValue={setDoc}
              isEditable={false}
            />
        </TabPanel>
        <TabPanel >
          <ResponseHeaderPane response={response} />
        </TabPanel>
        </> )}
        </div>
      </Tabs>
    </div>
  );
}
