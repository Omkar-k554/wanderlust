# Wanderlust

I built Wanderlust as a personal project . It is a property listing platform where users can browse properties, post new listings, and manage them with full edit and delete functionality — similar to how Airbnb works at its core.

This project helped me understand how a backend server, database, and frontend templates all connect together in a real application.

## What I Used

- Node.js and Express.js for the server and routing
- MongoDB with Mongoose to store and manage listing data
- EJS to render dynamic HTML pages
- HTML and CSS for the frontend structure and styling


## What It Can Do

- Browse all available property listings on one page
- Click on any listing to see its full details
- Add a brand new listing through a form
- Edit any existing listing
- Delete a listing permanently
- Comes preloaded with sample listings via a seed script

## How to Run It Locally

You will need Node.js and MongoDB installed on your machine.

git clone https://github.com/Omkar-k554/wanderlust.git
cd wanderlust
npm install
node app.js

Then open your browser and go to:
http://localhost:8080/listings


## Folder Structure

wanderlust/
├── models/        # Mongoose schema for listings
├── views/         # EJS templates for all pages
├── public/        # Static CSS and assets
├── init/          # Seed script to populate the database
└── app.js         # Main server file

## API Routes

| Method | Route             | Description                  |
|--------|-------------------|------------------------------|
| GET    | /listings         | View all listings            |
| GET    | /listings/new     | Open form to add listing     |
| GET    | /listings/:id     | View a single listing        |
| POST   | /listings         | Save a new listing           |
| GET    | /listings/:id/edit| Open form to edit listing    |
| PUT    | /listings/:id     | Update a listing             |
| DELETE | /listings/:id     | Delete a listing             |

## What I Plan to Add Next

This project is still growing. Here is what I am working towards:

- User login and authentication
- Image uploads using Cloudinary
- Location maps for each listing
- Search and filter functionality
- Better UI with Bootstrap cards and responsive design
- Deploy it live so anyone can access it

---

## About Me

I am Omkar Karangale, a developer learning by building real projects.

- GitHub: https://github.com/Omkar-k554
- LinkedIn: https://linkedin.com/in/omkar-karangale-0b603b235