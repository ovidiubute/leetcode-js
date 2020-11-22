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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  var dfs = function (node, accumulator) {
    if (node === null) {
      return;
    }

    accumulator += node.val;
    if (!node.left && !node.right) {
      sum += parseInt(accumulator);
    } else {
      dfs(node.left, accumulator);
      dfs(node.right, accumulator);
    }
  };

  dfs(root, "");

  return sum;
};
