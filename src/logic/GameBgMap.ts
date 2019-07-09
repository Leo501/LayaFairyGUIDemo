import GameConfig from "../GameConfig";

export default class GameBgMap {

    private map1: fairygui.GComponent;
    private map2: fairygui.GComponent;
    private mapHeigth: number;
    private screenHeight: number;
    private speed: number = 2;
    private mapStartY: number;

    constructor(map1: fairygui.GComponent, map2: fairygui.GComponent) {
        this.map1 = map1;
        this.map2 = map2;
        this.mapHeigth = this.map1.height;

        this.mapStartY = map1.y;
    }

    public runMap() {
        Laya.timer.loop(16, this, this.moveYUpdate);
    }

    private moveYUpdate() {
        this.runMoveY(this.map1, this.speed);
        this.runMoveY(this.map2, this.speed);
        if (this.isTransform(this.map1, this.map2)) {
            this.transform(this.map1, this.map2);
        }
        if (this.isTransform(this.map2, this.map1)) {
            this.transform(this.map2, this.map1);
        }
    }

    private runMoveY(target, offsetY) {
        target.y += -offsetY;
    }

    private isTransform(map1, map2) {
        console.log(map1.y, map2.y);
        if (map1.y <= (this.mapStartY - this.mapHeigth) &&
            map2.y <= this.mapStartY) {
            return true;
        }
        return false;
    }

    private transform(map1, map2) {
        map1.y = map2.y + this.mapHeigth;
    }

}