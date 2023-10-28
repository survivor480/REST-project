import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import OpenFolder from '../../Icons/OpenFolder';
import ClosedFolder from '../../Icons/ClosedFolder';
import SettingsEllipsis from '../../Icons/SettingsEllipsis';
import ReactMenu from '../ReactMenu/ReactMenu';

export default function SampleTreeView() {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<OpenFolder />}
        defaultExpandIcon={<ClosedFolder />}
        disableSelection={true}
      >
        <TreeItem nodeId="1" label={
          (
            <div className='flex justify-between items-center'>
              <div className=''>
                Applications
              </div>
              <ReactMenu />
            </div>
          )
        } className='hover:bg-stone-800 rounded-xl items-center'>
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