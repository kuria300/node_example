console.log('this is the first statement');
//the first console log statement is pushed to the call stack, and “This is the first statement” is logged on the console,
// and the task is popped from the stack.

setTimeout(()=>{
 console.log('this is the second statement')
}, 0)
//Next, the setTimeout is pushed to the queue and the task is sent to the Operating system and the timer is set for the task.
// This task is then popped from the stack. 

console.log('this is the third statement');
//the third console log statement is pushed to the call stack, and
// “This is the third statement” is logged on the console and the task is popped from the stack. 


//the callback is sent to the event queue. The event loop on finding the call stack empty takes the task at the top of the event queue and 
//sends it to the call stack. The callback function for the setTimeout function runs the instruction and 
//“This is the second statement” is logged on the console and the task is popped from the stack.