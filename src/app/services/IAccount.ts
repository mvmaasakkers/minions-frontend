import { IAccountRouting } from "./IBankAccount";
import { IAccountHolder } from "./IAccountHolder";

export interface IAccount {
    id: string,
    bank_routing: IAccountRouting,
    account_routing: IAccountRouting,
    holders: IAccountHolder[]
}