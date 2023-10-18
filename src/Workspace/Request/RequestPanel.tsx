import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import {v} from 'uuid'
import axios from 'axios';
import UrlEditor from '../../Panes/RequestUrl/UrlEditor';
import RequestTabGroup from '../../Tab-Groups/RequestTabGroup';
import { convertKeyValueToObject } from '../../utils/helpers';

const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
];

export default function Request({ setResponse, setLoading, loading }: {
  setResponse: any;
  setLoading: any;
  loading: any;
}) {
  const [url, setUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  const [reqMethod, setReqMethod] = useState('GET');
  const [queryParams, setQueryParams] = useState(keyPairInitState);
  const [headers, setHeaders] = useState(keyPairInitState);
  const [body, setBody] = useState('{\n\t\n}');

  const handleOnInputSend = async (e: { preventDefault: () => void; }) => {
    setLoading(true);

    e.preventDefault();
    const requestBody = body.toString();
    console.log('http method', reqMethod);
    console.log('headers', headers);
    console.log('query params ', queryParams);
    console.log('body ', requestBody);

    let data;
    try {
      data = JSON.parse(requestBody);
    } catch (e) {
      alert('Something is wrong with the JSON data.');
    }

    try {
      const response = await axios({
        url: url,
        method: reqMethod,
        params: convertKeyValueToObject(queryParams),
        headers: convertKeyValueToObject(headers),
        data,
      });

      setResponse(response);
    } catch (e) {
      console.log(e);
      setResponse(e);
    }
    setLoading(false);
  };
  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
        onInputSend={handleOnInputSend}
      />
      <RequestTabGroup
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={'{\n\t\n}'}
        setBody={setBody}
      />
    </>
  );
}
