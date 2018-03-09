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
                this.set_name("BDMB0010");
                this.set_titletext("부서예산편성기준");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }
            this.style.set_border("0 none #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLSTD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RANK_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"STND_AMNT\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsRANK_CODE</Col><Col id=\"CODEID\">POSI_CODE</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLSTD", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_binddataset("dsTB_CPLSTD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"196\"/><Column size=\"125\"/><Column size=\"393\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"직급\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"계정과목명\"/><Cell col=\"3\" text=\"기준금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:RANK_CODE\" combodataset=\"dsRANK_CODE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" expandsize=\"20\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT?' 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:STND_AMNT\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("2");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnBeforeCopy", "absolute", "8", "32", "87", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("전년도복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("6");
            obj.set_text("부서예산편성기준");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("7");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "68", "77", "22", null, null, this);
            obj.set_taborder("8");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "93", "68", "71", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "186", "68", "75", "22", null, null, this);
            obj.set_taborder("10");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "260", "68", "156", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서예산편성기준");
            		p.set_scrollbars("none");
            		p.style.set_border("0 none #808080ff");

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
        this.addIncludeScript("BDMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMB0010 부서예산편성기준
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "BDMB0010";

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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 8)); 
        	this.grdTB_CPLSTD.setFocus();
        	
        }

        /*-----------------------------------+
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
        	this.fnc_DatasetClear("dsTB_CPLSTD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLSTD=dsTB_CPLSTD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLSTD.setFocus();                                   
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var sRow = this.dsTB_CPLSTD.addRow();
        	
        	this.fnc_GridSetCellFocus(this.grdTB_CPLSTD, "RANK_CODE");
        	this.dsTB_CPLSTD.setColumn(sRow, "ACCT_GUB1", this.cmbSHRACCT_GUB1.value);
        	this.dsTB_CPLSTD.setColumn(sRow, "BUDG_YEAR", this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));
        	
        	

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTB_CPLSTD.deleteRow(this.dsTB_CPLSTD.rowposition);
        	this.grdTB_CPLSTD.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLSTD"); 
        	this.grdTB_CPLSTD.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLSTD=dsTB_CPLSTD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLSTD.setFocus(); 
        	
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

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLSTD", this);
        	
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_GUB1);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var sQuestionText  = " 직급 ("     +  this.fnc_Trim(this.dsTB_CPLSTD.getColumn(this.dsTB_CPLSTD.rowposition, "RANK_CODE")) + ")";
        	    sQuestionText += " 계정과목(" + this.fnc_Trim(this.dsTB_CPLSTD.getColumn(this.dsTB_CPLSTD.rowposition, "ACCT_INTL")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLSTD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTB_CPLSTD.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTB_CPLSTD.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLSTD.getColumn(row, "RANK_CODE"))) < 1) {		
        			return this.fnc_CheckPostAction("TMM072", "직급코드", this.dsTB_CPLSTD, row, this.grdTB_CPLSTD, "RANK_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLSTD.getColumn(row, "ACCT_BFNM"))) < 1) {		
        			return this.fnc_CheckPostAction("TMM072", "계정과목명", this.dsTB_CPLSTD, row, this.grdTB_CPLSTD, "ACCT_BFNM");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLSTD.getColumn(row, "ACCT_INTL"))) < 1) {		
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTB_CPLSTD, row, this.grdTB_CPLSTD, "ACCT_INTL");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLSTD.getColumn(row, "STND_AMNT")), 0) == 0) {		
        			return this.fnc_CheckPostAction("TMM072", "기준금액", this.dsTB_CPLSTD, row, this.grdTB_CPLSTD, "STND_AMNT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLSTD.getColumn(row, "REMK_NOTE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "비고", this.dsTB_CPLSTD, row, this.grdTB_CPLSTD, "REMK_NOTE");
        		}
        	
        	}
        	
        	return true;
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4)); //기준년도
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value);									   //회계단위

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        	
        	// 전년도복사
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4)); //기준년도
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value);									   //회계단위
        	  //sReturnString += " ACCT_GUB1=" + "01";  왜 01이 붙는지 몰라서 그냥 위에처럼 했음..
        		
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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

        	if (sMethodName == "SEARCH00") 	{
        		
        		this.fnc_Information(this.stInformation, this.dsTB_CPLSTD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLSTD.rowcount); 
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "PROC00") {
        	
        		this.fnc_Message("TMM125", "전년도복사가 완료 되었습니다.."); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";
        			arrParam[1] = "GRID,grdTB_CPLSTD,dsRANK_CODE,RANK_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} 
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdTB_CPLSTD") {
        		//계정명
        		  if (this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_BFNM") {
        			
        			arrParam[0] = "BDM0011";
        			arrParam[1] = "";
        			arrParam[2] = "ACCT_BFNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLSTD";
        			arrParam[5] = "ACCT_INTL,ACCT_BFNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTB_CPLSTD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLSTD, "RANK_CODE"), "edittype", "combo");
        		this.grdTB_CPLSTD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLSTD, "ACCT_INTL"), "edittype", "normal");
        	} else {
        		this.grdTB_CPLSTD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLSTD, "RANK_CODE"), "edittype", "none");	
        		this.grdTB_CPLSTD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLSTD, "ACCT_INTL"), "edittype", "none");
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {
        	this.fnc_DatasetClear("dsTB_CPLSTD");
        	this.stInformation.set_text("");
        }

        /*--------------------------+
         |  전년도 복사 처리  |
         +---------------------------*/
        this.fn_BeforeCopy = function (obj,e) {

        	if (!this.fnc_Message("TMM140", "기준년도 자료를 모두 삭제하고 전년도 자료를 복사 합니다.. 복사하시겠습니까")) return;
        		
        	var sMethodName = "PROC00";
        	var sInDataSet  = "dsTB_CPLSTD=dsTB_CPLSTD";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLSTD.setFocus(); 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLSTD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLSTD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnBeforeCopy.addEventHandler("onclick", this.fn_BeforeCopy, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("BDMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
