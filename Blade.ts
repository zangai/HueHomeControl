// TypeScript
class Blade {
  constructor(public uri : String) {
    
  }
  public gen(bladeID : Number) : HTMLElement {
    var blade = new $("<section class='blade'></section>");
    $(blade).attr("data-bladeID", bladeID);
    var h = new $("<header>loading ...</header>");
    blade.append(h);
    return blade;
  }
}