FROM blazarecki/browserstack

RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
