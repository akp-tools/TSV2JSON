import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

interface Props {
  markdownText: string;
}

const MDRender: React.FC<Props> = ({ markdownText }) => {
  return <ReactMarkdown plugins={[gfm]} children={markdownText} />;
}

export default MDRender;
