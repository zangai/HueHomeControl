// TypeScript

enum TileSize {
  Small = "1x1",    // 1x1
  Medium = "2x2",   // 2x2
  Wide = "4x2",     // 4x2
  Large = "4x4",    // 4x4
  Hero = "6x4",     // 6x4
  TallHero = "4x6"  // 4x6
}



class Tile {

  public icon : String;
 
  constructor(private _size : TileSize, private _name : String) {

  }
  public gen() : HTMLElement {
    var e = new $("<div></div>");
    e.addClass("tile");
    e.addClass("size"+TileSizeToString(this._size));
    if (this.icon) {
      var  i = new $('<object type="image/svg+xml"></object>');
      i.attr("data", "assets/" + this.icon);
      e.append(i);
    }

    var s = new $("<div class='label'>"+this._name+"</div>");
    e.append(s);
    return e[0];
  }
}

function TileSizeToString(ts) {
  switch(ts) {
    case TileSize.Small:
      return "1x1";
    case TileSize.Medium:
      return "2x2";
    case TileSize.Wide:
      return "4x2";
    case TileSize.Large:
      return "4x4";
    case TileSize.Hero:
      return "6x4";
    case TileSize.TallHero:
      return "4x6";
  }
}