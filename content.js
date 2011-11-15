window.document.onkeydown = function(evt)
{
    if( evt.keyCode != 17)
    {
        return;
    }
    var a=document.createElement("script");
    a.type="text/javascript";
    a.src="http://growbutton.com/javascripts/bookmarklet.js";
    document.documentElement.appendChild(a)
}
