import { SmartAccountProvider } from "@prisma/client";

export type CreateSmartAccountFormInfo = {
  provider: SmartAccountProvider;
  name: string;
  chainId: string;
  description: string;
};
