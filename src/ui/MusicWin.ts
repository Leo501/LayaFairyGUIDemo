export default class MusicWin extends fairygui.Window {

    constructor() { super(); }

    protected onInit(): void {
        this.contentPane = fairygui.UIPackage.createObject("Login", "AudioWin").asCom;
        this.center();
        this.contentPane.getChild("musicSwitch").onClick(this, this.onEventMusic);
        this.contentPane.getChild("effectSwitch").onClick(this, this.onEventEffeck);
        this.contentPane.getChild("closeBtn").onClick(this, this.onEventClose);
    }

    protected onShown(): void {
        console.log(0);
    }

    onEventMusic(event): void {
        console.log(0);

    }

    onEventEffeck(event): void {
        console.log(0);

    }

    onEventClose(event): void {
        this.hide();
    }

}