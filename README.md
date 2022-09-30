Bootstrap your Dapp in a heartbeat

This project is using
- Next.js
- React + Typescript
- Material UI
- create-eth-app
- usedapp

![Dashboard](./public/images/dashboard.png)

## Get started
```sh
yarn install
yarn dev
```

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
