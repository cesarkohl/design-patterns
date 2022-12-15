class MyCode {
    public getJson(): string {
        return "{}";
    }
}

class ThirdPartyLib {
    public getXml(): string {
        return "</>";
    }
}

class MyCodeAdapter extends MyCode {
    private adaptee: ThirdPartyLib;

    constructor(adaptee: ThirdPartyLib) {
        super();
        this.adaptee = adaptee;
    }

    public getJson(): string {
        return `${this.adaptee.getXml()} adapted to {}`;
    }
}

// The default code
const myCode = new MyCode();
let json = myCode.getJson()
console.log(json);

// Now there's a new lib, and we need to adapt it.
// This is the same as DDD Anti-Corruption Layer
const myCodeAdapter = new MyCodeAdapter(new ThirdPartyLib());
json = myCodeAdapter.getJson();
console.log(json);
