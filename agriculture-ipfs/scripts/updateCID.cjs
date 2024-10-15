const { ethers } = require("ethers");

// Connect to the Ethereum network via MetaMask or any wallet provider
// By default, MetaMask injects `window.ethereum` as the provider in the browser environment.
async function getProvider() {
  if (typeof window.ethereum !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request wallet connection
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    throw new Error("No wallet provider found! Please install MetaMask or another wallet.");
  }
}

// Function to update CID in the contract
async function updateCIDInContract(cid) {
  try {
    const provider = await getProvider(); // Get MetaMask or any other wallet provider
    const signer = provider.getSigner(); // Get the signer (i.e., the connected user)
    const contractAddress = "0xcbb03c0470c16f5e1065cc8379252062e0d8d3d4"; // deployed smart contract address on the Ethereum network
    const contractABI = [
      "function updateCID(string newCID) public",
      "function getLatestCID() public view returns (string)"
    ];
  
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
    // Prompt MetaMask to confirm the transaction (gas fee required)
    const tx = await contract.updateCID(cid);
    await tx.wait(); // Wait for the transaction to be confirmed on-chain
    console.log("CID updated on-chain:", cid);
  } catch (error) {
    console.error("Error updating CID:", error);
  }
}

// Simulated CID from IPFS
const newCID = "QmYourGeneratedCID";
updateCIDInContract(newCID);
