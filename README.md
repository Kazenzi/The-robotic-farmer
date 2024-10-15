# 🚜 Decentralized Farm Monitoring and Management 🌾

## Overview

*Decentralized Farm Monitoring and Management* is an innovative solution that combines IoT technology and blockchain to enhance transparency, efficiency, and trust in agricultural practices. Our application allows real-time monitoring of farm conditions while ensuring that all data is securely stored and easily accessible.

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
- No proof of proper farming conditions, leading to wrongful accusations.
- Limited access to reliable, data-driven decision-making tools.

## Our Solution

We leverage IoT-enabled agriculture combined with Web 3 integration to create a robust platform for monitoring and managing farm conditions:
- *Real-time Monitoring*: Continuous data collection from various sensors.
- *Blockchain Storage*: Immutable records stored on IPFS, ensuring tamper-proof data.
- *Smart Contracts*: Automated updates and audits for all farm operations.

## Key Features

- *IoT Sensors*: Utilizes ultrasonic, soil temperature, water level, moisture, rainfall, and NPK sensors.
- *Automation*: Automatically manages irrigation and nutrient dosing based on real-time data.
- *Transparent Record-Keeping*: Immutable records on the blockchain provide legal protection for farmers.
- *Data Accessibility*: Stakeholders can access real-time data and historical records through an intuitive dashboard.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/agriculture-base-africa.git
   cd agriculture-base-africa
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
   node updateCID.js
   ```
   - Confirm the transaction prompt in your MetaMask wallet when updating the CID.

## Future Enhancements

- *Automatic Alerts*: Notifications for critical thresholds (e.g., low water levels).
- *Gas Fee Estimation*: Display gas fee estimates before transactions.
- *Offline Functionality*: Access sensor data offline.
- *Data Visualizations*: Implement charts for data trends over time.

## Contributors

- [Samuel Njoroge](https://github.com/sammmmlikescoding)
- [Peter Kirumba](https://github.com/kirushpeter)
- [Jacinta Kazenzi](https://github.com/Kazenzi)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You can copy and paste this formatted content into your README.md file on GitHub.
