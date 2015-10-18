define(['hbs!js/topo/topo-item'], function(viewTemplate) {
    var $ = Framework7.$;

    function render(params) {

        $('.contact-page').html(viewTemplate({ model: params.model }));
        //$('.contact-page').html(viewTemplate(params.model));
        //$('.contacts-header').text(params.state.isNew ? "New contact" : "Contact");
        $('.contacts-header').text(params.model.name);
        //todo:
        //$(".back").attr("href", "topo_list.html?id="+params.backId);
    }

    return {
        render: render
    }
});