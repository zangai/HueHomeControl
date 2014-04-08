/// <reference path="jquery.d.ts"/>
// TypeScript
class AjaxProxy {
  
  constructor(private _type, private _url) { }
  public execute(data : String, append : String = "") : String {
    $.ajax(
      {
      type: "POST",
      url: "/ajax.php",
      data: {
        uri: this._url + append,
        data: data,
        method: this._type,
        success: function(data) {
          return data;
        }
      }
    });
    return "";
  }
}