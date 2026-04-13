import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ProfitResult {
    profit: bigint;
}
export type Timestamp = bigint;
export interface Invoice {
    id: InvoiceId;
    client: string;
    total: bigint;
    createdAt: Timestamp;
    discount: bigint;
    amount: bigint;
}
export interface PosResult {
    fee: bigint;
    total: bigint;
}
export type InvoiceId = bigint;
export interface backendInterface {
    calcPos(amount: bigint): Promise<PosResult>;
    calcProfit(cost: bigint, sell: bigint): Promise<ProfitResult>;
    createInvoice(client: string, amount: bigint, discount: bigint): Promise<Invoice>;
    listInvoices(): Promise<Array<Invoice>>;
}
