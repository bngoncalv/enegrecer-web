FROM node:10.14-alpine

ENV GLIBC_VERSION 2.28-r0

RUN apk add --update bash && rm -rf /var/cache/apk/* \
  && apk --no-cache add ca-certificates \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/$GLIBC_VERSION/glibc-$GLIBC_VERSION.apk" \
  && apk --no-cache add "glibc-$GLIBC_VERSION.apk" \
  && rm "glibc-$GLIBC_VERSION.apk" \
  && wget "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/$GLIBC_VERSION/glibc-bin-$GLIBC_VERSION.apk" \
  && apk --no-cache add "glibc-bin-$GLIBC_VERSION.apk" \
  && rm "glibc-bin-$GLIBC_VERSION.apk" \
  && wget "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/$GLIBC_VERSION/glibc-i18n-$GLIBC_VERSION.apk" \
  && apk --no-cache add "glibc-i18n-$GLIBC_VERSION.apk" \
  && rm "glibc-i18n-$GLIBC_VERSION.apk" \
  \
  && wget https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-x64.zip \
  && unzip BrowserStackLocal-linux-x64.zip  \
  && rm BrowserStackLocal-linux-x64.zip  \
  && chmod +x BrowserStackLocal  \
  && mkdir ~/.browserstack \
  && mv BrowserStackLocal ~/.browserstack
