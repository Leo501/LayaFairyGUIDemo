
export class AudioMgr {
    private static instance: AudioMgr = new AudioMgr();

    private _mgmVolume: number = 0.5;

    private _soundVolume: number = 0.5;

    private soundManager = Laya.SoundManager;

    public static Instance(): AudioMgr {
        return AudioMgr.instance;
    }

    constructor() {

        this._mgmVolume = parseInt(Laya.LocalStorage.getItem('bgmVolume')) || this._mgmVolume;
        this._soundVolume = parseInt(Laya.LocalStorage.getItem('soundVolume')) || this._soundVolume;

        this.soundManager.musicVolume = this._mgmVolume;
        this.soundManager.soundVolume = this._soundVolume;

    }

    public setBGMVolume(volume) {
        this._mgmVolume = volume;
        this.soundManager.musicVolume = volume;
        Laya.LocalStorage.setItem('bgmVolume', volume)
    }

    public getBGMVolume() {
        return this._mgmVolume;
    }

    public setSoundVolume(volume) {
        this._soundVolume = volume;
        this.soundManager.soundVolume = volume;
        Laya.LocalStorage.setItem('soundVolume', volume);
    }

    public getSoundVolume() {
        return this._soundVolume;
    }

    public stopAll() {
        this.soundManager.stopAll();
    }

    public playMusic(url: string, loop: number = 0, complete: Laya.Handler = null, startTime: number = 0) {
        return this.soundManager.playMusic(url, loop, complete, startTime);
    }

    public playSound(url: string, loops: number = 1, complete: Laya.Handler = null, soundClass: any = null, startTime: number = 0) {
        return this.soundManager.playSound(url, loops, complete, soundClass, startTime);
    }

}