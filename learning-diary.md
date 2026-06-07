Lappeenrannan teknillinen yliopisto
School of Business and Management






Software Development Skills

Jamshed Rashid, 002382632

LEARNING DIARY, Full Stack Module









 
LEARNING DIARY


2.6.2026
Today I started reading through the course information for the Full Stack. Initially, I was not very aware of what is meant by full stack development and spent some time researching and understanding the purpose of the course and what submissions are needed. After all, full stack development involves dealing with both the frontend and the backend of an application. The technology used for this course is known as MERN and consists of four technologies, i.e., MongoDB, ExpressJS, React and NodeJS. After reading and understanding what needs to be submitted for the course, it became clear to me that I will be required to submit exercise material, learning diary, the project itself, README file on how to execute/run the project and a link to the video of the execution. At the same time, I also thought about what sort of project will be easy enough but yet relevant to the course. For this purpose, I decided to design a MERN Course Tracker. This tracker will enable a user to add course topics, enter what they have learned, add status, date and finally edit or delete the entry.

In addition to the above, I also configured part of my development environment for today. I verified Node.js and npm and then set up MongoDB. After that, I started MongoDB Compass and ensured that MongoDB is running on my Mac. I did not do any GitHub commit today since I only planned and set up the course.

3.6.2026

Today was the day I commenced the process of setting up my project folder. The name of my project folder is FullStack-Course. I linked this project folder with my own public GitHub repository.

I came to know about how Git and GitHub help us to keep track of our project status. I set up the initial structure of the repository, including files such as README.md, learning-diary.md, and video-link.txt. Also, I created two folders named Coursework and Project because of the course recommendation. I did my first commits in GitHub. First, I did a commit of the course structure initially created. After this, I committed the coursework and project folders accordingly. Moreover, I realized that Git cannot upload empty folders; hence, I had to create some files in those folders to show them in the repository.

Today was all about version control and organization of the project.

4.6.2026

Today, I did some work related to the MERN Course Tracker project.

Initially, I set up a back-end for this application by setting up a NodeJS and ExpressJS server. I simply tested my server with some responses and received them in the browser. I had to do that so that I get familiar with the process of creating the backend and interacting with it through browsers. Next, I connected my back-end to a MongoDB database. I created a course model with all the attributes and then created the API routes for CRUD operations.

This helped me practice CRUD properly:

- Create: adding a course item
- Read: showing all course items
- Update: editing a course item
- Delete: deleting a course item

I tested the backend route in the browser and also tested adding data. When I saw the saved data appear in the browser, I understood that MongoDB and the backend were connected correctly.

And then proceeded with creating the React frontend using Vite. There were some issues with executing Vite, however, which I have solved. Finally, I opened the React fronted in the browser and removed the default page replacing it with mine MERN Course Tracker interface. Using React, I made use of state, forms, input, textarea, dropdown, date input, button click event and list rendering. After that, I have proceeded with linking up the React frontend with the Express backend which was the crucial step since now I had a fully-functional MERN stack app.

By the end of this coding session, I was able to add, display, edit and remove course objects on the front end which were permanently stored in MongoDB database.

At last, I cleared up the repo adding .gitignore and .env.example files. Moreover, I found out that .env file should never be uploaded to GitHub since it may contain sensitive information.


5.6.2026

Today, I completed preparation for final submission files.

I revised the learning diary so as to provide clear details of activities and learnings through the entire project. In doing so, I ensured that the learning diary was clear, simple, and straightforward.

The second item of work today was the project demonstration video. I made sure that everything was in order in the project as regards showing its functionalities. In the demonstration video, some actions included showing the frontend page, creation of a course entry, editing it, deleting it, and then finally refreshing the page to show that data has been saved by MongoDB.

This exercise made me realize the importance of not only building the project but also making a clear demonstration. In addition, I made sure that the project description and the steps to run the frontend and backend were included in the README file.


6.6.2026

Today I checked the whole project again before final submission.

I tested the backend, frontend and MongoDB connection. I made sure the backend server runs on port 5001 and the frontend runs on port 5173. I also checked that the CRUD features are working properly.

I tested:

- adding a course item
- viewing saved course items
- editing a course item
- deleting a course item
- refreshing the page to see if the data stays saved

Everything worked correctly. I also checked the GitHub repository to make sure the important files are included: README.md, learning-diary.md, video-link.txt, Project folder and Coursework folder.

This final checking day helped me understand the full project better. I could see how React, Express, NodeJS and MongoDB all work together in one full-stack application.


Final Reflection

The project gave me hands-on experience with understanding the MERN stack framework. Before undertaking the project, I could not fully grasp how the frontend, backend, and database interact with one another. I now know that React is used for the frontend, while ExpressJS and NodeJS provide services for the backend APIs, and the MongoDB database holds the data. The project is quite easy; however, the skills learned during the project include all those which are taught throughout the course. I incorporated React forms, state, events, and list rendering. The Express routes provided support for backend API requests. Data management was done using the MongoDB and Mongoose databases. GitHub was utilized via Git commits.

The most challenging issues that I encountered included installing MongoDB, overcoming the problem of the Vite front end, and comprehending how the React component transfers information to the server.

All things considered, the course provided me with a decent foundation in full stack web development. Now I am able to create a basic MERN stack application and discuss its fundamental components.
