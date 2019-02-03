const problemCount = require("./.leetcode").total;

const script = "ls solutions | grep -E [0-9]{4}.[a-zA-Z1-9-]*.js | wc -l";
const solutionCount = require("child_process").execSync(script);

const progress = Number(((solutionCount / problemCount) * 100).toFixed(2));
const color = progress > 15 ? "yellow" : progress > 30 ? "green" : "red";

const badge = `
{
  "schemaVersion": 1,
  "label": "progress",
  "message": "${progress}%",
  "color": "${color}",
  "namedLogo": "leetcode"
}
`;

require("child_process").execSync(`echo "${badge}" > .leetcode.json`);
