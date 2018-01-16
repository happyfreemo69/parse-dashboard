FROM debian:stretch
MAINTAINER David Flavigné

RUN apt-get update

RUN apt-get install -y \
    git \
    gnupg \
    ssh \
    curl

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -

RUN apt-get install -y \
    nodejs

RUN useradd -d "/home/citylity" -u 1000 -m -s /bin/bash citylity
WORKDIR /home/citylity

RUN mkdir .ssh
COPY id_rsa /home/citylity/.ssh/id_rsa
COPY config /home/citylity/.ssh/config
RUN ls -alh /home/citylity/.ssh
RUN ssh-keyscan -t rsa github.com > /home/citylity/.ssh/known_hosts
RUN chown -R citylity:citylity /home/citylity/.ssh
USER citylity
RUN git clone --verbose --progress git@github.com:happyfreemo69/parse-dashboard.git
COPY server.key /home/citylity/parse-dashboard/config/server.key
COPY server.crt /home/citylity/parse-dashboard/config/server.crt
WORKDIR parse-dashboard
RUN npm install

ENTRYPOINT ["nodejs","app.js"]