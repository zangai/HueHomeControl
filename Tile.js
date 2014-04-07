var TileSize;
(function (TileSize) {
    TileSize._map = [];
    TileSize.Small = "1x1";
    TileSize.Medium = "2x2";
    TileSize.Wide = "4x2";
    TileSize.Large = "4x4";
    TileSize.Hero = "6x4";
    TileSize.TallHero = "4x6";
})(TileSize || (TileSize = {}));
var Tile = (function () {
    function Tile(_size, _name) {
        this._size = _size;
        this._name = _name;
    }
    Tile.prototype.gen = function () {
        var e = new $("<div></div>");
        e.addClass("tile");
        e.addClass("size" + TileSizeToString(this._size));
        if(this.icon) {
            var i = new $('<object type="image/svg+xml"></object>');
            i.attr("data", "assets/" + this.icon);
            e.append(i);
        }
        var s = new $("<div class='label'>" + this._name + "</div>");
        e.append(s);
        return e[0];
    };
    return Tile;
})();
function TileSizeToString(ts) {
    switch(ts) {
        case TileSize.Small: {
            return "1x1";

        }
        case TileSize.Medium: {
            return "2x2";

        }
        case TileSize.Wide: {
            return "4x2";

        }
        case TileSize.Large: {
            return "4x4";

        }
        case TileSize.Hero: {
            return "6x4";

        }
        case TileSize.TallHero: {
            return "4x6";

        }
    }
}
