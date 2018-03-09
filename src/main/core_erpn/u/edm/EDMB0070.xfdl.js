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
                this.set_name("EDMB0070");
                this.set_titletext("사원별교육현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsED_EDRSLT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"6\"/><Column id=\"EDRT_SEQN\" type=\"STRING\" size=\"5\"/><Column id=\"EDUC_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"EDUC_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"EDSB_NAME\" type=\"STRING\" size=\"200\"/><Column id=\"EDUC_INNM\" type=\"STRING\" size=\"50\"/><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EDCD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"EDUC_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"EDUP_CODE\" type=\"STRING\" size=\"50\"/><Column id=\"EDUC_COST\" type=\"STRING\" size=\"15\"/><Column id=\"EDEV_CODE\" type=\"STRING\" size=\"50\"/><Column id=\"ACQS_CRDT\" type=\"STRING\" size=\"2\"/><Column id=\"EDEV_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"RFND_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"200\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"30\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC3_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC3_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDCD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDEV_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDEV_YSNM\" type=\"STRING\" size=\"256\"/><Column id=\"RFND_YSNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHREDCD_CODE</Col><Col id=\"CODEID\">EDCD_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHREDC1_CODE</Col><Col id=\"COMBOID\">EDM0105</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsSHREDC2_CODE</Col><Col id=\"COMBOID\">EDM0106</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsSHREDC3_CODE</Col><Col id=\"COMBOID\">EDM0107</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC1_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC2_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC3_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("7");
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
            obj.set_text("사원별교육현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "134", "262", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "75", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("교육기간 ");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "95", "61", "8", "67", null, null, this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("12");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdED_EDRSLT", "absolute", "8", "154", null, null, "25", "16", this);
            obj.set_taborder("48");
            obj.set_binddataset("dsED_EDRSLT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"62\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"일련&#13;&#10;번호\"/><Cell col=\"5\" text=\"교육시작일\"/><Cell col=\"6\" text=\"교육종료일\"/><Cell col=\"7\" text=\"교육명\"/><Cell col=\"8\" text=\"대분류\"/><Cell col=\"9\" text=\"중분류\"/><Cell col=\"10\" text=\"소분류\"/><Cell col=\"11\" text=\"교육구분\"/><Cell col=\"12\" text=\"교육&#13;&#10;기간\"/><Cell col=\"13\" text=\"기간&#13;&#10;단위\"/><Cell col=\"14\" text=\"교육금액\"/><Cell col=\"15\" text=\"교육평가\"/><Cell col=\"16\" text=\"이수&#13;&#10;학점\"/><Cell col=\"17\" text=\"평가여부\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" text=\"bind:EDRT_SEQN\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDUC_BEDE\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDUC_ENDD\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:EDSB_NAME\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:EDC1_NAME\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:EDC2_NAME\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:EDC3_NAME\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EDCD_NAME\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:EDUC_PROD\" mask=\"#\"/><Cell col=\"13\" text=\"bind:EDUP_NAME\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:EDUC_COST\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EDEV_NAME\"/><Cell col=\"16\" edittype=\"none\" text=\"bind:ACQS_CRDT\"/><Cell col=\"17\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EDEV_YSNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREDUC_BEDE", "absolute", "103", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "205", "71", "14", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREDUC_ENDD", "absolute", "220", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "385", "71", "80", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "467", "71", "21", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "490", "71", "100", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "325", "71", "52", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "873", "96", "77", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("교육구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "90", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("대분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "325", "97", "70", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("중분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREDC2_CODE", "absolute", "385", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_displayrowcount("-1");
            obj.style.set_buttonsize("20");
            obj.set_index("-1");

            obj = new Static("Static51", "absolute", "1141", "549", "20", "152", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "598", "97", "70", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("소분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREDC1_CODE", "absolute", "103", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.style.set_buttonsize("20");

            obj = new Combo("cmbSHREDC3_CODE", "absolute", "659", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_index("-1");

            obj = new Combo("cmbSHREDCD_CODE", "absolute", "946", "97", "104", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");

            obj = new Static("Static22", "absolute", "378", "61", "8", "67", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "651", "61", "8", "67", null, null, this);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", "61", "20", "67", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "599", "71", "52", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("직무");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_CODE", "absolute", "659", "71", "80", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDUTY_CODE", "absolute", "741", "71", "21", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_NAME", "absolute", "764", "71", "100", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "873", "71", "52", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "938", "61", "8", "67", null, null, this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "946", "71", "80", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "1051", "71", "100", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "1028", "71", "21", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "590", "61", "20", "67", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "864", "61", "20", "67", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사원별교육현황");

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
        this.addIncludeScript("EDMB0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EDMB0070.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		사원별교육현황을 조회한다.
         * @category	 	교육관리/교육관리/사원별교육현황
         * @author	        김혜림
         * @cdate	  		2016.09.19
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
        this.sBUTTONLIST  = "TTFFTFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EDMB0070"; 
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
        	this.cmbSHREDC2_CODE.enable=false;
            this.cmbSHREDC3_CODE.enable=false;
        	this.fnc_GetComboDs(this.dsCombo); //콤보 조회 
            this.fn_GetUserCombo("cmbSHREDC1_CODE");//교육기간 대분류 콤보(조회조건) - 조회조건은 하위분류 DB값 조회
        	this.calSHREDUC_BEDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) + "01");
        	this.calSHREDUC_ENDD.set_value(this.fnc_GetServerDateTime("DATE")); 
        	this.calSHREDUC_BEDE.setFocus();
        	
        	 	
            /*권한에 따라 사원번호 수정 가능여부 결정*/
            /*★개발을 위해 권한 level을 1로 셋팅*/
            // this.sUSERLAVEL = 1;
                	
        	 /* switch(this.sUSERLAVEL){
        		 case 1: 
                 this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
                 this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
                 break;
               }
                	
            this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
            this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);*/
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
        	this.fnc_DatasetClear("dsED_EDRSLT");
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsED_EDRSLT=dsED_EDRSLT";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdED_EDRSLT.setFocus();
        	

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

        	this.fnc_DataSetCancel("dsSHREDC1_CODE,dsSHREDC2_CODE,dsSHREDC3_CODE,dsED_EDRSLT");
        	this.edtSHRDEPT_CODE.set_value("");
        	this.edtSHRDEPT_NAME.set_value("");
        	this.edtSHRDUTY_CODE.set_value("");
        	this.edtSHRDUTY_NAME.set_value("");
        	this.edtSHREMPL_NUMB.set_value("");
            this.edtSHREMPL_NAME.set_value("");
            this.fn_GetUserCombo("cmbSHREDC1_CODE");//교육기간 대분류 콤보
            this.calSHREDUC_BEDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) + "01");
        	this.calSHREDUC_ENDD.set_value(this.fnc_GetServerDateTime("DATE")); 
        	this.cmbSHREDCD_CODE.set_index(0);
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

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
        	var sMessage = this.fnc_FormUnloadCheck("dsED_EDRSLT", this);

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
        		
        	if (this.fnc_DatasetChangeCheck("dsED_EDRSLT")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHREDUC_BEDE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "교육기간 시작일", this.calSHREDUC_BEDE);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHREDUC_ENDD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "교육기간 종료일", this.calSHREDUC_ENDD);
        	}
        	
        	if (this.calSHREDUC_BEDE.value > this.calSHREDUC_ENDD.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "교육기간 시작일,종료일", this.calSHREDUC_BEDE);
        	}

        
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

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
        		sReturnString += " DEPT_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " DUTY_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHRDUTY_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EDC1_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC1_CODE.value)); 
        		sReturnString += " EDC2_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC2_CODE.value)); 
        		sReturnString += " EDC3_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC3_CODE.value)); 
        		sReturnString += " EDUC_BEDE=" 		 + this.fnc_Quote(this.fnc_Trim(this.calSHREDUC_BEDE.value)); 
        		sReturnString += " EDUC_ENDD=" 		 + this.fnc_Quote(this.fnc_Trim(this.calSHREDUC_ENDD.value));  
        		sReturnString += " EDCD_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDCD_CODE.value));  		
        	
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

        	if (sMethodName == 'SEARCH00') { //조회EMPL_NUMB	
        		this.dsED_EDRSLT.set_rowposition(0);
        		this.fnc_Information(this.stInformation, this.dsED_EDRSLT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsED_EDRSLT.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} else if (sMethodName == "GetCommCode")  { //공통코드 
        		var arrParam = new Array();
            	arrParam[0] = "COMBO,cmbSHREDCD_CODE,dsSHREDCD_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}else if (sMethodName == "GetUserComboCodeSingle")  {
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

        /*-------------------------------+
         | 조회조건 대/중/소분류 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
            if(oComboId=="cmbSHREDC1_CODE"){ //조회조건 대분류
            	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC1_CODE,dsSHREDC1_CODE,0";
        	    
        	}else if(oComboId=="cmbSHREDC2_CODE"){//조회조건 중분류
        		this.dsUserCombo.setColumn(1, "PARAM", this.cmbSHREDC1_CODE.value);
        	    arrParam[0] = this.dsUserCombo.getColumn(1, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(1, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(1, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(1, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(1, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC2_CODE,dsSHREDC2_CODE,0";
        	    
        	}else if(oComboId=="cmbSHREDC3_CODE"){//조회조건 소분류
        		var strParam = this.cmbSHREDC1_CODE.value + ","+this.cmbSHREDC2_CODE.value;
        		this.dsUserCombo.setColumn(2, "PARAM", strParam);
        		
        		arrParam[0] = this.dsUserCombo.getColumn(2, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(2, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(2, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(2, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(2, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC3_CODE,dsSHREDC3_CODE,0";
        	}
        		
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function(obj,e)
        {
        	var arrParam = new Array();
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = this.edtSHRDEPT_CODE.value + "%";			//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);//콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}// 조회조건 - 사원정보조회(Popup)
        	else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}// 조회조건 - 직무조회(Popup)
        	else if ((obj.name == "imgHelpSHRDUTY_CODE") || (obj.name == "edtSHRDUTY_NAME")) {
        		arrParam[0] = "EDM0110";
        		arrParam[1] = this.edtSHRDUTY_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDUTY_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDUTY_NAME";
        		arrParam[5] = "edtSHRDUTY_CODE,edtSHRDUTY_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
          
        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Event 처리 부분                           *
         ***************************************************************************************************/
        /*---------------------------------+
         | 조회조건 대분류 이벤트|
         +--------------------------------*/
        this.cmbSHREDC1_CODE_onitemchanged = function(obj,e) //대분류 선택했을떄 중분류 나타내기
        {	if(this.cmbSHREDC1_CODE.text!="전체"){
        		this.cmbSHREDC2_CODE.enable= true;
        		this.dsSHREDC2_CODE.clearData();
        		this.dsSHREDC3_CODE.clearData();
        		this.fn_GetUserCombo("cmbSHREDC2_CODE");

        	}
        }
        /*---------------------------------+
         | 조회조건 중분류 이벤트|
         +--------------------------------*/
        this.cmbSHREDC2_CODE_onitemchanged = function(obj,e)//중분류 선택했을떄 소분류 나타내기
        {	if(this.cmbSHREDC2_CODE.text!="전체"){
        		this.cmbSHREDC3_CODE.enable= true;
        		this.dsSHREDC3_CODE.clearData();
        		this.fn_GetUserCombo("cmbSHREDC3_CODE");
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsED_EDRSLT.addEventHandler("onrowposchanged", this.dsED_EDRSLT_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static30.addEventHandler("onclick", this.Static30_onclick, this);
            this.grdED_EDRSLT.addEventHandler("onexpanddown", this.fn_HelpDialoge_Grid, this);
            this.grdED_EDRSLT.addEventHandler("oncellclick", this.grdED_EDRSLT_oncellclick, this);
            this.calSHREDUC_BEDE.addEventHandler("oneditclick", this.calSHREDUC_BEDE_oneditclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static52.addEventHandler("onclick", this.Static52_onclick, this);
            this.cmbSHREDC2_CODE.addEventHandler("onitemchanged", this.cmbSHREDC2_CODE_onitemchanged, this);
            this.cmbSHREDC1_CODE.addEventHandler("onitemchanged", this.cmbSHREDC1_CODE_onitemchanged, this);
            this.Static15.addEventHandler("onclick", this.Static52_onclick, this);
            this.imgHelpSHRDUTY_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static31.addEventHandler("onclick", this.Static52_onclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("oneditclick", this.edtSHREMPL_NAME_oneditclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("EDMB0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
