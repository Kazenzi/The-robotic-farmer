'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wallet } from '@coinbase/onchainkit/wallet';

export default function TransactionWrapper({ address }: { address: string }) {
  const router = useRouter();

  // Effect to handle redirection once the address is available
  useEffect(() => {
    if (address) {
      // Redirect to the main app after the user connects their wallet
      window.location.href = 'https://mkulima-bora.netlify.app/';
    }
  }, [address, router]);

  return (
    <div className="flex w-[450px]">
      {/* Placeholder content if needed */}
      <Wallet>
        <p className="text-center text-gray-600">Connecting your wallet...</p>
      </Wallet>
    </div>
  );
}
