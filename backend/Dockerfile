FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY contracts ./contracts

COPY scripts ./scripts

COPY hardhat.config.js ./hardhat.config.js

RUN npm run deploy:contract

COPY . .
