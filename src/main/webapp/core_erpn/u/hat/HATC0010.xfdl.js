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
                this.set_name("HATC0010");
                this.set_titletext("신청 및 내역");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DOCU_IDXX</Col><Col id=\"DSNAME\">dsSHRDOCU_IDXX</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("신청 및 내역");
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

            obj = new Static("Static30", "absolute", "28", "71", "52", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "304", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "620", "71", "77", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("신청서종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDOCU_IDXX", "absolute", "702", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static33", "absolute", "876", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "944", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

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

            obj = new Grid("grdTM_APPRXH", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTM_APPRXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("row");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"264\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"신청일\"/><Cell col=\"2\" text=\"신청자\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"승인상태\"/><Cell col=\"6\" text=\"결재일자\"/><Cell col=\"7\" text=\"처리\"/><Cell col=\"8\" text=\"취소여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"expr:APPR_STAT == &quot;N&quot;? &quot;checkbox&quot; : &quot;&quot;\" text=\"bind:CHK_BOX\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPR_DATE\"/><Cell col=\"2\" text=\"bind:APPR_EMPL_NAME\"/><Cell col=\"3\" text=\"bind:APPR_EMPL_NUMB\"/><Cell col=\"4\" style=\"align:left;font:underline 9 arial;cursor:hand;\" text=\"bind:SUBJ_NAME\"/><Cell col=\"5\" text=\"bind:APPR_STAT_STR\"/><Cell col=\"6\" displaytype=\"expr:ENDX_DATE == &quot;&quot; ? &quot;normal&quot; : &quot;date&quot;\" text=\"bind:ENDX_DATE\" maskchar=\"_\"/><Cell col=\"7\" displaytype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" style=\"cursor:hand;\" text=\"bind:APPR_STAT_PROC\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "374", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "476", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "491", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "152", "71", "21", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("신청 및 내역");

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
        this.addIncludeScript("HATC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATC0010.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		근태신청 및 내역을 관리한다.
         * @category	 	인사관리>근태신청>근태신청 및 내역
         * @author	   		이창운
         * @cdate	  		2016.09.06
         * @version 1.0		최초 작성
         * HATC0010.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATC0010"; 

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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRAPPR_DATE1.setFocus();
        	
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case "1": 
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
        			break;
        	}
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        	
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.parent.fn_End();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsTM_APPRXH');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_APPRXH=dsTM_APPRXH";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_APPRXH.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) { 
        	this.parent.fn_Input();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		/*
        			체크된 내용들만 삭제한다.
        			역순으로 체크하여 삭제해야 아래의 SCRIPT 정상작동한다. 
        		*/
        		for (i = this.dsTM_APPRXH.getRowCount() - 1 ; i >= 0 ; i -- ){
        			if(this.dsTM_APPRXH.getColumn(i,"CHK_BOX") == '1'){
        				this.dsTM_APPRXH.deleteRow(i);
        			}
        		}
        		
        		this.grdTM_APPRXH.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	this.grdTM_APPRXH.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_APPRXH=dsTM_APPRXH:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_APPRXH.setFocus();
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
        	//var sMessage = this.fnc_FormUnloadCheck("dsHR_RECOJB", this);

        	//if(!this.fnc_IsEmpty(sMessage)) return sMessage;

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

        	if (this.fnc_DatasetChangeCheck("dsTM_APPRXH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 FROM", this.calSHRAPPR_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 TO", this.calSHRAPPR_DATE2);
        	}
        	
        	if (this.calSHRAPPR_DATE1.value > this.calSHRAPPR_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청기간 FROM,신청기간 TO", this.calSHRAPPR_DATE1);
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_APPRXH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}
        	
        	var iSelectRowCount = this.dsTM_APPRXH.getCaseCount("CHK_BOX == '1'");
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "APPR_EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsTM_APPRXH")) {
        		this.fnc_Message("TMM003");
        		return false;
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDOCU_IDXX.value)); 
        		sReturnString += " APPR_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); 
        		sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); 
        		sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 	
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_APPRXH.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdTM_APPRXH.setFocus();
        		
        		if(this.parent.sKeyValue != ""){
        			var irow = this.dsTM_APPRXH.findRow("APPR_SEQN",this.parent.sKeyValue);
        			this.parent.sKeyValue = "";
        			
        			if(irow <= 0) 
        			{	
        				irow = 0;
        				this.dsTM_APPRXH.set_rowposition(1);
        			}
        			this.dsTM_APPRXH.set_rowposition(irow);
        		}		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRDOCU_IDXX,dsSHRDOCU_IDXX,DOCU_IDXX"; //SHR 신청서 종류SHR 
        		arrParam[1] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,APPR_STAT";//SHR 결재상태SHR
        		
        		/*시간외근무신청서, 연차/휴가신청서, 취소신청서만 나오게 필터처리*/
        		this.dsSHRDOCU_IDXX.filter("COMD_CODE == 'KHR110' || COMD_CODE == 'KHR111' || COMD_CODE == 'KHR112' || COMD_CDNM == '전체'");
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서(popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "BDM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} 
        }

         /*-----------------------+
         |  헤더 click 시        |
         +------------------------*/
        this.grdTM_APPRXH_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
        		//this.fnc_GridAllCheck(this.grdTM_APPRXH,"CHK_BOX");	
        	
        		  if (nexacro.toNumber(this.grdTM_APPRXH.getCellProperty("head", 0, "text"), 0) == 1) {
        			iCheckValue = 0;
        			this.grdTM_APPRXH.setCellProperty("head", 0, "text", iCheckValue);
        		  } else {
        			iCheckValue = 1;
        			this.grdTM_APPRXH.setCellProperty("head", 0, "text", iCheckValue);
        		  }
        		  	
        		for(var i = 0; i < this.dsTM_APPRXH.rowcount ; i ++){
        			if(this.dsTM_APPRXH.getColumn(i,"APPR_STAT") == "N"){
        				this.dsTM_APPRXH.setColumn(i,"CHK_BOX",iCheckValue);
        			}
        		}
        	}
        }

        this.grdTM_APPRXH_oncellclick = function(obj,e)
        {
        	var sApprStat = this.dsTM_APPRXH.getColumn(e.row,"APPR_STAT");
        	var sDocuId	  = this.dsTM_APPRXH.getColumn(e.row,"DOCU_IDXX");
        	var sApprSeq  = this.dsTM_APPRXH.getColumn(e.row,"APPR_SEQN");
        	var sGubn = "";
        	
        	if(sApprStat == "N") sGubn = "cre";
        	else if(sApprStat == "T") sGubn = "del";
        	else sGubn = "show";
        		
        	if(e.col == 4){
        		
        		this.parent.sAPPRGUBN = "show";	
        		this.parent.sAPPRSTAT = sApprStat;
        		this.parent.sDOCUIDXX = sDocuId;
        		this.parent.sAPPRSEQN = sApprSeq;
        		this.parent.fn_goMenu(sDocuId);
        		
        	}else if(e.col == 7){
        		
        		/*결재상태가 임시저장 or 기안대기 일때만 상세화면으로 전환하여 후속처리*/
        		if(sApprStat == "N" || sApprStat == "T")
        		{
        			this.parent.sAPPRGUBN 	= sGubn	
        			this.parent.sAPPRSTAT = sApprStat;
        			this.parent.sDOCUIDXX 	= sDocuId;
        			this.parent.sAPPRSEQN 	= sApprSeq;
        			this.parent.fn_goMenu(sDocuId);
        		}else{
        			/*결재상태가 진행중이거나 완료일 때는 결재문서 pdf 를 보여준다.*/
        			/*
        			var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsSapOpenDoc&perm=false&cmpID=CK";
        			var sPostData = "&documentId="+sDocuId+"-"+sApprSeq
        						+ "&userID="+application.GBL_EMPLNO;
        			*/
        			
        			var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        			this.fnc_ShowApproval(sGubn, sDocuId + "-" + sApprSeq, "", bPerm);
        			
        		}
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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTM_APPRXH.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdTM_APPRXH.addEventHandler("onheadclick", this.grdTM_APPRXH_onheadclick, this);
            this.grdTM_APPRXH.addEventHandler("oncellclick", this.grdTM_APPRXH_oncellclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
