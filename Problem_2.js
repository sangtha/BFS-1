//Leetcode: https://leetcode.com/problems/course-schedule/
//first graph problem with adjacency list. 
// T.C O(V+E) => O(n+n)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    let allCourses = new Array(numCourses).fill(0);
    let courseMap = new Map();
    let bfsQueue = [];

    // Push all the prerequisites into courseMap and count the number of courses to be taken
    for (let i=0; i<prerequisites.length; i++) {
        allCourses[prerequisites[i][1]]++; 
        if (!courseMap.has(prerequisites[i][0])) {
            courseMap.set(prerequisites[i][0], []);
        }
        courseMap.get(prerequisites[i][0]).push(prerequisites[i][1]);
    }

    //To start the bfs, push all the subjects with no prerequistes
    for (let i=0; i<allCourses.length; i++) {
        if (allCourses[i] == 0) {
            bfsQueue.push(i);
        }
    }

    //Once we have initial prerequistes, then with each cycle we add the subjext with had the current subject as its prequistes and so on till we have a empty queue
    while (bfsQueue.length > 0) {
        let course = bfsQueue.pop()
        let children = courseMap.get(course);
        if (children != null) {
            for(const child of children) {
                allCourses[child]--;
                if (allCourses[child] == 0) {
                    bfsQueue.push(child);
                }
            }
        }
    }

    // if we have exhausted all the courses then we can take up all the subjects and complete the courses else we cannot
    for (let i=0; i<allCourses.length; i++) {
        if (allCourses[i] != 0) return false;
    }

    return true;
};