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
                this.set_name("HRMC0140");
                this.set_titletext("부서별사원정보");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_DEPTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_LEVL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OHOM_TENR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "47", "21", null, null, this);
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_value("null");

            obj = new Static("stInformation", "absolute", "8", "107", "261", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXM", "absolute", "258", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("5");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.getSetter("nosort").set("true");
            obj.set_tabstop("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"103\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"120\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"사진\"/><Cell col=\"1\" text=\"소속\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"성명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" displaytype=\"text\" text=\"직급\"/><Cell col=\"7\" text=\"자택번호\"/><Cell col=\"8\" text=\"휴대전화\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"background:stretch;background2:stretch;cursor:hand;selectbackground:EXPR(FILE_PATH == &quot;&quot; ? &quot;stretch&quot; : &quot;URL(&quot; + application.GBL_HTTPURL + '/core/erp/com/ComImageView.do?path=EMPL_PIC&amp;name=' + FILE_PATH.substr(FILE_PATH.lastIndexOf('/') + 1) + &quot;) stretch&quot;);backgroundimage:EXPR(FILE_PATH == &quot;&quot; ? &quot;theme://images/img_WF_user.png&quot; : application.GBL_HTTPURL + &quot;/core/erp/com/ComImageView.do?path=EMPL_PIC&amp;name=&quot;+FILE_PATH.substr(FILE_PATH.lastIndexOf(&quot;/&quot;)+1));\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CPOS_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:OHOM_TENR\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:HNPN_TENR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("trvTM_DEPTXM", "absolute", "8", "128", "230", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTM_DEPTXM");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseline("true");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none #808080 ;\" text=\"bind:DEPT_NAME\" editautoselect=\"true\" treelevel=\"bind:DEPT_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "348", "71", "43", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "390", "71", "80", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "472", "71", "21", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "495", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "624", "71", "43", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "666", "71", "80", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "748", "71", "21", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "771", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "213", "71", "102", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("하위부서포함");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRUNDP_YSNO", "absolute", "307", "71", "19", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("부서별사원정보");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("52");
            obj.set_text("홈 > 부서별사원정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("53");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("59");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("61");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("62");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "238", "181", "20", "41", null, null, this);
            obj.set_taborder("63");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서별사원정보");
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
        this.addIncludeScript("HRMC0140.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0140.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMC0140 부서별사원정보
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.25     황치웅     Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "HRMC0140";

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
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRSTDS_DATE.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTM_DEPTXM,dsHR_MASTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_DEPTXM=dsTM_DEPTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdHR_MASTXM.setFocus();

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
        	
        	this.fnc_DataSetCancel("dsTM_DEPTXM,dsHR_MASTXM");
        	this.grdTM_DEPTXM.setFocus();
        	
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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_DEPTXM,dsHR_MASTXM", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_DEPTXM,dsHR_MASTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
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
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); //기준일
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); //기준일
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " GBL_HTTPURL=" + this.fnc_Quote(application.GBL_HTTPURL);
        		
        		if(this.fnc_Length(this.edtSHREMPL_NUMB.Value) > 0) {
        			sReturnString += " UNDP_YSNO=" + this.fnc_Quote("1");
        		} else {
        			sReturnString += " UNDP_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.chkSHRUNDP_YSNO.value));
        		}
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
        		this.fnc_Information(this.stInformation, this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_DEPTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
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

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        	
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        	
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }

        
        /*---------------------------------+
         | Tree Grid 더블 클릭 이벤트 처리 |
         +---------------------------------*/
        this.tvHR_DEPTXM_cantreestatuschange = function(obj,e) {
        	this.treeStatus = 1;
        	
        }

        /*---------------------------------+
         | Tree Grid 클릭 이벤트 처리 |
         +---------------------------------*/
        this.trvTM_DEPTXM_oncellclick = function(obj,e) {
        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1) {
        		this.treeStatus = 0;
        		return;
        	}
        	
        	obj.setTreeStatus(gridRow, true);
        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true); // 자식 행 인덱스

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) {
        	
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		obj.setTreeStatus(gridRow, true);
        // 		if (obj.isTreeCollapsedRow(childRow, true)) { // 축소된 상태인지 확인
        // 			obj.setTreeStatus(gridRow, true);
        // 		} else {
        // 			obj.setTreeStatus(gridRow, false);
        // 		}
        	}
        	this.treeStatus = 0;
        	this.edtSHRDEPT_CODE.set_value(this.fnc_SubStr(this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition,"DEPT_CODE")));
        	this.edtSHRDEPT_NAME.set_value(this.fnc_SubStr(this.dsTM_DEPTXM.getColumn(this.dsTM_DEPTXM.rowposition,"DEPT_NAME")));
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.grdHR_MASTXM_oncelldblclick = function(obj,e) {
        	
        	var arrParam = new Array();
        	
        	if ( this.sUSERLAVEL == "1" ) { // 전체
        		arrParam[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");
        		arrParam[1] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
        		arrParam[2] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_CODE");
        		arrParam[3] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_NAME");
        		
        	} else if ( this.sUSERLAVEL == "3" ) { // 소속
        		if ( this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "SECT_CODE") == application.GBL_SECTCD ) {
        			arrParam[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");
        			arrParam[1] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
        			arrParam[2] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "SECT_CODE");
        			arrParam[3] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "SECT_NAME");
        		}
        		
        	} else if ( this.sUSERLAVEL == "4" ) { // 부서
        		if ( this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_CODE") == application.GBL_DEPTCD ) {
        			arrParam[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");
        			arrParam[1] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
        			arrParam[2] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_CODE");
        			arrParam[3] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_NAME");
        		}
        	
        	} else if ( this.sUSERLAVEL == "5" ) { // 개인
        		if ( this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB") == application.GBL_EMPLNO ) {
        			arrParam[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");
        			arrParam[1] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
        			arrParam[2] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_CODE");
        			arrParam[3] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "DEPT_NAME");
        			
        		}
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ){
        		this.fnc_OpenMenu("MHRMB0030", arrParam);
        	} else {
        		return this.fnc_Message("HRM074", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME"));
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
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_MASTXM.addEventHandler("oncelldblclick", this.grdHR_MASTXM_oncelldblclick, this);
            this.trvTM_DEPTXM.addEventHandler("cantreestatuschange", this.tvHR_DEPTXM_cantreestatuschange, this);
            this.trvTM_DEPTXM.addEventHandler("oncellclick", this.trvTM_DEPTXM_oncellclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.chkSHRUNDP_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMC0140.xfdl");
        this.loadPreloadList();
       
    };
}
)();
