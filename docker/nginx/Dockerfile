# The first stage
# Build React static files
FROM node:13.12.0-alpine as build

WORKDIR /app/client
# Build-time env for CRA
ARG REACT_APP_SERVER_URL
ARG REACT_APP_AUTH0_CLIENT_ID
ARG REACT_APP_AUTH0_DOMAIN
ARG REACT_APP_AUTH0_AUDIENCE
ARG REACT_APP_SITE_URL

# Expose them to the build environment
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL
ENV REACT_APP_AUTH0_CLIENT_ID=$REACT_APP_AUTH0_CLIENT_ID
ENV REACT_APP_AUTH0_DOMAIN=$REACT_APP_AUTH0_DOMAIN
ENV REACT_APP_AUTH0_AUDIENCE=$REACT_APP_AUTH0_AUDIENCE
ENV REACT_APP_SITE_URL=$REACT_APP_SITE_URL
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm ci --silent
COPY ./client/ ./
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=build /app/client/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]