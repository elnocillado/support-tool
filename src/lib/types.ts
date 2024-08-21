  export type InstapayPayment = {
    instructionID: string;
    sendingRt: string;
    transactionDateTime: string;
    status: string;
    localInstrument: string;
    categoryPurposeCode: string
    amount: number;
    transactionCurrency: string
  }