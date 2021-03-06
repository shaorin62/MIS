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
                this.set_name("TMMB0030");
                this.set_titletext("메뉴구조관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsVI_MENUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"UPME_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"UPME_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNUT_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEVC_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTREE_VIEW", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"UPME_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"UPME_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNUT_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEVC_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "376", null, null, "117", "25", "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("tvTREE_VIEW", "absolute", "8", "128", "348", null, null, "12", this);
            obj.set_binddataset("dsTREE_VIEW");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("true");
            obj.set_taborder("1");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"359\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"selectline: ;\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdVI_MENUXM", "absolute", "376", "128", null, null, "25", "147", this);
            obj.set_binddataset("dsVI_MENUXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"195\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"메뉴ID\"/><Cell col=\"1\" displaytype=\"text\" text=\"메뉴명\"/><Cell col=\"2\" displaytype=\"text\" text=\"상위메뉴명\"/><Cell col=\"3\" displaytype=\"text\" text=\"프로그램ID\"/><Cell col=\"4\" displaytype=\"text\" text=\"프로그램명\"/><Cell col=\"5\" text=\"시스템\"/><Cell col=\"6\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:MENU_IDXX\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MENU_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:UPME_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:PROG_IDXX\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:PROG_NAME\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SYST_CODE\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("14");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "396", null, "67", "21", null, "102", this);
            obj.set_text("메뉴 ID");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMENU_IDXX", "absolute", "472", null, "120", "21", null, "102", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("9");
            obj.set_taborder("3");
            obj.set_inputmode("upper");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "607", null, "96", "21", null, "100", this);
            obj.set_text("메뉴명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMENU_NAME", "absolute", "696", null, null, "21", "46", "102", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "396", null, "67", "21", null, "76", this);
            obj.set_text("시스템");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSYST_CODE", "absolute", "472", null, "120", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_type("dropdown");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static17", "absolute", "607", null, "96", "21", null, "76", this);
            obj.set_text("프로그램 ID");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROG_IDXX", "absolute", "696", null, "80", "21", null, "76", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("english");
            obj.set_maxlength("10");
            obj.set_taborder("34");
            obj.set_inputmode("upper");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPROG_IDXX", "absolute", "778", null, "21", "21", null, "76", this);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROG_NAME", "absolute", "801", null, null, "21", "46", "76", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "607", null, "96", "21", null, "50", this);
            obj.set_text("상위메뉴");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPME_IDXX", "absolute", "696", null, "80", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("english");
            obj.set_maxlength("9");
            obj.set_taborder("35");
            obj.set_inputmode("upper");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUPME_IDXX", "absolute", "778", null, "21", "21", null, "50", this);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "396", null, "67", "21", null, "50", this);
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "472", null, "120", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("6");
            obj.set_inputtype("number");
            obj.set_taborder("7");
            obj.set_inputmode("normal");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "396", null, "67", "21", null, "24", this);
            obj.set_text("세부선택");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPME_NAME", "absolute", "801", null, null, "21", "46", "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkMNUT_YSNO", "absolute", "611", null, "106", "21", null, "24", this);
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_falsevalue("0");
            obj.set_taborder("10");
            obj.set_text("메뉴트리여부");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUSEX_YSNO", "absolute", "747", null, "84", "21", null, "24", this);
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_falsevalue("0");
            obj.set_taborder("11");
            obj.set_text("사용여부");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDEVC_YSNO", "absolute", "477", null, "106", "21", null, "24", this);
            obj.getSetter("binddataset").set("dsVI_MENUXM");
            obj.set_falsevalue("0");
            obj.set_taborder("9");
            obj.set_text("개발완료여부");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "115", "21", null, null, this);
            obj.set_text("선택된 메뉴정보");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "140", "71", "142", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_type("dropdown");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_readonly("false");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_index("-1");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("메뉴구조관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("40");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("49");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("50");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "132", "61", "8", "41", null, null, this);
            obj.set_taborder("52");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "356", "189", "20", "41", null, null, this);
            obj.set_taborder("53");
            obj.set_text("W20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "377", "589", "30", "41", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1141", "589", "20", "41", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메뉴구조관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtMENU_IDXX_value","edtMENU_IDXX","value","dsVI_MENUXM","MENU_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMENU_NAME_value","edtMENU_NAME","value","dsVI_MENUXM","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSYST_CODE_value","cmbSYST_CODE","value","dsVI_MENUXM","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPROG_IDXX_value","edtPROG_IDXX","value","dsVI_MENUXM","PROG_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPROG_NAME_value","edtPROG_NAME","value","dsVI_MENUXM","PROG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUPME_NAME_value","edtUPME_NAME","value","dsVI_MENUXM","UPME_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSORT_ORDR_value","edtSORT_ORDR","value","dsVI_MENUXM","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkMNUT_YSNO_value","chkMNUT_YSNO","value","dsVI_MENUXM","MNUT_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkUSEX_YSNO_value","chkUSEX_YSNO","value","dsVI_MENUXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkDEVC_YSNO_value","chkDEVC_YSNO","value","dsVI_MENUXM","DEVC_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtUPME_NAME","value","dsVI_MENUXM","UPME_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtUPME_IDXX","value","dsVI_MENUXM","UPME_IDXX");
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
        this.addIncludeScript("TMMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0030 메뉴구조관리
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  	= "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TMMB0030"; //해당 Form에서 사용 할 Package 명
        this.aKeyValue 	  	= new Array(2);

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        this.treeStatus = 0; //트리 클릭시 expand 구분용 변수

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
        	
        	this.fnc_DatasetClear("dsTREE_VIEW"); //기조회 자료 초기화
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTREE_VIEW=dsTREE_VIEW";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iPreRow = this.dsVI_MENUXM.rowposition;
        	var iRow 	= this.dsVI_MENUXM.insertRow(iPreRow + 1);
        	
        	if (iPreRow >= 0) {
        		var sMenu_Idxx = this.fnc_SubStr(this.dsVI_MENUXM.getColumn(iPreRow, "MENU_IDXX"), 0, 5); //메뉴ID
        		var sUpme_Idxx = this.dsVI_MENUXM.getColumn(iPreRow, "UPME_IDXX"); //상위메뉴
        		var sUpme_Name = this.dsVI_MENUXM.getColumn(iPreRow, "UPME_NAME"); //상위메뉴명
        		var sSyst_Code = this.dsVI_MENUXM.getColumn(iPreRow, "SYST_CODE"); //시스템
        		var sDevc_Ysno = this.dsVI_MENUXM.getColumn(iPreRow, "DEVC_YSNO"); //개발여부
        		var sMnut_Ysno = this.dsVI_MENUXM.getColumn(iPreRow, "MNUT_YSNO"); //트리여부
        		var sUsex_Ysno = this.dsVI_MENUXM.getColumn(iPreRow, "USEX_YSNO"); //사용여부
        		
        		this.dsVI_MENUXM.setColumn(iRow, "MENU_IDXX", sMenu_Idxx);
        		this.dsVI_MENUXM.setColumn(iRow, "UPME_IDXX", sUpme_Idxx);
        		this.dsVI_MENUXM.setColumn(iRow, "UPME_NAME", sUpme_Name);
        		this.dsVI_MENUXM.setColumn(iRow, "SYST_CODE", sSyst_Code);
        		this.dsVI_MENUXM.setColumn(iRow, "DEVC_YSNO", sDevc_Ysno);
        		this.dsVI_MENUXM.setColumn(iRow, "MNUT_YSNO", sMnut_Ysno);
        		this.dsVI_MENUXM.setColumn(iRow, "USEX_YSNO", sUsex_Ysno);		
        	}
        	
        	this.edtMENU_IDXX.setFocus(); //입력 첫 항목(System)으로 Focus

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsVI_MENUXM.deleteRow(this.dsVI_MENUXM.rowposition);
        	}
        	this.grdVI_MENUXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsVI_MENUXM");
        	this.grdVI_MENUXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsVI_MENUXM.getColumn(this.dsVI_MENUXM.rowposition, "SYST_CODE");
        	this.aKeyValue[1] = this.dsVI_MENUXM.getColumn(this.dsVI_MENUXM.rowposition, "MENU_IDXX");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsVI_MENUXM=dsVI_MENUXM:U";
        	var sOutDataSet = "dsTREE_VIEW=dsTREE_VIEW";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdVI_MENUXM.setFocus();
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsVI_MENUXM", this);

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
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        	var arrParam = new Array();

        	// 입력항목 - 프로그램ID(Popup)
        	if ((obj.name == "imgHelpPROG_IDXX") || (obj.name == "edtPROG_NAME")) {
        	
        		arrParam[0] = "TMM0003"; 							  //Popup ID
        		arrParam[1] = ""; 									  //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtPROG_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 									  //사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtPROG_NAME"; 						  //현재 포커스 Componect명
        		arrParam[5] = "edtPROG_IDXX,edtPROG_NAME"; 			  //초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 								  //Mapping Column Index
        		arrParam[9] = "fn_PopAfter"
        		

        	// 입력항목 - 메뉴ID(Popup)
        	} else if ((obj.name == "imgHelpUPME_IDXX") || (obj.name == "edtUPME_NAME")) {
        	
        		arrParam[0] = "TMM0002"; 							  
        		arrParam[1] = ""; 									  
        		arrParam[2] = this.fnc_Trim(this.edtUPME_NAME.value); 
        		arrParam[3] = "N"; 									  
        		arrParam[4] = "edtUPME_NAME"; 						  
        		arrParam[5] = "edtUPME_IDXX,edtUPME_NAME" 			  
        		arrParam[6] = "0,1"; 								  
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        this.fn_PopAfter = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtMENU_NAME.value)) < 1) {
        		this.dsVI_MENUXM.setColumn(this.dsVI_MENUXM.rowposition, "MENU_NAME", arrRtn[1]);
        	}
        	
        }

        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsVI_MENUXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsVI_MENUXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsVI_MENUXM.getColumn(this.dsVI_MENUXM.rowposition, "MENU_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsVI_MENUXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsVI_MENUXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "MENU_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메뉴 ID", this.dsVI_MENUXM, i, this.edtMENU_IDXX, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "MENU_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메뉴명", this.dsVI_MENUXM, i, this.edtMENU_NAME, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템", this.dsVI_MENUXM, i, this.cmbSYST_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "SORT_ORDR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "정렬순서", this.dsVI_MENUXM, i, this.edtSORT_ORDR, '');
        		}

        		if (this.dsVI_MENUXM.getColumn(i, "MENU_LEVL") != "1") {
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "UPME_IDXX"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "상위메뉴", this.dsVI_MENUXM, i, this.edtUPME_IDXX, '');
        			}
        			
        			if (this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "MENU_IDXX")) == this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "UPME_IDXX"))) {
        				return this.fnc_CheckPostAction("TMM160", "메뉴ID,상위메뉴ID", this.dsVI_MENUXM, i, this.edtUPME_IDXX, '');
        			}
        			
        		}

        		if (this.dsVI_MENUXM.getColumn(i, "MNUT_YSNO") == "0") {
        			if (this.fnc_Length(this.fnc_Trim(this.dsVI_MENUXM.getColumn(i, "PROG_IDXX"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "프로그램 ID", this.dsVI_MENUXM, i, this.edtPROG_NAME, '');
        			}
        		}
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 메뉴트리 조회
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value)); //시스템구분
        		

        	// 메뉴트리 조회
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        		//메뉴가 폴더인 경우 그대로, 프로그램인 경우 상위폴더를 준다.(끝에서 3개 자름)
        		var vSORT_IDXX = this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition,"SORT_IDXX");
        		
        		if (this.dsTREE_VIEW.rowcount == 0) {
        			vSORT_IDXX = "X";
        		} else if(this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition, "MNUT_YSNO") !== "1"){
        			vSORT_IDXX = this.fnc_SubStr(vSORT_IDXX, 0, this.fnc_Length(vSORT_IDXX) - 3);
        		}
        		
        		sReturnString += " SORT_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(vSORT_IDXX)); //정렬ID

        	// 메뉴정보 저장
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value)); //시스템구분
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsTREE_VIEW.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		if (this.dsTREE_VIEW.getRowCount() > 0) {
        			this.tvTREE_VIEW.setTreeStatus(0, true);
        		}
        		
        	} else if (sMethodName == "SEARCH01") {
        		
        		var sMenu_Idxx = this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition, "MENU_IDXX");
        		var iRow = this.dsVI_MENUXM.findRow("MENU_IDXX", sMenu_Idxx);
        		
        		//저장 후 조회시, 저장한 로우로 포커스
        		if (this.fnc_Length(this.aKeyValue[1]) > 0) iRow = this.dsVI_MENUXM.findRowExpr("MENU_IDXX=='" + this.aKeyValue[1] + "'");
        		
         		if (iRow < 0) iRow = 0;

         		this.grdVI_MENUXM.selectRow(iRow);
         		this.dsVI_MENUXM.set_rowposition(iRow);
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		var iRow = this.dsTREE_VIEW.findRowExpr("SYST_CODE=='" + this.aKeyValue[0] + "'");
        		var iTreeRow = this.tvTREE_VIEW.getTreeRow(iRow);
        		if (iTreeRow < 0) iTreeRow = 0;
        		
         		this.tvTREE_VIEW.selectRow(iTreeRow);
         		this.dsTREE_VIEW.set_rowposition(iRow);
         		
         		this.aKeyValue[0] = "";
         		this.aKeyValue[1] = "";
         		
        		if (this.dsTREE_VIEW.getRowCount() > 0) {
        			this.tvTREE_VIEW.setTreeStatus(iTreeRow, true);
        		}
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "COMBO,cmbSYST_CODE,dsSYST_CODE,0";
        		arrParam[2] = "GRID,grdVI_MENUXM,dsSYST_CODE,SYST_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtMENU_IDXX, false);
        	} else {
        		this.fnc_SetReadonly(this.edtMENU_IDXX, true);
        	}
        		
        	if (obj.getColumn(obj.rowposition, "MNUT_YSNO") == "0") {
        		this.fnc_SetReadonly(this.edtPROG_NAME, false);
        	} else {
        		this.fnc_SetReadonly(this.edtPROG_NAME, true);
        	}
        	
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*----------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.dsVI_MENUXM_oncolumnchanged = function(obj,e) {
        	
        	if (e.newvalue == e.oldvalue) return;
        	
        	if (e.columnid == "MNUT_YSNO") {
        		if (e.newvalue == "0") {
        			this.fnc_SetReadonly(this.edtPROG_NAME, false);
        		} else {
        			this.fnc_SetReadonly(this.edtPROG_NAME, true);
        		}
        	}
        	
        }

        /*------------------------------+
         | Menu Level 변경 시 Root 설정 |
         +------------------------------*/
        this.fn_MenuLevelChange = function (obj,e) {

        	// Menu Level이 1이면 Root 설정
        	if (e.postvalue == "1") {
        	
        		this.edtUPME_IDXX.set_value("ROOT");
        		this.fnc_SetReadonly(this.edtUPME_IDXX, true);
        	
        	} else {
        	
        		if (this.edtUPME_IDXX.value == "ROOT") {
        			this.edtUPME_IDXX.set_value("");
        		}
        		this.fnc_SetReadonly(this.edtUPME_IDXX, false);
        	
        	}
        }

        /*---------------------------------+
         | Tree Grid 더블 클릭 이벤트 처리 |
         +---------------------------------*/
        this.tvTREE_VIEW_oncelldblclick = function (obj,e) {

        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1) {
        		this.treeStatus = 0;
        		return;
        	}

        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) {
        	
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		if (obj.isTreeCollapsedRow(childRow, true)) {
        			obj.setTreeStatus(gridRow, true);
        		} else {
        			obj.setTreeStatus(gridRow, false);
        		}
        	}
        	this.treeStatus = 0;
        }

        this.tvTREE_VIEW_cantreestatuschange = function (obj,e) {

        	//this.treeStatus = 1;

        }

        
        /*-------------------------+
         |  프로그램 목록 변경되기 전에 바뀐거 있는지체크  |
         +-------------------------*/
        this.dsTREE_VIEW_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0 || e.oldrow < 0) return;

        	if (this.fnc_DatasetChangeCheck("dsVI_MENUXM") == false) return;
        	
        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsVI_MENUXM");
        	}
        }

        this.dsTREE_VIEW_onrowposchanged = function(obj,e) {

        	this.fnc_DatasetClear("dsVI_MENUXM");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsVI_MENUXM=dsVI_MENUXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.grdVI_MENUXM.setFocus();
        	
        }

        this.cmbSHRSYST_CODE_onitemchanged = function(obj,e) {
        	this.fn_Search();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsVI_MENUXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsVI_MENUXM.addEventHandler("oncolumnchanged", this.dsVI_MENUXM_oncolumnchanged, this);
            this.dsTREE_VIEW.addEventHandler("canrowposchange", this.dsTREE_VIEW_canrowposchange, this);
            this.dsTREE_VIEW.addEventHandler("onrowposchanged", this.dsTREE_VIEW_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.tvTREE_VIEW.addEventHandler("oncelldblclick", this.tvTREE_VIEW_oncelldblclick, this);
            this.tvTREE_VIEW.addEventHandler("cantreestatuschange", this.tvTREE_VIEW_cantreestatuschange, this);
            this.edtMENU_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMENU_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROG_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPROG_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtPROG_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROG_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtUPME_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpUPME_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPME_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPME_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRSYST_CODE.addEventHandler("onitemchanged", this.cmbSHRSYST_CODE_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
