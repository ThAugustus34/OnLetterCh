
import {Request} from '../../BackEnd/Api/Api';

declare global {
    interface Window { mina: any; } 
  }
  
  export type SendPaymentParams = {
    content:string,
    email:string,
    deliverydate:string 
  };

  export async function checkMinaProvider(): Promise<boolean> {
    if (!window.mina) {
      alert('No provider was found. Please install Auro Wallet.');
      return false;
    }
    return true;
  }
  
  export async function sendPayment({
    content, 
    email,
    deliverydate, 
  }: SendPaymentParams): Promise<string> {
    if (!(await checkMinaProvider())) {
      throw new Error('No provider was found. Please install Auro Wallet.');
    }

    let accounts = await window.mina.getAccounts();
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found.');
    }
  
    try {

      const requestData = await Request({ GetTransactionData: "0" });
      if (!requestData || !requestData.lettersendamount || !requestData.MainWalletAdress || !requestData.fee) {
        throw new Error('Invalid transaction data received.');
      }

      const sendResult = await window.mina.sendLegacyPayment({
        amount: requestData.lettersendamount, 
        to: requestData.MainWalletAdress,
        fee: requestData.fee,
        memo: requestData.memo
      });

      if (sendResult && 'hash' in sendResult) {
        const transactionhash = sendResult.hash;
        const CompleteData = {
          CompleteTransaction: {
            accounts,  
            email,     
            deliverydate, 
            content,  
            transactionhash
          }
        };
      const CompleteRequest = await Request(CompleteData);
      return CompleteRequest.message;
      } else {
        throw new Error(sendResult?.message || 'Payment failed with no transaction hash returned.');
      }
    } catch (error) {
      console.error('Payment failed:', error);
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