
declare global {
    interface Window { mina: any; } 
  }
  
  export type SendPaymentParams = {
    amount: string;
    to: string;
    fee: string;
    memo: string;
  };

  export async function checkMinaProvider(): Promise<boolean> {
    if (!window.mina) {
      alert('No provider was found. Please install Auro Wallet.');
      return false;
    }
    return true;
  }
  
  export async function sendPayment({
    amount,
    to,
    fee,
    memo
  }: SendPaymentParams): Promise<string> {
    if (!(await checkMinaProvider())) {
      throw new Error('No provider was found. Please install Auro Wallet.');
    }
  
    try {
      const sendResult = await window.mina.sendLegacyPayment({
        amount, to, fee, memo
      });
  
      if (sendResult && 'hash' in sendResult) {
        return sendResult.hash;
      } else {
        throw new Error(sendResult?.message || 'Payment failed with no transaction hash returned.');
      }
    } catch (error) {
      throw error;
    }
  }
  
  export async function requestAccounts(): Promise<string[]> {
    if (!(await checkMinaProvider())) {
      throw new Error('No provider was found. Please install Auro Wallet.');
    }
  
    try {
      const accounts = await window.mina.requestAccounts();
      return accounts;
    } catch (error) {
      throw error;
    }
  }