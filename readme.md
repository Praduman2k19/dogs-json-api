# Dogs Web API 

This is a simple REST API built using Node.js and Express to manage a list of dog breeds and their sub-breeds.

The goal of this project is to provide basic CRUD functionality (Create, Read, Update, Delete) and make the data accessible over HTTP.

---

## Live URL

(Add your deployed link here)

---

## Tech Used

* Node.js
* Express.js
* JSON file (used as storage)

---

## How to Run

Clone the repo:

git clone https://github.com/your-username/dogs-api.git

Go inside the folder:

cd dogs-api

Install dependencies:

npm install

Start the server:

npm run dev

Server will run on:

http://localhost:5000

---

## API Endpoints

### Get all dogs

GET /api/dogs

---

### Add a dog

POST /api/dogs

Body:
{
"breed": "husky",
"subBreed": "siberian"
}

---

### Update a dog

PUT /api/dogs/:breed

Body:
{
"newBreed": "husky",
"subBreeds": ["siberian", "alaskan"]
}

---

### Delete a dog

DELETE /api/dogs/:breed

---

## How data is stored

All the data is stored in a local JSON file (dogs.json).

Whenever an API is called:

* the file is read
* changes are made
* and written back to the file

This ensures that data persists even after restarting the server.

---

## Limitations

* This approach is not suitable for high traffic or concurrent users
* No authentication is implemented
* No pagination or filtering

---

## Improvements (if extended further)

* Use a database like MongoDB or PostgreSQL
* Add authentication
* Add search and pagination
* Add a frontend UI

---

## Notes

I used a JSON file for simplicity and to keep the setup minimal.

In a real-world scenario, I would use a proper database to handle concurrency and scalability better.

---
