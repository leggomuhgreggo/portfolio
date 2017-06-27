FROM node:8.1.2-alpine

# Create Node User
# RUN addgroup -S app && adduser -S -g app app

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3001

CMD [ "npm", "run", "start:server" ]
