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
                this.set_name("PACA0022");
                this.set_titletext("인증서관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSBMS_CERTIFICATE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OID\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EXPIRATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SIGN_CERT_PUBLIC\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_CERT_PRIVATE\" type=\"STRING\" size=\"256\"/><Column id=\"KM_CERT_PUBLIC\" type=\"STRING\" size=\"256\"/><Column id=\"KM_CERT_PRIVATE\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"RVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRYPTION_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_TIMESTAMP\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdSBMS_CERTIFICATE", "absolute", "8", "138", null, "58", "25", null, this);
            obj.set_taborder("26");
            obj.set_binddataset("dsSBMS_CERTIFICATE");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"인증서ID\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자등록번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"업체명\"/><Cell col=\"4\" text=\"OID\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"유효일(시작)\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"유효일(만료)\"/><Cell col=\"7\" text=\"서명용 공개키\"/><Cell col=\"8\" text=\"서명용 개인키\"/><Cell col=\"9\" text=\"암호화용 공개키\"/><Cell col=\"10\" text=\"암호화용 개인키\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"인증서 패스워드\"/><Cell col=\"12\" text=\"RVALUE\"/><Cell col=\"13\" text=\"인증방식\"/><Cell col=\"14\" text=\"사용여부\"/><Cell col=\"15\" text=\"등록시각\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CERT_ID\"/><Cell col=\"2\" text=\"bind:CORP_REG_NO\"/><Cell col=\"3\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" text=\"bind:OID\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:VALID_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:EXPIRATION_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"7\" text=\"bind:SIGN_CERT_PUBLIC\"/><Cell col=\"8\" text=\"bind:SIGN_CERT_PRIVATE\"/><Cell col=\"9\" text=\"bind:KM_CERT_PUBLIC\"/><Cell col=\"10\" text=\"bind:KM_CERT_PRIVATE\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:PASSWORD\"/><Cell col=\"12\" text=\"bind:RVALUE\"/><Cell col=\"13\" text=\"bind:ENCRYPTION_METHOD\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:REG_TIMESTAMP\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("인증서관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("4");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>인증서관리");
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

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "101", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("10");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "286", "61", "40", "41", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "315", "71", "51", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사업자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "370", "71", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "452", "71", "21", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "475", "71", "130", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "362", "61", "8", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCORP_REG_NO", "absolute", "136", "71", "150", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Create", "absolute", null, "113", "77", "21", "25", null, this);
            obj.set_taborder("27");
            obj.set_text("인증서 등록");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인증서관리");

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
        this.addIncludeScript("PACA0022.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0022.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0022 인증서관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.08		오세훈		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0022"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        
        	this.fn_Search();

        } 
        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsSBMS_CERTIFICATE");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsSBMS_CERTIFICATE=dsSBMS_CERTIFICATE";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	
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
        	if (this.fn_DeleteCheck()) {
        		for(var i = this.dsSBMS_CERTIFICATE.rowcount; i >= 0; i--){
        			if(this.dsSBMS_CERTIFICATE.getColumn(i, "CHK") == 1){
        					this.dsSBMS_CERTIFICATE.deleteRow(i);
        			}
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsSBMS_CERTIFICATE=dsSBMS_CERTIFICATE:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdSBMS_CERTIFICATE.setFocus();

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
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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

        
        /*-----------------------+ 
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsSBMS_CERTIFICATE")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsSBMS_CERTIFICATE") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsSBMS_CERTIFICATE.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsSBMS_CERTIFICATE.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsSBMS_CERTIFICATE.getColumn(i, "VALID_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "유효일(시작)", this.dsSBMS_CERTIFICATE, i, '', '');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsSBMS_CERTIFICATE.getColumn(i, "EXPIRATION_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "유효일(만료)", this.dsSBMS_CERTIFICATE, i, '', '');
        		}
        		
        		
        	}
        	
        	return true;
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CORP_REG_NO=" + this.fnc_Quote(this.edtSHRCORP_REG_NO.value); // 사업자 등록번호
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); // 사업자 코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); // 사업자 명

        	}  else if (sKind == "SAVE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsSBMS_CERTIFICATE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	}  else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
        /*---------------------------+
         |  광고주 조회 팝업 생성 |
         +---------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsSBMS_CERTIFICATE.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsSBMS_CERTIFICATE.rowcount;
        	
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsSBMS_CERTIFICATE.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}

        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsSBMS_CERTIFICATE.getColumn(this.dsSBMS_CERTIFICATE.rowposition, "CUST_NAME")) + ") 인증서";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        this.btn_Create_onclick = function(obj,e)
        {
        	//인증서 등록 팝업 생성
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=710";       //현재 반응 없음
        		sOpenStyle += ",height=505";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PACA0022P01", "pac::PACA0022P01.xfdl", {}, sOpenStyle, "");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdSBMS_CERTIFICATE.addEventHandler("onheadclick", this.grdPD_SDTXXM_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCORP_REG_NO.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.btn_Create.addEventHandler("onclick", this.btn_Create_onclick, this);

        };

        this.loadIncludeScript("PACA0022.xfdl");
        this.loadPreloadList();
       
    };
}
)();
