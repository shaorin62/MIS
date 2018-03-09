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
                this.set_name("TMMA0030");
                this.set_titletext("메시지 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_MESSXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MSGE_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MSEN_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MSKN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MSDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">MSKN_CODE</Col><Col id=\"DSNAME\">dsMSKN_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">MSDV_CODE</Col><Col id=\"DSNAME\">dsMSDV_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "22", null, null, this);
            obj.set_text("메시지명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMSGE_CNTT", "absolute", "96", "71", "250", "22", null, null, this);
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "176", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_MESSXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_MESSXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"350\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"메시지코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"메시지내용\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"메시지영문내용\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"메시지종류\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"메시지구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" editfilter=\"upper,number,char\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:MSGE_CODE\" editlimit=\"0\" editimemode=\"alpha\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MSGE_CNTT\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MSEN_CNTT\" editimemode=\"alpha\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MSKN_CODE\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MSDV_CODE\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("메시지 관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 공통관리 > 메시지 관리");
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

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("36");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메시지 관리");
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
        this.addIncludeScript("TMMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0030 메시지 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.06.24		chg			Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0030"; //해당 Form에서 사용 할 Package 명

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
        	this.edtSHRMSGE_CNTT.setFocus();
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
        	this.fnc_DatasetClear("dsTM_MESSXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_MESSXM=dsTM_MESSXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_MESSXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTM_MESSXM.insertRow(this.dsTM_MESSXM.rowposition + 1);
        	this.dsTM_MESSXM.set_rowposition(iRow);
        	this.fnc_GridSetCellFocus(this.grdTM_MESSXM, 0);
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTM_MESSXM.deleteRow(this.dsTM_MESSXM.rowposition);
        	this.grdTM_MESSXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_MESSXM");
        	this.grdTM_MESSXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_MESSXM=dsTM_MESSXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_MESSXM.setFocus();
        	
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_MESSXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_MESSXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_MESSXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_MESSXM.getColumn(this.dsTM_MESSXM.rowposition, "MSGE_CNTT");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_MESSXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_MESSXM.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MESSXM.getColumn(i, "MSGE_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메시지 코드", this.dsTM_MESSXM, i, this.grdTM_MESSXM, "MSGE_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MESSXM.getColumn(i, "MSGE_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메시지 내용", this.dsTM_MESSXM, i, this.grdTM_MESSXM, "MSGE_CNTT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MESSXM.getColumn(i, "MSKN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메시지 종류", this.dsTM_MESSXM, i, this.grdTM_MESSXM, 'MSKN_CODE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MESSXM.getColumn(i, "MSDV_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메시지 구분", this.dsTM_MESSXM, i, this.grdTM_MESSXM, 'MSDV_CODE');
        		}
        	
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " MSGE_CNTT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMSGE_CNTT.value));

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTM_MESSXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_MESSXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsTM_MESSXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdTM_MESSXM,dsMSKN_CODE,MSKN_CODE";
        		arrParam[1] = "GRID,grdTM_MESSXM,dsMSDV_CODE,MSDV_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_MESSXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_MESSXM, "MSGE_CODE"), "edittype", "normal");
        	} else {
        		this.grdTM_MESSXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_MESSXM, "MSGE_CODE"), "edittype", "none");
        	}

        }

        /*--------------------------------------+
         |  조회조건 '메시지명' 키 입력시   |
         +--------------------------------------*/
        this.edtSHRMSGE_CNTT_onkeydown = function(obj,e) {
        	
        	if (e.keycode == 13) this.fn_Search();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_MESSXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRMSGE_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMSGE_CNTT.addEventHandler("onkeydown", this.edtSHRMSGE_CNTT_onkeydown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
