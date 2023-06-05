FROM node:latest
WORKDIR /src

COPY /src /src
COPY /prisma /src/prisma
COPY package*.json ./

ENV DATABASE_URL="mysql://root:root@database:3306/bangkit_capstone?schema=public"

RUN npm install



CMD ["npm", "run", "container"]
EXPOSE 8080/tcp

# ENV DATABASE_URL="mysql://root:root@172.22.48.1:3306/bangkit_capstone?schema=public"