FROM docker.io/golang:1.22.1-alpine as go

WORKDIR /app

RUN go install github.com/a-h/templ/cmd/templ@latest
RUN go install github.com/go-task/task/v3/cmd/task@latest

FROM docker.io/node:21-alpine as node

WORKDIR /app

COPY package.json pnpm-lock.yaml tailwind.config.js ./

RUN corepack enable

COPY assets/ ./assets

RUN pnpm install --frozen-lockfile

COPY internal/components/ ./internal/components
COPY internal/pages/ ./internal/pages

RUN pnpm build

FROM go as app

COPY go.mod go.sum ./
COPY Taskfile.yml .
RUN task install
COPY cmd cmd
COPY internal internal
RUN templ generate 
RUN task build

ENV PORT=8080

FROM scratch
WORKDIR /app
COPY --from=app /app/dist/main /app/main
COPY --from=node /app/dist/assets /app/assets
COPY --from=go /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

EXPOSE 8080

CMD ["/app/main"]
