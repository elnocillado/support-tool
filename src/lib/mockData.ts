import type { InstapayPayment } from './types';

export const instapay: InstapayPayment[] = [
  {
    instructionID: '20240816GXCHPHM2XXB000002',
    sendingRt: 'GXCHPHM2XXX',
    transactionDateTime: '08/01/2024 10:00:00',
    status: 'ACTC',
    localInstrument: 'Purchase through QR code',
    categoryPurposeCode: 'IBFT00',
    amount: 150,
    transactionCurrency: "PHP"
  },
  {
    instructionID: '20240816GXCHPHM2XXB0000037',
    sendingRt: 'GXCHPHM2XXX',
    transactionDateTime: '08/05/2024 09:00:00',
    status: 'ACTC',
    localInstrument: 'Purchase through QR code',
    categoryPurposeCode: 'IBFT00',
    amount: 800,
    transactionCurrency: "PHP"
  },
  {
    instructionID: '20240816GXCHPHM2XXB0000001',
    sendingRt: 'SRCPPHM2XXX',
    transactionDateTime: '08/10/2024 05:00:00',
    status: 'ACTC',
    localInstrument: 'Purchase through QR code',
    categoryPurposeCode: 'IBFT00',
    amount: 1000,
    transactionCurrency: "PHP"
  }
]


