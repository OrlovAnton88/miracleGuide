//define(["app","topoView"], function(app, ContactView) {
define(["js/topoList/topoListView"], function(TopoListView) {

    var state = {isNew: false};
    var topo = null;

    function init(query){
        var topo;
        console.log("query[" + JSON.stringify(query) +"]");
        var area = JSON.parse(localStorage.getItem("f7Base"))[0];

        var topos = area.topos;

        var backId= query.id

        //console.log("topos["+ JSON.stringify(topos)+"]");
        //for (var i = 0; i < topos.length; i++) {
        //    if (topos[i].name === query.id) {
        //        topo = topos[i];
        //        //state.isNew = false;
        //        break;
        //    }
        //}

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
        TopoListView.render({
            model: topos
        });
    }

    return {
        init: init
    };
});