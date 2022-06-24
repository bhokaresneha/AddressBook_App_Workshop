class AddressBook {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}\\s{0,1})+$')
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name Is Incorrect!"

    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^[+]{0,1}[0-9]{2}\\s{0,1}[0-9]{10}$')
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Phonenumber Is Incorrect!"
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^([A-Za-z0-9]{3,}.)+$')
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Address Is Incorrect!";
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    toString() {
        return "ID=" + this.id + ", Name=" + this.name + ", Phone Number=" + this.phone +
            ", Address=" + this.address + ", City=" + this.city + ", State=" + this.state
            + ", Zip Code=" + this.zipCode;
    }
}