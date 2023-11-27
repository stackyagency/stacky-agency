FROM node:18-alpine

WORKDIR /app

# Install Python
RUN apk add --no-cache python3 make

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
