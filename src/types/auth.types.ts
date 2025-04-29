export interface Login {
    phone: string;
    password: string;
}

export interface Register {
    name: string;
    phone: string;
    password: string;
    address?: string;
    confirm_password: string;
}