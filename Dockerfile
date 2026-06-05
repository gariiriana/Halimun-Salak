# Step 1: Base Image
FROM node:20-alpine AS base

# Step 2: Install dependencies (only when package.json/package-lock.json changes)
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Step 3: Development Image
FROM base AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Step 4: Build the application for production
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Step 5: Production Runner (Serves static assets using Nginx)
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Clean default assets
RUN rm -rf ./*

# Copy built static assets from builder stage
COPY --from=builder /app/dist .

# Copy custom Nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
