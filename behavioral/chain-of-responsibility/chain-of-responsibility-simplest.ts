class Handler {
    private next: Handler|null = null;

    handle(request: string): string | void {
        if (this.next) {
            return this.next.handle(request);
        }

        console.log('ended chain');
    }

    setNext(handler: Handler) {
        this.next = handler;
        return this.next;
    }
}

class MonkeyHandler extends Handler {
    handle(request: string): string | void {
        if (request === 'banana') {
            console.log('stopped at monkey');
        } else {
            return super.handle(request);
        }
    }
}

class DogHandler extends Handler {
    handle(request: string): string | void {
        if (request === 'meat') {
            console.log('stopped at dog');
        } else {
            return super.handle(request);
        }
    }
}

const chain = (new MonkeyHandler());
chain.setNext(new DogHandler());
chain.handle('meat');
chain.handle('banana');
chain.handle('grapes');
