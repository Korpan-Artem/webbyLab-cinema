# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Set the API_URL environment variable
ENV REACT_APP_API_URL=http://localhost:8001/api/v1

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

