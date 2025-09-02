FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npx prisma generate
RUN npx prisma db push && npx ts-node src/seed.ts

RUN npx tsc

EXPOSE 3000

CMD ["node", "dist/index.js"]
