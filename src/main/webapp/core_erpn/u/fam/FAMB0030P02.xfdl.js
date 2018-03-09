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
                this.set_name("FAMB0030P02");
                this.set_titletext("미결발생전표선택조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,900,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BANJ_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COND_VACD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"FORI_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRCOND_CODE</Col><Col id=\"COMBOID\">FAM0002</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\">관리구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT", "absolute", "15", "129", null, null, "15", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"109\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"발생번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"2\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"정산금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"5\" displaytype=\"text\" text=\"적요\"/><Cell col=\"6\" displaytype=\"text\" text=\"관리항목\"/><Cell col=\"7\" displaytype=\"text\" text=\"만기일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BANJ_AMNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COND_VANM\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ENDX_DATE\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;BANJ_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;BALA_AMNT&quot;)\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "108", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "69", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VANM", "absolute", "473", "72", "128", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "402", "46", "200", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "320", "46", "80", "21", null, null, this);
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VACD", "absolute", "320", "72", "128", "21", null, null, this);
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "252", "72", "68", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("관리항목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "252", "46", "68", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "103", "46", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");

            obj = new Combo("cmbSHRCOND_CODE", "absolute", "103", "72", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCOND_CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_index("-1");

            obj = new Static("Static7", "absolute", "35", "72", "68", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("관리구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "35", "46", "68", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRCOND_VACD", "absolute", "450", "72", "21", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "568", "31", "110", "4", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "541", "0", "110", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "104", "80", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "38", "30", "63", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "439", "485", "110", "15", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("미결발생전표선택조회");
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
        this.addIncludeScript("FAMB0030P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0030P02.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMB0030P02";

        this.sSLIP_NUMB = "";
        this.sSLIP_LINE = "";

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
        		
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"DISP_NUMB", "Y");	//행번호포함
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.cmbSHRACCT_UNIT.set_value(this.parent.sACCT_UNIT);
        	this.edtSHRACCT_INTL.set_value(this.parent.sACCT_INTL);
        	this.edtSHRACCT_NAME.set_value(this.parent.sACCT_NAME);
        	this.cmbSHRCOND_CODE.set_value(this.parent.sCOND_CODE);

           	this.sSLIP_NUMB = this.parent.sSLIP_NUMB;
           	this.sSLIP_LINE = this.parent.sSLIP_LINE;

            this.fn_COND_CODE_set();
            
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
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT"); 
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();
        	
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
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
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

        	if ((this.fnc_DatasetChangeCheck("dsTA_SLIPNT"))) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);	
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "계정과목", this.edtSHRACCT_INTL);	
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRCOND_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM300", "미결사용으로 체크된 관리항목이 존재하지 않아 관리구분값이 지정되지 않았습니다.", this.cmbSHRCOND_CODE);	
        	}
        	
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

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value));
        		sReturnString += " COND_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOND_CODE.value));
        		sReturnString += " COND_VACD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOND_VACD.value));

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
        	
        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0"; //회계단위(조회)
        		this.fnc_CommonCodeInnerBind(arrParam);	
        	
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam    = new Array();
        			arrParam[0] = "COMBO,cmbSHRCOND_CODE,dsSHRCOND_CODE,0"; //관리구분(조회)
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	//기능없음
        }

        
        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

        	if ((obj.name == "ImgHelpSHRCOND_VACD") || (obj.name == "edtSHRCOND_VANM")) {

        	    //관리항목
        		var sCOMB_IDXX = this.dsSHRCOND_CODE.getColumn(this.dsSHRCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        		var sCOMM_CODE = this.dsSHRCOND_CODE.getColumn(this.dsSHRCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMM_CODE");
                
                arrParam[0] = sCOMB_IDXX;           
        		arrParam[1] = sCOMM_CODE;
                arrParam[2] = this.fnc_Trim(this.edtSHRCOND_VANM.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCOND_VANM";                         
                arrParam[5] = "edtSHRCOND_VACD,edtSHRCOND_VANM";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

            } 
        }
         
         /*----------------------+
         |  관리구분 클릭 時  |
         +----------------------*/
        this.cmbSHRCOND_CODE_onitemchanged = function(obj,e) {	    
        	
        	//관리항목 초기화
        	this.edtSHRCOND_VACD.set_value(""); 
        	this.edtSHRCOND_VANM.set_value("");
        	
        	this.fn_COND_CODE_set();
        	
        }

         /*----------------------+
         |  관리항목정리  |
         +----------------------*/
        this.fn_COND_CODE_set = function() {	    
        	
        	//관리항목
        	var sCOMB_IDXX = this.dsSHRCOND_CODE.getColumn(this.dsSHRCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        	
        	if (this.fnc_Length(this.fnc_Trim(sCOMB_IDXX)) < 1) {

        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, false);
        		this.ImgHelpSHRCOND_VACD.set_visible(false);
        		this.edtSHRCOND_VANM.set_visible(false);
        		
        		this.edtSHRCOND_VACD.setFocus();
        		
        	} else {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, true);
        		this.ImgHelpSHRCOND_VACD.set_visible(true);
        		this.edtSHRCOND_VANM.set_visible(true);
        		
        		this.edtSHRCOND_VANM.setFocus();
        	}
        }

        
        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName == "DISP_NUMB") {
        		
        	    var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	    if(this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}
        		
        	} else {
        	
        		var arrReturn = new Array(3);

        		// 반환 할 자료(Array) 만들기
        		arrReturn[0] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");	//발생전표번호
        		arrReturn[1] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");	//발생전표라인번호
        		arrReturn[2] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DISP_NUMB");	
        		arrReturn[3] = this.sSLIP_NUMB;		//현재번호
        		arrReturn[4] = this.sSLIP_LINE;		//현재라인번호
        		arrReturn[5] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_AMNT");	//전표금액
        		arrReturn[6] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CURR_GUBN");	//통화
        		arrReturn[7] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "EXCH_RATE");	//환율
        		arrReturn[8] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "FORI_AMNT");	//외화금액
        		arrReturn[9] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "REMK_NAME");	//적요
        		arrReturn[10] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BALA_AMNT");	//잔액

        		this.fnc_PopupClose(arrReturn);
        		
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT.addEventHandler("onrowposchanged", this.dsTA_SLIPNT_OnRowPosChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.edtSHRCOND_VANM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL.addEventHandler("ontextchanged", this.edtSHRACCT_INTL_OnChanged, this);
            this.edtSHRCOND_VACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.cmbSHRACCT_UNIT_OnChanged, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onitemchanged", this.cmbSHRCOND_CODE_onitemchanged, this);
            this.cmbSHRCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpSHRCOND_VACD.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMB0030P02.xfdl");
        this.loadPreloadList();
       
    };
}
)();
