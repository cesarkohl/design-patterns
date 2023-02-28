/**
 * The problem here is that if you have new Button type default in many places
 * and you need to update the type you should have to edit in many places the
 * new instance code.
 */

class NavigationBar {
    public constructor() {
        return new Button("default");
    }
}

class DropdownMenu {
    public constructor() {
        return new Button("default");
    }
}

class Button {
    public type: string;

    public constructor(type: string) {
        this.type = type;
    }

}

new NavigationBar();
new DropdownMenu();
