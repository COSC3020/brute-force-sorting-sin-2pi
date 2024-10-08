# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

The runtime complexity of this permutation sort is $O(n!)$. The reason being, all permutations are calculated in a factorial order. you test the $n^{th}$ permutation, then the $(n-1)$ permutation, then the $(n-2)$ permutation, so on. It follows that $n! = n * (n-1)!$. This is my reasoning for concluding a runtime complexity of $O(n!)$.

The best case is an input array that is already sorted. We still have to go over each element in the array however, just to ensure it is sorted. It follows that the best case time complexity is $O(n)$. 

The worst case input is a very large one, and one where we have to go through each permutation in order to find the sorted array. Since the algorithm scales factorially, the larger an input size the more possible permutations there are, and the more options have to be checked in order to stumble upon the sorted array. As an example, an array of size 1000, would have $1000! = 4.0238726 E+2567$ permuations. That is a huge number! The worst case time complexity is $O(n!)$

If you generate permutations without using memory, they would be random. You have no way of tracking if you already tested a permutation, or if the permutation is even in bounds of your input. So, in theory you could just continually test the same permutation, seeing if it is sorted because it may not be a valid permutation, or it could have already been checked. I would say the time complexity is N/A (is there a more formal way to say this?), it could run infinitely.

**Sources:**
I used AI to help me build the permutation generator function. I understand the concept of permutation and how you would go about generating all possible permutations of an input but I needed help implementng it.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
