import { useState } from 'react';
import Sidebar from './components/Sidebar';
// @ts-ignore
import HeaderTab from './components/HeaderTab/HeaderTab';
// @ts-ignore
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

// @ts-ignore
function Block({ style }) {
  return (
    <div
      style={{ height: '100vh', background: "#231f1f", ...style }}
      className='active:bg-[#fda64e]'
    />
  );
}


function App() {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [minSize, setMinSize] = useState(20);

  return (
    <div className='flex w-full bg-[#1c1818] overflow-hidden font-[Poppins]'>
      <Sidebar open={open} setOpen={setOpen} />
      <div className='flex w-full h-full justify-between'>
        <div className='flex h-screen w-full text-[#92918d]'>
          {open && <PanelGroup direction="horizontal" style={{ width: 350 }}>
            <Panel minSize={minSize} defaultSize={20} >
              <div className='bg-[#231f1f] w-[300px] p-3 h-screen'>
                <div className='flex justify-between text-[#bbb9b6] items-center text-xs'>
                  <span><i className="fa-solid fa-shield-halved p-1 rounded-md bg-[#3c3938] mr-2"></i>Incognito Space</span>
                  <i className="fa-solid fa-plus p-2 hover:bg-[#3c3938] rounded-md"></i>
                </div>
              </div>
            </Panel>
            {/* <PanelResizeHandle className="w-[0.1rem] active:bg-[#fda64e] transition duration-300 bg-[#2d2929]" /> */}
          </PanelGroup>}
          <div className='flex flex-col w-full'>
            <HeaderTab />
            <PanelGroup autoSaveId="conditional" direction="horizontal" className="pt-2 pl-2 pr-4">
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
        </div>
      </div>
    </div>
  );
}

export default App;
