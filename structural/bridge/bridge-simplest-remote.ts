interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
}

class Tv implements Device {
    public isEnabled() {
        return true;
    }
    public enable() {}
    public disable() {
        console.log("disable");
    }
}

class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
}

class AdvancedRemoteControl extends RemoteControl {
    public mute() {}
}

const badTv = new Tv();
const badRemote = new RemoteControl(badTv);
badRemote.togglePower();

const greatTv = new Tv();
const greatRemote = new AdvancedRemoteControl(greatTv);
greatRemote.togglePower();
greatRemote.mute();
