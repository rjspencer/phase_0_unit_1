/*
Phase 0 - Unit 1 - Week 3 - Section 6
Group Project
gc1_user_stories.js
*/

/*
USER STORY

I want a function called "assert()" that can test any other segment of TRUE/FALSE code.  I also want it to be flexible enough to test many different TRUE/FALSE code segments at a time.  I want to be able to send this function 3 pieces of information:
    -The TRUE/FALSE code segment I want to test.
    -A message describing the error if there is one. 
    -A number to identify the code I am checking. 

After the assert() function receives these 3 bits of information, it should list out each section of code by number and tell if it has passed(true) or if it has failed(false).  In the case of a failure, I would also like to receive the message describing the error.

As an example, I send several different TRUE pieces of code and a one FALSE that tries to evenly divide 13 by the number 2 and the program would say: 

1 true
2 true
3 true
4 false ERROR: Only even numbers are divisible by 2!
5 true
6 true

*/