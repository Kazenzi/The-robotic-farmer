import { create } from 'ipfs-core'; // Use ipfs-core module for Node.js environments

// Simulated sensor data
const sensorData = {
  rainfall: {
    timestamp: Date.now(),
    value: 10 // Example rainfall value
  },
  npk: {
    nitrogen: 5,
    phosphorous: 3,
    potassium: 2,
    timestamp: Date.now()
  },
  moisture: {
    value: 60, // Example moisture value
    timestamp: Date.now()
  },
  temperature: {
    value: 25, // Example temperature value
    timestamp: Date.now()
  },
  waterLevel: {
    value: 40, // Example water level value
    timestamp: Date.now()
  }
};

async function startIPFS() {
  // Create an IPFS instance
  const node = await create();

  // Convert sensor data to JSON
  const jsonData = JSON.stringify(sensorData);

  // Add data to IPFS
  const { cid } = await node.add(jsonData);
  console.log('Data stored on IPFS with CID:', cid.toString());

  // Retrieve the data using CID (optional)
  const retrievedData = [];
  for await (const chunk of node.cat(cid)) {
    retrievedData.push(chunk);
  }
  console.log('Retrieved data from IPFS:', Buffer.concat(retrievedData).toString());

  // Stop the IPFS node when done
  await node.stop();
  console.log('IPFS node stopped.');
}

// Run the function
startIPFS();
