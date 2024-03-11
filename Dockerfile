# syntax = docker/dockerfile:1

FROM docker.io/node:lts-alpine as build

# Astro app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"
ENV ASTRO_TELEMETRY_DISABLED="true"

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

ADD https://plausible.io/js/script.js dist/js/script.js

# Final stage for app image
FROM caddy:alpine

COPY --from=docker.io/caddy:alpine /usr/bin/caddy /bin/caddy
COPY --from=build /app/dist /app
COPY Caddyfile /opt/Caddyfile

EXPOSE 80
CMD [ "/bin/caddy", "run", "-c", "/opt/Caddyfile"]
