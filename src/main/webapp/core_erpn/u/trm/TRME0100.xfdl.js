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
                this.set_name("TRME0100");
                this.set_titletext("카드별/계정별 사용내역 보고서 조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CARDAM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCrossTab", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBaseColumn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdCrossTab", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsCrossTab");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"총합계\"/></Band><Band id=\"body\"><Cell celltype=\"body\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" suppress=\"1\"/><Cell col=\"1\" celltype=\"body\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" celltype=\"body\" displaytype=\"number\" style=\"align: right;\" text=\"bind:APPR_AMNT\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('APPR_AMNT')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "217", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static7", "absolute", "201", "71", "11", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "98", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_value("null");

            obj = new Static("Static0", "absolute", "28", "71", "84", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("승인일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("카드별/계정별 사용내역 보고서 조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("홈 > >재무관리>자금관리>법인카드관리>카드별/계정별 사용내역 보고서 조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("카드별/계정별 사용내역 보고서 조회");
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
        this.addIncludeScript("TRME0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRME0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0100 카드별/계정별 사용내역 보고서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
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
        this.sBUTTONLIST   = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME  = "TRME0100"; 
        this.sGRID_FORMATS = "";
        this.iGRID_CELLCNT = 0;

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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	var sNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.calSHRACCT_DATE1.set_value((this.fnc_SubStr(sNowDate, 0, 6) + "01"));
        	this.calSHRACCT_DATE2.set_value(this.fnc_SubStr(sNowDate, 0, 8));
        	this.sGRID_FORMATS = this.grdCrossTab.formats; 
        	this.iGRID_CELLCNT = this.grdCrossTab.getCellCount("body");
        	this.calSHRACCT_DATE1.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (ob) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_CARDAM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CARDAM=dsTA_CARDAM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCrossTab.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name); 
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(FROM)", this.calSHRACCT_DATE1);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(TO)", this.calSHRACCT_DATE2);
        	}
        	
        	if ((this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE1.value)) == 8) || (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE2.value)) == 8)) {
        		if (this.fnc_Trim(this.calSHRACCT_DATE1.value) > this.fnc_Trim(this.calSHRACCT_DATE2.value)) {
        			return this.fnc_SearchCheckPostAction("TMM125", "승인일자(FROM)이 승인일자(TO)보다 큽니다.", this.calSHRACCT_DATE1);
        		}
        	}

        	return true;
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="           + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="        + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_DATEFROM=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); 
        		sReturnString += " ACCT_DATETO="   + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); 
        	} 
        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fn_grid2();
        		this.fnc_Information(this.stInformation, this.dsTA_CARDAM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CARDAM.rowcount); 
        	} 
        }

        /*--------------------------+
         |  그리드만들기  |
         +---------------------------*/
        this.fn_grid2 = function () {

        	//trace("fn_grid2 ---   : ");

        	this.dsCrossTab.keystring.current = "";
        	this.dsCrossTab.clearData();

         	this.grdCrossTab.set_enableredraw(false);
         	this.dsCrossTab.set_enableevent(false);

        	//this.grdCrossTab.set_formats(this.sGRID_FORMATS);

        	for (var i = this.grdCrossTab.getCellCount("body"); i > this.iGRID_CELLCNT; i--) {
        		this.grdCrossTab.deleteContentsCol(this.grdCrossTab.getCellCount("body")-1);
        	}
        	
        	this.dsCrossTab.copyData(this.dsBaseColumn, true);

        	var beforeCol 		= 2;
        	var beforeHeadCell 	= 3;
        	var beforeBodyCell 	= 2;
        	var beforeSumCell 	= 1;

        	for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
        	
        		var sAcct_Intl = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_INTL"));
        		var sAcct_Name = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_NAME"));

        		var sColumnName = "C" + sAcct_Intl;

        		var sColumnInfo = this.dsCrossTab.colinfos[sColumnName];

        		if ( this.IsNull(sColumnInfo) ) {
        			this.dsCrossTab.addColumn(sColumnName, "BIGDECIMAL", 22);

        			this.grdCrossTab.appendContentsCol();
        			
        			var col = this.grdCrossTab.getFormatColCount() - 1;
        			
        			this.grdCrossTab.setFormatColProperty(col, "size", 100);

        			var j = col - beforeCol;
        			var k = this.grdCrossTab.getFormatColCount() - 1;
        				k = k - beforeHeadCell;		
        			
        			this.grdCrossTab.setCellProperty("head", beforeHeadCell + (k * 1) + 0, "text", sAcct_Intl);
        			this.grdCrossTab.setCellProperty("head", beforeHeadCell + (k * 2) + 1, "text", sAcct_Name);
        			

        			// 헤더를 머지한다..
        			// grdCrossTab.mergeContentsCell("head", 0, k, 1, k, k, false);
        		
        			var iCell = beforeBodyCell + (j * 1);
        			this.grdCrossTab.setCellProperty("body", iCell, "text", "bind:" + sColumnName);
        			this.grdCrossTab.setCellProperty("body", iCell, "displaytype", "number");
        			this.grdCrossTab.setCellProperty("body", iCell, "mask", "#,###");
        			this.grdCrossTab.setCellProperty("body", iCell, "style", "align: right;");

        			this.grdCrossTab.setCellProperty("summ", beforeSumCell + j, "expr", "dataset.getSum(\"" + sColumnName + "\")");
        			this.grdCrossTab.setCellProperty("summ", beforeSumCell + j, "displaytype", "number");
        			this.grdCrossTab.setCellProperty("summ", beforeSumCell + j, "mask", "#,###");
        			this.grdCrossTab.setCellProperty("summ", beforeSumCell + j, "style", "align: right;");
        		}
        	}

        	for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
        	
        		var sAcct_Intl = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_INTL"));
        		var sAcct_Name = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_NAME"));

        		var sColumnName = "C" + sAcct_Intl;

        		var sEmpl_Numb = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "EMPL_NUMB"));
        		var sDept_Code = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "DEPT_CODE"));
        		var sEmpl_Name = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "EMPL_NAME"));
        		var sDept_Name = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "DEPT_NAME"));

        		var iAppr_Amnt = nexacro.toNumber(this.dsTA_CARDAM.getColumn(i, "APPR_AMNT"), 0);
        		
        		var findRow = this.dsCrossTab.findRowExpr("DEPT_CODE == \"" + sDept_Code + "\" && EMPL_NUMB == \"" + sEmpl_Numb + "\" ");
        		
        		if (findRow == -1) {
        			findRow = this.dsCrossTab.addRow();
        			this.dsCrossTab.setColumn(findRow, "DEPT_CODE", sDept_Code);
        			this.dsCrossTab.setColumn(findRow, "EMPL_NUMB", sEmpl_Numb);
        			this.dsCrossTab.setColumn(findRow, "EMPL_NAME", sEmpl_Name);
        			this.dsCrossTab.setColumn(findRow, "DEPT_NAME", sDept_Name);
        		}

        		var tAppr_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(findRow, "APPR_AMNT"), 0);
        		var cAppr_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(findRow, sColumnName), 0);

        		this.dsCrossTab.setColumn(findRow, "EMPL_NAME", sEmpl_Name);
        		this.dsCrossTab.setColumn(findRow, "DEPT_NAME", sDept_Name);

        		this.dsCrossTab.setColumn(findRow, "APPR_AMNT", tAppr_Amnt + iAppr_Amnt);
        		this.dsCrossTab.setColumn(findRow, sColumnName, cAppr_Amnt + iAppr_Amnt);
        	}

        	this.dsCrossTab.applyChange();
        	this.dsCrossTab.set_keystring("S:DEPT_CODE+EMPL_NUMB");

        	this.fnc_GridSetting(this);

         	this.dsCrossTab.set_enableevent(true);
         	this.grdCrossTab.set_enableredraw(true);
        	
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CARDAM.addEventHandler("oncolumnchanged", this.dsTA_CARDAM_OnColumnChanged, this);
            this.dsBaseColumn.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsBaseColumn.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRME0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
