var AjaxProxy = (function () {
    function AjaxProxy(_url) {
        this._url = _url;
    }
    AjaxProxy.prototype.execute = function (type, data, append, callback) {
        if (typeof append === "undefined") { append = ""; }
        if (typeof callback === "undefined") { callback = null; }
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                uri: this._url + append,
                data: data,
                method: type
            },
            success: function (data) {
                if(callback) {
                    callback(data);
                }
            }
        });
    };
    return AjaxProxy;
})();
