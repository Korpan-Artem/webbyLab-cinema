# Getting Started

## Running the Application

This repository contains a Movies web application built with React. The application allows users to search for movies by title and display movie details.

To run the application, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone this repository to your local machine.

```
git clone https://github.com/Korpan-Artem/webbyLab-cinema.git
```

2. Navigate to the project directory.

```
cd client
```

3. Install the dependencies for the client and server.

```
npm install
```

4. Start the client.

```
npm start
```

This will start the client on port 3000 and open a browser window to http://localhost:3000.

### For the application to work correctly, you need to run the docker image with the server!

## Building and Running a Docker Image with server

1. Ensure that Docker is installed on your machine.
2. Navigate to the project directory.

```
cd client
```

3. Pull the Docker with server

```
docker pull webbylabhub/movies
```

4. Run the Docker with server

```
docker run --name movies -p 8001:8000 webbylabhub/movies
```

## Building and Running a Docker Image with application

1. Ensure that Docker is installed on your machine.
2. Navigate to the project directory.

```
cd client
```

3. Pull the Docker with application

```
docker pull arttodoc/webbylab
```

4. Run the Docker with application

```
docker run --name movies -p 3000:3000 -e REACT_API_API_URL=http://localhost:8001/api/v1 arttodoc/webbylab
```


This will start the container with the name movies, bind port 3000 of the container to port 3000 of the host, set the REACT_APP_API_URL environment variable to http://localhost:8000/api/v1, and use the Docker image that you built.