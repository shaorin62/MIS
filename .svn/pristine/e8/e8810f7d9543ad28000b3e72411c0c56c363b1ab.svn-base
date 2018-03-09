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
                this.set_name("PAYC0280");
                this.set_titletext("항목별조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "216", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("select");
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"114\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" displaytype=\"text\" text=\"지급총액\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\" editimemode=\"native\"/><Cell col=\"3\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:CPOS_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PAYX_AMOT\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PAYX_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "27", "71", "104", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("소급대상년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRSTDS_YMTH", "absolute", "121", "71", "80", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_CODE", "absolute", "228", "71", "49", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "270", "71", "80", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "352", "71", "22", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "375", "71", "97", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "501", "71", "49", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "543", "71", "80", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "625", "71", "22", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "648", "71", "95", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "771", "71", "84", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "839", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("항목별조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("35");
            obj.set_text("홈 > 급여관리 > 항목별조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("46");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "113", "61", "8", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "201", "61", "40", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("50");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("항목별조회");
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
        this.addIncludeScript("PAYC0280.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYC0280.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0280 항목별조회
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.01		고민주		Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "PAYC0280";

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
        	this.medSHRSTDS_YMTH.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6));
        	
        	this.sUSERLAVEL = '5';
        	
        	switch(this.sUSERLAVEL) {
        		case '5':	//관리자
        			break;

        		case '4':	//부문

        			break;

        		case '3':  	//부실
        			this.edtSHRDEPT_NAME.set_readonly(true);
        			this.imgHelpSHRDEPT_CODE.set_enable(false);

        			if(application.GBL_SECTCD.length>0) {
        				this.edtSHRDEPT_CODE.set_value(application.GBL_SECTCD);
        				this.edtSHRDEPT_NAME.set_value(application.GBL_SECTNM);
        			} else {
        				this.edtSHRDEPT_CODE.set_value(' ');
        				this.edtSHRDEPT_NAME.set_value(' ');
        			}

        			break;

        		case '2':	//부서
        			this.edtSHRDEPT_NAME.set_readonly(true);
        			this.imgHelpSHRDEPT_CODE.set_enable(false);

        
        			if(application.GBL_DEPT_CODE.length>0) {
        				this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        				this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        			} else {
        				this.edtSHRDEPT_CODE.set_value(' ');
        				this.edtSHRDEPT_NAME.set_value(' ');
        			}

        			break;

        		case '1':  //개인
        			this.imgHelpSHRDEPT_CODE.set_enable(false);
        			this.edtSHRDEPT_NAME.set_readonly(true);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_readonly(true);

        			if(application.GBL_EMPLNO.length>0) {
        				this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        				this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        			} else {
        				this.edtSHREMPL_NUMB.set_value(' ');
        				this.edtSHREMPL_NAME.set_value(' ');
        			}

        			break;

        	}
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

        	//동적그리드- 추가된 컬럼 삭제
         	var iColCount    = this.grdPY_PMMAST.getCellCount("body");
         	var iAddColCount = this.dsPY_ALLDED.getRowCount();

         	for(var i = iColCount; i >= iColCount - iAddColCount ; i--){
        		this.grdPY_PMMAST.deleteContentsCol(i);
        	}
        	this.fnc_DatasetClear("dsPY_ALLDED,dsPY_PMMAST");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_ALLDED=dsPY_ALLDED dsPY_PMMAST=dsPY_PMMAST";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	this.fnc_DataSetCancel("dsPY_PMMAST");
        	this.grdPY_PMMAST.setFocus();
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
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMMAST", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_PMMAST")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRSTDS_YMTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "소급대상년월", this.medSHRPAYX_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

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
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YMTH.value));
         		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
         		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
         		sReturnString += " CLSD_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value));

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

        	if (sMethodName == "SEARCH00") {

        		//동적그리드- 필요한 그리드 컬럼 생성
        		var iCol = -1;
        		this.grdPY_PMMAST.splitContentsCell("summ",0,0,0,5,true);

        		for(var i = 0 ; i < this.dsPY_ALLDED.getRowCount(); i++){

        			iCol = this.grdPY_PMMAST.appendContentsCol();
        			this.grdPY_PMMAST.setFormatColProperty(iCol,"size",100);

        			this.grdPY_PMMAST.setCellProperty("Head", iCol, "text",this.dsPY_ALLDED.getColumn(i,"EXPD_NAME"));
        			this.grdPY_PMMAST.setCellProperty("Body", iCol, "text","bind:"+this.dsPY_ALLDED.getColumn(i,"EXPD_CODE"));
        			this.grdPY_PMMAST.setCellProperty("Body", iCol, "displaytype","number");
        			this.grdPY_PMMAST.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");

        			this.grdPY_PMMAST.setCellProperty("Summ", iCol, "displaytype","number");
        			this.grdPY_PMMAST.setCellProperty("Summ", iCol, "style","align:right;");
        			this.grdPY_PMMAST.setCellProperty("Summ", iCol, "expr","expr:dataset.getSum('"+this.dsPY_ALLDED.getColumn(i,"EXPD_CODE")+"')");

        		}

        		this.grdPY_PMMAST.mergeContentsCell("summ",0,0,0,5,0,false);

        		this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCLSD_CODE,dsCLSD_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	}

        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_PMMAST.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.medSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYC0280.xfdl");
        this.loadPreloadList();
       
    };
}
)();
