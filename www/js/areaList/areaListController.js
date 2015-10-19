define(["js/areaList/areaListView"], function(ListView) {

    function init() {
        var contacts = loadContacts();
        ListView.render({ model: contacts });
    }

    function loadContacts() {
        var f7Base = localStorage.getItem("areas");
        //todo: simplify
        //var areas = tempInitializeStorage();
        var areas = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
        //areas = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
        return areas;
    }

    function tempInitializeStorage() {
        //var stalker =  $.getJSON("json/stalker.json");

        var areas = [];

        var stalkerJqxhr = $.getJSON( "json/stalker.json", function() {
            console.log( "success" );
        });

        var monrepoJqxhr = $.getJSON( "json/monrepo.json", function() {
            console.log( "success" );
        });

        $.when( stalkerJqxhr, monrepoJqxhr ).done(function ( stalker, monrepo ) {
            areas.push(stalker[0]);
            areas.push(monrepo[0]);
            localStorage.setItem("areas", JSON.stringify(areas));
            return JSON.parse(localStorage.getItem("areas"));
        });

            //localStorage.setItem("areas", JSON.stringify(areas));


        //var stalker = null;
        //$.getJSON("json/stalker.json", function (data) {
        //    stalker = data;
        //    //console.log(data);
        //
        //    var contacts = [
        //        //{id: "1", firstName: "Пальцево", lastName: "?", phone: "+380501234567" },
        //        //{id: "2", firstName: "Сталкер", lastName: "?", phone: "+380507654321" },
        //        //{id: "2", firstName: "Треугольное", lastName: "?", phone: "+380507654321" }
        //    ];
        //    //console.log(stalker);
        //    contacts.push(stalker);
        //    //contacts.push(stalker);
        //    //console.log(JSON.stringify(contacts));
        //    localStorage.setItem("stalker", JSON.stringify(contacts));
        //    return JSON.parse(localStorage.getItem("f7Base"));
        //});
    }

    return {
        init: init
    };
});