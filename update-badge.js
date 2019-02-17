// Update this over time from leetcode.com
const TOTAL_PROBLEM_COUNT = 991;

// Count how many solutions we have so far
const countSolutionsScript = "ls solutions | wc -l";
const solutionCount = Number(
  require("child_process")
    .execSync(countSolutionsScript)
    .toString()
);

// Compute our progress
const progress = Number(
  ((solutionCount / TOTAL_PROBLEM_COUNT) * 100).toFixed(2)
);

console.log(progress);

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
require("fs").writeFileSync("./.shieldsio.json", output, {
  flag: "w"
});
