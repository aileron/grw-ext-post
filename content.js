window.document.onkeydown = function(e)
{
    var ctrl    = typeof e.modifiers == 'undefined' ? e.ctrlKey : e.modifiers & Event.CONTROL_MASK; 
    var keycode = e.which;

    if( ctrl==false || keycode != 71)
    {
        return;
    }
    var a=document.createElement("script");
    a.type="text/javascript";
    a.src="http://growbutton.com/javascripts/bookmarklet.js";
    document.documentElement.appendChild(a)
}
