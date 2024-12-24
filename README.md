# React Native FlatList Error: Rendering Primitive Data Types in renderItem

This repository demonstrates a common error encountered when using the `FlatList` component in React Native: attempting to render a primitive data type (like a string, number, or object) directly within the `renderItem` function.  React Native requires a React component to be returned by the `renderItem` function. This example shows the incorrect implementation and the corrected version.

## Bug

The `bug.js` file contains the code that produces the error. The error occurs because the `renderItem` function attempts to render the data item directly instead of returning a React component.

## Solution

The `bugSolution.js` file provides the corrected implementation.  The `renderItem` function now returns a properly formatted React component (a `Text` component in this case) that displays the data.  

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app using a React Native emulator or physical device.
4. Observe the error in the `bug.js` example and the correct output in the `bugSolution.js` example.