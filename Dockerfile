FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node","src/main.js"]