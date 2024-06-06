'use client'

import AcrossPlusComponent from '@/components/across-plus';
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
  }
  
  return (
    <main className="min-h-screen py-16 flex flex-col justify-center items-center flex-1">
      <h1 className="m-0 leading-tight text-4xl">
        Crosschain Executor{' '}
      </h1>

      <button
        className='rounded-md bg-gray-900 border-none text-lg font-semibold cursor-pointer text-white px-3.5 py-3 mt-10'
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
      </button>
      <div className='mt-10'>
        {wallet === null ? null : <AcrossPlusComponent />}
      </div>
    </main>
  )
}
