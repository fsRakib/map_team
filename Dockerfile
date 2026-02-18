# Use Node.js 20 as the base (like choosing which version of Node to install)
FROM node:20-alpine

# Set working directory (where your app lives inside the container)
WORKDIR /app

# Copy package files first (for faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 (tell Docker your app runs on port 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
