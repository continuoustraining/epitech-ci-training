FROM node:12
ENTRYPOINT nodes
COPY app.js .
COPY package.json .
COPY package-lock.json .
RUN npm i
EXPOSE 80
CMD server.js
