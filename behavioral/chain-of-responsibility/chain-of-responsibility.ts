interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler|null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return "";
    }
}

class MonkeyHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Banana") {
            return `Monkey: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Nut") {
            return `Squirrel: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Meat") {
            return `Dog: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);

const foods = ["Nut", "Banana", "Cup of Coffee"];
for (const food of foods) {
    console.log(`Who wants a ${food}?`);
    const handling = monkey.handle(food);
    if (handling) {
        console.log(handling);
    } else {
        console.log(`The food was left untouched.`);
    }
}
