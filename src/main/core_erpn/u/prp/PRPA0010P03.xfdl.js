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
                this.set_name("PRPA0010P03");
                this.set_titletext("실적집계표 상세내역");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,710,505);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_REPORT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("제작실적집계표 상세내역");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("결산관리>결산관리>실적집계표>상세내역");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "55", "400", "21", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "539", "23", "8", null, this);
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_REPORT", "absolute", "0.78%", "80", null, "409", "2.55%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsPD_REPORT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"181\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계열구분\"/><Cell col=\"1\" text=\"제작구분\"/><Cell col=\"2\" text=\"제작구분명\"/><Cell col=\"3\" text=\"제작번호\"/><Cell col=\"4\" text=\"제작건명\"/><Cell col=\"5\" text=\"견적금액\"/><Cell col=\"6\" text=\"청구금액\"/><Cell col=\"7\" text=\"정산금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CUTY_NAME\"/><Cell col=\"1\" text=\"bind:MEDA_CODE\"/><Cell col=\"2\" text=\"bind:MEDA_NAME\"/><Cell col=\"3\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" text=\"bind:JOBN_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ESTI_AMTX\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEND_AMTX\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUJU_AMTX\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"4\" style=\"align: center;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DEND_AMTX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUJU_AMTX&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 710, 505, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("실적집계표 상세내역");
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
        this.addIncludeScript("PRPA0010P03.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PRPA0010P03.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PRPA0010P03.xfdl", function() {
        /***************************************************************************************************
         * # Program:	PRPA0010P01 제작 실적집계표 상세 내역
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.28		오세훈		Initial Created.
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
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTFT"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "PRPA0010";

        this.sMEDA_CODE = this.parent.sMEDA_CODE;
        this.sYEAR_MONT1 = this.parent.sYEAR_MONT1;
        this.sYEAR_MONT2 = this.parent.sYEAR_MONT2;
        this.sCUTY_CODE = this.parent.sCUTY_CODE;

        

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
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
            
            this.fn_Search();
            
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
        	this.fnc_DatasetClear("dsPD_REPORT");

        	var sMethodName = "SEARCH30";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_REPORT=dsPD_REPORT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
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
        	this.fnc_ToExcel(this.name);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        		var reportOptions = new Object();
        		reportOptions.title = "제작 실적 집계표";
        		reportOptions.loadCallback = "";			// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        		reportOptions.saveEnable = false;			// 저장 버튼 표시여부. true or false
        		reportOptions.saveLock = true;				// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        		reportOptions.saveCallback = "";			// 리포트를 파일로 저장한 후 실행할 함수입니다.
        		reportOptions.printEnable = true;			// 인쇄 버튼 표시여부. true or false
        		reportOptions.printCallback = "";			// 리포트 인쇄 후 실행할 함수입니다.
        		reportOptions.printLock = true;				// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	// 	A4_LANDSCAPE    : A4용지 가로방향
        	// 	A4_PORTRAIT     : A4용지 세로방향
        	// 	A3_LANDSCAPE    : A3용지 가로방향
        	// 	A3_PORTRAIT     : A3용지 세로방향
        		this.fn_UbiReportGrid("A4_LANDSCAPE", reportOptions, this.grdPD_REPORT);
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPD_REPORT", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	this.fnc_FormUnload(obj,e);
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
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
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if ((this.fnc_DatasetChangeCheck("dsPD_REPORT"))) return this.fnc_Message("TMM023");
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------***-------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH30") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MONT1=" + this.fnc_Quote(this.sYEAR_MONT1);
        		sReturnString += " YEAR_MONT2=" + this.fnc_Quote(this.sYEAR_MONT2);
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.sMEDA_CODE);
        		sReturnString += " CUTY_CODE=" + this.fnc_Quote(this.sCUTY_CODE);
        	
        	}
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH30") {
        		
        		this.fnc_Information(this.stInformation, this.dsPD_REPORT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	//기능없음
        }

        

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function(obj,e){

           var arrReturn = new Array(3);

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsPD_REPORT.getColumn(this.dsPD_REPORT.rowposition, "JOBN_NUMB");	

        	this.fnc_PopupClose(arrReturn);
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_REPORT.addEventHandler("oncolumnchanged", this.dsPD_JOBOXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdPD_REPORT.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_REPORT.addEventHandler("oncelldblclick", this.grdPD_JOBRXM_oncelldblclick, this);

        };

        this.loadIncludeScript("PRPA0010P03.xfdl");
        this.loadPreloadList();
       
    };
}
)();
