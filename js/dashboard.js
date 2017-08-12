var newCardContainerTemplate = _.template('<div class="card-container"><div class="content-container" class="container"></div></div><style>.card-container {box-sizing: border-box;box-shadow: 1px 1px 4px #ccc;width: 90%;margin: auto;min-height: 25rem;text-align: left;padding: 1rem;}</style>');
var newCardContainerHtml = newCardContainerTemplate();
$('#main-content').append(newCardContainerHtml);

var formsObj = {"sections": [{"title": "To join","forms": [{"name": "Photo release form","link": "","isDownload": true},{"name": "Photo release form","link": "","isDownload": false}]},{"title": "To audition","forms": [{"name": "Audition slot signup","link": "","isDownload": false}]}]};
var newFormContentTemplate = _.template('<div id="form-card-title">Forms</div><% _.each(sections, function(section) { %><div class="form-card-section-container"><p class="form-card-section-title"><%= section.title %></p><ul><% _.each(section["forms"], function(form){ %><li><a href="<%= form.title %>" <% if(form.isDownload){ %>download<%}%>><%= form.name %></a></li><% }) %></ul></div><% }); %>');
var newFormContentHtml = newFormContentTemplate(formsObj);
$('.content-container').append(newFormContentHtml);