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
                this.set_name("EDMA0050");
                this.set_titletext("교육과정입력");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsED_CFCTXM1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC3_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDCY_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"3\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"50\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"30\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsED_CFCTXM2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC3_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDCY_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"3\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"50\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"30\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsED_CFCTXM3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC3_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDCY_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"3\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"50\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"30\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NAME\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEDC1_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
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
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("교육과정입력");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("대분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "76", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel1", "absolute", "318", "113", "62", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd1", "absolute", "253", "113", "62", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "7", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "557", "103", "80", "35", null, null, this);
            obj.set_taborder("120");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "115", "205", "23", null, null, this);
            obj.set_taborder("121");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdED_CFCTXM1", "absolute", "8", "138", "372", null, null, "15", this);
            obj.set_taborder("122");
            obj.set_binddataset("dsED_CFCTXM1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;text&quot;:&quot;none&quot;\" editfilter=\"upper,number\" style=\"align: ;\" text=\"bind:EDC1_CODE\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:EDCY_NAME\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align: ;\" text=\"bind:SORT_ORDR\" editlimit=\"0\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:USEX_YSNO\" editlimit=\"0\" editautoselect=\"false\" editdisplay=\"edit\" combodataset=\"dsCombo\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" combodisplayrowcount=\"-1\" combodisplaynulltext=\"-선택-\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "400", "115", "208", "23", null, null, this);
            obj.set_taborder("123");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdED_CFCTXM2", "absolute", "400", "138", "375", null, null, "15", this);
            obj.set_taborder("124");
            obj.set_binddataset("dsED_CFCTXM2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;text&quot;:&quot;none&quot;\" editfilter=\"upper,number\" style=\"align: ;\" text=\"bind:EDC2_CODE\" editlimit=\"0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:EDCY_NAME\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align: ;\" text=\"bind:SORT_ORDR\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:USEX_YSNO\" editlimit=\"0\" combodataset=\"dsCombo\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd2", "absolute", "648", "113", "62", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2", "absolute", "713", "113", "62", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "795", "115", "205", "23", null, null, this);
            obj.set_taborder("127");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdED_CFCTXM3", "absolute", "795", "138", null, null, "25", "15", this);
            obj.set_taborder("128");
            obj.set_binddataset("dsED_CFCTXM3");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"소분류명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;text&quot;:&quot;none&quot;\" editfilter=\"upper,number\" style=\"align: ;\" text=\"bind:EDC3_CODE\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;\" text=\"bind:EDCY_NAME\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" editfilter=\"number\" style=\"align: ;\" text=\"bind:SORT_ORDR\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:USEX_YSNO\" editlimit=\"0\" combodataset=\"dsCombo\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd3", "absolute", null, "113", "62", "21", "90", null, this);
            obj.set_taborder("129");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel3", "absolute", null, "113", "62", "21", "25", null, this);
            obj.set_taborder("130");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "380", "296", "20", "60", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "775", "296", "20", "60", null, null, this);
            obj.set_taborder("132");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREDC1_CODE", "absolute", "84", "71", "80", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEDC1_CODE", "absolute", "166", "71", "21", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREDCY_NAME", "absolute", "189", "71", "100", "21", null, null, this);
            obj.set_taborder("135");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육과정입력");

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
        this.addIncludeScript("EDMA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EDMA0050.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		교육 대/중/소를 관리한다.
         * @category	 	교육관리/교육기준정보/교육과정입력
         * @author	        
         * @cdate	  		2016.09.05
         * @version 1.0		최초 작성
         * EDMA0030.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EDMA0050"; 
        var GBL_KEYROWPOSITION = new Array(); // 이전 row 선택시 사용변수
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
        	this.edtSHREDCY_NAME.setFocus();
        	//this.fn_setVisible_btn2(false);
        	//this.fn_setVisible_btn3(false);
        	
        	
        	var sMethodName = "SEARCH03";
        	var sInDataSet = "";
        	var sOutDataSet = "dsEDC1_CODE=dsEDC1_CODE";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
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
        	this.fnc_DatasetClear("dsED_CFCTXM1,dsED_CFCTXM2,dsED_CFCTXM3");
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsED_CFCTXM1=dsED_CFCTXM1";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	//this.grdED_CFCTXM1.setFocus();

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

        	this.fnc_DataSetCancel("dsED_CFCTXM1,dsED_CFCTXM2,dsED_CFCTXM3,dsEDC1_CODE");

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	this.fn_SaveKeyRowposition();
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsED_CFCTXM1=dsED_CFCTXM1:U dsED_CFCTXM2=dsED_CFCTXM2:U dsED_CFCTXM3=dsED_CFCTXM3:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.grdED_CFCTXM1.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsED_CFCTXM1", this);

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
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (dsobj) {
        /*대분류*/
        	if( dsobj == "dsED_CFCTXM1"){
        		if (this.dsED_CFCTXM1.getRowCount() < 1) { // 삭제할 자료가 없습니다.
        		    this.fnc_Message("TMM007");
        		    return;
        	    }
        		/*if (this.fnc_DatasetChangeCheck("dsED_CFCTXM2,dsED_CFCTXM3")) //하위 변경된 자료 초기화 확인
        			if (this.fnc_Message("TMM023") == false) 
        				return false;
        		*/
        		if (this.dsED_CFCTXM2.getRowCount() > 0){ //하위데이터 있습니다.
        			this.fnc_Message("TMM016");
        			return false;
        			
        		}
        		
        		var sQuestionText = '(' + this.fnc_Trim(this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE")) + ') 대분류';
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        /*중분류*/
        	} else if( dsobj == "dsED_CFCTXM2"){ 

        		if (this.dsED_CFCTXM2.getRowCount() < 1) { // 삭제할 자료가 없습니다.
        		    this.fnc_Message("TMM007");
        		    return;
        	    }
        	
        	  /*if (this.fnc_DatasetChangeCheck("dsED_CFCTXM3")) //하위 변경된 자료 초기화 확인
        			if (this.fnc_Message("TMM023") == false) 
        				return false;
        	   */

        		if (this.dsED_CFCTXM3.getRowCount() > 0){  //하위데이터 있습니다.
        			this.fnc_Message("TMM016");
        			return false;
        			
        		}
        		var sQuestionText = '(' + this.fnc_Trim(this.dsED_CFCTXM2.getColumn(this.dsED_CFCTXM2.rowposition, "EDC2_CODE")) + ') 중분류 ';
        		return this.fnc_Message("TMM002", sQuestionText);

        /*소분류*/			
        	}else if( dsobj == "dsED_CFCTXM3"){
        	
        		if (this.dsED_CFCTXM3.getRowCount() < 1) { // 삭제할 자료가 없는지 체크
        		    this.fnc_Message("TMM007");
        		    return;
        	    }
        		var sQuestionText = '(' + this.fnc_Trim(this.dsED_CFCTXM3.getColumn(this.dsED_CFCTXM3.rowposition, "EDC3_CODE")) + ') 소분류 ';
        		return this.fnc_Message("TMM002", sQuestionText);

        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	var strEDCY_CODE = "";
        	if (!this.fnc_DatasetChangeCheck("dsED_CFCTXM1,dsED_CFCTXM2,dsED_CFCTXM3")) { //변경된 데이터가 없습니다.
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsED_CFCTXM1.getRowCount(); i++) {
        		//if (this.fnc_ToUpper(this.dsED_CFCTXM1.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM1.getColumn(i, "EDC1_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "대분류코드", this.dsED_CFCTXM1, i,  this.grdED_CFCTXM1, "EDC1_CODE");
        				
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM1.getColumn(i, "EDCY_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "대분류명", this.dsED_CFCTXM1, i,  this.grdED_CFCTXM1, "EDCY_NAME");		
        			}	
        			
        			/***코드셋팅(대분류)***/
        			strEDCY_CODE = this.dsED_CFCTXM1.getColumn(i, "EDC1_CODE") + "0000"; 
        			this.dsED_CFCTXM1.setColumn(i, "EDCY_CODE" , strEDCY_CODE);
        			
        	}
        	
        	for (var i = 0; i < this.dsED_CFCTXM2.getRowCount(); i++) {
        		//if (this.fnc_ToUpper(this.dsED_CFCTXM2.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM2.getColumn(i, "EDC2_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "중분류코드", this.dsED_CFCTXM2, i,  this.grdED_CFCTXM2, "EDC2_CODE");
        				
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM2.getColumn(i, "EDCY_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "중분류명", this.dsED_CFCTXM2, i,  this.grdED_CFCTXM2, "EDCY_NAME");		
        			}	
        			
        			/***코드셋팅(중분류)***/
        			strEDCY_CODE = this.dsED_CFCTXM2.getColumn(i, "EDC1_CODE") + this.dsED_CFCTXM2.getColumn(i, "EDC2_CODE") + "00"; 
        			this.dsED_CFCTXM2.setColumn(i, "EDCY_CODE" , strEDCY_CODE);
        	}
        	
        	for (var i = 0; i < this.dsED_CFCTXM3.getRowCount(); i++) {
        		//if (this.fnc_ToUpper(this.dsED_CFCTXM3.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM3.getColumn(i, "EDC3_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "소분류코드", this.dsED_CFCTXM3, i, this.grdED_CFCTXM3, "EDC3_CODE");
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_CFCTXM3.getColumn(i, "EDCY_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "소분류명", this.dsED_CFCTXM3, i,  this.grdED_CFCTXM3, "EDCY_NAME");		
        			}	
        			
        			/***코드셋팅(소분류)***/
        			strEDCY_CODE = this.dsED_CFCTXM3.getColumn(i, "EDC1_CODE") + this.dsED_CFCTXM3.getColumn(i, "EDC2_CODE") + this.dsED_CFCTXM3.getColumn(i, "EDC3_CODE"); 
        			this.dsED_CFCTXM3.setColumn(i, "EDCY_CODE" , strEDCY_CODE);
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') { //대분류
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EDC1_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHREDC1_CODE.value)); 
        		 
        	} else if (sKind == 'SEARCH01') {//중분류
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EDC1_CODE=" 		 + this.fnc_Quote(this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE"));
        	} else if (sKind == 'SEARCH02') {//소분류
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EDC1_CODE=" 		 + this.fnc_Quote(this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE"));
        		sReturnString += " EDC2_CODE=" 		 + this.fnc_Quote(this.dsED_CFCTXM2.getColumn(this.dsED_CFCTXM2.rowposition, "EDC2_CODE"));
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
        	} else if (sKind == 'SEARCH03') {//코드체크(대분류)
        	
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

        	if (sMethodName == 'SEARCH00') { //대분류
        		var row = this.dsED_CFCTXM1.findRow("EDC1_CODE", GBL_KEYROWPOSITION[0]);
        		if(row > -1) this.dsED_CFCTXM1.set_rowposition(row);
        	} else if (sMethodName == 'SEARCH01') { //중분류
        		var row = this.dsED_CFCTXM2.findRow("EDC2_CODE", GBL_KEYROWPOSITION[1]);
        		if(row > -1) this.dsED_CFCTXM2.set_rowposition(row);
        	} else if (sMethodName == 'SEARCH02') {//소분류
        		var row = this.dsED_CFCTXM3.findRow("EDC3_CODE", GBL_KEYROWPOSITION[2]);
        		if(row > -1) this.dsED_CFCTXM3.set_rowposition(row);
        	} else if (sMethodName == 'SAVE00') {
        	  this.fnc_Message("TMM103");
        	  this.fn_Search();
        	  
        	} else if (sMethodName == 'SEARCH03') {
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function(obj) {

        }

        

        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/
        /*---------------+
         |대분류검색팝업|
         +----------------*/
        this.fn_HelpDialoge = function(obj,e)
        {	
        	var arrParam = new Array();
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpEDC1_CODE") || (obj.name == "edtSHREDCY_NAME")) {
        		arrParam[0] = "EDM0100"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHREDCY_NAME.value);
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHREDCY_NAME";
        		arrParam[5] = "edtSHREDC1_CODE,edtSHREDCY_NAME";
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}
        	
        }

        
        /*--------------------------+
         | 버튼상태 변경|
         +--------------------------*/
        this.fn_setVisible_btn1 = function (status) {
        	//this.btnDel1.set_visible(status);
        	//this.btnAdd1.set_visible(status);
        }

        this.fn_setVisible_btn2 = function (status) {
        	//this.btnDel2.set_visible(status);
        	//this.btnAdd2.set_visible(status);
        }

        this.fn_setVisible_btn3 = function (status) {
        	//this.btnDel3.set_visible(status);
        	//this.btnAdd3.set_visible(status);
        }

        /*--------------------------+
         | 이전rowposition key저장|
         +--------------------------*/

        this.fn_SaveKeyRowposition = function () {
           GBL_KEYROWPOSITION[0] =  this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE");
           GBL_KEYROWPOSITION[1] =  this.dsED_CFCTXM2.getColumn(this.dsED_CFCTXM2.rowposition, "EDC2_CODE");
           GBL_KEYROWPOSITION[2] =  this.dsED_CFCTXM3.getColumn(this.dsED_CFCTXM3.rowposition, "EDC3_CODE");
        }
        /***************************************************************************************************
         *                                     사용자 정의 Event 처리 부분                           *
         ***************************************************************************************************/

        /*--------------------------+
         |행추가버튼클릭|
         +--------------------------*/
        this.btnAdd_onclick = function(obj,e)
        {	if(obj.id == "btnAdd1"){
        		if (this.fnc_DatasetChangeCheck("dsED_CFCTXM2,dsED_CFCTXM3")) //하위분류 변경된 자료 초기화 확인
        		   if (this.fnc_Message("TMM023") == false) 
        				return false;    
        			//var iRow = this.dsED_CFCTXM1.insertRow(this.dsED_CFCTXM1.rowposition + 1);
        			var iRow = this.dsED_CFCTXM1.addRow();
        			this.dsED_CFCTXM1.set_rowposition(iRow);
        			this.dsED_CFCTXM1.setColumn(iRow,"USEX_YSNO", "1");//사용여부 Y로 셋팅
        			this.dsED_CFCTXM1.setColumn(iRow,"EDC2_CODE", "00");
        			this.dsED_CFCTXM1.setColumn(iRow,"EDC3_CODE", "00");
        			this.grdED_CFCTXM1.setCellPos(this.fnc_GridColumnIndex(this.grdED_CFCTXM1, "EDC1_CODE"));
        			this.grdED_CFCTXM1.setFocus();
        			this.dsED_CFCTXM2.clearData(); 
        			this.dsED_CFCTXM3.clearData(); 
        		
        	}else if(obj.id == "btnAdd2"){
        		   if (this.fnc_DatasetChangeCheck("dsED_CFCTXM3")) //하위분류 변경된 자료 초기화 확인
        			 if (this.fnc_Message("TMM023") == false) 
        				return false;
        				
        			//var iRow = this.dsED_CFCTXM2.insertRow(this.dsED_CFCTXM2.rowposition + 1);
        			var iRow = this.dsED_CFCTXM2.addRow();
        			this.dsED_CFCTXM2.set_rowposition(iRow);
        			this.dsED_CFCTXM2.setColumn(iRow,"EDC1_CODE", this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE"));
        			this.dsED_CFCTXM2.setColumn(iRow,"EDC3_CODE", "00");
        			this.dsED_CFCTXM2.setColumn(iRow,"USEX_YSNO", "1");//사용여부 Y로 셋팅
        			this.grdED_CFCTXM2.setCellPos(this.fnc_GridColumnIndex(this.grdED_CFCTXM2, "EDC2_CODE"));
        			this.grdED_CFCTXM2.setFocus();
        			
        	}else if(obj.id == "btnAdd3"){
        	
        			//var iRow = this.dsED_CFCTXM3.insertRow(this.dsED_CFCTXM3.rowposition + 1);
        			var iRow = this.dsED_CFCTXM3.addRow();
        			this.dsED_CFCTXM3.set_rowposition(iRow);
        			this.dsED_CFCTXM3.setColumn(iRow,"EDC1_CODE", this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDC1_CODE"));
        			this.dsED_CFCTXM3.setColumn(iRow,"EDC2_CODE", this.dsED_CFCTXM2.getColumn(this.dsED_CFCTXM2.rowposition, "EDC2_CODE"));
        			this.dsED_CFCTXM3.setColumn(iRow,"USEX_YSNO", "1");//사용여부 Y로 셋팅
        			this.grdED_CFCTXM3.setCellPos(this.fnc_GridColumnIndex(this.grdED_CFCTXM3, "EDC3_CODE"));
        			this.grdED_CFCTXM3.setFocus();
        	}
        }

        
        /*--------------------------+
         |행삭제버튼클릭|
         +--------------------------*/
        this.btnDel_onclick = function(obj,e)
        {	
        	if(obj.id=="btnDel1"){
        	
        		if(!this.fn_DeleteCheck("dsED_CFCTXM1")) {
        			return;
        		}

        		this.dsED_CFCTXM1.deleteRow(this.dsED_CFCTXM1.rowposition);
        		this.grdED_CFCTXM1.setFocus();
        		
        	}else if(obj.id=="btnDel2"){
        	
        	
        		if(!this.fn_DeleteCheck("dsED_CFCTXM2")) {
        			return;
        		}

        		this.dsED_CFCTXM2.deleteRow(this.dsED_CFCTXM2.rowposition);
        		this.grdED_CFCTXM2.setFocus();
        		
        	}else if(obj.id=="btnDel3"){
        	
        		if(!this.fn_DeleteCheck("dsED_CFCTXM3")) {
        			return;
        		}

        
        		this.dsED_CFCTXM3.deleteRow(this.dsED_CFCTXM3.rowposition);
        		this.grdED_CFCTXM3.setFocus();
        	}
        	
        }
        /*--------------------------+
         | CanRowPosChanged|
         +--------------------------*/
        this.dsED_CFCTXM1_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) return;
        	//if (this.fnc_DatasetChangeCheck("dsED_CFCTXM2") || this.fnc_DatasetChangeCheck("dsED_CFCTXM2")) if (this.fnc_Message("TMM023") == false) return false;
        }
        this.dsED_CFCTXM2_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) return;
        	//if (this.fnc_DatasetChangeCheck("dsED_CFCTXM3")) if (this.fnc_Message("TMM023") == false) return false;
        }

        /*--------------------------+
         | RowPosChanged (대분류)|
         +--------------------------*/
        this.dsED_CFCTXM1_OnRowPosChanged = function(obj,e)
        {	
        	if (obj.getRowCount < 1) { //대분류가 없으므로 하위분류 행추가 불가
                //this.fn_setVisible_btn2(false);
                //this.fn_setVisible_btn3(false);
        		return;
        	}else{
        		if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {	 // 대분류 입력상태일 때
        			//this.fn_setVisible_btn2(false);
        			//this.fn_setVisible_btn3(false);
        			
        			this.dsED_CFCTXM2.clearData();
        			this.dsED_CFCTXM3.clearData();
        			
        		} else if(this.dsED_CFCTXM1.rowposition!= -1){
        			
        			//this.fn_setVisible_btn2(true);
        			//this.fn_setVisible_btn3(true);
                
        			this.dsED_CFCTXM2.clearData();
        			this.dsED_CFCTXM3.clearData();

        			var sMethodName = "SEARCH01"; //중분류 검색
        			var sInDataSet = "";
        			var sOutDataSet = "dsED_CFCTXM2=dsED_CFCTXM2";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		}

        	}
        }
        /*--------------------------+
         | RowPosChanged (중분류)|
         +--------------------------*/
        this.dsED_CFCTXM2_OnRowPosChanged = function(obj,e)
        {
        	if (obj.getRowCount < 1) { //중분류가 없으므로 하위분류 행추가 불가
                this.fn_setVisible_btn3(false);
        		return;
        	}else{
        	
        		if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) { //입력상태일때
        			this.fn_setVisible_btn3(false);
        			this.dsED_CFCTXM3.clearData();
        		
        		} else if(this.dsED_CFCTXM2.rowposition!= -1){
        			this.fn_setVisible_btn3(true);
        			
        			this.dsED_CFCTXM3.clearData();
        			var sMethodName = "SEARCH02"; //소분류 검색
        			var sInDataSet = "";
        			var sOutDataSet = "dsED_CFCTXM3=dsED_CFCTXM3";
        			var sArgument = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        		}
        	}
        }

        
        /*--------------------------+
         | 코드값중복체크|
         +--------------------------*/
        this.dsED_CFCTXM1_cancolumnchange = function(obj,e)
        { if(e.columnid == "EDC1_CODE"){
        	if( e.newvalue !=""){
        		if(this.dsEDC1_CODE.findRow(e.columnid, e.newvalue) >= 0)
        		{ this.fnc_Message("TMM077", "코드:"+e.newvalue);  this.setFocus(); return false; }
        		if(e.newvalue =="00")
        		{ this.fnc_Message("TMM125", "00은입력할 수 없습니다."); this.setFocus(); return false; }
        	 }
          }
        }
        this.dsED_CFCTXM2_cancolumnchange = function(obj,e)
        { if(e.columnid == "EDC2_CODE"){
        	if(e.newvalue !=""){
        		if(obj.findRow(e.columnid, e.newvalue) >= 0)
        		{ this.fnc_Message("TMM077", "코드:"+e.newvalue); this.setFocus(); return false;}
        		if(e.newvalue =="00")
        		{ this.fnc_Message("TMM125", "00은입력할 수 없습니다.");  this.setFocus(); return false;}
        	}
          }
        }

        this.dsED_CFCTXM3_cancolumnchange = function(obj,e)
        { if(e.columnid == "EDC3_CODE"){
           if(e.newvalue !=""){
        		if(obj.findRow(e.columnid, e.newvalue) >= 0)
        		{this.fnc_Message("TMM077", "코드:"+e.newvalue); this.setFocus(); return false;}
        		if(e.newvalue =="00")
        		{ this.fnc_Message("TMM125", "00은입력할 수 없습니다."); this.setFocus(); return false;}
        	}
          }
        }

        /*-----------------------------------------------------------+
         | 조회조건 검색창에 엔터키쳤을때(onkillfocus가 안먹힘)|
         +-----------------------------------------------------------*/
        this.edtSHREDCY_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.addEventHandler("onkillfocus", this.fn_HelpDialoge(obj, e),this);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsED_CFCTXM1.addEventHandler("canrowposchange", this.dsED_CFCTXM1_canrowposchange, this);
            this.dsED_CFCTXM1.addEventHandler("onrowposchanged", this.dsED_CFCTXM1_OnRowPosChanged, this);
            this.dsED_CFCTXM1.addEventHandler("cancolumnchange", this.dsED_CFCTXM1_cancolumnchange, this);
            this.dsED_CFCTXM2.addEventHandler("canrowposchange", this.dsED_CFCTXM2_canrowposchange, this);
            this.dsED_CFCTXM2.addEventHandler("onrowposchanged", this.dsED_CFCTXM2_OnRowPosChanged, this);
            this.dsED_CFCTXM2.addEventHandler("cancolumnchange", this.dsED_CFCTXM2_cancolumnchange, this);
            this.dsED_CFCTXM3.addEventHandler("cancolumnchange", this.dsED_CFCTXM3_cancolumnchange, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnDel1.addEventHandler("onclick", this.btnDel_onclick, this);
            this.btnAdd1.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.btnAdd2.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.btnDel2.addEventHandler("onclick", this.btnDel_onclick, this);
            this.btnAdd3.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.btnDel3.addEventHandler("onclick", this.btnDel_onclick, this);
            this.edtSHREDC1_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpEDC1_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREDCY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREDCY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREDCY_NAME.addEventHandler("onkeydown", this.edtSHREDCY_NAME_onkeydown, this);

        };

        this.loadIncludeScript("EDMA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
