(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("BDMB0040");
                this.set_titletext("부서예산관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLDPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" type=\"STRING\"/><Column id=\"BUDG_YEAR\" size=\"4\" type=\"STRING\"/><Column id=\"CSTC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT01\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT02\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT03\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT04\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT05\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT06\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT07\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT08\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT09\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT10\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT11\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"BUDG_AT12\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NOTE\" size=\"400\" type=\"STRING\"/><Column id=\"BUDG_QT01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDG_QT02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDG_QT03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDG_QT04\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("72");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLDPT", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsTB_CPLDPT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"코스트센터코드\"/><Cell col=\"1\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코스트센터명\"/><Cell col=\"2\" rowspan=\"2\" text=\"예산과목코드\"/><Cell col=\"3\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"예산과목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"합계\"/><Cell col=\"5\" colspan=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"월별 예산액\"/><Cell col=\"21\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell row=\"1\" col=\"5\" style=\"background: ;\" text=\"1분기\"/><Cell row=\"1\" col=\"6\" text=\"1월\"/><Cell row=\"1\" col=\"7\" style=\"background: ;\" text=\"2월\"/><Cell row=\"1\" col=\"8\" style=\"background: ;\" text=\"3월\"/><Cell row=\"1\" col=\"9\" text=\"2분기\"/><Cell row=\"1\" col=\"10\" style=\"background: ;\" text=\"4월\"/><Cell row=\"1\" col=\"11\" style=\"background: ;\" text=\"5월\"/><Cell row=\"1\" col=\"12\" style=\"background: ;\" text=\"6월\"/><Cell row=\"1\" col=\"13\" text=\"3분기\"/><Cell row=\"1\" col=\"14\" style=\"background: ;\" text=\"7월\"/><Cell row=\"1\" col=\"15\" style=\"background: ;\" text=\"8월\"/><Cell row=\"1\" col=\"16\" style=\"background: ;\" text=\"9월\"/><Cell row=\"1\" col=\"17\" text=\"4분기\"/><Cell row=\"1\" col=\"18\" style=\"background: ;\" text=\"10월\"/><Cell row=\"1\" col=\"19\" style=\"background: ;\" text=\"11월\"/><Cell row=\"1\" col=\"20\" style=\"background: ;\" text=\"12월\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CSTC_CODE\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:CSTC_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:BDSB_CODE\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:BDSB_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,##0\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_QT01\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BUDG_AT01\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT02\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT03\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BUDG_QT02\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT04\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT05\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT06\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BUDG_QT03\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT07\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT08\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT09\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BUDG_QT04\" mask=\"#,###\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT10\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT11\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"20\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AT12\" mask=\"#,###\" editlimit=\"0\" editautoselect=\"false\"/><Cell col=\"21\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"0\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_ATAL'), 0)\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_QT01')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT01')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT02')\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT03')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_QT02')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT04')\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT05')\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT06')\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_QT03')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT07')\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT08')\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT09')\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_QT04')\" mask=\"#,###\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT10')\" mask=\"#,###\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT11')\" mask=\"#,###\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT12')\" mask=\"#,###\"/><Cell col=\"21\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "565", "12", "17", "12", null, null, this);
            obj.set_taborder("38");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("예산연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "205", "71", "76", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "273", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSHRCSTC_CODE", "absolute", "493", "71", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTC_NAME", "absolute", "598", "71", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "412", "71", "90", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "747", "71", "76", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDSB_CODE", "absolute", "816", "71", "80", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDSB_NAME", "absolute", "921", "71", "120", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCSTC_NAME", "absolute", "575", "71", "21", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBDSB_NAME", "absolute", "898", "71", "21", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("75");
            obj.set_text("부서예산관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("76");
            obj.set_text("홈 > 예산관리 > 부서예산");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("77");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("81");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("82");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("83");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("84");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("85");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("87");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("88");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("89");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("90");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "383", "61", "40", "41", null, null, this);
            obj.set_taborder("91");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "718", "61", "40", "41", null, null, this);
            obj.set_taborder("92");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popCopy", "absolute", "8", "731", "296", "115", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", null, null, "9", "42", this.popCopy);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemBoxOut");
            this.popCopy.addChild(obj.name, obj);
            obj = new Button("btnCopy", "absolute", null, null, "74", "24", "86", "10", this.popCopy);
            obj.set_taborder("2");
            obj.set_text("복사처리");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopy.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", null, null, "74", "24", "9", "10", this.popCopy);
            obj.set_taborder("3");
            obj.set_text("복사취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, null, "40", "10", "84", "1", this.popCopy);
            obj.set_taborder("5");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, null, "40", "10", "76", "33", this.popCopy);
            obj.set_taborder("6");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "130", "64", "40", "8", null, null, this.popCopy);
            obj.set_taborder("7");
            obj.set_text("H8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "29", "18", "120", "21", null, null, this.popCopy);
            obj.set_taborder("8");
            obj.set_text("기준연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "185", "18", "88", "21", null, null, this.popCopy);
            obj.set_taborder("9");
            obj.set_text("의 예산정보를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "29", "44", "120", "21", null, null, this.popCopy);
            obj.set_taborder("10");
            obj.set_text("대상연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.popCopy.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "185", "44", "88", "21", null, null, this.popCopy);
            obj.set_taborder("11");
            obj.set_text("로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popCopy.addChild(obj.name, obj);
            obj = new Calendar("calSTDS_YEAR", "absolute", "99", "18", "80", "21", null, null, this.popCopy);
            this.popCopy.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Calendar("calCOPY_YEAR", "absolute", "99", "44", "80", "21", null, null, this.popCopy);
            this.popCopy.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static15", "absolute", "132", "731", "40", "10", null, null, this);
            obj.set_taborder("93");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("예산복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("95");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("96");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 296, 115, this.popCopy,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popCopy.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서예산관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCUST_CODE_value","edtSHRCSTC_CODE","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtSHRBDSB_CODE","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BDMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMB0040 부서예산관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		안윤준		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "BDMB0040"; 

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";
        	
        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        	
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	var sNowDate = this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 8);
        	this.calSHRBUDG_YEAR.set_value(sNowDate);
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        	
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck())	return;
        	
        	this.fnc_DatasetClear("dsTB_CPLDPT");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLDPT=dsTB_CPLDPT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTB_CPLDPT.addRow();
        	this.dsTB_CPLDPT.setColumn(iRow, "BUDG_YEAR", this.fnc_SubStr(this.calSHRBUDG_YEAR.value, 0, 4));
        	this.dsTB_CPLDPT.setColumn(iRow, "ACCT_UNIT", this.cmbSHRACCT_UNIT.value);
        	
        	this.fnc_GridSetCellFocus(this.grdTB_CPLDPT, "CSTC_NAME");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTB_CPLDPT.deleteMultiRows(this.grdTB_CPLDPT.getSelectedDatasetRows());
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLDPT"); 
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLDPT=dsTB_CPLDPT:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLDPT", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTB_CPLDPT")) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTB_CPLDPT);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText  = "코스트센터코드 (" + this.fnc_Trim(this.dsTB_CPLDPT.getColumn(this.dsTB_CPLDPT.rowposition, "CSTC_CODE")) + ") ";
        			sQuestionText += "예산과목 (" + this.fnc_Trim(this.dsTB_CPLDPT.getColumn(this.dsTB_CPLDPT.rowposition, "BDSB_CODE")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}	
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLDPT")) {
        		
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var row = 0; row < this.dsTB_CPLDPT.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTB_CPLDPT.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "BUDG_YEAR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산연도", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "BUDG_YEAR");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "ACCT_UNIT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "ACCT_UNIT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "CSTC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코스트센터코드", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "CSTC_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "BDSB_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산과목명", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "BDSB_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "BDSB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산과목", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "BDSB_CODE");
        		}
        		
        // 		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(row, "BUDG_ATAL")), 0) == 0) {
        // 			return this.fnc_CheckPostAction("TMM072", "예산액", this.dsTB_CPLDPT, row, this.grdTB_CPLDPT, "BUDG_AT01");
        // 		}
        		
        	}
        	
        	return true;
        	
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " CSTC_CODE=" + this.fnc_Quote(this.edtSHRCSTC_CODE.value);
        		sReturnString += " BDSB_CODE=" + this.fnc_Quote(this.edtSHRBDSB_CODE.value);

        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 

        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.popCopy.calSTDS_YEAR.value), 0, 4));
        		sReturnString += " COPY_YEAR=" 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.popCopy.calCOPY_YEAR.value), 0, 4));

        	}

        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else {
        		
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTB_CPLDPT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLDPT.rowcount); 
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 

        	} else if (sMethodName == "PROC00") {

         		this.fnc_Message("TMM103"); //정상 종료 Message
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} 
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRCSTC_NAME") || (obj.name == "edtSHRCSTC_NAME")) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        		}
        		
        		arrParam[0] = "BDM0006";
        		arrParam[1] = this.calSHRBUDG_YEAR.value + ",4,4,4";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCSTC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCSTC_NAME";
        		arrParam[5] = "edtSHRCSTC_CODE,edtSHRCSTC_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHRBDSB_NAME") || (obj.name == "edtSHRBDSB_NAME")) {

        		arrParam[0] = "BDM0001";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRBDSB_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRBDSB_NAME";                         
        		arrParam[5] = "edtSHRBDSB_CODE,edtSHRBDSB_NAME";         
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdTB_CPLDPT") {
        		
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "CSTC_NAME" || sColumnID == "CSTC_NAME") {

        			if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        				return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        			}

        			arrParam[0] = "BDM0006";
        			arrParam[1] = this.calSHRBUDG_YEAR.value + ",4,4,4";
        			arrParam[2] = "CSTC_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLDPT";
        			arrParam[5] = "CSTC_CODE,CSTC_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "BDSB_NAME" || sColumnID == "BDSB_NAME") {
        			arrParam[0] = "BDM0001";
        			arrParam[1] = "1";
        			arrParam[2] = "BDSB_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLDPT";
        			arrParam[5] = "BDSB_CODE,BDSB_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
        		
        	}
        	
        	if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e) {

        	if (e.columnid == "CSTC_NAME" || e.columnid == "BDSB_NAME") {
        		
        		this.fn_HelpDialoge(this.grdTB_CPLDPT, "YES", e.oldvalue, e.columnid);
        		
        	} else if (e.columnid == "BUDG_AT01" || e.columnid == "BUDG_AT02" || e.columnid == "BUDG_AT03") {

        		var iBudg_At01 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT01"), 0);
        		var iBudg_At02 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT02"), 0);
        		var iBudg_At03 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT03"), 0);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_QT01", iBudg_At01 + iBudg_At02 + iBudg_At03);
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        		
        	} else if (e.columnid == "BUDG_AT04" || e.columnid == "BUDG_AT05" || e.columnid == "BUDG_AT06") {
        		
        		var iBudg_At04 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT04"), 0);
        		var iBudg_At05 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT05"), 0);
        		var iBudg_At06 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT06"), 0);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_QT02", iBudg_At04 + iBudg_At05 + iBudg_At06);
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        				
        	} else if (e.columnid == "BUDG_AT07" || e.columnid == "BUDG_AT08" || e.columnid == "BUDG_AT09") {

        		var iBudg_At07 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT07"), 0);
        		var iBudg_At08 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT08"), 0);
        		var iBudg_At09 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT09"), 0);
        	
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_QT03", iBudg_At07 + iBudg_At08 + iBudg_At09);
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();

        	} else if (e.columnid == "BUDG_AT10" || e.columnid == "BUDG_AT11" || e.columnid == "BUDG_AT12") {
        		 
        		var iBudg_At10 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT10"), 0);
        		var iBudg_At11 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT11"), 0);
        		var iBudg_At12 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(e.row, "BUDG_AT12"), 0);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_QT04", iBudg_At10 + iBudg_At11 + iBudg_At12);
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        		
        	} else if (e.columnid == "BUDG_QT01") {
        	
        		var iBudg_Amnt = nexacro.round(nexacro.toNumber(e.newvalue, 0) / 3);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT01", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT02", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT03", iBudg_Amnt + (e.newvalue - iBudg_Amnt*3));
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        	
        	} else if (e.columnid == "BUDG_QT02") {

        		var iBudg_Amnt = nexacro.round(nexacro.toNumber(e.newvalue, 0) / 3);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT04", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT05", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT06", iBudg_Amnt + (e.newvalue - iBudg_Amnt*3));
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        		
        	} else if (e.columnid == "BUDG_QT03") {

        		var iBudg_Amnt = nexacro.round(nexacro.toNumber(e.newvalue, 0) / 3);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT07", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT08", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT09", iBudg_Amnt + (e.newvalue - iBudg_Amnt*3));
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        		
        	} else if (e.columnid == "BUDG_QT04") {

        		var iBudg_Amnt = nexacro.round(nexacro.toNumber(e.newvalue, 0) / 3);
        		
        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT10", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT11", iBudg_Amnt);
        		this.dsTB_CPLDPT.setColumn(e.row, "BUDG_AT12", iBudg_Amnt + (e.newvalue - iBudg_Amnt*3));
        		this.dsTB_CPLDPT.set_enableevent(true);
        		this.fn_GetSum();
        		
        	}
        	
        }

        this.fn_GetSum = function () {
        	
        	var iRow = this.dsTB_CPLDPT.rowposition;
        	
        	var iBudg_At01 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT01"), 0);
        	var iBudg_At02 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT02"), 0);
        	var iBudg_At03 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT03"), 0);
        	var iBudg_At04 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT04"), 0);
        	var iBudg_At05 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT05"), 0);
        	var iBudg_At06 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT06"), 0);
        	var iBudg_At07 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT07"), 0);
        	var iBudg_At08 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT08"), 0);
        	var iBudg_At09 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT09"), 0);
        	var iBudg_At10 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT10"), 0);
        	var iBudg_At11 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT11"), 0);
        	var iBudg_At12 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(iRow, "BUDG_AT12"), 0);
        	
        	var iBudg_Atal = iBudg_At01 + iBudg_At02 + iBudg_At03 + iBudg_At04 + iBudg_At05 + iBudg_At06
        				   + iBudg_At07 + iBudg_At08 + iBudg_At09 + iBudg_At10 + iBudg_At11 + iBudg_At12;
        	this.dsTB_CPLDPT.setColumn(iRow, "BUDG_ATAL", iBudg_Atal);
        	
        }

        /*------------------------+
         |  조회조건 변경시 처리  |
         +------------------------*/
        this.fn_clearData = function (obj) {
        	
        	this.fnc_DatasetClear("dsTB_CPLDPT");
        	this.stInformation.set_text("");
        }

        /*------------+
         |  예산복사  |
         +------------*/
        this.btnCopy_onclick = function(obj,e) {
        	
        	this.popCopy.trackPopupByComponent(this.btnCopy, 0, 0);
        	
        	var sYear = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4);
        		sYear = nexacro.toNumber(sYear) + 1;
        		
        	this.popCopy.calSTDS_YEAR.set_value(this.calSHRBUDG_YEAR.value);
        	this.popCopy.calCOPY_YEAR.set_value(sYear + "0101");
        	
        }

        /*---------------------+
         |  예산복사 복사처리  |
         +---------------------*/
        this.popCopy_btnCopy_onclick = function(obj,e) {
        	
        	if (!this.fn_CopyItemCheck()) return;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*----------------------------+
         |  예산복사 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CopyItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.popCopy.calSTDS_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준연도", this.popCopy.calSTDS_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.popCopy.calCOPY_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상연도", this.popCopy.calCOPY_YEAR);
        	}
        	
        	return this.fnc_Message("TMM061", "대상이 되는 [" + this.fnc_SubStr(this.fnc_Trim(this.popCopy.calCOPY_YEAR.value), 0, 4) + "]년도 부서예산 데이터는 초기화되며 금액은 복사되지 않습니다. 복사");
        	
        }

        /*---------------------+
         |  예산복사 복사취소  |
         +---------------------*/
        this.popCopy_btnCancel_onclick = function(obj,e) {
        	
            this.popCopy.closePopup();
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLDPT.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLDPT.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCSTC_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRBDSB_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popCopy.btnCopy.addEventHandler("onclick", this.popCopy_btnCopy_onclick, this);
            this.popCopy.btnCancel.addEventHandler("onclick", this.popCopy_btnCancel_onclick, this);
            this.popCopy.calSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popCopy.calSTDS_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.popCopy.calSTDS_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.popCopy.calCOPY_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popCopy.calCOPY_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.popCopy.calCOPY_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.btnCopy.addEventHandler("onclick", this.btnCopy_onclick, this);

        };

        this.loadIncludeScript("BDMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
