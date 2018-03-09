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
                this.set_name("HATE0040");
                this.set_titletext("월근태결재");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ATTEDY", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RESN_DESN\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"USEB_ANDC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"USED_ANDC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_USED_ANDC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_USED_ANDC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"REMA_USED_ANDC\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("월근태결재");
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
            obj.set_text("근태월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "199", "71", "50", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

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

            obj = new Grid("grdAT_ATTEDY", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_ATTEDY");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("row");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"사원번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"성명\"/><Cell col=\"3\" colspan=\"5\" text=\"연차사용\"/><Cell col=\"8\" colspan=\"2\" text=\"휴일근무\"/><Cell col=\"10\" rowspan=\"2\" text=\"특기사항\"/><Cell row=\"1\" col=\"3\" text=\"발생일수\"/><Cell row=\"1\" col=\"4\" text=\"누적사용\"/><Cell row=\"1\" col=\"5\" text=\"금월사용\"/><Cell row=\"1\" col=\"6\" text=\"전년사용\"/><Cell row=\"1\" col=\"7\" text=\"잔여일수\"/><Cell row=\"1\" col=\"8\" text=\"근무일자\"/><Cell row=\"1\" col=\"9\" text=\"사유\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NAME\" suppress=\"1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:USEB_ANDC\" suppress=\"0\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:TOTL_USED_ANDC\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:USED_ANDC\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:BEFO_USED_ANDC\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:REMA_USED_ANDC\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:ATTE_DATE\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:RESN_DESN\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "241", "71", "80", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "323", "71", "21", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "346", "71", "100", "21", null, null, this);
            obj.set_taborder("115");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "475", "71", "50", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "517", "71", "80", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "599", "71", "21", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "622", "71", "100", "21", null, null, this);
            obj.set_taborder("121");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRATTE_YMTH", "absolute", "83", "71", "88", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월근태결재");

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
        this.addIncludeScript("HATE0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATE0040.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		월근태결재
         * @category	 	인사관리>근태현황>월근태현황 
         * @author	   		이창운
         * @cdate	  		2016.09.13
         * @version 1.0		최초 작성
         * HATE0040.xml - <Created by Code Template generator>
         *
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
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATE0040"; 
        this.sDOCUID 	  = "";
        this.sAPPR_SEQN   = "";

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
        	this.calSHRATTE_YMTH.fn_SetMonth(this.fnc_SubStr(iNowDate, 0, 6));
        		
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 
        			break;
        	}
        	
        	/*신청 및 내역에서 선택된 신청서 종류를 setting - 월근태현황*/
        	this.sDOCUID = "KHR114";
        	//this.sDOCUID = "KHR110"; /*결재문서가 만들어지기전까지 임시 사용*/
        	
        	this.dsTM_APPRXH.addRow();
        	this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        	this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        	this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        	this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","월근태현황"); 
        	this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);	
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
        	
        	this.fnc_DatasetClear('dsAT_ATTEDY');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ATTEDY=dsAT_ATTEDY";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEDY.setFocus();

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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_ATTEDY")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	/*근태월 필수조건 체크*/
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRATTE_YMTH.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태월", this.calSHRATTE_YMTH);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
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
        		sReturnString += " ATTE_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRATTE_YMTH.fn_GetMonth()));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
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
        		var sSubjName = this.fnc_SubStr(this.calSHRATTE_YMTH.fn_GetMonth(), 0, 4)+"년 "+ this.fnc_SubStr(this.calSHRATTE_YMTH.fn_GetMonth(), 4, 2) + "월 부서별 근태현황" ;
        		
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME",sSubjName); 
        		this.fnc_Information(this.stInformation, this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if(this.dsAT_ATTEDY.getRowCount() > 0){
        			this.btn_PROC.set_enable(true);
        		}else{
        			this.btn_PROC.set_enable(false);
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		/*결재 head 저장 후 결재문서 상신*/
        		this.fn_apprProcess("createDoc");
        	
        	} else if (sMethodName == "sendApproval") {
        		
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		this.fnc_ShowApproval("cre", 
        							  this.dsTM_APPROVAL.getColumn(0, "documentID"),
        							  this.dsTM_APPROVAL.getColumn(0,"documentType")
        							  );
        	} 
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         

         /*결재상신 - 월근태 결재는 취소 없음.*/
         this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/

        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 
        	var sApprDocId	= this.sDOCUID + "-" + this.sAPPR_SEQN;/*DOCU_IDXX 과 APPR_SEQN 조합*/
        	
        	sXmlStr  = "<style>td {border:1px solid black; Font-size:12px; height:30px; }";
        	sXmlStr += ".label1 { background-color:#cccccc; font-weight:bold; text-align: center; }";
        	sXmlStr += ".label2 { padding-left: 5px; }";
        	sXmlStr += ".label3 { text-align: center; }";
        	sXmlStr += ".label4 { text-align: right; padding-right: 5px; }";
        	sXmlStr += "</style>";
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=12%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=7%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=14%>";
        	sXmlStr += "  <col width=26%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1' rowspan='2' >부서</td>";
        	sXmlStr += "    <td class='label1' rowspan='2' >사원번호</td>";
        	sXmlStr += "    <td class='label1' rowspan='2' >성명</td>";
        	sXmlStr += "    <td class='label1' colspan='5' >연차사용</td>";
        	sXmlStr += "    <td class='label1' colspan='2'>휴일근무</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>발생<br>일수</td>";
        	sXmlStr += "    <td class='label1'>누적<br>사용</td>";
        	sXmlStr += "    <td class='label1'>금월<br>사용</td>";
        	sXmlStr += "    <td class='label1'>전년<br>사용</td>";
        	sXmlStr += "    <td class='label1'>잔여<br>일수</td>";
        	sXmlStr += "    <td class='label1'>근무일자</td>";
        	sXmlStr += "    <td class='label1'>사유</td>";
        	sXmlStr += "  </tr>";
        	for(var i = 0; i < this.dsAT_ATTEDY.getRowCount(); i++){
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label2'>" + this.dsAT_ATTEDY.getColumn(i,"DEPT_NAME") + "</td>"; /*부서*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"EMPL_NUMB") + "</td>";	/*사원번호*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"EMPL_NAME") + "</td>";	/*성명*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"USEB_ANDC") + "</td>";	/*발생일수*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"TOTL_USED_ANDC") + "</td>";	/*누적사용*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"USED_ANDC") + "</td>";	/*금월사용*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"BEFO_USED_ANDC") + "</td>";	/*전년사용*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_ATTEDY.getColumn(i,"REMA_USED_ANDC") + "</td>";	/*잔여일수*/
        		sXmlStr += "    <td class='label2'>" + this.dsAT_ATTEDY.getColumn(i,"ATTE_DATE") + "</td>";	/*근무일자*/	
        		sXmlStr += "    <td class='label2'>" + this.dsAT_ATTEDY.getColumn(i,"RESN_DESN") + "</td>";	/*사유*/
        		sXmlStr += "  </tr>";
        	}
        	sXmlStr += "</table>";	
        	
        	this.dsTM_APPROVAL.deleteAll();
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);						/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);	/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);					/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
         }
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

        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} 

        }

        
        this.btn_PROC_OnClick = function(obj,e)
        {
        	/*	결재상신 클릭 시 
        		결재해더 데이터 저장 -> 결재상신 요청 -> 결재상신 문서 팝업
        		fn_PostProcess에서 위의 순서대로 하나씩 처리
        	*/
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "dsTM_APPRXH=dsTM_APPRXH ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsAT_ATTEDY.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsTM_APPRXH.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdAT_ATTEDY.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);

        };

        this.loadIncludeScript("HATE0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
