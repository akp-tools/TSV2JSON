import * as React from 'react';

import MDTextArea from './components/MDTextArea';
import MDRender from './components/MDRender';
import TSVTextArea from './components/TSVTextArea';

import tsv2Md from './lib/TSV2MD';

const App = () => {
  const [tsvText, setTsvText] = React.useState('');
  const [mdText, setMdText] = React.useState('');

  React.useEffect(() => {
    setMdText(tsv2Md(tsvText));
  }, [tsvText, setMdText]);

  return (
    <>
      <span>TSV:</span>
      <br />
      <TSVTextArea onUpdate={t => setTsvText(t)} />
      <br />
      <span>MD:</span>
      <br />
      <MDTextArea markdownText={mdText} />
      <br />
      <br />
      <span>Rendered:</span>
      <br />
      <MDRender markdownText={mdText} />
    </>
  )
};

export default App;
