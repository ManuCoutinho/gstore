import { INSTALLMENT_MAX_QTY, MONTHLY_INTEREST_RATE } from "../constants"
import Installment from "./Installment"

export default class CalculateInstallment {
  execute(
    total: number,
    qtyInstallments: number = INSTALLMENT_MAX_QTY,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (qtyInstallments < 2 || qtyInstallments > INSTALLMENT_MAX_QTY) {
      throw new Error(`Quantidade de parcelas deve ser entre 2 e ${INSTALLMENT_MAX_QTY}`)
    }

    const totalWithInterest = this.calculateCompoundInterest(
      total,
      interestRate,
      qtyInstallments
    )

    return {
      installmentValue: this.calculateWithTwoDecimalPlaces(
        totalWithInterest / qtyInstallments
      ),
      totalAmount: this.calculateWithTwoDecimalPlaces(totalWithInterest),
      installmentsQty: qtyInstallments,
      interestRate
    }
  }

  private calculateCompoundInterest(
    total: number,
    qtyInstallments: number,
    interestRate: number
  ) {
    return total * Math.pow(1 + interestRate, qtyInstallments)
  }
  private calculateWithTwoDecimalPlaces(value: number) {
    return Math.round(value * 100) / 100
  }
}
