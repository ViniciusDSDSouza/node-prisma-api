FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

RUN npx tsc

EXPOSE 3000

CMD npx prisma db push && npx ts-node src/seed.ts && node dist/index.js
