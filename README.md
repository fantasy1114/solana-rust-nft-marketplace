### HI, There

### Compile and Deploy Contracts
- make sure you have solana installed
- make sure you have rust installed
- install phantom wallet on the browser or any from the list
- make sure u have a solana wallet with SOL token (devnet)
- Config to devnet

```
solana config set --url devnet
```
- Create wallet
```
solana-keygen new
```
- Add test token to the wallet

```
solana airdrop 5
```
navigate to the rust folder
```
cd rust
```
build the project
```
cargo build-bpf
```
- After the build step completes, deploy the program to devnet
```
solana program deploy ./path/to/the_program.so -u devnet
```
- Clear js/packages/web/.env variables to create of a fresh new store

- start the app
```
cd ../js/packages
yarn && yarn bootstrap
yarn start
```

# Open the site in a browser 

```
http://localhost:3000
```
- Now connect wallet
- Create NFT
- Sell NFT
