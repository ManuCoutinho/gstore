import { CalculateInstallment } from "@gstore/core"

export function useInstallments(value: number, qty: number = 12) {
  const installment = new CalculateInstallment().execute(value, qty)
  return installment
}