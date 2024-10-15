// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SensorDataStorage {
    string public latestCID;

    event CIDUpdated(string newCID, uint256 timestamp);

    function updateCID(string memory newCID) public {
        latestCID = newCID;
        emit CIDUpdated(newCID, block.timestamp);
    }

    function getLatestCID() public view returns (string memory) {
        return latestCID;
    }
}
