FROM zenika/alpine-chrome:with-node

RUN apk add --update bash && rm -rf /var/cache/apk/* 