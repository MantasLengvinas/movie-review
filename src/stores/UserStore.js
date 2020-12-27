import { extendObservable } from "mobx";

class UserStore {
    constructor(){
        extendObservable(this, {
            loading: false,
            isLoggedIn: false,
            token: null,
            email: ""
        })
    }
}

export default new UserStore();