# Running the Star Wars Web App

Follow these steps to set up and run the Star Wars Web App locally on your development environment.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- npm (Node Package Manager): [Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Database Setup

1. Visit the Turso website and create a new database for the Star Wars Web App.

2. Retrieve the following information from your database provider:

   - `DATABASE_URL`: The URL to access your database.
   - `DATABASE_AUTH_TOKEN`: The authentication token or credentials to connect to the database.

3. Create a `.env` file in the root directory of your project if it doesn't already exist.

4. Inside the `.env` file, add the following lines and replace the placeholders with your actual database information:
   ```env
   DATABASE_URL=your_database_url_here
   DATABASE_AUTH_TOKEN=your_auth_token_here
   ```
