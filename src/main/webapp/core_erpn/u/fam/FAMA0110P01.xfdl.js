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
                this.set_name("FAMA0110P01");
                this.set_titletext("연결계정선택조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,616,470);
            }
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_ACCTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_CHEK\" type=\"INT\" size=\"1\"/><Column id=\"ACCT_INTL\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"ACCT_NAME\" type=\"string\" size=\"200\" prop=\"\"/><Column id=\"PRNT_LEVL\" type=\"bigdecimal\" size=\"1\" prop=\"\"/><Column id=\"DRCR_GUBN\" type=\"string\" size=\"10\" prop=\"\"/><Column id=\"DRCR_GBNM\" type=\"string\" size=\"200\" prop=\"\"/></ColumnInfo><Column id=\"ACCT_INTL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PRNT_LEVL\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"DRCR_GUBN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DRCR_GBNM\" type=\"string\" size=\"32\" prop=\"\"/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_ACCTXM", "absolute", "15", "83", null, "343", "15", null, this);
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsTA_ACCTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"41\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정과목명\"/><Cell col=\"3\" text=\"계정레벨\"/><Cell col=\"4\" text=\"잔액차대구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_CHEK\" mask=\"#####\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ACCT_INTL\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:ACCT_NAME\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:PRNT_LEVL\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:DRCR_GBNM\" editlimit=\"0\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "62", "400", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "43", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "35", "26", "92", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("계정코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "349", "26", "122", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("양식사용계정 제외");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "123", "26", "197", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkEXPT_YSNO", "absolute", "472", "26", "21", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", null, "26", "52", "21", "36", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, "434", "62", "24", "15", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm", "absolute", null, "434", "62", "24", "80", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "141", "0", "216", "15", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "601", "15", "15", "461", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "58", "56", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "436", "447", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("해당 항목에서 더블클릭 또는 Enter Key를 누르시면 선택 됩니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "503", "458", "64", "12", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "503", "426", "64", "8", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "32", "426", "120", "14", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 616, 470, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연결계정선택조회");
            		p.set_scrollbars("none");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FAMA0110P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0110P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0110P01 연결계정선택조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.20		권미영		Initial Created.
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sACCT_INTL		= this.parent.sACCT_INTL;	//조회 Parameter
        this.sFSFM_CODE		= this.parent.sFSFM_CODE;	//조회 Parameter
        this.sVIEW_ITCD		= this.parent.sVIEW_ITCD;	//조회 Parameter
        this.sPACKAGENAME 	= "FAMA0120"; //해당 Form에서 사용 할 Package 명

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.edtSHRACCT_NAME.set_value(this.sACCT_INTL);
        	this.chkEXPT_YSNO.set_value(1);
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_NAME.value)) < 1) {
        		this.edtSHRACCT_NAME.setFocus();
        	} else {
        		this.fn_Search();
        	}
        	
        }

        /*-----------------------------------------+
         |  화면 ID에 다른 Form Setting 자료 조회  |
         +-----------------------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	
        	this.fnc_DatasetClear("dsTA_ACCTXM");
        	var sMethodName = "SEARCH11";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_ACCTXM=dsTA_ACCTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdTA_ACCTXM.setFocus();

        }

        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        // 	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_NAME.value)) < 1) {
        // 		return this.fnc_SearchCheckPostAction("TMM072", "계정코드/명", this.edtSHRACCT_NAME);
        // 	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH11") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_NAME=" 	+ this.fnc_Quote(this.edtSHRACCT_NAME.value);
        		sReturnString += " FSFM_CODE=" 	+ this.fnc_Quote(this.sFSFM_CODE);
        		sReturnString += " VIEW_ITCD=" 	+ this.fnc_Quote(this.sVIEW_ITCD);
        		sReturnString += " EXPT_YSNO=" 	+ this.fnc_Quote(this.chkEXPT_YSNO.value);
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

        	if (sMethodName == "SEARCH11") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_ACCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_ACCTXM.rowcount);
        		if (this.dsTA_ACCTXM.rowcount > 0) this.grdTA_ACCTXM.selectRow(0);
        		this.grdTA_ACCTXM.setFocus();

        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        }

        /*----------------------------------+
         |  Enter Key Press 시 조회 실행 !  |
         +----------------------------------*/
        this.edtSHRACCT_NAME_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Search();

        }

        /*------------------------------------------------+
         |  그리드에서 더블 클릭 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTA_ACCTXM_oncelldblclick = function(obj,e) {
        	
        	//this.fnc_SetGrdChk(0, this.dsTA_ACCTXM, "CHEK_CHEK");	// 전체 체크 해제
        	this.dsTA_ACCTXM.setColumn(this.dsTA_ACCTXM.rowposition, "CHEK_CHEK", 1);	// 해당 로우 체크
        	this.fn_Confirm();
        	
        }

        /*------------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTA_ACCTXM_onkeydown = function (obj,e) {

        	if (e.keycode != 13) return;
        	
        	this.dsTA_ACCTXM.setColumn(this.dsTA_ACCTXM.rowposition, "CHEK_CHEK", 1);	// 해당 로우 체크
        	this.fn_Confirm();

        }

        
        /*---------------------+
         |  엑셀 버튼 클릭 時  |
         ----------------------*/
        this.fn_ToExcel = function (obj,e) {

        	this.fnc_ToExcel(this.name);

        }

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function () {

        	this.opener.dsPOP_ACCTRTN.clearData();
        	
        	if (this.dsTA_ACCTXM.findRow("CHEK_CHEK", 1) == -1) {
        		this.fnc_Message("TMM010");
        		return;
        	}
        	
        	for (var i = 0; i < this.dsTA_ACCTXM.rowcount; i++) {
        		
        		if (this.dsTA_ACCTXM.getColumn(i, "CHEK_CHEK") == 1) {

        			var iOpnRow = this.opener.dsPOP_ACCTRTN.addRow();
        			this.opener.dsPOP_ACCTRTN.copyRow( iOpnRow, this.dsTA_ACCTXM, i );
        			
        		}
        		
        	}
        	
        	this.fnc_PopupClose("");

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }

        /*---------------------+
         |  체크박스 헤더클릭  |
         +---------------------*/
        this.grdTA_ACCTXM_onheadclick = function(obj,e) {

        	var sCol = "CHEK_CHEK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTA_ACCTXM.addEventHandler("onkeydown", this.grdTA_ACCTXM_onkeydown, this);
            this.grdTA_ACCTXM.addEventHandler("oncelldblclick", this.grdTA_ACCTXM_oncelldblclick, this);
            this.grdTA_ACCTXM.addEventHandler("onheadclick", this.grdTA_ACCTXM_onheadclick, this);
            this.edtSHRACCT_NAME.addEventHandler("onkeydown", this.edtSHRACCT_NAME_OnKeyDown, this);
            this.chkEXPT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnSearch.addEventHandler("onclick", this.fn_Search, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btnConfirm.addEventHandler("onclick", this.fn_Confirm, this);

        };

        this.loadIncludeScript("FAMA0110P01.xfdl");

       
    };
}
)();
