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
                this.set_name("WFMA0010");
                this.set_titletext("경조금기준등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_COCOBS", this);
            obj._setContents("<ColumnInfo><Column id=\"COCO_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRCW_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCC_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PROD\" type=\"STRING\" size=\"256\"/><Column id=\"CCIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COCO_KIND</Col><Col id=\"DSNAME\">dsCOCO_KIND</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">FRCW_CODE</Col><Col id=\"DSNAME\">dsFRCW_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsCCIT_CODE</Col><Col id=\"CODEID\">CCIT_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHRCOCO_KIND</Col><Col id=\"CODEID\">COCO_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRFRCW_CODE</Col><Col id=\"CODEID\">FRCW_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_COCOBS_CHK", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("경조금기준등록");
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
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "227", "71", "77", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("경조종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOCO_KIND", "absolute", "296", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("@dsCombo");

            obj = new Static("Static33", "absolute", "525", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("가족관계");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRFRCW_CODE", "absolute", "593", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("@dsCombo");

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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_COCOBS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsCW_COCOBS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"178\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"경조명\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"경조종류\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"가족관계\"/><Cell col=\"3\" colspan=\"2\" text=\"적용기간\"/><Cell col=\"5\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"경조금\"/><Cell col=\"6\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"근속연수\"/><Cell col=\"7\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"경조용품\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"시작일\"/><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"종료일\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:left middle;\" text=\"bind:COCO_NAME\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:COCO_KIND\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:FRCW_CODE\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:CCBS_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:CCBS_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EXCC_AMOT\" editimemode=\"none\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:WORK_PROD\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CCIT_CODE\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCCBS_BEDE", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경조금기준등록");

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
        this.addIncludeScript("WFMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMA0010.xfdl", function() {
         /***************************************************************************************************
         * # Program : 경조금기준등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.05		정한균		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMA0010";
        this.sKeyValue 		= new Array();

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRCCBS_BEDE.set_value(this.fnc_GetServerDateTime("DATE"));
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
        	this.fnc_DatasetClear('dsCW_COCOBS');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COCOBS=dsCW_COCOBS";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsCW_COCOBS.insertRow(this.dsCW_COCOBS.rowposition + 1);
        	this.dsCW_COCOBS.set_rowposition(iRow);
        	this.dsCW_COCOBS.setColumn(iRow, "CCBS_BEDE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.dsCW_COCOBS.setColumn(iRow, "CCBS_ENDD", "99991231");						//종료일
        	this.grdCW_COCOBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COCOBS, 0));
        	this.grdCW_COCOBS.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsCW_COCOBS.deleteRow(this.dsCW_COCOBS.rowposition);
        	this.grdCW_COCOBS.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_COCOBS");
        	this.grdCW_COCOBS.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsCW_COCOBS.getColumn(this.dsCW_COCOBS.rowposition,"COCO_CODE");
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_COCOBS=dsCW_COCOBS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_COCOBS.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_COCOBS", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_COCOBS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	var iRow = this.dsCW_COCOBS.rowposition;
        	var sStatus = this.dsCW_COCOBS.getRowType(iRow);
        	
        	if (this.fnc_ToUpper(sStatus) != Dataset.ROWTYPE_INSERT) {
        		var use_cnt = this.dsCW_COCOBS_CHK.getColumn(0, "USE_CNT");
        		if(use_cnt > 0)
        			return this.fnc_Message("WFM006");
        	}
        	
        	if (this.dsCW_COCOBS.getRowCount() < 1) {
        		return this.fnc_Message("TMM007");
        	}

        	var sQuestionText = this.dsCW_COCOBS.getColumn(iRow, "COCO_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_COCOBS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_COCOBS.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "COCO_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "경조명", this.dsCW_COCOBS, i, this.grdCW_COCOBS, 'COCO_NAME');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "COCO_KIND"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "경조종류코드", this.dsCW_COCOBS, i, this.grdCW_COCOBS, 'COCO_KIND');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "FRCW_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "가족관계코드", this.dsCW_COCOBS, i, this.grdCW_COCOBS, 'FRCW_CODE');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "FRCW_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "가족관계코드", this.dsCW_COCOBS, i, this.grdCW_COCOBS, 'EXCC_AMOT');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "CCBS_BEDE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일자", this.dsTA_DAYEXM, i, this.grdCW_COCOBS, "CCBS_BEDE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOBS.getColumn(i, "CCBS_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일자", this.dsCW_COCOBS, i, this.grdCW_COCOBS, "CCBS_ENDD");
        		}

        		if(nexacro.toNumber(this.dsCW_COCOBS.getColumn(i,"CCBS_BEDE")) > nexacro.toNumber(this.dsCW_COCOBS.getColumn(i,"CCBS_ENDD"))){
        			this.fnc_Message("TMM125", "시작일이 종료일보다 클 수 없습니다.");
        			this.dsCW_COCOBS.set_rowposition(i);
        			return false;
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
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " CCBS_BEDE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCCBS_BEDE.value)); //기준일자
        		sReturnString += " COCO_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOCO_KIND.value)); //경조종류
        		sReturnString += " FRCW_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFRCW_CODE.value)); //가족관계

        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " COCO_CODE=" + this.dsCW_COCOBS.getColumn(this.dsCW_COCOBS.rowposition, "COCO_CODE"); //경조명코드
        		
        	} else if (sKind == 'SAVE00') {
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsCW_COCOBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		this.fnc_Message("TMM018", this.dsCW_COCOBS.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdCW_COCOBS.setFocus();
        		//this.fn_CodeCheck();
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsCW_COCOBS.findRow("COCO_CODE",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsCW_COCOBS.set_rowposition(irow);
        		}
        	} else if (sMethodName == 'SEARCH01') {
        	
        		//this.fnc_Information(this.stInformation, this.dsCW_COCOBS_CHK.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_COCOBS_CHK.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		//var use_cnt = this.dsCW_COCOBS_CHK.getColumn(0, "USE_CNT");
        		//this.fnc_Message("TMM125" , use_cnt+"=>data get");
        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_SetCodeUseCnt(this.dsCW_COCOBS);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdCW_COCOBS,dsCOCO_KIND,COCO_KIND";
        		arrParam[1] = "GRID,grdCW_COCOBS,dsFRCW_CODE,FRCW_CODE";
        		arrParam[2] = "GRID,grdCW_COCOBS,dsCCIT_CODE,CCIT_CODE";
        		arrParam[3] = "COMBO,cmbSHRCOCO_KIND,dsSHRCOCO_KIND,0";
        		arrParam[4] = "COMBO,cmbSHRFRCW_CODE,dsSHRFRCW_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  row position 변경될 때마다 해당 경조코드 신청건수 조회     |
         +-------------------------------------*/
        this.fn_SetCodeUseCnt = function (obj) {

        	var iRow = this.dsCW_COCOBS.rowposition;
        	var sStatus = this.dsCW_COCOBS.getRowType(iRow);
        	
        	if (this.fnc_ToUpper(sStatus) != Dataset.ROWTYPE_INSERT) {
        		this.fn_CodeCheck();
        	}

        
        }

        /*------------------------+
         |  삭제전 경조금 신청 이력이 있는 경조코드인지 체크  |
         +------------------------*/
        this.fn_CodeCheck = function (obj) {
        	
        	this.fnc_DatasetClear('dsCW_COCOBS_CHK');

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COCOBS_CHK=dsCW_COCOBS_CHK";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	//this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_COCOBS.addEventHandler("onrowposchanged", this.fn_SetCodeUseCnt, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_COCOBS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
