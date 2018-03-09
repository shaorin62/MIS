//CSS=Work.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Div.styFormButtonList", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Div.styFormButtonList", "border", obj, ["normal"]);
    this._addCss("Static.styFileTitle", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormTitle", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCap", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCapBe", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCap", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCapBe", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sytHelpPopup", "border", obj, ["normal"]);
    this._addCss("Static.sytHelpPopupInput", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_Bookmark", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Bookmark_S", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD1", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD2", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss(".Cellgrd_WF_notice", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalPrev", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Calmm", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.edt_WF_Calendaryy", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_worktext1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_mybox1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_Login_login", "border", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);
    this._addCss("Button.btn_Login_close", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Div.divFile", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Labelbg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Module", "background", obj, ["normal"]);
    this._addCss("Button.styTextButtonBizProc", "background", obj, ["normal"]);
    this._addCss("Button.btn_POP_CRUD", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Edit.edt_login", "background", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#858585ff","");
    this._addCss("Div.divFile", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/Div_Pop_Bg.png","stretch","20","20","0","0","true");
    this._addCss("PopupDiv.pdiv_WF_insert", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/Div_Pop_Bg2.png","stretch","20","60","0","0","true");
    this._addCss("Static.sty_WF_Myinfo", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#5693e0ff","","","0","0","0","0","true");
    this._addCss("Static.styFileTitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.styFileTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCap", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCapBe", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCap", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCapBe", "align", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_notice", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_worktext1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_box", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 12 Dotum");
    this._addCss("Static.styFileTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarTitle", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 17");
    this._addCss("Static.styFileTitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.stySubTitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemTitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Info", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.styFileTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD1", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD2", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Module", "color", obj, ["pushed", "focused"]);
    this._addCss("Button.styTextButtonBizProc", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_POP_CRUD", "color", obj, ["pushed"]);
    this._addCss("Tab.tab_2depth", "color", obj, ["selected", "focused"]);
    this._addCss("Button.btn_WF_Calmm_S", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.edt_WF_Calendaryy", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_Login_login", "color", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.styFormTitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormLocation", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCap", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_LabelLine", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle03", "background", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_notice", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalPrev", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Edit.edt_WF_Calendaryy", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Div.styCalendarDivDate", "background", obj, ["normal"]);
    this._addCss("Div.styCalendarDiv", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("9 0 0 27");
    this._addCss("Static.styFormTitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#3b3f4c");
    this._addCss("Static.styFormTitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#eff5fcff","","","0","0","0","0","true");
    this._addCss("Static.styFormSearchBox", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#a0c5edff","");
    this._addCss("Static.styFormSearchBox", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.styFormLocation", "align", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_sum01", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Static.styFormLocation", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCap", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCapBe", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchInfo", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Module", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.styTextButtonBizProc", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["selected"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss("Tab.tab_2depth", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Static.styCalendarHead", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSun", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSat", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHoly", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("8 0 0 0");
    this._addCss("Static.styFormLocation", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Static.styFormLocation", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Static.styFormSearchCap", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCapBe", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCap", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCapBe", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchInfo", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.stySubTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle03", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Module", "color", obj, ["normal"]);
    this._addCss("Button.styTextButtonBizProc", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum01", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "color", obj, ["normal"]);
    this._addCss("Static.styCalendarDate", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_worktext1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Static.styFormSearchCap", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCapBe", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.stySubTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle03", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD1", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD2", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_POP_CRUD", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_GID_Title", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 10");
    this._addCss("Static.styFormSearchCap", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCap", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSearchCapBe", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Label_P.png","","0","0","0","50","true");
    this._addCss("Static.styFormSearchCapBe", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemCapBE", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_SubLabel.png","","0","0","0","50","true");
    this._addCss("Static.styFormSubCap", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 8");
    this._addCss("Static.styFormSubCap", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormSubCapBe", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_SubLabel_P.png","","0","0","0","50","true");
    this._addCss("Static.styFormSubCapBe", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Static.styFormSearchInfo", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("4 0 0 0");
    this._addCss("Static.styFormSearchInfo", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_HelpPopup.png","","0","0","0","0","true");
    this._addCss("Static.sytHelpPopup", "background", obj, ["normal"]);
    this._addCss("Static.sytHelpPopupInput", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static.sytHelpPopup", "bordertype", obj, ["normal"]);
    this._addCss("Static.sytHelpPopupInput", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WF_line", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_notice", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_HelpPopup_O.png","","0","0","0","0","true");
    this._addCss("Static.sytHelpPopup", "background", obj, ["mouseover"]);
    this._addCss("Static.sytHelpPopupInput", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_HelpPopup_D.png","","0","0","0","0","true");
    this._addCss("Static.sytHelpPopup", "background", obj, ["disabled"]);
    this._addCss("Static.sytHelpPopupInput", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Static.styFormItemBoxOut", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#cbcbcbff","");
    this._addCss("Static.styFormItemBoxOut", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","","0","solid","#cacacaff","","0","none","","","1","solid","#cacacaff","");
    this._addCss("Static.sta_WF_line", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Label", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#cfd0d1ff","");
    this._addCss("Static.sta_WF_Label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 17");
    this._addCss("Static.sta_WF_Label", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#404654");
    this._addCss("Static.sta_WF_Label", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f7f7f7ff","theme://images/sta_WF_Label_P1.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Label_P", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Static.sta_WF_Label_C", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "align", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_2depth", "align", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Calendaryy", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "align", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.styCalendarTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_Title", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Label_CT", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#686868ff");
    this._addCss("Static.sta_WF_Label_CT", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 14");
    this._addCss("Static.sta_WF_Labelbg", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#888888ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WF_LabelLine", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Subtitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Subtitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.stySubTitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormItemTitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Subtitle02.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Subtitle02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Static.sta_WF_Subtitle03", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_ComCal", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Desc01.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Desc01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Static.sta_WF_Desc01", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Info", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 9");
    this._addCss("Static.sta_WF_Desc01", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Desc02.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Desc02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("4");
    this._addCss("Static.sta_WF_Desc02", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Info.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Info", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("12 Dotum");
    this._addCss("Button.btn_WF_Bookmark", "font", obj, ["normal", "focused", "selected", "disabled", "mouseover"]);
    this._addCss("Button.btn_Login_close", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_WF_Bookmark", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Bookmark_S", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss(".Cellgrd_WF_notice", "padding", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalPrev", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Edit.edt_WF_Calendaryy", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_Login_close", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("","theme://images_P/btn_WF_Bookmark_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Bookmark_S", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images_P/btn_WF_Bookmark_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#597cdfff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_CRUD", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD1", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD2", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Module", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.styTextButtonBizProc", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#4768c6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3e4da6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#c9cdd3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#6a7a96ff","theme://images/btn_WF_CRUD1.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD1", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#50617eff","theme://images/btn_WF_CRUD1.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD1", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3e4da6ff","theme://images/btn_WF_CRUD1.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD1", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#c9cdd3ff","theme://images/btn_WF_CRUD1.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD1", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#6a7a96ff","theme://images/btn_WF_CRUD2.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#50617eff","theme://images/btn_WF_CRUD2.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD2", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3e4da6ff","theme://images/btn_WF_CRUD2.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD2", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#c9cdd3ff","theme://images/btn_WF_CRUD2.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CRUD2", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#9b9b9bff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["normal"]);
    this._addCss("Button.styTextButtonBizProc", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0f7ffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["mouseover"]);
    this._addCss("Button.styTextButtonBizProc", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#146ebcff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["mouseover"]);
    this._addCss("Button.styTextButtonBizProc", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0852a0");
    this._addCss("Button.btn_WF_Module", "color", obj, ["mouseover"]);
    this._addCss("Button.styTextButtonBizProc", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#5f85daff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["selected"]);
    this._addCss("Button.styTextButtonBizProc", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#3864c8ff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["selected"]);
    this._addCss("Button.styTextButtonBizProc", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["disabled"]);
    this._addCss("Button.styTextButtonBizProc", "background", obj, ["disabled"]);
    this._addCss("Button.btn_POP_CRUD", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.msk_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar.cal_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Spin.spn_WF_Readonly", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["disabled"]);
    this._addCss("Button.styTextButtonBizProc", "border", obj, ["disabled"]);
    this._addCss("Button.btn_POP_CRUD", "border", obj, ["disabled"]);
    this._addCss("Edit.edt_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.msk_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar.cal_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Spin.spn_WF_Readonly", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Button.btn_WF_Module", "color", obj, ["disabled"]);
    this._addCss("Button.styTextButtonBizProc", "color", obj, ["disabled"]);
    this._addCss("Button.btn_POP_CRUD", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#aaaaaaff","");
    this._addCss("Button.btn_POP_CRUD", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Button.btn_POP_CRUD", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button.btn_POP_CRUD", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_notice", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_Calmm", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.styCalendarHoly", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#50617eff","");
    this._addCss("Button.btn_POP_CRUD", "border", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#364151");
    this._addCss("Button.btn_POP_CRUD", "color", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#50617eff","","","0","0","0","0","true");
    this._addCss("Button.btn_POP_CRUD", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#3a4861ff","");
    this._addCss("Button.btn_POP_CRUD", "border", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_Search", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR2", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL2", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_O.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_P.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_D.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_P.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2_P.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2_D.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_P.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2_P.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2_D.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_P.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_D.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_P.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_D.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("Combo.cmb_WF_Readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Spin.spn_WF_Readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Spin.spn_WF_Readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/ico_grd_essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/ico_grd_edit.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_edit", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#656565");
    this._addCss(".Cellgrd_WF_HeadLink", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#656565");
    this._addCss(".Cellgrd_WF_HeadLink", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss(".Cellgrd_WF_HeadLink", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("underline 9 Dotum");
    this._addCss(".Cellgrd_WF_HeadLink", "font2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink", "font2", obj, ["normal"]);

    obj = new nexacro.Style_color("#656565");
    this._addCss(".Cellgrd_WF_HeadLink", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss(".Cellgrd_WF_HeadLink", "selectfont", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_BodyLink", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_BodyLink", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_BodyLink", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".Cellgrd_WF_BodyLink", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Head", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_mybox2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f8f8d1ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8d1ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("9 Dotum");
    this._addCss(".Cellgrd_WF_sum01", "font2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".Cellgrd_WF_sum01", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "color2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d2c7c2ff","");
    this._addCss(".Cellgrd_WF_sum01", "border", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "border", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d2c7c2ff","");
    this._addCss(".Cellgrd_WF_sum01", "cellline", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "cellline", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8fedcff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8fedcff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background2", obj, ["normal"]);

    obj = new nexacro.Style_background("#e0faf8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#e0faf8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("auto");
    this._addCss(".Cellgrd_WF_notice", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_2depth", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss(".Cellgrd_WF_notice", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("underline antialias 10 Malgun Gothic");
    this._addCss(".Cellgrd_WF_notice", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#2351d2");
    this._addCss(".Cellgrd_WF_notice", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("underline antialias 10 Malgun Gothic");
    this._addCss(".Cellgrd_WF_notice", "font", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#4c70d6");
    this._addCss(".Cellgrd_WF_notice", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images_P/bg_tab_BtnArea2.png","repeat-x","0","0","0","0","true");
    this._addCss("Tab.tab_2depth", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","");
    this._addCss("Tab.tab_2depth", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_2depth", "bordertype", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_worktext1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_mybox2", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#7a7f8e");
    this._addCss("Tab.tab_2depth", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_2depth", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab2.png","stretch","3","3","0","0","true");
    this._addCss("Tab.tab_2depth", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("3 22 3 22");
    this._addCss("Tab.tab_2depth", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_2depth", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_color("#656c81");
    this._addCss("Tab.tab_2depth", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab2_O.png","stretch","3","3","0","0","true");
    this._addCss("Tab.tab_2depth", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab2_S.png","stretch","3","3","0","0","true");
    this._addCss("Tab.tab_2depth", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Tab.tab_2depth>Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Button.btn_WF_ComCal", "accessibility", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab.tab_2depth>Tabpage", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_2depth>Tabpage", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Tab.tab_2depth>Tabpage", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_2depth>Tabpage", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_2depth>Tabpage", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Tab.tab_2depth>Tabpage", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tab.tab_2depth>Tabpage", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_D.png')");
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_D.png')");
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button.btn_WF_Calmm", "image", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Button.btn_WF_Calmm", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("bold antialias 15 Tahoma");
    this._addCss("Button.btn_WF_Calmm", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 6 0");
    this._addCss("Button.btn_WF_Calmm", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Button.btn_WF_Calmm", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#e9e9e9ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffa6a5ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/div_WF_Calendar.png","stretch","10","30","0","0","true");
    this._addCss("Div.div_WF_Calendar", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("Edit.edt_WF_Calendaryy", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_N.png')");
    this._addCss("Button.btn_WF_ComCal", "image", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Button.btn_WF_ComCal", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Calendar.cal_WF_ComCal", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "align", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/dummy.png')");
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Errorbg.png","repeat-x","0","0","0","0","true");
    this._addCss("Div.div_WF_ErrorBg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorImg01.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ErrorImg01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorImg02.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ErrorImg02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#2279c8");
    this._addCss("Static.sta_WF_ErrorTitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("18 Dotum");
    this._addCss("Static.sta_WF_ErrorTitle", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Static.styCalendarHead", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSun", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSat", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center");
    this._addCss("Static.styCalendarHead", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSun", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHeadSat", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Static.styCalendarHead", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#858585ff","","0","none","","","1","solid","#cacacaff","","0","none","","");
    this._addCss("Static.styCalendarHead", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#f33c3c");
    this._addCss("Static.styCalendarHeadSun", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#858585ff","","1","solid","#cacacaff","","1","solid","#cacacaff","","1","solid","#cacacaff","");
    this._addCss("Static.styCalendarHeadSun", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#267cdb");
    this._addCss("Static.styCalendarHeadSat", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#858585ff","","1","solid","#cacacaff","","1","solid","#cacacaff","","0","none","","");
    this._addCss("Static.styCalendarHeadSat", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left");
    this._addCss("Static.styCalendarDate", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styCalendarHoly", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("11 Dotum");
    this._addCss("Static.styCalendarDate", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_worktext1", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 1");
    this._addCss("Static.styCalendarDate", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 4");
    this._addCss("Static.styCalendarHoly", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#666666ff");
    this._addCss("Static.styCalendarTitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#cacacaff","");
    this._addCss("Div.styCalendarDivDate", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#e9e9e9ff","","0","none","","");
    this._addCss("Div.styCalendarDiv", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_WF_workpop.png","stretch","50","50","0","0","true");
    this._addCss("Static.sta_WF_worktext1", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 25");
    this._addCss("Static.sta_WF_worktext1", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#e7eef4ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_mybox1", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("Static.sta_WF_mybox1", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#e6e6e6ff","","0","solid","#c6c6c5ff","","1","solid","#e6e6e6ff","","0","solid","#c6c6c5ff","");
    this._addCss("Static.sta_WF_mybox2", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#dddee4ff","");
    this._addCss("Div.login_bg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Static.login_copyright", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#7f7f7f");
    this._addCss("Static.login_copyright", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_user.png","","0","0","0","0","true");
    this._addCss("Static.sta_login_user", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_pass.png","","0","0","0","0","true");
    this._addCss("Static.sta_login_pass", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#596cbfff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_login", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","20","20","true","true","true","true");
    this._addCss("Button.btn_Login_login", "bordertype", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_font("antialias 14 verdana");
    this._addCss("Button.btn_Login_login", "font", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 20 2 20");
    this._addCss("Button.btn_Login_login", "padding", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_login_arrow.png')");
    this._addCss("Button.btn_Login_login", "image", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Button.btn_Login_login", "imagealign", obj, ["normal", "disabled", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("#4253acff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_login", "background", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#434d8aff","","","0","0","0","0","true");
    this._addCss("Button.btn_Login_login", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_login_close.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_close", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_login_close_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_close", "background", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#cfcfcfff","","0","none","","");
    this._addCss("Edit.edt_login", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 11 NanumGothic");
    this._addCss("Edit.edt_login", "font", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_padding("0 10 5 35");
    this._addCss("Edit.edt_login", "padding", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Edit.edt_login", "imagealign", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#fb507fff","","0","none","","");
    this._addCss("Edit.edt_login", "border", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("#edeee6ff","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_Title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c6c6c5ff","");
    this._addCss("Static.sta_GID_Title", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Static.sta_GID_Title", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#5300dc");
    this._addCss("Static.sta_GID_txt", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fb7b7b7a","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_box", "background", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
