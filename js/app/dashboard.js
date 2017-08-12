define([
    'jquery',
    'underscore',
    'text!../../partials/card-container.html',
    'text!../../partials/form-content.html',
    'json!../../json/dashboard-forms.json'
], function($, _, CardContainerTemplate, FormsTemplate, FormsJson){
    $(document).ready(function(){
        createCardView();
        loadCardViewContent(FormsTemplate, FormsJson);
    });

    function createCardView() {
        var newCardContainerTemplate = _.template(CardContainerTemplate);
        var newCardContainerHtml = newCardContainerTemplate();
        $('#main-content').append(newCardContainerHtml);
    }

    function loadCardViewContent(template, json) {
        var newContentTemplate = _.template(template);
        var newContentHtml = newContentTemplate(json);
        $('.content-container').html(newContentHtml);
    }
});