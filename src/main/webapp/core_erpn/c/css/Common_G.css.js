//CSS=Common_G.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("MainFrame", "accessibility", obj, ["normal"]);
    this._addCss("ChildFrame", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("Static", "accessibility", obj, ["normal", "mouseover"]);
    this._addCss("Combo", "accessibility", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "accessibility", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "accessibility", obj, ["normal"]);
    this._addCss("Div", "accessibility", obj, ["normal"]);
    this._addCss("Calendar", "accessibility", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "accessibility", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "accessibility", obj, ["normal"]);
    this._addCss("Grid", "accessibility", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "accessibility", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar", "accessibility", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("Tabpage", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("StatusBarControl>#progressbar", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "background", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "background", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("MainFrame", "border", obj, ["normal"]);
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "border", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "border", obj, ["normal"]);
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "border", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("StepControl", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "color", obj, ["normal"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("GroupBox", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("ChildFrame", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("MainFrame", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Tabpage", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "opacity", obj, ["normal"]);
    this._addCss("ChildFrame", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "opacity", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Tabpage", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);
    this._addCss("ChildFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("33");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("33");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#235798ff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "background", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "background", obj, ["normal"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("Button", "background", obj, ["normal"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("ListBox", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Combo", "background", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "background", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "background", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "background", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("StatusBarControl", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "align", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "align", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "align", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "align", obj, ["normal"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "align", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "align", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#3f4a60ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("Button", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "bordertype", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "bordertype", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);
    this._addCss("StepControl", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("ListBox", "color", obj, ["selected", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover"]);
    this._addCss("FileDownload", "color", obj, ["focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal"]);
    this._addCss("*>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tabpage", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("Menu", "font", obj, ["normal", "pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl", "stepalign", obj, ["normal"]);
    this._addCss("Tab", "stepalign", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "stepalign", obj, ["normal", "disabled"]);
    this._addCss("Tabpage", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "stepshowtype", obj, ["normal"]);
    this._addCss("Tab", "stepshowtype", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "stepshowtype", obj, ["normal", "disabled"]);
    this._addCss("Tabpage", "stepshowtype", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal"]);
    this._addCss("*>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("*>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Tabpage", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal"]);
    this._addCss("Grid", "shadow", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "shadow", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min_O.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min_P.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max_O.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max_P.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal_O.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal_P.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_O.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_P.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("StatusBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","false","false","true","true");
    this._addCss("StatusBarControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("StatusBarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("StatusBarControl", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "font", obj, ["normal"]);
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "font", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "font", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "font", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "font", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "font", obj, ["normal"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "font", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "font", obj, ["normal", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/img_grip.png");
    this._addCss("StatusBarControl", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("StatusBarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("StatusBarControl", "progressbargap", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusBarControl", "progressbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("260");
    this._addCss("StatusBarControl", "progressbarwidth", obj, ["normal"]);

    obj = new nexacro.Style_value("10");
    this._addCss("StatusBarControl", "zoomcombogap", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusBarControl", "zoomcomboheight", obj, ["normal"]);

    obj = new nexacro.Style_value("80");
    this._addCss("StatusBarControl", "zoomcombowidth", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusBarControl>#progressbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal"]);
    this._addCss("Div", "align", obj, ["normal"]);
    this._addCss("PopupDiv", "align", obj, ["normal"]);
    this._addCss("StepControl", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "align", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#cdcdc8");
    this._addCss("StatusBarControl>#progressbar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("StatusBarControl>#progressbar", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("StatusBarControl>#progressbar", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("StatusBarControl>#progressbar", "direction", obj, ["normal"]);
    this._addCss("ProgressBar", "direction", obj, ["normal"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 1 1");
    this._addCss("StatusBarControl>#progressbar", "padding", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("StatusBarControl>#progressbar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","theme://images/ico_zoomcombo.png","","0","0","0","50","true");
    this._addCss("StatusBarControl>#zoomcombo", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("16");
    this._addCss("StatusBarControl>#zoomcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusBarControl>#zoomcombo", "color", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("Combo", "itembackground", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itembackground", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal", "mouseover"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("StatusBarControl>#zoomcombo", "itemborder", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("Combo", "itemborder", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itemborder", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal", "pushed", "selected", "focused", "mouseover"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusBarControl>#zoomcombo", "itemcolor", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("StatusBarControl>#zoomcombo", "itemheight", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itemheight", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 8");
    this._addCss("StatusBarControl>#zoomcombo", "itempadding", obj, ["normal"]);
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusBarControl>#zoomcombo", "itemcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#e0e0d9ff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#3da2df");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "caretcolor", obj, ["mouseover"]);
    this._addCss("StatusbarFormControl>#zoomcombo>#comboedit", "caretcolor", obj, ["focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "compositecolor", obj, ["mouseover"]);
    this._addCss("StatusbarFormControl>#zoomcombo>#comboedit", "compositecolor", obj, ["focused"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "selectbackground", obj, ["mouseover"]);
    this._addCss("StatusbarFormControl>#zoomcombo>#comboedit", "selectbackground", obj, ["focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("StatusBarControl>#zoomcombo>#comboedit", "selectcolor", obj, ["mouseover"]);
    this._addCss("StatusbarFormControl>#zoomcombo>#comboedit", "selectcolor", obj, ["focused"]);
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_drop_N.png");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_drop_O.png");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#e1e1daff","","","0","0","0","0","true");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_drop_P.png");
    this._addCss("StatusBarControl>#zoomcombo>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusBarControl>#zoomcombo>#combolist", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Form", "color", obj, ["normal"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Edit.styFormSearchItem", "color", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Button", "color", obj, ["normal"]);
    this._addCss("Spin", "color", obj, ["normal", "mouseover", "focused", "pushed", "readonly"]);
    this._addCss("Spin>#spinedit", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("SpinControl", "color", obj, ["normal", "mouseover", "focused", "pushed", "readonly"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("Combo", "color", obj, ["normal", "mouseover", "selected", "focused", "readonly"]);
    this._addCss("Combo.styFormSearchCombo", "color", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "color", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "color", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "color", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "color", obj, ["normal"]);
    this._addCss("Calendar", "color", obj, ["normal", "mouseover", "selected", "focused", "readonly"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "color", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "color", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["mouseover"]);
    this._addCss("Tab.styTabControl", "color", obj, ["mouseover"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("auto");
    this._addCss("Form", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("Static", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "cursor", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "cursor", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "cursor", obj, ["normal"]);
    this._addCss("TextArea", "cursor", obj, ["normal"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal"]);
    this._addCss("Spin", "cursor", obj, ["normal"]);
    this._addCss("SpinControl", "cursor", obj, ["normal"]);
    this._addCss("ListBox", "cursor", obj, ["normal"]);
    this._addCss("Combo", "cursor", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "cursor", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "cursor", obj, ["normal"]);
    this._addCss("Radio", "cursor", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "cursor", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "cursor", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "cursor", obj, ["normal"]);
    this._addCss("Div", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal"]);
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Tab", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "cursor", obj, ["normal", "disabled"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal"]);
    this._addCss("FileUpload", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("45");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c2c2c2ff","");
    this._addCss("VScrollBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#cfcfcfff","");
    this._addCss("VScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#c5c6c7ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("CheckBox", "padding", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "padding", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "padding", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid", "padding", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "padding", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("PopupMenu", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#b2b2b2ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#dededeff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_N.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("cetner middle");
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_O.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_D.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_N.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_O.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_D.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_N.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_O.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_D.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_N.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_O.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_D.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("*>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Static", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);
    this._addCss("FileDownload", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Static", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button", "padding", obj, ["normal"]);
    this._addCss("Radio", "padding", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "padding", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "padding", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal", "mouseover"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("PopupMenu", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Edit", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Edit.styFormSearchItem", "border", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("MaskEdit", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Button", "border", obj, ["normal", "disabled"]);
    this._addCss("Spin", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("SpinControl", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("ListBox", "border", obj, ["normal", "disabled"]);
    this._addCss("Combo", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Combo.styFormSearchCombo", "border", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "border", obj, ["normal"]);
    this._addCss("Calendar", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "border", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal", "disabled"]);
    this._addCss("PopupMenu", "border", obj, ["normal"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "bordertype", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "padding", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#4a95e7");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("#4a95e7");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.styFormSearchItem", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.styFormItemText", "selectbackground", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f8ffff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "background", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "background", obj, ["mouseover", "focused"]);
    this._addCss("Button", "background", obj, ["mouseover"]);
    this._addCss("Spin", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Combo", "background", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Calendar", "background", obj, ["mouseover", "selected", "focused"]);
    this._addCss("FileDownload", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#106ebeff","");
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button", "border", obj, ["mouseover"]);
    this._addCss("Combo", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);
    this._addCss("FileDownload", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["disabled", "readonly"]);
    this._addCss("TextArea", "background", obj, ["readonly"]);
    this._addCss("MaskEdit", "background", obj, ["disabled", "readonly"]);
    this._addCss("Button", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["readonly"]);
    this._addCss("SpinControl", "background", obj, ["readonly"]);
    this._addCss("Combo", "background", obj, ["readonly"]);
    this._addCss("Calendar", "background", obj, ["disabled", "readonly"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("FileDownload", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("4 0 0 5");
    this._addCss("TextArea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4f91cfff","");
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("ListBox", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#fcfcfcff","","","0","0","0","0","true");
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("StepControl", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Menu", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","0","0","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#0252a2");
    this._addCss("Button", "color", obj, ["mouseover"]);
    this._addCss("FileDownload", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#5b94f0ff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#3666c1ff","");
    this._addCss("Button", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "buttonsize", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463dff");
    this._addCss("Spin>#spinedit", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_N.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_O.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_P.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_N.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_O.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_P.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_D.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);
    this._addCss("Combo", "itembordertype", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itembordertype", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);
    this._addCss("Combo", "itempadding", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itempadding", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#dbeafcff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("Combo", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#4a95e7ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["selected", "focused"]);
    this._addCss("Combo", "itembackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("#fcfcfcff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 0 0 5");
    this._addCss("Combo", "padding", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "padding", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo", "itemcolor", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itemcolor", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itemcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Combo", "itemfont", obj, ["normal"]);
    this._addCss("Combo.styFormSearchCombo", "itemfont", obj, ["normal"]);
    this._addCss("Combo.styFormItemCombo", "itemfont", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_O.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_P.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("Radio", "buttonalign", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonalign", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("Radio", "buttonalign", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonalign", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonalign", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonbackground", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonbackground", obj, ["normal"]);
    this._addCss("FileUpload", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #d6d6d6");
    this._addCss("Radio", "buttonborder", obj, ["normal", "disabled"]);
    this._addCss("Radio.styFormSearchRdo", "buttonborder", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #d6d6d6");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonborder", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_N.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonimage", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("13");
    this._addCss("Radio", "buttonsize", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "buttonsize", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "buttonsize", obj, ["normal"]);
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonsize", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Radio", "itemaccessibility", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itemaccessibility", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itemaccessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itembackground", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Radio", "itemborder", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itemborder", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Radio", "itembordertype", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itembordertype", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Radio", "itemgradation", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itemgradation", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Radio", "itempadding", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "itempadding", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("Radio", "textpadding", obj, ["normal"]);
    this._addCss("Radio.styFormSearchRdo", "textpadding", obj, ["normal"]);
    this._addCss("Radio.styFormItemRdo", "textpadding", obj, ["normal"]);
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "textpadding", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("1 solid #333333");
    this._addCss("Radio", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #0a58b1");
    this._addCss("Radio", "buttonborder", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("#e4f1ffff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_check_N.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonbackground", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonborder", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonborder", obj, ["normal"]);
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonborder", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonborder", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonbordertype", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "buttonbordertype", obj, ["normal", "disabled"]);
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal"]);
    this._addCss("CheckBox.styFormSearchChk", "buttonimage", obj, ["normal"]);
    this._addCss("CheckBox.styFormItemChk", "buttonimage", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/bg_check_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_check_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("1px solid #868686ff");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #f0f0f0");
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_radio_N.png");
    this._addCss("StepControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("StepControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("15");
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3f");
    this._addCss("StepControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("StepControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("StepControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("50");
    this._addCss("StepControl", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cbcbcbff","");
    this._addCss("GroupBox", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_group.png')");
    this._addCss("GroupBox", "titleimage", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("GroupBox", "titlepadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#cacaca");
    this._addCss("GroupBox", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "daybackground", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "daybackground", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "dayborder", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "daycolor", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "daycolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "dayfont", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "dayfont", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("30 30");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "popupbackground", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#666666ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "popupborder", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("212 240");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Calendar.styFormSearchItemCalendar", "popupsize", obj, ["normal"]);
    this._addCss("Calendar.styFormItemCalendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_background("#e95a59ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_font("bold 9 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar", "daycolor", obj, ["selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["selected"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_N.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_O.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_P.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#756c6bff","");
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("33 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_value("33");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#6f97f0ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#5f9dde");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ee6b67");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_D.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_D.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("center middle");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#49a0ffff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#918b89ff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#918b89");
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_N.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_N.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#858585ff","","0","none","","","1","solid","#d9d9d9ff","","0","none","","");
    this._addCss("Grid", "border", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "letterspace", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectpointimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "selectpointimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_treeclose.png");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_treeitem.png");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#989898ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_treeopen.png");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.styGrid01", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e1e1e1ff","","1","solid","#cacacaff","","1","solid","#e1e1e1ff","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.styGrid01>#body", "cellcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#656565");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#f0f0f0ff","","0","none","","","1","solid","#f0f0f0ff","");
    this._addCss("Grid>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#f0f0f0ff","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "celllinetype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 5 2 5");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#c4deff");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "selectbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "selectborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.styGrid01>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid.styGrid01>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#e9ebefff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.styGrid01>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#e9ebefff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.styGrid01>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#cce1fa");
    this._addCss("Grid>#body", "selectbackground", obj, ["mouseover"]);
    this._addCss("Grid.styGrid01>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffe3e1ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d9d9d9ff","","1","solid","#e1e1e1ff","","0","none","","","1","solid","#e1e1e1ff","");
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffe3e1ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffe3e1ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.styGrid01>#summary", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","solid","#c2c2c2ff","","0","solid","#c2c2c2ff","","0","solid","#c2c2c2ff","","0","none","","");
    this._addCss("Grid>#vscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#f0f0f0ff","","0","solid","#c2c2c2ff","","0","solid","#ffffffff","","0","solid","#f0f0f0ff","");
    this._addCss("Grid>#hscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#458ddbff","","","0","0","0","0","true");
    this._addCss("Grid>#controlbutton", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("FileDownload", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("#5698e0ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_value("17");
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4c6187ff","");
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4c6187ff","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#4c4743ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#4c4743ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#fcb034ff","");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images_P/tap_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Tab", "background", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#cacacaff","","1","solid","#cacacaff","","1","solid","#cacacaff","");
    this._addCss("Tab", "border", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_P/bg_tab.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 30 0 30");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "buttonpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#878787");
    this._addCss("Tab", "color", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "disabled"]);
    this._addCss("Tab.styTabControl", "showextrabutton", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images_P/bg_tab_O.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["mouseover"]);
    this._addCss("Tab.styTabControl", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab", "focusborder", obj, ["mouseover"]);
    this._addCss("Tab.styTabControl", "focusborder", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#57629e");
    this._addCss("Tab", "color", obj, ["selected", "focused"]);
    this._addCss("Tab.styTabControl", "color", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images_P/bg_tab_S.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected", "focused"]);
    this._addCss("Tab.styTabControl", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_D.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/tab_spindn_D.png");
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/tab_extra.png");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tabpage", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#373737ff","","","0","0","0","0","true");
    this._addCss("Menu", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_menu_check.png");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_expand_N.png");
    this._addCss("Menu", "expandimage", obj, ["normal"]);
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Menu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#373737ff","","","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 23 0 23");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 3 0");
    this._addCss("Menu", "padding", obj, ["normal", "pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 16 0 10");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#373737");
    this._addCss("Menu", "color", obj, ["pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_background("#fcb034ff","theme://images/img_menu_S.png","","0","0","50","100","true");
    this._addCss("Menu", "itembackground", obj, ["pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","8","8","true","true","false","false");
    this._addCss("Menu", "itembordertype", obj, ["pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Menu", "popupcolor", obj, ["pushed", "selected", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#737373");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ed6c44ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #63a7ec 0,100 #4b96e7");
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("color");
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#8e8e8eff","");
    this._addCss("ProgressBar", "border", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f1835e 0,100 #ed6d45");
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #d5d5d5");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("파일첨부");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#4a95e7");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f8ffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #106ebe");
    this._addCss("FileUpload", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0252a2");
    this._addCss("FileUpload", "buttoncolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f1f8ffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#106ebeff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#4f91cfff","");
    this._addCss("FileUpload", "editborder", obj, ["pushed"]);

    obj = new nexacro.Style_background("#458ddbff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_value("1 solid #0f60ab");
    this._addCss("FileUpload", "buttonborder", obj, ["pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "buttoncolor", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#0f60abff","");
    this._addCss("FileDownload", "border", obj, ["focused"]);

    obj = null;
    
//[add theme images]
  };
})();
