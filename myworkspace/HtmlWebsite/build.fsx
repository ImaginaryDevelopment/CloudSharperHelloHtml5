#r "NuGet.Core.dll"
#r "IntelliFactory.Core.dll"
#r "IntelliFactory.Build.dll"

open IntelliFactory.Build

let bt = BuildTool().PackageId("HtmlWebsite", "0.1-alpha")

let myHtmlSite =
    bt.WebSharper.HtmlWebsite("HtmlWebsite")
        .SourcesFromProject()
        .References(fun r ->
            [
                r.Assembly("System.Web")
            ])

bt.Solution [
    myHtmlSite
]
|> bt.Dispatch
