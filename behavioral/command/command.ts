class Calculator {
    public value: number;
    private history: ICommand[];

    public constructor() {
        this.value = 0;
        this.history = []
    }

    public executeCommand(command: ICommand): void {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    public undo(): void {
        const command = this.history.pop();
        if (command !== undefined) {
            this.value = command.undo(this.value);
        }
    }
}

interface ICommand {
    execute(currentValue: number): number;
    undo(currentValue: number): number;
}

class AddCommand implements ICommand {
    private readonly value: number;

    constructor(value: number) {
        this.value = value
    }

    public execute(currentValue: number): number {
        return currentValue + this.value;
    }

    public undo(currentValue: number): number {
        return currentValue - this.value;
    }
}

class MultiplyCommand implements ICommand {
    private readonly value: number;

    constructor(value: number) {
        this.value = value
    }

    public execute(currentValue: number): number {
        return currentValue * this.value;
    }

    public undo(currentValue: number): number {
        return currentValue / this.value;
    }
}

class AddThenMultiplyCommand implements ICommand {
    public addCommand: ICommand;
    public multiplyCommand: ICommand;

    public constructor(valueToAdd: number, valueToMultiply: number) {
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply);
    }

    public execute(currentValue: number): number {
        const newValue = this.addCommand.execute(currentValue);
        return this.multiplyCommand.execute(newValue);
    }

    public undo(currentValue: number): number {
        const newValue = this.multiplyCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value); // 10

calculator.executeCommand(new MultiplyCommand(2));
console.log(calculator.value); // 20

calculator.executeCommand(new AddCommand(5));
console.log(calculator.value); // 25

calculator.executeCommand(new MultiplyCommand(11));
console.log(calculator.value); // 275

calculator.undo();
console.log(calculator.value); // 25

calculator.executeCommand(new AddThenMultiplyCommand(7, 13));
console.log(calculator.value); // 416

calculator.undo()
console.log(calculator.value); // 39
