export interface IBankAccount{
    id: string;
    user_id: string;
    label: string;
    bank_id: string;
    transactions: number;
    account_routing: IAccountRouting;
}

export interface IAccountRouting{
    scheme: string,
    address: string,
}