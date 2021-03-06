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
                this.set_name("YEAA0040");
                this.set_titletext("세액근거표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsYEA_DED_TYPE_CD</Col><Col id=\"CODEID\">YEA_00003</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/><Col id=\"REMK\">산출구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_YETABS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TAX_STD_SEQ\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DED_TYPE_CD\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DED_ITEM_CD\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DED_ITEM_NM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DED_CONTENT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_A_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_B_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_C_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_D_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_E_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NOTE\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SORT_ORD\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "237", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnDATA_COPY", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("전년도 근거 복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("세액근거표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 연말정산 > 세액근거표");
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

            obj = new Grid("grdYEA_YETABS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsYEA_YETABS");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"공제구분\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"공제항목코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"공제항목명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"공제내용\"/><Cell col=\"4\" text=\"A값\"/><Cell col=\"5\" text=\"B값\"/><Cell col=\"6\" text=\"C값\"/><Cell col=\"7\" text=\"D값\"/><Cell col=\"8\" text=\"E값\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"정렬\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:YEA_DED_TYPE_CD\" suppress=\"bind:YEA_DED_TYPE_CD\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:YEA_DED_ITEM_CD\" editlimit=\"4\" editimemode=\"hangul\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_DED_ITEM_NM\" wordwrap=\"char\" editimemode=\"hangul\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_DED_CONTENT\" wordwrap=\"char\" editimemode=\"hangul\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_A_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_B_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_C_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_D_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_E_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"9\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_NOTE\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_SORT_ORD\" mask=\"###\" maskchar=\" \" editlimit=\"20\" editlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("31");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("spnSHRYEA_STD_YY", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("세액근거표");
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
        this.addIncludeScript("YEAA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("YEAA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0040 세액근거표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.28		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0040";

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
        			
        	// 조회조건 초기값 세팅
        	if ( nexacro.toNumber(this.fnc_Today().substr(4, 2)) < 3 ) {
        	    var toYear = nexacro.toNumber(this.fnc_Today().substr(0, 4)) - 1;
        	    
        		this.spnSHRYEA_STD_YY.set_value(toYear.toString()); 
        	} else {
        		this.spnSHRYEA_STD_YY.set_value(this.fnc_Today().substr(0, 4)); 
        	}
        	/*
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));	
        	this.spnSHRYEA_STD_YY.set_value(sNowDate);
        	this.spnSHRYEA_STD_YY.setFocus();
        	*/
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
        	this.fnc_DatasetClear("dsYEA_YETABS");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsYEA_YETABS=dsYEA_YETABS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {    
            if (this.fnc_Length(this.fnc_Trim(this.spnSHRYEA_STD_YY.value)) < 4 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.spnSHRYEA_STD_YY);
            }
            
        	var iRow = this.dsYEA_YETABS.insertRow(this.dsYEA_YETABS.rowposition + 1);
        	this.dsYEA_YETABS.set_rowposition(iRow); 	
        	this.dsYEA_YETABS.setColumn(iRow, "YEA_STD_YY", this.fnc_SubStr(this.spnSHRYEA_STD_YY.value,0 ,4));
        	this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_TYPE_CD"));
            this.grdYEA_YETABS.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsYEA_YETABS.deleteMultiRows(this.grdYEA_YETABS.getSelectedDatasetRows());
        	this.grdYEA_YETABS.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsYEA_YETABS");
        	this.grdYEA_YETABS.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsYEA_YETABS=dsYEA_YETABS:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_YETABS", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsYEA_YETABS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

            if (this.fnc_Length(this.fnc_Trim(this.spnSHRYEA_STD_YY.value)) < 4 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.spnSHRYEA_STD_YY);
            }
            
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsYEA_YETABS.getRowCount() < 1) {
        		this.fnc_Alert("삭제 할 자료가 없습니다!");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdYEA_YETABS);

        	//if (iSelectRowCount > 1) {
            //    return this.fnc_Confirm("선택된 자료 [ " + iSelectRowCount + " ] 건을 삭제 하시겠습니까?");
        	//} else {
        		var sQuestionText = "공제항목명 : " + this.dsYEA_YETABS.getColumn(this.dsYEA_YETABS.rowposition, "YEA_DED_ITEM_NM");
        		return this.fnc_Confirm("[ " + sQuestionText + " ] 자료를 삭제 하시겠습니까?");
        	//}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {	
        	if (!this.fnc_DatasetChangeCheck("dsYEA_YETABS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	//필수 입력 항목 체크
        	for (var i = 0; i < this.dsYEA_YETABS.getRowCount(); i++) {
                if ( this.fnc_ToUpper(this.dsYEA_YETABS.getRowType(i)) == Dataset.ROWTYPE_NORMAL ) {
                    continue;
                }        
                
                if (this.dsYEA_YETABS.getCaseCount("YEA_DED_TYPE_CD==" + this.fnc_Quote(this.dsYEA_YETABS.getColumn(i, "YEA_DED_TYPE_CD")) 
                        + " && YEA_DED_ITEM_CD==" + this.fnc_Quote(this.dsYEA_YETABS.getColumn(i, "YEA_DED_ITEM_CD"))) > 1) {            
                    this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_ITEM_CD"));
        			return this.fnc_CheckPostAction("YEA001", "공제항목코드", this.dsYEA_YETABS, i, this.grdYEA_YETABS, "YEA_DED_ITEM_CD");
                }        
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_YETABS.getColumn(i, "YEA_DED_TYPE_CD"))) < 1 ) {
                    this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_TYPE_CD"));
        			return this.fnc_CheckPostAction("TMM072", "공제구분", this.dsYEA_YETABS, i, this.grdYEA_YETABS, "YEA_DED_TYPE_CD");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_YETABS.getColumn(i, "YEA_DED_ITEM_CD"))) < 1 ) {
                    this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_ITEM_CD"));
        			return this.fnc_CheckPostAction("TMM072", "공제항목코드", this.dsYEA_YETABS, i, this.grdYEA_YETABS, "YEA_DED_ITEM_CD");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_YETABS.getColumn(i, "YEA_DED_ITEM_NM"))) < 1 ) {
                    this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_ITEM_NM"));
        			return this.fnc_CheckPostAction("TMM072", "공제항목명", this.dsYEA_YETABS, i, this.grdYEA_YETABS, "YEA_DED_ITEM_NM");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_YETABS.getColumn(i, "YEA_DED_CONTENT"))) < 1 ) {
                    this.grdYEA_YETABS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_YETABS, "YEA_DED_CONTENT"));
        			return this.fnc_CheckPostAction("TMM072", "공제내용", this.dsYEA_YETABS, i, this.grdYEA_YETABS, "YEA_DED_CONTENT");
                }
        	
        	}

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 	+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value,0 ,4))); 
        		
        	// 복사 Argument 생성
        	} else if (sKind == 'PROC00') {
        	    var sYEA_STD_YY = this.fnc_ToString(parseInt(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value,0 ,4)) - 1 );
        	    
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " SRC_YEA_STD_YY=" 	+ this.fnc_Quote(sYEA_STD_YY);
        		sReturnString += " TAR_YEA_STD_YY=" 	+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value,0 ,4)));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.stInformation, this.dsYEA_YETABS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_YETABS.getCaseCount("dataset.getRowLevel(currow)==0"));
        			
        	} else if (sMethodName == 'PROC00') {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM130", "복사");
                this.fn_Search();
                
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();		
        		    arrParam[0] = "GRID,grdYEA_YETABS,dsYEA_DED_TYPE_CD,YEA_DED_TYPE_CD";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	} else if (sMethodName == "GetUserComboCode") {
        		
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        this.fn_DataCodeCopy = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsYEA_YETABS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

            if (this.fnc_Length(this.fnc_Trim(this.spnSHRYEA_STD_YY.value)) < 4) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.popCopyYYMM.divYEA_STD_YYMM);
            }
            
            if (this.fnc_Message("YEA003", "기준년도","전년도") == false) return false;
            
            
        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnDATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdYEA_YETABS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onchanged", this.spnSHRYEA_STD_YY_onchanged, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onspin", this.spnSHRYEA_STD_YY_onspin, this);
            this.spnSHRYEA_STD_YY.addEventHandler("oneditclick", this.spnSHRYEA_STD_YY_oneditclick, this);

        };

        this.loadIncludeScript("YEAA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
