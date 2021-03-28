![Grid with walls and path,480,480](/astar1.PNG)

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
The g-score is the length of the path to a certain node. If you were to move 3 cells left and 2 up, the g-score would be 5.
- **h**
The h-score is the heuristic that estimates the distance to the target node. This demo uses Manhattan Distance.
- **f**
The f-score is g + h.

  
Define a set a nodes.
In each iteration, the node with the lowest f-score from the set is checked.  
If this node is the target, then the algorithm has found the path.  
Otherwise, add each of the node's neighbors to the set and update the g, h, and f scores.  
Repeat until the target node is reached.  

*For a more detailed explanation, click [here](https://www.geeksforgeeks.org/a-search-algorithm/).*

## Code Example
# TODO: just get rid of code and put a gif

```python
def astar(ctx):
    # start is the starting node
    start.g = 0
    start.h = heu(start, end)

    # init open/closed sets, add start to open
    openSet = []
    closedSet = []
    openSet.append(start)

    # while openSet is not empty
    while(len(openSet) > 0):
        start.set_start()
        end.set_end()

        # find the tile in openSet with the lowest f score
        lowestInd = 0
        for i in range(len(openSet)):
            if openSet[i].f < openSet[lowestInd].f:
                lowestInd = i

        # remove the lowest f score tile from the openSet and add it to the closedSet
        current = openSet.pop(lowestInd)
        closedSet.append(current)
        current.set_closed()

        # are we at the end? if so show path
        if(current == end):
            return show_path()

        # tiles around current node
        children = current.get_children()

        # number of children that were actually added into the openSet. if less than 0, do not yield and waste time
        good_children = 0

        for i in range(len(children)):
            child = children[i]

            will_cont = False

            #if in closedSet, go to next
            for n in closedSet:
                if child.x == n.x and child.y == n.y:
                    will_cont = True
                    break

            if will_cont:
                continue

            # if in openSet, check if new f score would be better, if so, replace that tile with this child
            for n in openSet:
                if child == n:
                    will_cont = True
                    if current.g + heu(current, child) + child.h < child.f:
                    # if current.g < child.g:
                        child.g = current.g + heu(current, child)
                        child.f = child.g + child.h
                        child.parent = current
                        break


            if will_cont:
                continue

            # set values for child node
            child.g = current.g + heu(current, child)
            child.h = heu(child, end)
            child.f = child.g + child.h
            child.parent = current

            openSet.append(child)
            child.set_open()
            good_children+=1


        if good_children > 0:
            yield

    return False
```