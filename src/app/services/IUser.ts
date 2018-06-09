export interface IUser {
    Id: string,
    username: string,
    email: string,
    bankusers: IBankuser[]
}

export interface IBankuser{
    username: string,
    password: string,
    email: string
}