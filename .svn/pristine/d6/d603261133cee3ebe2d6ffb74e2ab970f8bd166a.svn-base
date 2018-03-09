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
                this.set_name("WFME0010");
                this.set_titletext("건강검진관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_PHEXMN", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"OD_YSNO\" type=\"STRING\" size=\"8\"/><Column id=\"PHEX_INNM\" type=\"STRING\" size=\"50\"/><Column id=\"PHEX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PHEX_COST1\" type=\"STRING\" size=\"256\"/><Column id=\"PHEX_COST2\" type=\"STRING\" size=\"15\"/><Column id=\"PHEX_CNTT\" type=\"STRING\" size=\"100\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"100\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_PHEXMN1", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("건강검진관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("16");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_PHEXMN", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsCW_PHEXMN");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"131\"/><Column size=\"115\"/><Column size=\"162\"/><Column size=\"126\"/><Column size=\"112\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"기준년도\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"부서\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"검진기관\"/><Cell col=\"5\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"검진일자\"/><Cell col=\"6\" colspan=\"2\" text=\"검진비용\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"검진내용\"/><Cell col=\"9\"/><Cell row=\"1\" col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"회사부담\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"개인부담\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" editfilter=\"number\" text=\"bind:STDS_YEAR\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:EMPL_NAME\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:PHEX_INNM\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:PHEX_DATE\" editlimit=\"0\" editdisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:PHEX_COST1\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:PHEX_COST2\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:PHEX_CNTT\" editlimit=\"100\" editdisplay=\"edit\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "212", "71", "52", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "254", "71", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "336", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "359", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "487", "71", "52", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "529", "71", "80", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "611", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "634", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "183", "61", "40", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "456", "61", "40", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("medSHRSTDS_YEAR", "absolute", "8.09%", "71", null, "21", "84.58%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_value("null");
            obj.set_editformat("yyyy");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건강검진관리");

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
        this.addIncludeScript("WFME0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFME0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	WFME0010 건강검진관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		김용만		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFME0010"; //해당 Form에서 사용 할 Package 명 
        this.sKeyValue = new Array();

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
        	this.medSHRSTDS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRSTDS_YEAR.setFocus();
        	//검색조건 포커스
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
        	
        	this.fnc_DatasetClear('dsCW_PHEXMN');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_PHEXMN=dsCW_PHEXMN";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_PHEXMN1=dsCW_PHEXMN1";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        	
        	this.grdCW_PHEXMN.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsCW_PHEXMN.addRow();
        	this.dsCW_PHEXMN.set_rowposition(iRow); 
        	
        	this.dsCW_PHEXMN.setColumn(iRow,"STDS_YEAR",this.fnc_SubStr(this.medSHRSTDS_YEAR.value,0,4));
        	
        	
        	this.grdCW_PHEXMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "EMPL_NAME"));
        	this.grdCW_PHEXMN.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsCW_PHEXMN.deleteRow(this.dsCW_PHEXMN.rowposition);
        	this.grdCW_PHEXMN.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_PHEXMN");
        	this.fnc_DataSetCancel("dsCW_PHEXMN1");
        	this.grdCW_PHEXMN.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsCW_PHEXMN.getColumn(this.dsCW_PHEXMN.rowposition,"EMPL_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_PHEXMN=dsCW_PHEXMN:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_PHEXMN.setFocus();

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
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_PHEXMN", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_PHEXMN")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.fnc_SubStr(this.medSHRSTDS_YEAR.value,0,4))) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.medSHRSTDS_YEAR);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_PHEXMN.getRowCount() < 1) {	 //삭제할 자료가 없습니다
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "성명:" + this.fnc_Trim(this.dsCW_PHEXMN.getColumn(this.dsCW_PHEXMN.rowposition, "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_PHEXMN")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var rowCnt = this.dsCW_PHEXMN.getRowCount();
        	var rowCntKey = this.dsCW_PHEXMN1.getRowCount();
        	
        	
        		// 필수 입력 항목 체크
        	for (var i = 0; i < rowCnt; i++) {

        		if (this.fnc_ToUpper(this.dsCW_PHEXMN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_PHEXMN.getColumn(i, 'EMPL_NUMB'))) < 1) {
        		
        			this.grdCW_PHEXMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "EMPL_NAME"));
        			this.grdCW_PHEXMN.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsCW_PHEXMN, i, this.grdCW_PHEXMN, "EMPL_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_PHEXMN.getColumn(i, 'STDS_YEAR'))) < 1) {
        			this.grdCW_PHEXMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "STDS_YEAR"));
        			this.grdCW_PHEXMN.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "기준년도", this.dsCW_PHEXMN, i, this.grdCW_PHEXMN, "STDS_YEAR");
        		}
        		
        	}

        	for(var i=0;i< rowCnt; i++){
        		
        		for(var j=0;j<rowCntKey; j++){
        			if( this.dsCW_PHEXMN.getColumn(i,"EMPL_NUMB") == this.dsCW_PHEXMN1.getColumn(j,"EMPL_NUMB") && this.dsCW_PHEXMN.getRowType(i) != "1" && this.dsCW_PHEXMN.getRowType(i) != "4"){		
        				
        			this.grdCW_PHEXMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "EMPL_NAME"));
        			this.grdCW_PHEXMN.setFocus();
        			return this.fnc_CheckPostAction("TMM077", "사원번호", this.dsCW_PHEXMN, i, this.grdCW_PHEXMN, "EMPL_NUMB");
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

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.medSHRSTDS_YEAR.value,0,4))); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	

        	} 
        	// 조회1 Argument 생성
        	if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.medSHRSTDS_YEAR.value,0,4)));
        	} 
        	
        	// 저장 Argument 생성
        	else if (sKind == 'SAVE00') {
        	
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
        		this.fnc_Information(this.stInformation, this.dsCW_PHEXMN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_PHEXMN.getCaseCount("dataset.getRowLevel(currow)==0"));
        			
        		if( this.sKeyValue[0] != ""){
        			var irow = this.dsCW_PHEXMN.findRow("EMPL_NUMB",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow < 0) irow = 0;
        			this.dsCW_PHEXMN.set_rowposition(irow);
        		}
        	
        	}else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsCW_PHEXMN);
        		this.fn_Search();
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdCW_PHEXMN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "STDS_YEAR"), "edittype", "normal");			
        	} else {
        		this.grdCW_PHEXMN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_PHEXMN, "STDS_YEAR"), "edittype", "none");
        	} 
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 사원정보조회(Popup)
        	if ( (obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME") ) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 그리드 - 사원정보조회(Popup)
        	if (obj.name == "grdCW_PHEXMN") {
        		if (obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        			
        			arrParam[0] = "HRM0001"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_PHEXMN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,OPOS_NAME,OPOS_CODE,DEPT_NAME,DEPT_CODE";  
        			arrParam[6] = "0,1,11,10,3,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}
        	
        	if (obj.name == "grdCW_PHEXMN") {
        		//if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" ) {

        			arrParam[0] = "HRM0002"; 
        			arrParam[1] = this.edtSHRDEPT_CODE.value;
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_PHEXMN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";  
        			arrParam[6] = "0,1,2,3,20,21";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}

        }

        
        //성명 공백입력시 사번,성명,직급,부서 초기화
        this.dsCW_PHEXMN_onvaluechanged = function(obj,e)
        {
        	var currRow = this.grdCW_PHEXMN.currentrow;
        	
        	if(e.columnid == 'EMPL_NAME' && this.dsCW_PHEXMN.getColumn(currRow,"EMPL_NAME") == ""){
        		 this.dsCW_PHEXMN.setColumn(currRow,"EMPL_NUMB","");
        		 this.dsCW_PHEXMN.setColumn(currRow,"DEPT_CODE","");
        		 this.dsCW_PHEXMN.setColumn(currRow,"DEPT_NAME","");
        		 this.dsCW_PHEXMN.setColumn(currRow,"OPOS_CODE","");
        		 this.dsCW_PHEXMN.setColumn(currRow,"OPOS_NAME","");
        	}
        }
         
        this.dsCW_PHEXMN_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME" ) {
        		this.fn_HelpDialoge(this.grdCW_PHEXMN, "YES", e.oldvalue, e.columnid);
        	}
        	if (e.columnid == "DEPT_NAME" ) {
        		this.fn_HelpDialoge(this.grdCW_PHEXMN, "YES", e.oldvalue, e.columnid);
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_PHEXMN.addEventHandler("onvaluechanged", this.dsCW_PHEXMN_onvaluechanged, this);
            this.dsCW_PHEXMN.addEventHandler("oncolumnchanged", this.dsCW_PHEXMN_oncolumnchanged, this);
            this.dsCW_PHEXMN1.addEventHandler("oncolumnchanged", this.dsCW_PHEXMN1_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_PHEXMN.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("WFME0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
