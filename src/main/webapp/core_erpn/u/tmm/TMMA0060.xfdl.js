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
                this.set_name("TMMA0060");
                this.set_titletext("일련번호관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_SEQUNC", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_CHAR\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_CHAR\" type=\"STRING\" size=\"256\"/><Column id=\"CIPH_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MINX_VALU\" type=\"STRING\" size=\"256\"/><Column id=\"MAXX_VALU\" type=\"STRING\" size=\"256\"/><Column id=\"NOWX_VALU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_SEQDTL", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"NOWX_VALU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "60", "176", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SEQUNC", "absolute", "8", "81", null, null, "240", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTM_SEQUNC");
            obj.set_readonly("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"테이블ID\"/><Cell col=\"1\" text=\"테이블명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"컬럼ID\"/><Cell col=\"3\" text=\"컬럼명\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"시작문자\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"종료문자\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"자릿수\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"최소값\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"최대값\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"현재값\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:TABLE_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:TABLE_NAME_KR\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:COLUMN_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:COLUMN_NAME_KR\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:BGIN_CHAR\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:ENDX_CHAR\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:CIPH_CUNT\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:MINX_VALU\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:MAXX_VALU\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:NOWX_VALU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_SEQDTL", "absolute", null, "81", "195", null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsTM_SEQDTL");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"조회조건명\"/><Cell col=\"1\" text=\"현재값\"/></Band><Band id=\"body\"><Cell text=\"bind:SECH_COND\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:NOWX_VALU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", null, "60", "195", "21", "25", null, this);
            obj.set_taborder("14");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("일련번호관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "802", "56", "80", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "947", "173", "20", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "75", "216", "6", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일련번호관리");
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
        this.addIncludeScript("TMMA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0060 일련번호 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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
         *  화면 변수 선언부  
         *********************/
        this.sBUTTONLIST = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0060"; //해당 Form에서 사용 할 Package 명
        	
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
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	//this.fnc_GetComboDs(this.dsCombo);

        	this.fn_Search();
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	
        	this.close();

        }

        /*-------------------------+
         |  03.조회 버튼 클릭 時 |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;
        	
        	// 조회 전 처리
        	this.fnc_DatasetClear("dsTM_SEQUNC,dsTM_SEQDTL");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_SEQUNC=dsTM_SEQUNC";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SEQUNC.setFocus(); 
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTM_SEQUNC.addRow();
        	this.fnc_GridSetCellFocus(this.grdTM_SEQUNC, "TABLE_NAME");
        	
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTM_SEQUNC.deleteRow(this.dsTM_SEQUNC.rowposition);
        	this.grdTM_SEQUNC.setFocus();
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj){

        	this.fnc_DataSetCancel("dsTM_SEQUNC,dsTM_SEQDTL");
        	this.grdTM_SEQUNC.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_SEQUNC=dsTM_SEQUNC:U dsTM_SEQDTL=dsTM_SEQDTL:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_SEQDTL.setFocus();
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時 |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_SEQUNC,dsTM_SEQDTL",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	
        	this.fnc_FormUnload(obj,e);

        }

        
        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){ 

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj){

        	this.fnc_EditFocus(obj);
        	
        }

        /*****************************************************************************************************
         *                                      공통 Function 처리 부분                                     *
         *****************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_SEQUNC,dsTM_SEQDTL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*--------------------+
         |  삭제 여부 체크! |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var sQuestionText = this.fnc_Trim(this.dsTM_SEQUNC.getColumn(this.dsTM_SEQUNC.rowposition, "TABLE_NAME"))
        					+ ":" + this.fnc_Trim(this.dsTM_SEQUNC.getColumn(this.dsTM_SEQUNC.rowposition, "COLUMN_NAME"));

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_SEQUNC,dsTM_SEQDTL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_SEQUNC.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_SEQUNC.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "TABLE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "테이블명", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "TABLE_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "COLUMN_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "컬럼명", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "COLUMN_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "BGIN_CHAR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작문자", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "BGIN_CHAR");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "ENDX_CHAR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료문자", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "ENDX_CHAR");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "CIPH_CUNT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자릿수", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "CIPH_CUNT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "MINX_VALU"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "최소값", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "MINX_VALU");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_SEQUNC.getColumn(i, "MAXX_VALU"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "최대값", this.dsTM_SEQUNC, i, this.grdTM_SEQUNC, "MAXX_VALU");
        		}
        	}

        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 									//Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); 											//호출할 Package의 Method명

        	// 저장 Argument 생성
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " TABLE_NAME=" + this.fnc_Quote(this.dsTM_SEQUNC.getColumn(this.dsTM_SEQUNC.rowposition, "TABLE_NAME")); //테이블명
        		sReturnString += " COLUMN_NAME=" + this.fnc_Quote(this.dsTM_SEQUNC.getColumn(this.dsTM_SEQUNC.rowposition, "COLUMN_NAME")); //컬럼명
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTM_SEQUNC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_SEQUNC.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SEARCH01") {
        		
        		this.fnc_Information(this.stInformation1, this.dsTM_SEQDTL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == 'SAVE00') {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	// 공통콤보 바인딩
        	} else if (sMethodName == "GetCommCode") {
        		//기능없음
        	}
        	
        }

        /*-----------------------------+
         |  헤더 선택시 변경데이터 검사  |
         +------------------------------*/
        this.dsTM_SEQUNC_canrowposchange = function(obj,e) {

        	if (e.newrow < 0) return;

        	if (this.fnc_DatasetChangeCheck("dsTM_SEQDTL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        }

        /*-----------------------------+
         |  헤더 선택시 상세 내용 검색  |
         +------------------------------*/
        this.fn_KeyFieldDisibleHead = function (obj) {
        //dsTM_SEQUNC,dsTM_SEQDTL
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_SEQUNC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_SEQUNC, "TABLE_NAME"), "edittype", "normal");
        		this.grdTM_SEQUNC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_SEQUNC, "COLUMN_NAME"), "edittype", "normal");
        	} else {
        		this.grdTM_SEQUNC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_SEQUNC, "TABLE_NAME"), "edittype", "none");
        		this.grdTM_SEQUNC.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_SEQUNC, "COLUMN_NAME"), "edittype", "none");
        	}	
        	
        	this.fnc_DatasetClear('dsTM_SEQDTL'); //데이터셋 초기화
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_SEQDTL=dsTM_SEQDTL";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	//기능없음
        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_SEQUNC.addEventHandler("onrowposchanged", this.fn_KeyFieldDisibleHead, this);
            this.dsTM_SEQUNC.addEventHandler("canrowposchange", this.dsTM_SEQUNC_canrowposchange, this);
            this.dsTM_SEQDTL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_SEQDTL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
