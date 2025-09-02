FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx tsc

EXPOSE 3000

CMD npx prisma db push && \
    node -e "const { PrismaClient } = require('./node_modules/@prisma/client'); const prisma = new PrismaClient(); (async ()=>{ const count = await prisma.user.count(); if(count===0){ await require('ts-node').register(); await require('./src/seed'); } })();" && \
    node dist/index.js
