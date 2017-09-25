var MessageJS = (function () {
    //Singleton pattern utils
    var instance;

    function createInstance() {
        var object = new Messaging();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

    //MessageJS stuff...
    function Messaging() {
        let DEBUG = true;
        let self = this;
        var store = [];

        self.register = function register(messageFunc, id) {
            if (!id) {
                id = "master";
            }

            DEBUG && console.log("MessageJS - " + id + " is registering");

            if (store.find(el => el.id === id)) {
                console.warn("MessageJS - id already present: " + id);
            } else {
                store.push({
                    id: id,
                    message: messageFunc
                });
            }
        };

        self.message = function message(obj, destination) {
            if(!destination) {
                destination = "master";
            }

            let tempDest = store.find(el => el.id === destination);

            if(!tempDest) {
                console.warn("MessageJS - unkown destination: " + destination);
            } else {
                tempDest.message(obj);
            }
        };
    }
})();