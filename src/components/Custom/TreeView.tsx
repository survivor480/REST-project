import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeView, TreeItem } from '@mui/x-tree-view';

export default function FileSystemNavigator() {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<i className="fa-solid fa-folder-open"></i>}
        defaultExpandIcon={<i className="fa-solid fa-folder"></i>}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}