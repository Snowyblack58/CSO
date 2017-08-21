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
    var hashChangeListenerSupported = false;

    $(document).ready(function(){
        syncHashOrSelect();
        loadCardViewContent();
        syncHashOrSelect();
        initializeSelectListeners();
        initializeHashChangeListener();
    });

    function initializeSelectListeners() {
        $('#content-selector').change(function(){
            window.location.hash = $(this).find('option:selected').attr('name');
            if(!hashChangeListenerSupported){
                loadCardViewContent();
            }
        });
    }

    function initializeHashChangeListener() {
        if('onhashchange' in window) {
            hashChangeListenerSupported = true;
            $(window).bind('hashchange', function() {
                syncSelectToHash();
                loadCardViewContent();
            })
        } else {
            hashChangeListenerSupported = false;
        }
    }

    function loadCardViewContent() {
        var selectedContent = window.location.hash;
        if($('#content-selector option[name=' + selectedContent.substring(1) + ']').length == 0) {
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
    }

    function syncHashOrSelect() {
        if(window.location.hash === ''){
            var selectedOption = $('#content-selector option:selected').attr('name');
            window.location.hash = selectedOption;
        } else {
            $('#content-selector option:selected').prop('selected', false);
            $('#content-selector option[name=' + window.location.hash.substring(1) + ']').prop('selected', true);
        }
    }

    function syncSelectToHash() {
        console.log(window.location.hash);
        if(window.location.hash !== ''){
            $('#content-selector option:selected').prop('selected', false);
            $('#content-selector option[name=' + window.location.hash.substring(1) + ']').prop('selected', true);
        }
    }
});