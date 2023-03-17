let stack1 = []
let stack2 = []

function enqueue(item) {
    stack1.push(item)
    console.log(`Stack after ENQUEUE:\nStack1:`, stack1, '\nStack2:', stack2)
}


function dequeue() {
    let poppedItem = stack1.pop()
    stack2.push(poppedItem)
    console.log('Dequed element:', poppedItem)
    console.log('Stack after DEQUEUE:\nStack1:', stack1, '\nStack2:', stack2)
}


enqueue('a')
enqueue('b')
dequeue()