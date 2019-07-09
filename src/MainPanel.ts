import GameConfig from "./GameConfig";
import MusicWin from "./ui/MusicWin";

export class MainPanel {
    private _view: fairygui.GComponent;
    /**
     * 0 idl
     * 1 enter
     * 2 exit
     */
    private curState: number = 0;

    private audioWin: MusicWin;

    public constructor() {
        this.init();
    }

    private init() {
        this._view = fairygui.UIPackage.createObject("Login", "Login").asCom;
        this._view.setSize(GameConfig.width, GameConfig.height);
        this.bindBtn(this._view);
    }

    private bindBtn(view: fairygui.GComponent) {
        view.getChild("n1").onClick(this, (data) => {
            //
            console.log(data);
        });
        view.getChild("musicBtn").onClick(this, (data) => {
            if (!this.audioWin) {
                this.audioWin = new MusicWin();
            }
            this.audioWin.show();
        });
    }

    public onEnter() {
        if (this.curState === 1) return;
        this.curState = 1;
        fairygui.GRoot.inst.addChild(this._view);
    }

    public onExit() {
        if (this.curState === 2) return;
        this.curState = 2;
        fairygui.GRoot.inst.removeChild(this._view);
    }

}
