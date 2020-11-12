const fs = require('fs');

const TITLE = '## Table of Contents';

fs.readFile('README.md', 'utf8', (error, contents) => {

  let chapter = 0;
  let paragraph = 0;

  const tableOfContents = contents.match(/^(#+)\s(.+)/gm).reduce((table, header) => {
    const depth = header.match(/^(#+)/)[0].length;
    if (header === TITLE) return table;

    if (depth === 2 || depth === 3) {
      const title = header.substring(depth + 1);
      let pre;

      if (depth === 2) {
        chapter++;
        paragraph = 0;
        pre = `${chapter}.`
      } else if (depth === 3) {
        paragraph++;
        pre = `   ${paragraph}.`
      }
      return `${table}${pre} [${title}](#${title.toLowerCase().replace(/\s/g, '-')})\n`;
    }
    return table;
  }, `${TITLE}\n\n`);
  console.log(tableOfContents);
});
