
class Customer {
    constructor() {
        this.setName = function (name) {
            this.name = name;
        };
        this.getName = function () {
            return this.name;
        };
        this.setCMND = function (cmnd) {
            this.cmnd = cmnd;
        };
        this.getCMND = function () {
            return this.cmnd;
        };
        this.setBirthday = function (birthday) {
            this.birthday = birthday;
        };
        this.getBirthday = function () {
            return this.birthday;
        };
        this.setEmail = function (email) {
            this.email = email;
        };
        this.getEmail = function () {
            return this.email;
        };
        this.setAddress = function (address) {
            this.address = address;
        };
        this.getAddress = function () {
            return this.address;
        };
        this.setTypeCustomer = function (typeCustomer) {
            this.typeCustomer = typeCustomer;
        };
        this.getTypeCustomer = function () {
            return this.typeCustomer;
        };
        this.setDiscount = function (discount) {
            this.discount = discount;
        };
        this.getDiscount = function () {
            return this.discount;
        };
        this.setQuantityIncluded = function (quantityIncluded) {
            this.quantityIncluded = quantityIncluded;
        };
        this.getQuantityIncluded = function () {
            return this.quantityIncluded;
        };
        this.setTypeRoom = function (typeRoom) {
            this.typeRoom = typeRoom;
        };
        this.getTypeRoom = function () {
            return this.typeRoom;
        };
        this.setRentDays = function (rentDays) {
            this.rentDays = rentDays;
        };
        this.getRentDays = function () {
            return this.rentDays;
        };
        this.setTypeService = function (typeService) {
            this.typeService = typeService;
        };
        this.getTypeService = function () {
            return this.typeService;
        };
        this.totalPays = function () {
            let moneyPerDays = 0;
            if (this.getTypeService() === "Villa") {
                moneyPerDays = 500;
            }
            else if (this.getTypeService() === "Villa") {
                moneyPerDays = 300;
            }
            else {
                moneyPerDays = 200;
            }
            return moneyPerDays * parseFloat(this.getRentDays()) * (1 - parseFloat(this.getDiscount()) / 100);
        };
    }
}
