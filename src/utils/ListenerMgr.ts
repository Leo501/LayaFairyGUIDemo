export default class ListenerMgr {

    private static instance: ListenerMgr;

    private eventDispatcher: Laya.EventDispatcher;

    public Instance() {
        if (!ListenerMgr.instance) {
            ListenerMgr.instance == new ListenerMgr();
        }
        return ListenerMgr.instance;
    }
    constructor() {
        this.eventDispatcher = new Laya.EventDispatcher();
    }

    public emit(type: string, data?: any) {
        this.eventDispatcher.event(type, data);
    }

    public on(type: string, caller: any, listener: Function, args: Array<any> = null) {
        this.eventDispatcher.on(type, caller, listener, args)
    }

    public off(type: string, caller: any, listener: Function, onceOnly: boolean = false) {
        this.eventDispatcher.off(type, caller, listener, onceOnly);
    }

    public offAll(type) {
        this.eventDispatcher.offAll(type);
    }

    public offAllCaller(caller: any) {
        this.eventDispatcher.offAllCaller(caller);
    }
}