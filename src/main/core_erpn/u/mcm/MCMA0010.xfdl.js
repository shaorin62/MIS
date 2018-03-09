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
                this.set_name("MCMA0010");
                this.set_titletext("공통코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_CODEXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJR_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_dATE\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYNCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_CODE\"/><Col id=\"YN_NAME\">전체</Col></Row><Row><Col id=\"YN_CODE\">1</Col><Col id=\"YN_NAME\">사용</Col></Row><Row><Col id=\"YN_NAME\">사용안함</Col><Col id=\"YN_CODE\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGRUP_CODE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("공통코드관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "24", null, this);
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

            obj = new Grid("grdMD_CODEXM", "absolute", "8", "128", null, null, "25", "14", this);
            obj.set_binddataset("dsMD_CODEXM");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"160\"/><Column size=\"144\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"108\"/><Column size=\"92\"/><Column size=\"128\"/><Column size=\"82\"/><Column size=\"58\"/><Column size=\"162\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"그룹코드\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"그룹명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대분류\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"중분류\"/><Cell col=\"5\" style=\"background: ;\" text=\"코드\"/><Cell col=\"6\" text=\"코바넷코드\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코드명\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"사용구분\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:COMM_CODE==undefined?'combo':'none'\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:GRUP_CODE\" combodataset=\"dsGRUP_CODE\" combocodecol=\"GRUP_CODE\" combodatacol=\"GRUP_CDNM\" combodisplayrowcount=\"0\" combodisplaynulltext=\"신규\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"expr:GRUP_CODE==''||GRUP_CODE==undefined?'text':'none'\" text=\"bind:GRUP_NAME\" suppress=\"1\" suppressalign=\"middle,over\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MAJR_LEVL\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:MIDD_LEVL\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:COMM_CODE\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:KBNT_CODE\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:COMM_CDNM\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:SORT_ORDR\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:MEMO_FILD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("117");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("118");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("124");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRCOMM_CODE", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("코드");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("128");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_CODE", "absolute", "70", "71", "150", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "220", "61", "40", "41", null, null, this);
            obj.set_taborder("130");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "248", "71", "54", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("코드명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_CDNM", "absolute", "303", "71", "150", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "481", "71", "63", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("사용구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "549", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("136");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("@dsYNCombo");
            obj.set_codecolumn("YN_CODE");
            obj.set_datacolumn("YN_NAME");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle01", "absolute", "727", "71", "62", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("그룹명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRGRUP_NAME", "absolute", "782", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static10", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("142");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("144");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("145");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통코드관리");
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
        this.addIncludeScript("MCMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0010.xfdl", function() {
         /***************************************************************************************************
         * # Program : MCMA0010 공통코드관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.29		조민희 	Initial Created.
         *   2016.10.04		최제현 	Check and Revise..
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

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTFF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0010";

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
        	this.fn_GetGridCombo();
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
        	this.fnc_DatasetClear("dsMD_CODEXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CODEXM=dsMD_CODEXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CODEXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsMD_CODEXM.insertRow(this.dsMD_CODEXM.rowposition + 1);
        	this.dsMD_CODEXM.setColumn(iRow, "GRUP_CODE", ''); //그룹코드
        	this.dsMD_CODEXM.setColumn(iRow, "USEX_YSNO", "1");	//사용구분
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CODEXM.rowcount ; i++){
        		if(this.dsMD_CODEXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_CODEXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CODEXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CODEXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsMD_CODEXM");
        	this.grdMD_CODEXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_CODEXM=dsMD_CODEXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	

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
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_CODEXM", this);

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
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_CODEXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_CODEXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsMD_CODEXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_CODEXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CODEXM.getColumn(i, "GRUP_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "그룹명", this.dsMD_CODEXM, i, 
        											this.dsMD_CODEXM.getColumn(this.dsMD_CODEXM.rowposition,"GRUP_NAME"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CODEXM.getColumn(i, "COMM_CDNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코드명", this.dsMD_CODEXM, i, 
        											this.dsMD_CODEXM.getColumn(this.dsMD_CODEXM.rowposition,"COMM_CDNM"), "");
        		}
        	}

        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "그룹코드 : ("+this.grdMD_CODEXM.getCellText(this.grdMD_CODEXM.currentrow, this.grdMD_CODEXM.getBindCellIndex( "body", "GRUP_CODE" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " COMM_CODE=" + this.fnc_Quote(this.edtSHRCOMM_CODE.value); //코드
         		sReturnString += " COMM_CDNM=" + this.fnc_Quote(this.edtSHRCOMM_CDNM.value); //코드명
         		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.cmbSHRUSEX_YSNO.value); //사용구분
         		sReturnString += " GRUP_CODE=" + this.fnc_Quote(this.cmbSHRGRUP_NAME.value); //그룹명
         		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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
        	
        		this.fnc_Information(this.stInformation, this.dsMD_CODEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_CODEXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH01") {
        		this.fn_addNewRow();
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_GetGridCombo();
        		
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {		
        		this.fn_GetSHRCombo();
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
         
         /*------------------------+
         | 그룹코드 콤보(그리드) |
         +-------------------------*/
        this.fn_GetGridCombo = function () {

        	this.fnc_DatasetClear("dsGRUP_CODE");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsGRUP_CODE=dsGRUP_CODE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        }

         /*---------------------------+
         | 그룹코드 '신규' 행 추가 |
         +----------------------------*/
        this.fn_addNewRow = function(){

        	var nRow = this.dsGRUP_CODE.insertRow(0);
        	this.dsGRUP_CODE.setColumn(nRow, "GRUP_CODE", "NEW");
        	this.dsGRUP_CODE.setColumn(nRow, "GRUP_NAME", "");
        	this.dsGRUP_CODE.setColumn(nRow, "GRUP_CDNM", "신규");
        	
        }

        
        /*------------------------+
         |  그룹명 콤보 (조회)  |
         +------------------------*/
        this.fn_GetSHRCombo = function () {

        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsSHRGRUP_NAME"; 		   //받을 Dataset명
        		arrParam1[1] = "MCM0010"; 	  			   //조회 콤보 ID
        		arrParam1[2] = "ALL"; 			  		   //Head Flags
        		arrParam1[3] = ""; 		  			 	   //사용여부
        		arrParam1[4] = ""						   //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRGRUP_NAME,dsSHRGRUP_NAME,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }
         
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*-----------------------------------------+
         |  그룹코드 변경 시 그룹 명 자동변경  |
         +-----------------------------------------*/
        this.grdMD_CODEXM_oncloseup = function(obj,e)
        {
         	this.grdMD_CODEXM.showEditor(false);
        	var grup_code = this.dsMD_CODEXM.getColumn(e.row, "GRUP_CODE");
        	this.dsGRUP_CODE.filter("GRUP_CODE == '" + grup_code + "'");
        	this.dsMD_CODEXM.setColumn(e.row, "GRUP_NAME", this.dsGRUP_CODE.getColumn(0,"GRUP_NAME"));
        	
        	this.dsGRUP_CODE.filter("");
        }

        
        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_CODEXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_CODEXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CODEXM.getRowCount(); i++) {
        			this.dsMD_CODEXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_CODEXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*----------------------+
         |  조회조건 엔터 時  |
         +----------------------*/
        this.fn_onKeyDown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.fn_Search();
        	}
        }

        /*-------------------------------+
         |  조회조건 콤보 값 변경 時  |
         +-------------------------------*/
        this.fn_onItemChanged = function(obj,e)
        {
        	this.fn_Search();
        }

        this.Static30_onclick = function(obj,e)
        {
        	
        }

        this.edtSHRCOMM_CODE_oneditclick = function(obj,e)
        {
        	
        }

        this.st_FormTitle_onclick = function(obj,e)
        {
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_CODEXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsMD_CODEXM.addEventHandler("oncolumnchanged", this.dsMD_CODEXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.grdMD_CODEXM.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.grdMD_CODEXM.addEventHandler("oncloseup", this.grdMD_CODEXM_oncloseup, this);
            this.grdMD_CODEXM.addEventHandler("onheadclick", this.grdMD_CODEXM_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRCOMM_CODE.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.edtSHRCOMM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CODE.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.imgSearchTitle00.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRGRUP_NAME.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.cmbSHRGRUP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("MCMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
