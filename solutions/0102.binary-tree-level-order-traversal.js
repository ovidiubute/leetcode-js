/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let solution = [];

  var bfs = function (node, level) {
    if (!node) {
      return;
    }

    if (solution.length === level) {
      solution.push([]);
    }

    solution[level].push(node.val);
    if (node.left) {
      bfs(node.left, level + 1);
    }
    if (node.right) {
      bfs(node.right, level + 1);
    }
  };

  bfs(root, 0);

  return solution;
};
