import {makeAutoObservable} from "mobx";

export default class HelpersStore {
    constructor() {
        this._modalRegistration = false
        this._modalLogin = false
        this._modalReview = false
        this._modalUserCred = false
        this._goodsNum = 0
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
    setModalReview(modal) {
        this._modalReview = modal
    }
// Done
    setReloadBasket(num) {
        this._goodsNum = num
    }
// Done
    setModalUserCred(modal) {
        this._modalUserCred = modal
    }

    


// Done 
    get modalRegistration() {
        return this._modalRegistration
    }
// Done 
    get modalLogin() {
        return this._modalLogin
    }
// Done 
    get modalReview() {
        return this._modalReview
    }
// Done 
    get reloadBasket() {
        return this._goodsNum
    }
    get modalUserCred() {
        return this._modalUserCred
    }


}
