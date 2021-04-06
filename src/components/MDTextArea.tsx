import * as React from 'react';

interface Props {
  markdownText: string;
}

const MDTextArea: React.FC<Props> = ({ markdownText }) => {
  return <textarea style={{ width: 768, height: 300 }} onChange={e => { e.preventDefault(); e.stopPropagation() }} value={markdownText} />;
}

export default MDTextArea;
