interface IMain {
    request(): void;
}

class Main implements IMain {
    request(): void {
        console.log("Main: Handling request.");
    }
}

class ProxyMain implements Main {
    private main: Main;

    constructor(main: Main) {
        this.main = main;
    }

    request(): void {
        if (this.checkAccess()) {
            this.main.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log("ProxyMain: Checking access prior to firing a real request.");
        return true;
    }

    private logAccess(): void {
        console.log("ProxyMain: Logging the time of request.");
    }
}

const main = new Main();
// main.request();

const proxy = new ProxyMain(main);
proxy.request();
