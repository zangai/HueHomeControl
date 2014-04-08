// TypeScript
var TileSize;
(function (TileSize) {
    TileSize[TileSize["Small"] = 0] = "Small";
    TileSize[TileSize["Medium"] = 1] = "Medium";
    TileSize[TileSize["Wide"] = 2] = "Wide";
    TileSize[TileSize["Large"] = 3] = "Large";
    TileSize[TileSize["Hero"] = 4] = "Hero";
    TileSize[TileSize["TallHero"] = 5] = "TallHero";
})(TileSize || (TileSize = {}));
;

var Tile = (function () {
    function Tile(_size, _name) {
        this._size = _size;
        this._name = _name;
    }
    Tile.prototype.gen = function (tileID) {
        var e = $("<div></div>");
        $(e).addClass("tile");
        $(e).attr("data-tileID", tileID);
        $(e).addClass("size" + TileSizeToString(this._size));
        if (this.icon) {
            var i = $('<object type="image/svg+xml"></object>');
            i.attr("data", "assets/" + this.icon);
            e.append(i);
        }

        if (this.uri) {
            e.attr("data-uri", this.uri);
        }

        var s = new $("<div class='label'>" + this._name + "</div>");
        e.append(s);
        return e[0];
    };
    return Tile;
})();

function TileSizeToString(ts) {
    switch (ts) {
        case 0 /* Small */:
            return "1x1";
        case 1 /* Medium */:
            return "2x2";
        case 2 /* Wide */:
            return "4x2";
        case 3 /* Large */:
            return "4x4";
        case 4 /* Hero */:
            return "6x4";
        case 5 /* TallHero */:
            return "4x6";
    }
}

function tileClicked(event) {
    $(event.currentTarget).transition({ scale: 1.05 }).transition({ scale: 1.0 });
    var rtile = $(event.currentTarget).attr("data-tileid");
    var tile = dashboard.tiles[(rtile - 1)];

    var uri = tile.uri;
    if (uri) {
        var blades = $("section#blades");
        var blade = new Blade(uri);
        var e = blade.gen(dashboard.blades.push(blade));

        blades.append(e);

        e.load("blades" + uri + ".html");

        recalcBodyWidth(e);
        var oml = $(e).css("margin-left");
        var o = 24;
        $(e).css("opacity", "0");
        $(e).css("margin-left", "+=" + o);
        $(e).show();
        $(e).animate({
            "opacity": 1,
            "margin-left": oml
        }, 250, function () {
        });
    }
}
