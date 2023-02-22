class Phone {
    public state: State;

    public constructor() {
        this.state = new LockedState(this);
    }

    public setState(state: State): void {
        this.state = state;
    }

    public lock(): void {
        console.log("locked");
    }

    public unlock(): void {
        console.log("unlocked");
    }
}

abstract class State {
    protected phone: Phone;

    protected constructor(phone: Phone) {
        this.phone = phone;
    }

    public abstract onOpen(): void;
    public abstract onClose(): void;
}

class UnlockedState extends State {
    public constructor(phone: Phone) {
        super(phone);
    }

    public onOpen(): void {
        return this.phone.unlock();
    }

    public onClose(): void {
        this.phone.setState(new LockedState(this.phone));
        return this.phone.lock();
    }
}

class LockedState extends State {
    public constructor(phone: Phone) {
        super(phone);
    }

    public onOpen(): void {
        this.phone.setState(new UnlockedState(this.phone));
        return this.phone.unlock();
    }

    public onClose(): void {
        return this.phone.lock();
    }
}

const phone = new Phone();
console.log(phone.state);

(function userOpensPhone() {
    phone.state.onOpen();
})();
console.log(phone.state);

(function userClosesPhone() {
    phone.state.onClose();
})();
console.log(phone.state);
