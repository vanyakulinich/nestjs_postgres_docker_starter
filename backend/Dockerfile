FROM node:lts-alpine

ARG NODE_ENV

WORKDIR /var/www/backend

# install global dependencies
RUN npm i -g typescript ts-node nodemon @nestjs/cli

RUN if [[ ${NODE_ENV} = 'production' ]]; then npm i -g pm2; fi

COPY ./package.json ./

# Copy local code to the container image.
COPY . .

RUN npm install

# Display directory structure
RUN ls -l -a

# Expose API port
EXPOSE 5000

