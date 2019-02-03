/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => {
    return a.start - b.start;
  });

  let ints = [];

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= end) {
      end = Math.max(end, intervals[i].end);
    } else {
      ints.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }

  ints.push(new Interval(start, end));

  return ints;
};
