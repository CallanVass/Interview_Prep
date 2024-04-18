# Interview_Prep

## TalentForge API

What is it?

How was it built?

Hardest part about creating it?

Something you enjoyed?

What would you fix going forward?

What's something you learned?


## TalentForge Front-End

What is it?

How was it built?

Hardest part about creating it?

Something you enjoyed?

What would you fix going forward?

What's something you learned?


## Flask API

What is it?

How was it built?

Hardest part about creating it?

Something you enjoyed?

What would you fix going forward?

What's something you learned?


## Dracula's Castle (CL Application)

### What is it?

Dracula's Castle is a command line application built with Python. It's a text-based adventure game that has multiple endings, a blood-glut meter to track player's corruption levels, and a changeable notebook allowing users to write down clues they find.

### How was it built?

Global flag variables were set up so progress throughout the player's run could be tracked. This included things like which guards had been killed and which doors had been opened. This boolean / numerical logic allowed me to create conditional logic around which events were triggered and when. For instance, if a door was opened that was previously locked, a played needed to be able to pass back through it without hitting the original blockage. By tracking the state of all these events in the playthough, it ensured players didn't get trapped doing the same things over and over.

Functions were set up in the same file, which allowed me to display options to the player using arrays, restart the game, append the notebook, have quick-time events (fights), and determine chances of success using the Random library.

Next, classes were set up for instantiating objects. These objects included Characters, their Inventories, the Notebook players could write in, and finally the Rooms players would enter.

The main.py file (where the game loop runs) begins by playing an introduction, then goes

### Hardest part about creating it?

### Something you enjoyed?

### What would you fix going forward?

I would program the next loop of rooms as the last option each time, meaning that navigating the main.py module would become easier. I would also simplify the system of having to display prompts and inputs in main.py so that less was needed to be typed each time.

### What's something you learned?

Modularisation is very important, especially with object oriented programming