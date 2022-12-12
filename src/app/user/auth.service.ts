import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor() {
        this.currentUser = {
            id: 0,
            firstName: '',
            lastName: '',
            userName: '',
        }
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'userName',
            firstName: 'John',
            lastName: 'Qwerty'
        }
    }

    isAuthenticated(): boolean {
        const current = this.currentUser
        return !!current.firstName && !!current.lastName;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}