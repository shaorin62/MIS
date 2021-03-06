﻿(function()
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
                this.set_name("MCMA0080");
                this.set_titletext("인쇄사이즈관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_NPAPXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MNDY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_MEDM\" type=\"STRING\" size=\"256\"/><Column id=\"STAD_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMNDYCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MNDY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNDY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNDY_CODE\">A</Col><Col id=\"MNDY_NAME\">일간지</Col></Row><Row><Col id=\"MNDY_CODE\">B</Col><Col id=\"MNDY_NAME\">경제지</Col></Row><Row><Col id=\"MNDY_CODE\">C</Col><Col id=\"MNDY_NAME\">스포츠지</Col></Row><Row><Col id=\"MNDY_CODE\">D</Col><Col id=\"MNDY_NAME\">무가지</Col></Row><Row><Col id=\"MNDY_CODE\">E</Col><Col id=\"MNDY_NAME\">전문지</Col></Row><Row><Col id=\"MNDY_CODE\">0</Col><Col id=\"MNDY_NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRMNDYCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MNDY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNDY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNDY_CODE\"/><Col id=\"MNDY_NAME\">전체</Col></Row><Row><Col id=\"MNDY_CODE\">A</Col><Col id=\"MNDY_NAME\">일간지</Col></Row><Row><Col id=\"MNDY_CODE\">B</Col><Col id=\"MNDY_NAME\">경제지</Col></Row><Row><Col id=\"MNDY_CODE\">C</Col><Col id=\"MNDY_NAME\">스포츠지</Col></Row><Row><Col id=\"MNDY_CODE\">D</Col><Col id=\"MNDY_NAME\">무가지</Col></Row><Row><Col id=\"MNDY_CODE\">E</Col><Col id=\"MNDY_NAME\">전문지</Col></Row><Row><Col id=\"MNDY_CODE\">0</Col><Col id=\"MNDY_NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("인쇄사이즈관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("매체기준>기준정보");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("68");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "53", "21", null, null, this);
            obj.set_text("매체명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "366", "71", "46", "21", null, null, this);
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMNDY_FLAG", "absolute", "410", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Grid("grdMD_NPAPXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsMD_NPAPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("67");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"단\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"통\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사이즈\"/><Cell col=\"6\" text=\"매체코드\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:MNDY_FLAG\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:STAD_STEP\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:STAD_MEDM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" text=\"bind:STAD_SIZE\"/><Cell col=\"6\" text=\"bind:CUST_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "165", "71", "31", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "188", "71", "150", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("78");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("80");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("81");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("83");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "195", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("88");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CopyRow", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_text("행 복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인쇄사이즈관리");
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
        this.addIncludeScript("MCMA0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0080.xfdl", function() {
         /***************************************************************************************************
          * # Program : MCMA0080 인쇄사이즈관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		조민희 	Initial Created.
         *   2016.10.07		최제현 	Check and Revise.
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

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTFF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0080";

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
        	this.fnc_DatasetClear("dsMD_NPAPXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_NPAPXM=dsMD_NPAPXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_NPAPXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	this.dsMD_NPAPXM.insertRow(this.dsMD_NPAPXM.rowposition + 1);
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_NPAPXM.rowcount ; i++){
        		if(this.dsMD_NPAPXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_NPAPXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_NPAPXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_NPAPXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsMD_NPAPXM");
        	this.grdMD_NPAPXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_NPAPXM=dsMD_NPAPXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_NPAPXM.setFocus();

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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_NPAPXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

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

        	if (this.fnc_DatasetChangeCheck("dsMD_NPAPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_NPAPXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsMD_NPAPXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_NPAPXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_NPAPXM.getColumn(i, "MNDY_FLAG"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "구분", this.dsMD_NPAPXM, i, 
        											this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"MNDY_FLAG"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_NPAPXM.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체명", this.dsMD_NPAPXM, i, 
        											this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"CUST_NAME"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_NPAPXM.getColumn(i, "STAD_STEP"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "단", this.dsMD_NPAPXM, i, 
        											this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"STAD_STEP"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_NPAPXM.getColumn(i, "STAD_MEDM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "통", this.dsMD_NPAPXM, i, 
        											this.dsMD_NPAPXM.getColumn(this.dsMD_NPAPXM.rowposition,"STAD_MEDM"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_NPAPXM.getColumn(i, "STAD_SIZE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사이즈", this.dsMD_NPAPXM, i, 
        											'', '');
        		}
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var sQuestionText  = "매체명 : ("+this.grdMD_NPAPXM.getCellText(this.grdMD_NPAPXM.currentrow, this.grdMD_NPAPXM.getBindCellIndex( "body", "CUST_NAME" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //매체코드
         		sReturnString += " MNDY_FLAG=" + this.fnc_Quote(this.cmbSHRMNDY_FLAG.value); //월간일간구분
         		
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation1, this.dsMD_NPAPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_NPAPXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		this.fnc_GetComboMNDY_FLAG();
        		this.fnc_GetComboMEDA_CODE();
        	} 	

        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*---------------------------------+
         | 		 매체명 팝업	 	   |
         +---------------------------------*/
        this.dsMD_NPAPXM_oncolumnchanged = function(obj,e)
        {	
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdMD_NPAPXM, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 매체명 조회조건
        	if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) {
        		
        		arrParam[0] = "MCM0030";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRCUST_NAME";
        		arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
        		arrParam[6] = "0,1";

        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		this.fn_Search();
        	}
        	if (obj.name == "grdMD_NPAPXM") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {
        			
        			arrParam[0] = "MCM0030";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdMD_NPAPXM";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	} 
        }

        /*--------------------------------------+
         |  입력을 위한 그리드 신문구분 콤보|
         +--------------------------------------*/
        //신문구분
        this.fnc_GetComboMNDY_FLAG = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMNDY_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0014"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdMD_NPAPXM,dsGRDMNDY_FLAG,MNDY_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*------------------------------------+
         |  검색을 위한 신문구분 콤보
         +-------------------------------------*/
        this.fnc_GetComboMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMNDY_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0014"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMNDY_FLAG,dsMNDY_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*-------------------------+
         |     전체 선택 / 해제  |
         +-------------------------*/
        var isAllChecked = 0;
        this.grdMD_NPAPXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_NPAPXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_NPAPXM.getRowCount(); i++) {
        			this.dsMD_NPAPXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_NPAPXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*-------------------------------+
         |  조회조건 콤보 값 변경 時  |
         +-------------------------------*/
        this.fn_onItemChanged = function(obj,e)
        {
        	this.fn_Search();
        }

        /*---------------------------------------+
         |  매체명이 지워지면 코드도 지워짐  |
         +---------------------------------------*/
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRCUST_NAME.value=='')
        	this.edtSHRCUST_CODE.set_value('');
        }

        
        this.fn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Search();
        	}
        }
        /*------------+
         |  행 복사  |
         +------------*/
        this.btn_CopyRow_onclick = function(obj,e)
        {
        	var nRow = this.dsMD_NPAPXM.rowposition;
        	var iRow = this.dsMD_NPAPXM.insertRow(this.dsMD_NPAPXM.rowposition + 1);
        	
        	this.dsMD_NPAPXM.setColumn(iRow, "MNDY_FLAG", this.dsMD_NPAPXM.getColumn(nRow, "MNDY_FLAG"));//구분
        	this.dsMD_NPAPXM.setColumn(iRow, "STAD_STEP", this.dsMD_NPAPXM.getColumn(nRow, "STAD_STEP"));//단
        	this.dsMD_NPAPXM.setColumn(iRow, "STAD_MEDM", this.dsMD_NPAPXM.getColumn(nRow, "STAD_MEDM"));//통
        	this.dsMD_NPAPXM.setColumn(iRow, "STAD_SIZE", this.dsMD_NPAPXM.getColumn(nRow, "STAD_SIZE"));//사이즈
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_NPAPXM.addEventHandler("oncolumnchanged", this.dsMD_NPAPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.cmbSHRMNDY_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMNDY_FLAG.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.grdMD_NPAPXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_NPAPXM.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.grdMD_NPAPXM.addEventHandler("oncloseup", this.grdMD_CODEXM_oncloseup, this);
            this.grdMD_NPAPXM.addEventHandler("onheadclick", this.grdMD_NPAPXM_onheadclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_CopyRow.addEventHandler("onclick", this.btn_CopyRow_onclick, this);

        };

        this.loadIncludeScript("MCMA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
