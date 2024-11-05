'use client';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import WalletWrapper from './WalletWrapper';

export default function LoginButton() {
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      // Redirect to your app once the wallet is connected
      window.location.href = 'https://mkulima-bora.netlify.app/';
    }
  }, [address]); // Run this effect when the address changes

  return (
    <WalletWrapper
      className="min-w-[90px]"
      text="Log in"
      withWalletAggregator={true}
    />
  );
}
