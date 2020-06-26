var Beatles = ['John Lennon plays Guitar', 'Paul McCartney plays Bass Guitar', 'George Harrison plays Lead Guitar', 'Ringo Starr plays Drums'];

const facts =  [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
function johnLennonFacts() {
  var text = [];
  var i = 0;
  while(i <facts.length) {
     text.push(facts[i] + "!!!");
     i++;
  }
 return text;
 
}

console.log(johnLennonFacts());
