FROM node:20.15.1 

WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . . 
# Build 
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]