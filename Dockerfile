FROM node:latest
WORKDIR /app

COPY /app /app
COPY package*.json .

CMD ["npm", "install", "npm", "run", "dev"]
EXPOSE 8080