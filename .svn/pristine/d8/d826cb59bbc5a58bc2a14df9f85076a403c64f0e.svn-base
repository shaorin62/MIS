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
                this.set_name("FAMA0020");
                this.set_titletext("코스트센터그룹관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CSTGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CSTG_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CSTG_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CSTGXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_CSTGXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코스트센터그룹코드\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코스트센터그룹명\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시작일\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"종료일\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:CSTG_CODE\" editlimit=\"10\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CSTG_NAME\" combodataset=\"dsACCT_GUBN\" combocodecol=\"ACCT_GUBN\" combodatacol=\"OFFI_NAME\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:BGIN_DATE\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:ENDX_DATE\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "225", "71", "173", "21", null, null, this);
            obj.set_text("코스트센터 그룹코드/명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTG_CODE", "absolute", "383", "71", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "592", "71", "76", "21", null, null, this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "661", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Static("staSHRSTDX_DATE", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDX_DATE", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("코스트센터그룹관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 회계관리 > 코스트센터그룹관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("23");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("코스트센터그룹관리");
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
        this.addIncludeScript("FAMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0020 코스트센터그룹관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.12		황치웅		Initial Created.
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
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        // 2014-12-10 : 실데이터는 인사쪽에서 관리하므로 삭제기능은 빼자.
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "FAMA0020"; //해당 Form에서 사용 할 Package 명

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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);

        	this.calSHRSTDX_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8)); //조회 초기값
        	this.cmbSHRUSEX_YSNO.set_index(1); 
        	
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
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_CSTGXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CSTGXM=dsTA_CSTGXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CSTGXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_CSTGXM.addRow();
        	this.dsTA_CSTGXM.set_rowposition(iRow); 
        	this.dsTA_CSTGXM.setColumn(iRow, "ENDX_DATE", "99991231");
        	
        	this.fnc_GridSetCellFocus(this.grdTA_CSTGXM, "CSTG_CODE");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTA_CSTGXM.deleteMultiRows(this.grdTA_CSTGXM.getSelectedDatasetRows());
        	this.grdTA_CSTGXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTA_CSTGXM");
        	this.grdTA_CSTGXM.setFocus();
        }

        
        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_CSTGXM=dsTA_CSTGXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CSTGXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_CSTGXM", this);

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

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_CSTGXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.cmbSHRUSEX_YSNO.value == 1 || this.cmbSHRUSEX_YSNO.value == 0){
        		
        		if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRSTDX_DATE);
        		}
        	}
        	
        	return true;
        }

        
        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTA_CSTGXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_CSTGXM);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "코스트센터그룹코드 (" + this.fnc_Trim(this.dsTA_CSTGXM.getColumn(this.dsTA_CSTGXM.rowposition, "CSTG_CODE")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_CSTGXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_CSTGXM.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsTA_CSTGXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CSTGXM.getColumn(i, "CSTG_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코스트센터그룹코드", this.dsTA_CSTGXM, i, this.grdTA_CSTGXM, "CSTG_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CSTGXM.getColumn(i, "CSTG_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코스트센터그룹명", this.dsTA_CSTGXM, i, this.grdTA_CSTGXM, "CSTG_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CSTGXM.getColumn(i, "BGIN_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일", this.dsTA_CSTGXM, i, this.grdTA_CSTGXM, "BGIN_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CSTGXM.getColumn(i, "ENDX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일", this.dsTA_CSTGXM, i, this.grdTA_CSTGXM, "ENDX_DATE");
        		}
        		
        		if(this.dsTA_CSTGXM.getColumn(i, "BGIN_DATE") > this.dsTA_CSTGXM.getColumn(i, "ENDX_DATE")){
                    this.fnc_Message("TMM028", "시작일", "종료일");
                    return false;
                }

        	}
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="	   + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " STDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDX_DATE.value)); //기준일자
        		sReturnString += " CSTG_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCSTG_CODE.value)); //코스트센터 그룹코드
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부
         
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	 
        		this.fnc_Information(this.stInformation, this.dsTA_CSTGXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); 
        		this.fnc_Message("TMM018", this.dsTA_CSTGXM.rowcount); 
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,USEX_YSNO";
        		this.fnc_CommonCodeInnerBind(arrParam);
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
            this.edtSHRCSTG_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
