define(["app","js/contact/contactView"], function(app, ContactView) {

    var state = {isNew: false};
    var contact = null;

    function init(query){
        if (query && query.id) {
            var contacts = JSON.parse(localStorage.getItem("f7Base"));
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id === query.id) {
                    contact = contacts[i];
                    state.isNew = false;
                    break;
                }
            }
        }
        else {
            contact = { id: Math.floor((Math.random() * 100000) + 5).toString()};
            state.isNew = true;
        }
        ContactView.render({
            model: contact,
            state: state
        });
    }

    return {
        init: init
    };
});