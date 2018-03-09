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
                this.set_name("HATD0090");
                this.set_titletext("월별연차현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_ANNUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTL_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJT_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"USEB_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"RATE_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"PROM_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"TRGT_ANDC\" type=\"STRING\" size=\"256\"/><Column id=\"MON01\" type=\"STRING\" size=\"256\"/><Column id=\"MON02\" type=\"STRING\" size=\"256\"/><Column id=\"MON03\" type=\"STRING\" size=\"256\"/><Column id=\"MON04\" type=\"STRING\" size=\"256\"/><Column id=\"MON05\" type=\"STRING\" size=\"256\"/><Column id=\"MON06\" type=\"STRING\" size=\"256\"/><Column id=\"MON07\" type=\"STRING\" size=\"256\"/><Column id=\"MON08\" type=\"STRING\" size=\"256\"/><Column id=\"MON09\" type=\"STRING\" size=\"256\"/><Column id=\"MON10\" type=\"STRING\" size=\"256\"/><Column id=\"MON11\" type=\"STRING\" size=\"256\"/><Column id=\"MON12\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "865", "61", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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
            obj.set_text("월별연차현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("인사관리 > 연차관리 > 월별연차현황");
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

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "184", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "460", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
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

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "121", "216", "7", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_ANNUXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"총연차\"/><Cell col=\"5\" text=\"잔여연차\"/><Cell col=\"6\" text=\"사용연차\"/><Cell col=\"7\" text=\"사용율\"/><Cell col=\"8\" text=\"촉진기준개수\"/><Cell col=\"9\" text=\"촉진대상개수\"/><Cell col=\"10\" text=\"1월\"/><Cell col=\"11\" text=\"2월\"/><Cell col=\"12\" text=\"3월\"/><Cell col=\"13\" text=\"4월\"/><Cell col=\"14\" text=\"5월\"/><Cell col=\"15\" text=\"6월\"/><Cell col=\"16\" text=\"7월\"/><Cell col=\"17\" text=\"8월\"/><Cell col=\"18\" text=\"9월\"/><Cell col=\"19\" text=\"10월\"/><Cell col=\"20\" text=\"11월\"/><Cell col=\"21\" text=\"12월\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" text=\"bind:TOTL_ANDC\"/><Cell col=\"5\" text=\"bind:USEB_ANDC\"/><Cell col=\"6\" text=\"bind:USEX_ANDC\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RATE_ANDC\" editdisplay=\"edit\"/><Cell col=\"8\" text=\"bind:PROM_ANDC\"/><Cell col=\"9\" text=\"bind:TRGT_ANDC\" editlimitbymask=\"decimal\"/><Cell col=\"10\" text=\"bind:MON01\"/><Cell col=\"11\" text=\"bind:MON02\"/><Cell col=\"12\" text=\"bind:MON03\"/><Cell col=\"13\" text=\"bind:MON04\"/><Cell col=\"14\" text=\"bind:MON05\"/><Cell col=\"15\" text=\"bind:MON06\"/><Cell col=\"16\" text=\"bind:MON07\"/><Cell col=\"17\" text=\"bind:MON08\"/><Cell col=\"18\" text=\"bind:MON09\"/><Cell col=\"19\" text=\"bind:MON10\"/><Cell col=\"20\" text=\"bind:MON11\"/><Cell col=\"21\" text=\"bind:MON12\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"4\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('TOTL_ANDC')\"/><Cell col=\"5\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('USEB_ANDC')\"/><Cell col=\"6\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('USEX_ANDC')\"/><Cell col=\"7\" style=\"align:center middle;\"/><Cell col=\"8\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('PROM_ANDC')\"/><Cell col=\"9\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('TRGT_ANDC')\"/><Cell col=\"10\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON01')\"/><Cell col=\"11\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON02')\"/><Cell col=\"12\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON03')\"/><Cell col=\"13\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON04')\"/><Cell col=\"14\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON05')\"/><Cell col=\"15\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON06')\"/><Cell col=\"16\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON07')\"/><Cell col=\"17\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON08')\"/><Cell col=\"18\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON09')\"/><Cell col=\"19\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON10')\"/><Cell col=\"20\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON11')\"/><Cell col=\"21\" style=\"align:center middle;\" expr=\"expr:dataset.getSum('MON12')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "255", "71", "80", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "337", "71", "21", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "360", "71", "100", "21", null, null, this);
            obj.set_taborder("127");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "213", "71", "68", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSTDS_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월별연차현황");

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
        this.addIncludeScript("HATD0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATD0090.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		월별연차신청현황를 조회한다.
         * @category	 	인사관리/연차관리/월별연차신청현황
         * @author	   		김칠석
         * @cdate	  		2016.09.05
         * @version 1.0		최초 작성
         * HATD0090.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATD0090"; //해당 Form에서 사용 할 Package 명 

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
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
        	this.mskSHRSTDS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) );
        	//.set_value((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "0101"));
        	//(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	/*
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRSTDS_DATE.setFocus();
        	*/
        	
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
        	this.fnc_DatasetClear('dsAT_ANNUXM');
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ANNUXM=dsAT_ANNUXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdHR_LICEXM.setFocus();
        	/*
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsHR_LICEXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_LICEXM=dsHR_LICEXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_LICEXM.setFocus();
        	*/

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	/*
        	this.fnc_DataSetCancel("dsHR_LICEXM");
        	this.grdHR_LICEXM.setFocus();
        	*/
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
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

        	/*
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_LICEXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	*/

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
        	if (this.fnc_Length(this.fnc_Trim(this.mskSHRSTDS_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.mskSHRSTDS_YEAR);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	/*
        	if (this.dsHR_LICEXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	return this.fnc_Message("TMM002", sQuestionText);
        	*/

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	/*
        	if (!this.fnc_DatasetChangeCheck("dsHR_LICEXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	*/
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
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YEAR.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		 
        		 
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		/*
        				this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 31
        										, "expr"
        										, "expr:dataset.getSum('DAY31')");
        		*/
        		//alert( this.grdTR_MONEPL.getCellProperty("Summ", 4, "expr") );
        		//alert( dsAT_ANNUXM.getSum("USEX_ANDC") / dsAT_ANNUXM.getSum("USEB_ANDC") );
        		///*
        		this.grdTR_MONEPL.setCellProperty("Summ"
        										, 4
        										, "text"
        										, Math.round( this.dsAT_ANNUXM.getSum("USEX_ANDC") / this.dsAT_ANNUXM.getSum("TOTL_ANDC") * 100 ) + "%"
        										);
        		//*/
        	//코드 바인딩
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	//조회조건 - 사원정보조회(Popup)	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        	
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "%";
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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATD0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
