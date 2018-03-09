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
                this.set_name("PAYB0080");
                this.set_titletext("건강보험정산적용");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_NHICAD", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"HINC_AMOT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"default\"/><Column id=\"REPC_AMOT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"default\"/><Column id=\"WAGE_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CHKDEL\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"TOT_AMT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_NHICAD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_NHICAD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"116\"/><Column size=\"152\"/><Column size=\"96\"/><Column size=\"92\"/><Column size=\"169\"/><Column size=\"171\"/><Column size=\"144\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급일\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"주민등록번호\"/><Cell col=\"4\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"건강보험정산액\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"노인장기요양보험정산액\"/><Cell col=\"8\" displaytype=\"text\" text=\"합계\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHKDEL\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:PAYX_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:RERN_NUMB\" mask=\"######-#######\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"4\" text=\"bind:EMPL_NUMB\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"20\" editimemode=\"hangul\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:HINC_AMOT\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:REPC_AMOT\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background: ;\" text=\"bind:TOT_AMT\" editlimit=\"0\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('HINC_AMOT')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('REPC_AMOT')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('TOT_AMT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_YYYY", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_mask("####");
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "213", "22", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "101", "0", "94", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("조회년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "205", "71", "41", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "247", "71", "80", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "329", "71", "22", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "352", "71", "100", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("건강보험정산적용");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 급여관리 > 건강보험정산적용");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("26");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("popINSERT", "absolute", "1254", "59", "354", "90", null, null, this);
            obj.style.set_background("URL('theme://images/Div_Pop_Bg.png') stretch 20,20");
            obj.set_cssclass("pdiv_WF_insert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "336", "39", null, null, this.popINSERT);
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("1");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medPAYX_DATE", "absolute", "84", "18", "93", "21", null, null, this.popINSERT);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpWAGE_NAME", "absolute", "179", "18", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopupInput");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtWAGE_NAME", "absolute", "202", "18", "126", "21", null, null, this.popINSERT);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtWAGE_CODE", "absolute", "105", "55", "97", "21", null, null, this.popINSERT);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "206", "56", "74", "24", null, null, this.popINSERT);
            obj.set_taborder("6");
            obj.set_text("업로드");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("Button0", "absolute", "283", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 213, 22, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 354, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("URL('theme://images/Div_Pop_Bg.png') stretch 20,20");
            		p.set_cssclass("pdiv_WF_insert");
            		p.set_visible("false");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건강보험정산적용");
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
        this.addIncludeScript("PAYB0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0080 건강보험정산적용
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.19  	고민주		Initial Created.
         *   2016.10.10  	황치웅		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYB0080"; 

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
        	this.medSHRPAYX_YYYY.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRPAYX_YYYY.setFocus();

        
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
        	this.fnc_DatasetClear("dsPY_NHICAD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_NHICAD=dsPY_NHICAD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_NHICAD.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_NHICAD.insertRow(this.dsPY_NHICAD.rowposition+1);
        	this.dsPY_NHICAD.setColumn(iRow, "HINC_AMOT", 0);	
        	this.dsPY_NHICAD.setColumn(iRow, "REPC_AMOT", 0);	
        	this.fnc_GridSetCellFocus(this.grdPY_NHICAD, "PAYX_DATE");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_NHICAD.getRowCount() - 1 ; i >= 0 ; i -- ){
        			if(this.dsPY_NHICAD.getColumn(i,"CHKDEL") == '1'){
        				this.dsPY_NHICAD.deleteRow(i);
        			}
        		}	
        		this.grdPY_NHICAD.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_NHICAD");
        	this.grdPY_NHICAD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_NHICAD=dsPY_NHICAD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_NHICAD.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_NHICAD", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_NHICAD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_YYYY.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회년도", this.medSHRPAYX_YYYY);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_NHICAD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}
        	
        	var iSelectRowCount = this.dsPY_NHICAD.getCaseCount("CHKDEL == '1'");
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "지급일:" + this.fnc_Trim(this.dsPY_NHICAD.getColumn(this.dsPY_NHICAD.rowposition, "PAYX_DATE"))
        							 ",성명:" + this.fnc_Trim(this.dsPY_NHICAD.getColumn(this.dsPY_NHICAD.rowposition, "EMPL_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_NHICAD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_NHICAD.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_NHICAD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICAD.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_NHICAD, i, this.grdPY_NHICAD, "EMPL_NUMB");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICAD.getColumn(i, "PAYX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급일", this.dsPY_NHICAD, i, this.grdPY_NHICAD, "PAYX_DATE");
        		}
        	}
        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentsType) {

        	var sReturnString;
        	var sRERN_NUMB = this.fnc_Replace(sContentsType, "-", "");

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_YYYY.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	
        	} else if (sKind == "SEARCH99") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " RERN_NUMB=" + this.fnc_Quote(sRERN_NUMB);
        		sReturnString += " STDS_YYYY=" + this.fnc_Quote(this.medSHRPAYX_YYYY.value);
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	
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
        		this.fnc_Information(this.stInformation, this.dsPY_NHICAD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_NHICAD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_NHICAD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} 

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_NHICAD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICAD, "PAYX_DATE"), "edittype", "text");
        		this.grdPY_NHICAD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICAD, "EMPL_NAME"), "edittype", "text");
        		
        	} else {
        		this.grdPY_NHICAD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICAD, "PAYX_DATE"), "edittype", "none");
        		this.grdPY_NHICAD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICAD, "EMPL_NAME"), "edittype", "none");
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	//엑셀업로드 - 지급일 & 급여코드 조회
        	} else if ((obj.name == "imgHelpWAGE_NAME") || (obj.name == "edtWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = "";
        		arrParam[3] = "N";
        		arrParam[4] = "popINSERT.edtWAGE_NAME";
        		arrParam[5] = "popINSERT.medPAYX_DATE,popINSERT.edtWAGE_CODE,popINSERT.edtWAGE_NAME";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdPY_NHICAD") {
        	
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" ) {
        			arrParam[0] = "HRM0002";
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_NHICAD";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,RERN_NUMB";
        			arrParam[6] = "0,1,32";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}else if (sColumnID == "PAYX_DATE" || this.fnc_getGridHelpColName(obj, sFromDs) == "PAYX_DATE") {
        			arrParam[0] = "PAY0001";
        			arrParam[1] = "";
        			arrParam[2] = "PAYX_DATE";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_NHICAD";
        			arrParam[5] = "PAYX_DATE,WAGE_CODE";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        //그리드 팝업 시 필요한 이벤트
        this.dsPY_NHICAD_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_NHICAD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "PAYX_DATE") this.fn_HelpDialoge(this.grdPY_NHICAD, "YES" ,e.oldvalue, e.columnid);
        	
        	if (e.columnid == "HINC_AMOT" || e.columnid == "REPC_AMOT") {
        		var sHINC_AMOT = nexacro.toNumber(this.dsPY_NHICAD.getColumn(e.row, "HINC_AMOT"));
        		var sREPC_AMOT = nexacro.toNumber(this.dsPY_NHICAD.getColumn(e.row, "REPC_AMOT"));
        		this.dsPY_NHICAD.setColumn(e.row, "TOT_AMT", sHINC_AMOT+sREPC_AMOT);
        		
        	}

        }

        
        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {
        	if ( this.popINSERT.visible == true ) {
        		this.fn_Popup_close();
        		return;
        	}
        	this.fn_Popup();
        }

        
        this.fn_ExcelSuccess = function (obj,e) {

        	this.fn_Popup_close();
        	
        	this.setWaitCursor(false);
        	this.dsPY_NHICAD.set_enableevent(false);
        	this.dsPY_NHICAD.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        	
        		if ( this.objDsImportTemp.getCaseCount(" Column1 == '" + this.objDsImportTemp.getColumn(i, 1) + "'" ) > 1 ) {
        			this.fnc_Message("TMM077", "주민번호 " + this.objDsImportTemp.getColumn(i, 1));
        			return false;
        		}
        	}
        	
        	this.grdPY_NHICAD.set_enableredraw(false);
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		
        		var iRow = this.dsPY_NHICAD.addRow();
        		this.dsPY_NHICAD.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		var sMethodName = "SEARCH99";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        		var sArgument   = this.fn_CreateArgument(sMethodName, this.objDsImportTemp.getColumn(i, 1));
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		
        		this.dsPY_NHICAD.setColumn(iRow, "RERN_NUMB", this.dsHR_MASTXM.getColumn(0, "RERN_NUMB"));  
        		this.dsPY_NHICAD.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(0, "EMPL_NUMB"));  
        		this.dsPY_NHICAD.setColumn(iRow, "EMPL_NAME", this.dsHR_MASTXM.getColumn(0, "EMPL_NAME")); 
        		this.dsPY_NHICAD.setColumn(iRow, "HINC_AMOT", this.objDsImportTemp.getColumn(i, 2)); 
        		this.dsPY_NHICAD.setColumn(iRow, "REPC_AMOT", this.objDsImportTemp.getColumn(i, 3)); 
        		this.dsPY_NHICAD.setColumn(iRow, "PAYX_DATE", this.fnc_Trim(nexacro.replaceAll(this.popINSERT.medPAYX_DATE.text, "-", ""))); 
        		this.dsPY_NHICAD.setColumn(iRow, "WAGE_CODE", this.popINSERT.edtWAGE_CODE.text); 
        		
        	}
        	
        	this.grdPY_NHICAD.set_enableredraw(true);
        	this.objDsImportTemp.clear();
        	this.dsPY_NHICAD.set_updatecontrol(true);
        	this.dsPY_NHICAD.set_enableevent(true);

        	this.dsPY_NHICAD.set_rowposition(0);
        	this.grdPY_NHICAD.setFocus();
        	
        	this.stInformation.set_text("[" + (this.dsPY_NHICAD.rowcount + "]건의 데이터를 로드 했습니다."));
        	
        }

        this.grdPY_NHICAD_onheadclick = function(obj,e) {
        	var sCol = "CHKDEL";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }

        
        /*---------------+
         | 입력 팝업 열기 |
         +----------------*/
        this.fn_Popup = function(obj,e){	
        	this.popINSERT.medPAYX_DATE.set_value("");
        	this.popINSERT.edtWAGE_CODE.set_value("");
        	this.popINSERT.edtWAGE_NAME.set_value("");
        	this.popINSERT.set_left(97);
        	this.popINSERT.set_visible(true);
        	
        }
        	
        /*---------------+
         | 입력 팝업 닫기 |
         +----------------*/
        this.fn_Popup_close = function(obj,e) {
        	this.popINSERT.set_visible(false);
        	
        }

        /*---------------+
         | 입력 처리 |
         +----------------*/
        this.popINSERT_btnINSERT_onclick = function(obj,e) {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.edtWAGE_NAME.text)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.popINSERT.medPAYX_DATE);
        	}
        	
        	this.fnc_DatasetClear("dsPY_NHICAD");
        	this.fnc_ExcelUpload("dsPY_NHICAD", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_NHICAD.addEventHandler("oncolumnchanged", this.dsPY_NHICAD_oncolumnchanged, this);
            this.dsPY_NHICAD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_MASTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_NHICAD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_NHICAD.addEventHandler("onheadclick", this.grdPY_NHICAD_onheadclick, this);
            this.medSHRPAYX_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT.medPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.imgHelpWAGE_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.edtWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_onclick, this);
            this.popINSERT.Button0.addEventHandler("onclick", this.fn_Popup_close, this);

        };

        this.loadIncludeScript("PAYB0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
