var Dashboard = (function () {
    function Dashboard(dom) {
        this.baseDOM = dom;
        this.load();
    }
    Dashboard.prototype.load = function () {
        $(this.baseDOM).find("header").html("Start");
        $("body").css("height", $(window).height() + "px");
        var tileContainer = $(this.baseDOM).find("section.tiles");
        $(tileContainer).delegate("div.tile", "click", tileClicked);
        var t = new Tile(TileSize.Medium, "RFID");
        t.icon = "nfccard.svg";
        var e = t.gen();
        tileContainer.append(e);
        var t = new Tile(TileSize.Medium, "PIR Sensor");
        t.icon = "motion.svg";
        var e = t.gen();
        tileContainer.append(e);
        var t = new Tile(TileSize.Wide, "Hue");
        t.icon = "lightbulb.svg";
        var e = t.gen();
        tileContainer.append(e);
        var t = new Tile(TileSize.Small, "");
        t.icon = "settings.svg";
        var e = t.gen();
        tileContainer.append(e);
    };
    return Dashboard;
})();
function tileClicked() {
    var blades = $("section#blades");
    var b = new $("<section class='blade'/>");
    var h = new $("<header/>");
    h.text("A blade");
    b.append(h);
    blades.append(b);
    recalcBodyWidth(b);
    var oml = $(b).css("margin-left");
    var o = 24;
    $(b).css("opacity", "0");
    $(b).css("margin-left", "+=" + o);
    $(b).show();
    $(b).animate({
        "opacity": 1,
        "margin-left": oml
    }, 250, function () {
    });
}
function recalcBodyWidth(blade) {
    var extraWidth = $(blade).width();
    var bodyWidth = $('body').width();
    $('body').css("width", bodyWidth + extraWidth);
}
