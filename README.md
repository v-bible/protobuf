<div align="center">

  <h1>protobuf</h1>

  <p>
    v-bible protobuf schema
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/v-bible/protobuf/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/v-bible/protobuf" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/v-bible/protobuf" alt="last update" />
  </a>
  <a href="https://github.com/v-bible/protobuf/network/members">
    <img src="https://img.shields.io/github/forks/v-bible/protobuf" alt="forks" />
  </a>
  <a href="https://github.com/v-bible/protobuf/stargazers">
    <img src="https://img.shields.io/github/stars/v-bible/protobuf" alt="stars" />
  </a>
  <a href="https://github.com/v-bible/protobuf/issues/">
    <img src="https://img.shields.io/github/issues/v-bible/protobuf" alt="open issues" />
  </a>
  <a href="https://github.com/v-bible/protobuf/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/v-bible/protobuf.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/v-bible/protobuf/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/v-bible/protobuf">Documentation</a>
  <span> · </span>
    <a href="https://github.com/v-bible/protobuf/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/v-bible/protobuf/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
- [Usage](#eyes-usage)
  - [Makefile Targets](#makefile-targets)
  - [Swagger UI](#swagger-ui)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

- Go: `1.22.3`.

<!-- Run Locally -->

### :running: Run Locally

Clone the project:

```bash
git clone https://github.com/v-bible/protobuf.git
```

Go to the project directory:

```bash
cd protobuf
```

Install dependencies:

```bash
go mod download
```

<!-- Usage -->

## :eyes: Usage

### Makefile Targets

- `gen-proto`: generate protobuf files.

```bash
make gen-proto
```

### Swagger UI

Run the following command to start the Swagger UI:

```bash
docker-compose up
```

Then, open your browser and go to `http://localhost:8080`.

> [!NOTE]
> If you add more service please update the `docker-compose.yml` file.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/v-bible/protobuf/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=v-bible/protobuf" />
</a>

Contributions are always welcome!

Please read the [contribution guidelines](./CONTRIBUTING.md).

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](./CODE_OF_CONDUCT.md).

<!-- License -->

## :warning: License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** License.

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

See the **[LICENSE.md](./LICENSE.md)** file for full details.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) -
tienvinh.duong4@gmail.com

Project Link: [https://github.com/v-bible/protobuf](https://github.com/v-bible/protobuf).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway): gRPC to JSON
  proxy generator following the gRPC HTTP spec.
- [buf.build](https://buf.build/): A new way to work with Protocol Buffers.
- [Swagger UI](https://swagger.io/tools/swagger-ui/): The Swagger UI is an open
  source project to visually render documentation for an API defined with the
  OpenAPI (Swagger) Specification.
