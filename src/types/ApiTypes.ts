import { Address } from "viem";

export type WalletTokenInfo = {
    tokenAddres: Address,
    decimals: number;
    logo_url: string;
    name: string;
    symbol: string;
    balance: string; // Assuming `formatUnits` returns a string
    balanceInUsd24HAgo: number;
    balanceInUsdNow: number;
    priceNow: string;
    price24hAgo: string;
    balanceInUsdFormatted: string;
    percentage_change24h: string;
};