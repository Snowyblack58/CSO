define([
    'jquery',
    'underscore',
    'text!../../partials/form-content.html',
    'json!../../json/dashboard-forms.json'
], function($, _, FormsTemplate, FormsJson){
    var lookupTemplateAndJson = {
        'default': {
            'template': JSON.stringify(FormsTemplate),
            'json': JSON.stringify(FormsJson)
        },
        'forms': {
            'template': JSON.stringify(FormsTemplate),
            'json': JSON.stringify(FormsJson)
        }
    }

    $(document).ready(function(){
        loadCardViewContent();
        syncHash();
    });

    function loadCardViewContent() {
        var selectedContent = window.location.hash;
        if(!$('#content-selector option[name="' + selectedContent.substring(1) + '"]').length > 0) {
            selectedContent = '#default'
        }
        var obj = lookupTemplateAndJson[selectedContent.substring(1)];
        if(obj === undefined){
            window.location.hash = '';
            obj = lookupTemplateAndJson[''];
        }
        var newContentTemplate = _.template(JSON.parse(obj.template));
        var newContentHtml = newContentTemplate(JSON.parse(obj.json));
        $('.content-container').html(newContentHtml);
        window.location.hash = $('#content-selector option:selected').attr('name');
    }

    function syncHash() {
        var selectedOption = $('#content-selector option:selected').attr('name');
        window.location.hash = '#' + selectedOption;
    }
});