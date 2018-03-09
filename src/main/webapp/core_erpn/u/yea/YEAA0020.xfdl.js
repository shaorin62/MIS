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
                this.set_name("YEAA0020");
                this.set_titletext("간이세액산출근거");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsYEA_CAL_TYPE_CD</Col><Col id=\"CODEID\">YEA_00002</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/><Col id=\"REMK\">산출구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsYEA_STD_YYMM</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"PARAM\">기준년월</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">YEAA0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_TAXBAS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TAX_CAL_SEQ\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CAL_TYPE_CD\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CAL_ITEM_CD\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CAL_ITEM_NM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_CAL_CONTENT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_A_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_B_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_C_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_D_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_E_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_F_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_G_VALUE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"YEA_NOTE\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SORT_ORD\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "235", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnDATA_COPY", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("산출근거 복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("간이세액산출근거");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 연말정산 > 간이세액산출근거");
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

            obj = new Grid("grdYEA_TAXBAS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsYEA_TAXBAS");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"산출구분\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"산출항목코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"산출항목명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"산출내용\"/><Cell col=\"4\" text=\"A값\"/><Cell col=\"5\" text=\"B값\"/><Cell col=\"6\" text=\"C값\"/><Cell col=\"7\" text=\"D값\"/><Cell col=\"8\" text=\"E값\"/><Cell col=\"9\" text=\"F값\"/><Cell col=\"10\" text=\"G값\"/><Cell col=\"11\" text=\"비고\"/><Cell col=\"12\" text=\"정렬\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:YEA_CAL_TYPE_CD\" suppress=\"bind:YEA_CAL_TYPE_CD\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:YEA_CAL_ITEM_CD\" editlimit=\"4\" editimemode=\"hangul\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_CAL_ITEM_NM\" wordwrap=\"char\" editimemode=\"hangul\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_CAL_CONTENT\" wordwrap=\"char\" editimemode=\"hangul\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_A_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_B_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_C_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_D_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_E_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_F_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_G_VALUE\" mask=\"#,##0.#####\" editlimit=\"20\"/><Cell col=\"11\" edittype=\"normal\" style=\"align:left;\" text=\"bind:YEA_NOTE\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:YEA_SORT_ORD\" mask=\"###\" maskchar=\" \" editlimit=\"20\" editlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYEA_STD_YYMM", "absolute", "96", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new PopupDiv("popCopyYYMM", "absolute", "412", "845", "266", "88", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "248", "39", null, null, this.popCopyYYMM);
            obj.set_taborder("67");
            obj.set_cssclass("styFormItemBoxOut");
            this.popCopyYYMM.addChild(obj.name, obj);
            obj = new Static("stYEA_STD_YYMM", "absolute", "33", "16", "90", "25", null, null, this.popCopyYYMM);
            obj.set_text("기준년월");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("left");
            this.popCopyYYMM.addChild(obj.name, obj);
            obj = new Div("divYEA_STD_YYMM", "absolute", "101", "18", "95", "21", null, null, this.popCopyYYMM);
            obj.set_taborder("27");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popCopyYYMM.addChild(obj.name, obj);
            obj = new Button("btnOK", "absolute", "119", "54", "62", "24", null, null, this.popCopyYYMM);
            obj.set_taborder("65");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopyYYMM.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "195", "54", "62", "24", null, null, this.popCopyYYMM);
            obj.set_taborder("66");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popCopyYYMM.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("30");
            obj.set_text("h 15");
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

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 266, 88, this.popCopyYYMM,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popCopyYYMM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("간이세액산출근거");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("YEAA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0020 간이세액산출근거
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0020";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
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
        	this.fnc_DatasetClear("dsYEA_TAXBAS");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsYEA_TAXBAS=dsYEA_TAXBAS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {    
            if (this.fnc_Length(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)) < 6 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.cmbSHRYEA_STD_YYMM);
            }
            
        	var iRow = this.dsYEA_TAXBAS.insertRow(this.dsYEA_TAXBAS.rowposition + 1);
        	this.dsYEA_TAXBAS.set_rowposition(iRow); 
        	
        	this.dsYEA_TAXBAS.setColumn(iRow, "YEA_STD_YYMM", this.cmbSHRYEA_STD_YYMM.value);   // YEA_기준년도
        	
        	this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_TYPE_CD"));
            this.grdYEA_TAXBAS.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsYEA_TAXBAS.deleteMultiRows(this.grdYEA_TAXBAS.getSelectedDatasetRows());
        	this.grdYEA_TAXBAS.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsYEA_TAXBAS");
        	this.grdYEA_TAXBAS.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsYEA_TAXBAS=dsYEA_TAXBAS:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_TAXBAS", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsYEA_TAXBAS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

            if (this.fnc_Length(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)) < 6 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.cmbSHRYEA_STD_YYMM);
            }
            
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsYEA_TAXBAS.getRowCount() < 1) {
        		this.fnc_Alert("삭제 할 자료가 없습니다!");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdYEA_TAXBAS);

        	//if (iSelectRowCount > 1) {
            //    return this.fnc_Confirm("선택된 자료 [ " + iSelectRowCount + " ] 건을 삭제 하시겠습니까?");
        	//} else {
        		var sQuestionText = "산출항목명 : " + this.dsYEA_TAXBAS.getColumn(this.dsYEA_TAXBAS.rowposition, "YEA_CAL_ITEM_NM");
        		return this.fnc_Confirm("[ " + sQuestionText + " ] 자료를 삭제 하시겠습니까?");
        	//}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {	
        	if (!this.fnc_DatasetChangeCheck("dsYEA_TAXBAS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	//필수 입력 항목 체크
        	for (var i = 0; i < this.dsYEA_TAXBAS.getRowCount(); i++) {
                if ( this.fnc_ToUpper(this.dsYEA_TAXBAS.getRowType(i)) == Dataset.ROWTYPE_NORMAL ) {
                    continue;
                }        
                
                if (this.dsYEA_TAXBAS.getCaseCount("YEA_CAL_TYPE_CD==" + this.fnc_Quote(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_TYPE_CD")) 
                        + " && YEA_CAL_ITEM_CD==" + this.fnc_Quote(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_ITEM_CD"))) > 1) {            
                    this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD"));
        			return this.fnc_CheckPostAction("YEA001", "산출항목코드", this.dsYEA_TAXBAS, i, this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD");
                }        
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_TYPE_CD"))) < 1 ) {
                    this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_TYPE_CD"));
        			return this.fnc_CheckPostAction("TMM072", "산출구분", this.dsYEA_TAXBAS, i, this.grdYEA_TAXBAS, "YEA_CAL_TYPE_CD");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_ITEM_CD"))) < 1 ) {
                    this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD"));
        			return this.fnc_CheckPostAction("TMM072", "산출항목코드", this.dsYEA_TAXBAS, i, this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_ITEM_NM"))) < 1 ) {
                    this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_ITEM_NM"));
        			return this.fnc_CheckPostAction("TMM072", "산출항목명", this.dsYEA_TAXBAS, i, this.grdYEA_TAXBAS, "YEA_CAL_ITEM_NM");
                }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsYEA_TAXBAS.getColumn(i, "YEA_CAL_CONTENT"))) < 1 ) {
                    this.grdYEA_TAXBAS.setCellPos(this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_CONTENT"));
        			return this.fnc_CheckPostAction("TMM072", "산출내용", this.dsYEA_TAXBAS, i, this.grdYEA_TAXBAS, "YEA_CAL_CONTENT");
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
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YYMM=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)); 
        		
        	// 복사 Argument 생성
        	} else if (sKind == 'PROC00') {
        	
        		sReturnString  = " pgm=" 				+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 			+ this.fnc_Quote(sKind);
        		sReturnString += " SRC_YEA_STD_YYMM=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value));
        		sReturnString += " TAR_YEA_STD_YYMM=" 	+ this.fnc_Quote(this.fnc_Trim(this.popCopyYYMM.divYEA_STD_YYMM.fn_GetMonth()));

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
        		this.fnc_Information(this.stInformation, this.dsYEA_TAXBAS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_TAXBAS.getCaseCount("dataset.getRowLevel(currow)==0"));
        			
        	} else if (sMethodName == 'PROC00') {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.popCopyYYMM_btnClose_OnClick();
                
                this.fnc_Message("TMM130", "복사");
                		
        		this.fnc_GetUserComboDs(this.dsUserCombo);
        		this.cmbSHRYEA_STD_YYMM.value = this.popCopyYYMM.divYEA_STD_YYMM.value;		
                this.fn_Search();
                
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();		
        		    arrParam[0] = "GRID,grdYEA_TAXBAS,dsYEA_CAL_TYPE_CD,YEA_CAL_TYPE_CD";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
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
        	if (obj.name == "dsYEA_TAXBAS") {
        		if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        			this.grdYEA_TAXBAS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_TYPE_CD"), "edittype", "combo");
        			this.grdYEA_TAXBAS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD"), "edittype", "text");
        			
        		} else {
        			this.grdYEA_TAXBAS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_TYPE_CD"), "edittype", "none");
        			this.grdYEA_TAXBAS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_TAXBAS, "YEA_CAL_ITEM_CD"), "edittype", "none");
        			
        		}
        	
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        /*------------+
         |  팝업열기 |
         +------------*/ 
        this.fn_DataCodeCopy = function(obj,e)
        {
        	var nX  = system.clientToScreenX(this.btnDATA_COPY, 0);
        	var nY  = system.clientToScreenY(this.btnDATA_COPY, this.btnDATA_COPY.getOffsetHeight());
        		nX -= system.clientToScreenX(application.mainframe,0);
        		nY -= system.clientToScreenY(application.mainframe,0);	
        	this.popCopyYYMM.trackPopup(nX, nY);
        	this.popCopyYYMM.divYEA_STD_YYMM.setFocus();
        }

        /*------------+
         |  팝업닫기 |
         +------------*/
        this.popCopyYYMM_btnClose_OnClick = function (obj,e) 
        {
        	this.popCopyYYMM.closePopup();
        }

        
        this.popINSERT_btnOK_OnClick = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsYEA_TAXBAS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.popCopyYYMM.divYEA_STD_YYMM.fn_GetMonth())) < 6 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "대상 기준년월", this.popCopyYYMM.divYEA_STD_YYMM);
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value)) < 6 ) {
                return this.fnc_SearchCheckPostAction("TMM072", "현재 기준년월", this.cmbSHRYEA_STD_YYMM);
            }
            
            if (this.fnc_Trim(this.popCopyYYMM.divYEA_STD_YYMM.fn_GetMonth()) == this.fnc_Trim(this.cmbSHRYEA_STD_YYMM.value) ) {
                return this.fnc_SearchCheckPostAction("YEA002", "대상 기준년월,현재 기준년월", this.popCopyYYMM.divYEA_STD_YYMM);
            }
            
            if (this.fnc_Message("YEA003", "대상 기준년월","현재 기준년월") == false) return false;
            
            
        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnDATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdYEA_TAXBAS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.popCopyYYMM.btnOK.addEventHandler("onclick", this.popINSERT_btnOK_OnClick, this);
            this.popCopyYYMM.btnClose.addEventHandler("onclick", this.popCopyYYMM_btnClose_OnClick, this);

        };

        this.loadIncludeScript("YEAA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
