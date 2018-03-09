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
                this.set_name("HATF0040");
                this.set_titletext("출장승인신청");
                this._setFormPosition(0,0,1187,691);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_BUTRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_STAT_STR\" type=\"STRING\" size=\"3\"/><Column id=\"APPR_STAT_PROC\" type=\"STRING\" size=\"3\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"3\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"12\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BSRP_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"TITL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PLAC\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PURC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USNM\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHRDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
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
            obj.set_text("출장승인신청");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 출장관리 > 출장승인신청");
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

            obj = new Static("Static30", "absolute", "317", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCap");
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

            obj = new Static("Static07", "absolute", "636", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "385", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "487", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "502", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static15", "absolute", "28", "71", "65", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "165", "71", "21", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "188", "71", "100", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("152");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "631", "71", "68", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "699", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRAPPR_STAT_innerdataset = new Dataset("cmbSHRAPPR_STAT_innerdataset", this.cmbSHRAPPR_STAT);
            cmbSHRAPPR_STAT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRAPPR_STAT_innerdataset);
            obj.set_taborder("154");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Grid("grdAT_BUTRXM", "absolute", "8", "128", null, null, "25", "12", this);
            obj.set_taborder("155");
            obj.set_binddataset("dsAT_BUTRXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"신청자사번\"/><Cell col=\"3\" rowspan=\"2\" text=\"신청자성명\"/><Cell col=\"4\" rowspan=\"2\" text=\"출장&#13;&#10;구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"출장자수\"/><Cell col=\"6\" rowspan=\"2\" text=\"출장지\"/><Cell col=\"7\" colspan=\"2\" text=\"출장일정\"/><Cell col=\"9\" colspan=\"3\" text=\"신청서\"/><Cell row=\"1\" col=\"7\" text=\"시작일\"/><Cell row=\"1\" col=\"8\" text=\"종료일\"/><Cell row=\"1\" col=\"9\" text=\"진행상태\"/><Cell row=\"1\" col=\"10\" text=\"보기\"/><Cell row=\"1\" col=\"11\" text=\"취소여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:UPDT_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:APLT_EMNR\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:APLT_EMNM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:BSRP_CODE\" expandshow=\"hide\" combodisplay=\"edit\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:APLT_CNTR\"/><Cell col=\"6\" style=\"align:left middle;font:underline 9 arial;cursor:hand;\" text=\"bind:BSRP_PLAC\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BSRP_STDT\" mask=\"yyyy.MM.dd\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BSRP_ENDD\" mask=\"yyyy.MM.dd\"/><Cell col=\"9\" style=\"align:center middle;\" text=\"bind:APPR_STAT_STR\"/><Cell col=\"10\" displaytype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" style=\"cursor:hand;\" text=\"bind:APPR_STAT_PROC\"/><Cell col=\"11\" style=\"align:center middle;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("157");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 691, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장승인신청");

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
        this.addIncludeScript("HATF0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0040.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장승인신청 및 내역을 관리한다.
         * @category	 	인사관리>출장관리>출장승인신청
         * @author	   		박정윤
         * @cdate	  		2016.09.13
         * @version 1.0		최초 작성
         * HATF0040.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTTTFFTF";  //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0040"; //해당 Form에서 사용 할 Package 명
        //this.sDocuIdxx = "";   // 이전 row 선택시 사용변수
        //this.sApprSeqn = "";   // 이전 row 선택시 사용변수
        //this.sBsrpSeq1 = "";   // 이전 row 선택시 사용변수

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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        	//this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '1231');
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
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);  // 신청자 사원번호 세팅
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);  // 신청자 이름 세팅
        	
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
        	this.fnc_DatasetClear("dsAT_BUTRXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_BUTRXM=dsAT_BUTRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BUTRXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	this.parent.fn_Input();
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsAT_BUTRXM.deleteMultiRows(this.grdAT_BUTRXM.getSelectedDatasetRows());
        	this.grdAT_BUTRXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	
        	this.fnc_DataSetCancel("dsAT_BUTRXM");
        	
        	// 검색영역 데이터 초기화
        	this.dsAT_BUTRXM.clearData();  // 데이터셋 초기화 
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');   // 신청일자(시작) 세팅
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));             // 신청일자(종료) 세팅
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);  // 신청자 사원번호 세팅
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);  // 신청자 이름 세팅

        	this.cmbSHRAPPR_STAT.set_index(0);  // 결재상태 콤보 초기화
        	
        	this.grdAT_BUTRXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	//this.fn_SaveKeyRowposition();

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_BUTRXM=dsAT_BUTRXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BUTRXM.setFocus();
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
        	// 기능 없음
        }

        /*-------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항|
         +-------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 //var sMessage = this.fnc_FormUnloadCheck("dsAT_BUTRXM", this);
        	 //if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
         
        }   

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)     |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
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

        	if (this.fnc_DatasetChangeCheck("dsAT_BUTRXM")) {
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

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsAT_BUTRXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var strAPPRSTAT = this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "APPR_STAT_STR");
        	if (strAPPRSTAT == "결재완료" || strAPPRSTAT == "결재진행" || strAPPRSTAT == "결재반려"){
        		this.fnc_Message("TMM902");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdAT_BUTRXM);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "출장지 (" + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "BSRP_PLAC")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsAT_BUTRXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        /*	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_BUTRXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "BSRP_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "출장구분", this.dsAT_BUTRXM, i, this.grdAT_BUTRXM, "BSRP_CODE");
        		}
        	}*/

        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			  + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		  + this.fnc_Quote(sKind);
        		sReturnString += " APLT_EMNR="        + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));  // 신청자
        		sReturnString += " BSRP_STDT="        + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); // 시작일자 
        		sReturnString += " BSRP_ENDD="        + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); // 종료일자 
        		sReturnString += " APPR_STAT="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value));  // 결재상태

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        		//this.fn_CreateArgument("SEARCH01");
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,APPR_STAT";  //SHR 결재상태SHR
        		arrParam[1] = "GRID,grdAT_BUTRXM,dsDPAY_CODE,BSRP_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         | 이전rowposition key저장|
         +--------------------------*/

        this.fn_SaveKeyRowposition = function () {
            	
           sDocuIdxx =  this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "DOCU_IDXX");  //Document ID
           sApprSeqn =  this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "APPR_SEQN");  //결재일련번호
           sBsrpSeq1 =  this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "BSRP_SEQ1");  //출장신청일련번호(마스터)
           
        }

        /*------------------------------------+
         |  팝업 Setting  (신청자 조회 팝업|
         +------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_HelpDialogeCallback";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}
        }

        this.fn_HelpDialogeCallback = function(dummy){
        	if ( dummy.length > 0 ) this.fn_Search();
        }

        /*------------------------------------+
         |  결재진행                         |
         +------------------------------------*/
        this.grdAT_BUTRXM_oncellclick = function(obj,e)
        {
        	var sBsrpSeq1 = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_SEQ1");	//출장승인key

        	var sApprStat = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT");
        	var sDocuId	  = "KHR120";
        	var sApprSeq  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN");
        	var sGubn = "";
        	
        	if(sApprStat == "N") sGubn = "cre";
        	else if(sApprStat == "T") sGubn = "del";
        	else sGubn = "show";

        	if(e.col == 6){
        		this.parent.sAPPRGUBN = "show";	
        		this.parent.sAPPRSTAT = sApprStat;
        		this.parent.sDOCUIDXX = sDocuId;
        		this.parent.sAPPRSEQN = sApprSeq;
        		this.parent.sBSRPSEQ1 = sBsrpSeq1;

        		this.parent.fn_goMenu(sDocuId);
        	
        	}else if(e.col == 10){

        		/*결재상태가 임시저장 or 기안대기 일때만 상세화면으로 전환하여 후속처리*/
        		if(sApprStat == "N" || sApprStat == "T")
        		{
        			this.parent.sAPPRGUBN = sGubn	
        			this.parent.sAPPRSTAT = sApprStat;
        			this.parent.sDOCUIDXX = sDocuId;
        			this.parent.sAPPRSEQN = sApprSeq;
        			this.parent.sBSRPSEQ1 = sBsrpSeq1;

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

        this.grdAT_BUTRXM_oncelldblclick = function(obj,e)
        {
        	var sBsrpSeq1 = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_SEQ1");	//출장승인key

        	var sApprStat = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT");
        	var sDocuId	  = "KHR120";
        	var sApprSeq  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN");
        	var sGubn = "";
        	
        	if(sApprStat == "N") sGubn = "cre";
        	else if(sApprStat == "T") sGubn = "del";
        	else sGubn = "show";

        	if(e.col != 10){
        		this.parent.sAPPRGUBN = "show";	
        		this.parent.sAPPRSTAT = sApprStat;
        		this.parent.sDOCUIDXX = sDocuId;
        		this.parent.sAPPRSEQN = sApprSeq;
        		this.parent.sBSRPSEQ1 = sBsrpSeq1;

        		this.parent.fn_goMenu(sDocuId);
        	
        	}else if(e.col == 10){

        		/*결재상태가 임시저장 or 기안대기 일때만 상세화면으로 전환하여 후속처리*/
        		if(sApprStat == "N" || sApprStat == "T")
        		{
        			this.parent.sAPPRGUBN = sGubn	
        			this.parent.sAPPRSTAT = sApprStat;
        			this.parent.sDOCUIDXX = sDocuId;
        			this.parent.sAPPRSEQN = sApprSeq;
        			this.parent.sBSRPSEQ1 = sBsrpSeq1;

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
            this.dsAT_BUTRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsAT_BUTRXM.addEventHandler("cancolumnchange", this.dsTA_DAYEXM_cancolumnchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdAT_BUTRXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_BUTRXM.addEventHandler("oncellclick", this.grdAT_BUTRXM_oncellclick, this);
            this.grdAT_BUTRXM.addEventHandler("onkillfocus", this.grdAT_BUTRXM_onkillfocus, this);
            this.grdAT_BUTRXM.addEventHandler("oncelldblclick", this.grdAT_BUTRXM_oncelldblclick, this);

        };

        this.loadIncludeScript("HATF0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
