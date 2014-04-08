var AjaxProxy = (function () {
    function AjaxProxy(_type, _url) {
        this._type = _type;
        this._url = _url;
    }
    AjaxProxy.prototype.execute = function (data, append) {
        if (typeof append === "undefined") { append = ""; }
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                uri: this._url + append,
                data: data,
                method: this._type,
                success: function (data) {
                    return data;
                }
            }
        });
        return "";
    };
    return AjaxProxy;
})();
