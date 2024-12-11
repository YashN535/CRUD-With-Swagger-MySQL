# Employee CRUD API

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up your MySQL database and configure the connection in `config/db.js`
4. Run `node server.js` to start the server
5. Access API documentation at `http://localhost:3000/api-docs`
6. Stored Procedure - stored_procedures.sql

## API Endpoints

- `GET /api/users` - Get all employees
- `POST /api/users` - Create a new employee
- `PUT /api/users/:id` - Update an employee
- `DELETE /api/users/:id` - Delete an employee
