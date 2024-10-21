import './style.css'; 
import './bootstrap.css';
import './style.scss';

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useEffect } from 'react'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error, data } = useConnect()
  const { disconnect } = useDisconnect()

  // Redirect once the user is connected
  useEffect(() => {
    if (account.isConnected) {
      console.log('Wallet connected, redirecting to main UI...')
      window.location.href = 'https://mkulima-bora.netlify.app/'
    }
  }, [account.isConnected])

  return (
    <>
      <div>
        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.address)}
          <br />
          chainId: {account.chain?.id}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
