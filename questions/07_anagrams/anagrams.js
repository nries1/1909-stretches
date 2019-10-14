// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  return Array.from(str1).every(el => str2.indexOf(el) !== -1);
};

module.exports = { checkAnagrams };
