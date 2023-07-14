import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._modal = false
        this._brands = []
        this._devices = []
        this._file = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._totalCargo = ''
        makeAutoObservable(this)
    }

    setModal(modal) {
        this._modal = modal
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setFile(file) {
        this._file = file
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setCargo(cargo) {
        this._totalCargo = cargo
    }

    get modal() {
        return this._modal
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get file() {
        return this._file
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get cargo() {
        return this._totalCargo
    }
}
