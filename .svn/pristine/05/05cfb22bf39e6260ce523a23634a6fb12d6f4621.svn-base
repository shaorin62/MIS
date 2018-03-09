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
                this.set_name("PAYF0120");
                this.set_titletext("퇴직연금납입금관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row><Row><Col id=\"DSNAME\">dsBIZR_NAME</Col><Col id=\"COMBOID\">PAY0010</Col><Col id=\"PARAM\">퇴직연금가입기관</Col><Col id=\"USEYSNO\">0</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDC1", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_YMTH\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_WAGE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CMPA_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PBUR_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRMT_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ENFC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDC2", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CMPA_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PBUR_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRMT_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUM_AMOT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PBUR_CNTX\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"EMPL_CNTX\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"STDS_WAGE\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");
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
            obj.set_taborder("6");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("퇴직연금납입금관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("9");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
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

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "96", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("Static32", "absolute", "325", "71", "50", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "395", "71", "80", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "477", "71", "21", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "500", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "600", "61", "40", "67", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "629", "71", "50", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "671", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "753", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "776", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "296", "61", "40", "67", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", "95", "70", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("조회년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "325", "95", "80", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("가입기관");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREAY_JOCD", "absolute", "395", "95", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("Static01", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("144");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPSDC1", "absolute", "8", "154", null, null, "25", "199", this);
            obj.set_taborder("146");
            obj.set_binddataset("dsPY_RTPSDC1");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"가입기관\"/><Cell col=\"7\" text=\"기준임금\"/><Cell col=\"8\" text=\"회사부담금\"/><Cell col=\"9\" text=\"개인부담금\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" text=\"bind:CPOS_NAME\"/><Cell col=\"6\" text=\"bind:BIZR_NAME\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:STDS_WAGE\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:CMPA_AMOT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:PBUR_AMOT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('STDS_WAGE')\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('CMPA_AMOT')\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('PBUR_AMOT')\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "518", "80", "25", null, null, this);
            obj.set_taborder("148");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPSDC2", "absolute", "8", null, null, "159", "25", "15", this);
            obj.set_taborder("150");
            obj.set_binddataset("dsPY_RTPSDC2");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"가입기관\"/><Cell col=\"1\" text=\"인원수\"/><Cell col=\"2\" text=\"기준임금\"/><Cell col=\"3\" text=\"회사부담금\"/><Cell col=\"4\" text=\"개인부담금\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:BIZR_NAME\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:PBUR_CNTX\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:STDS_WAGE\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:CMPA_AMOT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:PBUR_AMOT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('STDS_WAGE')\" mask=\"###,###\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('CMPA_AMOT')\" mask=\"###,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" expr=\"expr:dataset.getSum('PBUR_AMOT')\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "76", null, "169", "21", null, "174", this);
            obj.set_taborder("153");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "537", "80", "6", null, null, this);
            obj.set_taborder("154");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", null, "50", "21", null, "174", this);
            obj.set_taborder("155");
            obj.set_text("총괄");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "64", null, "10", "13", null, "179", this);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "52", "504", "12", "23", null, null, this);
            obj.set_taborder("157");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "65", "504", "12", "23", null, null, this);
            obj.set_taborder("158");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "87", "133", "169", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "148", "80", "6", null, null, this);
            obj.set_taborder("160");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "9", "133", "70", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("사원별");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", "75", "136", "10", "13", null, null, this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "63", "115", "12", "23", null, null, this);
            obj.set_taborder("163");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "76", "115", "12", "23", null, null, this);
            obj.set_taborder("164");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRYMTH_STDT", "absolute", "96", "95", "82", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");

            obj = new Calendar("calSHRYMTH_ENDT", "absolute", "189", "95", "82", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");

            obj = new Static("Static20", "absolute", "178", "95", "11", "21", null, null, this);
            obj.set_taborder("167");
            obj.set_text("~");
            obj.getSetter("class").set("sta_WF_txt");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직연금납입금관리");

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
        this.addIncludeScript("PAYF0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0120 퇴직연금 납입금 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.12		김준수		Initial Created.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0120";

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
            
            switch (this.sUSERLAVEL) {
        		case "1" :
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			break;

        		case "5" :
        			this.cmbSHRENFC_CODE.set_readonly(true);
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			break;

        		default :
        			break;
        	}
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
            this.calSHRYMTH_STDT.set_value(this.fnc_SubStr(sNowDate, 0, 6));
        	this.calSHRYMTH_ENDT.set_value(this.fnc_SubStr(sNowDate, 0, 6));
           	this.calSHRYMTH_STDT.setFocus();
           	
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
            this.fnc_DatasetClear("dsPY_RTPSDC1");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSDC1=dsPY_RTPSDC1";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
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
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPSDC1,dsPY_RTPSDC2", this);
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
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRENFC_CODE.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사업장", this.cmbSHRENFC_CODE);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRREAY_JOCD.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "가입기관", this.cmbSHRREAY_JOCD);
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
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " REAY_JOCD=" 	+ this.fnc_Quote(this.cmbSHRREAY_JOCD.value);
        		sReturnString += " YMTH_STDT=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRYMTH_STDT.value,0 ,6));
        		sReturnString += " YMTH_ENDT=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRYMTH_ENDT.value,0 ,6));
        		
        	} else if (sKind == "SEARCH01")	{
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ENFC_CODE=" 	+ this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		sReturnString += " YMTH_STDT=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRYMTH_STDT.value,0 ,6));
        		sReturnString += " YMTH_ENDT=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRYMTH_ENDT.value,0 ,6));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_RTPSDC1.getColumn(this.dsPY_RTPSDC1.rowposition, "EMPL_NUMB"));
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
        		this.fnc_Information(this.stInformation00, this.dsPY_RTPSDC1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPSDC1.rowcount);
        		this.fn_Search01();
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation02, this.dsPY_RTPSDC2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdPY_RTPSDC1.setFocus();
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRREAY_JOCD,dsBIZR_NAME,0";
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
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        this.fn_Search01 = function (obj) {

            if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsPY_RTPSDC2");

            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSDC2=dsPY_RTPSDC2";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        this.cmbSHRENFC_CODE_onitemchanged = function(obj,e) {
        	this.fnc_DatasetClear("dsPY_RTPSDC1,dsPY_RTPSDC2");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTPSDC1.addEventHandler("onrowposchanged", this.fn_Search01, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRENFC_CODE.addEventHandler("onitemchanged", this.cmbSHRENFC_CODE_onitemchanged, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_RTPSDC1.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTPSDC2.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.stInformation00.addEventHandler("onclick", this.stInformation02_onclick, this);

        };

        this.loadIncludeScript("PAYF0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
