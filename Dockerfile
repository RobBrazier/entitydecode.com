FROM docker.io/node:lts-alpine AS build

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

# Final stage for app image
FROM docker.io/joseluisq/static-web-server:2

COPY --from=build /app/dist /public
