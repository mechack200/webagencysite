// // trie is a special tree that has special and associated keys
//   class Node {

//   constructor(ch) {
//     this.ch = ch; // character.

//     this.children = []; // contains Node objects not character.
//     this.isWord = false;
//     this.wordCount = 0;
//   }

//   isEmpty() {
//     // this will return false, since the the length wil be greter than 0
//     return !this.children.length > 0;
//     }
// }


// class Trie {
//   constructor() {
//     this.root = new Node('*');
//   }

//   add(word) {
//     let node = this.root;
//     // go through each word char by char.
//     for (let ch of word.toUpperCase()) {
//       let found = false;
//       // Go through each child and see if 'ch' is child.char
//         for (let child of node.children) {
//           if (child.ch === ch) {
//             // Add new child node.
//             found = true;
//             child.wordCount++;
//             node = child;
//             break;
//           }
//         }

//       if (!found) {
//         const newNode = new Node(ch);
//        //push the new node into the children array
//         node.children.push(newNode);
//         node = newNode;
//       }
//     }
//     node.isWord = true;
//   }

//   addSentence(sentence) {
//     for (let word of sentence.split(' ')) {
//       console.log(word);
//       this.add(word);
//     }
//   }

//   find(word) {
//     if (this.root.isEmpty()) return false;

//     let node = this.root;
//     let found = false;

//     for (let ch of word.toUpperCase()) {
//       found = false;
//       for ( let child of node.children) {
//         if (child.ch === ch) {
//           found = true;
//           node = child;
//           break;
//         }
//       }
//       // if each character in the word found is true;
//       if (!found) {
//         return false;
//       }
//     }
//     return true;
//   }
// }


// trie = new Trie();
// trie.add('bUy');
// trie.add('buyered');
// trie.add('ed');

// trie.addSentence('Victor could be really annoying at times')
// console.log(trie.find('bu'));
// console.log(trie.find('vic'));
// console.log(trie.find('red'));

// END OF VICTOR TRIE DATA STRUCTURE ################################
        //            [  *  ]  root node
        //            /  |  \
        //         [b]  [d]  [s]  keys node map
        //         /     /     \
        //      [a]    [o]     [e]
        //      / \    / \       \
        //   [l] [t] [l]  [r]    [n]
        //   /      /      \     /  \
        // [l]    [l]      [m]  [d]  [s]
        //                             \
        //                             [e]


let Node = function(){
    // each node has this properties
    this.keys = new Map();
    this.endWord = false;
    this.setEnd = function(){
      return this.endWord
    }
    this.isEnd = function(){
       return true;
    }
}
let TrieTree = function(){
  this.root = new Node();
  // add function
  this.add = function(word, node = this.root){
    //check for the input lenght
    // if length is 0, set node end to true
    if(word.length == 0){
      node.setEnd();
      return;
  }
  // else if the input lenght is greater than 0 , map through the node keys(character)
  //check if the first character of the input is in the node
  // set the input first character as the new node
  // return the add function and set the argument input as the second character of the input
   else if(!node.keys.has(word[0])){
     node.keys.set(word[0], new Node());
     return this.add(word.substr(1), node.keys.get(word[0]));
  }
   else {
     return this.add(word.substr(1), node.keys.get(word[0]))
   }
 };
  this.isWord = function(inputWord){
     node = this.root;
     while(inputWord.length > 1){
       // check may be the first character of the input word is in the node
       if(!node.keys.has(inputWord[0])){
          return false;
       }
       // else if the first character is in the trei TrieTree
       // get the first character of the input word and set it as the current
       // update inputWord by making the start character the as the first character
       else {
         node = node.keys.get(inputWord[0]);
         inputWord = inputWord.substr(1);
       }
     }
     return (node.keys.has(inputWord[0]) && node.keys.get(inputWord[0]).isEnd())? true : false;
  };
}
myTrie = new TrieTree();
myTrie.add("taiwo")
myTrie.add("ball");
myTrie.add('bat');
console.log(myTrie.isWord("taiwo"));
console.log(myTrie.isWord("bat"));
console.log(myTrie.isWord("all"));
console.log(myTrie.isWord("ba"));
console.log(myTrie.isWord("bat"));
console.log(myTrie.isWord("b"));


