import { GetBalanceReturnType } from "@wagmi/core";
import { type ClassValue, clsx } from "clsx";
import { ethers } from "ethers";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimAddress(address: string) {
  return address && `${address.substring(0, 5)}...${address.slice(-5)}`;
}

export function formatBalance(balance: GetBalanceReturnType) {
  return `${ethers.formatEther(balance.value).substring(0, 4)} ${balance.symbol}`;
}
