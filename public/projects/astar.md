![Grid with walls and path,480,480](/astar1.png)

A simple pathfinding demo for the [Astar/A* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).   
       
         
           
## Requirements:

- Python 3.x
- Pygame, Tkinter (automatically installed)  



## Instructions:

- Install / clone the repo
- Run astar.py
- Other controls are explained in the program  

  

## Algorithm Explanation:

The A* algorithm is a [best-first search](https://en.wikipedia.org/wiki/Best-first_search).  
Each cell on the grid is represented by a node with a **g**,  **h**, and **f** value. 

- **g**
The g-score is the length of the path to the current node.  
- **h**
The h-score is the heuristic that estimates the distance to the target node. This demo uses Euclidean Distance.  
- **f**
The f-score is g + h.  

  
Define a set a nodes.
In each iteration, the node with the lowest f-score from the set is checked.  
If this node is the target, then the algorithm has found the path.  
Otherwise, add each of the node's neighbors to the set and update the g, h, and f scores.  
Repeat until the target node is reached.  

*For a more detailed explanation, click [here](https://www.geeksforgeeks.org/a-search-algorithm/).*

## Demo  
![A* demo in action, 500, 500](/astardemo.gif)