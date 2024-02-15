function firstWord(s) {
   let str = s.trim();
   str = str.split(' ');    
   return str[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
