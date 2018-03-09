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
                this.set_name("MDMB0010P02");
                this.set_titletext("카테고리조회팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,510,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_CATEXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "15", "87", "262", "21", null, null, this);
            obj.set_cssclass("styFormSearchInfo");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "15", null, null, "21", "74", "13", this);
            obj.set_text("해당 항목에서 더블클릭 또는 Enter Key를 누르시면 선택 됩니다.");
            obj.set_cssclass("sta_WF_Desc01");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "15", "6", null, "21", "15", null, this);
            obj.set_cssclass("sta_WF_Info");
            obj.set_text("조회조건 후 입력하세요 ");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "30", null, "43", "15", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCATE_NAME", "absolute", "103", "41", "103", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("native");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "83", "50", "21", "15", null, this);
            obj.set_taborder("8");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", null, "41", "52", "21", "26", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "102", "216", "6", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "0", "120", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "320", "0", "56", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "73", "56", "35", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "483", "64", "12", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "451", "64", "8", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "31", "41", "63", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("카테고리 명");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_CATEXM", "absolute", "15", "108", null, null, "15", "44", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsMD_CATEXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"144\"/><Column size=\"85\"/><Column size=\"169\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"광고주코드\"/><Cell col=\"1\" text=\"광고주명\"/><Cell col=\"2\" text=\"카테고리코드\"/><Cell col=\"3\" text=\"카테고리명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:CATE_CODE\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CATE_NAME\" editlimit=\"0\" expandshow=\"hide\" expandsize=\"23\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "229", "41", "63", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("광고주 명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "301", "41", "103", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("카테고리조회팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MDMA0070P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMA0070P01.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDMA0070P01 카테고리조회팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		최제현		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= ""; 
        this.sPACKAGENAME = 'MDMB0010P02';
        this.edtSHRCUST_NAME.set_value(this.parent.cust_name);

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH = "";
        	this.sFORMCAPTION = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL = "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        
        /*------------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	//this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_Search();
        }

        /*-----------------------+
         |  조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear('dsMD_CATEXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_CATEXM=dsMD_CATEXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        		
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CATEXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_CATEXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	return true;
        }

        
        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //광고주
        		sReturnString += " CATE_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCATE_NAME.value)); //브랜드

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
        		this.fnc_Information(this.stInformation, this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_CATEXM.rowcount);

        	}

        }

        /*----------------------------------+
         |  Enter Key Press 시 조회 실행 !  |
         +----------------------------------*/
        this.edtSearchText_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Search();

        }

        /*------------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTM_POPUPX_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Confirm();

        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {

        	if (e.keycode == 27) this.fn_Cancel();

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
        this.fn_Confirm = function (obj,e) {

        	var cust_code = this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CUST_CODE");
        	var cust_name = this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CUST_NAME");
        	var cate_code = this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CATE_CODE");
        	var cate_name = this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CATE_NAME");
        	var key = this.parent.key;

        	this.opener.fn_CallBackP02(cust_code, cust_name, cate_code, cate_name, key);
        	
        	this.fnc_PopupClose("");

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }
        /*----------------+
         |  셀 더블클릭  |
         +----------------*/
        this.grdMD_CATEXM_oncelldblclick = function(obj,e)
        {
        	this.fn_Confirm();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.edtSHRCATE_NAME.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.Button69.addEventHandler("onclick", this.fn_Search, this);
            this.grdMD_CATEXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_CATEXM.addEventHandler("oncelldblclick", this.grdMD_CATEXM_oncelldblclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);

        };

        this.loadIncludeScript("MDMA0070P01.xfdl");

       
    };
}
)();
