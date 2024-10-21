import React from 'react';
import { useConnect, useDisconnect } from 'wagmi';

const WalletConnect: React.FC = () => {
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async (connector: any) => {
    try {
      await connect(connector);
      window.location.href = 'https://mkulima-bora.netlify.app/';
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <div>
      <h1>Connect Your Wallet</h1>
      {connectors.map((connector) => (
        <button key={connector.id} onClick={() => handleConnect(connector)}>
          {connector.name}
        </button>
      ))}
    </div>
  );
};

export default WalletConnect;
