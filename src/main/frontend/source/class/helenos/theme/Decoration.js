/* ************************************************************************
Copyright:
  2012 Tomek Kuprowski
License:
  GPLv2: http://www.gnu.org/licences/gpl.html
Authors:
  Tomek Kuprowski (tomekkuprowski at gmail dot com)
 ************************************************************************ */
qx.Theme.define('helenos.theme.Decoration',
{
    extend : qx.theme.simple.Decoration,

    decorations :
    {
        'app-header-black':
        {
            decorator : qx.ui.decoration.Background,
            style : {
                backgroundColor : "#1e1b1b"
            }
        } 
    }
});