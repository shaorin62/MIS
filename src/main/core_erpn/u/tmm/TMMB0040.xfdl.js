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
                this.set_name("TMMB0040");
                this.set_titletext("그룹권한관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_ATGPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"GRUP_IDXX\" size=\"256\" type=\"STRING\"/><Column id=\"GRUP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"UPGR_IDXX\" size=\"256\" type=\"STRING\"/><Column id=\"UPGR_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"USDN_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" type=\"STRING\"/><Column id=\"GRUP_LEVL\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation1", "absolute", "8", "60", "174", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("tvTM_ATGPXM", "absolute", "8", "81", "360", null, null, "15", this);
            obj.set_taborder("12");
            obj.set_binddataset("dsTM_ATGPXM");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"359\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none transparent ;selectline:1 none #808080ff ;\" text=\"bind:GRUP_NAME\" treestartlevel=\"1\" treelevel=\"bind:GRUP_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_ATGPXM", "absolute", "388", "81", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsTM_ATGPXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"178\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"그룹ID\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"그룹명\"/><Cell col=\"2\" text=\"상위그룹ID\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"상위그룹명\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:GRUP_IDXX\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:GRUP_NAME\"/><Cell col=\"2\" text=\"bind:UPGR_IDXX\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:UPGR_NAME\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("권한그룹관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("15");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "802", "56", "80", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "75", "216", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "368", "157", "20", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그룹권한관리");
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
        this.addIncludeScript("TMMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0040.xfdl", function() {
         /***************************************************************************************************
         * # Program : TMMB0040 그룹권한관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.06.24		chg			Initial Created.
         *	 2016.08.24		luigi		입력, 삭제 기능 추가
         *   2016.09.26     김준수     주석수정
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부*
         **********************/
        this.sBUTTONLIST  = "TTTTTTT"; //버튼순서[종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄]
        this.sPACKAGENAME = "TMMB0040"; //해당 Form에서 사용 할 Package 명
        this.sKeyValue = new Array();	//저장 시 Tree의 Key 값 저장

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
        	this.fnc_DatasetClear("dsTM_ATGPXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_ATGPXM=dsTM_ATGPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_ATGPXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	// 현재 데이터셋의 선택된 행을 상위 권한그룹으로 지정하여 행을 추가한다.
        	var iRow = this.dsTM_ATGPXM.insertRow(this.dsTM_ATGPXM.rowposition + 1);
        	
        	
        	// 아무것도 없다면..? 0번째 행이 추가되므로..
        	if (iRow > 0) {
        		this.dsTM_ATGPXM.setColumn(iRow, "UPGR_IDXX", this.dsTM_ATGPXM.getColumn(iRow - 1, "GRUP_IDXX"));
        		this.dsTM_ATGPXM.setColumn(iRow, "UPGR_NAME", this.dsTM_ATGPXM.getColumn(iRow - 1, "GRUP_NAME"));
        	}
        	
        	this.dsTM_ATGPXM.set_rowposition(iRow);
        	this.fnc_GridSetCellFocus(this.grdTM_ATGPXM, 0);
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) {
        		this.dsTM_ATGPXM.deleteRow(this.dsTM_ATGPXM.rowposition);
        	}
        	
        	this.grdTM_ATGPXM.setFocus();
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_ATGPXM");
        	this.grdTM_ATGPXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_IDXX");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_ATGPXM=dsTM_ATGPXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_ATGPXM.setFocus();
        	
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_ATGPXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
         
        } 

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck('dsTM_ATGPXM')) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_ATGPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	// 삭제하려는 권한그룹이 상위권한그룹으로 지정된 권한그룹이 존재하는 경우 삭제 안함.
        	var subCount = this.dsTM_ATGPXM.getCaseCount("UPGR_IDXX=='" + this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_IDXX") + "'");
        	if (subCount > 0) {
        		this.fnc_Message("TMM147");
        		return false;
        	}
        	
        	var sQuestionText = this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_NAME");
        	return this.fnc_Message("TMM148", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_ATGPXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_ATGPXM.getRowCount(); i++) {
        	
        		if ((this.fnc_Length(this.fnc_Trim(this.dsTM_ATGPXM.getColumn(i, "GRUP_IDXX"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", "그룹ID를", this.dsTM_ATGPXM, i, this.grdTM_ATGPXM, 'GRUP_IDXX');
        		}

        		if ((this.fnc_Length(this.fnc_Trim(this.dsTM_ATGPXM.getColumn(i, "GRUP_NAME"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", "그룹명을", this.dsTM_ATGPXM, i, this.grdTM_ATGPXM, 'GRUP_NAME');
        		}
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind);

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 	     + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      + this.fnc_Quote(sKind);
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
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

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_ATGPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		
        		//원래 행으로 돌아가기
        		var iFindRow = this.dsTM_ATGPXM.findRow("GRUP_IDXX", this.sKeyValue[0]);
        		this.sKeyValue[0] = "";
        		
        		if (iFindRow == -1) iFindRow = 0;
        		
        		this.dsTM_ATGPXM.set_rowposition(iFindRow);

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fn_Search();
        		this.fnc_Message("TMM103");
        	}
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_ATGPXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_ATGPXM, "GRUP_IDXX"), "edittype", "normal");
        		this.grdTM_ATGPXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_ATGPXM, "GRUP_NAME"), "edittype", "normal");
        	} else {
        		this.grdTM_ATGPXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_ATGPXM, "GRUP_IDXX"), "edittype", "none");
        		this.grdTM_ATGPXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_ATGPXM, "GRUP_NAME"), "edittype", "none");
        	}	

        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == 'grdTM_ATGPXM') {

        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "UPGR_NAME") || (sColumnID == "UPGR_NAME")) {
        			arrParam[0] = 'TMM0001';                                 //Popup ID
        			arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        			arrParam[2] = 'UPGR_NAME';                               //콤보조건구분에 대응되는 컬럼
        			arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        			arrParam[4] = 'grdTM_ATGPXM';                            //현재 포커스 Componect명
        			arrParam[5] = 'UPGR_IDXX,UPGR_NAME';                     //초기화 및 결과 Mapping Column
        			arrParam[6] = '0,1';                                     //Mapping Column Index
        			arrParam[7] = sFromDs;                                   //Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = sOldValue;                                 //취소 시 변경 이전의 값
        		}

        	}
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        
        /*-------------------------------------+
         | 데이터셋 컬럼 변경 이벤트 처리  |
         +-------------------------------------*/
        this.dsTM_ATGPXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "UPGR_NAME" ) this.fn_HelpDialoge(this.grdTM_ATGPXM, 'YES', e.oldvalue, e.columnid);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_ATGPXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_ATGPXM.addEventHandler("oncolumnchanged", this.dsTM_ATGPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.tvTM_ATGPXM.addEventHandler("oncelldblclick", this.tvTREE_VIEW_oncelldblclick, this);
            this.tvTM_ATGPXM.addEventHandler("cantreestatuschange", this.tvTREE_VIEW_cantreestatuschange, this);
            this.grdTM_ATGPXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
