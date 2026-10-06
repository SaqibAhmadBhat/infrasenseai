
/* eslint-disable @typescript-eslint/no-require-imports */
const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');
const fs = require('fs');

const css = fs.readFileSync('styles/globals.css', 'utf8');

postcss([tailwindcss()])
  .process(css, { from: 'styles/globals.css', to: 'styles/globals-compiled.css' })
  .then(result => {
    fs.writeFileSync('styles/globals-compiled.css', result.css);
    console.log('CSS compiled successfully.');
  })
  .catch(err => {
    console.error(err);
  });
