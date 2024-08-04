import { GetBalanceReturnType } from "@wagmi/core";

export interface DatabaseUser {
  id: string;
  address: string;
  tier: any;
  smartAccounts: DatabaseSmartAccount[];
}

export interface DatabaseSmartAccount {
  id: string;
  user: DatabaseUser;
  name?: string;
  description?: string;
  address: string;
  provider: SmartAccountProvider;
  entryPoint: string;
  chainId: string;
  createdAt?: string;
  balance?: GetBalanceReturnType;
}

export type UserTier = "STARTER" | "PRO" | "BUSINESS" | "ENTERPRISE";

export type SmartAccountProvider = "Safe" | "Biconomy";

export type DeploymentChain = "Sepolia" | "Base_Sepolia" | "Optimism_Sepolia";
