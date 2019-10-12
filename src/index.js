module.exports = function check(str, bracketsConfig) {
  var excess = []; //Array
  var howManyOpenPairsBrackets = 0; //Brackets in Brackets (how much times)
  var checkedString = str; //string to be checked

  for (var i = 0; i < checkedString.length; i++) {
    for (var x = 0; x < bracketsConfig.length; x++) {
      if (checkedString[i] == bracketsConfig[x][1]) {
        if (excess[howManyOpenPairsBrackets] == x) {
          howManyOpenPairsBrackets++
        }
        else {
          if (checkedString[i] == bracketsConfig[x][0]) {
            howManyOpenPairsBrackets--;
            excess[howManyOpenPairsBrackets] = x
          }
          //check to excess and exit
          else {
           return false;
          }
        }
      }
      else {
        if (checkedString[i] == bracketsConfig[x][0]) {
          howManyOpenPairsBrackets--;
          excess[howManyOpenPairsBrackets] = x
        }
      }
    }
  }

  if (howManyOpenPairsBrackets == 0) {
    return true;
  }
  else {
    return false;
  }

}
