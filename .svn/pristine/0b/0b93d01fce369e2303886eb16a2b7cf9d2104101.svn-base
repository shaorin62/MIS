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
                this.set_name("HATE0050");
                this.set_titletext("연장근로현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_ATTEDY", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAY01\" type=\"STRING\" size=\"256\"/><Column id=\"DAY02\" type=\"STRING\" size=\"256\"/><Column id=\"DAY03\" type=\"STRING\" size=\"256\"/><Column id=\"DAY04\" type=\"STRING\" size=\"256\"/><Column id=\"DAY05\" type=\"STRING\" size=\"256\"/><Column id=\"DAY06\" type=\"STRING\" size=\"256\"/><Column id=\"DAY07\" type=\"STRING\" size=\"256\"/><Column id=\"DAY08\" type=\"STRING\" size=\"256\"/><Column id=\"DAY09\" type=\"STRING\" size=\"256\"/><Column id=\"DAY10\" type=\"STRING\" size=\"256\"/><Column id=\"DAY11\" type=\"STRING\" size=\"256\"/><Column id=\"DAY12\" type=\"STRING\" size=\"256\"/><Column id=\"DAY13\" type=\"STRING\" size=\"256\"/><Column id=\"DAY14\" type=\"STRING\" size=\"256\"/><Column id=\"DAY15\" type=\"STRING\" size=\"256\"/><Column id=\"DAY16\" type=\"STRING\" size=\"256\"/><Column id=\"DAY17\" type=\"STRING\" size=\"256\"/><Column id=\"DAY18\" type=\"STRING\" size=\"256\"/><Column id=\"DAY19\" type=\"STRING\" size=\"256\"/><Column id=\"DAY20\" type=\"STRING\" size=\"256\"/><Column id=\"DAY21\" type=\"STRING\" size=\"256\"/><Column id=\"DAY22\" type=\"STRING\" size=\"256\"/><Column id=\"DAY23\" type=\"STRING\" size=\"256\"/><Column id=\"DAY24\" type=\"STRING\" size=\"256\"/><Column id=\"DAY25\" type=\"STRING\" size=\"256\"/><Column id=\"DAY26\" type=\"STRING\" size=\"256\"/><Column id=\"DAY27\" type=\"STRING\" size=\"256\"/><Column id=\"DAY28\" type=\"STRING\" size=\"256\"/><Column id=\"DAY29\" type=\"STRING\" size=\"256\"/><Column id=\"DAY30\" type=\"STRING\" size=\"256\"/><Column id=\"DAY31\" type=\"STRING\" size=\"256\"/><Column id=\"NIGT_OVER\" type=\"STRING\" size=\"256\"/><Column id=\"HOLY_OVER\" type=\"STRING\" size=\"256\"/><Column id=\"OVER_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CALDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"CALN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WDAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("연장근로현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("인사관리 > 근태현황 > 연장근로현황");
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

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_ATTEDY", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("117");
            obj.set_binddataset("dsAT_ATTEDY");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("multirow");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구    분\"/><Cell col=\"2\" colspan=\"31\" text=\"연 장 근 로 시 간\"/><Cell col=\"33\" colspan=\"3\" text=\"합    계\"/><Cell row=\"1\" text=\"부서명\"/><Cell row=\"1\" col=\"1\" text=\"성명\"/><Cell row=\"1\" col=\"2\" text=\"1\"/><Cell row=\"1\" col=\"3\" text=\"2\"/><Cell row=\"1\" col=\"4\" text=\"3\"/><Cell row=\"1\" col=\"5\" text=\"4\"/><Cell row=\"1\" col=\"6\" text=\"5\"/><Cell row=\"1\" col=\"7\" text=\"6\"/><Cell row=\"1\" col=\"8\" text=\"7\"/><Cell row=\"1\" col=\"9\" text=\"8\"/><Cell row=\"1\" col=\"10\" text=\"9\"/><Cell row=\"1\" col=\"11\" style=\"background: ;\" text=\"10\"/><Cell row=\"1\" col=\"12\" text=\"11\"/><Cell row=\"1\" col=\"13\" text=\"12\"/><Cell row=\"1\" col=\"14\" text=\"13\"/><Cell row=\"1\" col=\"15\" text=\"14\"/><Cell row=\"1\" col=\"16\" text=\"15\"/><Cell row=\"1\" col=\"17\" text=\"16\"/><Cell row=\"1\" col=\"18\" text=\"17\"/><Cell row=\"1\" col=\"19\" text=\"18\"/><Cell row=\"1\" col=\"20\" text=\"19\"/><Cell row=\"1\" col=\"21\" text=\"20\"/><Cell row=\"1\" col=\"22\" text=\"21\"/><Cell row=\"1\" col=\"23\" text=\"22\"/><Cell row=\"1\" col=\"24\" text=\"23\"/><Cell row=\"1\" col=\"25\" text=\"24\"/><Cell row=\"1\" col=\"26\" text=\"25\"/><Cell row=\"1\" col=\"27\" text=\"26\"/><Cell row=\"1\" col=\"28\" text=\"27\"/><Cell row=\"1\" col=\"29\" text=\"28\"/><Cell row=\"1\" col=\"30\" text=\"29\"/><Cell row=\"1\" col=\"31\" text=\"30\"/><Cell row=\"1\" col=\"32\" text=\"31\"/><Cell row=\"1\" col=\"33\" text=\"야간근로\"/><Cell row=\"1\" col=\"34\" text=\"휴일근로\"/><Cell row=\"1\" col=\"35\" text=\"계\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" text=\"bind:DAY01\"/><Cell col=\"3\" text=\"bind:DAY02\"/><Cell col=\"4\" text=\"bind:DAY03\"/><Cell col=\"5\" text=\"bind:DAY04\"/><Cell col=\"6\" text=\"bind:DAY05\"/><Cell col=\"7\" text=\"bind:DAY06\"/><Cell col=\"8\" text=\"bind:DAY07\"/><Cell col=\"9\" text=\"bind:DAY08\"/><Cell col=\"10\" text=\"bind:DAY09\"/><Cell col=\"11\" text=\"bind:DAY10\"/><Cell col=\"12\" text=\"bind:DAY11\"/><Cell col=\"13\" text=\"bind:DAY12\"/><Cell col=\"14\" text=\"bind:DAY13\"/><Cell col=\"15\" text=\"bind:DAY14\"/><Cell col=\"16\" text=\"bind:DAY15\"/><Cell col=\"17\" text=\"bind:DAY16\"/><Cell col=\"18\" text=\"bind:DAY17\"/><Cell col=\"19\" text=\"bind:DAY18\"/><Cell col=\"20\" text=\"bind:DAY19\"/><Cell col=\"21\" text=\"bind:DAY20\"/><Cell col=\"22\" text=\"bind:DAY21\"/><Cell col=\"23\" text=\"bind:DAY22\"/><Cell col=\"24\" text=\"bind:DAY23\"/><Cell col=\"25\" text=\"bind:DAY24\"/><Cell col=\"26\" text=\"bind:DAY25\"/><Cell col=\"27\" text=\"bind:DAY26\"/><Cell col=\"28\" text=\"bind:DAY27\"/><Cell col=\"29\" text=\"bind:DAY28\"/><Cell col=\"30\" text=\"bind:DAY29\"/><Cell col=\"31\" text=\"bind:DAY30\"/><Cell col=\"32\" text=\"bind:DAY31\"/><Cell col=\"33\" text=\"bind:NIGT_OVER\"/><Cell col=\"34\" text=\"bind:HOLY_OVER\"/><Cell col=\"35\" text=\"bind:OVER_TOTAL\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY01')\"/><Cell col=\"3\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY02')\"/><Cell col=\"4\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY03')\"/><Cell col=\"5\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY04')\"/><Cell col=\"6\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY05')\"/><Cell col=\"7\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY06')\"/><Cell col=\"8\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY07')\"/><Cell col=\"9\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY08')\"/><Cell col=\"10\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY09')\"/><Cell col=\"11\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY10')\"/><Cell col=\"12\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY11')\"/><Cell col=\"13\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY12')\"/><Cell col=\"14\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY13')\"/><Cell col=\"15\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY14')\"/><Cell col=\"16\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY15')\"/><Cell col=\"17\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY16')\"/><Cell col=\"18\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY17')\"/><Cell col=\"19\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY18')\"/><Cell col=\"20\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY19')\"/><Cell col=\"21\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY20')\"/><Cell col=\"22\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY21')\"/><Cell col=\"23\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY22')\"/><Cell col=\"24\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY23')\"/><Cell col=\"25\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY24')\"/><Cell col=\"26\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY25')\"/><Cell col=\"27\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY26')\"/><Cell col=\"28\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY27')\"/><Cell col=\"29\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY28')\"/><Cell col=\"30\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY29')\"/><Cell col=\"31\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY30')\"/><Cell col=\"32\" style=\"align:right;\" expr=\"expr:dataset.getSum('DAY31')\"/><Cell col=\"33\" style=\"align:right;\" expr=\"expr:dataset.getSum('NIGT_OVER')\"/><Cell col=\"34\" style=\"align:right;\" expr=\"expr:dataset.getSum('HOLY_OVER')\"/><Cell col=\"35\" style=\"align:right;\" expr=\"expr:dataset.getSum('OVER_TOTAL')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_text("근태월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "171", "61", "40", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "242", "71", "80", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "324", "71", "21", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "347", "71", "100", "21", null, null, this);
            obj.set_taborder("126");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "447", "61", "40", "41", null, null, this);
            obj.set_taborder("127");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "476", "71", "70", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "518", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "600", "71", "21", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("131");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "623", "71", "100", "21", null, null, this);
            obj.set_taborder("132");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YMTH", "absolute", "83", "71", "88", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "200", "71", "52", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연장근로현황");

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
        };
        
        // User Script
        this.addIncludeScript("HATE0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATE0050.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		연장근로현황을 조회한다.
         * @category	 	인사관리/근태현황/연장근로현황
         * @author	   		김칠석
         * @cdate	  		2016.09.05
         * @version 1.0		최초 작성
         * HATE0050.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATE0050"; //해당 Form에서 사용 할 Package 명 

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
        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.divSHRBASE_YMTH.fn_SetMonth(this.fnc_SubStr(iNowData, 0, 6));
        	
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
        	this.fnc_DatasetClear('dsTM_CALDXM');
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CALDXM=dsTM_CALDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdHR_LICEXM.setFocus();
        	/*
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsHR_LICEXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_LICEXM=dsHR_LICEXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_LICEXM.setFocus();
        	*/

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsAT_ATTEDY");
        	this.grdAT_ATTEDY.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
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

        	/*
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_LICEXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	*/

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
        	/*
        	if (this.fnc_DatasetChangeCheck("dsHR_LICEXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	*/
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YMTH.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "근태월", this.divSHRBASE_YMTH);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	/*
        	if (this.dsHR_LICEXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	return this.fnc_Message("TMM002", sQuestionText);
        	*/

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	/*
        	if (!this.fnc_DatasetChangeCheck("dsHR_LICEXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	*/
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 달력헤더 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);  
        		sReturnString += " STDS_MONT=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH.fn_GetMonth()));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        	}
        	// 연장근로 조회 Argument 생성
        	else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);  
        		sReturnString += " STDS_MONT=" + this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YMTH.fn_GetMonth()));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
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
        		
        		//this.fnc_Information(this.stInformation, this.dsTM_CALDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsTM_CALDXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if( this.dsTM_CALDXM.rowcount > 0 ) {
        			
        			var sMethodName = "SEARCH01";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsAT_ATTEDY=dsAT_ATTEDY";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			
        			this.fn_ChangeCalendar();
        		}
        		else {
        			alert( "해당월의 당력이 생성되지 않았습니다.");
        			this.dsAT_ATTEDY.clear();
        			
        		}
        	//코드 바인딩
        	} 
        	else if (sMethodName == 'SEARCH01') {
        		this.fnc_Information(this.stInformation, this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ATTEDY.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		this.fn_ChangeBodyData();
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
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        	
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);//콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}
        	//조회조건 - 사원정보조회(Popup)	
        	else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        	
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

        /*-----------------------+
         |  그리드 Head&Summary Setting  |
         +------------------------*/
         this.fn_ChangeCalendar = function () {
        	
        	var rowcnt = this.dsTM_CALDXM.rowcount;
        	
        	/*Head 설정*/
        	/*요일설정*/
        	for( var i=1; i<32; i++) {
        		//평일이 아닐경우
        		if( this.dsTM_CALDXM.getColumn(i-1, "HOGB_CODE") != "01" ) {
        			this.grdAT_ATTEDY.setCellProperty("Head"
        											,4 + parseInt(this.dsTM_CALDXM.getColumn(i-1, "CALN_DATE"))
        											, "background"
        											, "orange");
        		}
        		//평일일경우
        		else {
        			this.grdAT_ATTEDY.setCellProperty("Head"
        											,4 + parseInt(this.dsTM_CALDXM.getColumn(i-1, "CALN_DATE"))
        											, "background"
        											, "white");
        		}
        		//해당월보다 큰 일수에 대한 처리
        		if( i>rowcnt ) {
        			this.grdAT_ATTEDY.setCellProperty("Head"
        											,4 + i
        											, "background"
        											, "white");
        		}
        	}
        	
        	/*일수설정*/
        	for( var i=1; i<32; i++) {
        		if( i < rowcnt+1 ) {
        			this.grdAT_ATTEDY.setCellProperty("Head"
        											, 4+i
        											, "titletext"
        											, i);
        		}
        		else {
        						this.grdAT_ATTEDY.setCellProperty("Head"
        											, 4+i
        											, "titletext"
        											, "");
        		}
        	}
        	
        	/*Summary 설정*/
        	//29일
        	if( rowcnt < 29 ) {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 29
        										, "expr"
        										, "");
        	}
        	else {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 29
        										, "expr"
        										, "expr:dataset.getSum('DAY29')");
        	}
        	//30일
        	if( rowcnt < 30 ) {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 30
        										, "expr"
        										, "");
        	}
        	else {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 30
        										, "expr"
        										, "expr:dataset.getSum('DAY30')");
        	}
        	//31일
        	if( rowcnt < 31 ) {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 31
        										, "expr"
        										, "");
        	}
        	else {
        		this.grdAT_ATTEDY.setCellProperty("Summ"
        										, 31
        										, "expr"
        										, "expr:dataset.getSum('DAY31')");
        	}
        	this.dsAT_ATTEDY.set_updatecontrol(false);
         }
         
         
         /*-----------------------+
         |  그리드 Body Setting  |
         +------------------------*/
         this.fn_ChangeBodyData = function () {
        	var rowcnt = this.dsTM_CALDXM.rowcount;
        	var datacnt = this.dsAT_ATTEDY.rowcount;
        	
        	/*미해당일수에 대한 Body데이터 삭제*/
        	this.dsAT_ATTEDY.set_updatecontrol(false);
        	for( var i=0; i<datacnt; i++ ) {
        		if( rowcnt < 29 ) {
        			this.dsAT_ATTEDY.setColumn(i, "DAY29", "");
        		}
        		if( rowcnt < 30 ) {
        			this.dsAT_ATTEDY.setColumn(i, "DAY30", "");
        		}
        		if( rowcnt < 31 ) {
        			this.dsAT_ATTEDY.setColumn(i, "DAY31", "");
        		}
        	}
        	this.dsAT_ATTEDY.set_updatecontrol(true);
         }
         
         
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static30.addEventHandler("onclick", this.Static30_onclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATE0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
