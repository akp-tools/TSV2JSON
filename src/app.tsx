import * as React from 'react';

import JsonTextArea from './components/JsonTextArea';
import TSVTextArea from './components/TSVTextArea';

import tsv2Json from './lib/TSV2JSON';

const App = () => {
  const [tsvText, setTsvText] = React.useState('');
  const [jsonText, setJsonText] = React.useState('');

  React.useEffect(() => {
    setJsonText(tsv2Json(tsvText));
  }, [tsvText, setJsonText]);

  return (
    <>
      <span>TSV:</span>
      <br />
      <TSVTextArea onUpdate={t => setTsvText(t)} />
      <br />
      <span>JSON:</span>
      <br />
      <JsonTextArea jsonText={jsonText} />
    </>
  )
};

export default App;
