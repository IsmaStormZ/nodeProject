# NodeProject

## The aim
The purpose of this project is to create a node's application to send email notifications 
when a visitor has filled a form on our website.

# How to use

### 1. Download image from dockerhub: 
```
docker pull ismastormz/nodeproject
```

### 2. Check existing images: 
```
docker images
```

### 3. Run container:
```
docker run --name mail -p 32770:3000 -d -e USER_MAIL=myemail -e USER_PWD=mypwd ismastormz/nodeproject
```
- `--name` tag to name the container with a name more speaking for example **mail**.
- `-p` tag to assign a public port to internal port at container.
- `-d` tag to run the container in background task.
- `-e` tag to define a mailbox and password to receive notification.
- add image name pulled early.

### 4. Check container existing and a port associated:
```
docker ps
```

### 5. Check app running on the container: 
```
docker logs <container id>
```
* **Expected result:**
```
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Server Running on 127.0.0.1 : 3000
```
