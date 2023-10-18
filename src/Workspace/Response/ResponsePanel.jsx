import React, { useState, useEffect } from 'react';
import prettyBytes from 'pretty-bytes';

import ResponseTabGroup from '../../Tab-Groups/ResponseTabGroup';

export default function Response({ response, loading }) {
  const [doc, setDoc] = useState('{}');

  useEffect(() => {
    if (response === null) return;
    const jsonResponse = JSON.stringify((response.data || response.response.data), null, 2);
    console.log(response)
    setDoc(jsonResponse);
  }, [response, loading]);
  console.log(response)


  const hasResponse = !(response == null);

  let time = '';
  let status = '';
  let size = '';

  if (hasResponse) {
    const hasCustomData = 'customData' in response;
    const hasData = 'data' in response;
    const hasHeaders = 'headers' in response;

    status = hasResponse ? response.status : response.data.status;

    if (hasData && hasHeaders) {
      size = prettyBytes(
        (hasResponse ? JSON.stringify(response.data || response.response.data).length : 0) +
          (hasResponse ? JSON.stringify(response.headers || response.response.headers).length : 0)
      );
    }

    if (hasCustomData) {
      time = response.customData.time;
    }
  }
  const RenderedResponseMeta = () => {
    return (
      <div className="flex mt-3 justify-end mr-4 gap-3">
        <span className='whitespace-nowrap text-xs'>Status: {status || response.response.status}</span>
        <span className='whitespace-nowrap text-xs'>Time: {time}</span>
        <span className='whitespace-nowrap text-xs'>Size: {size}</span>
        <span className='whitespace-nowrap text-xs'>Message: {response.message}</span>
      </div>
    );
  };

  return (
    <div className='my-4 ml-5 h-60'>
      <span className='text-sm font-medium'>Response</span>
      {response ? ( <RenderedResponseMeta /> ) : null}
      <ResponseTabGroup
        doc={doc}
        setDoc={setDoc}
        response={response}
        loading={loading}
      />
      </div>
  );
}
