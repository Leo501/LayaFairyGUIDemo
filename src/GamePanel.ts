import GameConfig from "./GameConfig";
import GameBgMap from "./logic/GameBgMap";

export default class GamePanel {

    private _view: fairygui.GComponent;
    /**
     * 0 idl
     * 1 enter
     * 2 exit
     */
    private curState: number = 0;

    private mapLogic: GameBgMap

    constructor() {
        this.init();
    }

    private init() {
        this._view = fairygui.UIPackage.createObject("Game", "Game").asCom;
        this._view.setSize(GameConfig.width, GameConfig.height);
    }

    public onEnter() {
        if (this.curState === 1) return;
        this.curState = 1;
        fairygui.GRoot.inst.addChild(this._view);

        this.initMap();
    }

    public onExit() {
        if (this.curState === 2) return;
        this.curState = 2;
        fairygui.GRoot.inst.removeChild(this._view);
    }

    private initMap() {
        let map1 = this._view.getChild('n0').asCom;
        let map2 = this._view.getChild('n1').asCom;
        if (!this.mapLogic) {
            this.mapLogic = new GameBgMap(map1, map2);
        }
        this.mapLogic.runMap();
    }
}