function VueComponent() {
    let self = this;
    self.app = null;

    self.setData = function setData(prop, value) {
        self.app[prop] = value;
    };


    function init() {
        // Define a new component called todo-item

        self.app = new Vue({
            el: '#vue-wrapper',
            template: '<li>This is a {{title}}</li>',
            data: {
                title: 'none...'
            }
        });
    }

    setTimeout(init, 1000);
}