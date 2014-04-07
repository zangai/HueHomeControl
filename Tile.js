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
    }
}
