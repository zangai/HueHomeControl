/// <reference path="jquery.d.ts"/>

class Dashboard {
    
    public baseDOM : HTMLElement;

    constructor(dom) {
      this.baseDOM = dom;
      this.load();

    }
    public load() {
      $(this.baseDOM).find("h1").html("Dashboard Booted");
      var tileContainer = $(this.baseDOM).find("section.tiles");
      for (var i = 0; i < 10; i++) {
        var t = new Tile(TileSize.Small, "Tile "+i);
        var e = t.gen();
        tileContainer.append(e);
      }
      var t = new Tile(TileSize.Medium, "Tile "+i);
      var e = t.gen();
      tileContainer.append(e);
    }


}
