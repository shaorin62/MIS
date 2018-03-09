//CSS=Frame_B.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/frm_WF_Bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_TF_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_TF_logo.png","","0","0","0","0","true");
    this._addCss("Static.sta_TF_logo", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Static.sta_TF_logo", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_TF_home", "border", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_TF_myinfo", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_set", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_logout", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_pw", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo.com_TF_system>#comboedit", "border", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab.tab_TF_menu", "border", obj, ["normal"]);
    this._addCss("Div.div_LF_box", "border", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuClose", "border", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_MenuClose_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen", "border", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_MenuOpen_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuNm", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar:pushedGrid.grd_MF_Workalarm>#hscrollbar>#trackbar", "border", obj, ["mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_search", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Tab.tab_BF_mdi", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_Mdi_Max", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_hor", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_Close", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_ver", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MF_button1", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_name", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text3", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text4", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text5", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text6", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text7", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text8", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text9", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line3", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_number", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_MF_top", "border", obj, ["normal"]);
    this._addCss("Div.div_MF_bottom", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_bg1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_date", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("CheckBox.che_MF_C", "border", obj, ["normal"]);
    this._addCss("Button.btn_MF_01", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_02", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_03", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_04", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_05", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#e55050ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_home", "background", obj, ["normal", "disabled", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_TF_home", "bordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_TF_myinfo", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_set", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_logout", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_pw", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo.com_TF_system", "bordertype", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuClose", "bordertype", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_MenuClose_S", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen", "bordertype", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_MenuOpen_S", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu_S", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark_S", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_BF_mdi", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_MF_button1", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_name", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text2", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text3", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text4", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text5", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text6", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text7", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text8", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text9", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line2", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line3", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_number", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart2", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_bg1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_content", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox.che_MF_C", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_MF_01", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_02", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_03", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_04", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_05", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_TF_home.png')");
    this._addCss("Button.btn_TF_home", "image", obj, ["normal", "disabled", "focused"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_TF_home", "imagealign", obj, ["normal", "disabled", "focused"]);
    this._addCss("Combo.com_TF_system>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuClose", "imagealign", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuClose_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen", "imagealign", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu", "imagealign", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_SubMenu_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "imagealign", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_Bookmark_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar:pushedGrid.grd_MF_Workalarm>#hscrollbar>#trackbar", "imagealign", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_search", "imagealign", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#c84546ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_home", "background", obj, ["mouseover", "selected"]);
    this._addCss("Button.btn_LF_MenuClose", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_MenuOpen", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["mouseover"]);
    this._addCss("Static.sta_MF_chart2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#b53e40ff","","","0","0","0","0","true");
    this._addCss("Button.btn_TF_home", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_MenuClose", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_MenuClose_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_MenuOpen_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_myinfo.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_myinfo", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_myinfo_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_myinfo", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_myinfo_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_myinfo", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_set.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_set_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_set_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_logout.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_logout_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_logout_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_pw.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_pw", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_pw_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_pw", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_TF_pw_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_pw", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Combo.com_TF_system", "accessibility", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "accessibility", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Combo.com_TF_system", "align", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#combolist", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "align", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "align", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "align", obj, ["normal"]);
    this._addCss("Button.btn_MF_button1", "align", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "align", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_text9", "align", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "align", obj, ["normal"]);
    this._addCss("CheckBox.che_MF_C", "align", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 5");
    this._addCss("Combo.com_TF_system", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Combo.com_TF_system", "background", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.com_TF_system>#comboedit", "background", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu", "background", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_search", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Tab.tab_BF_mdi", "background", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "background", obj, ["normal"]);
    this._addCss("Button.btn_MF_button1", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_name", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text2", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text3", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text4", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text5", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text6", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text7", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text8", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_date", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date>#body", "background", obj, ["normal", "disabled"]);
    this._addCss(".Cellgrd_MF_noimg", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("CheckBox.che_MF_C", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("Combo.com_TF_system", "border", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Combo.com_TF_system", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Combo.com_TF_system", "color", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#comboedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Combo.com_TF_system", "cursor", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#comboedit", "cursor", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Combo.com_TF_system>#combolist", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 12 Malgun Gothic");
    this._addCss("Combo.com_TF_system", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.com_TF_system>#comboedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo.com_TF_system", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo.com_TF_system", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo.com_TF_system", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Combo.com_TF_system", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Combo.com_TF_system", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_value("28");
    this._addCss("Combo.com_TF_system", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 5");
    this._addCss("Combo.com_TF_system", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Combo.com_TF_system", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo.com_TF_system", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo.com_TF_system>#comboedit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Tab.tab_TF_menu", "color", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_MF_content", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("CheckBox.che_MF_C", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Combo.com_TF_system", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#8791a3ff","","","0","0","0","0","true");
    this._addCss("Combo.com_TF_system", "itembackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo.com_TF_system", "itemcolor", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Combo.com_TF_system", "color", obj, ["disabled"]);
    this._addCss("Combo.com_TF_system>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit.Edit_LF_search", "color", obj, ["disabled"]);
    this._addCss("CheckBox.che_MF_C", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("#8791a3");
    this._addCss("Combo.com_TF_system>#comboedit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo.com_TF_system>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TFdrop_N.png')");
    this._addCss("Combo.com_TF_system>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Combo.com_TF_system>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "padding", obj, ["normal"]);
    this._addCss("Button.btn_Mdi_Max", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_hor", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_Close", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_ver", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_text9", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_number", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_date", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "padding", obj, ["normal"]);
    this._addCss("CheckBox.che_MF_C", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TFdrop_O.png')");
    this._addCss("Combo.com_TF_system>#dropbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TFdrop_P.png')");
    this._addCss("Combo.com_TF_system>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TFdrop_D.png')");
    this._addCss("Combo.com_TF_system>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo.com_TF_system>#combolist", "background", obj, ["normal"]);
    this._addCss("Div.div_LF_box02", "background", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ImageViewer.img_MF_photo", "background", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Div.div_MF_bottom", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6a7a96ff","");
    this._addCss("Combo.com_TF_system>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Tab.tab_TF_menu", "align", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuNm", "align", obj, ["normal"]);
    this._addCss("ImageViewer.img_MF_photo", "align", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Static.sta_MF_text6", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text7", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text8", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart2", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_content", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid.grd_MF_date", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 Malgun Gothic");
    this._addCss("Tab.tab_TF_menu", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_date", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_TF_menu", "buttonborder", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "buttonborder", obj, ["normal", "disabled"]);
    this._addCss("CheckBox.che_MF_C", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab.tab_TF_menu", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("3 25 3 25");
    this._addCss("Tab.tab_TF_menu", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_TF_menu", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_color("#a01518");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#eb3535");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#c1c1c1");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "gradation", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "letterspace", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "letterspace", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "letterspace", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "letterspace", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "opacity", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "padding", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "stepalign", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#282c37ff","","","0","0","0","0","true");
    this._addCss("Div.div_LF_box", "background", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuClose", "background", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen", "background", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#f0f0f0ff","","0","none","","","0","none","","");
    this._addCss("Div.div_LF_box02", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/Div_Pop_Bg1.png","stretch","20","20","0","0","true");
    this._addCss("PopupDiv.pdiv_LF_search", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_off.png')");
    this._addCss("Button.btn_LF_MenuClose", "image", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuClose_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_on.png')");
    this._addCss("Button.btn_LF_MenuOpen", "image", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuOpen_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_submenu.png')");
    this._addCss("Button.btn_LF_SubMenu", "image", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_SubMenu_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_mymenu.png')");
    this._addCss("Button.btn_LF_Bookmark", "image", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_Bookmark_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("#ea5a5aff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","30","30","true","true","true","true");
    this._addCss("Button.btn_LF_MenuNm", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 10 Malgun Gothic");
    this._addCss("Button.btn_LF_MenuNm", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button.btn_LF_MenuNm", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_button1", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_MF_button2", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_name", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text2", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text3", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text4", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text6", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text9", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_number", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart2", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_date", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Button.btn_LF_MenuNm", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d13438ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#a4373aff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#53565fff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#191c23");
    this._addCss("Button.btn_LF_MenuNm", "color", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid.grd_LF_Mymenu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "bordertype", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_LF_Mymenu", "color", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("auto");
    this._addCss("Grid.grd_LF_Mymenu", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "cursor", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "cursor", obj, ["normal"]);
    this._addCss("CheckBox.che_MF_C", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid.grd_LF_Mymenu", "font", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "font", obj, ["normal"]);
    this._addCss("Edit.Edit_LF_search", "font", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "font", obj, ["normal", "disabled"]);
    this._addCss("CheckBox.che_MF_C", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_LF_Mymenu", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_LF_Mymenu", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Mymenu", "selectpointimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "selectpointimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "selectpointimage", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Grid.grd_LF_Mymenu", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images_B/ico_LF_close.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid.grd_LF_Mymenu", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_LF_tree01.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Mymenu", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#989898ff","");
    this._addCss("Grid.grd_LF_Mymenu", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images_B/ico_LF_open.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_date", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellbackground", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_date>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss(".Cellgrd_MF_noimg", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_date>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss(".Cellgrd_MF_noimg", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellline", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellline", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_date>#body", "cellline", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellline", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid.grd_LF_Mymenu>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "celllinetype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("#edf4fc");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#1f79ca");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectlinetype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("45");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("11");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div.divBottomArea>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuVtrckBg.png","stretch","0","10","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div.divBottomArea>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_LF_menuVtrck.png')");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuVtrckBg_O.png","stretch","0","10","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_Workalarm>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuHtrckBg.png","stretch","10","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_LF_menuHtrck.png')");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar:pushedGrid.grd_MF_Workalarm>#hscrollbar>#trackbar", "image", obj, ["mouseover"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuHtrckBg_O.png","stretch","10","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Div.divBottomArea>#hscrollbar>#trackbar:pushedGrid.grd_MF_Workalarm>#hscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Grid.grd_MF_Workalarm>#hscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_MF_Workalarm>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_date>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".Cellgrd_MF_noimg", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectbackground", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#5578da");
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid.grd_MF_Workalarm>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#bdbdbdff","");
    this._addCss("Edit.Edit_LF_search", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 29 0 6");
    this._addCss("Edit.Edit_LF_search", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#4a95e7");
    this._addCss("Edit.Edit_LF_search", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#707277ff","");
    this._addCss("Edit.Edit_LF_search", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Edit.Edit_LF_search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#d5d5d5ff","");
    this._addCss("Edit.Edit_LF_search", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_search.png')");
    this._addCss("Button.btn_LF_search", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_search_O.png')");
    this._addCss("Button.btn_LF_search", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_search_P.png')");
    this._addCss("Button.btn_LF_search", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_BT_Mdi.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_BF_mdibg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbordertype", obj, ["normal", "disabled"]);
    this._addCss("CheckBox.che_MF_C", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 14");
    this._addCss("Tab.tab_BF_mdi", "buttonpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#9b9b9b");
    this._addCss("Tab.tab_BF_mdi", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.tab_BF_mdi", "showextrabutton", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Tab.tab_BF_mdi", "stepalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_BF_mdi", "stepshowtype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi_O.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Tab.tab_BF_mdi", "color", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab.tab_BF_mdi", "focusborder", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi_S.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_Mdi_Max", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_hor", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_Close", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_ver", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MF_content", "opacity", obj, ["disabled"]);
    this._addCss("CheckBox.che_MF_C", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#d0d5d9ff","");
    this._addCss("ImageViewer.img_MF_photo", "border", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","200","200","true","true","true","true");
    this._addCss("ImageViewer.img_MF_photo", "bordertype", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Button.btn_MF_button1", "font", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "font", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_text1", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text2", "font", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#5aeaff");
    this._addCss("Button.btn_MF_button1", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_MF_button2", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#003ea3");
    this._addCss("Button.btn_MF_button1", "color", obj, ["focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_button2", "color", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_font("antialias 14 Malgun Gothic");
    this._addCss("Static.sta_MF_name", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 9 Malgun Gothic");
    this._addCss("Static.sta_MF_text3", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text7", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text9", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_chart2", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 26 Malgun Gothic");
    this._addCss("Static.sta_MF_text4", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#d0d0d0");
    this._addCss("Static.sta_MF_text5", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 26 Dotum");
    this._addCss("Static.sta_MF_text5", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 13 Malgun Gothic");
    this._addCss("Static.sta_MF_text6", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#596781");
    this._addCss("Static.sta_MF_text7", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Static.sta_MF_text8", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 Malgun Gothic");
    this._addCss("Static.sta_MF_text8", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/bg_MF_bullet1.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_text9", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#7fa6dfff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_line1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_line3", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ced9e4ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_line2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/img_MF_number.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_number", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 13 Malgun Gothic");
    this._addCss("Static.sta_MF_number", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Static.sta_MF_number", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#5060aaff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_chart1", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Static.sta_MF_chart2", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#6898dbff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_top", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#4f80cfff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_bg1", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#e8f1f7ff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_content", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e8f1f7ff","");
    this._addCss("Button.btn_MF_content", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 11 Malgun Gothic");
    this._addCss("Button.btn_MF_content", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("75 0 0 0");
    this._addCss("Button.btn_MF_content", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button.btn_MF_content", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Button.btn_MF_content", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("3","solid","#7c93d5ff","");
    this._addCss("Button.btn_MF_content", "border", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#c6cbdcff","");
    this._addCss("Button.btn_MF_content", "border", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_MF_date>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_MF_date>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_MF_date>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 Malgun Gothic");
    this._addCss("Grid.grd_MF_date>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("transparent URL('theme://images_B/bg_MF_day1.png') center middle");
    this._addCss("Grid.grd_MF_date>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_font("antialias 11 Malgun Gothic");
    this._addCss("Grid.grd_MF_date>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_day2.png","","0","0","50","50","true");
    this._addCss("Grid.grd_MF_date>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_day2.png","","0","0","50","50","true");
    this._addCss("Grid.grd_MF_date>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5c677a");
    this._addCss("Grid.grd_MF_date>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline antialias 11 Malgun Gothic");
    this._addCss(".Cellgrd_MF_link", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("underline antialias 11 Malgun Gothic");
    this._addCss(".Cellgrd_MF_link", "font2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline antialias 11 Malgun Gothic");
    this._addCss(".Cellgrd_MF_link", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Grid.grd_MF_notice>#body", "cellfont", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("Malgun Gothic");
    this._addCss("Grid.grd_MF_notice>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#2b58d9");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Grid.grd_MF_notice>#body", "selectfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBox.che_MF_C", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_MF_chebg.png","","0","0","0","0","true");
    this._addCss("CheckBox.che_MF_C", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_MF_check.png')");
    this._addCss("CheckBox.che_MF_C", "buttonimage", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("24");
    this._addCss("CheckBox.che_MF_C", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("CheckBox.che_MF_C", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_MF_chebg_O.png","","0","0","0","0","true");
    this._addCss("CheckBox.che_MF_C", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/img_MF_chebg.png","","0","0","0","0","true");
    this._addCss("CheckBox.che_MF_C", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_1.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_01", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_1_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_01", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_1_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_01", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_2.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_02", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_2_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_02", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_2_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_02", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_3.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_03", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_3_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_03", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_3_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_03", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_4.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_04", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_4_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_04", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_4_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_04", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_5.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_05", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_5_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_05", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_B/btn_MF_5_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_05", "background", obj, ["pushed", "focused", "selected"]);

    obj = null;
    
//[add theme images]
  };
})();
