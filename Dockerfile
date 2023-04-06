FROM mongo:latest
WORKDIR $HOME
COPY ./rs-init.sh /rs-init.sh
RUN apt update -y
RUN apt upgrade -y
RUN apt update -y

RUN chmod +x /rs-init.sh
RUN mkdir -p /data/db/mongo/data/db01
RUN mkdir -p /data/db/mongo/data/db02
RUN mkdir -p /data/db/mongo/data/db03
# CMD ["/usr/bin/mongod", "--bind_ip_all", "--replSet", "dbrs"]
