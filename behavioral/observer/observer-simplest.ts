class Editor {
    public events: Publisher;

    constructor() {
        this.events = new Publisher();
    }

    public saveFile(filename: string) {
        this.events.notify(filename);
    }
}

class Publisher {
    private listeners: Listener[] = [];

    public subscribe(listener: Listener) {
        this.listeners.push(listener);
    }

    public unsubscribe(listener: Listener) {
        this.listeners = this.listeners.filter(l => l.name !== listener.name);
    }

    public notify(data: string) {
        this.listeners.forEach(el => el.update(data));
    }
}

class Listener {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public update(filename: string): void {
        console.log(`listener: ${this.name}, file updated: ${filename}`);
    }
}

const editor = new Editor();
const listenerA = new Listener("A");
const listenerB = new Listener("B");
const listenerC = new Listener("C");

editor.events.subscribe(listenerA);
editor.events.subscribe(listenerB);
editor.events.subscribe(listenerC);
editor.saveFile("file-1");

editor.events.unsubscribe(listenerB);
editor.saveFile("file-2");
