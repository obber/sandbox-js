# Common Items in an Array 

This is one of the example problems from Cracking the Coding Interview.

## Given 2 sorted arrays, find the number of elements in common.

```js
A: 2, 4, 7, 10, 11, 15, 20
      –     –           –

B: 4, 6, 8, 10, 20, 22, 46
   –        –   –

// 3 elements in common
```

## Best Conceivable Runtime (BCR)

`O(N)`! We have to touch every element in order to know if it's common or not.

## Brute Force:

Our Brute Force solution is simple:

* Iterate over `A`,
  * Iterate over `B` within each outer iteration
    * Compare the 2, increment if they === each other.

This solution is `O(N^2)` because we touch all elements of an input array, within each iteration over another input array.

## Look for Clues:

If it's mentioned that the arrays are sorted, this is typically information that can be used. A sorted array allows us to search it using a binary search algorithm – Why iterate over every item of the `B` array, if we can cut down the number of potential options in half?

That gets our runtime down to O(N log N), since we're iterating over every element of `A` (`O(N)` operation) and using a binary search through `B` (`O(log N)` operation).

## Look for Repetition

Remember, we know that we **must** touch every element at least once in order to provide an complete & informed answer to our prompt. If we had a way to do a constant look up of wheather an item exists inside of the other array, we are able to achieve an `O(N)` runtime complexity.

## Look for "Free" Operations

Doing a static number of tasks within an iteration – a set number of tasks that **does not** change even if the input size changes – is "free", as far as the runtime complexity is concerned.

This implies that we can store the values of the `A` into some storage mechanism without impacting our runtime complexity.
