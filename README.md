# API Server for Bank List and Branch Details

This repository contains an API server implemented in Node.js using the Express.js framework. The server provides REST API endpoints to retrieve the list of banks and their branch details.

## Problem Description

The task was to create an API server that exposes endpoints to retrieve bank information and branch details from a database. The data required for the server is available in the repository, stored in a database.

## Solution Approach

To solve the problem, I used the following steps:

1. **Data Conversion**: The provided data was in CSV format. I converted the CSV file to JSON format for easier handling and manipulation in JavaScript.

2. **API Server Setup**: I utilized Node.js and Express.js to create the API server. Express.js is a popular web framework for Node.js that simplifies the process of building web applications and APIs.

3. **Endpoint Implementation**: I implemented the required REST API endpoints for retrieving bank information and branch details. The API endpoints were designed to be flexible, allowing for filtering of data based on specific branch details if required.

## Images

![1](https://github.com/VishalTyagi098/API-Task/assets/87750186/605bd7e3-ae56-481a-b7e3-37eca5ebe34c)


![2](https://github.com/VishalTyagi098/API-Task/assets/87750186/6db22c0b-6753-4bd7-a492-65b92782cebb)


![3](https://github.com/VishalTyagi098/API-Task/assets/87750186/f1d1bfa1-2159-451d-b9e6-4f446a3df21a)


## Time Taken

It took me approximately 2-3 hours to complete this task. The time includes the data conversion, setting up the API server, and implementing the necessary endpoints.

## API Endpoints

The API server provides the following endpoints:

- `GET /bank_name`: Retrieves the list of banks.
- `GET /branch`: Retrieves the branch details for all banks.
- `GET /ifsc`: Retrieves the details for a specific IFSC code.
- `GET /branches?bank_name=:bank_name&city=:city`: Retrieves the branch details for a specific bank in a particular city.

Please refer to the code implementation for further details on how these endpoints are implemented.

## Instructions

To run the API server locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `node index.js` to start the API server.
6. The server will start running on `http://localhost:3000/data`.

You can now make requests to the API endpoints using a tool like Postman or cURL.

Note: Make sure you have the required data file available in the repository before starting the server.

## Dependencies

The following dependencies were used for this project:

- Node.js: v12.18.0 or higher
- Express.js: v4.17.1 or higher

Please refer to the `package.json` file for the complete list of dependencies.

## Conclusion

The API server implemented in this project provides a convenient way to retrieve bank information and branch details. It is a basic implementation that can be extended and customized as per specific requirements. Feel free to explore the code and make any modifications as needed.
