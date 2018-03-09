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
                this.set_name("PDMC0010");
                this.set_titletext("제작견적서-견적용");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_TYPEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMH_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("제작견적서-견적용");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>제작관리>제작견적>제작견적서-견적용");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("견적일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "331", "71", "57", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("견적명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRESTI_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "302", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
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

            obj = new Grid("grdPD_ESTIMH", "absolute", "8", "138", null, "266", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPD_ESTIMH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"79\"/><Column size=\"324\"/><Column size=\"252\"/><Column size=\"175\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적일자\"/><Cell col=\"2\" style=\"background: ;\" text=\"견적명\"/><Cell col=\"3\" style=\"background: ;\" text=\"견적금액\"/><Cell col=\"4\" style=\"background: ;\" text=\"견적번호\"/><Cell col=\"5\" style=\"background: ;\" text=\"제작번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:ESTI_DATE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" text=\"bind:PREE_NAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"2\" style=\"align: center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "8", "418", "169", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "404", "80", "35", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_ESTIMD", "absolute", "8", "439", null, null, "25", "15", this);
            obj.set_taborder("112");
            obj.set_binddataset("dsPD_ESTIMD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"0\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적일자\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적번호\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목코드\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대분류명\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"중분류명\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목명\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적명\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"내역\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"수량\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"단가\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적금액\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사코드\"/><Cell col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:ESTI_DATE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ITEM_CODE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MIDD_NAME\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" text=\"bind:SUBX_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" text=\"bind:PREE_NAME\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" text=\"bind:TYPE_QTYX\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" text=\"bind:ESTI_PRCE\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" text=\"bind:ESTI_AMTX\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" text=\"bind:OUTS_CODE\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"7\" style=\"align: center;\" text=\"합계\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TYPE_QTYX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_PRCE&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "414", "62", "21", "25", null, this);
            obj.set_taborder("113");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", null, "414", "62", "21", "90", null, this);
            obj.set_taborder("114");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1069", "404", "80", "10", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "188", "71", "14", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRESTI_DATE2", "absolute", "202", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRPREE_NAME", "absolute", "386", "71", "200", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "378", "61", "8", "41", null, null, this);
            obj.set_taborder("130");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_JOBNO", "absolute", null, "113", "110", "21", "25", null, this);
            obj.set_taborder("131");
            obj.set_text("제작용으로저장");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addTYPE", "absolute", null, "414", "86", "21", "177", null, this);
            obj.set_taborder("132");
            obj.set_text("견적템플릿");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1023", "408", "12", "23", null, null, this);
            obj.set_taborder("134");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1010", "408", "12", "23", null, null, this);
            obj.set_taborder("135");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "422", "7", "21", "158", null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("137");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작견적서-견적용");

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
        this.addIncludeScript("PDMC0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PDMC0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PDMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMC0010 제작 견적서-견적용
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.21		오세훈		Initial Created.
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
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMC0010"; //해당 Form에서 사용 할 Package 명
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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	//최초 날짜세팅
        	this.calSHRESTI_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.calSHRESTI_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        		
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
        	this.fnc_DatasetClear("dsPD_ESTIMH");
        	this.fnc_DatasetClear("dsPD_ESTIMD");

        	//상단 견적 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ESTIMH=dsPD_ESTIMH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_ESTIMH.setFocus();

        
        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_ESTIMH.insertRow(this.dsPD_ESTIMH.rowposition + 1);
        	this.dsPD_ESTIMH.set_rowposition(iRow);
        	
        	this.dsPD_ESTIMH.setColumn(iRow, "ESTI_DATE", this.fnc_GetServerDateTime("DATE"));
        	
        	//this.dsPD_ESTIMH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_ESTIMH, 0));	

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheck()) return;
        	
        	for(var i = this.dsPD_ESTIMH.rowcount; i >= 0; i--){
        		if(this.dsPD_ESTIMH.getColumn(i, "CHK") == 1){
        			this.dsPD_ESTIMH.deleteRow(i);
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPD_ESTIMH");
        	this.grdPD_ESTIMH.setFocus();
        	
        	this.fnc_DataSetCancel("dsPD_ESTIMD");
        	this.grdPD_ESTIMD.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if(this.fnc_DatasetChangeCheck("dsPD_ESTIMH")){
        		if (!this.fn_SaveItemCheckHDR()) return;
        		
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_ESTIMH=dsPD_ESTIMH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_ESTIMD")){
        		if (!this.fn_SaveItemCheckDTL()) return;
        		
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsPD_ESTIMD=dsPD_ESTIMD:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_ESTIMH") == false && this.fnc_DatasetChangeCheck("dsPD_ESTIMD") == false){
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
        	
        	if (this.dsPD_ESTIMH.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_ESTIMH.rowposition < 0) return;

            this.fnc_DatasetClear("dsPD_ESTIMH_RPT");
            this.fnc_DatasetClear("dsPD_ESTIMD_RPT");
            

        	var reportfile 	= "/pdm/PDMC0010R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pdm/PDMC0010_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPD_ESTIMH_RPT=dsPD_ESTIMH_RPT dsPD_ESTIMD_RPT=dsPD_ESTIMD_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
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
        	if ((this.fnc_DatasetChangeCheck("dsPD_ESTIMH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        		}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_ESTIMH.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var cnt = 0;
        		for(var i = 0; i < this.dsPD_ESTIMH.rowcount; i++){
        			if(this.dsPD_ESTIMH.getColumn(i, "CHK") == 1){
        				cnt += 1;
        			}
        		}
        		
        		if(cnt==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}else if(cnt > 1){
        			cnt = cnt -1;
        			var msg = "  외"+ cnt + " 건";
        		}else{
        			var msg =  cnt + " 건";
        		}
        		
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_NAME")) + ") 견적"  + msg ;
        		return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheckHDR = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_ESTIMH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_ESTIMH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_ESTIMH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMH.getColumn(i, "ESTI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "견적일자", this.dsPD_ESTIMH, i, this.grdPD_ESTIMH, '');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMH.getColumn(i, "PREE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "견적명", this.dsPD_ESTIMH, i, this.grdPD_ESTIMH, '');
        		}
        		
        	}
        	
        	return true;
        }

        this.fn_SaveItemCheckDTL = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_ESTIMD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Detail 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_ESTIMD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_ESTIMD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMD.getColumn(i, "OUTS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사코드", this.dsPD_ESTIMD, i, this.grdPD_ESTIMD, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMD.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사 명", this.dsPD_ESTIMD, i, this.grdPD_ESTIMD, '');
        		}
        		
        		
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
        		sReturnString += " ESTI_DATE1=" + this.fnc_Quote(this.calSHRESTI_DATE1.value); //견적일
        		sReturnString += " ESTI_DATE2=" + this.fnc_Quote(this.calSHRESTI_DATE2.value); //견적일
        		sReturnString += " PREE_NAME=" + this.fnc_Quote(this.edtSHRPREE_NAME.value); //견적명
        		
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE")); //헤더의 견적번호
        		
        	
        	} else if (sKind == "SAVE00" || sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "PRINT00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE")); //해더의 견적코드
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

        		this.fnc_Information(this.stInformation, this.dsPD_ESTIMH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation00, this.dsPD_ESTIMD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH02") {
        	
        		var iRows = this.dsPD_ESTIMD.rowcount;
        		
        		//업데이트 컨트롤을 변경해야 한다.
        		this.dsPD_ESTIMD.set_updatecontrol(false);
        		
        		for(var i = 0; i < this.dsPD_TYPEXD.rowcount; i++){
        			var iRow = this.dsPD_ESTIMD.insertRow(iRows + i);		
        			this.dsPD_ESTIMD.setColumn(iRow, "ESTI_DATE", this.dsPD_TYPEXD.getColumn(i,"ESTI_DATE"));
        			this.dsPD_ESTIMD.setColumn(iRow, "PREE_CODE", this.dsPD_TYPEXD.getColumn(i,"PREE_CODE"));
        			this.dsPD_ESTIMD.setColumn(iRow, "ITEM_CODE", this.dsPD_TYPEXD.getColumn(i,"ITEM_CODE"));
        			this.dsPD_ESTIMD.setColumn(iRow, "HIGH_NAME", this.dsPD_TYPEXD.getColumn(i,"HIGH_NAME"));
        			this.dsPD_ESTIMD.setColumn(iRow, "MIDD_NAME", this.dsPD_TYPEXD.getColumn(i,"MIDD_NAME"));
        			this.dsPD_ESTIMD.setColumn(iRow, "SUBX_NAME", this.dsPD_TYPEXD.getColumn(i,"SUBX_NAME"));
        			this.dsPD_ESTIMD.setColumn(iRow, "MEMO_FILD", this.dsPD_TYPEXD.getColumn(i,"MEMO_FILD"));
        			this.dsPD_ESTIMD.setColumn(iRow, "TYPE_QTYX", this.dsPD_TYPEXD.getColumn(i,"TYPE_QTYX"));
        			this.dsPD_ESTIMD.setColumn(iRow, "ESTI_PRCE", this.dsPD_TYPEXD.getColumn(i,"ESTI_PRCE"));
        			this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", this.dsPD_TYPEXD.getColumn(i,"ESTI_AMTX"));
        			this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", this.dsPD_TYPEXD.getColumn(i,"ESTI_AMTX"));
        			
        			//업데이트컨트롤 인서트로 변경 추가된 데이터는 무조건 인서트
        			var bSucc = this.dsPD_ESTIMD.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        		
        		this.dsPD_ESTIMD.set_updatecontrol(true);
        	   
        	    
        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        // 	} else if (sMethodName == "SAVE01") {
        // 		this.fnc_Information(this.stInformation, 0, "SAVE");	
        // 		this.fnc_Message("TMM103");
        // 		this.fn_Search();
        	} else if (sMethodName == "SAVE10") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        	}

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
          this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        

        this.dsPD_ESTIMH_onrowposchanged = function(obj,e)
        {
        	if (this.dsPD_ESTIMH.getRowCount() < 1) return;
        	this.fnc_DatasetClear('dsPD_ESTIMD');

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ESTIMD=dsPD_ESTIMD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.btn_addRow_onclick = function(obj,e)
        {	
        	
        	if(this.dsPD_ESTIMH.rowcount > 0){
        		var sPREE_CODE = this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE");
        		if(this.fn_nullChk(sPREE_CODE) == ""){
        			this.fnc_Message("TMM300", "헤더를 먼저 저장하셔서 진행 하셔야 합니다.");
        			return ;
        		}
        	}
        	
        	
        	var iRow = this.dsPD_ESTIMD.insertRow(this.dsPD_ESTIMD.rowposition + 1);
        	this.dsPD_ESTIMD.set_rowposition(iRow);
        	
        	this.dsPD_ESTIMD.setColumn(iRow, "PREE_CODE", this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE"));
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_DATE", this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "ESTI_DATE"));
        	this.dsPD_ESTIMD.setColumn(iRow, "TYPE_QTYX", "1");
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_PRCE", "0");
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", "0");
        	
        	
        	//this.dsPD_ESTIMD.setCellPos(this.fnc_GridColumnIndex(this.grdPD_ESTIMD, 0));
        }

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) 
        {
        	var arrParam = new Array();
        	

        	if (obj.name == "grdPD_ESTIMD") {

        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "SUBX_NAME") || (sColumnID == "SUBX_NAME")) {

        			arrParam[0] = "PCMA0030";
        			arrParam[1] = "";
        			arrParam[2] = "SUBX_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_ESTIMD";
        			arrParam[5] = "ITEM_CODE,HIGH_NAME,MIDD_NAME,SUBX_NAME";
        			arrParam[6] = "0,1,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        		
        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {

        			arrParam[0] = "PDM0006";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			
        			arrParam[4] = "grdPD_ESTIMD";
        			arrParam[5] = "OUTS_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPD_ESTIMD_oncolumnchanged = function(obj,e)
        {
        	//견적항목 가져오면 여기에서 걸려서 임시로 주석처리 추후에 방법고민.
        	//if (e.columnid == "SUBX_NAME" ) this.fn_HelpDialoge(this.grdPD_ESTIMD, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdPD_ESTIMD, "YES", e.oldvalue, e.columnid);
        	
        	
        	if (e.columnid == "TYPE_QTYX" || e.columnid == "ESTI_PRCE" ){
        		var iRow = this.dsPD_ESTIMD.rowposition;
        		var iTYPE_QTYX = this.dsPD_ESTIMD.getColumn(iRow, "TYPE_QTYX");
        		var iESTI_PRCE = this.dsPD_ESTIMD.getColumn(iRow, "ESTI_PRCE");
        		var iESTI_AMTX = this.dsPD_ESTIMD.getColumn(iRow, "ESTI_AMTX");
        		
        		var iRETURN = iTYPE_QTYX * iESTI_PRCE;
        		
        		this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", iRETURN);
        	}
        }

        this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheckDtl()) return;
        	
        	for(var i = this.dsPD_ESTIMD.rowcount; i >= 0; i--){
        		if(this.dsPD_ESTIMD.getColumn(i, "CHK") == 1){
        			this.dsPD_ESTIMD.deleteRow(i);
        		}
        	}
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheckDtl = function () {
        		if (this.dsPD_ESTIMD.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var cnt = 0;
        		for(var i = 0; i < this.dsPD_ESTIMD.rowcount; i++){
        			if(this.dsPD_ESTIMD.getColumn(i, "CHK") == 1){
        				cnt += 1;
        			}
        		}
        		
        		if(cnt==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}else if(cnt > 1){
        			cnt = cnt -1;
        			var msg = "  외"+ cnt + " 건";
        		}else{
        			var msg =  cnt + " 건";
        		}
        		
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_ESTIMD.getColumn(this.dsPD_ESTIMD.rowposition, "SUBX_NAME")) + ") 견적항목 "  + msg ;
        		return this.fnc_Message("TMM002", sQuestionText);
        }

        

        
        /*----------------------------------------------------------------+
         | 견적템플릿 팝업생성                     |
         +-----------------------------------------------------------------*/
        this.fn_SlipDialoge = function (obj,nX,nY){

        
        	if(this.dsPD_ESTIMH.rowcount > 0){
        		var sPREE_CODE = this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE");
        		if(this.fn_nullChk(sPREE_CODE) == ""){
        			this.fnc_Message("TMM300", "헤더를 먼저 저장하셔서 진행 하셔야 합니다.");
        			return ;
        		}
        	}

        	var sCHKval = this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE");
        	
        // 	if(this.fn_nullChk(sCHKval) == ""){
        // 		this.fnc_Message("PDM001");
        // 		return ;
        // 	}
        	
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=500";       //현재 반응 없음
        		sOpenStyle += ",height=600";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PDMC0010P01", "pdm::PDMC0010P01.xfdl", {}, sOpenStyle, "fn_SlipDialoge_After");	
        	
        }

        /*--------------------------------------+
         | 템플릿 팝업 CallBack                     |
         +---------------------------------------*/
        this.fn_SlipDialoge_After = function(sPopupId,Variant){

        	var rtn = this.fnc_GetPopupRtn();
        	
        	if (rtn instanceof Array) {
        	
        		//선택한 템플릿을 조회하여 가져온다.
        		this.fnc_DatasetClear('dsPD_TYPEXD');

        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_TYPEXD=dsPD_TYPEXD";
        		var sArgument = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument += " action=" + this.fnc_Quote("SEARCH02");
        		sArgument += " PREE_CODE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE")); //헤더의 견적번호
        		sArgument += " ESTI_DATE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "ESTI_DATE")); //헤더의 견적일자
        		sArgument += " PREE_NAME=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_NAME")); //헤더의 견적명
        		sArgument += " TYPE_CODE=" + this.fnc_Quote(rtn[0]); //템플릿 코드
        		
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}
        	
        }

        //제작용으로 저장 버튼 클릭
        this.btn_JOBNO_onclick = function(obj,e)
        {
        	var iCnt = this.dsPD_ESTIMH.rowcount;
        	if(iCnt < 0){
        		this.fnc_Message("PDM001");
        		return ;
        	}
        	
        	var icnt = this.dsPD_ESTIMH.rowcount;
        	var ichk = 0;
        	for(var i=0; i < icnt; i ++){
        		if(this.dsPD_ESTIMH.getColumn(i, "CHK") == "1"){
        			if(this.fn_nullChk(this.dsPD_ESTIMH.getColumn(i, "PREE_CODE")) == ""){
        				this.fnc_Message("TMM300","선택된 데이터가 저장되지 않았습니다. 저장 후 가능합니다.");
        				return ;
        			}
        			ichk += 1;	
        		}
        	}
        	
        	if(ichk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=580";       //현재 반응 없음
        		sOpenStyle += ",height=600";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PDMC0010P01", "pdm::PDMC0010P02.xfdl", {}, sOpenStyle, "fn_JobDialoge_After");	
        }

        /*--------------------------------------+
         | 제작용으로 저장 팝업 CallBack                |
         +---------------------------------------*/
        this.fn_JobDialoge_After = function(sPopupId,Variant){

        	var rtn = this.fnc_GetPopupRtn();
        	
        	if (rtn instanceof Array) {
        	
        		var sJOBN_NUMB = rtn[0];
        		var sJOBN_NAME = rtn[1];           
        		
        		var icnt = this.dsPD_ESTIMH.rowcount;
        		var ichk = 0;
        		for(var i=0; i < icnt; i ++){
        			if(this.dsPD_ESTIMH.getColumn(i, "CHK") == "1"){
        				ichk = i;	
        				//선택된 데이터에 제작번호를 가지고 간다.
        				this.dsPD_ESTIMH.setColumn(i,"JOBN_NUMB",sJOBN_NUMB);
        			}
        		}
        				
        		var sMSG =  " 제작번호 " + sJOBN_NUMB + " : " +sJOBN_NAME + "건 을(를) \n" ;
        		sMSG = sMSG + " 선택하신 견적으로 \n \n\r저장하시겠습니까?";
        		
        		if(confirm(sMSG)){
        		
        			var sMethodName = "SAVE10";
        			var sInDataSet  = "dsPD_ESTIMH=dsPD_ESTIMH:U";
        			var sOutDataSet = "";
        			var sArgument = " pgm=" 	+ this.fnc_Quote("SAVE10");
        			sArgument += " action=" 	+ this.fnc_Quote(sMethodName);
        			
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		}else{
        		
        		}
        	}
        	
        }

        var isAllChecked = 0;
        this.grdPD_ESTIMH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_ESTIMH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_ESTIMH.getRowCount(); i++) {
        			this.dsPD_ESTIMH.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_ESTIMH.setCellProperty("Head", 0, "expr", isAllChecked);
        	}	
        }

        var isAllChecked2 = 0;
        this.grdPD_ESTIMD_onheadclick = function(obj,e)
        {
        		if (e.cell == 0) {
        		var v_Colid = this.grdPD_ESTIMD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked2 = (isAllChecked2 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_ESTIMD.getRowCount(); i++) {
        			this.dsPD_ESTIMD.setColumn(i, v_Colid, isAllChecked2);
        		}
        		this.grdPD_ESTIMD.setCellProperty("Head", 0, "expr", isAllChecked2);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_ESTIMH.addEventHandler("onrowposchanged", this.dsPD_ESTIMH_onrowposchanged, this);
            this.dsPD_ESTIMD.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_TYPEXD.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_ESTIMH_RPT.addEventHandler("onrowposchanged", this.dsPD_ESTIMH_onrowposchanged, this);
            this.dsPD_ESTIMD_RPT.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRESTI_DATE1.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRESTI_DATE1.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRESTI_DATE1.addEventHandler("ontextchange", this.fn_clearData, this);
            this.grdPD_ESTIMH.addEventHandler("onheadclick", this.grdPD_ESTIMH_onheadclick, this);
            this.grdPD_ESTIMD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPD_ESTIMD.addEventHandler("onheadclick", this.grdPD_ESTIMD_onheadclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.edtSHRPREE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.btn_JOBNO.addEventHandler("onclick", this.btn_JOBNO_onclick, this);
            this.btn_addTYPE.addEventHandler("onclick", this.fn_SlipDialoge, this);

        };

        this.loadIncludeScript("PDMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
