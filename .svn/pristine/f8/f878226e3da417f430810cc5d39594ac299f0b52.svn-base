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
                this.set_name("TMMC0110");
                this.set_titletext("일정관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_SCHDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHD_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHD_TITL\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHD_INFO\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USNM\" size=\"50\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "8", null, null, "312", "8", "8", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "10", null, null, "308", "10", "10", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx2", "absolute", "84", null, null, "280", "12", "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SCHDXM", "absolute", "8", "132", null, null, "8", "328", this);
            obj.set_binddataset("dsTM_SCHDXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"92\"/><Column size=\"813\"/><Column size=\"106\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"일정제목\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"게시자\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;\" text=\"bind:SCHD_DATE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHD_TITL\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:INST_USNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("일정관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>시스템관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", "12", null, "72", "280", null, "12", this);
            obj.set_text("일정내용");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "208", null, "76", "25", null, "291", this);
            obj.set_text("일정제목");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "284", null, null, "25", "12", "291", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSCHD_TITL", "absolute", "286", null, null, "21", "14", "293", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSCHD_DAT1", "absolute", "406", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("1");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSCHD_DAT2", "absolute", "526", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("2");
            obj.set_value("TODAY");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new TextArea("txtSCHD_INFO", "absolute", "86", null, null, "276", "14", "14", this);
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("4000");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "510", "68", "12", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("left");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSCHD_TITL", "absolute", "88", "68", "201", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "12", null, "72", "25", null, "291", this);
            obj.set_text("일자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "84", null, "124", "25", null, "291", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSCHD_DATE", "absolute", "86", null, "120", "21", null, "293", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_SCHDXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("4");
            obj.set_type("normal");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Image1", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "337", "68", "68", "22", null, null, this);
            obj.set_text("조회기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "68", "22", null, null, this);
            obj.set_text("일정제목");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일정관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtSCHD_TITL_value","edtSCHD_TITL","value","dsTM_SCHDXM","SCHD_TITL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSCHD_INFO_value","txtSCHD_INFO","value","dsTM_SCHDXM","SCHD_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSCHD_DATE_value","calSCHD_DATE","value","dsTM_SCHDXM","SCHD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMC0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMC0110.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTTTTTTF'; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = 'TMMC0110'; //해당 Form에서 사용 할 Package 명
        	
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        }else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.calSHRSCHD_DAT2.set_value(this.fnc_Today());
        	this.edtSHRSCHD_TITL.setFocus();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTM_SCHDXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_SCHDXM=dsTM_SCHDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SCHDXM.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_SCHDXM.addRow();
        	var sTmp = "  1. 내  용 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	sTmp += "  2. 장  소 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	sTmp += "  3. 담  당 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	sTmp += "  4. 연락처 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	sTmp += "  5. 일  정 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	sTmp += "  6. 기  타 : " + String.fromCharCode(10) + String.fromCharCode(10);
        	this.dsTM_SCHDXM.setColumn(iRow, "SCHD_INFO", sTmp);
        	this.dsTM_SCHDXM.setColumn(iRow, "INST_USID", application.GBL_USERID);
        	this.dsTM_SCHDXM.setColumn(iRow, "INST_USNM", application.GBL_USERNM);
        	this.calSCHD_DATE.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTM_SCHDXM.deleteRow(this.dsTM_SCHDXM.rowposition);
        	this.grdTM_SCHDXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_SCHDXM");
        	this.grdTM_SCHDXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_SCHDXM=dsTM_SCHDXM:U";
        	var sOutDataSet = "dsTM_SCHDXM=dsTM_SCHDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SCHDXM.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항 |
         +-------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_SCHDXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        }

        
        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }
        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_SCHDXM.getRowCount() < 1) {
        		this.fnc_Message("M1003");
        		return false;
        	}

        	var sQuestionText = "[" + this.fnc_Trim(this.dsTM_SCHDXM.getColumn(this.dsTM_SCHDXM.rowposition, "SCHD_TITL")) + "] 일정";
        	return this.fnc_Message("M1004", sQuestionText);

        }

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_SCHDXM")) {
        		if (this.fnc_Message("M1023") == false) return false;
        	}

        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!(this.fnc_DatasetChangeCheck("dsTM_SCHDXM"))) {
        		this.fnc_Message("M1006");
        		return false;
        	}

        	// 일정 관리의 필수 입력 체크
        	for (var i = 0; i < this.dsTM_SCHDXM.getRowCount(); i++) {
        	
        		if (!this.fnc_IsDate(this.fnc_Trim(this.dsTM_SCHDXM.getColumn(i, "SCHD_DATE")))) {
        			return this.fnc_CheckPostAction("M1005", "일자", this.dsTM_SCHDXM, i, this.calSCHD_DATE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SCHDXM.getColumn(i, "SCHD_TITL"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "일정제목", this.dsTM_SCHDXM, i, this.edtSCHD_TITL, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SCHDXM.getColumn(i, "SCHD_INFO"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "일정내용", this.dsTM_SCHDXM, i, this.txtSCHD_INFO, '');
        		}
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 공지사항 조회
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " edtSHRSCHD_TITL=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSCHD_TITL.value));
        		sReturnString += " calSHRSCHD_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSCHD_DAT1.value));
        		sReturnString += " calSHRSCHD_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSCHD_DAT2.value));

        		// 공지사항 정보 저장
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) {
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	
        	} else {
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_SCHDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("M1007", this.dsTM_SCHDXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("M1008");
        		this.fn_KeyFieldDisible(this.dsTM_SCHDXM);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {

        		this.calSCHD_DATE.set_enable(true);

        	} else {
        	
        		this.calSCHD_DATE.set_enable(false);
        	
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /**************************************************************************************************
         *                                 사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_SCHDXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSCHD_TITL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSCHD_INFO.addEventHandler("onkeydown", this.fn_EditFocus, this);
            this.edtSHRSCHD_TITL.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMC0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
