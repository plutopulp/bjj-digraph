# BJJ Digraph

A web app for visualizing and organizing Brazilian Jiu-Jitsu techniques as interactive graphs. Create nodes for positions, transitions, submissions, grips, and actions, then connect them with edges to map technique sequences and relationships.

> **Note**: This project was developed over 5 years ago and has not been actively maintained. Some features may not function properly, and dependencies are outdated. Use at your own discretion.

## Features

- **Interactive graph editor**: Drag-and-drop nodes, create connections, and organize techniques visually
- **Multiple node types**: Positions, submissions, transitions, grips, actions, and annotations
- **User authentication**: Save and manage your personal technique graphs via Auth0
- **Test mode**: Try the graph editor at `/app/test/` without setting up authentication

## Local Docker Setup

Run locally with Docker: Nginx (serves React build), Django API, Postgres.

## Prereqs

- Docker with Compose v2
- Auth0 dev tenant (optional; only needed for saving graphs - you can use test mode without auth)

## 1) Configure environment

**Server secrets** (copy `server/ENV.example` to `server/.env`):

- `SECRET_KEY` - Django secret key
- `ALLOWED_HOSTS` - e.g., `localhost 127.0.0.1`
- `DB_NAME`, `DB_USER`, `DB_PASS` - Postgres credentials
- `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` - Same values for Postgres container
- `CORS_ORIGIN_WHITELIST` - `http://localhost:3000`
- `AUTH0_DOMAIN` - e.g., `https://your-tenant.auth0.com/`
- `API_IDENTIFIER` - Your Auth0 API identifier

**Client build args** (copy `.env.example` to `.env` at repo root):

- `REACT_APP_SERVER_URL=/api/`
- `REACT_APP_AUTH0_CLIENT_ID` - From Auth0 SPA application
- `REACT_APP_AUTH0_DOMAIN` - e.g., `your-tenant.auth0.com` (no https://)
- `REACT_APP_AUTH0_AUDIENCE` - Your Auth0 API identifier
- `REACT_APP_SITE_URL=http://localhost:3000`

**Note**: Client build args are not secrets but are kept in `.env` (gitignored) to avoid committing tenant-specific values.

## 2) Build and run

```bash
docker compose -f docker-compose-dev.yml up --build -d
```

## 3) URLs

- **App home**: http://localhost:3000
- **Test graph** (no auth required): http://localhost:3000/app/test/
- **API**: http://localhost:3000/api/
- **Admin**: http://localhost:3000/bjj-paths-django-admin/

On first boot the API migrates, collects static, and creates superuser `admin` / `pass`.

**Tip**: Visit the test graph first to try the interactive editor without setting up Auth0.

## Troubleshooting

- React build fails → bump Node in `docker/nginx/Dockerfile`.
- JWT invalid → check Auth0 domain/audience in client args and server env.
- CORS blocked → ensure `CORS_ORIGIN_WHITELIST` includes `http://localhost:3000`.
