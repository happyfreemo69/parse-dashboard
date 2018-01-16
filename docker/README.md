PARSE-DASHBOARD DOCKER IMAGE
=============

- This image needs :
    - a privateConfig.js file to be created in userd directory
    - an id_rsa file in userd directory that will be used to clone userd from github.
    - server.key and server.crt ssl certificates files. They can be generated using 
```
    openssl req -x509 -new -nodes -keyout server.key -out server.crt 
```
- Build, run, stop image using make command (```make build```, ```make run``` ...)
- With proper config in privateConfig.js, you can also use ```make run-with-redis``` in case you do not have a running redis server.