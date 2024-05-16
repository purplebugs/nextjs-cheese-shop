# Purpose

Try out

- [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for scaffolding React project
- [Tailwind.css](https://tailwindcss.com/) for styling

## Getting Started

Either use Docker or node.js

### Using docker

First [Install Docker](https://docs.docker.com/get-docker/) on your machine

Tip: View docker images with `docker images`

#### Run app

1. Build your container: `docker build -t nextjs-docker .`
1. Run your container: `docker run -p 3000:3000 nextjs-docker`

#### Run tests

1. Create container `dockertest` to run tests towards: `docker build -t dockertest --target builder .`
1. Run the tests using this container: `docker run dockertest npm run test`

### Using node.js

1. Assumes node.js is installed and repo is cloned. Install app `npm install`

#### Run dev server

```bash
npm run dev
```

#### Run app

```bash
npm run test
```

## Use the app

Navigate to [http://localhost:3000](http://localhost:3000)
