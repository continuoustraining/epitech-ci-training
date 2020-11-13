FROM node:12

COPY server.js package.json package-lock.json ./tests/integration/ ./tests/unit/ ./

RUN  npm install

RUN npm test

EXPOSE 80

CMD ["node", "server.js"]