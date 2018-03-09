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
                this.set_name("MCMA0040");
                this.set_titletext("코바넷광고주등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_KBNTXM00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_KBNTXM01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SBSX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "7", "0", null, "29", "9", null, this);
            obj.set_text("코바넷 광고주 등록");
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

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "24", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "124", "21", null, null, this);
            obj.set_text("코바넷 광고주 코드");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRKBNT_CODE", "absolute", "157", "71", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "336", "71", "59", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "393", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_KBNTXM00", "absolute", "8", "138", "588", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("109");
            obj.set_binddataset("dsMD_KBNTXM00");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"142\" band=\"left\"/><Column size=\"233\" band=\"left\"/><Column size=\"177\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷 운영코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:CUST_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:KBNT_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow01", "absolute", null, "114", "62", "21", "90", null, this);
            obj.set_taborder("116");
            obj.style.set_imagealign("left");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow01", "absolute", null, "114", "62", "21", "25", null, this);
            obj.set_taborder("117");
            obj.style.set_imagealign("left");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_KBNTXM01", "absolute", "616", "138", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("118");
            obj.set_binddataset("dsMD_KBNTXM01");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"144\" band=\"left\"/><Column size=\"193\" band=\"left\"/><Column size=\"177\" band=\"left\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"미디어크리에이트 운영코드\"/><Cell col=\"4\" text=\"SBS구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" edittype=\"readonly\" text=\"bind:CUST_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:SBSX_CODE\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("121");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("122");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("125");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("128");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "383", "103", "80", "35", null, null, this);
            obj.set_taborder("132");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow00", "absolute", "469", "114", "62", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("행추가");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow00", "absolute", "534", "114", "62", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("행삭제");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("139");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "307", "61", "40", "41", null, null, this);
            obj.set_taborder("141");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "112", "117", "169", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "132", "48", "6", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "117", "79", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("KOBANET");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "100", "120", "10", "13", null, null, this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "88", "99", "12", "23", null, null, this);
            obj.set_taborder("146");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "101", "99", "12", "23", null, null, this);
            obj.set_taborder("147");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "683", "117", "169", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "615", "132", "48", "6", null, null, this);
            obj.set_taborder("149");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "616", "117", "79", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("SBS");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "671", "120", "10", "13", null, null, this);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "659", "99", "12", "23", null, null, this);
            obj.set_taborder("152");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "672", "99", "12", "23", null, null, this);
            obj.set_taborder("153");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "596", "311", "20", "41", null, null, this);
            obj.set_taborder("154");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "393", "93", "150", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("코바넷광고주등록");
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
        this.addIncludeScript("MCMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0040.xfdl", function() {
         /***************************************************************************************************
          * # Program : MCMA0040 코바넷광고주등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		조민희 	Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0040";

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

        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_GetCUST_NAME();
        	this.fn_Search();

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	this.fn_Search00();
        	this.fn_Search01();
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음.
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsMD_KBNTXM00");
        	this.fnc_DataSetCancel("dsMD_KBNTXM01");

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//저장전 필수값 체크 
        	if(!this.fn_SaveItemCheck()){return;}
        	
        	//좌측 그리드변경값이 있을경우
        	if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM00")){
        		this.fn_Save00();
        	//우측 그리드변경값이 있을경우
        	}else if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM01")){
        		this.fn_Save01();
        	}
        	
        	
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*-----------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +-----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_KBNTXM00", this);
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_KBNTXM01", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

        } 

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
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

        	if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM00")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}else if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM01")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*--------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM00") == false && this.fnc_DatasetChangeCheck("dsMD_KBNTXM01")== false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM00")){
        		for (var i = 0; i < this.dsMD_KBNTXM00.getRowCount(); i++) {
        			if (this.fnc_ToUpper(this.dsMD_KBNTXM00.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM00.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주코드", this.dsMD_KBNTXM00, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM00.getColumn(i, "CUST_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주명", this.dsMD_KBNTXM00, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM00.getColumn(i, "KBNT_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "코바넷 운영 코드", this.dsMD_KBNTXM00, i, '', '');
        			}
        		}
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM01")){
        		for (var i = 0; i < this.dsMD_KBNTXM01.getRowCount(); i++) {
        			if (this.fnc_ToUpper(this.dsMD_KBNTXM01.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM01.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주코드", this.dsMD_KBNTXM01, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM01.getColumn(i, "CUST_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주명", this.dsMD_KBNTXM01, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_KBNTXM01.getColumn(i, "SBSX_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "미디어 크리에이트 운영코드", this.dsMD_KBNTXM01, i, '', '');
        			}
        		}
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (btnName,totalNum) {
        	if(btnName == 'btnDelRow00'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var sQuestionText  = "광고주명 : ("+this.grdMD_KBNTXM00.getCellText(this.grdMD_KBNTXM00.currentrow, this.grdMD_KBNTXM00.getBindCellIndex( "body", "CUST_NAME" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}else if(btnName == 'btnDelRow01'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var sQuestionText  = "광고주명 : ("+this.grdMD_KBNTXM01.getCellText(this.grdMD_KBNTXM01.currentrow, this.grdMD_KBNTXM01.getBindCellIndex( "body", "CUST_NAME" ));
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " KBNT_CODE=" + this.fnc_Quote(this.edtSHRKBNT_CODE.value); //코바넷운영코드
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
         		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " SBSX_CODE=" + this.fnc_Quote(this.edtSHRKBNT_CODE.value); //미디어크리에이트운영코드
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
         		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	} else if (sKind == "SAVE01") {

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
        		this.fnc_Information(this.stInformation00, this.dsMD_KBNTXM00.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation02, this.dsMD_KBNTXM01.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search00();
        		
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation02, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search01();
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

        /*-----------------------------------------+
         |  모든 버튼 클릭 時( 행추가, 행삭제) |
         +-----------------------------------------*/
        this.fn_All_Btn_OnClick = function (obj,e) {

        	switch (obj.name) {
        		case "btnAddRow00":
        			this.fn_AddRow00();
        			break;
        			// 코바넷광고주코드 행추가
        		case "btnAddRow01":
        			this.fn_AddRow01();
        			break;
        			// SBS광고주코드 행추가
        		case "btnDelRow00":
        			this.fn_DelRow00(obj.name);
        			break;
        			// 코바넷광고주코드 행삭제
        		case "btnDelRow01":
        			this.fn_DelRow01(obj.name);
        			break;
        			// SBS광고주코드 행삭제
        	}
        }

        /*--------------------------------+
         | 코바넷 광고주 코드 행 추가  |
         +--------------------------------*/
        this.fn_AddRow00 = function(){
        	this.dsMD_KBNTXM00.insertRow(this.dsMD_KBNTXM00.rowposition + 1);
        }

        /*----------------------------+
         | SBS 광고주 코드 행 추가  |
         +----------------------------*/
        this.fn_AddRow01 = function(){
        	this.dsMD_KBNTXM01.insertRow(this.dsMD_KBNTXM01.rowposition + 1);
        }

        /*--------------------------------+
         | 코바넷 광고주 코드 행 삭제  |
         +--------------------------------*/
        this.fn_DelRow00 = function(btnName){
        	
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_KBNTXM00.rowcount ; i++){
        		if(this.dsMD_KBNTXM00.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(btnName,totalNum)) {
        		var rowCnt = this.dsMD_KBNTXM00.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_KBNTXM00.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_KBNTXM00.deleteRow(i);
        			}
        		}
        	}
        }

        /*----------------------------+
         | SBS 광고주 코드 행 삭제  |
         +----------------------------*/
        this.fn_DelRow01 = function(btnName){
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_KBNTXM01.rowcount ; i++){
        		if(this.dsMD_KBNTXM01.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(btnName,totalNum)) {
        		var rowCnt = this.dsMD_KBNTXM01.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_KBNTXM01.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_KBNTXM01.deleteRow(i);
        			}
        		}
        	}
        }

        /*-----------------------------+
         | 코바넷 광고주 코드 조회  |
         +-----------------------------*/
        this.fn_Search00 = function(){
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsMD_KBNTXM00");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_KBNTXM00=dsMD_KBNTXM00";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         | SBS 광고주 코드 조회      |
         +-----------------------------*/
        this.fn_Search01 = function(){
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsMD_KBNTXM01");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_KBNTXM01=dsMD_KBNTXM01";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         | 코바넷 광고주 코드 저장  |
         +-----------------------------*/
        this.fn_Save00 = function(){

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_KBNTXM00=dsMD_KBNTXM00:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-------------------------+
         | SBS 광고주 코드 저장  |
         +-------------------------*/
        this.fn_Save01 = function(){

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsMD_KBNTXM01=dsMD_KBNTXM01:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------------------+
         | 		 코바넷 광고주코드 팝업	 	   |
         +-----------------------------------------*/
        this.dsMD_KBNTXM00_oncolumnchanged = function(obj,e)
        {	
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdMD_KBNTXM00, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         | 		 SBS 광고주코드 팝업	 	   |
         +-------------------------------------*/
        this.dsMD_KBNTXM01_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdMD_KBNTXM01, "YES", e.oldvalue, e.columnid);
        }
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if (obj.name == "grdMD_KBNTXM00") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_CODE") || (sColumnID == "CUST_NAME")) {
        			
        			arrParam[0] = "MCM0005";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdMD_KBNTXM00";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}else if (obj.name == "grdMD_KBNTXM01") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_CODE") || (sColumnID == "CUST_NAME")) {
        			
        			arrParam[0] = "MCM0005";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdMD_KBNTXM01";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        

        
        /*------------------------------------------+
         |  코바넷광고주등록  전체 선택 / 해제  |
         +------------------------------------------*/
        var isAllChecked = 0;
        this.grdMD_KBNTXM00_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_KBNTXM00.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_KBNTXM00.getRowCount(); i++) {
        			this.dsMD_KBNTXM00.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_KBNTXM00.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*--------------------------------------+
         |  SBS광고주등록  전체 선택 / 해제  |
         +--------------------------------------*/
        this.grdMD_KBNTXM01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_KBNTXM01.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_KBNTXM01.getRowCount(); i++) {
        			this.dsMD_KBNTXM01.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_KBNTXM01.setCellProperty("Head", 0, "expr", isAllChecked);
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

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH02";
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
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        		
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
            this.dsMD_KBNTXM00.addEventHandler("oncolumnchanged", this.dsMD_KBNTXM00_oncolumnchanged, this);
            this.dsMD_KBNTXM01.addEventHandler("oncolumnchanged", this.dsMD_KBNTXM01_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRKBNT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRKBNT_CODE.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.grdMD_KBNTXM00.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_KBNTXM00.addEventHandler("ontextchanged", this.tabXM_tab1_grdMD_RMEDXM_01_ontextchanged, this);
            this.grdMD_KBNTXM00.addEventHandler("onmove", this.tabXM_tab1_grdMD_RMEDXM_01_onmove, this);
            this.grdMD_KBNTXM00.addEventHandler("onheadclick", this.grdMD_KBNTXM00_onheadclick, this);
            this.btnAddRow01.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow01.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.grdMD_KBNTXM01.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_KBNTXM01.addEventHandler("onheadclick", this.grdMD_KBNTXM01_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnAddRow00.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow00.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MCMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
