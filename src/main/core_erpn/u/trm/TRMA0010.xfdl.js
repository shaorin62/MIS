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
                this.set_name("TRMA0010");
                this.set_titletext("자금계획관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\"/><Column id=\"PROV_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"EXCE_SEQN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"MONE_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"800\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRBANK_INOU</Col><Col id=\"CODEID\">BANK_INOU</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHREXCE_GUBN</Col><Col id=\"CODEID\">EXCE_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsEXCE_GUBN</Col><Col id=\"CODEID\">EXCE_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsEXCE_GRUP</Col><Col id=\"CODEID\">EXCE_GRUP</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_MONEPL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"43\" band=\"left\"/><Column size=\"144\" band=\"left\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"258\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"대분류\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background: ;\" text=\"계좌명\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"은행\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:EXCE_GRUP\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:EXCE_GUBN\" editlimit=\"0\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:EXCE_SEQN\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACNT_NUMB\" editlimit=\"0\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:ACNT_NAME\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:BANK_CODE\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:MONE_AMNT\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "86", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static03", "absolute", "225", "71", "76", "21", null, null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "422", "71", "78", "21", null, null, this);
            obj.set_text("지급구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "490", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Calendar("calSHRPROV_DATE", "absolute", "293", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static01", "absolute", "659", "71", "78", "21", null, null, this);
            obj.set_text("입출구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "727", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Div("divButtonList", "absolute", "8", "35", "200", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "110", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("일계획가져오기");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("자금계획관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("35");
            obj.set_text("홈 > 자금관리 > 자금운용관리 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "196", "61", "40", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자금계획관리");
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
        this.addIncludeScript("TRMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0010 자금계획관리
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
        this.sBUTTONLIST 	= "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "TRMA0010";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.calSHRPROV_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.grdTA_MONEPL.setFocus();
        	
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
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
            this.fnc_DatasetClear("dsTA_MONEPL");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MONEPL=dsTA_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.cmbSHRACCT_UNIT.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var nRow = this.dsTA_MONEPL.addRow();
        	this.dsTA_MONEPL.setColumn(nRow, "CURR_GUBN", "KRW")
        	
        	// edittype 처리
        	this.grdTA_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MONEPL, "EXCE_GUBN"), "edittype", "combo");
        	
        	this.fnc_GridSetCellFocus(this.grdTA_MONEPL, "EXCE_GUBN");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	//if (this.fn_DeleteCheck()) this.dsTA_MONEPL.deleteRow(this.dsTA_MONEPL.rowposition);
        	if (this.fn_DeleteCheck()) this.dsTA_MONEPL.deleteMultiRows(this.grdTA_MONEPL.getSelectedDatasetRows());
        	this.grdTA_MONEPL.setFocus();
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_MONEPL");
        	this.grdTA_MONEPL.setFocus();
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_MONEPL=dsTA_MONEPL:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MONEPL.setFocus();

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
        	// 기능없음.
        }

         /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/

        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MONEPL",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
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

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPROV_DATE.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRPROV_DATE);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_MONEPL);
        	
        	if (iSelectRowCount > 1) {
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sExce_Gubn = this.dsTA_MONEPL.getColumn(this.dsTA_MONEPL.rowposition, "EXCE_GUBN");
        	
        		var sQuestionText = " 지급구분 (" + this.dsEXCE_GUBN.getColumn(this.dsEXCE_GUBN.findRow("COMD_CODE", sExce_Gubn), "COMD_CDNM") + ")";
        		sQuestionText += " 순번 (" +  this.fnc_Trim(this.dsTA_MONEPL.getColumn(this.dsTA_MONEPL.rowposition, "EXCE_SEQN")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_MONEPL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var row = 0; row < this.dsTA_MONEPL.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_MONEPL.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MONEPL.getColumn(row, "EXCE_GUBN"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "지급구분", this.dsTA_MONEPL, row, this.grdTA_MONEPL, "EXCE_GUBN");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_MONEPL.getColumn(row, "MONE_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "금액", this.dsTA_MONEPL, row, this.grdTA_MONEPL, "MONE_AMNT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MONEPL.getColumn(row, "REMK_NOTE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용", this.dsTA_MONEPL, row, this.grdTA_MONEPL, "REMK_NOTE");
        		}
        	
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value); //회계단위
        		sReturnString += " PROV_DATE=" + this.fnc_Quote(this.calSHRPROV_DATE.value); //기준일자
        		sReturnString += " EXCE_GUBN=" + this.fnc_Quote(this.cmbSHREXCE_GUBN.value); //지급구분
        		sReturnString += " BANK_INOU=" + this.fnc_Quote(this.cmbSHRBANK_INOU.value); //입출입구분

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " PROV_DATE=" + this.fnc_Quote(this.calSHRPROV_DATE.value);

        	} else if (sKind == "PROC00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " PROV_DATE=" + this.fnc_Quote(this.calSHRPROV_DATE.value);

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

        	if (sMethodName == "SEARCH00")	{

        		this.fnc_Information(this.stInformation, this.dsTA_MONEPL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MONEPL.rowcount);
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "PROC00") {

        		this.fnc_Message("TMM125", "일 계획 가져오기 처리 되었습니다");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRBANK_INOU,dsSHRBANK_INOU,0";
        			arrParam[2] = "COMBO,cmbSHREXCE_GUBN,dsSHREXCE_GUBN,0";
        			arrParam[3] = "GRID,grdTA_MONEPL,dsEXCE_GUBN,EXCE_GUBN";
        			arrParam[4] = "GRID,grdTA_MONEPL,dsBANK_CODE,BANK_CODE";
        			arrParam[5] = "GRID,grdTA_MONEPL,dsCURR_GUBN,CURR_GUBN";
        			arrParam[6] = "GRID,grdTA_MONEPL,dsEXCE_GRUP,EXCE_GRUP";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.dsSHRBANK_INOU.filter("COMD_CODE != 'FC040090'");

        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (e.newrow == -1)	return;
        	
        	// edittype 처리
        	if (this.fnc_ToUpper(this.dsTA_MONEPL.getRowType(this.dsTA_MONEPL.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTA_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MONEPL, "EXCE_GUBN"), "edittype", "combo");
        	} else {
        		this.grdTA_MONEPL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTA_MONEPL, "EXCE_GUBN"), "edittype", "none");
        	}

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

            if (obj.name == "grdTA_MONEPL") {
        		
        		if (sColumnID == "ACNT_NUMB" || this.fnc_getColId(obj, obj.currentcell) == "ACNT_NUMB") {
        			arrParam[0] = "TRM0013";
        			arrParam[1] = "";
        			arrParam[2] = "ACNT_NUMB";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTA_MONEPL";
        			arrParam[5] = "BANK_CODE,ACNT_NUMB,ACNT_NAME";
        			arrParam[6] = "0,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}

        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {
        	this.dsTA_MONEPL.clearData();
        	this.stInformation.set_text("");
        }

        /*--------------------------+
         |  일계획가져오기처리           |
         +---------------------------*/
        this.btn_PROC_OnClick = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsTA_MONEPL"))	return this.fnc_Message("TMM023");

        	var sQuestionText  = "(" + this.calSHRPROV_DATE.text + ") 일자에 등록된 자료가 있으면 모두 삭제됩니다.. " + String.fromCharCode(10);
        		sQuestionText += "일계획가져오기를 진행하시겠습니까"; 
        	if (!this.fnc_Message("TMM140", sQuestionText))	return;

        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MONEPL.setFocus();

        }

        /*-----------------------+
         |  그리드 팝업 이벤트 |
         +-----------------------*/
        this.dsTA_ACCTXD_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "ACNT_NUMB") this.fn_HelpDialoge(this.grdTA_MONEPL, "YES", e.oldvalue, e.columnid);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_MONEPL.addEventHandler("oncolumnchanged", this.dsTA_ACCTXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREXCE_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPROV_DATE.addEventHandler("ontextchange", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBANK_INOU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divButtonList.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
