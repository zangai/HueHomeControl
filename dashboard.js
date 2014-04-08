/// <reference path="jquery.d.ts"/>
/// <reference path="Tile.ts"/>
/// <reference path="Blade.ts"/>
var Dashboard = (function () {
    function Dashboard(dom) {
        this.tiles = new Array();
        this.blades = new Array();
        this.baseDOM = dom;
        this.load();
    }
    Dashboard.prototype.load = function () {
        $(this.baseDOM).find("header").html("Start");

        // Set Height
        $("body").css("height", $(window).height() + "px");

        var tileContainer = $(this.baseDOM).find("section.tiles");
        $(tileContainer).delegate("div.tile", "click", tileClicked);

        var t = new Tile(1 /* Medium */, "RFID");
        t.icon = "nfccard.svg";
        t.uri = "/rfid";
        var e = t.gen(this.tiles.push(t));
        tileContainer.append(e);

        var t = new Tile(1 /* Medium */, "PIR Sensor");
        t.icon = "motion.svg";
        t.uri = "/pir";
        var e = t.gen(this.tiles.push(t));
        tileContainer.append(e);

        var t = new Tile(2 /* Wide */, "Hue");
        t.icon = "lightbulb.svg";
        t.uri = "/hue";
        var e = t.gen(this.tiles.push(t));
        tileContainer.append(e);

        var t = new Tile(0 /* Small */, "");
        t.icon = "settings.svg";
        t.uri = "/options";
        var e = t.gen(this.tiles.push(t));
        tileContainer.append(e);
    };
    return Dashboard;
})();

function recalcBodyWidth(blade) {
    var extraWidth = $(blade).width();
    var bodyWidth = $('body').width();
    $('body').css("width", bodyWidth + extraWidth);
}
