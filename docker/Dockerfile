FROM node:latest

ARG WORK_DIR=/root/work

RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}

RUN apt-get update && \
    apt-get install uuid-runtime && \
    curl -fsSL https://code-server.dev/install.sh | sh
COPY config.yaml /root/.config/code-server/config.yaml
RUN echo "password: `uuidgen`" >> /root/.config/code-server/config.yaml

ENTRYPOINT code-server
