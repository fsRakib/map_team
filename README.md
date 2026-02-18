# Map Team - Next.js Application

A modern web application built with Next.js featuring complete CRUD functionality for managing posts and todos, with full Docker containerization support.

## Project Overview

This project demonstrates a full-stack Next.js application with the following key implementations:

### Features Implemented

#### Posts Management System

- **View All Posts** - Browse through a list of all posts
- **View Single Post** - Read detailed post content
- **Create New Post** - Add new posts to the system
- **Edit Post** - Update existing post content
- **Delete Post** - Remove posts from the system
- **Comments System** - View and manage comments on posts

#### Todos Management

- Complete todo list functionality with CRUD operations

#### Docker Integration

- Fully containerized application for consistent deployment
- Production-ready Docker configuration
- Optimized build process with multi-stage approach

## Technology Stack

- **Framework**: Next.js 16.1.6
- **Runtime**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Containerization**: Docker
- **Node Version**: 20 (Alpine Linux)

## Getting Started

### Running Locally (Without Docker)

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open Browser**
   ```
   http://localhost:3000
   ```

### Running with Docker (Recommended for Production)

1. **Build Docker Image**

   ```bash
   docker build -t map_team .
   ```

2. **Run Docker Container**

   ```bash
   docker run -p 3000:3000 map_team
   ```

3. **Access Application**
   ```
   http://localhost:3000
   ```

## Project Structure

```
map_team/
├── src/
│   └── app/
│       ├── page.tsx           # Home page
│       ├── posts/             # Posts module
│       │   ├── page.tsx       # All posts list
│       │   ├── new/           # Create new post
│       │   └── [id]/          # Dynamic post routes
│       │       ├── page.tsx   # View single post
│       │       ├── edit/      # Edit post
│       │       ├── delete/    # Delete post
│       │       └── comments/  # Post comments
│       └── todos/             # Todos module
│           └── page.tsx       # Todos list
├── Dockerfile                 # Docker configuration
├── .dockerignore             # Docker ignore rules
└── package.json              # Dependencies

```

## Docker Configuration Details

The application uses a production-optimized Docker setup:

- **Base Image**: Node.js 20 Alpine (lightweight Linux distribution)
- **Build Process**: Optimized layer caching for faster rebuilds
- **Port**: Exposed on 3000
- **Environment**: Production-ready with built assets

## Development Workflow

1. Make code changes in your local environment
2. Test locally with `npm run dev`
3. Build Docker image: `docker build -t map_team .`
4. Run container: `docker run -p 3000:3000 map_team`
5. Commit and push changes to GitHub

## Useful Docker Commands

```bash
# View all images
docker images

# View running containers
docker ps

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# Run in background (detached mode)
docker run -d -p 3000:3000 map_team
```

## Author

**fsRakib**  
GitHub: [@fsRakib](https://github.com/fsRakib)

## License

This project is private and confidential.
