FROM node:16.13.0-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
ENV PORT 3000

CMD ["npm", "start"]
