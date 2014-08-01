(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List;
 Runtime.Define(Global,{
  HtmlWebsite:{
   SampleSite:{
    Client:{
     MyControl:Runtime.Class({
      get_Body:function()
      {
       return Default.I(List.ofArray([Default.Text("Client control")]));
      }
     })
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  return List=Runtime.Safe(WebSharper.List);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
