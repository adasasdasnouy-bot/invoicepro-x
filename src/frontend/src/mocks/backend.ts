import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  calcPos: async (amount: bigint) => ({
    fee: BigInt(Math.round(Number(amount) * 0.02)),
    total: BigInt(Math.round(Number(amount) * 1.02)),
  }),
  calcProfit: async (cost: bigint, sell: bigint) => ({
    profit: sell - cost,
  }),
  createInvoice: async (client: string, amount: bigint, discount: bigint) => ({
    id: BigInt(1),
    client,
    amount,
    discount,
    total: amount - discount,
    createdAt: BigInt(Date.now()) * BigInt(1_000_000),
  }),
  listInvoices: async () => [
    {
      id: BigInt(1),
      client: "Acme Corp",
      amount: BigInt(500),
      discount: BigInt(50),
      total: BigInt(450),
      createdAt: BigInt(Date.now()) * BigInt(1_000_000),
    },
  ],
};
