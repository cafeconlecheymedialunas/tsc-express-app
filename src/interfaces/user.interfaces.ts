import { AuthInterface } from "./auth.interface";

export interface UserInterface extends AuthInterface {
    name: string,
    description: string

}