// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';

contract BlogChain is Pausable, AccessControl {
  bytes32 public constant PAUSER_ROLE = keccak256('PAUSER_ROLE');
  bytes32 public constant MODERATOR_ROLE = keccak256('MODERATOR_ROLE');

  // -----------------------------------------------------------------------

  struct Tweet {
    bytes32 id;
    uint256 timestamp;
    address author;
    string content;
  }

  struct User {
    string name;
    string description;
    string profileImg;
  }

  uint256 public nextTweetId;

  mapping(bytes32 => Tweet) public Tweets;
  mapping(address => User) public Users;

  event TweetCreated(address indexed author, bytes32 indexed hashId, string content);
  event TweetDeleted(uint256 id, bool isDeleted);

  // -----------------------------------------------------------------------

  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(PAUSER_ROLE, msg.sender);
    nextTweetId = 0;
  }

  // -----------------------------------------------------------------------

  function pause() public onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  // -----------------------------------------------------------------------

  function writeTweet(string calldata content) external {
    bytes32 hashId = keccak256(abi.encodePacked(msg.sender, nextTweetId));
    Tweet storage newTweet = Tweets[hashId];
    newTweet.id = hashId;
    newTweet.timestamp = block.timestamp;
    newTweet.author = msg.sender;
    newTweet.content = content;
    emit TweetCreated(msg.sender, hashId, content);
    nextTweetId++;
  }

  function deleteTweet(bytes32 id) external {}

  function moderateTweet(bytes32 id) public onlyRole(MODERATOR_ROLE) {}

  function getTweet(bytes32 hashId) external view returns (Tweet memory) {
    return Tweets[hashId];
  }

  function updateUser(string memory name, string memory description, string memory profileImg) public {
    User storage userData = Users[msg.sender];
    userData.name = name;
    userData.description = description;
    userData.profileImg = profileImg;
  }

  // function getUser(address userAddress) external view returns (user memory) {
  //     return Users[userAddress];
  // }
}
