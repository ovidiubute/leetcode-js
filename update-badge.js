// Update this over time from leetcode.com
const TOTAL_PROBLEM_COUNT = 932;

// Count how many solutions we have so far
const countSolutionsScript =
  "ls solutions | grep -E [0-9]{4}.[a-zA-Z1-9-]*.js | wc -l";
const solutionCount = require("child_process").execSync(countSolutionsScript);

// Compute our progress
const progress = Number(
  ((solutionCount / TOTAL_PROBLEM_COUNT) * 100).toFixed(2)
);

// Badge data for shields.io
const color = progress > 15 ? "yellow" : progress > 30 ? "green" : "red";
const badge = {
  schemaVersion: 1,
  label: "progress",
  message: `${progress}%`,
  color,
  namedLogo: "leetcode"
};

// Run output through prettier
const prettier = require("prettier");
const output = prettier.format(JSON.stringify(badge), {
  parser: "json"
});

// Write shields.io badge data to disk
require("fs").writeFileSync("./.leetcode.json", output, {
  flag: "w"
});
