import * as React from 'react';

interface Props {
  jsonText: string;
}

const JsonTextArea: React.FC<Props> = ({ jsonText }) => {
  return <textarea style={{ width: 768, height: 300 }} onChange={e => { e.preventDefault(); e.stopPropagation() }} value={jsonText} />;
}

export default JsonTextArea;
