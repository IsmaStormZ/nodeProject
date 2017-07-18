# NodeProject
App node dockerizing

## The aim
The purpose of this project is to create a node's application to send email notifications 
when a visitor has filled a form on our website.

### 1. Build image: 
On the directory folder:
```
docker build -t testing-cloudunit .
```

### 2. Check existing images: 
```
docker images
```

### 3. Run image by associating a port with the tag -p, run the container in background task via the tag -d and define a mailbox to receive notification with the tag -e:
```
docker run -p 32770:3000 -d -e "USER_MAIL=monmail" testing-cloudunit:latest
```

### 4. Check container existing and a port associated:
```
docker ps
```

### 5. Rename the container with a name more speaking:
```
docker rename <old container name> testing-cloudunit
```

### 6. Check app running on the container: 
```
docker logs <container id>
```
Expected result:
```
Server Running on 127.0.0.1 : 3000
```
