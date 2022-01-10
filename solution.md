<!-- GETTING STARTED -->
### Prerequisites

A few essentials to install that will ensure your development experience with this project goes smoothly.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Docker
  ```sh
  https://docs.docker.com/get-docker/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Shakird/project-purple-cow.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
   
   <!-- Docker-compose-->
## 🐳 Docker-compose Quick start ⚡️

### `pull`
**First** you want to run the pull command. The `pull` command pulls the images associated the services defined in the docker-compose.yml file, but does not start containers based on those images.

```bash
docker-compose pull
```

### `up`
**Second** lets get the application running by using the up command. The `up` command aggregates the output of each container. When the command exits, all containers are stopped. Running `docker-compose up -d` starts the containers in the background and leaves them running. This 

```bash
docker-compose up -d
```

### `down`
**Lastly** once you're done, use the down command. The `down` command stops containers and removes containers, networks, volumes, and images created by `up`.

```bash
docker-compose down
```
<!-- Errors-->
## ⚙️ Errors / Troubleshooting

### `sh:1: react-scripts: not found`
While running `docker-compose up` you may have the unfortunate luck of running into this message. Thankfully this can be easily resolved.

1. First delete both the "node_modules" and "package-lock.json" files.

2. Next run npm install.

3. Lastly run the `docker-compose up` command again, this time you should see `Container purpleCow Started`.


<!-- Commands & Options-->
## ⚙️ Commands & Options

### `start`
Thanks to Docker this runs automatically. However, hiccups are possible. For those rare occasions heres the rundown. This runs a predefined command specified in the "start" property of a package's "scripts" object. For you that means that the `start` command will run the following command: `react-scripts start`.
```bash
npm start
```

<!-- Port Configuration -->
### Port Configuration
This project is served via port 3000, if you would like to change to another port you can do so via the Dockerfile
`ENV PORT 3000`
and your docker-compose file
`ports: - 3000:3000` 

<!-- Future Updates-->
### Future Updates

1. **Ability to reset value**
   Due to the configuration of the current key, there isn't a way to reset the value of the hit counter via the api.
   However if we were to reset it we'd just have to send a request stating 'https://api.countapi.xyz/set/purplecow.tech/1cc732e-b55a-4404-ad3f-0f99c02fe44e?value=0'.

2. **Make sure the right permissions are present before resetting value.**
   To further add onto this project; the ability to authenticate the user before allowing them to rest the counter value would be a good next step. However while a nice idea this would most likely be something that is out of scope for the developers attempting this within the given time frame.

3. A fun thing to add would be page events that happened when the hit counter got to a certain amount. For example, confetti for the 100th, 1000th,10000th, etc visits.

4. Lastly I would use tailwind to spruce up the UI. Add some headers or even expand into creating a dashboard to display multiple counters.

<!-- Code to add-->
### Code to add

1. Right now there are two button components. I would like to break this down into a single button component named "Button". The only road block I've run into is with passing onClick events to that reusable button component and where the functions being called via those events would live. I'm most likely over thinking it but with that break through it would be easy to have a single reusable button component.

2. Working test, creating the test for these components seemed simple enough however it turns out that I am not as proficient as I thought in regards to creating test for all parts of a component. I would love to discuss how to make these test work better and gain insight on TDD.

