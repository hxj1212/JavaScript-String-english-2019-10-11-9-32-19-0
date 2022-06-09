// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name1 = 'hello'
// TODO write your code here...
name1 = name1.toUpperCase()
console.log(name1)

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.'
//TODO write your code here...
let words = sentence.split(' ')
words.forEach((item, index) => {
  words[index] = item.slice(0, 1).toUpperCase() + item.slice(1)
})
sentence = words.join(' ')
console.log(sentence)

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20'
money = money.replace(/[^0-9]/g, '')
console.log(money)
//TODO write your code here...
