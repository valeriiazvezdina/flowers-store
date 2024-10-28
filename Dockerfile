FROM node:20.11.1-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn cache clean --force
RUN yarn install --legacy-peer-deps

COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start:migrate:prod"]