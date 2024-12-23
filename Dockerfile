# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port that your Next.js app will run on
EXPOSE 3000

# Step 7: Build the Next.js app for production
RUN npm run build

# Step 8: Start the Next.js app in production mode
CMD ["npm", "start"]
