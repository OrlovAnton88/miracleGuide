define(["js/list/listView"], function(ListView) {

    function init() {
        var contacts = loadContacts();
        ListView.render({ model: contacts });
    }

    function loadContacts() {
        var f7Base = localStorage.getItem("f7Base");
        //todo: simplify
        var contacts = tempInitializeStorage();
        //var contacts = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
        contacts = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
        return contacts;
    }

    function tempInitializeStorage() {
        //var stalker =  $.getJSON("json/stalker.json");

        var stalker = null;
        $.getJSON("json/stalker.json", function (data) {
            stalker = data;
            //console.log(data);

            var contacts = [
                //{id: "1", firstName: "Пальцево", lastName: "?", phone: "+380501234567" },
                //{id: "2", firstName: "Сталкер", lastName: "?", phone: "+380507654321" },
                //{id: "2", firstName: "Треугольное", lastName: "?", phone: "+380507654321" }
            ];
            //console.log(stalker);
            contacts.push(stalker);
            contacts.push(stalker);
            //console.log(JSON.stringify(contacts));
            localStorage.setItem("f7Base", JSON.stringify(contacts));
            return JSON.parse(localStorage.getItem("f7Base"));
        });
    }

    return {
        init: init
    };
});