/// <reference path="jquery.d.ts"/>
/// <reference path="Tile.ts"/>
/// <reference path="Blade.ts"/>



class Dashboard {
  public baseDOM : HTMLElement;
  public tiles: Array<Tile> = new Array<Tile>();
  public blades: Array<Blade> = new Array<Blade>();

  constructor(dom) {
    
    this.baseDOM = dom;
    this.load();

  }
  public load() {
    $(this.baseDOM).find("header").html("Start");
    
    // Set Height
    $("body").css("height", $(window).height() + "px");


    var tileContainer = $(this.baseDOM).find("section.tiles");
    $(tileContainer).delegate("div.tile", "click", tileClicked);

    var t = new Tile(TileSize.Medium, "RFID");
    t.icon = "nfccard.svg";
    t.uri = "/rfid";
    var e = t.gen(this.tiles.push(t));
    tileContainer.append(e);

    var t = new Tile(TileSize.Medium, "PIR Sensor");
    t.icon = "motion.svg";
    t.uri = "/pir";
    var e = t.gen(this.tiles.push(t));
    tileContainer.append(e);
    
    var t = new Tile(TileSize.Medium, "");
    t.icon = "settings.svg";
    t.uri = "/options";
    var e = t.gen(this.tiles.push(t));
    tileContainer.append(e);
    
    var t = new Tile(TileSize.Hero, "Hue");
    t.icon = "lightbulb.svg";
    t.uri = "/hue";
    var e = t.gen(this.tiles.push(t));
    tileContainer.append(e);
    

  }
}

function recalcBodyWidth(blade) {
  var extraWidth = $(blade).width();
  var bodyWidth = $('body').width();
  $('body').css("width", bodyWidth + extraWidth);
}
