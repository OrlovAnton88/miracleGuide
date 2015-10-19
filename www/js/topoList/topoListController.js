//define(["app","topoView"], function(app, ContactView) {
define(["js/topoList/topoListView","util"], function(TopoListView, util) {

    var state = {isNew: false};
    var topo = null;

    function init(query){
        var topo;
        console.log("query[" + JSON.stringify(query) +"]");
        var areas = JSON.parse(localStorage.getItem("areas"));
        //var area = JSON.parse(localStorage.getItem("f7Base"))[0];

        var area = util.getArea(areas,query.id);

        var topos = area.topos;

        var backId= query.id

        TopoListView.render({
            model: topos,
            areaName: query.id
        });
    }

    return {
        init: init
    };
});