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
                this.set_name("WFMC0010");
                this.set_titletext("써클등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_CLUBBS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLUB_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLUB_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CLAC_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DDUC_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CRTE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WAST_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("써클등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_CLUBBS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsCW_CLUBBS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"359\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"써클코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"써클명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"써클활동\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"공제금액\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"생성일\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"폐기일\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CLUB_CODE\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CLUB_NAME\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CLAC_NAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DDUC_AMOT\" mask=\"###,###,##0\" editlimit=\"0\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"expr:CRTE_DATE=='' ? 'normal' : 'date'\" edittype=\"date\" text=\"bind:CRTE_DATE\"/><Cell col=\"5\" displaytype=\"expr:WAST_DATE=='' ? 'normal' : 'date'\" edittype=\"date\" text=\"bind:WAST_DATE\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCRTE_DATE2", "absolute", "200", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("109");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "185", "71", "14", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCRTE_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new CheckBox("chkSHRUSE_YN", "absolute", "340", "71", "208", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("사용중인 써클만 조회");
            obj.set_value("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("써클등록");

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
        this.addIncludeScript("WFMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMC0010.xfdl", function() {
         /***************************************************************************************************
         * # Program : 써클기준등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		박성진			Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
          
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMC0010";

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
        	this.calSHRCRTE_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6) + '01');
        	this.calSHRCRTE_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	this.calSHRCRTE_DATE2.setFocus();
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
        	this.fnc_DatasetClear('dsCW_CLUBBS');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_CLUBBS=dsCW_CLUBBS";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_CLUBBS.setFocus();
        }

        
        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//var iRow = this.dsCW_CLUBBS.insertRow(this.dsCW_CLUBBS.rowposition + 1);
        	var iRow = this.dsCW_CLUBBS.addRow();
        	this.dsCW_CLUBBS.set_rowposition(iRow);
        	this.dsCW_CLUBBS.setColumn(iRow, "CRTE_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsCW_CLUBBS.setColumn(iRow, "WAST_DATE", '');
        	this.dsCW_CLUBBS.setColumn(iRow, "DDUC_AMOT", 10000);
        	this.grdCW_CLUBBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_CLUBBS, 1));
        	this.grdCW_CLUBBS.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsCW_CLUBBS.deleteRow(this.dsCW_CLUBBS.rowposition);
        	this.grdCW_CLUBBS.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_CLUBBS");
        	this.grdCW_CLUBBS.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_CLUBBS=dsCW_CLUBBS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_CLUBBS.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_CLUBBS", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_CLUBBS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if ( nexacro.toNumber(this.calSHRCRTE_DATE2.value - this.calSHRCRTE_DATE1.value) < 0 ) {
        		return this.fnc_SearchCheckPostAction("TMM042", "기간 시작일, 종료일", this.calSHRCRTE_DATE1);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_CLUBBS.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsCW_CLUBBS.getColumn(this.dsCW_CLUBBS.rowposition, "CLUB_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_CLUBBS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_CLUBBS.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBBS.getColumn(i, "CLUB_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "써클명", this.dsCW_CLUBBS, i, this.dsCW_CLUBBS, 'CLUB_NAME');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBBS.getColumn(i, "DDUC_AMOT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제금액", this.dsCW_CLUBBS, i, this.dsCW_CLUBBS, 'DDUC_AMOT');
        		}
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBBS.getColumn(i, "CRTE_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "생성일", this.dsCW_CLUBBS, i, this.dsCW_CLUBBS, 'CRTE_DATE');
        		}			
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBBS.getColumn(i, "WAST_DATE"))) > 0) {
        			if (nexacro.toNumber(this.dsCW_CLUBBS.getColumn(i, "WAST_DATE") - this.dsCW_CLUBBS.getColumn(i, "CRTE_DATE")) < 0) {
        				this.fnc_Message("WFM010");
        				return false;
        			}
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CRTE_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCRTE_DATE1.value));
        		sReturnString += " CRTE_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCRTE_DATE2.value));		
        		
        		if(this.chkSHRUSE_YN.value){
        			sReturnString += " USE_YN=" + this.fnc_Quote('Y');	
        		}

        	} else if (sKind == 'SAVE00') {
        	
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsCW_CLUBBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_CLUBBS.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsCW_CLUBBS);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	//해당없음
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_CLUBBS.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_CLUBBS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRCRTE_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCRTE_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("WFMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
