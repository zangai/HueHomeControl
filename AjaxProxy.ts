/// <reference path="jquery.d.ts"/>
// TypeScript
class AjaxProxy {
  
  constructor(private _type, private _url, private _data) { }
  public execute() : String {
    $.ajax(
      {
      type: "POST",
      url: "/ajax.php",
      data: {
        uri: this._url,
        data: this._data,
        method: this._type
      }
    });
    return "";
  }
}