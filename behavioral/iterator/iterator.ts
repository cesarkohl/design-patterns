class MyIterator {
    private readonly items: number[];
    private index: number;

    constructor(items: number[]) {
        this.items = items;
        this.index = 0;
    }

    public hasNext() {
        return this.index < this.items.length;
    }

    public current() {
        return this.items[this.index];
    }

    public next() {
        return this.items[++this.index];
    }
}

const iterator = new MyIterator([1, 2, 3]);
console.log(iterator.current()); // 1
console.log(iterator.next()); // 2
console.log(iterator.current()); // 2
console.log(iterator.next()); // 3
console.log(iterator.next()); // undefined
