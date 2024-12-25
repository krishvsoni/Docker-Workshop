## Steps to follow:
- install docker and create account 
- install git and create account on github

### run in container
```
sudo docker run -it python:latest bash
```

### upload image
```bash
docker tag imagename:tag username/imagename:tag
docker push username/imagename:tag
```



### port fix
```bash
netstat -aon | findstr :3000
taskkill /PID <PID> /F
```

```bash
docker pull <image-name>      # Pull an image from Docker Hub
docker images                # List downloaded images
docker run <image-name>      # Run a container
docker ps                    # List running containers
docker ps -a                 # List all containers
docker stop <container-id>   # Stop a running container
docker rm <container-id>     # Remove a container
docker rmi <image-id>        # Remove an image
```
