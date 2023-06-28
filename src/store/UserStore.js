import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._confirmMail = false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setConfirmMail(mail) {
        this._confirmMail = mail
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get confirmMail() {
        return this._confirmMail
    }
}


