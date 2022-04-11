const tsv2Json = (tsvText) => {
  // split into lines
  const tsvLines = tsvText
    .split('\n')
    .map(
      (line) => line.split('\t')
    );

  // the keys are the first line, everything else is data
  const [keys, ...data] = tsvLines;

  // map over data lines
  const json = data.map(
    // for each line, reduce over keys
    (line) => keys.reduce(
      (obj, k, i) =>
        // object property `k` set to matching value from the line
        // return resulting object for reducer
        // yes, this is confusing, but this was fun to write this way.
        // the object assignment needs to be in parentheses or else the line data and object will get ANDed together before the assignment instead.
        (obj[k] = line[i]) && obj,
      // default to an empty object
      {}
    )
  );

  return JSON.stringify(json, null, 2);
};

export default tsv2Json;
