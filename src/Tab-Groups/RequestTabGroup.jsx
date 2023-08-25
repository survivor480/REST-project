import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Tab-Groups.css';

import KeyValuePane from '../Panes/KeyValue/KeyValuePane';
import JsonEditorPane from '../Panes/Json/JsonEditorPane';

export default function RequestTabGroup({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
  body,
  setBody,
}) {
  const requestTabs = [
    {
      slug: 'query-params',
      title: 'Query Params',
      panel: KeyValuePane,
      paneValue: queryParams,
      setPaneValue: setQueryParams,
    },
    {
      slug: 'headers',
      title: 'Headers',
      panel: KeyValuePane,
      paneValue: headers,
      setPaneValue: setHeaders,
    },
    {
      slug: 'body',
      title: 'Body',
      panel: JsonEditorPane,
      paneValue: body,
      setPaneValue: setBody,
    },
  ];

  return (
    <div className=' border border-[#231f1f] p-1 mt-2 mx-4 rounded-xl'>
      <Tabs forceRenderTabPanel selectedTabClassName="text-white text-xs">
        <TabList className="flex mt-2 ml-2 border border-[#1c1818] rounded-t-lg text-xs gap-3">
          {requestTabs.map((tab) => (
            <Tab className="focus:outline-none cursor-pointer"
              key={tab.slug}>
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {requestTabs.map((tab) => (
          <TabPanel className="react-tabs__tab-panel px-2 py-4 rounded-b-lg border border-[#1c1818]" key={tab.slug}>
            <tab.panel
              paneValue={tab.paneValue}
              setPaneValue={tab.setPaneValue}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
