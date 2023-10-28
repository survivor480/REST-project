import { useState } from 'react';
import Sidebar from './components/Sidebar';
// @ts-ignore
// import HeaderTab from './components/HeaderTab/HeaderTab';
// @ts-ignore
import { PanelGroup, Panel } from "react-resizable-panels";
import Request from './Workspace/Request/RequestPanel';
import Response from './Workspace/Response/ResponsePanel';
// import { ThreeDots } from 'react-loader-spinner';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
// import JsonEditorPane from './Panes/Json/JsonEditorPane';
// import ResponseHeaderPane from './Panes/ResponseHeader/ResponseHeaderPane';
import { methods } from './Data/methods';
import SampleTreeView from './components/Custom/TreeView/TreeView';
import ReactMenu from './components/Custom/ReactMenu/ReactMenu';
import SpaceComponent from './components/Helpful Components/SpaceComponent';


function App() {
  const [open, setOpen] = useState(true);
  const [minSize, setMinSize] = useState(20);

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex w-full bg-[#1c1818] overflow-hidden font-[Poppins] cursor-default'>
      <Sidebar open={open} setOpen={setOpen} />
      {/* <div>Test Div</div> */}
      <div className='flex w-full h-full justify-between'>
        <div className='flex h-screen w-full text-[#92918d]'>
          {open && <PanelGroup direction="horizontal" style={{ width: 350 }}>
            <Panel minSize={minSize} defaultSize={20} >
              <div className='bg-[#231f1f] w-[300px] p-3 h-screen'>
                <div className='flex justify-between text-[#bbb9b6] items-center text-xs'>
                  <span><i className="fa-solid fa-shield-halved p-1 rounded-md bg-[#3c3938] mr-2"></i>Incognito Space</span>
                  <i className="fa-solid fa-plus p-[0.4rem] text-[16px] hover:bg-[#3c3938] rounded-md"></i>
                </div>
                <SpaceComponent height={"20"}/>
                <SampleTreeView />
              </div>
            </Panel>
            {/* <PanelResizeHandle className="w-[0.1rem] active:bg-[#fda64e] transition duration-300 bg-[#2d2929]" /> */}
          </PanelGroup>}
          <div className='flex flex-col w-full'>
            {/* <HeaderTab /> */}
            <Tabs forceRenderTabPanel selectedTabClassName="text-white text-xs">
              <TabList className="flex rounded-t-lg">
                {methods.map((tab) => (
                  <Tab
                    className="mr-3 pt-2 pl-3 focus:outline-none cursor-pointer text-xs"
                    key={tab.slug}>
                    {tab.method}
                  </Tab>
                ))}
              </TabList>

              <div className="px-3 py-2 rounded-b-lg ">
                {/* {loading ? (
                  <ThreeDots
                    height="30"
                    width="30"
                    color="gray"
                    visible={true}
                  />
                ) : (<> */}
                  <TabPanel>
                      <Request setResponse={setResponse} setLoading={setLoading} loading={''} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel >
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel>
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel >
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel>
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel >
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel>
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                  <TabPanel >
                      <Request setResponse={setResponse} setLoading={setLoading} loading={loading} />
                      <Response response={response} loading={loading} />
                  </TabPanel>
                {/* </>)} */}
              </div>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import SplitPane from "react-split-pane";


// function App() {
//   return (
//     <div className="App">
//       {/* @ts-ignore */}
//       <SplitPane
//       split="horizontal" 
//       defaultSize={150} 
//       allowResize={false}>
//         <div className="settingsDiv">
//           <h1>SCCS Corona Dashboard</h1>
//           <button id={"mainButton"}>
//             Start Simulation
//           </button>
//         </div>
//       {/* @ts-ignore */}

//         <SplitPane
//           split="vertical"
//           minSize={100}
//           maxSize={-100}
//           defaultSize={"50%"}
//         >
//           <div className="simulationDiv" />
//           <div className="statisticsDiv" />
//         </SplitPane>
//       </SplitPane>
//     </div>
//   )
// }

// export default App;