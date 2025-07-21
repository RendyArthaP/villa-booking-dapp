import { createConfig, http } from "wagmi";
import { arbitrum, base, sepolia } from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const chains = [sepolia, base, arbitrum] as const;

const { connectors } = getDefaultWallets({
  appName: process.env.NEXT_PUBLIC_APP_NAME || "",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
});

export const wagmiConfig = createConfig({
  connectors,
  chains,
  ssr: true,
  transports: {
    [sepolia.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
  },
});

export { chains };
