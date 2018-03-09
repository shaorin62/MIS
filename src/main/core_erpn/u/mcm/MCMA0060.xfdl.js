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
                this.set_name("MCMA0060");
                this.set_titletext("카테고리관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsMD_CATEXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETCX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("카테고리관리");
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

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_text("광고주명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "637", "71", "63", "21", null, null, this);
            obj.set_text("사용구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "705", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsYNCombo");
            obj.set_codecolumn("YN_CODE");
            obj.set_datacolumn("YN_NAME");
            obj.set_displaynulltext("전체");

            obj = new Grid("grdMD_CATEXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsMD_CATEXM");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"93\"/><Column size=\"144\"/><Column size=\"123\"/><Column size=\"122\"/><Column size=\"108\"/><Column size=\"128\"/><Column size=\"82\"/><Column size=\"36\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" style=\"background:transparent;\" text=\"카테고리코드\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"카테고리명\"/><Cell col=\"5\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"담당부서코드\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"담당부서명\"/><Cell col=\"7\" style=\"background: ;\" text=\"등록일자\"/><Cell col=\"8\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"사용\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expand\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:CUST_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"expand\" text=\"bind:CATE_CODE\" expandshow=\"hide\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:CATE_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"expand\" text=\"bind:DEPT_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:STAR_DATE\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "378", "71", "93", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("카테고리명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_CDNM", "absolute", "459", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridRowCopy0", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("내역복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("111");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("115");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("116");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("120");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "350", "61", "40", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "451", "61", "8", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "609", "61", "40", "41", null, null, this);
            obj.set_taborder("123");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "697", "61", "8", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("126");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("128");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_tabstop("false");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "178", "71", "21", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "201", "71", "150", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "201", "93", "150", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("카테고리관리");
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
        this.addIncludeScript("MCMA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0060.xfdl", function() {
         /***************************************************************************************************
         * # Program : MCMA0060 카테고리관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		조민희 	Initial Created.
         *   2016.10.06		최제현 	Check and Revise.
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
        this.sPACKAGENAME = "MCMA0060";

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
        	this.fn_GetCUST_NAME();
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
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CATEXM=dsMD_CATEXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CATEXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsMD_CATEXM.insertRow(this.dsMD_CATEXM.rowposition + 1);
        	this.dsMD_CATEXM.setColumn(iRow, "USEX_YSNO", "1");
        	var date = this.fnc_GetServerDateTime("DATE");
        	this.dsMD_CATEXM.setColumn(iRow,"STAR_DATE",date);

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CATEXM.rowcount ; i++){
        		if(this.dsMD_CATEXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_CATEXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CATEXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CATEXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsMD_CATEXM");
        	this.grdMD_CATEXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_CATEXM=dsMD_CATEXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_CATEXM.setFocus();
        	
        	
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_CATEXM", this);

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

        	if (this.fnc_DatasetChangeCheck("dsMD_CATEXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_CATEXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsMD_CATEXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_CATEXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CATEXM.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "광고주명", this.dsMD_CATEXM, i, this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CUST_NAME"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CATEXM.getColumn(i, "CATE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "카테고리명", this.dsMD_CATEXM, i, this.dsMD_CATEXM.getColumn(this.dsMD_CATEXM.rowposition,"CATE_NAME"), "");
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
        		
        		var grdMD_CATEXM = this.grdMD_CATEXM;
        		var sQuestionText  = "카테고리명 : ("+grdMD_CATEXM.getCellText(grdMD_CATEXM.currentrow, grdMD_CATEXM.getBindCellIndex( "body", "CATE_NAME" )) + ")";
        			
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
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
         		sReturnString += " CATE_NAME=" + this.fnc_Quote(this.edtSHRCOMM_CDNM.value); //카테고리명
         		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.cmbSHRUSEX_YSNO.value); //사용구분
         		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation1, this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} else if (sMethodName == "SEARCH01") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {	
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

        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_CATEXM_onheadclick = function(obj,e)
        {
        		if (e.cell == 0) {
        		var v_Colid = this.grdMD_CATEXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CATEXM.getRowCount(); i++) {
        			this.dsMD_CATEXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_CATEXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }
        	
        /*--------------+
         |  내역복사   |
         +--------------*/
        this.fn_CopyRow = function(obj,e)
        {
        	var nRow = this.dsMD_CATEXM.rowposition;
        	var cust_name = this.dsMD_CATEXM.getColumn(nRow, "CUST_NAME");
        	var dept_name = this.dsMD_CATEXM.getColumn(nRow, "DEPT_NAME");
        	
        	var iRow = this.dsMD_CATEXM.insertRow(this.dsMD_CATEXM.rowposition + 1);
        	this.dsMD_CATEXM.setColumn(iRow, "CUST_NAME", cust_name);
        	this.dsMD_CATEXM.setColumn(iRow, "DEPT_NAME", dept_name);
        	this.dsMD_CATEXM.setColumn(iRow, "USEX_YSNO", "1");
        }

        /*----------------+
         |     팝업 	  |
         +----------------*/
        this.dsMD_CATEXM_oncolumnchanged = function(obj,e)
        {	
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdMD_CATEXM, "YES", e.oldvalue, e.columnid);
        	else if (e.columnid == "DEPT_NAME" ) this.fn_HelpDialoge(this.grdMD_CATEXM, "YES", e.oldvalue, e.columnid);
        }

        
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_CODE") || (sColumnID == "CUST_NAME")) {//광고주

        		arrParam[0] = "MCM0005";
        		arrParam[1] = "";
        		arrParam[2] = "CUST_NAME";
        		arrParam[3] = "N";
        		arrParam[4] = "grdMD_CATEXM";
        		arrParam[5] = "CUST_CODE,CUST_NAME";
        		arrParam[6] = "0,1";
        		arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
        	
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_CODE") || (sColumnID == "DEPT_NAME")) {//담당부서
        		arrParam[0] = "MCM0002";
        		arrParam[1] = "";
        		arrParam[2] = "DEPT_NAME";
        		arrParam[3] = "N";
        		arrParam[4] = "grdMD_CATEXM";
        		arrParam[5] = "DEPT_CODE,DEPT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }

        
        this.fn_HelpDialogeSHRCUST_NAME = function(obj,e)
        {
        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) {	// 광고주 조회조건
        		
        		arrParam[0] = "MCM0005";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRCUST_NAME";
        		arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
        		arrParam[6] = "0,1";

        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        }

        

        /*----------------------+
         |  조회조건 엔터 時  |
         +----------------------*/
        this.fn_onKeyDown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.lstCUST_NAME.set_visible(false);
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

        
        /*----------------------------------+
         |  이름을 지우면 코드도 지워짐  |
         +----------------------------------*/
         //광고주
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRCUST_NAME.value=='')
        	this.edtSHRCUST_CODE.set_value('');
        }

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAUTO_NAME=dsAUTO_NAME";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.fn_AutoSetting = function(){

        	var iCNT = this.dsAUTO_NAME.getRowCount();
        	var i;

        	for(i=0;i<iCNT;i++)
        	{
        		var text = this.dsAUTO_NAME.getColumn(i,"CLIENT_NAME");
        		var code = this.GetSpliceTextE(text);
        		this.dsAUTO_NAME.setColumn(i,"USEX_CODE",code);
        	}
        }

        
        // 한글 자소를 분리하여 리턴한다.
        var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
        var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
        var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

        this.GetSpliceTextK = function(strInput)
        {
        	var i;
        	var strOut = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOut += String.fromCharCode(arrFirst[nFirst]);
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOut += String.fromCharCode(arrSecond[nSecond]);
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOut += String.fromCharCode(arrThird[nThird]);
        		}
        		else
        			strOut += String.fromCharCode(nCode);
        	}
        	return strOut;
        }

        // 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
        var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
        var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
        var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
        var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];

        this.GetSpliceTextE = function(strInput)
        {
        	var i;
        	var strOutE = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOutE += arrFirstE[nFirst];
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOutE += arrSecondE[nSecond];
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOutE += arrThirdE[nThird];
        		}
        		else if(nCode>=12593 && nCode <= 12643)
        		{
        			strOutE += arrAllE[nCode-12593];
        		}
        		else
        		{
        			strOutE += String.fromCharCode(nCode);
        		}
        	}
        	return strOutE;
        }

        this.edtSHRCUST_NAME_onkeyup = function(obj,e)
        {
        	if(e.keycode==40 || e.keycode == 38)
        	{
        		this.lstCUST_NAME.setFocus();
        		this.lstCUST_NAME.set_index(0);
        	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRCUST_NAME.set_value(e.itemtext);
        	this.edtSHRCUST_CODE.set_value(e.itemvalue);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.edtSHRCUST_CODE.set_value(this.lstCUST_NAME.value);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {	
        	if(this.edtSHRCUST_NAME.value==''){
        		this.edtSHRCUST_CODE.set_value('');
        	}

        	this.lstCUST_NAME.set_value("");
        	
        	var text = e.posttext;
        	if(text.length > 0)
        	{
        		var etext = this.GetSpliceTextE(text);

        		var sFilter = "String(USEX_CODE).toUpperCase().indexOf('" + etext.toUpperCase().replace("'","\\'") + "') >= 0";

        		this.dsAUTO_NAME.filter(sFilter);

        		this.lstCUST_NAME.set_visible(true);
        	}
        	else
        	{
        		this.dsAUTO_NAME.filter("USEX_CODE == 0");
        		this.lstCUST_NAME.set_visible(false);
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_CATEXM.addEventHandler("oncolumnchanged", this.dsMD_CATEXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.grdMD_CATEXM.addEventHandler("onheadclick", this.grdMD_CATEXM_onheadclick, this);
            this.grdMD_CATEXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.edtSHRCOMM_CDNM.addEventHandler("oneditclick", this.edtSHRCOMM_CDNM_oneditclick, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onkeyup", this.edtSHRCOMM_CDNM_onkeyup, this);
            this.edtSHRCOMM_CDNM.addEventHandler("ontextchanged", this.edtSHRCOMM_CDNM_ontextchanged, this);
            this.btnGridRowCopy0.addEventHandler("onclick", this.fn_CopyRow, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_NAME, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MCMA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
