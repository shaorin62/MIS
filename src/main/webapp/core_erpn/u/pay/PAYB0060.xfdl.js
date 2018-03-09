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
                this.set_name("PAYB0060");
                this.set_titletext("건강보험공제적용");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsISTY_CODE</Col><Col id=\"CODEID\">ISTY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRISTY_CODE</Col><Col id=\"CODEID\">ISTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"HEADFLAG\">ALL</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"CODEID\">CLSD_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_NHICDE", this);
            obj._setContents("<ColumnInfo><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_MOAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTIN_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"HIDI_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RICP_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HINP_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMT1\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REPP_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnFormDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormUp", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "247", "71", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "329", "71", "22", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "352", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "548", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image0", "absolute", "205", "71", "41", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "480", "71", "68", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "29", "71", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("적용년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "676", "71", "68", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("보험구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRISTY_CODE", "absolute", "744", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("stInformation", "absolute", "8", "107", "248", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_NHICDE", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_binddataset("dsPY_NHICDE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"127\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"주민등록번호\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"직원구분\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보수월액\"/><Cell col=\"6\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"보험증번호\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"보험구분\"/><Cell col=\"8\" colspan=\"2\" displaytype=\"text\" text=\"고지금액\"/><Cell col=\"10\" colspan=\"2\" displaytype=\"text\" text=\"납부액\"/><Cell col=\"12\" colspan=\"2\" displaytype=\"text\" text=\"차액\"/><Cell row=\"1\" col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"건강보험료\"/><Cell row=\"1\" col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"장기요양보험료\"/><Cell row=\"1\" col=\"10\" style=\"background: ;\" text=\"건강보험료\"/><Cell row=\"1\" col=\"11\" style=\"background: ;\" text=\"장기요양보험료\"/><Cell row=\"1\" col=\"12\" style=\"background: ;\" text=\"건강보험료\"/><Cell row=\"1\" col=\"13\" style=\"background: ;\" text=\"장기요양보험료\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:RERN_NUMB\" mask=\"######-#######\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CLSD_NAME\" editlimit=\"0\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAYX_MOAT\" editlimit=\"15\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:HTIN_NUMB\" editlimit=\"20\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:ISTY_CODE\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:HIDI_AMOT\" editlimit=\"15\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RICP_AMOT\" editlimit=\"15\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HINP_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REPP_AMOT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT1\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT2\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"4\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PAYX_MOAT')\" mask=\"#,###.##\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('HIDI_AMOT')\" mask=\"#,###.##\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('RICP_AMOT')\" mask=\"#,###.##\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('HINP_AMOT')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('REPP_AMOT')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMT1')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMT2')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("건강보험공제적용");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("32");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("44");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건강보험공제적용");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYB0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0060 건강보험공제적용
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.19		고민주		Initial Created.
         *   2016.10.11		안윤준		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYB0060";

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
        	var month = this.fnc_Trim(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6));
        	this.divSHRSTDS_YMTH.fn_SetMonth(month);
        	this.divSHRSTDS_YMTH.setFocus();

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
        	this.fnc_DatasetClear("dsPY_NHICDE");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_NHICDE=dsPY_NHICDE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_NHICDE.insertRow(this.dsPY_NHICDE.rowposition+1);
        	this.dsPY_NHICDE.setColumn(iRow, "ISTY_CODE", "01");
        	this.dsPY_NHICDE.setColumn(iRow, "PAYX_MOAT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "HIDI_AMOT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "RICP_AMOT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "HINP_AMOT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "REPP_AMOT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "AMT1", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "AMT2", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "REPP_AMOT", 0);
        	this.dsPY_NHICDE.setColumn(iRow, "STDS_YMTH", this.divSHRSTDS_YMTH.fn_GetMonth());
        	this.fnc_GridSetCellFocus(this.grdPY_NHICDE, "EMPL_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_NHICDE.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsPY_NHICDE.getColumn(i,"CHK") == "1"){
        				this.dsPY_NHICDE.deleteRow(i);
        			}
        		}
        		this.grdPY_NHICDE.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_NHICDE");
        	this.grdPY_NHICDE.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_NHICDE=dsPY_NHICDE:U";
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

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_NHICDE", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_NHICDE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth())) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "적용년월", this.divSHRSTDS_YMTH);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_NHICDE.getRowCount() < 1) return this.fnc_Message("TMM007");

        	var iSelectRowCount = this.dsPY_NHICDE.getCaseCount("CHK == '1'");

        	if ( iSelectRowCount > 1 ) {
        		return this.fnc_Message("TMM004", iSelectRowCount);

        	} else if ( iSelectRowCount == 1 ){
        		var sQuestionText = "성명:" + this.fnc_Trim(this.dsPY_NHICDE.getColumn(this.dsPY_NHICDE.rowposition, "EMPL_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);

        	} else if ( iSelectRowCount == 0 ) {
        		return this.fnc_Message("TMM007");

        	}

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_NHICDE")) return this.fnc_Message("TMM003");

        	for (var i = 0; i < this.dsPY_NHICDE.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_NHICDE.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICDE.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_NHICDE, i, this.grdPY_NHICDE, "EMPL_NUMB");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICDE.getColumn(i, "RERN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "주민등록번호", this.dsPY_NHICDE, i, this.grdPY_NHICDE, "RERN_NUMB");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICDE.getColumn(i, "EMPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsPY_NHICDE, i, this.grdPY_NHICDE, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_NHICDE.getColumn(i, "ISTY_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "보험구분", this.dsPY_NHICDE, i, this.grdPY_NHICDE, "ISTY_CODE");
        		}
        	}

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentsType) {

        	var sReturnString;
        	var sRERN_NUMB = this.fnc_Replace(sContentsType, "-", "");
        	
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " ISTY_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRISTY_CODE.value));
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value));

        	} else if (sKind == "SEARCH99") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " RERN_NUMB=" + this.fnc_Quote(sRERN_NUMB);		
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.divSHRSTDS_YMTH.fn_GetMonth());

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.divSHRSTDS_YMTH.fn_GetMonth());
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsPY_NHICDE.getColumn(this.dsPY_NHICDE.rowposition, "EMPL_NUMB"));
        		
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPY_NHICDE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_NHICDE.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdPY_NHICDE.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_NHICDE);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "SAVE02") {
        		this.fn_KeyFieldDisible(this.dsPY_NHICDE);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCLSD_CODE,dsCLSD_CODE,0";
        			arrParam[1] = "GRID,grdPY_NHICDE,dsISTY_CODE,ISTY_CODE";
        			arrParam[2] = "COMBO,cmbSHRISTY_CODE,dsSHRISTY_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_NHICDE.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICDE, "EMPL_NAME"), "edittype", "text");
        		this.grdPY_NHICDE.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICDE, "ISTY_CODE"), "edittype", "combo");

        	} else {
        		this.grdPY_NHICDE.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICDE, "EMPL_NAME"), "edittype", "none");
        		this.grdPY_NHICDE.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_NHICDE, "ISTY_CODE"), "edittype", "none");

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

        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	} else if (obj.name == "grdPY_NHICDE") {
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {
        			arrParam[0] = "HRM0002";
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_NHICDE";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,RERN_NUMB,CLSD_NAME";
        			arrParam[6] = "0,1,32,17";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        	}

            if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*--------------------------+
         |  DATASET COLUMN 변경 시  |
         +--------------------------*/
        this.dsPY_NHICDE_OnColumnChanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_NHICDE, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "HIDI_AMOT" ) { // (고지)건강보험료
        		var sHIDI_AMOT = nexacro.toNumber(this.dsPY_NHICDE.getColumn(e.row, "HIDI_AMOT"),0); // (고지)건강보험료
        		var sHINP_AMOT = nexacro.toNumber(this.dsPY_NHICDE.getColumn(e.row, "HINP_AMOT"),0); // (납부)건강보험료
        		this.dsPY_NHICDE.setColumn(e.row, "AMT1", sHIDI_AMOT - sHINP_AMOT );
        		
        	}
        	
        	if ( e.columnid == "RICP_AMOT" ) { // (고지) 장기요양보험료
        		var sRICP_AMOT = nexacro.toNumber(this.dsPY_NHICDE.getColumn(e.row, "RICP_AMOT"),0); // (고지)장기요양보험료
        		var sREPP_AMOT = nexacro.toNumber(this.dsPY_NHICDE.getColumn(e.row, "REPP_AMOT"),0); // (납부)장기요양보험료
        		this.dsPY_NHICDE.setColumn(e.row, "AMT2", sRICP_AMOT - sREPP_AMOT);
        	
        	}

        }

        /*----------------------+
         |  그리드 헤더 클릭 시  |
         +---------------------*/
        this.grdPY_NHICDE_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsPY_NHICDE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsPY_NHICDE");
        	this.fnc_ExcelUpload("dsPY_NHICDE", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	this.dsPY_NHICDE.set_enableevent(false);
        	this.dsPY_NHICDE.set_updatecontrol(false);
        	
        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM025", "Update 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        	
        		if ( this.objDsImportTemp.getCaseCount(" Column1 == '" + this.objDsImportTemp.getColumn(i, 1) + "'" ) > 1 ) {
        			this.fnc_Message("TMM077", "주민번호 " + this.objDsImportTemp.getColumn(i, 1));
        			return false;
        		}
        	}
        	
        	this.grdPY_NHICDE.set_enableredraw(false);
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		
        		var iRow = this.dsPY_NHICDE.addRow();
        		this.dsPY_NHICDE.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		var sMethodName = "SEARCH99";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        		var sArgument   = this.fn_CreateArgument(sMethodName, this.objDsImportTemp.getColumn(i, 1));
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		
        		this.dsPY_NHICDE.setColumn(iRow, "RERN_NUMB", this.dsHR_MASTXM.getColumn(0,"RERN_NUMB"));
        		this.dsPY_NHICDE.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(0,"EMPL_NUMB"));
        		this.dsPY_NHICDE.setColumn(iRow, "EMPL_NAME", this.dsHR_MASTXM.getColumn(0,"EMPL_NAME"));
        		this.dsPY_NHICDE.setColumn(iRow, "HTIN_NUMB", this.objDsImportTemp.getColumn(i,2));         // 보험증번호
        		this.dsPY_NHICDE.setColumn(iRow, "PAYX_MOAT", this.objDsImportTemp.getColumn(i,3));         // 보수월액
        		this.dsPY_NHICDE.setColumn(iRow, "ISTY_CODE", this.objDsImportTemp.getColumn(i,4));         // 보험구분코드
        		this.dsPY_NHICDE.setColumn(iRow, "HIDI_AMOT", this.objDsImportTemp.getColumn(i,5));         // 고지금액건강보험료
        		this.dsPY_NHICDE.setColumn(iRow, "RICP_AMOT", this.objDsImportTemp.getColumn(i,6));         // 고지금액장기요양보험
        		this.dsPY_NHICDE.setColumn(iRow, "STDS_YMTH", this.divSHRSTDS_YMTH.fn_GetMonth());
        	
        	}
        	
        	this.grdPY_NHICDE.set_enableredraw(true);
        	this.objDsImportTemp.clear();
        	this.dsPY_NHICDE.set_updatecontrol(true);
        	this.dsPY_NHICDE.set_enableevent(true);
        	
        	this.dsPY_NHICDE.set_rowposition(0);
        	this.grdPY_NHICDE.setFocus();
        	
        	this.stInformation.set_text("[" + (this.dsPY_NHICDE.rowcount + "]건의 데이터를 로드 했습니다."));

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_NHICDE.addEventHandler("oncolumnchanged", this.dsPY_NHICDE_OnColumnChanged, this);
            this.dsPY_NHICDE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRISTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_NHICDE.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_NHICDE.addEventHandler("onheadclick", this.grdPY_NHICDE_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYB0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
