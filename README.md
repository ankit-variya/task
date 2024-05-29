# Task

Follow the instructions step-by-step.

## Setup

1. **Install Dependencies**
    ```sh
    npm install
    ```

2. **Create Database**
    - Create a database in MySQL with the name `my_test`.

3. **Run Migrations**
    ```sh
    knex migrate:latest
    ```

4. **Start the Server**
    ```sh
    npm start
    ```

## Endpoints

=============
- **Insert User**
  - URL: `http://localhost:3000/users`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "demo5",
      "email": "demo512@gmail.com"
    }
    ```

- **List Users**
  - URL: `http://localhost:3000/users`
  - Method: `GET`

- **Get User By ID**
  - URL: `http://localhost:3000/users/{id}`
  - Method: `GET`

- **Update User**
  - URL: `http://localhost:3000/users/{id}`
  - Method: `PUT`
  - Body:
    ```json
    {
      "name": "abc",
      "email": "abc12@gmail.com"
    }
    ```

- **Delete User**
  - URL: `http://localhost:3000/users/{id}`
  - Method: `DELETE`

## Configure Email for Reports

1. Open `report.js` file.
2. Add your Gmail credentials:
    ```javascript
    auth: {
      user: process.env.USER || 'add your mail',
      pass: process.env.PASSWORD || 'generate app password' // if you don't know how to generate, follow https://www.youtube.com/watch?v=nuD6qNAurVM
    }
    ```

3. Set the mail options:
    ```javascript
    const mailOptions = {
      from: process.env.USER || 'add your mail', // Add your mail
      to: process.env.ADMIN || 'add admin mail',  // Get daily report on this mail
      subject: 'Daily New Users Summary',
      text: `New users added today: ${userEmails}`
    };
    ```

## Additional Notes

- Ensure MySQL is running and accessible.
- Configure your `.env` file (if using) with the appropriate database credentials and other environment-specific settings.
- The email credentials should be kept secure. Consider using environment variables or a secrets management tool.
