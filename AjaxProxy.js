var AjaxProxy = (function () {
    function AjaxProxy(_type, _url, _data) {
        this._type = _type;
        this._url = _url;
        this._data = _data;
    }
    AjaxProxy.prototype.execute = function () {
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                uri: this._url,
                data: this._data,
                method: this._type
            }
        });
        return "";
    };
    return AjaxProxy;
})();
