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
                this.set_name("PAYB0170P01");
                this.set_titletext("급여처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,755);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PMDCAL", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REWK_DCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FWRK_DCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USIT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "43", "15", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_CODE", "absolute", "187", "46", "110", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "82", "264", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDCAL", "absolute", "15", "103", null, null, "15", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PMDCAL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"87\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"64\"/><Column size=\"81\"/><Column size=\"93\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" displaytype=\"text\" text=\"기준일\"/><Cell col=\"4\" displaytype=\"text\" text=\"소속\"/><Cell col=\"5\" displaytype=\"text\" text=\"부서\"/><Cell col=\"6\" displaytype=\"text\" text=\"직위\"/><Cell col=\"7\" text=\"직책\"/><Cell col=\"8\" displaytype=\"text\" text=\"급여형태\"/><Cell col=\"9\" text=\"근무상태\"/><Cell col=\"10\" text=\"실제근무일수\"/><Cell col=\"11\" displaytype=\"text\" text=\"전체근무일수\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:EMPL_NUMB\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:EMPL_NAME\" suppress=\"0\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:DURS_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CLSD_NAME\"/><Cell col=\"9\" edittype=\"none\" style=\"align:center;\" text=\"bind:WRKS_NAME\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" style=\"align:right;\" text=\"bind:REWK_DCNT\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FWRK_DCNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "182", "46", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "369", "46", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "451", "46", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "474", "46", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "331", "46", "49", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "35", "46", "63", "21", null, null, this);
            obj.set_text("지급일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "90", "46", "90", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "4", "15", "461", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1055", "12", "15", "461", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "78", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "740", "110", "15", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16", "36", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "82", "36", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "302", "36", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 755, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여처리");
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
        this.addIncludeScript("PAYB0170P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0170P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0170P01 급여처리(팝업)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		고민주		Initial Created.
         *   2016.10.31		안윤준		수정.
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
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "PAYB0170P01"; 

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
        	this.medSHRPAYX_DATE.set_value(this.parent.sPAYX_DATE);
        	this.edtSHRWAGE_CODE.set_value(this.parent.sWAGE_CODE);
        	this.edtSHRWAGE_NAME.set_value(this.parent.sWAGE_NAME); 
        	
        	this.medSHRPAYX_DATE.set_readonly(true);   					
        	this.edtSHRWAGE_NAME.set_readonly(true);    					
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
        	this.fnc_DatasetClear("dsPY_PMDCAL");

        	var sMethodName = "SEARCH03";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDCAL=dsPY_PMDCAL";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "PAYB0170", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMDCAL.setFocus();

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
        	this.fnc_DataSetCancel("dsPY_PMDCAL");
        	this.grdPY_PMDCAL.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMDCAL", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_PMDCAL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
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

        	if (sKind == "SEARCH03") {	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 	 
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		
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
        	
        	if (sMethodName == "SEARCH03") {
        		this.fnc_Information(this.stInformation, this.dsPY_PMDCAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMDCAL.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array(); 
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
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
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_PMDCAL.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYB0170P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
