FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src
COPY ecosystem.config.cjs ./ecosystem.config.cjs

EXPOSE 5000

CMD ["node", "src/index.js"]
