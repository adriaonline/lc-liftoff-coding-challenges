/*  https://edabit.com/challenge/Q3n42rEWanZSTmsJm
    Find the Smallest and Biggest Numbers
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

    Examples
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

    minMax([2334454, 5]) ➞ [5, 2334454]

    minMax([1]) ➞ [1, 1]
    Notes
    All test arrays will have at least one element and are valid.
*/

function minMax(evalNums) {
    evalNums.push = [];
  
    min = Math.min(...evalNums);
    max = Math.max(...evalNums);
  
    console.log("[" + min + ", " + max +"]");
  }
  
minMax([77, 22, 44]);
