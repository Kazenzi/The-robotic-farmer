const { ethers } = require("ethers");
const { CoinbaseWalletSDK } = require('@coinbase/wallet-sdk');

// Initialize Coinbase Wallet SDK
const sdk = new CoinbaseWalletSDK({
  appName: 'The Robotic Farmer',
  appChainIds: [8453]  // Assuming you are on the Base Mainnet
});

// Create a provider for Coinbase Wallet (use this instead of MetaMask)
async function getProvider() {
  try {
    const ethereum = sdk.makeWeb3Provider('https://mainnet.base.org', 8453);  // Adjust URL and chain ID as necessary
    await ethereum.request({ method: 'eth_requestAccounts' });  // Request wallet connection
    return new ethers.providers.Web3Provider(ethereum);  // Return Coinbase Wallet provider
  } catch (error) {
    throw new Error("Unable to connect to wallet. Please install Coinbase Wallet or MetaMask.");
  }
}

// Function to update CID in the contract
async function updateCIDInContract(cid) {
  try {
    const provider = await getProvider();  // Use Coinbase Wallet provider
    const signer = provider.getSigner();  // Get the signer (connected user)
    const contractAddress = "0xcbb03c0470c16f5e1065cc8379252062e0d8d3d4";  // Update with your contract address
    const contractABI = [
      "function updateCID(string newCID) public",
      "function getLatestCID() public view returns (string)"
    ];

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Prompt Coinbase Wallet to confirm the transaction (gas fee required)
    const tx = await contract.updateCID(cid);
    await tx.wait();  // Wait for the transaction to be confirmed on-chain
    console.log("CID updated on-chain:", cid);
  } catch (error) {
    console.error("Error updating CID:", error);
  }
}

// Simulated CID from IPFS
const newCID = "QmYourGeneratedCID";
updateCIDInContract(newCID);
