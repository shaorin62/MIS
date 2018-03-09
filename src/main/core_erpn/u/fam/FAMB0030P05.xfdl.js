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
                this.set_name("FAMB0030P05");
                this.set_titletext("증빙선택조회 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,740,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_VATCDH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EVID_DOCU\" size=\"10\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"10\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHREVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsBULG_GUBN</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "15", "82", "272", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("4");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VATCDH", "absolute", "15", "103", null, null, "15", "15", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_VATCDH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"240\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align: center middle;\" text=\"증빙종류\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center middle;\" text=\"매입/매출\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center middle;\" text=\"부가세종류\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center middle;\" text=\"부가세유형\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center middle;\" text=\"불공제\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:EVID_DOCU\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:VATX_GUBN\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:VATX_TYPE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:PURC_GUBN\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:BULG_GUBN\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "15", "35", null, "43", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "34", "46", "65", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("증빙종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_DOCU", "absolute", "103", "46", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Static("Static04", "absolute", "282", "46", "73", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_GUBN", "absolute", "350", "46", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "725", "0", "15", "461", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "446", "78", "80", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "38", "30", "37", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "485", "110", "15", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 740, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증빙선택조회 팝업");
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
        this.addIncludeScript("FAMB0030P05.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0030P05.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMB0050P01 전표변경내역조회 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.09		양현덕		Initial Created.
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
        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMB0030P05";
        this.sALLX_YSNO   = "";
        this.sLoadForm    = "";
        this.sSlipNumb    = "";

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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){
        		
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	if( this.fnc_Length(this.fnc_Trim(this.parent.sEVID_DOCU)) > 0 || this.fnc_Length(this.fnc_Trim(this.parent.sVATX_GUBN)) > 0 ) {
        	
        		this.cmbSHREVID_DOCU.set_value(this.parent.sEVID_DOCU);
        		this.cmbSHRVATX_GUBN.set_value(this.parent.sVATX_GUBN);
        		this.fn_Search();
        		
        	}
        	
        	//증빙종류(조회조건)
        	if ( this.fnc_Trim(this.parent.sSEAR_GUBN) == "E") {
        		this.fnc_SetReadonly(this.cmbSHREVID_DOCU, false);
        	} else {
        		this.fnc_SetReadonly(this.cmbSHREVID_DOCU, true);
        	}
        	
        	this.grdTA_VATCDH.setFocus();
        	this.cmbSHREVID_DOCU.setFocus();
        	
        }
         
        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_VATCDH");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_VATCDH=dsTA_VATCDH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_VATCDH.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj,e){
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj,e){
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e){

        	if(e.fromobject instanceof Div) return;
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VATCDH",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	
        	return this.fnc_FormUnloadCheck(obj, this);
        	
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
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
         *                                      공통 Function 처리 부분                                  *
         **************************************************************************************************/
        /*-------------------+
         |  조회 여부 체크! |
         +-------------------*/
        this.fn_SearchItemCheck = function (){
        	return true;
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (){
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " VATX_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value)); 
        		sReturnString += " EVID_DOCU=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value));
        	}
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){
        	
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00"){
        	
        		this.fnc_Information(this.stInformation, this.dsTA_VATCDH.rowcount, "SHR"); 
        		this.fnc_Message("TMM018", this.dsTA_VATCDH.rowcount);
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHREVID_DOCU,dsSHREVID_DOCU,0";
        			arrParam[1] = "COMBO,cmbSHRVATX_GUBN,dsSHRVATX_GUBN,0";
        			arrParam[2] = "GRID,grdTA_VATCDH,dsEVID_DOCU,EVID_DOCU";
        			arrParam[3] = "GRID,grdTA_VATCDH,dsVATX_TYPE,VATX_TYPE";
        			arrParam[4] = "GRID,grdTA_VATCDH,dsVATX_GUBN,VATX_GUBN";
        			arrParam[5] = "GRID,grdTA_VATCDH,dsPURC_GUBN,PURC_GUBN";
        			arrParam[6] = "GRID,grdTA_VATCDH,dsBULG_GUBN,BULG_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);			
        		
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/

        /*-----------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +-----------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {
        	if (e.keycode == 27) this.fn_Confirm();
        }

        /*---------------+
         |  확인 처리 ! |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var arrReturn = new Array();

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "EVID_DOCU");
        	arrReturn[1] = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATX_GUBN");
        	arrReturn[2] = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "VATX_TYPE");
        	arrReturn[3] = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "BULG_GUBN");
        	arrReturn[4] = this.dsTA_VATCDH.getColumn(this.dsTA_VATCDH.rowposition, "PURC_GUBN");
        	this.fnc_PopupClose(arrReturn);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.grdTA_VATCDH.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.cmbSHREVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMB0030P05.xfdl");
        this.loadPreloadList();
       
    };
}
)();
