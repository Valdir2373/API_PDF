FROM node:18-alpine

RUN apk update && apk add --no-cache poppler-utils

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]