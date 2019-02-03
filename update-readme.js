const problemCount = require("./.leetcode").total;

const script = "ls | grep -E [0-9]{4}.[a-zA-Z1-9-]*.js | wc -l";
const solutionCount = require("child_process").execSync(script);

const progress = Number(((solutionCount / problemCount) * 100).toFixed(2));

const readme = `
# leetcode-js

![https://img.shields.io/badge/progress-${progress}%25-red.svg](https://img.shields.io/badge/progress-${progress}%25-red.svg)

This repo contains my personal accepted submissions to [leetcode.com](https://leetcode.com) problems using the JavaScript language.

`;

require("child_process").execSync(`echo "${readme}" > README.md`);
