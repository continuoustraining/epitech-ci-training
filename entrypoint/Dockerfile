FROM node:12

COPY server.js package.json package-lock.json ./

RUN npm install

EXPOSE 80

ENTRYPOINT nodes

CMD server.js