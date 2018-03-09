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
                this.set_name("FSMB0030");
                this.set_titletext("자산일괄변동관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsASCH_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHFM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHNG_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_GRDC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT2\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"CODD_REF1\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ASCH_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHFM_M", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASCH_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACHG_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPS_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DSPS_GILS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_ASCHFM_M", "absolute", "8", "154", null, "239", "25", null, this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASCHFM_M");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"130\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"일괄변동대체번호\"/><Cell col=\"1\" text=\"변동구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"변동일자\"/><Cell col=\"3\" displaytype=\"text\" text=\"처분가액\"/><Cell col=\"4\" text=\"부가세\"/><Cell col=\"5\" text=\"처분손익\"/><Cell col=\"6\" colspan=\"2\" text=\"거래처\"/><Cell col=\"8\" text=\"적요\"/><Cell col=\"9\" displaytype=\"text\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:ASCH_NUMB\" mask=\"expr:ASCH_NUMB.toString().length == 0 ? &quot;&quot; : &quot;@@@@-########-####&quot;\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:ASCH_GUBN\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:DSPS_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSPS_GILS\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:CUST_CODE\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CUST_NAME\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:DESC_REMK\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHFM", "absolute", "8", "418", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASCHFM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"69\" band=\"left\"/><Column size=\"95\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"자산분류\"/><Cell col=\"1\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"2\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"4\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"5\" displaytype=\"text\" text=\"부서\"/><Cell col=\"6\" displaytype=\"text\" text=\"취득가기말잔액\"/><Cell col=\"7\" text=\"충당금기말잔액\"/><Cell col=\"8\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"9\" displaytype=\"text\" text=\"변동금액(취득가)\"/><Cell col=\"10\" text=\"처분가액\"/><Cell col=\"11\" text=\"부가세액\"/><Cell col=\"12\" displaytype=\"normal\" text=\"처분손익\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:ASCL_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CLSF_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:ASST_NAME\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:ACQS_DATE\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:ACQU_ENDX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPCT_ENDX\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:UNDP_BALE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:CHNG_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSPS_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSPS_GILS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "8", "397", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "250", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnAsstAdd", "absolute", "0", "0", "122", "21", null, null, this.Div0);
            obj.set_taborder("5");
            obj.set_text("자산일괄변동등록");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnAPPL", "absolute", "125", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("7");
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "97", "88", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "88", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("일괄변동기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRASTF_DAT1", "absolute", "124", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static27", "absolute", "227", "71", "14", "22", null, null, this);
            obj.set_taborder("34");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRASTF_DAT2", "absolute", "245", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "124", "97", "221", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("true");

            obj = new Static("Static7", "absolute", "366", "96", "65", "23", null, null, this);
            obj.set_taborder("37");
            obj.set_text("귀속부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_DEPT", "absolute", "434", "97", "61", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_NAME", "absolute", "520", "97", "113", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCURR_DEPT", "absolute", "497", "97", "22", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("자산일괄변동관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("45");
            obj.set_text("홈 > 자산관리 > 자산일괄변동관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("46");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("54");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("56");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "175", "118", "38", "10", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "175", "92", "102", "5", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "175", "61", "38", "10", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("60");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "412", "216", "6", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "393", "80", "25", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 250, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산일괄변동관리");
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
        this.addIncludeScript("FSMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0030 자산일괄변동관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
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
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FSMB0030"; //해당 Form에서 사용 할 Package 명
        this.sFORM_IDXX 	= "FSMB0030"; //전표팝업을 위함

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASCHFM_M, "SLIP_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calSHRASTF_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 6) + '01'));
        	this.calSHRASTF_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));

        	// 매각처리시에는 귀속부서 필수값
        	//if (this.sUSERLAVEL != "5") {
        	//	this.edtCURR_DEPT.set_value(application.GBL_DEPTCD);
        	//	this.edtCURR_NAME.set_value(application.GBL_DEPTNM);
        	//	this.edtCURR_NAME.UserData = application.GBL_DEPTNM;
        	//}
        	
        	this.calSHRASTF_DAT1.setFocus();
        	
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();	
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear("dsFS_ASCHFM_M,dsFS_ASCHFM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASCHFM_M=dsFS_ASCHFM_M";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHFM_M.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (!this.fn_DeleteCheck()) return;
        	
        	var sMethodName = "DELETE00";
        	var sInDataSet 	= "dsFS_ASCHFM=dsFS_ASCHFM";
        	var sOutDataSet = "dsFS_ASCHFM=dsFS_ASCHFM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHFM_M.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHFM, dsFS_ASCHFM_M",this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHFM_M")) return this.fnc_Message("TMM023");

        	if ((this.fnc_Trim(this.calSHRASTF_DAT1.value) > this.fnc_Trim(this.calSHRASTF_DAT2.value)) && 
        		(this.fnc_Length(this.fnc_Trim(this.calSHRASTF_DAT1.value)) > 0 && this.fnc_Length(this.fnc_Trim(this.calSHRASTF_DAT2.value)) > 0)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "대체기간(시작일),대체기간(종료일)", this.calSHRBASE_DAT2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASCHFM_M.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "조회 후 삭제하세요!");
        		return;
        	}

        	var sSlipNumb = this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "SLIP_NUMB"));
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) == 14) {
        		this.fnc_Message("TMM125", "전표생성 된 자료입니다.\n\n삭제가 불가합니다.!");
        		return;
        	}

        	var sASCH_NUMB = this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_NUMB"));
        	var sQuestionText = "자산일괄대체번호: " + sASCH_NUMB + " 을(를) 삭제 ";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT1.value)); //대체기간(시작일)
        		sReturnString += " ASTF_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT2.value)); //대체기간(종료일)
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtCURR_DEPT.value));  //귀속부서

        	// 디테일 조회 Argument 생성
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASCH_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_NUMB"))); //변동대체번호

        	// 전표 생성
        	} else if (sKind == 'PROC00') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FORM_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); //화면ID
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " CURR_DEPT=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtCURR_DEPT.value)); //매각 전표처리시 필요한 귀속부서
        		sReturnString += " ASCH_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_GUBN"))); //변동구분
        		sReturnString += " DSPS_GILS=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "DSPS_GILS"))); //처분손익
        		sReturnString += " CHNG_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "CHNG_DATE"))); //변동일자(삭제조건)
        		sReturnString += " ASCH_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_NUMB"))); //변동대체번호(삭제조건)
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim('FS002')); // 전표유형구분
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(this.fnc_Trim('FSMB0030')); // 출처연결키
        		
        		

        	// 전표삭제 Argument 생성
        	} else if (sKind == 'DELETE00') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT1.value)); //대체기간(시작일)
        		sReturnString += " ASTF_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT2.value)); //대체기간(종료일)
        		sReturnString += " ASCH_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_NUMB"))); //변동대체번호(삭제조건)
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

        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation00, this.dsFS_ASCHFM_M.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASCHFM_M.rowcount);

        	} else if (sMethodName == 'SEARCH01') {
        		
        		this.fnc_Information(this.stInformation01, this.dsFS_ASCHFM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	// 전표보기
        	} else if (sMethodName == 'PROC00') {
        		
        		//var sResponse = this.fnc_PopSlipForm('', 'SEM', this.sUSERLAVEL, '', this.sFORM_IDXX);
        		//trace("-----sResponse: " + sResponse);

        		this.fnc_Message("TMM130", "자산변동관리 전표생성");
        		this.fn_Search();
        		
        	} else if (sMethodName == 'DELETE00') {
        		
        		// 헤더가 조회된게 없었을때 디테일을 클리어 시켜준다.
        		if (this.dsFS_ASCHFM_M.rowcount == 0) {
        			this.fnc_DatasetClear('dsFS_ASCHFM'); //기 조회 자료 초기화
        			this.fnc_Information(this.stInformation01, 0, "SHR");
        		}

        		this.fnc_Information(this.stInformation00, this.dsFS_ASCHFM_M.rowcount, "SHR");
        		this.fnc_Message("TMM041");
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		 var arrParam = new Array();
        		 arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	//상각방법(입력)
        		 arrParam[1]  = "GRID,grdFS_ASCHFM_M,dsASCH_GUBN,ASCH_GUBN";
        		 this.fnc_CommonCodeInnerBind(arrParam);
        		 		
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	// 전표번호에 따른 버튼 권한
        	if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) != 14) {
        		// 전표처리 하지 않은것
        		this.Div0.btnAPPL.set_enable(true);
        	} else {
        		this.Div0.btnAPPL.set_enable(false);
        	}

        	this.fn_Search01(obj, e.oldrow, e.newrow); //디테일 조회
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------+
         |  디테일 조회  |
         +---------------*/
        this.fn_Search01 = function (obj,nOldRow,nRow) {

        	if (this.dsFS_ASCHFM_M.getRowCount() < 1) return;

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_ASCHFM=dsFS_ASCHFM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdFS_ASCHFM.setFocus();
        }

        
        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {

        	// 전표번호 없을때 리턴처리
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(e.row, "SLIP_NUMB"))) < 1) return;

        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdFS_ASCHFM_M, "SLIP_NUMB") == e.cell) {
        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASCHFM_M.getColumn(e.row, "SLIP_NUMB"));
        		//trace("SLIP_NUMB: " + sSLIP_NUMB);

        		// 전표보기.
        		var sResponse = this.fnc_PopSlipForm(sSLIP_NUMB, "REV", this.sUSERLAVEL);
        		//trace("sResponse: " + this.fnc_Length(this.fnc_Trim(sResponse)));
        		
        		this.fn_Search(); //}
        	}
        	
        }

        
        /*---------------------------+
         |  자산일괄변동등록 클릭시 처리  |
         +---------------------------*/
        this.fn_AsstAdd = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHFM_M")) {
        		this.fnc_Message("TMM125", '자산일괄변동전표를 삭제하려고 선택한 자료가 있습니다\n.취소 후 등록 작업을 실행 하세요!');
        		return;
        	}
        	
        	var strName = "FSMB0030P01";							//입력-자산번호
        	var strFormURL = "fsm::FSMB0030P01.xfdl";
        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";                //현재 반응 없음
        		sOpenStyle += ",height=800";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=자산일괄변동";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        	
        	var objArgumentList = "";
        	this.fnc_OpenPopup(strName, strFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");

        }

        /*------------------+
         |  팝업 Callback!  |
         +------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {

        	var sResponse = this.fnc_GetPopupRtn();
        	
        	if (sPopupId == "FSMB0030P01") {	// 자산일괄변동등록
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) this.fn_Search();
        		
        	} 
        	
        }

        
        /*------------------------------+
         |  전표 생성
         +-------------------------------*/
        this.btnAPPL_onclick = function (obj,e) {

        	var rSLIP_NUMB = this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "SLIP_NUMB");
        	var rASCH_GUBN = this.dsFS_ASCHFM_M.getColumn(this.dsFS_ASCHFM_M.rowposition, "ASCH_GUBN");
        	//trace("--rSLIP_NUMB: " + this.fnc_Trim(rSLIP_NUMB));

        	if (this.fnc_Length(this.fnc_Trim(rSLIP_NUMB)) != 14) {
        	} else {
        		this.fnc_Message("TMM125", "전표처리된 변동자산 입니다");
        		return;
        	}

        	// 매각일경우 귀속부서 체크확인
        	if (this.fnc_Trim(rASCH_GUBN) == "SAAL") { 
        		if (this.fnc_Length(this.fnc_Trim(this.edtCURR_DEPT.value)) != 6) {
        			this.fnc_Message("TMM125", "귀속부서를 확인 하시기 바랍니다");
        			this.edtCURR_NAME.setFocus();
        			return;
        		}
        	}

        	if (!this.fnc_Message("BC1006", "전표생성")) return;

        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsFS_ASCHFM=dsFS_ASCHFM:A";
        	var sOutDataSet = "dsFS_ASCHFM=dsFS_ASCHFM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpCURR_DEPT") || (obj.name == "edtCURR_NAME")) {
            
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtCURR_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCURR_NAME";
                arrParam[5] = "edtCURR_DEPT,edtCURR_NAME";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } 	
        		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASCHFM_M.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASCHFM_M.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.grdFS_ASCHFM_M.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.grdFS_ASCHFM_M.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdFS_ASCHFM.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.Div0.btnAsstAdd.addEventHandler("onclick", this.fn_AsstAdd, this);
            this.Div0.btnAPPL.addEventHandler("onclick", this.btnAPPL_onclick, this);
            this.calSHRASTF_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRASTF_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCURR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpCURR_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
