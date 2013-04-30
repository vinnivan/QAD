var cdt = cdt || {};

cdt.Config = (function () {
    var model;

    model = kendo.observable({
        startView: "logon.html"
    });

    return model;
})();