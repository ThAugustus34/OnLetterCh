
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
  
    try {
      const requestData = await Request({ GetTransactionData: "0" });
      const sendResult = await window.mina.sendLegacyPayment({
        amount: requestData.lettersendamount, 
        to: requestData.MainWalletAdress,
        fee: requestData.fee,
        memo: requestData.memo
      });
      if (sendResult && 'hash' in sendResult) {
        let accounts;
        try {
          accounts = await window.mina.getAccounts();
          if (!accounts || accounts.length === 0) {
            throw new Error('No accounts found.');
          }
        } catch (accountsError) {
          console.error('Failed to retrieve accounts:', accountsError);
          throw new Error('Payment was sent, but account retrieval failed.');
        }
        try {
          return sendResult.hash;
        } catch (firestoreError) {
          console.error('Failed to update Firestore:', firestoreError);
          throw new Error('Payment was sent, accounts retrieved, but Firestore update failed.');
        }
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