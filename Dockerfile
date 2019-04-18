FROM node:10.14-alpine

RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
