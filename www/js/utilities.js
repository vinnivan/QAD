var showView = undefined;

function closeParentPopover(e) {

    var popover = e.sender.element.closest('[data-role=popover]').data('kendoMobilePopOver');
    popover.close();
};


var resizeMenuContainer = function () {

    var height = $(window).height();
    var width = $(window).width() - 50;
    // alert("Width:" + $(window).width() + " Height:" + $(window).height());

    $("#mainMenuContainer").height(height);
    $("#mainMenuContainer").width(width);

};

var showMenu = function () {
    var mm = $("#mainMenuContainer");
    var width = mm.width();
    var main = $("#" + cdt.Application.getCurrentViewModel().viewId);

    if (mm.is(":visible")) {
       // $("<div> History count:" + history.length + " showMenu - Current:" + kendo.history.current + " - Back</div>").appendTo('#debugDiv')

        main.animate({ left: '-=' + width }, 400);
        mm.animate({ left: '-=' + width }, 400, function () {

            cdt.Application.getCurrentViewModel().setIsMenuOpen(false);
            mm.data().kendoMobileScroller.reset();
            mm.hide(0);
            if (showView != undefined) {
                kendo.history.navigate(showView);
                showView = undefined;
            }
        });


        // On Android phonegap build history comes in empty and will redirect to unknown page without this
        //if (history.length <= 2) {
        //  //  alert("head back to logon");
        //    kendo.history.navigate("#logon.html");
        //} else {
        //    //alert("head #back");
        //    kendo.history.navigate("#:back");
        //}

    } else {
        //$("<div> History count:" + history.length + " showMenu - Current:" + kendo.history.current + " - Main</div>").appendTo('#debugDiv')


        main.animate({ left: '+=' + width }, 400, function () { cdt.Application.getCurrentViewModel().setIsMenuOpen(true); });
        mm.show(0);
        mm.css("left", -width);
        mm.animate({ left: '+=' + width }, 400);

       // kendo.history.navigate("#main");
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


var menuItemSelected = function (e) {
    // Get History Cleared
    showView = e.dataItem.view;
    showMenu();
    //$("<div> menuSelected showView:" + showView + "</div>").appendTo('#debugDiv')

    //alert("History length:" + history.length)

    
    //if (history.length <= 2) {
    //  //  alert("head back to logon");
    //    kendo.history.navigate("#logon.html");
    //} else {
    //  //  alert("head #back");
    //    kendo.history.navigate("#:back");
    //}
};

//$(window).bind("hashchange", function (e) {
//    var url = window.location.hash;
//    var mm = $("#mainMenuContainer");

//    if (cdt.Application.getCurrentViewModel() == null)
//        return;

//    if (url == "") {
//        //$("<div>Ignore empty url</div>").appendTo('#debugDiv')
//        return;
//    }

//    if (url == "#/") {
//        //$("<div>Ignore root url</div>").appendTo('#debugDiv')
//        return;
//    }

//    var main = $("#" + cdt.Application.getCurrentViewModel().viewId);

//    //alert(url + "\r\nMain:" + main);

//    var state = [];
//    state.push("Url:"+ url)


//    var width = mm.width();

//    if (url == "#main") {
//        state.push("found main!")

//        main.animate({ left: '+=' + width }, 200, function () { cdt.Application.getCurrentViewModel().setIsMenuOpen(true); });
//        mm.show(0);
//        mm.css("left", -width);
//        mm.animate({ left: '+=' + width }, 200);

//    } else if (url == cdt.Application.getStartView()) {

//        state.push("Start View:" + cdt.Application.getStartView() + " current view:" + kendo.history.current );

//        if (showView == undefined) {

//            state.push("Undifined!!");

//            if (main.css("left") != "0px") {
//                main.animate({ left: '-=' + width }, 400);
//                mm.animate({ left: '-=' + width }, 400, function () { mm.data().kendoMobileScroller.reset(); mm.hide(0); cdt.Application.getCurrentViewModel().setIsMenuOpen(false); });
//            }
//        } else {
//            //main.css("left", 0);
//            //mm.data().kendoMobileScroller.reset();
//            //mm.hide(0);
//            //kendo.history.navigate(showView);
//            //showView = undefined;


//            state.push("showView - set to undefined");
//            main.animate({ left: '-=' + width }, 400);
//            mm.animate({ left: '-=' + width }, 400, function () {

//                cdt.Application.getCurrentViewModel().setIsMenuOpen(false);
//                mm.data().kendoMobileScroller.reset();
//                mm.hide(0);
//                kendo.history.navigate(showView);
//                showView = undefined;
//            });

//        }
//    }
////    $("<div>" + state.join(" - ") + "</div>").appendTo('#debugDiv')

//});
