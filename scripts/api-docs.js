(function(){
    var urlRoot = "/contensis/api/delivery/http/"
    var version = '12.1'

    var renderVersionSelectorScript = function() {
        var element = document.createElement("script");
        element.async = true;
        element.setAttribute("src", "/site-elements/scripts/version-selector.js");
        element.setAttribute("data-urlRoot", urlRoot);
        element.setAttribute("data-version", version);
        element.setAttribute("id", "version-selector-script");
        document.body.appendChild(element);
    };

    renderVersionSelectorScript();
})();

ES6Promise.polyfill();
