# Authentication Methods with Express.js and Axios

This repository demonstrates various authentication methods when making requests to an API using Express.js and Axios. It covers No Authentication, Basic Authentication, API Key authentication, and Bearer Token authentication.

## Features

*   **No Authentication:** Fetches a random secret from the API without any authentication.
*   **Basic Authentication:** Authenticates requests using a username and password.
*   **API Key Authentication:** Authenticates requests using an API key.
*   **Bearer Token Authentication:** Authenticates requests using a bearer token.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **Axios:** HTTP client for making requests to external APIs.
*   **EJS (Embedded JavaScript):** Templating engine for generating HTML.

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://www.google.com/search?q=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```

2.  Navigate to the project directory:

    ```bash
    cd YOUR_REPO_NAME
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

1.  **Set your credentials:**
    *   Replace the placeholder values for `yourUsername`, `yourPassword`, `yourAPIKey`, and `yourBearerToken` in `index.js` with your actual credentials.  **Important:**  Do not commit these credentials to version control. See "Security Considerations" below.

2.  Start the server:

    ```bash
    node index.js
    ```

3.  Open your browser and go to `http://localhost:3000`.

4.  Click the buttons to make requests to the API using different authentication methods. The API response will be displayed on the page.

## API Documentation

The code interacts with the Secrets API.  Refer to the official Secrets API documentation for details on the available endpoints and request/response formats: https://secrets-api.appbrewery.com

## Code Explanation

*   **No Authentication (`/noAuth`):**  A simple `GET` request is made to the `/random` endpoint without any authentication.

*   **Basic Authentication (`/basicAuth`):**  The `auth` option in the Axios request is used to provide the username and password for Basic Authentication.

*   **API Key Authentication (`/apiKey`):**  The API key is passed as a query parameter using the `params` option in the Axios request.

*   **Bearer Token Authentication (`/bearerToken`):** The bearer token is included in the `Authorization` header of the Axios request.

## Security Considerations

*   **Do not store credentials directly in your code:**  Storing usernames, passwords, API keys, and bearer tokens directly in your code is a **serious security risk**.  These credentials should be stored securely, such as in environment variables, and accessed by your application at runtime.  Credentials provided are for demonstration purposes only.

*   **Use environment variables:** The recommended approach is to use environment variables to store sensitive information.  You can then access these variables in your Node.js code using `process.env.YOUR_VARIABLE_NAME`.
