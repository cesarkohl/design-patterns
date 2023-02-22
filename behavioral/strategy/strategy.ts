interface IService {
    calculate(weight: number): number;
}

class ServiceA implements IService {
    public calculate(weight: number): number {
        return 2 * weight;
    }
}

class ServiceB implements IService {
    public calculate(weight: number): number {
        return 3 * weight;
    }
}

class Context {
    private service: IService;

    public constructor(service: IService) {
        this.service = service;
    }

    public setService(service: IService) {
        this.service = service;
    }

    public calculate(weight: number) {
        return this.service.calculate(weight);
    }
}

const context = new Context(new ServiceA());
console.log(context.calculate(10)); // 20

context.setService(new ServiceB());
console.log(context.calculate(10)); // 30
