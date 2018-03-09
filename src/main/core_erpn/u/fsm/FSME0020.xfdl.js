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
                this.set_name("FSME0020");
                this.set_titletext("부서별자산실사");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_INVTXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" type=\"STRING\"/><Column id=\"OLDX_ASST\" size=\"30\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"INVT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ASST_STNM\" size=\"100\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ACTU_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"ACTU_NUMB\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CHAR_NUMB\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DESC_REMK\" size=\"100\" type=\"STRING\"/><Column id=\"CHCK_DATE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRACTU_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ACTU_CODE</Col><Col id=\"DSNAME\">dsACTU_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">FSM0001</Col><Col id=\"DSNAME\">dsSHRINVT_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"PARAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "404", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_INVTXD", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_autoenter("select");
            obj.set_binddataset("dsFS_INVTXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"110\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"166\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"자산번호\"/><Cell col=\"2\" text=\"자산명\"/><Cell col=\"3\" text=\"취득일\"/><Cell col=\"4\" text=\"취득가격\"/><Cell col=\"5\" text=\"미상각잔액\"/><Cell col=\"6\" text=\"자산상태\"/><Cell col=\"7\" text=\"자산수량\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"실사결과\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"실사수량\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:ACQS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:ACQU_PRIC\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:UNDP_BALE\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ASST_STNM\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:ACQU_NUMB\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:ACTU_CODE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align: ;\" text=\"bind:ACTU_NUMB\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"normal\" style=\"align: ;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", null, "133", "217", "21", "19", null, this);
            obj.set_text("실사수량과 비고만 입력 가능합니다.");
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "822", "71", "69", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("실사여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "388", "97", "84", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "388", "71", "84", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("조사부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "84", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "28", "71", "84", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("자산실사");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "575", "97", "218", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "456", "97", "95", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "456", "71", "95", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "575", "71", "218", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "209", "97", "150", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_CODE", "absolute", "98", "97", "86", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRINVT_CODE", "absolute", "98", "71", "261", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Combo("cmbSHRACTU_YSNO", "absolute", "890", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "186", "97", "21", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "552", "97", "21", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "552", "71", "21", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("부서별자산실사");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("27");
            obj.set_text("홈 > 자산관리 > 부서별자산실사");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "649", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "252", "61", "38", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "252", "92", "102", "5", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "252", "118", "38", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서별자산실사");
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
        this.addIncludeScript("FSME0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSME0020.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSME0020 자산변동관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
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
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSME0020"; 

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
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	//this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        	//this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	//this.edtSHRDEPT_NAME.UserData = application.GBL_DEPTNM;
        	//this.cmbSHRINVT_CODE.setFocus();
        	
        	// 최근자산 실사 가져오기
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsINVT_CODE=dsINVT_CODE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

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

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsFS_INVTXD"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_INVTXD=dsFS_INVTXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_INVTXD.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_INVTXD");
        	this.grdFS_INVTXD.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_INVTXD=dsFS_INVTXD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_INVTXD.setFocus(); 

        }

        /*-------------------------+
         |  08.엑셀 버튼 클릭 時 |
         --------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-------------------------+
         |  09.인쇄 버튼 클릭 時 |
         +-------------------------*/
        this.fn_Print = function (obj) {
             //기능 없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_INVTXD", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
         /*-------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsFS_INVTXD")){
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRINVT_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "자산실사", this.cmbSHRINVT_CODE);
        	}
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_INVTXD")) {
        		this.fnc_Message("TMM003"); 
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsFS_INVTXD.getRowCount(); i++){
        		
        		if (this.dsFS_INVTXD.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_INVTXD.getColumn(i, "ACTU_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "실사수량", this.dsFS_INVTXD, i, this.grdFS_INVTXD, "ACTU_NUMB");
        		}
        		
        	}
        	
        	return true;
        	
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " INVT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRINVT_CODE.value)); //조사재물조사
        		sReturnString += " ACTU_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACTU_YSNO.value)); //실사여부
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서

        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!      |
         +------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsFS_INVTXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_INVTXD.getCaseCount("dataset.getRowLevel(currow)==0"));		
        		
        		
        		 if (  this.fnc_Trim(this.dsFS_INVTXD.getColumn(0, "CHCK_DATE")) == 'N' ) {
        		   this.grdFS_INVTXD.set_enable(false);
        		 }else{
        		    this.grdFS_INVTXD.set_enable(true);
        		 }
        		 

        	} else if (sMethodName == "SEARCH01") {

        		this.cmbSHRINVT_CODE.set_index(1);
        	
        	} else if (sMethodName == "SAVE00"){

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();	
        			arrParam[0]  = "COMBO,cmbSHRACTU_YSNO,dsSHRACTU_YSNO,0";	//실사여부(조회)	
        			arrParam[1]  = "GRID,grdFS_INVTXD,dsACTU_CODE,ACTU_CODE";	//실사결과(그리드)	
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRINVT_CODE,dsSHRINVT_CODE,0";		//자산실사(조회)
        		this.fnc_UserComboInnerBind(arrParam);	
        		
        	}

        }

        /*-----------------+
         |  팝업 Setting  |
         +-----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
        	
        	 // 조사부서 (Popup)
            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	// 자산분류 (Popup)
            } else if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {

                arrParam[0] = "FSM0002";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRASCL_NAME";
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            
            // 품목분류 (Popup)
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {

                arrParam[0] = "FSM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCLSF_NAME";
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";
                arrParam[6] = "10,0";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

             }
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        this.cmbSHRINVT_CODE_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRINVT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRINVT_CODE.addEventHandler("onitemchanged", this.cmbSHRINVT_CODE_onitemchanged, this);
            this.cmbSHRACTU_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSME0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
