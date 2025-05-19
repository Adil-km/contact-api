# contact-api

**contact-api** is a RESTful API built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to manage contacts with full CRUD (Create, Read, Update, Delete) functionality. This project was created as part of a learning exercise to understand backend development and RESTful API design.

## 📚 Tutorial

This project is based on the following tutorial:  
[🔗 Tutorial Link](https://youtu.be/H9M02of22z4)

<hr/>

## 📌 Purpose of the Project

<ul>
  <li>✅ Learn how to build a RESTful API using Express.js</li>
  <li>✅ Understand CRUD operations with MongoDB</li>
  <li>✅ Practice MVC architecture in backend development</li>
</ul>

<h2>🛠 Technologies Used</h2>
<ol>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB (Mongoose)</li>
</ol>

<h2>🚀 How It Works</h2>
<ol>
  <li>Users can create a new contact using a POST request</li>
  <li>All contacts can be fetched using a GET request</li>
  <li>Each contact can be updated or deleted via PUT and DELETE requests</li>
  <li>Data is stored persistently in MongoDB</li>
</ol>

<h2>📦 Setup Instructions</h2>
<ol>
  <li>Clone the repo: <code>git clone https://github.com/Adil-km/contact-api.git</code></li>
  <li>Navigate into the project folder: <code>cd contact-api</code></li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Create a <code>.env</code> file and add your MongoDB URI:</li>
</ol>

```env
PORT=5001
CONNECTION_STRING = your_mongodb_connection_string
ACCESS_TOKEN_SECRET = your_secrete token
```

<ol start="5">
<li>Run the server: <code>npm run dev</code></li>
</ol>

<h2>📫 API Endpoints</h2>

<ul>
    <li><code>GET /api/users/login</code> - Login user</li>
    <li><code>GET /api/users/current</code> - Get current user info</li>
    <li><code>POST /api/users/register</code> - Register a user</li>
<hr/>
    <li><code>GET /api/contacts</code> - Get all contacts</li>
    <li><code>GET /api/contacts/:id</code> - Get a specific contact</li>
    <li><code>POST /api/contacts</code> - Add a new contact</li>
    <li><code>PUT /api/contacts/:id</code> - Update a contact</li>
    <li><code>DELETE /api/contacts/:id</code> - Delete a contact</li>
</ul> 