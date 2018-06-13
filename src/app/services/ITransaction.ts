import { IAccount } from "./IAccount";
import { IBankAccount } from "./IBankAccount";

export interface ITransaction{
        id: string;
        user_id: string;
        this_account: IAccount;
        details: ITransactionDetail
        metadata: ITransactionMetaData,
        other_account: IBankAccount
}

export interface ITransactionMetaData  {
    narrative: any,
    tags: any,
    images: any,
    comments: any
}

export interface ITransactionDetail {
        type: string,
        description: string,
        posted: Date,
        completed: Date,
        new_balance: IBalance,
        value: IBalance
}

export interface IBalance{
    currency: string;
    amount: number;
}