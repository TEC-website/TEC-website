# CLONING THIS PROJECT

```bash
  python<version> -m venv <virtual-environment-name>
```
Activate your virtualenv 

```bash
  source env/bin/activate # On mac
  env/Scripts/activate.bat # In CMD
  env/Scripts/Activate.ps1 # In Powershell
```

Run the following lines of code

```bash
  pip install -r requirements.txt
```

# Run on Docker
* Docker needs to be setup on your computer before running the command below.
```bash
  docker-compose up -d
```
* Navigate to your browser [tec-website]('http://localhost:8300')

* Refresh the page after template changes. [Empty cache and hard reload]('https://www.contractsafe.com/support/how-to-clear-your-browser-cache-and-hard-refresh') if your old changes persist.

# Manual deployment steps

Step 1: Make your local changes, then build and push the docker image to docker hub

```bash
  docker build -t <dockerhub-username>/<image-name>:<tag> .
  docker push <dockerhub-username>/<image-name>:<tag>

```

Step 2: SSH into the server and pull the docker image

```bash
  docker pull <dockerhub-username>/<image-name>:<tag>
```

Step 3: Stop and remove the existing container

```bash
  docker stop <container-name>
  docker rm <container-name>
```

Step 4: Run the new image

```bash
  docker run -d --name <container-name> -p 8000:8000 <dockerhub-username>/<image-name>:<tag>
```
