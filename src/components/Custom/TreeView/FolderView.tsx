import { useState } from "react";

import ClosedFolder from "../../Icons/ClosedFolder";
import OpenFolder from "../../Icons/OpenFolder";

export default function SimpleFolderView() {

    const [openFolder, setOpenFolder] = useState(true);

    const clickHandler = () => {
        setOpenFolder(!openFolder);
    }

    return (
        <div className="directory">
        {openFolder ? <div className="hover:bg-[#393939] rounded mr-3" style={{
            display: "flex"            
          }} onClick={clickHandler}>
          <div className="pl-2">
            <OpenFolder />
          </div>
          <div className="pl-2">
            Test Directory
          </div>
        </div>
        :
        <div className="hover:bg-[#393939] rounded mr-3" style={{
            display: "flex"            
          }} onClick={clickHandler}>
          <div className="pl-2">
            <ClosedFolder />
          </div>
          <div className="pl-2">
            Test Directory
          </div>
        </div>}
      </div>
    )
}