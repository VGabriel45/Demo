import { Address } from "viem"

export type Deposit = {
    amount: string,
    accountAddress: Address
    smartAccountAddress: Address
}