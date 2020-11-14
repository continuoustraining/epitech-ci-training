FROM node:12

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["node", "server.js"]