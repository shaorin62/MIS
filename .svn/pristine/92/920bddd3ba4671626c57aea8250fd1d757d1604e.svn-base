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
                this.set_name("FAME0020");
                this.set_titletext("전표재집계및이월관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MAMNTM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SELE_CHEK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_YYMM\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"MANT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "216", "349", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\"/><Column size=\"89\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"240\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계월\"/><Cell col=\"2\" displaytype=\"text\" text=\"집계여부\"/><Cell col=\"3\" displaytype=\"text\" text=\"집계자\"/><Cell col=\"4\" displaytype=\"text\" text=\"집계일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SELE_CHEK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_YYMM\" mask=\"####-##\"/><Cell col=\"2\" displaytype=\"checkbox\" style=\"align: center;\" text=\"bind:MANT_YSNO\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:UPDT_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "72", "21", null, null, this);
            obj.set_text("회계연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("집계처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROCYEAR", "absolute", "162", "35", "74", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("이월처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROCREV", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("집계취소");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("전표재집계및이월관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표처리 > 전표마감일관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("18");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("21");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_YEAR", "absolute", "96", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표재집계및이월관리");
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
        this.addIncludeScript("FAME0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0020.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAME0020 전표재집계및이월관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAME0020"; 

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.calSHRACCT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        	this.grdTA_MAMNTM.setFocus();
        	this.calSHRACCT_YEAR.setFocus();
        }
         
        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_MAMNTM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항   |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MAMNTM", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }
         
        /*--------------------------------------+
         |  11.단축키 처리(Form KeyDown)       |
         +--------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때      |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------+
         |  조회 여부 체크!   |
         +----------------------*/
        this.fn_SearchItemCheck = function () {

        	if ((this.fnc_DatasetChangeCheck("dsTA_MAMNTM"))) return this.fnc_Message("TMM023");

        	if(this.fnc_Length(this.fnc_Trim(this.calSHRACCT_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계연도", this.calSHRACCT_YEAR);	
        	}
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (){
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){
        	
        	if (this.dsTA_MAMNTM.rowcount < 1) return false;
        	
        	if (this.dsTA_MAMNTM.getCaseCount("SELE_CHEK == '1'") < 1) {
        		this.fnc_Message("TMM010");
        		return false;
        	}
        	
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind){
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));
        		
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));

        	} else if (sKind == "PROC01") {
        		
        		// 년 이월처리
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));

        	} else if (sKind == "PROC02") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));
        	}

        	return sReturnString;

        }

        /*----------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +----------------------------------------*/
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

        /*--------------------------------------+
         |  Transaction 후 Post Process!       |
         +--------------------------------------*/
        this.fn_PostProcess = function (sMethodName){
        	
        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_MAMNTM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MAMNTM.rowcount);
        	
        	} else if (sMethodName == "PROC01") {
        		
        		// 재집계 처리 
        		this.fnc_Message("TMM300", '재집계 처리 되었습니다.');
        		
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC02") {	
        		
        		// 재집계 취소 
        		this.fnc_Message("TMM300", '재집계 취소 되었습니다.');
        		
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC00") {		
        		
        		// 연이월 처리 
        		this.fnc_Message("TMM300", '연이월 처리 되었습니다.');
        		
        		this.fn_Search();	
        		
        	} 
        	
        }

         //그리드 해더 체크박스 클릭 이벤트
        this.grdTA_MAMNTM_onheadclick = function (obj,e){

        	if (this.dsTA_MAMNTM.getRowCount() < 1) {
        		this.fnc_Message("TMM141");
        		return;
        	}
        	
        	var sCol = "SELE_CHEK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                               *
         **************************************************************************************************/

        // 집계처리
        this.btn_PROC_OnClick = function (obj,e){
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "PROC01";
        	var sInDataSet  = "dsTA_MAMNTM=dsTA_MAMNTM:U";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        }

        // 집계취소
        this.btn_PROCREV_OnClick = function (obj,e){
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "PROC02";
        	var sInDataSet  = "dsTA_MAMNTM=dsTA_MAMNTM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        	
        }

        // 이월처리
        this.btn_PROCYEAR_OnClick = function (obj,e){
        	
        	if (this.fnc_Left(this.fnc_Trim(this.calSHRACCT_YEAR.value), 4) <= this.fnc_SubStr(application.GBL_SYSTDT, 0, 4) - 1) {
        		this.fnc_Message("FAM003", application.GBL_SYSTDT);
        		this.calSHRACCT_YEAR.setFocus(); //예산년월
        		return false; 
        	}

        	var sMSG = this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "년도 자료를 " + (nexacro.toNumber(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4)) + 1) + "년도로 이월 ";

        	if (!this.fnc_Message("TMM061", sMSG)) return;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsTA_MAMNTM=dsTA_MAMNTM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_MAMNTM.addEventHandler("onheadclick", this.grdTA_MAMNTM_onheadclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_PROCYEAR.addEventHandler("onclick", this.btn_PROCYEAR_OnClick, this);
            this.btn_PROCREV.addEventHandler("onclick", this.btn_PROCREV_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRACCT_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAME0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
