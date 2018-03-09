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
                this.set_name("PACA0011");
                this.set_titletext("세금계산서입력");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">TAXX_TYPE</Col><Col id=\"DSNAME\">dsTAXX_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_DEND</Col><Col id=\"CODEID\">TAXX_DEND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_TYPE2</Col><Col id=\"CODEID\">TAXX_TYPE2</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTAXX_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">매입세금계산서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">매출세금계산서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">매입계산서</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">매출계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdPD_SATXXH", "absolute", "8", "130", null, null, "25", "343", this);
            obj.set_taborder("137");
            obj.set_binddataset("dsPD_SATXXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("oncolumnchanged").set("dsPD_SUJUMH_oncolumnchanged");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"93\"/><Column size=\"91\"/><Column size=\"74\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"136\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"세금계산서종류\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"세금계산서분류\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"영수구분\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"발행일\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구일\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공급자 사업자번호\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공급자명\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공급받는자 사업자번호\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"12\" style=\"background: ;\" text=\"세액\"/><Cell col=\"13\" style=\"background: ;\" text=\"합계금액\"/><Cell col=\"14\" style=\"background: ;\" text=\"내역\"/><Cell col=\"15\" style=\"background: ;\" text=\"세금계산서번호\"/><Cell col=\"16\" style=\"background: ;\" text=\"광고주대표자명\"/><Cell col=\"17\" style=\"background: ;\" text=\"광고주 주소\"/><Cell col=\"18\" style=\"background: ;\" text=\"광고주 상세주소1\"/><Cell col=\"19\" style=\"background: ;\" text=\"광고주 상세주소2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_GUBN\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:SUP_COM_REGNO\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:SUP_COM_NAME\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:BIZR_NUMB\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:CUST_CODE\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TAXX_SANB\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:OWNR_NAME\"/><Cell col=\"17\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:ADDR_DESC\"/><Cell col=\"18\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:DTL1_ADDR\"/><Cell col=\"19\" displaytype=\"normal\" edittype=\"edit\" text=\"bind:DTL2_ADDR\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"10\" style=\"align: center;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "45", "25", null, this);
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
            obj.set_text("세금계산서입력");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>세금계산서입력");
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

            obj = new Static("Static30", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("청구일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "43", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "43", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "124", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDEND_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("109");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "185", "71", "14", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDEND_DATE2", "absolute", "200", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static03", "absolute", "328", "61", "40", "43", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "357", "71", "52", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "-2", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "425", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "507", "71", "21", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "530", "71", "130", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "417", "61", "8", "43", null, null, this);
            obj.set_taborder("132");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SATXXD", "absolute", "8", null, null, "306", "25", "13", this);
            obj.set_taborder("139");
            obj.set_binddataset("dsPD_SATXXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"세금계산서순번\"/><Cell col=\"3\" text=\"세금계산서ID\"/><Cell col=\"4\" text=\"광고주코드\"/><Cell col=\"5\" text=\"광고주명\"/><Cell col=\"6\" text=\"품목\"/><Cell col=\"7\" text=\"금액\"/><Cell col=\"8\" text=\"부가세액\"/><Cell col=\"9\" text=\"청구일자\"/><Cell col=\"10\" text=\"발행일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:TAXY_MONT\"/><Cell col=\"2\" text=\"bind:TAXX_NUMB\"/><Cell col=\"3\" text=\"bind:TAXX_IDXX\"/><Cell col=\"4\" text=\"bind:CUST_CODE\"/><Cell col=\"5\" text=\"bind:CUST_NAME\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:ITEM_MEMO\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:PRNT_DATE\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"6\" style=\"align: center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "648", "373", "80", "25", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "648", "105", "80", "25", null, null, this);
            obj.set_taborder("144");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, null, "62", "21", "91", "322", this);
            obj.set_taborder("145");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, null, "62", "21", "26", "322", this);
            obj.set_taborder("146");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "182", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", null, "182", "21", null, "320", this);
            obj.set_taborder("148");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("세금계산서입력");

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
        this.addIncludeScript("PACA0011.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PACA0011.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PACA0011.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0011 제작 세금계산서 입력
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2017.03.06		오세훈		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0011"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calDEND_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.calDEND_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	
        	this.fn_Search();

        } 
        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsPD_SATXXH");
        	this.fnc_DatasetClear("dsPD_SATXXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_SATXXH=dsPD_SATXXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        		
        		var iRow = this.dsPD_SATXXH.insertRow(this.dsPD_SATXXH.rowposition + 1);
        		this.dsPD_SATXXH.set_rowposition(iRow);
        		this.dsPD_SATXXH.setColumn(iRow, "DTIX_TYPE", '01');
        		this.dsPD_SATXXH.setColumn(iRow, "TAXX_GUBN", '01');
        		this.dsPD_SATXXH.setColumn(iRow, "TAXX_DMND", '02');
        		this.dsPD_SATXXH.setColumn(iRow, "PRNT_DATE", this.fnc_GetServerDateTime("DATE"));
        		this.dsPD_SATXXH.setColumn(iRow, "DEND_DATE", this.fnc_GetServerDateTime("DATE"));
        		this.dsPD_SATXXH.setColumn(iRow, "SUP_COM_REGNO", '1188114916');
        		this.dsPD_SATXXH.setColumn(iRow, "SUP_COM_NAME", '(주)농심기획');
        		this.dsPD_SATXXH.setColumn(iRow, "TAXX_AMTX", 0);
        		this.dsPD_SATXXH.setColumn(iRow, "TAXX_VATX", 0);
        		this.dsPD_SATXXH.setColumn(iRow, "SUMM_AMTX", 0);
        	 	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//선택된 데이터 삭제
        	if (!this.fn_DeleteItemCheck()) return;
        	
        	for(var i = this.dsPD_SATXXH.rowcount; i >= 0; i--){
        		if(this.dsPD_SATXXH.getColumn(i, "CHK") == 1){
        			this.dsPD_SATXXH.deleteRow(i);
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPD_SATXXH");
        	this.grdPD_SATXXH.setFocus();
        	
        	this.fnc_DataSetCancel("dsPD_SATXXD");
        	this.grdPD_SATXXD.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_SATXXH")){
        		if (!this.fn_SaveItemCheck()) return;
        		
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_SATXXH=dsPD_SATXXH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_SATXXD")){
        		if (!this.fn_SaveItemCheckDTL()) return;
        		
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsPD_SATXXD=dsPD_SATXXD:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false && this.fnc_DatasetChangeCheck("dsPD_SATXXD") == false){
        		this.fnc_Message("TMM003");
        		return false;
        	}
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
        	// 기능없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
        }

        /*-----------------------------------+
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
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_SATXXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	if(this.fnc_IsDate(this.calDEND_DATE1.value) == false || this.fnc_IsDate(this.calDEND_DATE2.value) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsPD_SATXXH.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_SATXXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "CUST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "광고주", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "DEND_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "청구일", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "PRNT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발행일", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "DTIX_TYPE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세금계산서종류", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "TAXX_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세금계산서분류", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "TAXX_DMND"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "영수구분", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "SUP_COM_REGNO"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공급자사업자번호", this.dsPD_SATXXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공급자명", this.dsPD_SATXXH, i, '', '');
        		}
        	}
        	

        	return true;
        }

        this.fn_SaveItemCheckDTL = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	
        	var iSUMAMT =  this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_AMTX");
        	var iSUMVAT =  this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_VATX");
        	var iAMT = 0;
        	var iVAT =0;
        	
        	for(var i=0; i < this.dsPD_SATXXD.rowcount; i++){
        		iAMT += this.dsPD_SATXXD.getColumn(i,"TAXX_AMTX");
        		iVAT += this.dsPD_SATXXD.getColumn(i,"TAXX_VATX");
        	}
        	
        	if(iSUMAMT != iAMT || iSUMVAT != iVAT){
        		this.fnc_Message("TMM300","하단의 합산금액 및 부가세가 상단 헤더의 금액과 다릅니다");
        		return false;
        	}
        	
        	return true;
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE1=" + this.fnc_Quote(this.calDEND_DATE1.value); 	//제작건 등록일 시작
        		sReturnString += " DEND_DATE2=" + this.fnc_Quote(this.calDEND_DATE2.value);     //제작건 등록일 시작
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        	
        	}  else if (sKind == "SEARCH01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXY_MONT"));    //년월
        		sReturnString += " TAXX_NUMB=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXX_NUMB"));    //계산서순번
        		
        	}  else if (sKind == "SAVE00" || sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}  else if (sKind == "DELETE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.stInformation, this.dsPD_SATXXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsPD_SATXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	}  else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		var arrParam = new Array();
        			arrParam[0]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE,DTIX_TYPE";
        			arrParam[1]  = "GRID,grdPD_SATXXH,dsTAXX_DEND,TAXX_DMND";
        			arrParam[2]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE2,TAXX_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
          /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        

        /*---------------------------+
         |  광고주 조회 팝업 생성 |
         +---------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        
        this.fn_DeleteItemCheck = function()
        {
        	//변경된 데이터 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SATXXH.rowcount; i++){
        		if(this.dsPD_SATXXH.getColumn(i, "CHK") == 1){
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(i, "CONVERSATION_ID"))) > 1) {
        				this.fnc_Message("TMM300","전자세금계산서가 전송된 데이터는 삭제 할 수 없습니다..");
        				return false;
        			}
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "CUST_NAME")) + ") 계산서";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        

        this.dsPD_SATXXH_onrowposchanged = function(obj,e)
        {

        		if (this.dsPD_SATXXH.getRowCount() < 1) return;
        		this.fnc_DatasetClear("dsPD_SATXXD");
        		
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SATXXD=dsPD_SATXXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID)
        {
        	var arrParam = new Array();
        	if (obj.name == "grdPD_SATXXH") {
        	
        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {

        			arrParam[0] = "PDM0001";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_SATXXH";
        			arrParam[5] = "CUST_CODE,CUST_NAME,BIZR_NUMB,OWNR_NAME,ADDR_DESC,DTL1_ADDR,DTL2_ADDR";
        			arrParam[6] = "0,1,2,4,5,6,7";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPD_SATXXH_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdPD_SATXXH, "YES", e.oldvalue, e.columnid);
        	
        	
        	if (e.columnid == "TAXX_AMTX" || e.columnid == "TAXX_VATX" ){
        		var iRow = this.dsPD_SATXXH.rowposition;
        		var iTAXX_AMTX = this.dsPD_SATXXH.getColumn(iRow, "TAXX_AMTX");
        		var iTAXX_VATX = this.dsPD_SATXXH.getColumn(iRow, "TAXX_VATX");
        		
        		var iRETURN = iTAXX_AMTX + iTAXX_VATX;
        		
        		this.dsPD_SATXXH.setColumn(iRow, "SUMM_AMTX", iRETURN);
        	}
        }

        this.btn_addRow_onclick = function(obj,e)
        {
        	
        	if(this.dsPD_SATXXH.rowcount == 0){
        		this.fnc_Message("TMM300","헤더의 데이터가 없습니다");
        		return;
        	}
        	
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXY_MONT")) == "" || this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_NUMB")) == ""){
        		this.fnc_Message("TMM300","헤더의 데이터가 저장 되지 않았습니다. 헤더부터 저장 후 상세 내역을 입력하세요");
        		return;
        	}
        		var iRow = this.dsPD_SATXXD.insertRow(this.dsPD_SATXXD.rowposition + 1);
        		this.dsPD_SATXXD.set_rowposition(iRow);
        		this.dsPD_SATXXD.setColumn(iRow, "TAXY_MONT", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXY_MONT"));
        		this.dsPD_SATXXD.setColumn(iRow, "TAXX_NUMB", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_NUMB"));
        		this.dsPD_SATXXD.setColumn(iRow, "CUST_CODE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"CUST_CODE"));
        		this.dsPD_SATXXD.setColumn(iRow, "CUST_NAME", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"CUST_NAME"));
        		this.dsPD_SATXXD.setColumn(iRow, "DEND_DATE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"DEND_DATE"));
        		this.dsPD_SATXXD.setColumn(iRow, "PRNT_DATE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"PRNT_DATE"));
        		this.dsPD_SATXXD.setColumn(iRow, "TAXX_AMTX", 0);
        		this.dsPD_SATXXD.setColumn(iRow, "TAXX_VATX", 0);
        		
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	//선택된 데이터 삭제
        	if (!this.fn_DeleteItemCheckDtl()) return;
        	
        	for(var i = this.dsPD_SATXXD.rowcount; i >= 0; i--){
        		if(this.dsPD_SATXXD.getColumn(i, "CHK") == 1){
        			this.dsPD_SATXXD.deleteRow(i);
        		}
        	}	
        }

        
        this.fn_DeleteItemCheckDtl = function()
        {
        //변경된 데이터 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SATXXD.rowcount; i++){
        		if(this.dsPD_SATXXD.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "CONVERSATION_ID"))) > 1) {
        			this.fnc_Message("TMM300","전자세금계산서가 전송된 데이터는 삭제 할 수 없습니다..");
        			return false;
        		}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_SATXXD.getColumn(this.dsPD_SATXXD.rowposition, "ITEM_MEMO")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

         /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        var isAllChecked = 0;
        this.grdPD_SATXXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_SATXXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SATXXD.getRowCount(); i++) {
        			this.dsPD_SATXXD.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_SATXXD.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        
        var isAllChecked1 = 0;
        this.grdPD_SATXXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_SATXXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SATXXH.getRowCount(); i++) {
        			this.dsPD_SATXXH.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.grdPD_SATXXH.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_SATXXH.addEventHandler("oncolumnchanged", this.dsPD_SATXXH_oncolumnchanged, this);
            this.dsPD_SATXXH.addEventHandler("onrowposchanged", this.dsPD_SATXXH_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPD_SATXXH.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPD_SATXXH.addEventHandler("onheadclick", this.grdPD_SATXXH_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.grdPD_SATXXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPD_SATXXD.addEventHandler("onheadclick", this.grdPD_SATXXD_onheadclick, this);
            this.btnAddRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.btnDelRow.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("PACA0011.xfdl");
        this.loadPreloadList();
       
    };
}
)();
