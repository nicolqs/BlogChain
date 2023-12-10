// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlogChain {
  struct Tweet {
    address author;
    string content;
    uint256 timestamp;
    uint256 id;
  }

  Tweet[] public tweets;

  uint256 public nextTweetId;

  event TweetCreated(address author, string content, uint256 timestamp, uint256 id);

  function writeTweet(string calldata _content) external {
    tweets.push(Tweet(msg.sender, _content, block.timestamp, nextTweetId));
    emit TweetCreated(msg.sender, _content, block.timestamp, nextTweetId);
    nextTweetId++;
  }

  function readTweets() external view returns (Tweet[] memory) {
    return tweets;
  }
}
