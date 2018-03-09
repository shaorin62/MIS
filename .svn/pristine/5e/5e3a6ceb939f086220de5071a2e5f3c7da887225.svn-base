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
                this.set_name("HATB0050");
                this.set_titletext("월근태등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_ATTEM1", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WKYY_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLI_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOWK_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ETSN_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NIGH_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLI_WORT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLE_ETSN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLE_NIGH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MONT_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NPHO_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ATNS_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EALE_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EGOE_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ABSN_DAYS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ETCX_TIME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NIGH_DAYS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ENDDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("월근태등록");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("근태기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_ATTEM1", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_ATTEM1");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("oncolumnchanged").set("dsAT_ATTEM1_oncolumnchanged");
            obj.getSetter("cancolumnchange").set("dsAT_ATTEM1_cancolumnchange");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근태월\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"야간근무\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"휴일근무\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"월차\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"연차\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"무급\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;mask&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:ATTE_YMTH\" mask=\"####-##\" editdisplay=\"edit\"/><Cell col=\"1\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:EMPL_NAME\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:NIGH_DAYS\" mask=\"##0.0\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:HOWK_DAYS\" mask=\"##0.0\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:MONT_DAYS\" mask=\"#0.0\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:ANNU_DAYS\" mask=\"#0.0\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:ENDD_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;text&quot;\" editfilter=\"number\" style=\"align:center;\" text=\"bind:NPHO_DAYS\" mask=\"#0.0\" editlimit=\"5\" editautoselect=\"true\" editdisplay=\"edit\" editlengthunit=\"utf8\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"align:center;\" text=\"합 계\"/><Cell col=\"5\" style=\"align:center;\" expr=\"expr:dataset.getSum('NIGH_DAYS')\"/><Cell col=\"6\" style=\"align:center;\" expr=\"expr:dataset.getSum('HOWK_DAYS')\"/><Cell col=\"7\" style=\"align:center;\" expr=\"expr:dataset.getSum('MONT_DAYS')\"/><Cell col=\"8\" style=\"align:center;\" expr=\"expr:dataset.getSum('ANNU_DAYS')\"/><Cell col=\"9\" style=\"align:center;\" expr=\"expr:dataset.getSum('NPHO_DAYS')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "303", "71", "52", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "345", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "427", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "450", "71", "100", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "579", "71", "52", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("대상자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "634", "71", "80", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "716", "71", "21", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "739", "71", "100", "21", null, null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "181", "71", "16", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateReq", "absolute", "8", "35", "62", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YMTH1", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YMTH2", "absolute", "195", "71", "80", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("131");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("132");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월근태등록");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HATB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATB0050.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		월근태등록
         * @category	 	인사관리>근태처리>월근태등록
         * @author	   	    김희정
         * @cdate	  		2016.09.13
         * @version 1.0		최초 작성
         * HATB0020.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.										*
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.										*
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리				*
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망	*
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요								*
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "HATB0050";
        this.sGUBN		  = "";			//근태마감조회구분

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

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	/*
        	this.calSHRATTE_YMTH1.set_value(this.fnc_SubStr(iNowData, 0, 6));
        	this.calSHRATTE_YMTH2.set_value(this.fnc_SubStr(iNowData, 0, 6)); 
        	*/
        	this.divSHRBASE_YMTH1.fn_SetMonth(this.fnc_SubStr(iNowData, 0, 6));
        	this.divSHRBASE_YMTH2.fn_SetMonth(this.fnc_SubStr(iNowData, 0, 6)); 
        	this.edtSHRDEPT_NAME.setFocus();
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
        	this.fnc_DatasetClear("dsAT_ATTEM1");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ATTEM1=dsAT_ATTEM1";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEM1.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsAT_ATTEM1.addRow();
        	this.dsAT_ATTEM1.set_rowposition(iRow);
        	this.grdAT_ATTEM1.setCellPos(this.fnc_GridColumnIndex(this.grdAT_ATTEM1, "ATTE_YMTH"));
        	this.grdAT_ATTEM1.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsAT_ATTEM1.deleteMultiRows(this.grdAT_ATTEM1.getSelectedDatasetRows());
        		this.grdAT_ATTEM1.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsAT_ATTEM1");
        	this.grdAT_ATTEM1.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_ATTEM1=dsAT_ATTEM1:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEM1.setFocus();

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
        	 var sMessage = this.fnc_FormUnloadCheck("dsAT_ATTEM1", this);

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

        	if (this.fnc_DatasetChangeCheck("dsAT_ATTEM1")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	/*
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRATTE_YMTH1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간시작", this.calSHRATTE_YMTH1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRATTE_YMTH2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간종료", this.calSHRATTE_YMTH2);
        	}
        	
        	if (this.calSHRATTE_YMTH1.value > this.calSHRATTE_YMTH2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "근태기간시작,근태기간종료", this.calSHRATTE_YMTH1);
        	}
        	*/
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YMTH1.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간시작", this.divSHRBASE_YMTH1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YMTH2.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간종료", this.divSHRBASE_YMTH2);
        	}
        	
        	if (this.divSHRBASE_YMTH1.fn_GetMonth() > this.divSHRBASE_YMTH2.fn_GetMonth()) {
        		return this.fnc_SearchCheckPostAction("TMM042", "근태기간시작,근태기간종료", this.divSHRBASE_YMTH1);
        	}
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsAT_ATTEM1") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_ATTEM1.getRowCount(); i++) {
        		
        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_ATTEM1.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEM1.getColumn(i, "ATTE_YMTH"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근태월", this.dsAT_ATTEM1, i, this.grdAT_ATTEM1, "ATTE_YMTH");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_ATTEM1.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsAT_ATTEM1, i, this.grdAT_ATTEM1, "EMPL_NAME");
        		}
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (this.dsAT_ATTEM1.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	/* 마감된 근태월 정보 삭제 불가*/
        	var arrRow	= this.fnc_Split(this.grdAT_ATTEM1.getSelectedDatasetRows(), ",");
        	var iCount	= arrRow.length;
        	
        	for(var i = 0; i < iCount; i++){
        		
        		if (this.dsAT_ATTEM1.getColumn(arrRow[i], "ENDD_YSNO") == "1"){
        			var sEmplName = this.dsAT_ATTEM1.getColumn(arrRow[i], "EMPL_NAME");
        			var sAtteYmth = this.fnc_SubStr(this.dsAT_ATTEM1.getColumn(arrRow[i], "ATTE_YMTH"), 0, 4) + "년 " + this.fnc_SubStr(this.dsAT_ATTEM1.getColumn(arrRow[i], "ATTE_YMTH"), 4, 2) + "월";
        			this.fnc_Message("TMM080", "마감완료", sEmplName +"님의 " + sAtteYmth + " 근태월은 삭제");
        			return false;
        		}
        		
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdAT_ATTEM1);
        	if (iSelectRowCount == 0) {
        		this.fnc_Message("TMM010");
        		return false;
        	}
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsAT_ATTEM1.getColumn(this.dsAT_ATTEM1.rowposition, "EMPL_NAME")) + ")";
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
        		sReturnString += " ATTE_YMTH1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH1.fn_GetMonth())); 	//근태기간시작월
        		sReturnString += " ATTE_YMTH2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH2.fn_GetMonth())); 	//근태기간종료월
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);	//부서코드
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	//사원번호

        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ATTE_YMTH1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH1.fn_GetMonth())); 	//근태기간시작월
        		sReturnString += " ATTE_YMTH2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH2.fn_GetMonth())); 	//근태기간종료월
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);	//부서코드
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	//사원번호

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

        		this.fnc_Information(this.stInformation, this.dsAT_ATTEM1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ATTEM1.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		var sAtteMagam = this.dsAT_ENDDXM.getColumn(0, "ENDD_YSNO");
        		
        		if(sGUBN == "CREATE"){	//월근태 생성 시 마감여부 체크결과
        			if(sAtteMagam == "1"){
        				this.fnc_Message("TMM080", "마감완료", "월근태 생성을");
        			}else{
        				var sAtteYmth = this.fnc_SubStr(this.divSHRBASE_YMTH2.fn_GetMonth(), 0, 4) + "년 " + this.fnc_SubStr(this.divSHRBASE_YMTH2.fn_GetMonth(), 4, 2) + "월";
        				if ( this.fnc_Message("PAY062", sAtteYmth+" 월근태 자료", "월")) {
        					this.fn_createProcess();
        				}
        			}
        		}else{	//신규입력 근태월 선택 시 마감여부 체크결과
        			if(sAtteMagam == "1"){
        				this.fnc_Message("TMM080", "마감완료", "해당근태월은 입력");
        				this.dsAT_ATTEM1.setColumn(this.dsAT_ATTEM1.rowposition, "ATTE_YMTH", "");
        			}
        		}
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, this.dsAT_ATTEM1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM136","월근태자료");
        	} 
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서(popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "TMM0004";	//BDM0002
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdAT_ATTEM1") {

        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        			
        			//arrParam[0] = "HRM0051"; 
        			arrParam[0] = "HRM0002"; 
        			arrParam[1] = this.edtSHRDEPT_CODE.value;
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdAT_ATTEM1";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";  
        			//arrParam[6] = "0,1,3,4,5,6";
        			arrParam[6] = "0,1,2,3,20,21";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        /*------------------------------------+
         | 근태마감여부 조회                |
         +-------------------------------------*/
        this.fn_AtteMagamInfo = function (sYmth) {
        	this.fnc_DatasetClear("dsAT_ENDDXM");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ENDDXM=dsAT_ENDDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	if(sGUBN == "CREATE"){
        		sArgument += " ATTE_YMTH=" + this.fnc_Quote(this.divSHRBASE_YMTH2.fn_GetMonth());	//근태기간종료월
        	}else{
        		if(this.fnc_Length(sYmth) > 1){
        			sArgument += " ATTE_YMTH=" + this.fnc_Quote(sYmth);	//근태월
        		}
        	}
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------+
         |  월근태생성  		  |
         -------------------------*/
        this.fn_createProcess = function (obj) {

        	this.fnc_DatasetClear("dsAT_ATTEM1");

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ATTEM1=dsAT_ATTEM1";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ATTEM1.setFocus();
        }

        this.dsAT_ATTEM1_cancolumnchange = function(obj,e)
        {
        	var sAtteYmth = "";
        	var sEmplNumb = "";

        	if(e.columnid == "ATTE_YMTH"){
        		sAtteYmth = e.newvalue;
        		sEmplNumb = this.dsAT_ATTEM1.getColumn(e.row, "EMPL_NUMB");
        	}else if(e.columnid == "EMPL_NUMB"){
        		sAtteYmth = this.dsAT_ATTEM1.getColumn(e.row, "ATTE_YMTH");
        		sEmplNumb = e.newvalue;
        	}else {
        		return;
        	}
        	
        	var sEmplName = this.dsAT_ATTEDY.getColumn(e.row, "EMPL_NAME");
        	var iFindRow = this.dsAT_ATTEM1.findRowExpr("ATTE_YMTH=='" + sAtteYmth + "' && EMPL_NUMB=='" + sEmplNumb+ "'");
            if (iFindRow > -1){
        		this.fnc_Message("TMM077", sEmplName + "님의 근태정보");
        		return false;
            }
        }

        this.dsAT_ATTEM1_oncolumnchanged = function(obj,e) {
        	if(e.columnid == "ATTE_YMTH"){
        		/* 근태마감여부 확인 */
        		sGUBN = "INSERT";
        		sAtteYmth = e.newvalue;
        		this.fn_AtteMagamInfo(sAtteYmth);
        	}
        	
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdAT_ATTEM1, "YES", e.oldvalue, e.columnid);
        	}
        }

        /*----------------------+
         |  생성 버튼 클릭 時 |
         +----------------------*/
        this.btnCreateReq_onclick = function(obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YMTH2.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태기간종료", this.divSHRBASE_YMTH2);
        	}
        	/* 근태마감여부 확인 */
        	sGUBN = "CREATE";
        	this.fn_AtteMagamInfo();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_ATTEM1.addEventHandler("oncolumnchanged", this.dsAT_ATTEM1_oncolumnchanged, this);
            this.dsAT_ATTEM1.addEventHandler("cancolumnchange", this.dsAT_ATTEM1_cancolumnchange, this);
            this.dsAT_ENDDXM.addEventHandler("cancolumnchange", this.dsAT_ATTEDY_cancolumnchange, this);
            this.dsAT_ENDDXM.addEventHandler("oncolumnchanged", this.dsAT_ATTEDY_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdAT_ATTEM1.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnCreateReq.addEventHandler("onclick", this.btnCreateReq_onclick, this);

        };

        this.loadIncludeScript("HATB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
