import React from 'react';
import './style.css';

import useJsonFetch from './hooks/useJsonFetch';

function CallCustomHook({ url, opts }) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && 'Has Error'}</h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CallCustomHook url={process.env.REACT_APP_DATA_URL} />
      <hr />
      <CallCustomHook url={process.env.REACT_APP_ERROR_URL} />
      <hr />
      <CallCustomHook url={process.env.REACT_APP_LOADING_URL} />
      <hr />
    </div>
  );
}
