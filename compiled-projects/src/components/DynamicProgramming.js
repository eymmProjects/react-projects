//SECTION -  twoSum
var twoSum = function (nums, target) {
  let numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  return [];
};

//SECTION - lengthOfLongestSubstring

var lengthOfLongestSubstring = function (s) {
  let start = 0,
    maxLength = 0;
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end])) {
      start = Math.max(charMap.get(s[end]) + 1, start);
    }

    charMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

//end

//!SECTION isValid

var isValid = function (s) {
  const bracketMap = new Map();
  bracketMap.set("(", ")");
  bracketMap.set("[", "]");
  bracketMap.set("{", "}");

  const stack = [];

  for (var i = 0; i < s.length; i++) {
    if (bracketMap.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (!stack.length || bracketMap.get(stack.pop()) !== s[i]) {
        return false;
      }
    }
  }

  return !stack.length;
};

//SECTION - maxProfit
var prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  var lowPrice = Math.min(...prices);

  var maxPrice = Math.max(...prices);
  var profit = 0;

  for (var i = 0; i < prices.length; i++) {
    if (lowPrice > prices[i]) {
      profit = maxPrice - lowPrice;
      console.log(profit, maxPrice, lowPrice);
    } else {
      return 0;
    }
  }

  return profit;
};

var res = maxProfit(prices);
console.log(res);
