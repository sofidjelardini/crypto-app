FROM node:14

WORKDIR /Users/sofia.djelardini/Desktop/crypto-app

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000

CMD ["node", "server.js"]