// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

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
    // Create new Tweet and add it to array of tweets
    Tweet memory newTweet = Tweet(msg.sender, _content, block.timestamp, nextTweetId);
    tweets.push(newTweet);

    // Emit an event - can be used by the front-end to display new tweets in real-time
    emit TweetCreated(msg.sender, _content, block.timestamp, nextTweetId);

    nextTweetId++;
  }
}
