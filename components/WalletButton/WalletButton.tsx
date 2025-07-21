"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";

const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className='flex items-center gap-3'
          >
            {!connected ? (
              <button
                onClick={openConnectModal}
                className='bg-[#10B981] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition'
              >
                Connect Wallet
              </button>
            ) : (
              <div className='flex items-center gap-2'>
                <button
                  onClick={openChainModal}
                  className='bg-[#10B981] text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-400 '
                >
                  {chain.hasIcon && (
                    <span className='inline-block w-4 h-4 mr-1 align-middle'>
                      <Image
                        src={chain.iconUrl || ""}
                        alt={chain.name ?? "Chain icon"}
                        width={16}
                        height={16}
                      />
                    </span>
                  )}
                  {chain.name}
                </button>

                <button
                  onClick={openAccountModal}
                  className='bg-[#10B981] text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-400 '
                >
                  {account.displayName}
                  {account.displayBalance ? ` • ${account.displayBalance}` : ""}
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletButton;
