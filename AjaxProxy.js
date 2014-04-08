var AjaxProxy = (function () {
    function AjaxProxy(_url) {
        this._url = _url;
    }
    AjaxProxy.prototype.execute = function (type, data, append) {
        if (typeof append === "undefined") { append = ""; }
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                uri: this._url + append,
                data: data,
                method: type
            },
            success: function (data) {
                return data;
            }
        });
        return "";
    };
    return AjaxProxy;
})();
