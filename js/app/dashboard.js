define([
    'jquery',
    'underscore',
    'text!../../partials/form-content.html',
    'json!../../json/dashboard-forms.json',
    'text!../../partials/audition-content.html',
    'json!../../json/dashboard-audition.json'
], function($, _, FormsTemplate, FormsJson, AuditionTemplate, AuditionJson){
    var lookupTemplateAndJson = {
        'default': {
            'template': JSON.stringify(FormsTemplate),
            'json': JSON.stringify(FormsJson)
        },
        'forms': {
            'template': JSON.stringify(FormsTemplate),
            'json': JSON.stringify(FormsJson)
        },
        'audition': {
            'template': JSON.stringify(AuditionTemplate),
            'json': JSON.stringify(AuditionJson)
        }
    }

    $(document).ready(function(){
        syncHashOrSelect();
        loadCardViewContent();
        syncHashOrSelect();
    });

    function loadCardViewContent() {
        var selectedContent = window.location.hash;
        console.log(selectedContent);
        if($('#content-selector option[name=' + selectedContent.substring(1) + ']').length == 0) {
            selectedContent = '#default'
        }
        console.log(selectedContent);
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

    function syncHashOrSelect() {
        console.log(window.location.hash);
        if(window.location.hash === ''){
            var selectedOption = $('#content-selector option:selected').attr('name');
            window.location.hash = selectedOption;
        } else {
            console.log($('#content-selector option[name=' + window.location.hash.substring(1) + ']'))
            $('#content-selector option[name=' + window.location.hash.substring(1) + ']').attr('selected','selected');
        }
    }
});