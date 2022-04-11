const tsv2Json = (tsvText) => {
  // split into lines
  const tsvLines = tsvText
    .split('\n')
    .map(
      (line) => line.split('\t')
    ) as any[];

  // the keys are the first line
  const keys = tsvLines[0];

  console.log(keys)

  const json = [];

  tsvLines.slice(1, tsvLines.length).forEach((line) => {
    console.log(line);

    const obj = {};

    keys.forEach((k, i) => {
      obj[k] = line[i];
    });

    json.push(obj);
  });

  console.log(JSON.stringify(json, null, 2))

  return JSON.stringify(json, null, 2);
};

export default tsv2Json;
