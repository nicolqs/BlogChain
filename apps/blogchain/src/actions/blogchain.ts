import { ethers } from 'ethers'

async function getContractTweet(contract: ethers.Contract, log: ethers.providers.Log) {
  return await contract.getTweet(log.topics[2])
}

export async function getContractTweets(
  signer: ethers.providers.JsonRpcSigner,
  contract: ethers.Contract,
  provider: ethers.providers.JsonRpcProvider
) {
  try {
    const author = await signer.getAddress()

    const filter = {
      author,
      address: contract.address,
      fromBlock: 0,
      toBlock: 'latest',
      topics: contract.filters.TweetCreated(author).topics
    }

    const logs = await provider.getLogs(filter)

    return Promise.all(logs.map(tweetLog => getContractTweet(contract, tweetLog)))
  } catch (error) {
    console.error('Error reading tweets:', error)
  }
}

export async function postContractTweet(contract: ethers.Contract, tweet: string) {
  try {
    const tx = await contract.writeTweet(tweet)
    await tx.wait() // Wait for the transaction to be mined
  } catch (error) {
    console.error('Error reading tweets:', error)
  }
}
