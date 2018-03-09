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
                this.set_name("TMMA0070");
                this.set_titletext("엑셀업로드서식관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_EXCLXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCL_VWID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_VWNA\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_VWID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "299", "71", "47", "21", null, null, this);
            obj.set_text("양식명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXCL_VWNA", "absolute", "354", "71", "180", "21", null, null, this);
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "263", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_EXCLXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_EXCLXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"서식ID\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"서식명\"/><Cell col=\"2\" text=\"업무구분\"/><Cell col=\"3\" text=\"메뉴ID\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"메뉴명\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/><Cell col=\"6\" text=\"업로드\"/><Cell col=\"7\" text=\"다운로드\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:EXCL_VWID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:EXCL_VWNA\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SYST_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MENU_IDXX\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MENU_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" text=\"파일 업로드\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" text=\"파일 다운로드\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "90", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_type("search");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("");

            obj = new Static("imgSearchTitle01", "absolute", "27", "71", "55", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("엑셀업로드서식관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("15");
            obj.set_text("홈 > 공통관리 > 엑셀업로드서식관리");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("20");
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

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "82", "61", "8", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "270", "61", "40", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "105", "473", "21", "25", null, this);
            obj.set_taborder("29");
            obj.set_text("엑셀파일은 로컬에서 [파일업로드]후에 커밋까지 진행해 주셔야 서버에 반영됩니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Info.png') left middle");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("엑셀업로드서식관리");
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
        this.addIncludeScript("TMMA0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0070 엑셀업로드 서식 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.06.24		chg			Initial Created.
         *   2016.09.26		김준수		주석 수정.
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

        /**********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTTTTTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0070";
        this.sKeyValue    = new Array();

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

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
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
        	this.fnc_DatasetClear("dsTM_EXCLXM,dsFL_ATTACH");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_EXCLXM=dsTM_EXCLXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_EXCLXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_EXCLXM.insertRow(this.dsTM_EXCLXM.rowposition + 1);
        	this.dsTM_EXCLXM.set_rowposition(iRow);
        	this.dsTM_EXCLXM.setColumn(iRow, "USEX_YSNO", "1");
        	
        	this.fnc_GridSetCellFocus(this.grdTM_EXCLXM, "EXCL_VWID");
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTM_EXCLXM.deleteRow(this.dsTM_EXCLXM.rowposition);
        	this.grdTM_EXCLXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTM_EXCLXM,dsFL_ATTACH");
        	this.grdTM_EXCLXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsTM_EXCLXM.getColumn(this.dsTM_EXCLXM.rowposition,"EXCL_VWID");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_EXCLXM=dsTM_EXCLXM:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_EXCLXM.setFocus();
        	
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

        	var sMessage = this.fnc_FormUnloadCheck("dsTM_EXCLXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_EXCLXM,dsFL_ATTACH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_EXCLXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_EXCLXM.getColumn(this.dsTM_EXCLXM.rowposition, "EXCL_VWNA");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_EXCLXM,dsFL_ATTACH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_EXCLXM.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_EXCLXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(i, "EXCL_VWID"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "서식ID", this.dsTM_EXCLXM, i, this.grdTM_EXCLXM, 'EXCL_VWID');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(i, "EXCL_VWNA"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "서식명", this.dsTM_EXCLXM, i, this.grdTM_EXCLXM, 'EXCL_VWNA');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(i, "MENU_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메뉴ID", this.dsTM_EXCLXM, i, this.grdTM_EXCLXM, 'MENU_IDXX');
        		}
        	
        	}

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value));
        		sReturnString += " EXCL_VWNA=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREXCL_VWNA.value));
        	} else if (sKind == 'SAVE00') {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_EXCLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_EXCLXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        		//파일을 가지고 있는경우 다운로드 이미지 변경시 
        		//데이타셋 바인딩으로 데이터가 변경되는데,, 바인드를 사용하지 않으면 셀단위로 변경할수가 없어서
        		// 쿼리에서 가져와야 한다.
        		
        		//원래 행으로 돌아가기
        		var irow = this.dsTM_EXCLXM.findRow("EXCL_VWID",this.sKeyValue[0]);
        		this.sKeyValue[0] = "";
        		if(irow<0) irow=0;
        		this.dsTM_EXCLXM.set_rowposition(irow);	
        		
        		
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsTM_EXCLXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		//저장후 첨부파일 데이타리스트를 초기화 해야 한다.
        		//해당 화면은 메인로우 1개당 file_idxx가 1개라서 로우체인지때 초기화 하지 않는다.
        		this.fnc_DatasetClear('dsFL_ATTACH');
        		
        		//파일업로드를 하면 tmp path에 있는데, 저장을 하게 되면 tmp path에서 real path로 변경되기 때문에 서버에서 새로 가져와야 한다.
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "GRID,grdTM_EXCLXM,dsSYST_CODE,SYST_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_EXCLXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_EXCLXM, "EXCL_VWID"), "edittype", "normal");
        	} else {
        		this.grdTM_EXCLXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_EXCLXM, "EXCL_VWID"), "edittype", "none");
        	}

        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdTM_EXCLXM") {

        		if (sColumnID == "MENU_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "MENU_NAME") {
        			arrParam[0] = "TMM0010";
        			arrParam[1] = "";
        			arrParam[2] = "MENU_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTM_EXCLXM";
        			arrParam[5] = "MENU_IDXX,MENU_NAME,SYST_CODE";
        			arrParam[6] = "0,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}

        	}

        }

        this.dsTM_EXCLXM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "MENU_NAME" ) {
        		this.fn_HelpDialoge(this.grdTM_EXCLXM, "YES", e.oldvalue, e.columnid);
        	} else if (e.columnid == "EXCL_VWID" ) {
        		var nRowCnt;
        			nRowCnt = this.dsTM_EXCLXM.getCaseCount("EXCL_VWID == '"+ e.newvalue +"'")
        		if (nRowCnt == 1) {
        			var iRow = this.dsFL_ATTACH.findRow("EXCL_VWID", e.oldvalue);
        			// 새로추가된 로우가 변경된다면 변경값을 적용해준다.
        			this.dsFL_ATTACH.setColumn(iRow, "EXCL_VWID", e.newvalue);
        		} else if (nRowCnt > 1) {
        			this.fnc_Message("TMM077", "서식ID");
        			this.dsTM_EXCLXM.setColumn(e.row, "EXCL_VWID", "");
        			return false;
        		} 
        		
        	}
        	
        }

        this.grdTM_EXCLXM_oncellclick = function(obj,e) {

        	if(this.grdTM_EXCLXM.getCellText(e.row, e.col) == "파일 업로드") {
        		// 파일을 업로드하기전에 먼저 입력하도록....
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(e.row, "EXCL_VWID"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "서식ID", this.dsTM_EXCLXM, e.row, this.grdTM_EXCLXM, 'EXCL_VWID');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(e.row, "EXCL_VWNA"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "서식명", this.dsTM_EXCLXM, e.row, this.grdTM_EXCLXM, 'EXCL_VWNA');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_EXCLXM.getColumn(e.row, "MENU_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메뉴ID", this.dsTM_EXCLXM, e.row, this.grdTM_EXCLXM, 'MENU_IDXX');
        		}
        		//그리드 셀 이미지 클릭시 그리드로우와 데이타셋 로우가 같은지 확인(같음)
        		//파일업로드 팝업창 호출
        		this.fnc_CallFileUplod(1, "xls,xlsx", "fn_CallFileUplodCallback");
        		
        	} else if(this.grdTM_EXCLXM.getCellText(e.row, e.col) == "파일 다운로드") {
        		var excelId = this.dsTM_EXCLXM.getColumn(e.row, "EXCL_VWID");
        		this.fnc_DownExcelSample(excelId);
        	}
        }

        //공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
        //form 새로 꺼내야 한다.
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	//dataset이 없으면 이 함수가 실행되지 않는다.
        	//tmp에 업로드된 파일리스트가 담긴 dataset object 
        	//기존의 데이터를 삭제해야 하는데.
        	//var objds = form.components["dsFL_ATTACH"];
        	var objds = form.dsFL_ATTACH;
        	//var objmainds =form.components["dsTM_EXCLXM"];
        	var objmainds =form.dsTM_EXCLXM;
        	
        	var objmaingrd = form.grdTM_EXCLXM;
        	
        	//기존에 등록된 데이터는 삭제로 등록한다.
        	if((objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != "") && (objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != null )){
        		
        		var preFileName = objmainds.getColumn(objmainds.rowposition, "PFIL_NAME");
        		
        		// 만약 기존에 등록된 데이터가 이전 업로드에 업로드 하였다면(이전에 파일 업로드 후 저장하지는 않았다면...)
        		// dsFL_ATTACH 데이터셋에도 존재한다. 방금 업로드 했기에...
        		var findRow = objds.findRow("PFIL_NAME", preFileName);
        		
        		if (findRow == -1) {
        			
        			// 기존에 엑셀양식파일이 업로드 데이터셋에 존재하지 않는 경우(업로드를 한 것이 아니었다면...)
        			var iRow = objds.addRow();
        			objds.setColumn(iRow, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        			objds.setColumn(iRow, "PFIL_NAME", objmainds.getColumn(objmainds.rowposition, "PFIL_NAME"));
        			objds.setColumn(iRow, "FILE_PATH", objmainds.getColumn(objmainds.rowposition, "FILE_PATH"));
        			objds.setColumn(iRow, "EXCL_VWID", objmainds.getColumn(objmainds.rowposition, "EXCL_VWID"));
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(iRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(iRow, Dataset.ROWTYPE_DELETE);
        			}
        		
        		} else {
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(findRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(findRow, Dataset.ROWTYPE_DELETE);
        			}
        			
        		}
        	}
        	
        	//업무테이블에 해당 컬럼을 저장할 때만 갱신함, 보통 FILE_IDXX만 있으면 된다.
        	objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	objmainds.setColumn(objmainds.rowposition, "FILE_NAME", robjds.getColumn(0, "LFIL_NAME"));
        	
        	//현재 첨부파일이 tmp 폴더에 있는 상태에서 다운로드 버튼을 활성화 시킨다. (다운로드를 하려면 FILE_PATH,PFIL_NAME,LFIL_NAME 가 필요함.
        	objmainds.setColumn(objmainds.rowposition, "FILE_PATH", robjds.getColumn(0, "FILE_PATH"));
        	objmainds.setColumn(objmainds.rowposition, "PFIL_NAME", robjds.getColumn(0, "PFIL_NAME"));
        	objmainds.setColumn(objmainds.rowposition, "LFIL_NAME", robjds.getColumn(0, "LFIL_NAME"));

        	objmainds.setColumn(objmainds.rowposition, "DOWNLOAD", "파일 다운로드");

        	//저장버튼을 누르게 되면 tmp폴더에 있는 파일이 실제 폴더로 옮겨지기 때문에 FILE_PATH를 갱신하기 위해서 검색을 다시 해야 한다.
        	
        	//팝업창에서 추가된 파일리스트를 추가상태로 복사한다.(copyData를 사용하면 초기상태가된다)
        	var extn = "";
        	
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);
        		extn = objds.getColumn(iRow, "LFIL_NAME");
        		extn = extn.substring(extn.lastIndexOf("."));
        		if (extn.length == 0) extn = ".xls";
        		
        		// 엑셀 서식파일 저장시 논리파일명은 '서식ID.확장자' 로 저장
        		objds.setColumn(iRow, "LFIL_NAME", objmainds.getColumn(objmainds.rowposition, "EXCL_VWID") + extn);
        		
        		if(objds.updatecontrol) {
        			//copyRow 시
        			//updatecontrol 속성의 값이 'true'이면 복사된 행의 타입은 ROWTYPE_UPDATE가 되고, 'false'이면 ROWTYPE_NORMAL
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_EXCLXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_EXCLXM.addEventHandler("oncolumnchanged", this.dsTM_EXCLXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHREXCL_VWNA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTM_EXCLXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTM_EXCLXM.addEventHandler("oncellclick", this.grdTM_EXCLXM_oncellclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
