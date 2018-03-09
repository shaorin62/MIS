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
                this.set_name("MDMD0010P01");
                this.set_titletext("전체복사");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,298,98);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYEAR_MNTH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"oYEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"nYEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", "144", "63", "139", "24", null, null, this);
            obj.set_taborder("64");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnEnd", "absolute", null, "-1", "62", "24", "0", null, this.div_ButtonList);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("true");
            obj.style.set_cursor("hand");
            obj.set_text("닫기");
            this.div_ButtonList.addChild(obj.name, obj);
            obj = new Button("btnSave", "absolute", null, "-1", "62", "24", "65", null, this.div_ButtonList);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("true");
            obj.style.set_cursor("hand");
            obj.set_text("복사");
            this.div_ButtonList.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "15", "15", "269", "39", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "35", "24", "97", "21", null, null, this);
            obj.set_text("년월");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "98", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "283", "0", "15", "98", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "152", "16", "38", "8", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "149", "45", "38", "8", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "184", "0", "38", "15", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "219", "54", "64", "8", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "219", "86", "64", "12", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calYEAR_MNTH", "absolute", "131", "24", "125", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 139, 24, this.div_ButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.div_ButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 298, 98, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전체복사");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MDMD0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMD0010P01.xfdl", function() {
         /***************************************************************************************************
         * # Program : MDMD0010P01 전체복사팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.13		최제현 	Initial Created.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/

        this.sBUTTONLIST 	= "";
        this.sPACKAGENAME 	= "MDMD0010P01";
         
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

        
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.calYEAR_MNTH.fn_SetMonth
        	(this.fnc_SubStr(this.fnc_AddMonth(this.fnc_GetServerDateTime("DATE"),1),0,6));
        }

        /*----------------------------------+
        |  02.화면 종료(닫기) 버튼 클릭 時  |
        ------------------------------------*/
        this.fn_End = function (obj) {
        	this.fnc_PopupClose("");
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        //기능없음.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        //기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		
        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
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

        	} else if (sMethodName == "SAVE00") {
        		alert('복사되었습니다.');
        		this.fnc_PopupClose("");
        		
        	} else if (sMethodName == "GetCommCode") {		
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		
        	}
        }

        

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------+
         |  복사   |
         +---------*/
        this.fn_Save = function(obj,e)
        {

        	var iRow = this.dsYEAR_MNTH.addRow();
        	this.dsYEAR_MNTH.setColumn(iRow,"oYEAR_MNTH",this.parent.oYEAR_MNTH);
        	this.dsYEAR_MNTH.setColumn(iRow,"nYEAR_MNTH",this.calYEAR_MNTH.fn_GetMonth());
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsYEAR_MNTH=dsYEAR_MNTH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.div_ButtonList.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.div_ButtonList.btnSave.addEventHandler("onclick", this.fn_Save, this);
            this.calYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);

        };

        this.loadIncludeScript("MDMD0010P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
