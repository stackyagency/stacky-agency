FROM node:18-alpine
WORKDIR /app

RUN apk add --no-cache python3 make

COPY package.json ./
COPY yarn.lock ./


RUN yarn install



RUN yarn add pg

COPY . .

EXPOSE 1337

CMD ["yarn", "strapi", "develop"]