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
                this.set_name("HRMD0040");
                this.set_titletext("인원현황(직위별/부서별)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SECT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_FCOD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSORT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_SUMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_MASTXD");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"소속\"/><Cell col=\"1\" displaytype=\"text\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("인원현황(직위별/부서별)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text("홈 > 인사관리 > 인사통계 > 인원현황(직급별/부서별)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
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

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인원현황(직위별/부서별)");
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
        this.addIncludeScript("HRMD0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMD0040.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMD0040 인원현황(직급별/부서별)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.04     고민주     Initial Created.
         *   2016.09.30     황치웅     수정.
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMD0040"; 

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
        	this.calSHRSTDS_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRSTDS_DATE.setFocus();

        
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

        	//동적그리드- 추가된 컬럼 삭제
         	var iColCount    = this.grdHR_MASTXD.getCellCount("body");
         	var iAddColCount = this.dsTM_CODEXD.getRowCount();

         	for(var i = iColCount; i >= iColCount - iAddColCount ; i--){
        		this.grdHR_MASTXD.deleteContentsCol(i);
        	}

        	this.fnc_DatasetClear("dsHR_MASTXD,dsTM_CODEXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_MASTXD=dsHR_MASTXD dsTM_CODEXD=dsTM_CODEXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_MASTXD.setFocus();

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
        	this.fnc_DataSetCancel("dsHR_MASTXD,dsTM_CODEXD");
        	this.grdHR_MASTXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_MASTXD", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_MASTXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
        	} 
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="         + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" 	 + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); 
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
        		//동적그리드- 필요한 그리드 컬럼 생성
        		var iCol = -1;
        		/*this.grdHR_MASTXD.splitContentsCell("summ",0,0,0,1,true);*/

        		for(var i = 0 ; i < this.dsTM_CODEXD.getRowCount(); i++){ 

        			iCol = this.grdHR_MASTXD.appendContentsCol();  
        			this.grdHR_MASTXD.setFormatColProperty(iCol,"size", 100);

        			this.grdHR_MASTXD.setCellProperty("Head", iCol, "text",this.dsTM_CODEXD.getColumn(i,"OPOS_NAME"));
        			this.grdHR_MASTXD.setCellProperty("Body", iCol, "text","bind:COL_"+this.dsTM_CODEXD.getColumn(i,"OPOS_CODE"));   
        			this.grdHR_MASTXD.setCellProperty("Body", iCol, "displaytype","number"); 
        			this.grdHR_MASTXD.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  

        			this.grdHR_MASTXD.setCellProperty("Summ", iCol, "displaytype","number"); 
        			this.grdHR_MASTXD.setCellProperty("Summ", iCol, "style","align:right;"); 
        			this.grdHR_MASTXD.setCellProperty("Summ", iCol, "expr","expr:dataset.getSum('COL_"+this.dsTM_CODEXD.getColumn(i,"OPOS_CODE")+"')");
        		
        		}
        		
        		iCol = this.grdHR_MASTXD.appendContentsCol();  
        		this.grdHR_MASTXD.setFormatColProperty(iCol,"size", 100);

        		this.grdHR_MASTXD.setCellProperty("Head", iCol, "text", "총계");
        		this.grdHR_MASTXD.setCellProperty("Body", iCol, "text","bind:OPOS_SUMM");   
        		this.grdHR_MASTXD.setCellProperty("Body", iCol, "displaytype","number"); 
        		this.grdHR_MASTXD.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  

        		this.grdHR_MASTXD.setCellProperty("Summ", iCol, "displaytype","number"); 
        		this.grdHR_MASTXD.setCellProperty("Summ", iCol, "style","align:right;"); 
        		this.grdHR_MASTXD.setCellProperty("Summ", iCol, "expr","expr:dataset.getSum('OPOS_SUMM')");
        		
        		
        		//this.grdHR_MASTXD.mergeContentsCell("summ",0,0,0,1,0,false);

        		this.fnc_Information(this.stInformation, this.dsHR_MASTXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_MASTXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMD0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
