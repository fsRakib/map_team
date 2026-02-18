# ============================================
# STAGE 1: Dependencies (Builder Stage)
# ============================================
# This stage installs ALL dependencies (including devDependencies)
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for building)
RUN npm install


# ============================================
# STAGE 2: Builder (Build Stage)
# ============================================
# This stage builds your Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies from previous stage (faster than reinstalling)
COPY --from=deps /app/node_modules ./node_modules

# Copy all source code
COPY . .

# Build the Next.js app (creates optimized production build)
RUN npm run build


# ============================================
# STAGE 3: Runner (Production Stage)
# ============================================
# This is the final stage - smallest and most secure
FROM node:20-alpine AS runner

WORKDIR /app

# Set to production environment
ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only necessary files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Change ownership to non-root user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
