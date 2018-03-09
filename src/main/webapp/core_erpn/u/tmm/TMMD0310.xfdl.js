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
                this.set_name("TMMD0310");
                this.set_titletext("소스코드생성관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_TABLE", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_QUERY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "332", "60", null, "43", "25", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemBoxOut");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("0 solid #cbcbcbff");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", "304", "69", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_TABLE", "absolute", "8", "154", "304", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_TABLE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.getSetter("UserData").set("S");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"204\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"Table\"/><Cell col=\"1\" displaytype=\"text\" text=\"Comments\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:TABLE_NAME\" editlimit=\"3\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TABLE_COMMENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "332", "113", "115", "21", null, null, this);
            obj.set_text("Source Code");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "169", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("18");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateParameter", "absolute", "344", "69", "100", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("PARAMETER");
            obj.getSetter("UserData").set("P");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateSelect", "absolute", "450", "69", "82", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("SELECT");
            obj.getSetter("UserData").set("S");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateInsert", "absolute", "538", "69", "66", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("INSERT");
            obj.getSetter("UserData").set("I");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateUpdate", "absolute", "610", "69", "74", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("UPDATE");
            obj.getSetter("UserData").set("U");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateDelete", "absolute", "690", "69", "82", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("DELETE");
            obj.getSetter("UserData").set("D");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateJavaDel", "absolute", "778", "69", "120", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("JAVA DELETE");
            obj.getSetter("UserData").set("DC");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateJavaSave", "absolute", "904", "69", "108", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("JAVA SAVE");
            obj.getSetter("UserData").set("SC");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateDataSet", "absolute", "1018", "69", "132", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("CONTENTS EDIT");
            obj.getSetter("UserData").set("C");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "332", null, "115", "21", null, "300", this);
            obj.set_text("Query Syntax");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtQuery", "absolute", "332", null, null, "285", "25", "15", this);
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("upper");
            obj.style.set_font("9 돋움체,Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateQueryDataSet", "absolute", null, null, "101", "21", "25", "304", this);
            obj.set_taborder("14");
            obj.set_text("RUN QUERY");
            obj.getSetter("UserData").set("R");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFILT_STRN", "absolute", "39", "97", "252", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbFILT_KIND", "absolute", "108", "71", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbFILT_KIND_innerdataset = new Dataset("cmbFILT_KIND_innerdataset", this.cmbFILT_KIND);
            cmbFILT_KIND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TABLE_NAME</Col><Col id=\"datacolumn\">Table</Col></Row><Row><Col id=\"codecolumn\">TABLE_COMMENTS</Col><Col id=\"datacolumn\">Comments</Col></Row></Rows>");
            obj.set_innerdataset(cmbFILT_KIND_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_value("TABLE_NAME");
            obj.set_text("Physical Name");
            obj.set_index("0");

            obj = new Static("imgSearchTitle1", "absolute", "28", "70", "76", "21", null, null, this);
            obj.set_text("Filter 구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopyClipboard", "absolute", null, "109", "137", "21", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("Copy To Clipboard");
            obj.getSetter("UserData").set("R");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtCODE", "absolute", "332", "134", null, null, "25", "331", this);
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_readonly("false");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("upper");
            obj.style.set_font("9 돋움체,Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("소스코드생성관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("23");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("33");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "312", "195", "20", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "185", "129", "48", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소스코드생성관리");
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
        this.addIncludeScript("TMMD0310.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0310.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0310 소스코드 생성 관리
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFFF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "TMMD0310"; //해당 Form에서 사용 할 Package 명

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
        	this.fn_Search(obj);

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

        	this.fnc_DatasetClear("dsTM_TABLE,dsTM_QUERY"); 
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_TABLE=dsTM_TABLE";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.edtSHRFILT_STRN.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        } 

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_CopyClipboard = function (obj,e) {

        	system.clearClipboard(); 							//클립보드를 Clear합니다.
        	system.setClipboard("CF_TEXT", this.edtCODE.value); //외부 Excel에 Ctrl+c로 보낼수 있는 예제

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentsType) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

        	// Contents 생성을 위한 조회
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TABLE_NAME=" + this.fnc_Quote(this.fnc_Trim(this.dsTM_TABLE.getColumn(this.dsTM_TABLE.rowposition, "TABLE_NAME")));
        		sReturnString += " QUERY_TYPE=" + this.fnc_Quote(this.fnc_Trim(sContentsType));
        		sReturnString += " QUERY_STRG=" + this.fnc_Quote(this.fnc_Trim(this.edtQuery.value));
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_TABLE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_TABLE.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_TableListFilter(this.edtSHRFILT_STRN);
        		
        		this.grdTM_TABLE.selectRow(this.dsTM_TABLE.rowposition);
        		
        	} else if (sMethodName == "SEARCH01") {
        				
        		// 내용 초기화 처리
        		this.edtCODE.set_value("");

        		if (this.dsTM_QUERY.getColID(0) == "CODE") {
        		
        			// 받은 내용 Display
        			for (var i = 0; i < this.dsTM_QUERY.rowcount; i++) {
        				this.edtCODE.set_value(this.edtCODE.value + (this.dsTM_QUERY.getColumn(i, "CODE") + String.fromCharCode(10)));
        			}
        			
        		} else {
        		
        			this.fnc_DatasetClear("dsTM_QUERY");
        			var sDisplayString = this.dsTM_QUERY.saveXML();
        			sDisplayString = this.fnc_Replace(sDisplayString, "<Dataset id='dsTM_QUERY'>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "<ColumnInfo>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "</ColumnInfo>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "</ColumnInfo>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "<Rows>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "</Rows>","");
        			sDisplayString = this.fnc_Replace(sDisplayString, "</Dataset>", "");
        			this.edtCODE.set_value(this.fnc_Space(12)+this.fnc_Trim(sDisplayString));

        		}
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	// 테이블 변경 시 해당 자료 초기화
        	this.edtCODE.set_value("");

        }

        /*-------------------------------------+
         |  작업 처리 - 버튼 종류에 따라 처리  |
         +-------------------------------------*/
        this.fn_CreateSource = function (obj,e) {

        	// Query 직접 실행 시 SELECT 전처리
        	if (obj.name == "btnCreateQueryDataSet") {
        	
        		var sQuery = this.fnc_Trim((this.edtQuery.value));

        		if (this.fnc_Length(this.fnc_Trim(sQuery)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM125", "실행 할 쿼리를 입력하세요!", this.edtQuery);
        		}

        		if (this.fnc_ToUpper(sQuery.substr(0,7)) != "SELECT ") {
        			return this.fnc_SearchCheckPostAction("TMM125", "SELECT 구문만 실행 가능합니다.", this.edtQuery);
        		}

        		if (this.fnc_IndexOf(sQuery, ";") != -1) {
        			return this.fnc_SearchCheckPostAction("TMM125", "복수쿼리는 실행 되지 않습니다. (;) 제거 하세요!", this.edtQuery);
        		}
        	}

        	this.fn_SearchCode(this.fnc_ToUpper(obj.UserData));
        }

        /*---------------------+
         | 스크립트 생성 처리  |
         +---------------------*/
        this.fn_SearchCode = function (sContentsType) {

        	this.fnc_DatasetClear("dsTM_QUERY"); 
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_QUERY=dsTM_QUERY";
        	var sArgument = this.fn_CreateArgument(sMethodName, sContentsType);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.edtCODE.setFocus();
        }

        /*--------------------+
         | Table List Filter  |
         +--------------------*/
        this.fn_TableListFilter = function (obj) {

        	if (obj.name == "cmbFILT_KIND") this.edtSHRFILT_STRN.setFocus();

        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRFILT_STRN.text)) > 0) {
        		
        		this.dsTM_TABLE.filter(this.fnc_ToUpper(this.cmbFILT_KIND.value) + ".indexOf("+ "'" + this.fnc_Trim(this.fnc_ToUpper(this.edtSHRFILT_STRN.text)) + "') >= 0");
        		
        		if (this.dsTM_TABLE.getRowCount() > 0) {
        			this.dsTM_TABLE.rowposition = 0;
        			this.grdTM_TABLE.selectRow(0);
        			//this.grdTM_TABLE.setFocus();
        		}
        		
        	} else {
        		this.dsTM_TABLE.filter("");
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_TABLE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_TABLE.addEventHandler("oncelldblclick", this.fn_CreateSource, this);
            this.btnCreateParameter.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateSelect.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateInsert.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateUpdate.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateDelete.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateJavaDel.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateJavaSave.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateDataSet.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateQueryDataSet.addEventHandler("onclick", this.fn_CreateSource, this);
            this.edtSHRFILT_STRN.addEventHandler("ontextchanged", this.fn_TableListFilter, this);
            this.cmbFILT_KIND.addEventHandler("onitemchanged", this.fn_TableListFilter, this);
            this.btnCopyClipboard.addEventHandler("onclick", this.fn_CopyClipboard, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMD0310.xfdl");
        this.loadPreloadList();
       
    };
}
)();
