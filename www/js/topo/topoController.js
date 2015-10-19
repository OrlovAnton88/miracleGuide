//define(["app","topoView"], function(app, ContactView) {
define(["js/topo/topoView", "util"], function(TopoView, Util) {

    var state = {isNew: false};
    var topo = null;

    function init(query){

        console.log("query[" + JSON.stringify(query) +"]");
        //var area = JSON.parse(localStorage.getItem("areas"))[0];
        var areas = JSON.parse(localStorage.getItem("areas"));

        var area = Util.getArea(areas,query.backId);

        var topo = Util.getTopo(area.topos, query.id);


        //console.log(">>>>" + topo);


        //if (query && query.id) {
        //    console.log("query[" + JSON.stringify(query) +"]");
        //    var contacts = JSON.parse(localStorage.getItem("f7Base"));
        //    for (var i = 0; i < contacts.length; i++) {
        //        if (contacts[i].id === query.id) {
        //            contact = contacts[i];
        //            state.isNew = false;
        //            break;
        //        }
        //    }
        //}
        //else {
        //    contact = { id: Math.floor((Math.random() * 100000) + 5).toString()};
        //    state.isNew = true;
        //}
        TopoView.render({
            model: topo,
            backId : query.backId
        });
    }

    return {
        init: init
    };
});