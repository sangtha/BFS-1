// Leetcode: https://leetcode.com/problems/binary-tree-level-order-traversal/

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

//Run DFS to find the arrays at each level, if result array is same level as dfs level, 
// then first time we create a empty arry and each time we push the left and right values of all nodes at same level
//Time complexity : O(n)
// S.C : O(n)
var levelOrder = function(root) {
    let result = [];

    const dfs = (root, level, result) => {
        if(root === null) return; 

        if(result.length === level){
            result.push([]);
        }
        
        result[level].push(root.val);

        dfs(root.left, level+1, result);
        dfs(root.right, level+1, result);
    }

    dfs(root, 0, result)
    return result;
};