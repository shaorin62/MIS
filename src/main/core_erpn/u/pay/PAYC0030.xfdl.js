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
                this.set_name("PAYC0030");
                this.set_titletext("급여변동내역");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB \" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT_A\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PREV_AMOT_A\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAA_AMOT_A\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT_D\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PREV_AMOT_D\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAA_AMOT_D\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT_O\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_AMOT_O\" type=\"STRING\" size=\"256\"/><Column id=\"CHAA_AMOT_O\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_A", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME \" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PREV_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAA_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_D", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME \" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PREV_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAA_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">EPDD_CODE</Col><Col id=\"DSNAME\">dsEPDD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_O", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME \" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PREV_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAA_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE2", "absolute", "517", "71", "86", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_CODE1", "absolute", "201", "71", "86", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST", "absolute", "8", "128", null, "423", "25", null, this);
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"직급\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"text\" text=\"지급\"/><Cell col=\"8\" colspan=\"3\" text=\"공제\"/><Cell col=\"11\" colspan=\"3\" text=\"기타금액\"/><Cell row=\"1\" col=\"5\" text=\"지급일1\"/><Cell row=\"1\" col=\"6\" text=\"지급일2\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/><Cell row=\"1\" col=\"8\" text=\"지급일1\"/><Cell row=\"1\" col=\"9\" text=\"지급일2\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"지급일1\"/><Cell row=\"1\" col=\"12\" text=\"지급일2\"/><Cell row=\"1\" col=\"13\" text=\"차액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"bind:EMPL_NAME\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT_A\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT_A\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT_A\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT_D\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT_D\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT_D\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT_O\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT_O\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT_O\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('CURR_AMOT_A')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('PREV_AMOT_A')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('CHAA_AMOT_A')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('CURR_AMOT_D')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('PREV_AMOT_D')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('CHAA_AMOT_D')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('CURR_AMOT_O')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('PREV_AMOT_O')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('CHAA_AMOT_O')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "27", "71", "68", "21", null, null, this);
            obj.set_text("지급일1");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "662", "71", "41", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "704", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "786", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "809", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE1", "absolute", "89", "71", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE1", "absolute", "171", "71", "22", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME1", "absolute", "194", "71", "120", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "343", "71", "68", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("지급일2");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE2", "absolute", "408", "71", "80", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE2", "absolute", "490", "71", "22", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME2", "absolute", "513", "71", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_A", "absolute", "8", "566", "377", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("31");
            obj.set_binddataset("dsPY_PMDETL_A");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급항목\"/><Cell col=\"1\" text=\"지급일1\"/><Cell col=\"2\" text=\"지급일2\"/><Cell col=\"3\" text=\"차액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CURR_AMOT')\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PREV_AMOT')\" mask=\"#,###.##\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHAA_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_D", "absolute", "405", "566", "377", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("32");
            obj.set_binddataset("dsPY_PMDETL_D");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공제항목\"/><Cell col=\"1\" text=\"지급일1\"/><Cell col=\"2\" text=\"지급일2\"/><Cell col=\"3\" text=\"차액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CURR_AMOT')\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PREV_AMOT')\" mask=\"#,###.##\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHAA_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("급여변동내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("36");
            obj.set_text("홈 > 급여관리 > 급여현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "81", "61", "8", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "314", "61", "40", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "633", "61", "40", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "385", "614", "20", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "418", "551", "80", "15", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_D00", "absolute", "802", "566", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("52");
            obj.set_binddataset("dsPY_PMDETL_O");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"기타금액\"/><Cell col=\"1\" text=\"지급일1\"/><Cell col=\"2\" text=\"지급일2\"/><Cell col=\"3\" text=\"차액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CURR_AMOT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREV_AMOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAA_AMOT\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CURR_AMOT')\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PREV_AMOT')\" mask=\"#,###.##\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHAA_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "782", "610", "20", "41", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여변동내역");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYC0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYC0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0030 급여변동내역
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		고민주		Initial Created.
         *   2016.10.26		황치웅		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYC0030";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.edtSHRWAGE_NAME1.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_PMMAST,dsPY_PMDETL_A,dsPY_PMDETL_D,dsPY_PMDETL_O");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMMAST.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_PMMAST");
        	this.grdPY_PMMAST.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMMAST", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsPY_PMMAST")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.medSHRPAYX_DATE1.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일1", this.edtSHRWAGE_NAME1);
        	}
        	if (this.fnc_Length(this.medSHRPAYX_DATE2.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일2", this.edtSHRWAGE_NAME2);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE1=" 	 + this.fnc_Quote(this.medSHRPAYX_DATE1.value);
        		sReturnString += " WAGE_CODE1=" 	 + this.fnc_Quote(this.edtSHRWAGE_CODE1.value);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " PAYX_DATE2=" 	 + this.fnc_Quote(this.medSHRPAYX_DATE2.value);
        		sReturnString += " WAGE_CODE2=" 	 + this.fnc_Quote(this.edtSHRWAGE_CODE2.value);

        	} else if (sKind == "SEARCH01" || sKind == "SEARCH02" || sKind == "SEARCH03") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE1=" 	 + this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE1"));
        		sReturnString += " WAGE_CODE1=" 	 + this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE1"));
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NUMB"));
        		sReturnString += " PAYX_DATE2=" 	 + this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE2"));
        		sReturnString += " WAGE_CODE2=" 	 + this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE2"));

        	}

        	return sReturnString;

        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {

        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}

        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"));

        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_PMDETL_A,dsPY_PMDETL_D,dsPY_PMDETL_O");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PMDETL_A=dsPY_PMDETL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PMDETL_D=dsPY_PMDETL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PMDETL_O=dsPY_PMDETL_O";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRPAYX_DATE1") || (obj.name == "edtSHRWAGE_NAME1")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME1.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME1";
        		arrParam[5] = "medSHRPAYX_DATE1,edtSHRWAGE_CODE1,edtSHRWAGE_NAME1";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHRPAYX_DATE2") || (obj.name == "edtSHRWAGE_NAME2")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME2.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME2";
        		arrParam[5] = "medSHRPAYX_DATE2,edtSHRWAGE_CODE2,edtSHRWAGE_NAME2";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PMMAST.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_CODE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYC0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
