# syntax = docker/dockerfile:1
FROM docker.io/node:lts-alpine as build

LABEL fly_launch_runtime="Astro"

# Astro app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
COPY package.json pnpm-lock.yaml ./
RUN corepack enable

# Install node modules
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY . .

# Build application
RUN pnpm run build

# Remove development dependencies
RUN pnpm prune --prod

RUN echo "E404:404.html" > dist/httpd.conf

# Final stage for app image
FROM docker.io/lipanski/docker-static-website:2.3.1

COPY --from=build /app/dist .
