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
                this.set_name("WFMC0020");
                this.set_titletext("써클가입현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_CLUBAP", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLUB_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLUB_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CLUB_DUNM\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CLAC_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REGI_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCSS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DDUC_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("써클가입현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("19");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_CLUBAP", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("9");
            obj.set_binddataset("dsCW_CLUBAP");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"가입써클명\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"써클직책\"/><Cell col=\"7\" text=\"써클활동\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"가입일\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"탈퇴일\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_essential\" text=\"공제금액\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:CLUB_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:CLUB_DUNM\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:CLAC_NAME\"/><Cell col=\"8\" displaytype=\"expr:REGI_DATE=='' ? 'normal' : 'date'\" edittype=\"date\" text=\"bind:REGI_DATE\"/><Cell col=\"9\" displaytype=\"expr:SCSS_DATE=='' ? 'normal' : 'date'\" edittype=\"date\" text=\"bind:SCSS_DATE\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:DDUC_AMOT\" mask=\"#,##0\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('DDUC_AMOT')\" mask=\"#,##0\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRREGI_DATE2", "absolute", "200", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "185", "71", "14", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRREGI_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static03", "absolute", "300", "61", "30", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "361", "71", "80", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "443", "71", "21", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "466", "71", "100", "21", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "319", "71", "52", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "566", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "585", "71", "52", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "627", "71", "80", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "709", "71", "21", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "732", "71", "100", "21", null, null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "851", "71", "52", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("써클");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "832", "61", "30", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLUB_CODE", "absolute", "896", "71", "80", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLUB_CODE", "absolute", "978", "71", "21", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLUB_NAME", "absolute", "1001", "71", "100", "21", null, null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("써클가입현황");

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
        this.addIncludeScript("WFMC0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMC0020.xfdl", function() {
         /***************************************************************************************************
         * # Program : 써클가입현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.22		박성진			Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMC0020";

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
        	this.calSHRREGI_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6) + '01');
        	this.calSHRREGI_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	this.calSHRREGI_DATE2.setFocus();
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
        	this.fnc_DatasetClear('dsCW_CLUBAP');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_CLUBAP=dsCW_CLUBAP";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_CLUBAP.setFocus();
        }

        
        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsCW_CLUBAP.insertRow(this.dsCW_CLUBAP.rowposition + 1);
        	this.dsCW_CLUBAP.set_rowposition(iRow);
        	this.dsCW_CLUBAP.setColumn(iRow, "REGI_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsCW_CLUBAP.setColumn(iRow, "SCSS_DATE", '');
        	this.grdCW_CLUBAP.setCellPos(this.fnc_GridColumnIndex(this.grdCW_CLUBAP, 1));
        	this.grdCW_CLUBAP.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsCW_CLUBAP.deleteRow(this.dsCW_CLUBAP.rowposition);
        	this.grdCW_CLUBAP.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_CLUBAP");
        	this.grdCW_CLUBAP.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_CLUBAP=dsCW_CLUBAP:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_CLUBAP.setFocus();
        	
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_CLUBAP", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_CLUBAP")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if ( nexacro.toNumber(this.calSHRREGI_DATE2.value - this.calSHRREGI_DATE1.value) < 0 ) {
        		return this.fnc_SearchCheckPostAction("TMM042", "기간 시작일, 종료일", this.calSHRREGI_DATE1);
        	}

        
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_CLUBAP.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsCW_CLUBAP.getColumn(this.dsCW_CLUBAP.rowposition, "CLUB_NAME") + " " + 
        						this.dsCW_CLUBAP.getColumn(this.dsCW_CLUBAP.rowposition, "EMPL_NAME");
        						
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_CLUBAP")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_CLUBAP.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBAP.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원", this.dsCW_CLUBAP, i, this.dsCW_CLUBAP, 'EMPL_NUMB');
        		}		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBAP.getColumn(i, "CLUB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "써클명", this.dsCW_CLUBAP, i, this.dsCW_CLUBAP, 'CLUB_CODE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBAP.getColumn(i, "DDUC_AMOT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제금액", this.dsCW_CLUBAP, i, this.dsCW_CLUBAP, 'DDUC_AMOT');
        		}
        			
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBAP.getColumn(i, "REGI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "가입일", this.dsCW_CLUBAP, i, this.dsCW_CLUBAP, 'REGI_DATE');
        		}			
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_CLUBAP.getColumn(i, "SCSS_DATE"))) > 0) {
        			if (nexacro.toNumber(this.dsCW_CLUBAP.getColumn(i, "SCSS_DATE") - this.dsCW_CLUBAP.getColumn(i, "REGI_DATE")) < 0) {
        				this.fnc_Message("WFM009");
        				return false;
        			}
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
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " REGI_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRREGI_DATE1.value));
        		sReturnString += " REGI_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRREGI_DATE2.value));		
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));		
        		sReturnString += " CLUB_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLUB_CODE.value));

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsCW_CLUBAP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_CLUBAP.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		/*
        		if (this.dsCW_CLUBAP.getRowCount() > 0) {
        			for (var i = 0; i < this.dsCW_CLUBAP.getRowCount(); i++) {		
        				alert(this.dsCW_CLUBAP.getRowType(i));
        				//Dataset.ROWTYPE_NORMAL : 1
        				this.grdCW_CLUBAP.cell(i,1).
        			}
        		}
        		*/

        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsCW_CLUBAP);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdCW_CLUBAP.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_CLUBAP, "EMPL_NAME"), "edittype", "text");
        	} else {
        		this.grdCW_CLUBAP.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_CLUBAP, "EMPL_NAME"), "edittype", "none");
        	}

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdCW_CLUBAP.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_CLUBAP, "REGI_DATE"), "edittype", "date");
        	} else {
        		this.grdCW_CLUBAP.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_CLUBAP, "REGI_DATE"), "edittype", "none");
        	} 
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	// 조회조건 - 사원정보조회(Popup)	
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        	
        		arrParam[0] = "HRM0002";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	// 조회조건 - 써클정보조회(Popup)	
        	} else if ((obj.name == "imgHelpSHRCLUB_CODE") || (obj.name == "edtSHRCLUB_NAME")) {
        	
        		arrParam[0] = "WFM0006";
        		arrParam[1] = this.edtSHRCLUB_NAME.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCLUB_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCLUB_NAME";
        		arrParam[5] = "edtSHRCLUB_CODE,edtSHRCLUB_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if (obj.name == "grdCW_CLUBAP") {
        	
        		// 그리드 - 사원정보조회(Popup)
        		//this.fnc_getGridHelpColName(obj, sFromDs)
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") || (sColumnID == "EMPL_NAME")) {
        			arrParam[0] = "HRM0051";
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdCW_CLUBAP";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_NAME,OPOS_NAME";
        			arrParam[6] = "0,1,2,4,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		// 그리드 - 써클정보조회(Popup)	
        		} else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CLUB_NAME") || (sColumnID == "CLUB_NAME")) {
        			arrParam[0] = "WFM0006";
        			arrParam[1] = "";
        			arrParam[2] = "CLUB_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_CLUBAP";
        			arrParam[5] = "CLUB_CODE,CLUB_NAME,CLAC_NAME,DDUC_AMOT";
        			arrParam[6] = "0,1,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}		

        	}	
        }
         

        this.dsCW_CLUBAP_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME" || e.columnid == "CLUB_NAME" ) this.fn_HelpDialoge(this.grdCW_CLUBAP, "YES", e.oldvalue, e.columnid);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_CLUBAP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsCW_CLUBAP.addEventHandler("oncolumnchanged", this.dsCW_CLUBAP_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_CLUBAP.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.calSHRREGI_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRREGI_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLUB_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCLUB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
