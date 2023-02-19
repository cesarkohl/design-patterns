class Editor {
    public x: number = 0;

    public createSnapshot(): Snapshot {
        return new Snapshot(this, this.x);
    }
}

class Snapshot {
    public editor: Editor;
    public readonly x: number;

    constructor(editor: Editor, x: number) {
        this.editor = editor;
        this.x = x;
    }

    public restore() {
        this.editor.x = this.x;
    }
}

// 1. Create a new instance
let editor = new Editor();
editor.x = 10;

// 2. Create a backup
const backup = editor.createSnapshot();
console.log(backup.x); // 10

// 3. Edit the instance
editor.x = 20;
console.log(editor.x); // 20

// 4. Restore the instance to snapshotted version
backup.restore();
console.log(editor.x); // 10
