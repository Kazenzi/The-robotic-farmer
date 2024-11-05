'use client';
import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  const redirectToApp = () => {
    window.location.href = "https://mkulima-bora.netlify.app/"; // Redirect to your app
  };

  return (
    <WalletWrapper
      className="ockConnectWallet_Container min-w-[90px] shrink bg-slate-200 text-[#030712] hover:bg-slate-300"
      text="Sign up"
      onClick={redirectToApp} // Call redirect function on click
    />
  );
}

