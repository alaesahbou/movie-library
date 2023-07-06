# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy the application code
COPY . /app

# Build the Next.js application
RUN npm run build

# Set the command to start the Next.js server
CMD npm run start
