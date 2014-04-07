/// <reference path="jquery.d.ts"/>

class Dashboard {
  public baseDOM : HTMLElement;

  constructor(dom) {
    this.baseDOM = dom;
    this.load();

  }
  public load() {
    $(this.baseDOM).find("header").html("Dashboard Booted");
    
    // Set Height
    $("body").css("height", $(window).height() + "px");


    var tileContainer = $(this.baseDOM).find("section.tiles");
    $(tileContainer).delegate("div.tile", "click", tileClicked);
    for (var i = 1; i <= 8; i++) {
      var t = new Tile(TileSize.Small, "Small "+i);
      var e = t.gen();
      
      tileContainer.append(e);
      if (i == 2) {
        
      }
    }
    var t = new Tile(TileSize.Hero, "Hero");
        var e = t.gen();
      
        tileContainer.append(e);
    for (var i = 1; i <= 2; i++) {
      var t = new Tile(TileSize.Medium, "Medium "+i);
      var e = t.gen();
      tileContainer.append(e);
    }
    var t = new Tile(TileSize.Large, "Large 1");
    var e = t.gen();
    tileContainer.append(e);
    for (var i = 1; i <= 1; i++) {
      var t = new Tile(TileSize.Wide, "Wide "+i);
      var e = t.gen();
      tileContainer.append(e);
    }
    
  }
}

function tileClicked() {
  var blades = $("section#blades");
  var b = new $("<section class='blade'/>");
  var h = new $("<h1/>");
  h.text("A blade");
  b.append(h);
  blades.append(b);
  recalcBodyWidth(b);
  var oml = $(b).css("margin-left");
  var o = 24;
  $(b).css("opacity", "0");
  $(b).css("margin-left", "+="+o);
  $(b).show();
  $(b).animate({
    "opacity": 1,
    "margin-left": oml
  }, 250, function() {
    
  });



}

function recalcBodyWidth(blade) {
  var extraWidth = $(blade).width();
  var bodyWidth = $('body').width();
  $('body').css("width", bodyWidth + extraWidth);
}
