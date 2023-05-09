import {makeAutoObservable} from "mobx";

export default class HelpersStore {
    constructor() {
        this._modalRegistration = false
        this._modalLogin = false
        makeAutoObservable(this)
    }
// Done
    setModalRegistration(modal) {
        this._modalRegistration = modal
    }
// Done
    setModalLogin(modal) {
        this._modalLogin = modal
    }




// Done 
    get modalRegistration() {
        return this._modalRegistration
    }
// Done 
get modalLogin() {
    return this._modalLogin
}



}
