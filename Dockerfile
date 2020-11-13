FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#copie tout ce qui est dans le workdir dans le dossier courant.
COPY . .

RUN npm test

EXPOSE 80

CMD [ "node", "server.js" ]
#ENTRYPOINT ["/", ""]