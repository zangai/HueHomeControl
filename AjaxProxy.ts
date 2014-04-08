/// <reference path="jquery.d.ts"/>
// TypeScript
class AjaxProxy {
  
  constructor(private _url) { }
  public execute(type : String, data : String, append : String = "", callback : () => void = null)
  {
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
        if (callback) {
          callback(data);
        }
      }
    });
  }
}