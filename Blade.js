// TypeScript
var Blade = (function () {
    function Blade(uri) {
        this.uri = uri;
    }
    Blade.prototype.gen = function (bladeID) {
        var blade = new $("<section class='blade'></section>");
        $(blade).attr("data-bladeID", bladeID);
        var h = new $("<header>loading ...</header>");
        blade.append(h);
        return blade;
    };
    return Blade;
})();
