/**
 * The solution is to create the class ButtonFactory and put the new instance there
 */

class NavigationBar {
    public constructor() {
        return ButtonFactory.createButton();
    }
}

class DropdownMenu {
    public constructor() {
        return ButtonFactory.createButton();
    }
}

class ButtonFactory {
    static createButton(): Button {
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
