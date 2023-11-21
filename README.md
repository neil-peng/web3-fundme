# web3-fundme

合约地址：https://sepolia.etherscan.io/address/0x7cd7E63BacC43Ff2D211f75906214951B14D4125

yarn init
yarn add --dev hardhat
yarn hardhat init
choose : Create a JavaScript project

yarn add @chainlink/contracts

yarn hardhat compile

部署：
yarn hardhat run scripts/deploy.js --network sepolia

测试链 sepolia 准备：
节点服务：选择使用 alchemy，或者钱包中配置的 sepolia 地址
