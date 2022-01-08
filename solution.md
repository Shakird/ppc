<!-- GETTING STARTED -->
## Getting Started

<h3 align="center">Before letting you loose there are a few things we have to do to set you up for success.</h3>

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
The `pull` command pulls an image associated with a service defined in a docker-compose.yml or docker-stack.yml file, but does not start containers based on those images.

```bash
docker-compose -f docker-compose.yml pull
```

### `up`
The `up` command aggregates the output of each container. When the command exits, all containers are stopped. Running `docker-compose up -d` starts the containers in the background and leaves them running.

```bash
docker-compose -f docker-compose.yml up -d
```

### `down`
The `down` command stops containers and removes containers, networks, volumes, and images created by `up`.

```bash
docker-compose -f docker-compose.yml down
```

<!-- Commands & Options-->
## ⚙️ Commands & Options

### `start`
Thanks to Docker this runs automatically. However, hiccups are possible. For those rare occasions heres the rundown. This runs a predefined command specified in the "start" property of a package's "scripts" object. For you that means that the `start` command will run the following command: `react-scripts start`.
```bash
npm start
```

<!-- Port Configuration -->
### Port Configuration

<!-- Future Updates-->
### Future Updates

1. Ability to reset value
   Due to the configuration of the current key, there isn't a way to reset the value of the hit counter via the api.
   However if we were to reset it we'd just have to send a request stating 'https://api.countapi.xyz/set/purplecow.tech/1cc732e-b55a-4404-ad3f-0f99c02fe44e?value=0'.

2. Making the right permissions are present before resetting value.
   To further add onto this project the ability to authenticate the user before allowing them to rest the counter value would be a good next step. However while a nice idea this would most likely be something that is out of scope for the developers attempting this within the given time frame.

3. A fun thing to add would be page events that happened when the hit counter got to a certain amount. For example, confetti for the 100th, 1000th,10000th, etc visit.
