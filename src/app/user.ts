import { Domain } from "./shared/domain";

export interface User extends Domain {
    Name: string,
    Sex: string,
    Email: string
}