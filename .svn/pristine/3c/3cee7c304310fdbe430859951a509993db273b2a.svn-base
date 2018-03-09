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
                this.set_name("YEAA0030");
                this.set_titletext("간이세액조견표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsYEA_STD_YYMM</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"PARAM\">기준년월</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">YEAA0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_SIPLTX", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YYMM\" size=\"6\" type=\"STRING\"/><Column id=\"YEA_MORE_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_LESS_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_INCM_SETN\" size=\"50\" type=\"STRING\"/><Column id=\"YEA_NORMAL01_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL02_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL03_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL04_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL05_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL06_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL07_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL08_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL09_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL10_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NORMAL11_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD03_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD04_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD05_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD06_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD07_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD08_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD09_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD10_AMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"YEA_MULTI_CHILD11_AMT\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "105", "267", "23", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("간이세액조견표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 연말정산 > 간이세액조견표");
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

            obj = new Grid("grdYEA_SIPLTX", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("23");
            obj.set_binddataset("dsYEA_SIPLTX");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"월급여액(천원)[비과세제외]\"/><Cell col=\"2\" colspan=\"11\" text=\"공제대상가족의 수\"/><Cell row=\"1\" text=\"이상\"/><Cell row=\"1\" col=\"1\" text=\"미만\"/><Cell row=\"1\" col=\"2\" text=\"1인\"/><Cell row=\"1\" col=\"3\" text=\"2인\"/><Cell row=\"1\" col=\"4\" text=\"3인\"/><Cell row=\"1\" col=\"5\" text=\"4인\"/><Cell row=\"1\" col=\"6\" text=\"5인\"/><Cell row=\"1\" col=\"7\" text=\"6인\"/><Cell row=\"1\" col=\"8\" text=\"7인\"/><Cell row=\"1\" col=\"9\" text=\"8인\"/><Cell row=\"1\" col=\"10\" text=\"9인\"/><Cell row=\"1\" col=\"11\" text=\"10인\"/><Cell row=\"1\" col=\"12\" text=\"11인\"/></Band><Band id=\"body\"><Cell style=\"align:right;\" text=\"bind:YEA_MORE_AMT\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:YEA_LESS_AMT\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:YEA_NORMAL01_AMT\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:YEA_NORMAL02_AMT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:YEA_NORMAL03_AMT\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:YEA_NORMAL04_AMT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:YEA_NORMAL05_AMT\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:YEA_NORMAL06_AMT\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:YEA_NORMAL07_AMT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:YEA_NORMAL08_AMT\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:YEA_NORMAL09_AMT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:YEA_NORMAL10_AMT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:YEA_NORMAL11_AMT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "107", "384", "21", "25", null, this);
            obj.set_taborder("25");
            obj.set_text("일괄등록시 엑셀자료 10,000 이상은 10,000/10,001 로 변경하여 등록");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYEA_STD_YYMM", "absolute", "96", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("29");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("간이세액조견표");
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
        this.addIncludeScript("YEAA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("YEAA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0030 간이세액조견표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.28		안윤준		Initial Created.
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
        this.sBUTTONLIST  = "TTFFFTTF";
        this.sPACKAGENAME = "YEAA0030";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.cmbSHRYEA_STD_YYMM.setFocus();
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
        	this.fnc_DatasetClear("dsYEA_SIPLTX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsYEA_SIPLTX=dsYEA_SIPLTX";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsYEA_SIPLTX=dsYEA_SIPLTX:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_SIPLTX", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsYEA_SIPLTX")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsYEA_SIPLTX")) {
        		this.fnc_Message("TMM003");
        		return false;
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
        		sReturnString += " YEA_STD_YYMM=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)); 
         		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YYMM=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)); 
        		
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
        		this.fnc_Information(this.stInformation, this.dsYEA_SIPLTX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_SIPLTX.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRYEA_STD_YYMM,dsYEA_STD_YYMM,0";
        			

        		this.fnc_UserComboInnerBind(arrParam);

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
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        }

        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.btnExcelUpload_onclick = function(obj,e) {
        	this.fnc_DatasetClear("dsYEA_SIPLTX");
        	this.fnc_ExcelUpload("dsYEA_SIPLTX", "Sheet1", "A4", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsYEA_SIPLTX.set_enableevent(false);
        	this.dsYEA_SIPLTX.set_updatecontrol(false);
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		
        		var iRow = this.dsYEA_SIPLTX.addRow();
        		var sYEA_INCM_SETN = this.objDsImportTemp.getColumn(i, 0) + "천원 이상  " +  this.objDsImportTemp.getColumn(i, 1) + "천원 미만";
        		this.dsYEA_SIPLTX.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_STD_YYMM"	, this.cmbSHRYEA_STD_YYMM.value); //YEA_기준년월
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_MORE_AMT"	, this.objDsImportTemp.getColumn(i, 0)); //YEA_이상금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_LESS_AMT"	, this.objDsImportTemp.getColumn(i, 1)); //YEA_미만금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_INCM_SETN"	, sYEA_INCM_SETN); //YEA_소득구간
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL01_AMT", this.objDsImportTemp.getColumn(i, 2)); //YEA_일반01금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL02_AMT", this.objDsImportTemp.getColumn(i, 3)); //YEA_일반02금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL03_AMT", this.objDsImportTemp.getColumn(i, 4)); //YEA_일반03금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL04_AMT", this.objDsImportTemp.getColumn(i, 5)); //YEA_일반04금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL05_AMT", this.objDsImportTemp.getColumn(i, 6)); //YEA_일반05금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL06_AMT", this.objDsImportTemp.getColumn(i, 7)); //YEA_일반06금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL07_AMT", this.objDsImportTemp.getColumn(i, 8)); //YEA_일반07금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL08_AMT", this.objDsImportTemp.getColumn(i, 9)); //YEA_일반08금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL09_AMT", this.objDsImportTemp.getColumn(i, 10)); //YEA_일반09금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL10_AMT", this.objDsImportTemp.getColumn(i, 11)); //YEA_일반10금액
        		this.dsYEA_SIPLTX.setColumn(iRow, "YEA_NORMAL11_AMT", this.objDsImportTemp.getColumn(i, 12)); //YEA_일반11금액
        		
        		if ( this.objDsImportTemp.getColumn(i, 0) == "" && this.objDsImportTemp.getColumn(i, 1) == "" ) {
        			this.dsYEA_SIPLTX.deleteRow(iRow);
        		}
        	}
        	
        	for (var i = this.dsYEA_SIPLTX.getRowCount() - 1; i >= 0; i--) {
        		if ( this.dsYEA_SIPLTX.getColumn(i, "YEA_MORE_AMT") == "" && this.dsYEA_SIPLTX.getColumn(i, "YEA_LESS_AMT") == "" ) {
        			this.dsYEA_SIPLTX.deleteRow(i);
        		}
        	}
        	
        	this.objDsImportTemp.clear();
        	
        	this.dsYEA_SIPLTX.set_updatecontrol(true);
        	this.dsYEA_SIPLTX.set_enableevent(true);
        	
        	this.dsYEA_SIPLTX.set_rowposition(0);
        	this.grdYEA_SIPLTX.setFocus();
        	
        	this.stInformation.set_text("* [" + (this.dsYEA_SIPLTX.getRowCount() + "]건의 데이터를 로드 했습니다."));
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnExcelUpload.addEventHandler("onclick", this.btnExcelUpload_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdYEA_SIPLTX.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("YEAA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
