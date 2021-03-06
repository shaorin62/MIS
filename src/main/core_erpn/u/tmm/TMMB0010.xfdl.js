﻿(function()
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
                this.set_name("TMMB0010");
                this.set_titletext("사용자정보관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_GROUPX", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsUSDN_CODE</Col><Col id=\"CODEID\">USDN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">USDN_CODE</Col><Col id=\"DSNAME\">dsSHRUSDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_USERXM", this);
            obj._setContents("<ColumnInfo><Column id=\"USDN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_BIRT\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "8", null, "569", "117", null, "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("12");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_USERXM", "absolute", "8", "128", null, null, "25", "167", this);
            obj.set_binddataset("dsTM_USERXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"122\"/><Column size=\"162\"/><Column size=\"93\"/><Column size=\"90\"/><Column size=\"131\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사용자구분\"/><Cell col=\"1\" text=\"사용자 ID\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:USDN_CODE\"/><Cell col=\"1\" text=\"bind:USER_IDXX\"/><Cell col=\"2\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RETR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:REMK_100X\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_GROUPX", "absolute", "597", null, null, "117", "25", "15", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTM_GROUPX");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("10");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"권한그룹\"/><Cell col=\"1\" text=\"권한그룹명\"/></Band><Band id=\"body\"><Cell text=\"bind:GRUP_IDXX\"/><Cell col=\"1\" text=\"bind:GRUP_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete", "absolute", null, null, "62", "21", "25", "136", this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("16");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "6", "35", "253", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnChangePasswd", "absolute", "114", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnChangePasswd00", "absolute", "2", "0", "110", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("비밀번호초기화");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("사용자명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("chkSHRUSEX_GUBN", "absolute", "495", "71", "76", "21", null, null, this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "96", "71", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "563", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static3", "absolute", "28", null, "80", "21", null, "102", this);
            obj.set_text("사용자구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbUSDN_CODE", "absolute", "109", null, "70", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_USERXM");
            obj.set_imemode("none");
            obj.set_type("dropdown");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static10", "absolute", "364", null, "80", "21", null, "102", this);
            obj.set_text("사용자 ID");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", null, "72", "21", null, "50", this);
            obj.set_text("부서명");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "364", null, "80", "21", null, "76", this);
            obj.set_text("입사일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "364", null, "80", "21", null, "50", this);
            obj.set_text("퇴사일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "28", null, "72", "21", null, "24", this);
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_100X", "absolute", "109", null, "230", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_USERXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("3");
            obj.set_inputmode("normal");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "364", null, "66", "21", null, "24", this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUSEX_YSNO", "absolute", "437", null, "23", "21", null, "24", this);
            obj.getSetter("binddataset").set("dsTM_USERXM");
            obj.set_falsevalue("0");
            obj.set_taborder("4");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSDN_CODE", "absolute", "326", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("chkSHRUSEX_GUBN00", "absolute", "245", "71", "90", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("사용자구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENCO_DATE", "absolute", "437", null, "103", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.set_usecontextmenu("true");
            obj.set_displaynulltext(" ");
            obj.set_enable("true");
            obj.set_tabstop("false");

            obj = new Calendar("calRETR_DATE", "absolute", "437", null, "103", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");
            obj.set_usecontextmenu("true");
            obj.set_displaynulltext(" ");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_type("normal");

            obj = new Edit("edtUSER_IDXX", "absolute", "437", null, "126", "21", null, "102", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_USERXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("10");
            obj.set_taborder("1");
            obj.set_inputmode("normal");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("사용자정보관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("44");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("45");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("55");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("56");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("58");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "216", "61", "40", "41", null, null, this);
            obj.set_taborder("59");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "509", "550", "80", "35", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "9", "589", "30", "41", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "597", null, "158", "21", null, "132", this);
            obj.set_taborder("63");
            obj.set_text("보유권한");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", null, "158", "21", null, "132", this);
            obj.set_taborder("64");
            obj.set_text("사용자정보상세");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", null, "72", "21", null, "76", this);
            obj.set_taborder("65");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "109", null, "70", "21", null, "76", this);
            obj.set_taborder("66");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "181", null, "21", "21", null, "76", this);
            obj.set_taborder("67");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSER_NAME", "absolute", "204", null, "135", "21", null, "76", this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "109", null, "70", "21", null, "50", this);
            obj.set_taborder("69");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "181", null, "78", "21", null, "50", this);
            obj.set_taborder("70");
            obj.set_imemode("hangul");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "261", null, "78", "21", null, "50", this);
            obj.set_taborder("71");
            obj.set_imemode("hangul");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_BIRT", "absolute", "459", null, "104", "21", null, "24", this);
            obj.set_taborder("72");
            obj.set_imemode("hangul");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 253, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사용자정보관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtUSER_IDXX_value","edtUSER_IDXX","value","dsTM_USERXM","USER_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbUSDN_CODE_value","cmbUSDN_CODE","value","dsTM_USERXM","USDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREMK_100X_value","edtREMK_100X","value","dsTM_USERXM","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkUSEX_YSNO_value","chkUSEX_YSNO","value","dsTM_USERXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","calENCO_DATE","value","dsTM_USERXM","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calRETR_DATE","value","dsTM_USERXM","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtEMPL_NUMB","value","dsTM_USERXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtUSER_NAME","value","dsTM_USERXM","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtDEPT_CODE","value","dsTM_USERXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtSECT_NAME","value","dsTM_USERXM","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtDEPT_NAME","value","dsTM_USERXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtEMPL_BIRT","value","dsTM_USERXM","EMPL_BIRT");
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
        this.addIncludeScript("TMMB0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TMMB0010.xfdl", "script::lib_base64.xjs");
        this.registerScript("TMMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0010 데이터 전송
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_base64.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMB0010";
        this.sKeyValue = new Array();
        this.sPARAM_USERID = "";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRUSEX_YSNO.set_value("1");
        	this.fn_Search();

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
        	this.fnc_DatasetClear("dsTM_USERXM,dsTM_GROUPX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_USERXM=dsTM_USERXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_USERXM.setFocus();
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_USERXM.addRow();
        	this.dsTM_USERXM.setColumn(iRow, "USEX_YSNO", "1");
        	this.dsTM_USERXM.setColumn(iRow, "USDN_CODE", "02");
        	
        	this.edtUSER_IDXX.setFocus();
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_USERXM.deleteRow(this.dsTM_USERXM.rowposition);
        	}
        	this.grdTM_USERXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_USERXM,dsTM_GROUPX");
        	this.grdTM_USERXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	this.sKeyValue[0] = this.dsTM_USERXM.getColumn(this.dsTM_USERXM.rowposition,"USER_IDXX");

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_USERXM=dsTM_USERXM:U dsTM_GROUPX=dsTM_GROUPX:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_USERXM.setFocus();
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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_USERXM,dsTM_GROUPX", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
         
        }  

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성 - 사용자
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		 	 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NAME.value)); //사용자명
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부
        		sReturnString += " USDN_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSDN_CODE.value)); //사용구분

        	// 조회 Argument 생성 -사용자별 권한그룹
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " USER_IDXX=" 	+ this.fnc_Quote(this.dsTM_USERXM.getColumn(this.dsTM_USERXM.rowposition, 'USER_IDXX')); //사용자 ID

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	} 

        	return sReturnString;
        }

        /*-------------------------------------+
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_USERXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_USERXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        		//원래 행으로 돌아가기
        		var irow = this.dsTM_USERXM.findRow("USER_IDXX",this.sKeyValue[0]);
        		this.sKeyValue[0] = "";
        		if(irow<0) irow=0;
        		this.dsTM_USERXM.set_rowposition(irow);	
        	
        	
        	} else if (sMethodName == "SEARCH01") { 
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search();
        	
        	} else if (sMethodName == "PasswordInit") { 
        	
        		this.fnc_Message("TMM300", "비밀번호가 초기화 되었습니다.");

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdTM_USERXM,dsUSDN_CODE,USDN_CODE";
        		arrParam[1] = "GRID,grdTM_USERXM,dsUSEX_YSNO,USEX_YSNO";
        		arrParam[2] = "COMBO,cmbUSDN_CODE,dsUSDN_CODE,0";
        		
        		arrParam[3] = "COMBO,cmbSHRUSDN_CODE,dsSHRUSDN_CODE,0";
        		arrParam[4] = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        // 	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        // 	
        // 		this.fnc_SetReadonly(this.edtUSER_IDXX, false);
        // 	
        // 	} else {
        // 	
        // 		this.fnc_SetReadonly(this.edtUSER_IDXX, true);
        // 	
        // 	}
        // 
        // 	//내부계정인 경우 인사정보에서 사원명과 부서를 가져오는데
        // 	//내부계정은 인사마스터에서 삭제해야 함.
        // 	if (obj.getColumn(obj.rowposition,"USDN_CODE") == "01") {
        // 	
        // 		this.fnc_SetReadonly(this.div_ButtonList.btnDelete, true);
        // 		this.fnc_SetReadonly(this.edtUSER_NAME, true);
        // 		this.fnc_SetReadonly(this.edtDEPT_NAME, true);
        // 		this.fnc_SetReadonly(this.imgHelpDEPT_CODE, true);
        // 		
        // 	//외부계정인 경우 인사정보가 없어서 사원명과 부서를 직접입력할 수 있게 리드온리를 해제한다.
        // 	//SECT_CODE는 DEPT_CODE로 VI_DEPTXM에서 가져오기 때문에 사용안함. 전부 null값이 들어감
        // 	} else {
        // 		this.fnc_SetReadonly(this.div_ButtonList.btnDelete, false);
        // 		this.fnc_SetReadonly(this.edtUSER_NAME, false);
        // 		this.fnc_SetReadonly(this.edtDEPT_NAME, false);
        // 		this.fnc_SetReadonly(this.imgHelpDEPT_CODE, false);
        // 	}
        // 
        // 	this.fn_AuthGroupSearch();
        // 	
        // 	
        	var iRow      = obj.rowposition;
        	var sUsdnCode = obj.getColumn(iRow, "USDN_CODE");

        	/***************************************************************************
        	   2016.10.10
        	   1. 사원번호와 사용자 ID 동일하게 사용
        	   2. 외부 사용자는 ID는 부여하되 관리사원(책임자) 설정(지정) 처리
        	   3. 외부 사용자의 경우 ID 수정을 불가하되 관리 사원은 수정 가능
        	***************************************************************************/
        	  
        	if (this.fnc_ToUpper(obj.getRowType(iRow)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.fnc_SetReadonly(this.cmbUSDN_CODE, false);
        		this.fnc_SetReadonly(this.edtUSER_NAME, false);
        		
        		if (sUsdnCode == "01") {
        			this.fnc_SetReadonly(this.edtUSER_IDXX, true);
        		} else {
        			this.fnc_SetReadonly(this.edtUSER_IDXX, false);
        		}
        	
        	} else {
        	
        		this.fnc_SetReadonly(this.cmbUSDN_CODE, true);
        		this.fnc_SetReadonly(this.edtUSER_IDXX, true);
        		
        		if (sUsdnCode == "01") {
        			this.fnc_SetReadonly(this.edtUSER_NAME, true);
        		} else {
        			this.fnc_SetReadonly(this.edtUSER_NAME, false);
        		}
        		
        	}

        	this.fn_AuthGroupSearch();
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_USERXM,dsTM_GROUPX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_USERXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_USERXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_USERXM.getColumn(i, "USER_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사용자ID", this.dsTM_USERXM, i, this.edtUSER_IDXX, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_USERXM.getColumn(i, "USDN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사용자구분", this.dsTM_USERXM, i, this.cmbUSDN_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_USERXM.getColumn(i, "USER_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사용자명", this.dsTM_USERXM, i, this.edtUSER_NAME, '');
        		}
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_USERXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = this.dsTM_USERXM.getColumn(this.dsTM_USERXM.rowposition, "USER_IDXX");
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_USERXM,dsTM_GROUPX")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        	var arrParam = new Array();
        	
        	// 입력항목 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtUSER_NAME")) {
        		if (this.cmbUSDN_CODE.value == "02") return;
        // 			if (obj.name == "edtUSER_NAME") return;
        // 		}
        		arrParam[0] = "HRM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtUSER_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtUSER_NAME";
        		arrParam[5] = "edtEMPL_NUMB,edtUSER_NAME,edtDEPT_CODE,edtDEPT_NAME,edtSECT_NAME,edtEMPL_BIRT,calENCO_DATE,calRETR_DATE";
        		arrParam[6] = "0,1,2,3,5,32,28,37";
        		arrParam[9] = "fn_CommPopupPost";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }

        
        /*-----------------------------+
         | 사원조회 팝업 후 처리 !  |
         +-----------------------------*/
        this.fn_CommPopupPost = function(sResponse) {

        	var iRow      	= this.dsTM_USERXM.rowposition;
        	var sArrRtn 	= this.fnc_Split(sResponse, ",");
        	var sEmplNumb 	= sArrRtn[0];

        	//내부 사용자의 경우 사원 번호를 사용자 ID에 자동 설정 처리
        	if (this.dsTM_USERXM.getColumn(iRow, "USDN_CODE") == "01") this.dsTM_USERXM.setColumn(iRow, "USER_IDXX", sEmplNumb);

        }

        /*--------------------------------+
         |  개인의 권한 그룹 정보 조회 !  |
         +--------------------------------*/
        this.fn_AuthGroupSearch = function () {

        	//행추가시 user_idxx가 없어서 권한그룹 데이타셋만 초기화 시킨다.
        	this.fnc_DatasetClear("dsTM_GROUPX");

        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_USERXM.getColumn(this.dsTM_USERXM.rowposition, "USER_IDXX"))) < 1) return false;

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_GROUPX=dsTM_GROUPX";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdTM_GROUPX.setFocus();
        }

        /*------------------------+
         |  사용자 권한 그룹 삭제 |
         +------------------------*/
        this.fn_UserAuthDelete = function (obj,e) {

        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTM_GROUPX.getRowCount() < 1) return;

        	// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        	var sQuestionText  = this.dsTM_GROUPX.getColumn(this.dsTM_GROUPX.rowposition, "GRUP_IDXX") + " : ";
        		sQuestionText += this.dsTM_GROUPX.getColumn(this.dsTM_GROUPX.rowposition, "GRUP_NAME") + " 권한그룹";
        	if (!this.fnc_Message("TMM002", sQuestionText)) return;
        	
        	this.dsTM_GROUPX.deleteRow(this.dsTM_GROUPX.rowposition);
        }

        /*--------------------------------------------------+
         | 권한 그룹 변경 후 저장 않고 이동하는지 여부 체크 |
         +--------------------------------------------------*/
        this.dsTM_USERXM_CanRowPosChange = function (obj,e) {

        	if (e.newrow < 0) return false;
        	if (this.fnc_DatasetChangeCheck("dsTM_GROUPX")) {
        	
        		if (this.fnc_Message("TMM140", "권한그룹이 변경되었습니다.\n\n저장하지 않고 다른 사용자로 이동하시겟습니까")) {
        			this.fnc_DataSetCancel("dsTM_GROUPX");
        		} else {
        			return false;
        		}
        	}
        }

        /*---------------+
         | 비밀번호 변경 |
         +---------------*/
        this.btnChangePasswd_onclick = function(obj,e) {
        	// 관리자일경우 
        	if (this.sUSERLAVEL == "1") {
        		this.sPARAM_USERID = this.dsTM_USERXM.getColumn(this.dsTM_USERXM.rowposition, "USER_IDXX");
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=200";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=비밀번호 변경";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		this.fnc_OpenPopup("passwordChange", "common::comPasswordChange.xfdl", {"sPARAM_USERID" : this.sPARAM_USERID, "iPARAM_USERLAVEL" : this.sUSERLAVEL}, sOpenStyle, "");
        	} else {
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=200";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=비밀번호 변경";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		this.fnc_OpenPopup("passwordChange", "common::comPasswordChange.xfdl", {}, sOpenStyle, "");
        	}
        }

        /*----------------------+
         | 비밀번호 초기화 처리 |
         +----------------------*/
        this.fn_PasswordInit = function() {

        	if (this.dsTM_USERXM.getRowCount() < 1) {
        		this.fnc_Message("TMM300", "사용자 선택 후 작업하세요!");
        		return;
        	}

        	var iRow = this.dsTM_USERXM.rowposition;

        	if (this.fnc_ToUpper(this.dsTM_USERXM.getRowType(iRow)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_Message("TMM300", "신규 사용자는 저장 후 작업하세요!");
        		return;
        	}

        	if (this.fnc_Message("TMM140", "비밀번호는 주민등록상 생년월일(YYYYMMDD)로 초기화 됩니다.\n\n"
        									+ "[ 사원명 : " + this.dsTM_USERXM.getColumn(iRow, "USER_NAME") +" ]의 비밀번호를 초기화하시겠습니까") == false) return;

        	var sArgument  = " USER_IDXX="  + this.base64Encode(this.dsTM_USERXM.getColumn(iRow, "USER_IDXX"));
        		sArgument += " SCRT_NUMB="  + this.base64Encode(this.dsTM_USERXM.getColumn(iRow, "EMPL_BIRT"));
        	this.fnc_TransactionCall(this, "ComLogin", "PasswordInit", "", "", sArgument, "fn_CallBack");
        	
        }

        /*----------------------------------------+
         | 사용자 구분 변경 시 사용자 ID 처리 |
         +----------------------------------------*/
        this.dsTM_USERXM_oncolumnchanged = function(obj,e) { 

        	if (e.columnid != "USDN_CODE" ) return;

        	var iRow      = obj.rowposition;
        	var sEmplNumb = this.dsTM_USERXM.getColumn(iRow, "EMPL_NUMB");

        	/* 01:내부, 02:외부) */
        	if (e.newvalue == "01") {
        		this.fnc_SetReadonly(this.edtUSER_IDXX, true);
        		if (sEmplNumb != "") this.dsTM_USERXM.setColumn(iRow, "USER_IDXX", sEmplNumb);
        	} else {
        		this.fnc_SetReadonly(this.edtUSER_IDXX, false);
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_USERXM.addEventHandler("canrowposchange", this.dsTM_USERXM_CanRowPosChange, this);
            this.dsTM_USERXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_USERXM.addEventHandler("oncolumnchanged", this.dsTM_USERXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnDelete.addEventHandler("onclick", this.fn_UserAuthDelete, this);
            this.divButtonList.btnChangePasswd.addEventHandler("onclick", this.btnChangePasswd_onclick, this);
            this.divButtonList.btnChangePasswd00.addEventHandler("onclick", this.fn_PasswordInit, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbUSDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calENCO_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calRETR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSER_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtUSER_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSER_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSECT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSECT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_BIRT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_BIRT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TMMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
