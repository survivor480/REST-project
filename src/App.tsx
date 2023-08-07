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
          {open && <PanelGroup direction="horizontal" style={{ width: 300 }}>
            <Panel minSize={minSize} defaultSize={20} >
              <div className='bg-[#231f1f] w-[250px] p-3 h-screen'>
                <div className='flex justify-between text-[#bbb9b6] items-center text-xs'>
                  <span><i className="fa-solid fa-shield-halved p-1 rounded-md bg-[#3c3938] mr-2"></i>Incognito Space</span>
                  <i className="fa-solid fa-plus p-2 hover:bg-[#3c3938] rounded-md"></i>
                </div>
              </div>
            </Panel>
          </PanelGroup>}
          <div className='flex flex-col w-full'>
           <HeaderTab />
          <PanelGroup direction="horizontal" className="pt-2 pl-2 pr-2">
            <Panel minSize={minSize} className="rounded-tl-xl">
              <div className='bg-[#231f1f] w-full h-screen flex justify-between p-2 border-r border-r-[#2d2929]'>
                panel1
                <i className="fa-solid fa-code" onClick={() => setShow(!show)}></i>
              </div>
            </Panel>
            <PanelResizeHandle className="active:bg-[#fda64e]">
              <Block style={{ width: 1, marginLeft: 1 }} />
            </PanelResizeHandle>
            {show &&
              <Panel>
                <div className='bg-[#231f1f] w-full h-screen flex justify-between p-2 border-r border-r-[#2d2929]'>
                  panel2
                </div>
              </Panel>
            }
            <PanelResizeHandle className="active:bg-[#fda64e]">
              <Block style={{ width: 1, marginLeft: 1 }} />
            </PanelResizeHandle>
            <Panel className="rounded-tr-xl">
              <div className='bg-[#231f1f] w-full h-screen flex justify-between p-2'>
                panel3
              </div>
            </Panel>
          </PanelGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
