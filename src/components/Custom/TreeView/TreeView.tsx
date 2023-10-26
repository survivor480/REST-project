import React, {useState} from "react";
import OpenFolder from "../../Icons/OpenFolder";
import ClosedFolder from "../../Icons/ClosedFolder";
import SimpleFolderView from "./FolderView";

function DirectoryTreeView() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <SimpleFolderView />
    </div>
  );
}

export default DirectoryTreeView;