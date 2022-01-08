FROM node:16.13.0-alpine

WORKDIR /app
ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm run build

COPY . .

ENV PORT 3000

CMD ["npm", "start"]
