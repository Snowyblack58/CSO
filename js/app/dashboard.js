define([
    'jquery',
    'underscore',
    'text!../../partials/card-container.html',
    'text!../../partials/form-content.html',
    'json!../../json/dashboard-forms.json'
], function($, _, CardContainerTemplate, FormsTemplate, formsJson){
    var newCardContainerTemplate = _.template(CardContainerTemplate);
    var newCardContainerHtml = newCardContainerTemplate();
    $('#main-content').append(newCardContainerHtml);

    var newFormContentTemplate = _.template(FormsTemplate);
    var newFormContentHtml = newFormContentTemplate(formsJson);
    $('.content-container').append(newFormContentHtml);
});