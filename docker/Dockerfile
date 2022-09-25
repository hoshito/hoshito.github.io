FROM node:latest

ARG WORK_DIR=/root/work

RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}

RUN npx create-next-app tmp && \
    cd tmp && \
    npm install --save microcms-js-sdk

EXPOSE 3000

CMD bash

