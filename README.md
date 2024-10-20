# 🚜 Decentralized Robotic Farming 🤖

## Overview

*Decentralized Robotic Farming* a.k.a "The Robotic Farmer" is an innovative solution that combines IoT technology and blockchain to enhance transparency, efficiency, and trust in agricultural practices. Our application enables real-time monitoring of farm conditions and automatic mechanized responses to address issues, all while securely storing farming data for easy access. The Robotic Farmer aims to improve crop yields, reduce resource wastage, and foster a more sustainable agricultural ecosystem.

Our application applies the use of a smart contract deployed on the Base Mainnet. To verify, click [here](https://basescan.org/tx/0xa0cec8370d50e3738e3875305d2406a3c49cf04a951348cc5778b26b3b8fc69f) 

Contract Address: 0xcbb03c0470c16f5e1065cc8379252062e0d8d3d4

To explore further details, visit [BaseScan](https://basescan.org/) and paste the contract address above.

## <u>Table of Contents</u>
- [Problem Statement](#problem-statement)
- [Our Solution](#our-solution)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [License](#license)

## Problem Statement

Agriculture today faces several challenges:
- Lack of trust and transparency between stakeholders.
- Absence of mechanized systems to respond to changing conditions.
- No proof of proper farming conditions, leading to wrongful accusations.
- Limited access to reliable, data-driven decision-making tools.

## Our Solution

We leverage IoT-enabled agriculture combined with Web 3 integration to create a robust platform for monitoring and managing farm conditions:
- *Real-time Monitoring*: Continuous data collection from various sensors.
- *Autonomous Robotics*: Implementation of robotic systems that autonomously perform tasks such as irrigation and fertilization based on real-time data.
- *Blockchain Storage*: Immutable records stored on IPFS, ensuring tamper-proof data.
- *Smart Contracts*: Automated updates and audits for all farm operations.

## Key Features

- *IoT Sensors*: Utilizes ultrasonic, soil temperature, water level, moisture, rainfall, and NPK sensors.
- *Automation*: Automatically manages irrigation and nutrient dosing based on real-time data.
- *Transparent Record-Keeping*: Immutable records on the blockchain provide legal protection for farmers.
- *Data Accessibility*: Stakeholders can access real-time data and historical records through an intuitive dashboard.
  
![Alt text](https://github.com/Kazenzi/The-robotic-farmer/blob/master/mkulima_hardware_top.png)
![Alt text](https://github.com/Kazenzi/The-robotic-farmer/blob/master/mkulima_hardware_page-0005.jpg)
 <img src="https://github.com/Kazenzi/The-robotic-farmer/blob/master/raw.jpeg" alt="Description" width="300">

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Kazenzi/The-robotic-farmer.git
   cd The-robotic-farmer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Run the Application:** Start the application by running:
   ```bash
   node index.js
   ```
   You will be prompted by your wallet (MetaMask or similar) to confirm the transaction for gas fees.

2. **Interact with the Smart Contract:**
   - Use the `updateCID.js` script to update the IPFS CID for the latest sensor data:
   ```bash
   cd scripts
   node updateCID.js
   ```
   - Confirm the transaction prompt in your MetaMask wallet when updating the CID.

## Future Enhancements

- *Automatic Alerts*: Notifications for critical thresholds (e.g., low water levels).
- *Gas Fee Estimation*: Display gas fee estimates before transactions.
- *Offline Functionality*: Access sensor data offline.
- *Data Visualizations*: Implement charts for data trends over time to help farmers make informed decisions.

## Contributors

- [Samuel Njoroge](https://github.com/sammmmlikescoding)
- [Peter Kirumba](https://github.com/kirushpeter)
- [Jacinta Kazenzi](https://github.com/Kazenzi)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
