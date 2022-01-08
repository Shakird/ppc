
<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://e7.pngegg.com/pngimages/699/669/png-clipart-holstein-friesian-cattle-cartoon-drawing-purple-cow-s-head-snout.png" alt="Logo" width="450" height="300">
  <h1 align="center">Welcome to Project Purple Cow</h1>

  <p align="center">
    <br />
    <a href="https://github.com/Shakird/project-purple-cow/issues">Report Bug</a>
    ·
    <a href="https://github.com/Shakird/project-purple-cow/issues">Request Feature</a>
  </p>
</p>

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

<!-- CONTRIBUTING -->
## 💻 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&text=Now%20your%20journey%20begins&fontSize=60&animation=fadeIn)