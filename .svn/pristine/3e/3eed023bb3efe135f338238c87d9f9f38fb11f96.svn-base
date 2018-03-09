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
                this.set_name("PAYF0130");
                this.set_titletext("퇴직연금납입현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">TMM0006</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDC", this);
            obj.set_keystring("G:EMPL_NUMB+EMPL_NAME");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"255\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CPOS_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"255\"/><Column id=\"ENFC_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"REAY_JOCD\" type=\"STRING\" size=\"255\"/><Column id=\"REAY_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"EEAY_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"WAGE_TAMT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"AVEW_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"ANVA_TAMT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"AVAV_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"BONU_TAMT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"AVBN_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"STDS_WAGE\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CMPA_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"RTBN_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"SUMM_AMOT\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"255\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"255\"/><Column id=\"APPR_PROC\" type=\"STRING\" size=\"255\"/><Column id=\"RECW_YCNT\" type=\"STRING\" size=\"255\"/><Column id=\"RECW_MCNT\" type=\"STRING\" size=\"255\"/><Column id=\"RECW_DCNT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("퇴직연금납입현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRENFC_CODE", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static07", "absolute", "676", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRDEPT_CODE", "absolute", "295", "71", "50", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "570", "61", "40", "67", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stSHREMPL_NUMB", "absolute", "599", "71", "50", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "266", "61", "40", "67", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRSTDS_YEAR", "absolute", "28", "95", "70", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPSDC", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_taborder("146");
            obj.set_binddataset("dsPY_RTPSDC");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"연금시작일\"/><Cell col=\"7\" text=\"연금종료일\"/><Cell col=\"8\" text=\"정상근속기간\"/><Cell col=\"9\" text=\"급여지급액\"/><Cell col=\"10\" text=\"평균급여\"/><Cell col=\"11\" text=\"연차수당\"/><Cell col=\"12\" text=\"평균연차수당\"/><Cell col=\"13\" text=\"상여지급액\"/><Cell col=\"14\" text=\"상여평균\"/><Cell col=\"15\" text=\"기준임금\"/><Cell col=\"16\" text=\"회사부담금\"/><Cell col=\"17\" text=\"퇴직위로금\"/><Cell col=\"18\" text=\"납입총계\"/><Cell col=\"19\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)==0 ? EMPL_NUMB : &quot;&quot;\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow)==0 ? EMPL_NAME : &quot;&quot;\"/><Cell col=\"2\" style=\"align:left;\" text=\"expr:dataset.getRowLevel(currow)==0 ? SECT_NAME : &quot;소계&quot;\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" text=\"bind:CPOS_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:REAY_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:EEAY_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align:right;\" text=\"expr:dataset.getRowLevel(currow)==0 ? RECW_YCNT +&quot;년 &quot; + RECW_MCNT + &quot;월 &quot; + RECW_DCNT + &quot;일&quot; : &quot;&quot;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:WAGE_TAMT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVEW_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ANVA_TAMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVAV_AMOT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BONU_TAMT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVBN_AMOT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STDS_WAGE\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CMPA_AMOT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTBN_AMOT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMOT\"/><Cell col=\"19\" text=\"bind:APPR_PROC\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;WAGE_TAMT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;AVEW_AMOT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;ANVA_TAMT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;AVAV_AMOT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;BONU_TAMT&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;AVBN_AMOT&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;STDS_WAGE&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;CMPA_AMOT&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;RTBN_AMOT&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;SUMM_AMOT&quot;)\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("173");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("175");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "-3", "129", "216", "7", null, null, this);
            obj.set_taborder("176");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("177");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "96", "71", "170", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "365", "71", "80", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "447", "71", "21", "21", null, null, this);
            obj.set_taborder("180");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "470", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "641", "71", "80", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "723", "71", "21", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "746", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_YEAR1", "absolute", "96", "95", "72", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy");
            obj.set_type("spin");
            obj.set_editformat("yyyy");
            obj.set_value("null");

            obj = new Calendar("calSHRSTDS_YEAR2", "absolute", "194", "95", "72", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");

            obj = new Static("Static08", "absolute", "176", "95", "10", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_text("~");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직연금납입현황");

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
        this.addIncludeScript("PAYF0130.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0130.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0120 퇴직연금 납입금 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.12		김준수		Initial Created.
         *   2016.11.23		안윤준		수정
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0130";

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sNowDate = this.fnc_SubStr(this.fnc_ToString(this.fnc_GetServerDateTime("DATE")), 0, 4);
            this.calSHRSTDS_YEAR1.set_value(sNowDate);
            this.calSHRSTDS_YEAR2.set_value(sNowDate);
            this.calSHRSTDS_YEAR1.setFocus();
            
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
            this.fnc_DatasetClear("dsPY_RTPSDC");
        	
        	var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSDC=dsPY_RTPSDC";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdPY_RTPSDC.setFocus();
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        // 기능없음.
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
            // 기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            // 기능없음.
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음.
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
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPSDC", this);
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
        this.fn_EditFocus = function (obj) {
            this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
         	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_YEAR1.value)) < 0) {
         		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRSTDS_YEAR1);
         	}
         	
         	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_YEAR2.value)) < 0) {
         		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRSTDS_YEAR2);
         	}
         	
         	if (this.calSHRSTDS_YEAR1.value > this.calSHRSTDS_YEAR2.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "기준년도종료일,기준년도시작일", this.calSHRSTDS_YEAR1);
         	}
         	
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        // 	기능없음.
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE="  + this.fnc_Quote(this.cmbSHRENFC_CODE.value);
         		sReturnString += " STDS_YEAR1=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRSTDS_YEAR1.value, 0, 4));
         		sReturnString += " STDS_YEAR2=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRSTDS_YEAR2.value, 0, 4));
         		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {		
        		this.fnc_Information(this.stInformation, this.dsPY_RTPSDC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPSDC.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
        	}
        }

        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { //사원조회
        		arrParam[0] = "HRM0002";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTPSDC.addEventHandler("onrowposchanged", this.fn_Search01, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_RTPSDC.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYF0130.xfdl");
        this.loadPreloadList();
       
    };
}
)();
