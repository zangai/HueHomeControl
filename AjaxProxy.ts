/// <reference path="jquery.d.ts"/>
// TypeScript
class AjaxProxy {
  
  constructor(private _url) { }
  public execute(type : String, data : String, append : String = "") : String {
    $.ajax(
      {
      type: "POST",
      url: "/ajax.php",
      data: {
        uri: this._url + append,
        data: data,
        method: type        
      },
      success: function(data) {
        return data;
      }
    });
    return "";
  }
}