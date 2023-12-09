# BlogChain (Beta) Decentralized Micro-Blogging

[![Styled with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io) [![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

If something doesn’t work, please [file an issue](https://github.com/nicolqs/dapp/issues/new).<br>

![Dashboard](./public/images/dashboard.png)

### Based on

- Next.js
- React + Typescript
- Material UI
- create-eth-app
- usedapp

## Get started

```sh
yarn install
yarn dev
```

Go to [http://localhost:3000/](http://localhost:3000/)

## To deploy

```sh
yarn build
```

## Project Structure

```my-eth-app
├── README.md
├── node_modules
├── package.json
└── packages // everything blockchain / smart contract related
    ├── contracts
    └── subgraph
├── public
├── src
    ├── components // React components
    └── configs //  your theme configs in 1 file
    └── pages // Next.js automated dynamic Routes
├── styles
├── tsconfig.json
```
