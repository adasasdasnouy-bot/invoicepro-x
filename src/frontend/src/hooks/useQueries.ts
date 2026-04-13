import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Invoice, PosResult, ProfitResult } from "../backend.d.ts";

export type { Invoice, PosResult, ProfitResult };

export function useListInvoices() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Invoice[]>({
    queryKey: ["invoices"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listInvoices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateInvoice() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<
    Invoice,
    Error,
    { client: string; amount: bigint; discount: bigint }
  >({
    mutationFn: async ({ client, amount, discount }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createInvoice(client, amount, discount);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
}

export function useCalcPos() {
  const { actor } = useActor(createActor);
  return useMutation<PosResult, Error, { amount: bigint }>({
    mutationFn: async ({ amount }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.calcPos(amount);
    },
  });
}

export function useCalcProfit() {
  const { actor } = useActor(createActor);
  return useMutation<ProfitResult, Error, { cost: bigint; sell: bigint }>({
    mutationFn: async ({ cost, sell }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.calcProfit(cost, sell);
    },
  });
}
