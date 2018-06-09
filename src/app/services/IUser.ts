export interface IUser {
    Id: string,
    username: string,
    email: string,
    score: IScore,
    bankusers: IBankuser[]
}

export interface IBankuser{
    username: string,
    password: string,
    email: string
}

export interface IScore {
    current: number    
}