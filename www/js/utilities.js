function closeParentPopover(e) {

    var popover = e.sender.element.closest('[data-role=popover]').data('kendoMobilePopOver');
    popover.close();
};

var showMenu = function () {
    var mm = $("#mainMenuContainer");

    if (mm.is(":visible")) {

        kendo.history.navigate("#:back");
        //kendo.history.navigate("#logon.html");
    } else {
        kendo.history.navigate("#main");
    }
};

var showScanner = function () {
    //alert("Show Scanner!");

    window.plugins.barcodeScanner.scan(function (result) {
        cdt.Application.getCurrentViewModel().promptControl.onScan(result.text, result.cancelled);
    }, function (error) {
        alert("Scanning failed: " + error);
        cdt.Application.getCurrentViewModel().promptControl.onScan(result.text, true);
    }
            );
};

var showView = undefined;

var menuItemSelected = function (e) {
    // Get History Cleared
    showView = e.dataItem.view;
    kendo.history.navigate("#:back");
};

$(window).bind("hashchange", function (e) {
    var url = window.location.hash;
    var mm = $("#mainMenuContainer");

    if (cdt.Application.getCurrentViewModel() == null)
        return;

    var main = $("#" + cdt.Application.getCurrentViewModel().viewId);

    //alert(url + "\r\nMain:" + main);

    var width = mm.width();

    if (url == "#main") {
        //alert(url);
        main.animate({ left: '+=' + width }, 200, function () { cdt.Application.getCurrentViewModel().setIsMenuOpen(true); });
        mm.show(0);
        mm.css("left", -width);
        mm.animate({ left: '+=' + width }, 200);
    } else if (url == cdt.Application.getStartView()) {

        if (showView == undefined) {
            if (main.css("left") != "0px") {
                main.animate({ left: '-=' + width }, 400);
                mm.animate({ left: '-=' + width }, 400, function () { mm.data().kendoMobileScroller.reset(); mm.hide(0); cdt.Application.getCurrentViewModel().setIsMenuOpen(false); });
            }
        } else {
            //main.css("left", 0);
            //mm.data().kendoMobileScroller.reset();
            //mm.hide(0);
            //kendo.history.navigate(showView);
            //showView = undefined;


            main.animate({ left: '-=' + width }, 400);
            mm.animate({ left: '-=' + width }, 400, function () {

                cdt.Application.getCurrentViewModel().setIsMenuOpen(false);
                mm.data().kendoMobileScroller.reset();
                mm.hide(0);
                kendo.history.navigate(showView);
                showView = undefined;
            });

        }
    }
});
