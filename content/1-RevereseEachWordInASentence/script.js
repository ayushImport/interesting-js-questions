
function reverse(data, splitOn=' ', joinOn=' ') {
    // splitting sentence
    let bag = data.split(splitOn)
    // reversing the words
    bag.reverse()
    // joining to form sentence
    return bag.join(joinOn)
}


// Case 1: Reverse sentence on the words

//Sub-case I: Without using reverse() function

function reverseSentenceOnWords (sentence) {
    
    let bagOfWords = sentence.split(' ')
    bagOfWords.reverse()
    let newSentence = bagOfWords.join(' ')
    // console.log(newSentence)
    return newSentence
}

//Sub-case II: With using reverse() function

function reverseSentenceOnWords2 (sentence) {
    // console.log(reverse(sentence, ' ', ' '))
    return reverse(sentence, ' ', ' ')
}

reverseSentenceOnWords2('Reverse a sentence taking word as a building block')


// Case 2: Reverse each word in a sentence

function reverseEachWordInASentence(sentence) {
    let bagOfWords = sentence.split(' ')
    let newbagOfWords = []
    for (word of bagOfWords) {
        let newWord = reverse(word, '', '')
        // console.log(newWord)
        newbagOfWords.push(newWord)
    }
    newSentence = newbagOfWords.join(' ')
    console.log(newSentence)
    return newSentence
}

reverseEachWordInASentence('Reverse a sentence taking word as a building block')