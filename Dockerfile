# syntax = docker/dockerfile:1

FROM docker.io/node:lts-alpine as build

LABEL fly_launch_runtime="Astro"

# Astro app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
COPY --link package.json pnpm-lock.yaml ./
RUN corepack enable

# Install node modules
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY --link . .

# Build application
RUN pnpm run build

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM scratch

COPY --from=docker.io/caddy:alpine /usr/bin/caddy /caddy
COPY --from=build /app/dist /app
COPY Caddyfile /Caddyfile

EXPOSE 80
CMD [ "/caddy", "run", "-c", "/Caddyfile"]
