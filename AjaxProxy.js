var AjaxProxy = (function () {
    function AjaxProxy(_type, _url) {
        this._type = _type;
        this._url = _url;
    }
    AjaxProxy.prototype.execute = function (data) {
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                uri: this._url,
                data: data,
                method: this._type
            }
        });
        return "";
    };
    return AjaxProxy;
})();
