FROM node:12
WORKDIR /usr/src/app
COPY package*json ./
EXPOSE 80
RUN npm install
COPY . .
ENTRYPOINT nodes
CMD server.js