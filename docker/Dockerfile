FROM node:latest

ARG WORK_DIR=/root/work

RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}

ENTRYPOINT cd blog && yarn && yarn run dev
