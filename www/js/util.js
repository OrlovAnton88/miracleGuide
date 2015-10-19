define(function() {
    console.log("Function : getCredits");

    return {
        getArea: function(areas, areaName) {
            for(var i=0; i <areas.length; i++){
                if(areas[i].name === areaName){
                    return areas[i];
                }
            }
        },
        getTopo: function(topos, topoName){
            for (var i = 0; i < topos.length; i++) {
                if (topos[i].name === topoName) {
                    return topos[i];
                }
            }
        }
    }
});