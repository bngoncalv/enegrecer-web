FROM node:10.14-alpine

RUN wget https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-x64.zip \
  && unzip BrowserStackLocal-linux-x64.zip  \
  && rm BrowserStackLocal-linux-x64.zip  \
  && chmod +x BrowserStackLocal  \
  && mkdir ~/.browserstack \
  && mv BrowserStackLocal ~/.browserstack
  && apk update 
  && apk add bash 
  && rm -rf /var/cache/apk/*
