// TypeScript

enum TileSize {
  Small,    // 1x1
  Medium,   // 2x2
  Wide,     // 4x2
  Large,    // 4x4
  Hero,     // 6x4
  TallHero  // 4x6
};

class Tile {

  public icon : String;
  public uri : String;
 
  constructor(private _size : TileSize, private _name : String) {

  }
  public gen(tileID : Number) : HTMLElement {
    var e = $("<div></div>");
    $(e).addClass("tile");
    $(e).attr("data-tileID", tileID);
    $(e).addClass("size"+TileSizeToString(this._size));
    if (this.icon) {
      var  i = $('<object type="image/svg+xml"></object>');
      i.attr("data", "assets/" + this.icon);
      e.append(i);
    }

    if (this.uri) {
      e.attr("data-uri", this.uri);
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

function tileClicked(event) {
  $(event.currentTarget).transition({ scale: 1.05 })
                        .transition({ scale: 1.0 });
  var rtile = $(event.currentTarget).attr("data-tileid");
  var tile = dashboard.tiles[(rtile-1)];

  var uri = tile.uri;
  if (uri) {
    var blades = $("section#blades");
    var blade = new Blade(uri);
    var e = blade.gen(dashboard.blades.push(blade));

    if (oldblade = $(blades).find("section.blade")) {
      var bladeID = oldblade.attr("data-bladeID");
      delete(dashboard.blades[bladeID]);
      oldblade.remove();
    }
    
    blades.append(e);
    
    e.load("blades"+uri+".html");

    recalcBodyWidth(e);
    var oml = $(e).css("margin-left");
    var o = 24;
    $(e).css("opacity", "0");
    $(e).css("margin-left", "+="+o);
    $(e).show();
    $(e).animate({
      "opacity": 1,
      "margin-left": oml
    }, 250, function() {
    
    });
  }
}