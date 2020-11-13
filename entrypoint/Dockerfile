FROM node:12

WORKDIR /home/app

COPY ./app.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

ENTRYPOINT nodes
CMD server.js