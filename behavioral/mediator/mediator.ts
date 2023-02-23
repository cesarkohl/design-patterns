// context, centralizes interaction
interface IMediator {
    interaction()
}

class Mediator implements IMediator {
    public piece: Piece;
    public part: Part;
    public thing: Thing;

    public constructor() {
    }

    public interaction() {
    }
}

class Piece {
    public mediator: IMediator;

    public constructor(mediator: IMediator) {
        this.mediator = mediator;
    }

    public invoke(): void {
        this.mediator.interaction();
    }
}

class Part {
    public mediator: IMediator;

    public constructor(mediator: IMediator) {
        this.mediator = mediator;
    }

    public invoke(): void {
        this.mediator.interaction();
    }
}

class Thing {
    public mediator: IMediator;

    public constructor(mediator: IMediator) {
        this.mediator = mediator;
    }

    public invoke(): void {
        this.mediator.interaction();
    }
}
