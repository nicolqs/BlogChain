# BlogChain (Beta) Decentralized Micro-Blogging

[![Styled with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io) [![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

If something doesn’t work, please [file an issue](https://github.com/nicolqs/BlogChain/issues/new).<br>

# Repository Overview

Welcome to the GitHub repository for BlogChain, an innovative microblogging service built upon the Ethereum blockchain. This project is combining the world of social media with blockchain technology to create a decentralized platform for free expression and communication.

### What is BlogChain?

This App emulates the core features of traditional microblogging services like Twitter, but operates entirely on the Ethereum blockchain. By leveraging blockchain technology, this service ensures security, transparency, and independence from centralized control.

![Dashboard](./public/images/dashboard.png)

### Technology and Tools

- Next.js
- React + Typescript
- Material UI
- ethers.js

## Get started

```sh
yarn install
```

## Local blockchain

```sh
$ npx hardhat node --fork https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY
$ npx hardhat --network localhost run scripts/deploy.ts
```

## To run locally

```sh
yarn dev
```

Go to [http://localhost:3000/](http://localhost:3000/)

## Project Structure

```my-eth-app
├── README.md
├── frontend // smart contract ABI
├── contracts // smart contract solidity code
├── node_modules
├── package.json
├── public
├── src
    ├── components // React components
    └── configs //  theme & web3 configs
    └── pages // Next.js automated dynamic Routes
├── styles
├── tsconfig.json
```
