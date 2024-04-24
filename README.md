# Interview_Prep

## TalentForge API

### What is it?

### How was it built?

### Hardest part about creating it?

### Something you enjoyed?

### What would you fix going forward?

### What's something you learned?


## TalentForge Front-End

### What is it?

### How was it built?

### Hardest part about creating it?

### Something you enjoyed?

### What would you fix going forward?

### What's something you learned?


## Flask API

### What is it?

Flask API is a project built for Coder Academy that allows the Partnerships team to keep track of the status of each student throughout their internship journey. It makes use of an ORM (Marshmallow) which interacts with a PostgreSQL (relational) database and features many endpoints, such as those to see users, companies, and individual internships.

### How was it built?

Flask API was built by completing the documentation first. Documentation was important with this project as it was much larger scale than Dracula's Castle. I needed to know where I was going, even if the direction somehow changed during. Outlines are important. I drew up and ERD (Entity Relationship Diagram) for my database, decided which endpoints I would be including, and then decided on any extra features I wanted to include in the final release if I had time (email features and logging feature).

After this I created modularised files for the blueprints which held the individual routes, and model files which containted the models and schema which Postgres and Marshmallow (ORM) would operate on to create and enforce tables and schema. I also used .env files to hide the variables in the .gitignore, but created a sample for the documentation to show how you're supposed to make it work.

I also used JWT tokens that were served to the user upon logging in and checked by the decorators on each route. This JWT binds to the email address and checks against it to determine if the user in an admin or not (Authorization).

### Hardest part about creating it?

The fundamental logic involved was much more difficult than Dracula's Castle. Also, there were so many packages, I feel as though it was hard to truly understand them with how quickly I had to move. Great exposure, but familiarity would have gone a long way.

### Something you enjoyed?

I enjoyed implementing the email and logging features the most. There's something magical about being able to send an email with programming, and it was something I got to do entirely for myself (unecessary for the project itself).

### What would you fix going forward?

The Authentication wasn't properly configured, as I couldn't figure out a way to verify teachers and students from admins, which was important because there were some things teachers could do even if they weren't admins. I suspect I would have to go back and redo the ERD to change teachers and students into just "users", or similar.

### What's something you learned?

I learned a lot about ORM functionality and SQL databases (querying and logistics). I loved learning about relational databases, and hope to work with them somewhere in the future.


## Dracula's Castle (CL Application)

### What is it?

Dracula's Castle is a command line application built with Python. It's a text-based adventure game that has multiple endings, a blood-glut meter to track player's corruption levels, and a changeable notebook allowing users to write down clues they find.

### How was it built?

Global flag variables were set up so progress throughout the player's run could be tracked. This included things like which guards had been killed and which doors had been opened. This boolean / numerical logic allowed me to create conditional logic around which events were triggered and when. For instance, if a door was opened that was previously locked, a played needed to be able to pass back through it without hitting the original blockage. By tracking the state of all these events in the playthough, it ensured players didn't get trapped doing the same things over and over.

Functions were set up in the same file, which allowed me to display options to the player using arrays, restart the game, append the notebook, have quick-time events (fights), and determine chances of success using the Random library.

Next, classes were set up for instantiating objects. These objects included Characters, their Inventories, the Notebook players could write in, and finally the Rooms players would enter.

The main.py file (where the game loop runs) begins by playing an introduction, then goes on to the main while loop, while True. The functions help to bring up options for the player. Once the player escapes one room, another while loop is started. When they return to the previous, the loop is ended. Players can fail by losing all of their health during combat encounters with guards, or in the final fight with Dracula.

### Hardest part about creating it?

At many points it was easy to forget how the loop logic functioned with the while loops, which led to lots of confused moments, all of which required playthoughs for testing.

### Something you enjoyed?

This was my first real exposure to coding something by myself, and I felt really proud with the end product. My favourite part was probably the feeling of competence that accompanied completing a project by myself with so many (relative) moving parts (OOP, Functions, imports, modules, loops, conditional logic).

### What would you fix going forward?

I would program the next loop of rooms as the last option each time, meaning that navigating the main.py module would become easier. I would also simplify the system of having to display prompts and inputs in main.py so that less was needed to be typed each time. The text printed after selecting an option could also have been modularised so it didn't clutter the main file.

### What's something you learned?

Modularisation is very important, especially with object oriented programming