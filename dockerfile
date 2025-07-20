# === 1. Build React frontend ===
FROM node:18 as frontend

WORKDIR /app

COPY package.json postcss.config.js tailwind.config.js ./
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# === 2. Backend: Python + Flask ===
FROM python:3.10-slim as backend

WORKDIR /app

# Copy backend code
COPY backend ./backend
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

# === 3. Final Stage ===
FROM nginx:alpine

# Copy frontend build to nginx
COPY --from=frontend /app/dist /usr/share/nginx/html

# Copy default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy backend code
COPY --from=backend /app/backend /app/backend
COPY --from=backend /app/requirements.txt /app/
COPY --from=backend /usr/local/lib/python3.10 /usr/local/lib/python3.10

# Start nginx and backend using supervisord
RUN apk add --no-cache python3 py3-pip supervisor

COPY supervisord.conf /etc/supervisord.conf

EXPOSE 8080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
