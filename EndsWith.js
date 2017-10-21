function confirmEnding(str, target) {
  if(str.endsWith(target)){					//using .endsWith()
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");