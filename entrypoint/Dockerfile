FROM node:12

COPY app.js package.json package-lock.json ./

RUN npm install

EXPOSE 80

ENTRYPOINT nodes

CMD server.js
