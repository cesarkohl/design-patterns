abstract class Device {
    public isEnabled(): boolean {
        return true;
    };
    public enable(): void {}
    public disable(): void {
        console.log("disable");
    }
}

class Tv extends Device {
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
