<p align="center">
  <h3 align="center">sayande.com</h3>

  <p align="center">
    This is my portfolio website.
    <br />
    ·
    <a href="https://sayande-com-web.vercel.app/">Website</a>
    ·
  </p>
</p>

This is a solo project by [Sayan De](https://github.com/sayande2002).

## Contributing

Guidelines for contributing can be found in [CONTRIBUTING.md](https://github.com/sayande2002/refhired.com/blob/main/CONTRIBUTING.md).

## Main domains

| Domain                  | Tech           | Version |
| ----------------------- | -------------- | ------- |
| Repository Tool         | Turborepo      | 1.9     |
| Primary Language        | TypeScript     | 4.5     |
| Website Front-End       | Next.js        | 13.4    |
| Mobile App              | React Native   | 0.72    |
| Desktop App Tool        | Tauri          | 1.4     |
| Back-End Server         | Golang         | -       |
| Api                     | GraphQL        | -       |
| Styling                 | Tailwind CSS   | 3.3     |
| Database ORM            | Prisma         | 4.15    |
| Primary Database        | PostgreSQL     | 15.3    |
| Caching Database        | Redis          | -       |
| Unit Testing            | Vitest         | 0.33.0  |
| End to end Testing      | Playwright     | 1.36.2  |
| Containerization        | Docker         | -       |
| Container Orchestration | Kubernetes     | 1.24    |
| Continuous Integration  | GitHub Actions | -       |
| Continuous Delivery     | Argo CD        | 2.8     |
| Infrastructure as code  | Terraform      | -       |
| Deployment              | AWS            | -       |
| Proxy                   | Nginix         | -       |
| Version Control         | GitHub         | -       |
| Code Editor             | VS Code        | -       |

## Getting Started

To get a local copy up and running, please follow these simple steps.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Here is what you need to be able to run Cal.com.

- Node.js (Version: >=18.x)
- Git
- Docker and Docker Compose
- Yarn _(recommended)_

## Development

### Setup

1. Clone the repo into a public GitHub repository (or fork <https://github.com/sayande2002/refhired.com/fork>). If you plan to distribute the code, keep the source code public to comply with [AGPLv3](https://github.com/sayande2002/refhired.com/blob/main/LICENSE).

   ```sh
   git clone https://github.com/sayande2002/refhired.com
   ```

2. Go to the project folder

   ```sh
   cd refhired.com
   ```

3. Install packages with yarn

   ```sh
   yarn
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.

5. Quick start with `yarn dx`
   This will run the docker compose file in the root directory from the docker image build from @refhired.com/web on `http://localhost:3000/` and docker image build from @refhired.com/prisma (database) on `http://localhost:5432/` and adminar on `http://localhost:8080/`

> - **Requires Docker and Docker Compose to be installed**

```sh
yarn dx
```

6. Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.

### License

-[MIT license](LICENSE)

### Contact 📬

For any query, email <sayandeten@gmail.com>.

Thanks!
