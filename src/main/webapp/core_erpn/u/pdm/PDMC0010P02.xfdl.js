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
                this.set_name("PDMC0010");
                this.set_titletext("제작의뢰조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBNXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("제작의뢰조회");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("제작관리>제작의뢰조회");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "95", "400", "21", null, null, this);
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

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "37", "23", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "242", "68", "68", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "303", "68", "110", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_JOBNXM", "absolute", "0.8%", "120", null, "369", "2.51%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsPD_JOBNXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"284\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"261\"/><Column size=\"0\"/><Column size=\"103\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"text\" text=\"제작번호\"/><Cell col=\"1\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"2\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"3\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"4\" style=\"background: ;\" text=\"견적명\"/><Cell col=\"5\" style=\"background: ;\" text=\"결재상태코드\"/><Cell col=\"6\" style=\"background: ;\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APPR_STAT\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"background:aqua;background2:aqua;\" text=\"bind:APPR_STAT_STR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAll", "absolute", "737", "70", "18", "18", null, null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "688", "68", "48", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "1.76%", "61", null, "36", "92.35%", null, this);
            obj.set_taborder("20");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "210", "61", "42", "36", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "88", "61", "13", "35", null, null, this);
            obj.set_taborder("22");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "29", "68", "69", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("제작번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "100", "68", "111", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "289", "61", "14", "35", null, null, this);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "444", "68", "70", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "512", "68", "145", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@dsCombo");

            obj = new Static("Static05", "absolute", "413", "61", "42", "36", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 850, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작의뢰조회");
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
        this.addIncludeScript("PDMC0010P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PDMC0010P02.xfdl", function() {
        /***************************************************************************************************
         * # Program:	PDMC0010P01 견적 템플릿 적용을 위한  팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.21		오세훈		Initial Created.
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

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "PDMC0010";

        
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
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_JOBNXM"); 
        	
        	var sMethodName = "SEARCH20";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPD_JOBNXM=dsPD_JOBNXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_JOBNXM.setFocus();

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
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPD_JOBNXM", this);
        		
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

        	if ((this.fnc_DatasetChangeCheck("dsPD_JOBNXM"))) return this.fnc_Message("TMM023");
        	
        	
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

        	if (sKind == "SEARCH20") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value);
        		sReturnString += " APPR_STAT=" + this.fnc_Quote(this.cmbSHRAPPR_STAT.value);
        		
        		//체크가 아닐경우 견적과 제작건이 매핑되지 않은건만 조회
        		if(this.chkAll.value == false){
        			sReturnString += " CHKX_IDXX=" + this.fnc_Quote("FALSE");
        		}
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
        	
        	if (sMethodName == "SEARCH20") {
        		
        		this.fnc_Information(this.stInformation, this.dsPD_JOBNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPD_JOBNXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
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
        		arrReturn[0] = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NUMB");		
        		arrReturn[1] = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NAME");		
        		arrReturn[2] = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "PREE_NAME");		
        		

        		this.fnc_PopupClose(arrReturn);
        	
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_JOBNXM.addEventHandler("onrowposchanged", this.dsTA_SLIPNT_OnRowPosChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtSHRJOBN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPD_JOBNXM.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PDMC0010P02.xfdl");
        this.loadPreloadList();
       
    };
}
)();
