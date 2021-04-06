const tsv2Md = (tsvText) => {
  // split into lines
  const tsvLines = tsvText
    .split('\n')
    .map(
      (line) => line.split('\t')
    );

  // determine how many columns we have
  const columns = tsvLines[0].length;

  // create the header delimiter line
  const headerDelimiter = Array(columns).fill('---');

  // insert the header delimiter into the lines array
  tsvLines.splice(1, 0, headerDelimiter);

  // convert each line to a markdown string instead of tab separated
  const mdLines = tsvLines.map(
    line => line.join(' | ')
  );

  // convert markdown lines back to a plain text string
  const mdText = mdLines.join('\n');

  return mdText;
};

export default tsv2Md;
