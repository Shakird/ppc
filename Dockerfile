FROM node:16.13.0-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --production
RUN npm install react-scripts
COPY . .
ENV PORT 3000

CMD ["npm", "start"]
