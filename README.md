# Kata Machine Extended
[Extending on the original project of ThePrimeagen](https://github.com/ThePrimeagen/kata-machine)

## Idea
Practice common algorithms and data structures and show-off your progress. Your progress is saved in `stats.json`. This can be used to generate some cool badges on your GitHub profile. The result is visible below:
<br><br>
<img src="https://60zb8i9g0l.execute-api.eu-central-1.amazonaws.com/v1?render=kwkr"/>
<br>

This fetches your `stats.json` and renders your personal badge.

## How to use it?
Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

Clone the repo and install the dependencies

```bash
yarn install
```

Start with an exercise. This command will pick some random exercise for you. Your task is to implement it in `today/index.ts`. If you want to pick some specific exercise, you can add a pattern to include after the command.

```bash
yarn start # optionally, for example "BinarySearch"
```

After your are done with the implementation you can check your solution by running:

```bash
yarn attempt
```

If your solution passes the test, your `stats.json` will be updated accordingly. You can start a new exercise afterwards.

## Available exercises

- ArrayList
- BFSGraphMatrix
- BTBFS
- BTInOrder
- BTPostOrder
- BTPreOrder
- BinarySearchList
- BubbleSort
- CompareBinaryTrees
- DFSGraphList
- DFSOnBST
- DoublyLinkedList
- LRU
- LinearSearchList
- Map
- MazeSolver
- MinHeap
- Queue
- QuickSort
- SinglyLinkedList
- Stack
- Trie
- TwoCrystalBalls