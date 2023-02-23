abstract class Place {
    public abstract visit(visitor: Visitor): void
}

abstract class Visitor {
    public abstract visitPark(place: Park): void
    public abstract visitHome(place: Home): void
}

class Park extends Place {
    public visit(visitor: Visitor) {
        visitor.visitPark(this);
    }
}

class Home extends Place {
    public visit(visitor: Visitor) {
        visitor.visitHome(this);
    }
}

class Dude extends Visitor {
    public visitHome(home: Home) {
        console.log("play games");
    }

    public visitPark(park: Park) {
        console.log("take the dog out");
    }
}

class Robber extends Visitor {
    public visitHome(home: Home) {
        console.log("steal games");
    }

    public visitPark(park: Park) {
        console.log("steal the dog");
    }
}

(new Park()).visit(new Dude());
(new Park()).visit(new Robber());
(new Home()).visit(new Dude());
(new Home()).visit(new Robber());
