import { getWindowDimensions } from './contentHelpers';

class Subscriber {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback
    }
}

class SubscribersList {
    constructor() {
        this.all = {};
        this.latestIdAssigned = 0;
    }

    getAll() {
        return Object.values(this.all);
    }

    getNewId() {
        return ++this.latestIdAssigned;
    }

    subscribe(callback) {
        const id = this.getNewId();
        this.all[id] = new Subscriber(this.getNewId(), callback);
        return id;
    }

    unsubscribe(id) {
        delete this.all[id];
    }
}

class WindowResizeListener {
    constructor() {
        this.subscribers = new SubscribersList();
        this.init();
    }

    init() {
        window.addEventListener('resize', () => {
            console.debug('Window is resizing. Informing subscribers.');
            this.informSubscribers(getWindowDimensions());
        });
    }

    informSubscribers(vals) {
        this.subscribers.getAll().forEach(sub => sub.callback(vals));
    }

    subscribe(callback) {
        return this.subscribers.subscribe(callback);
    }

    unsubscribe(id) {
        this.subscribers.unsubscribe(id);
    }
}

export default WindowResizeListener;