/// <reference path="jquery.d.ts"/>
// TypeScript
class AjaxProxy {
  
  constructor(private _type, private _url) { }
  public execute(data : String) : String {
    $.ajax(
      {
      type: "POST",
      url: "/ajax.php",
      data: {
        uri: this._url,
        data: data,
        method: this._type
      }
    });
    return "";
  }
}