// ###################################################################################
console.log("queistion 1");
console.log(" CodeWars Question")
// CodeWars Question
//
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]


function comp(a, b){
  if(a.length === 0 || b.length ===0){
    return false;
  }
  else{
    var array_of_MultipleOf_a = a.map(num => num*num);
    var array_store = [];
    for( let elem of array_of_MultipleOf_a){
      if(b.includes(elem)){
         var a = b.indexOf(elem);
         b.push(true);
         b.splice(a,1);
      }
      else{
        b.push(false);
      }
    }
  }
  return b.includes(false) ? false : true;
}

console.log(comp([1,2,3],  [1,4,9]));
console.log(comp([1,2,3],  [1,2,3]));
console.log(comp([2,4,3],  [4,16,9]));
console.log(comp([2,4,3],  [16,9,4]));
console.log(comp([1,2,3],  [1,2,3]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361] ))

//############################################################
// BEGINNING OF STACK DATA STRUCTURE
console.log("");
console.log("STACK DATA STRUCTURE")
 // CREATING A STACK
  function Stack(){
     this.storage = {};
      this.count = 0; // it keep track of how many items are in the stack

     // add  value to the end of the storage
     this.push =  function(value){
         this.storage[this.count] = value;
         this.count++;
     }

     // remove element from the top of the storage, if storage has no item
     // return undefine
     this.pop = function(){
       if(this.count === 0){
         return undefine;
       }else{
         // decrement the count by 1
         this.count--;
         var result = this.storage[this.count] // update the STACK
         delete this.storage[this.count] // delete the formal stack
       }
       return result;
     }
     // return the size f the stack
     this.size = function(){
       return this.count;
     }

     // return the top element of the stack
     this.peek= function(){
       return this.storage[this.count-1];
     }

  }

     var mystack = new Stack();
     mystack.push(3);
     mystack.push(6);
     mystack.push("taiwo");
     console.log(mystack.peek());
     console.log(mystack.size());
     console.log(mystack.pop());
     console.log(mystack.size());

//############################################################
  // console.log("CONVERSION OFDECIMAL TO BINARY USING STACK");
  // function convertionofDecimaltoBinary(decimalNumber){
  //   var newStack = new Stack();
  //   let binaryNumber ="";
  //   var store = [] ;
  //   while(decimalNumber > 0){
  //     // divide the number and get the modulus
  //     // push the modulus inside the newStack
  //      let y = Math.floor(decimalNumber % 2);
  //      newStack.push(y);
  //      decimalNumber = Math.floor(decimalNumber % 2);
  //   }
  //   binaryNumber += newStack.pop().toString();
  //   return binaryNumber;
  // }
  // console.log(convertionofDecimaltoBinary(5));
//############################################################
 console.log("Dictionary data structure");

// Dictionary data structure
 function Dictionary(){
   let items = [];

   this.has = function(key){
      return key in items;
   }
   this.set = function(key, value){
    // set the value to be equals to the key
     items[key] = value;
   }

   // returns the values of the items
   this.values = function(){
     let valueHolder = [];
     for(var i in items){
       // if the has method has the key as part of the returned keys,
       if(this.has(items[i]));
       valueHolder.push(items[i]);
     }
     return valueHolder;
   }
   // return the keys of the items
   // usinfg an inbuild function object.keys(items)
   this.key = function(){
    return Object.keys(items);
   }
   this.size = function(){
     return Object.keys(items).length;
   }
   this.printDictionary = function(){
     return items;
   }
 }
  let u = new Dictionary();
    u.has();
    u.set(2,"taiwo");
    u.set(3,"tony");
    u.set(10,"Esther");
    console.log(u.has(3));
    console.log(u.has(2));
    console.log(u.has(21));
    console.log(u.values());
    console.log(u.key());
    console.log(u.size());
    u.set(1,"tolai");
    u.set(6,"tola");
    u.set(4,"yomi");
    console.log(u.size());
    console.log(u.printDictionary());
