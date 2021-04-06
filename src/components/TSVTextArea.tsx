import * as React from 'react';

interface Props {
  onUpdate: (newText) => void;
}

const TSVTextArea: React.FC<Props> = ({ onUpdate }) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    onUpdate(text);
  }, [text]);

  return <textarea style={{ width: 768, height: 300 }} onChange={(e) => setText(e.currentTarget.value)} defaultValue="" />;
}

export default TSVTextArea;
