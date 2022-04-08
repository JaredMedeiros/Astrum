# Astrum

<h2>General Information</h2>
<ul>
  <li>This project was my final capstone project for my BrainStation WebDev bootcamp</li>
  <li>We had a time restraint of 1.5 weeks to build from start to finish</li>
  <li>The purpose of this application is to provide developers with a simple, intuitive, collaborative projet management application/li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>React.js</li>
  <li>React Router</li>
  <li>Axios</li>
  <li>SASS</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Atlas MongoDB</li>
  <li>Mongoose</li>
  <li>JWT</li>
</ul>

<h2>Setup</h2>
<h3>Important informaton for backend connection!</h3>
<p>The backend repository for this project can be found pinned to my github profile. You will need to set up a MongoDB Atlas account and provide a MONGO_URI string in your backend .env file. I will provide a sample env file at the end of this README, as well as a video resource on how to set up an account with Atlas and connect it to your backend.</p><br/><br/>
<p>Although I plan on doing so, this project is not yet deployed. But feel free to install a version that can be view locally to your machine</p>
<br/>
<p>run npm i on both the client and the server side
  <br/>run node server.js on the server side to start your back end
  <br/>run npm start on the client side to start your front end
</p>

<h2>Usage<h2/>
  <p>Astrum was designed to be a fully responsive application. After entering the site through the landing page, you will be brought to a login screen. You will not initially have an account set up, but will be able to sign up for an account with your email, and proceed to log in. Once brought into the application, you will see a space for all of the projects that you would like to add to the app. Click the + button to add your projects. Clicking on a project in the list brings you to that project's dashboard. Within the dashboard you can explore the taskboard, where you can add tasks with descriptions and assign them to a coder in your team. You can also explore the sprint roadmap, where you can add a checkpoint based schedule for your project. Additionally, please explore the project chat, which is currently in prototype. Lastly, clicking the Astrum logo at the bottom right hand side of the screen, brings you to an intercace that I reccomend keeping open while you work. It includes a pomodoro timer for healthy productive working, as well asw a note bank to jot down thoughts and reminders as you code away.</p>
 
  <h2>Project Future</h2>
  
  <p>Please consider this V1 of Astrum! Here are some features that I will be implementing in the coming months</p>
  <ul>
    <li>Add a system that allows users to get real time notifications on updates and messages to their devices</li>
    <li>Unfortunately this application does not yet have the ability to be collaborative. I will be adding a feature that allows users to invite other develoers to specific collaborative projects within the application</li>
    <li>I will be deploying Astrum with Heroku and MongoDB Atlas</li>
  </ul>
  
  <h2>Contact Me</h2>
  <p>Please feel free to reach out with any questions or just to connect! I am currently looking for full time developer roles.</p>
  <ul>
    <li>LinkedIn: https://www.linkedin.com/in/jared-medeiros-45468a222/</li>
  </ul> 
  
  <h2>Sample server-side ENV</h2>
  <p>
  NODE_ENV = development
  </br>PORT = 5500
  </br>MONGO_URI = mongodb+srv://YOUR_ATLAS_USERNAME:YOUR_CLUSTER_PASSWORD@YOUR_CLUSTER_NAME.eurqd.mongodb.net/astrumretryWrites=true&w=majority
  </br>JWT_SECRET = abc123
  </p>
  
  <h2>Setting up an account with MongoDB Atlas, and connecting it to you server side<h2>
  https://www.youtube.com/watch?v=fbYExfeFsI0&feature=youtu.be
