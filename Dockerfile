FROM node:12

COPY server.js .
COPY package.json .
COPY package-lock.json .
COPY /tests .

EXPOSE 80

RUN npm i
RUN npm test

CMD [ "node", "server.js" ]
