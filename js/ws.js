
// webservices
"use strict";
var ws = {
    endpoint: 'https://fuseki.geoinformation.dev/inspire-at/sparql',
    getProject: function (uri) {
        return config.getProject(uri);
    },
    doc: function (query, thenFunc) {
        return fetch(this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json').then(thenFunc);
    },
    json: function (uriPart, query, filteredItem, thenFunc) {
        query = ws.processSparql(uriPart, query, filteredItem);
        return fetch(this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json')
            .then(res => res.json())
            .then(thenFunc)
            .catch(error => $('#pageContent').append(`<br>no results for <br>URI: <span style="color: red;"><strong>${uriPart}</strong></span> <br>`));
    },
    docJson: function (query, thenFunc) {
        return fetch(this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json')
            .then(res => res.json())
            .then(thenFunc);
    },
    projectJson: function (projectId, query, filteredItem, thenFunc) { 
        console.log(query)
        query = ws.processSparql(projectId, query, filteredItem);
        console.log(query)
        return fetch(this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json')
            .then(res => res.json())
            .then(thenFunc)
            .catch(error => {
                if (!$('#outOfService').length) {
                    $('#rightSidebar').append(`<div id="outOfService" class="alert alert-dismissible alert-primary">
                                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                <h4 class="alert-heading">Service downtime:</h4>
                                                    <p class="mb-0">
                                                        PV is currently not available!
                                                    </p>
                                                </div>`);
                }
            });
    },
    processSparql: function (projectId, query, filteredItem) {
        let project = projectId ? config.projectConfiguration[projectId] : null;
        let filter = project ? config.projectConfiguration[projectId].filter : null;
        if (!filter) {
            filter = "";
        }
        if (!filteredItem) {
            filteredItem = "c";
        }
        query = query.replaceAll('@@filter', filter).replaceAll('@@item', filteredItem);

        let from = project ? project.from : null;
        if (!from) {
            from = "";
        }
        query = query.replaceAll('@@from', from);

        return query;
    },
    getProjUrl: function (projectId, query) {
        return this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json';
    },
    getRefUrl: function (query) {
        return this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json';
    },
    getMineralUrl: function (query) {
        return this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json';
    },
    getMinresUrl: function (query) {
        return this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json';
    },
    getStructureUrl: function (query) {
        return this.endpoint + '?query=' + encodeURIComponent(query) + '&format=json';
    }
};
