import { MainPanel } from "../MainPanel";
import GamePanel from "../GamePanel";

export default class UIMgr {

    private static instance: UIMgr;

    public static Instance() {
        if (!UIMgr.instance) {
            UIMgr.instance = new UIMgr();
        }
        return UIMgr.instance;
    }

    private loginPanel: MainPanel;
    private gamePanel: GamePanel;

    public enterLogin() {
        if (!this.loginPanel) {
            this.loginPanel = new MainPanel();
        }
        this.loginPanel.onEnter();
        if (this.gamePanel) {
            this.gamePanel.onExit();
        }
    }

    public enterGame() {
        if (!this.gamePanel) {
            this.gamePanel = new GamePanel();
        }
        this.gamePanel.onEnter();
        if (this.loginPanel) {
            this.loginPanel.onExit();
        }
    }
    constructor() { }

}