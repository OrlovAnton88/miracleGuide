define(['hbs!js/topoList/topo-list-item'], function(viewTemplate) {
    var $ = Framework7.$;

    function render(params) {

        $('.contact-page').html(viewTemplate({ model: params.model ,areaName: params.areaName }));
        //$('.contact-page').html(viewTemplate(params.model));
        //$('.contacts-header').text(params.state.isNew ? "New contact" : "Contact");
        $('.contacts-header').text(params.areaName);
        $(".back").attr("href", "index.html");
    }

    return {
        render: render
    }
});