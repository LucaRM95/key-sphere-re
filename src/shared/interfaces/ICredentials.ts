export interface ICredentialsLogin {
    email: string;
    password: string;
}

export interface ICredentialsRegister {
    name: string;
    email: string;
    roles: Array<string>;
    password: string;
    confirmPassword: string;
}