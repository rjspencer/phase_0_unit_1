/*
Phase 0 - Unit 1 - Week 3 - Section 6
Group Project
gc1_user_stories.js
*/

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


Create the following functions and test to run through our new "assert()" function.
	Use these two arrays for testing.	
		oddLengthArray is composed of 1, 2, 3, 4, 5, 5, 7.
		evenLengthArray is composed of  4, 4, 5, 5, 6, 6, 6, 7.

Function: sum()
Purpose: To find the sum of any group of numbers.

Verify that sum() works properly:
	Test 1: 
	Verify that sum() is a function or give the error message "sum should be a Function."

	Test 2:
	Given the array oddLengthArray, verify that sum() comes up with 27 as the solution or give the error message "sum should return the sum of all elements in an array with an odd length."

	Test 3:
	Given the array evenLengthArray, verify that sum() comes up with 43 as the solution or give the error message "sum should return the sum of all elements in an array with an even length."



Function: mean()
Purpose: Find the average of any group of numbers.

Verify that mean() works properly:
	Test 4:
	Verify that mean() is a function or give the error message "mean should be a Function."

	Test 5:
	Given the array oddLengthArray, verify that mean() comes up with 3.857142857142857 as the solution or give the error message "mean should return the average of all elements in an array with an odd length."

	Test 6:
	Given the array evenLengthArray, verify that mean() comes up with 5.375 as the solution or give the error message "mean should return the average of all elements in an array with an odd length."



Function: median()
Purpose: Find the median of any group of numbers.  If the group of numbers is even, average the middle 2 numbers.

Verify that median() works properly:
	Test 7:
	Verify that median() is a function or give the error message "mean should be a Function."

	Test 8:
	Given the array oddLengthArray, verify that median() comes up with 4 as the solution or give the error message "mean should return the average of all elements in an array with an odd length."

	Test 9:
	Given the array evenLengthArray, verify that median() comes up with 5.5 as the solution or give the error message "median should return the median value of all elements in an array with an even length."












