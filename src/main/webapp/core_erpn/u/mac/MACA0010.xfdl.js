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
                this.set_name("MACA0010");
                this.set_scrollbars("none");
                this.set_titletext("입금표");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSEND_FLAG</Col><Col id=\"CODEID\">SEND_FLAG</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_DPTBXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"IDXX_SEQX\" type=\"INT\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MELT_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"A0\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A4\" type=\"STRING\" size=\"256\"/><Column id=\"A5\" type=\"STRING\" size=\"256\"/><Column id=\"A6\" type=\"STRING\" size=\"256\"/><Column id=\"A7\" type=\"STRING\" size=\"256\"/><Column id=\"A8\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"V5\" type=\"STRING\" size=\"256\"/><Column id=\"V6\" type=\"STRING\" size=\"256\"/><Column id=\"V7\" type=\"STRING\" size=\"256\"/><Column id=\"S1\" type=\"STRING\" size=\"256\"/><Column id=\"S2\" type=\"STRING\" size=\"256\"/><Column id=\"S3\" type=\"STRING\" size=\"256\"/><Column id=\"S4\" type=\"STRING\" size=\"256\"/><Column id=\"S5\" type=\"STRING\" size=\"256\"/><Column id=\"S6\" type=\"STRING\" size=\"256\"/><Column id=\"S7\" type=\"STRING\" size=\"256\"/><Column id=\"S8\" type=\"STRING\" size=\"256\"/><Column id=\"S9\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPLIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_DPTBXM_RPT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"IDXX_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MELT_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"A0\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A4\" type=\"STRING\" size=\"256\"/><Column id=\"A5\" type=\"STRING\" size=\"256\"/><Column id=\"A6\" type=\"STRING\" size=\"256\"/><Column id=\"A7\" type=\"STRING\" size=\"256\"/><Column id=\"A8\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"V5\" type=\"STRING\" size=\"256\"/><Column id=\"V6\" type=\"STRING\" size=\"256\"/><Column id=\"V7\" type=\"STRING\" size=\"256\"/><Column id=\"S1\" type=\"STRING\" size=\"256\"/><Column id=\"S2\" type=\"STRING\" size=\"256\"/><Column id=\"S3\" type=\"STRING\" size=\"256\"/><Column id=\"S4\" type=\"STRING\" size=\"256\"/><Column id=\"S5\" type=\"STRING\" size=\"256\"/><Column id=\"S6\" type=\"STRING\" size=\"256\"/><Column id=\"S7\" type=\"STRING\" size=\"256\"/><Column id=\"S8\" type=\"STRING\" size=\"256\"/><Column id=\"S9\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPLIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CUST_MAIL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "672", null, this);
            obj.set_text("입금표");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "259", "29", "24", null, this);
            obj.set_text("홈>매체관리>회계관리>입금표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_DPTBXM", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_binddataset("dsMD_DPTBXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"50\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"95\"/><Column size=\"129\"/><Column size=\"65\"/><Column size=\"176\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"118\"/><Column size=\"140\"/><Column size=\"316\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"매체구분\"/><Cell col=\"4\" text=\"년월\"/><Cell col=\"5\" text=\"매체사코드\"/><Cell col=\"6\" text=\"사업자번호\"/><Cell col=\"7\" text=\"파일명\"/><Cell col=\"8\" text=\"발송여부\"/><Cell col=\"9\" text=\"매체사명\"/><Cell col=\"10\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"매체사담당자이메일\"/><Cell col=\"11\" text=\"금액\"/><Cell col=\"12\" text=\"부가세액\"/><Cell col=\"13\" text=\"합계금액\"/><Cell col=\"14\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:IDXX_SEQX\"/><Cell col=\"2\" text=\"bind:TABLE_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:GUBUN\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:YEAR_MNTH\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:MEDX_CODE\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:BIZR_NUMB\"/><Cell col=\"7\" style=\"background:#e8fedcff;background2:#e8fedcff;\" text=\"bind:FILE_NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SEND_FLAG\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:MEDX_NAME\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MELT_MLAD\" combodataset=\"dsMD_CUST_MAIL\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMI_FILD\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:COMI_VAT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMI_SUM\"/><Cell col=\"14\" displaytype=\"normal\" text=\"bind:MEMO_FILD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"7\" style=\"align:center;\" text=\"합계\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_VAT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_SUM&quot;)\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("117");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("118");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("124");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRYEAR_MNTH", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("142");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "196", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("144");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("145");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("146");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "179", "71", "51", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("매체사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "234", "71", "80", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "316", "71", "21", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_NAME", "absolute", "339", "71", "140", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "508", "71", "67", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDX_FLAG", "absolute", "576", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("154");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");

            obj = new Static("Static03", "absolute", "572", "103", null, "35", "534", null, this);
            obj.set_taborder("155");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "339", "93", "140", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("156");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");

            obj = new Static("Static00", "absolute", null, "113", "70", "21", "333", null, this);
            obj.set_taborder("157");
            obj.set_text("작성일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtCREA_DATE", "absolute", null, "113", "100", "21", "235", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btnDROP_FILE", "absolute", null, "113", "89", "21", "121", null, this);
            obj.set_taborder("159");
            obj.set_text("파일생성");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "965", "95", "12", "23", null, null, this);
            obj.set_taborder("160");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "952", "95", "12", "23", null, null, this);
            obj.set_taborder("161");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "113", "7", "21", "215", null, this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnCONT_SEND", "absolute", null, "113", "89", "21", "25", null, this);
            obj.set_taborder("163");
            obj.set_text("입금표발송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("입금표");

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
        this.addIncludeScript("MACA0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("MACA0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("MACA0010.xfdl", function() {
         /***************************************************************************************************
         * # Program : MACA0010 입금표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.04		최제현 	Initial Created.
         *   2016.10.31		오세훈 	Check and Revise.
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
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFTFFT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MACA0010";

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
         	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
         	this.fn_GetCUST_NAME();
         	this.edtCREA_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
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
        	
        	this.fnc_DatasetClear("dsMD_DPTBXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_DPTBXM=dsMD_DPTBXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//광고주명을 가져온다.
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        	
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
        	this.fnc_DataSetCancel("dsMD_DPTBXM");
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	//기능없음
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
        	
        	if(this.fnc_DatasetChangeCheck("dsMD_DPTBXM") == false) return this.fnc_Message("TMM300","선택된 데이터가 없습니다.");
        	
        	if (this.dsMD_DPTBXM.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsMD_DPTBXM.rowposition < 0) return;

            this.fnc_DatasetClear("dsMD_DPTBXM_RPT");
            

        	var reportfile 	= "/mac/MACA0010R01.jrf";
            var dataref 	= new Array();
            var params 		= "#CREA_DATE#" + this.edtCREA_DATE.value;
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/mac/MACA0010_PRINT00.do";
        	dataref[0].inDataset 	= "dsMD_DPTBXM=dsMD_DPTBXM:U"
        	dataref[0].outDataset 	= "dsMD_DPTBXM_RPT=dsMD_DPTBXM_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_DPTBXM", this);

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
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        // 	if (this.fnc_DatasetChangeCheck("dsMD_DPTBXM")) {
        // 		if (this.fnc_Message("TMM023") == false) return false;
        // 	}
        	
        	//날짜 형식 체크
        	if(this.fnc_Length(this.calSHRYEAR_MNTH.fn_GetMonth())<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "년월", this.calSHRYEAR_MNTH.value);
        	}
        	return true;

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (obj) {
        	//기능없음.
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); //년월
         		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.edtSHRMEDX_CODE.value); //매체코드
         		sReturnString += " MEDX_NAME=" + this.fnc_Quote(this.edtSHRMEDX_NAME.value); //매체명
         		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value); //매체구분
        	} else if(sKind == "SEARCH01"){
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	} else if(sKind == "PRINT00"){
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	} else if(sKind == "SEND00"){
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CREA_DATE=" + this.fnc_Quote(this.edtCREA_DATE.value); //작성일자
        	}

        	return sReturnString;

        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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
        		this.fnc_Information(this.stInformation, this.dsMD_DPTBXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_DPTBXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fnc_getcust_codemail();
        		
        	} else if (sMethodName == "SEARCH01") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SEND00") {
        		this.fnc_Message("MAC021");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {	
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdMD_DPTBXM,dsSEND_FLAG,SEND_FLAG";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		// 상단 매체구분 콤보
        		this.fnc_GetComboMEDX_FLAG();
        	} 
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
         
         
         
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         //상단 매체사 팝업
         this.fn_HelpDialogeSHRMEDX_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0009";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRMEDX_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRMEDX_NAME";                          
            arrParam[5] = "edtSHRMEDX_CODE,edtSHRMEDX_NAME";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /*----------------------------------+
         |  입력을 위한 상단 매체구분콤보|
         +----------------------------------*/
        //매체구분
        this.fnc_GetComboMEDX_FLAG = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDX_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0021"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDX_FLAG,dsMEDX_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        var isAllChecked = 0;
        this.grdMD_DPTBXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_DPTBXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_DPTBXM.getRowCount(); i++) {
        			this.dsMD_DPTBXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdMD_DPTBXM.setCellProperty("Head", 0, "expr", isAllChecked);		
        	}	
        }

        
        this.fn_onItemChanged = function(obj,e)
        {
        // 	if(this.cmbSHRMEDX_FLAG.value == null){
        // 		this.dsMD_DPTBXM.filter("");
        // 	}else if(this.cmbSHRMEDX_FLAG.value=='A00A'){
        // 		this.dsMD_DPTBXM.filter("MEDX_FLAG=='A001'||MEDX_FLAG=='A002'||MEDX_FLAG=='A003'||MEDX_FLAG=='A00A'");
        // 	}else if(this.cmbSHRMEDX_FLAG.value=='A00B'){
        // 		this.dsMD_DPTBXM.filter("MEDX_FLAG=='A005'||MEDX_FLAG=='A006'");
        // 	}else{
        // 		this.dsMD_DPTBXM.filter("MEDX_FLAG=='"+this.cmbSHRMEDX_FLAG.value+"'");
        // 	}
        // 	this.fnc_Information(this.stInformation, this.dsMD_DPTBXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	this.fn_Search();
        }

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAUTO_NAME=dsAUTO_NAME";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.fn_AutoSetting = function(){

        	var iCNT = this.dsAUTO_NAME.getRowCount();
        	var i;

        	for(i=0;i<iCNT;i++)
        	{
        		var text = this.dsAUTO_NAME.getColumn(i,"CLIENT_NAME");
        		var code = this.GetSpliceTextE(text);
        		this.dsAUTO_NAME.setColumn(i,"USEX_CODE",code);
        	}
        }

        
        // 한글 자소를 분리하여 리턴한다.
        var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
        var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
        var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

        this.GetSpliceTextK = function(strInput)
        {
        	var i;
        	var strOut = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOut += String.fromCharCode(arrFirst[nFirst]);
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOut += String.fromCharCode(arrSecond[nSecond]);
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOut += String.fromCharCode(arrThird[nThird]);
        		}
        		else
        			strOut += String.fromCharCode(nCode);
        	}
        	return strOut;
        }

        // 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
        var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
        var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
        var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
        var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];

        this.GetSpliceTextE = function(strInput)
        {
        	var i;
        	var strOutE = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOutE += arrFirstE[nFirst];
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOutE += arrSecondE[nSecond];
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOutE += arrThirdE[nThird];
        		}
        		else if(nCode>=12593 && nCode <= 12643)
        		{
        			strOutE += arrAllE[nCode-12593];
        		}
        		else
        		{
        			strOutE += String.fromCharCode(nCode);
        		}
        	}
        	return strOutE;
        }

        this.edtSHRMEDX_NAME_onkeyup = function(obj,e)
        {
        	if(e.keycode==40 || e.keycode == 38)
        	{
        		this.lstCUST_NAME.setFocus();
        		this.lstCUST_NAME.set_index(0);
        	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRMEDX_NAME.set_value(e.itemtext);
        	this.edtSHRMEDX_CODE.set_value(e.itemvalue);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {	
        	if(e.keycode == 13)
        	{
        		this.edtSHRMEDX_NAME.set_value(this.lstCUST_NAME.text);
        		this.edtSHRMEDX_CODE.set_value(this.lstCUST_NAME.value);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRMEDX_NAME_ontextchanged = function(obj,e)
        {
        	//명이 지워지면 코드가 지워짐
        	if(this.edtSHRMEDX_NAME.value=='')
        	this.edtSHRMEDX_CODE.set_value('');
        		
        	this.lstCUST_NAME.set_value("");
        	
        	var text = e.posttext;
        	if(text.length > 0)
        	{
        		var etext = this.GetSpliceTextE(text);

        		var sFilter = "String(USEX_CODE).toUpperCase().indexOf('" + etext.toUpperCase().replace("'","\\'") + "') >= 0";

        		this.dsAUTO_NAME.filter(sFilter);

        		this.lstCUST_NAME.set_visible(true);
        	}
        	else
        	{
        		this.dsAUTO_NAME.filter("USEX_CODE == 0");
        		this.lstCUST_NAME.set_visible(false);
        	}
        }

        this.edtSHRMEDX_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        /*----------------+
         |   파일생성    |
         +----------------*/
        this.fn_DropFile = function(obj,e)
        {	
        	if (!this.fn_DropItemCheck()) return;

        	//파일명을 담아서 뿌린다.
        	for(var i = 0 ; i < this.dsMD_DPTBXM.rowcount ; i++){
        		if(this.dsMD_DPTBXM.getColumn(i,"CHEK_FILD") == 1){
        			this.dsMD_DPTBXM.setColumn(i,"FILE_NAME",this.dsMD_DPTBXM.getColumn(i,"YEAR_MNTH")+"-"+this.dsMD_DPTBXM.getColumn(i,"IDXX_SEQX"));
        		}
        	}
        	
        	this.fnc_DatasetClear("dsMD_DPTBXM_RPT");
        	
        	this.dsMD_DPTBXM.set_enableevent(false);
        	this.dsMD_DPTBXM.filter("CHEK_FILD=='1'");
        	this.dsMD_DPTBXM_RPT.copyData(this.dsMD_DPTBXM, true);
        	this.dsMD_DPTBXM.filter("");
        	this.dsMD_DPTBXM.set_enableevent(true);
        	
        	this.fn_DropFileStart();

        }

        this.fn_DropFileStart = function () {
        	var _nrs_ = String.fromCharCode(28);
        	var _ncs_ = String.fromCharCode(29);
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);
        	var state = null;
        	
        	//start
        	//로컬
         	//var ubiUrl = "http://localhost:9030/NSCOM_MIS/ubireport/export/MACA0010.jsp";  //JSP 파일 호출경로
         	//var ubiDir = "http://localhost:9030/NSCOM_MIS/ubireport/jrfdir/mac/"; //가져가는 경로
        	
        	//운영
        	var ubiUrl = "http://mis.nscom.co.kr/ubireport/export/MACA0010.jsp";  //JSP 파일 호출경로
        	var ubiDir = "http://mis.nscom.co.kr/ubireport/jrfdir/mac/"; //가져가는 경로
        	
        	var ubiJrf = "MACA0010R01.jrf"; //가져가는 파일이름
        	var ubiArg = "";
        	var ubiDataType = "DS";	// DS : Local Dataset, SVC : Service URL
        	
        	//로컬
        	//var ubiExportDir = "D:/Java_Project/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp2/wtpwebapps/NSCOM_MIS/ubireport/pdfFile/"; //떨굴위치
        	//운영
        	var ubiExportDir = "/nscomwas/tomcat7/webapps/ROOT/ubireport/pdfFile/"; //떨굴위치
        	
        	var ubiExportType = "PDF";
        	var ubiExportFile = ""; //떨구는 파일이름
        	
        	//파일이름을 담는다.
        	for(var i = 0 ; i<this.dsMD_DPTBXM_RPT.rowcount ; i++){
        		ubiExportFile+= this.dsMD_DPTBXM_RPT.getColumn(i,"YEAR_MNTH")+"-"+this.dsMD_DPTBXM_RPT.getColumn(i,"IDXX_SEQX")+"★";
        		this.dsMD_DPTBXM_RPT.setColumn(i,"FILE_NAME",this.dsMD_DPTBXM_RPT.getColumn(i,"YEAR_MNTH")+"-"+this.dsMD_DPTBXM_RPT.getColumn(i,"IDXX_SEQX"));
        	}
        	
        	var ubiData = [];
        	ubiData.push(["dsMD_DPTBXM_RPT", this.dsMD_DPTBXM_RPT]); //
        	
        	//end
        	var ssvData = [];
        	ssvData.push("LOCALDATASET:" + _rs_);
        	for( var i = 0; i < ubiData.length; i++ ) {
        	
        		if( ubiData[i] && ubiData[i].length == 2 ) {
        		
        			ssvData.push(ubiData[i][0] + _cs_);
        			ssvData.push(ubiData[i][1].name + _cs_);
        			ssvData.push(_rs_);
        		}
        	}
        	for( var i = 0; i < ubiData.length; i++ ) {
        	
        		if( ubiData[i] && ubiData[i].length == 2 ) {
        			if( i == 0 ){
        				ssvData.push("SSV:utf-8" + _rs_);
        			}
        			ssvData.push(ubiData[i][1].saveSSV(ubiData[i][1].name, "A"));
        		}
        	}
        	
        	
        	// Form 정보 설정
        	var dynamicForm = document.createElement("form");
        	dynamicForm.setAttribute("id", "preview_form");
        	dynamicForm.setAttribute("method", "post");
        	dynamicForm.setAttribute("action", ubiUrl);
        	dynamicForm.setAttribute("target", "UBI_WIN_EXPORT");

        	var inputDir = document.createElement('input');
        	inputDir.type = 'hidden';
        	inputDir.name = 'dir';
        	inputDir.value = ubiDir;
        	dynamicForm.appendChild(inputDir);

        	var inputJrf = document.createElement('input');
        	inputJrf.type = 'hidden';
        	inputJrf.name = 'jrf';
        	inputJrf.value = ubiJrf;
        	dynamicForm.appendChild(inputJrf);

        	var inputArg = document.createElement('input');
        	inputArg.type = 'hidden';
        	inputArg.name = 'arg';
        	inputArg.value = ubiArg;
        	dynamicForm.appendChild(inputArg);

        	var inputDataType = document.createElement('input');
        	inputDataType.type = 'hidden';
        	inputDataType.name = 'datatype';
        	inputDataType.value = ubiDataType;
        	dynamicForm.appendChild(inputDataType);

        	var inputExportDir = document.createElement('input');
        	inputExportDir.type = 'hidden';
        	inputExportDir.name = 'exportdir';
        	inputExportDir.value = ubiExportDir;
        	dynamicForm.appendChild(inputExportDir);

        	var inputExportType = document.createElement('input');
        	inputExportType.type = 'hidden';
        	inputExportType.name = 'exporttype';
        	inputExportType.value = ubiExportType;
        	dynamicForm.appendChild(inputExportType);

        	var inputExportFile = document.createElement('input');
        	inputExportFile.type = 'hidden';
        	inputExportFile.name = 'exportfile';
        	inputExportFile.value = ubiExportFile;
        	dynamicForm.appendChild(inputExportFile);

        	var inputSsvData = document.createElement('input');
        	inputSsvData.type = 'hidden';
        	inputSsvData.name = 'ssvdata';
        	inputSsvData.value = ssvData.join("");
        	dynamicForm.appendChild(inputSsvData);
        	
        	document.body.appendChild(dynamicForm);
        	
        	// 팝업 창 너비와 높이, 위치 변수 선언
         	var newWidth = 300, newHeight = 400, newLeft = window.screenX || window.screenLeft || 0, newTop = window.screenY || window.screenTop || 0;
         	window.open('', 'UBI_WIN_EXPORT', 'left=' + newLeft + ',top=' + newTop + ',width=' + newWidth + ',height=' + newHeight + ',scrollbars=yes,resizable=yes');
        	dynamicForm.submit();
        }

        /*----------------+
         | 	입금표 발송  |
         +----------------*/

        this.fn_SendEmail = function(obj,e)
        {
        	if (!this.fn_SendItemCheck()) return;
        	
        	var sMethodName = "SEND00";
        	var sInDataSet  = "dsMD_DPTBXM=dsMD_DPTBXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        /*--------------------+
         |  발송 여부 체크!  |
         +-------------------*/
        this.fn_SendItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsMD_DPTBXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for(var i = 0 ; i < this.dsMD_DPTBXM.rowcount ; i++ ){
        		if(this.dsMD_DPTBXM.getColumn(i, "CHEK_FILD")=='1'){
        			if(this.fnc_Length(this.fnc_Trim(this.dsMD_DPTBXM.getColumn(i, "FILE_NAME"))) < 1){
        				this.fnc_Message("MAC022");
        				return false;
        			}else if(this.fnc_Length(this.fnc_Trim(this.dsMD_DPTBXM.getColumn(i, "MELT_MLAD"))) < 1){
        				this.fnc_Message("MAC023");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /*--------------------------+
         |  파일 생성 여부 체크!  |
         +-------------------------*/
        this.fn_DropItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsMD_DPTBXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        }

        
        /*--------------------------+
         |    메일명 불러오기     |
         +-------------------------*/
        this.fnc_getcust_codemail = function()
        {
        		this.fnc_DatasetClear("dsMD_CUST_MAIL");

        		for(var  i = 0; i < this.dsMD_DPTBXM.rowcount; i++){
        			this.dsMD_CUST_MAIL.insertRow(i);
        			this.dsMD_CUST_MAIL.setColumn(i, "CUST_CODE", this.dsMD_DPTBXM.getColumn(i,"MEDX_CODE"));
        		}
        		
        		if(this.dsMD_CUST_MAIL.rowcount > 1){
        			var sMethodName = "SEARCH02";
        			var sInDataSet  = "dsMD_CUST_MAIL=dsMD_CUST_MAIL:A";
        			var sOutDataSet = "dsMD_CUST_MAIL=dsMD_CUST_MAIL";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        }

        /*--------------------------+
         |    메일명 필터 적용     |
         +-------------------------*/
        this.grdMD_DPTBXM_ondropdown = function(obj,e)
        {
        	var sCUST_CODE = this.dsMD_DPTBXM.getColumn(e.row, "MEDX_CODE");
        	this.dsMD_CUST_MAIL.filter("CUST_CODE == '" + sCUST_CODE + "' && (EMPL_GUBN == 'E001' || EMPL_GUBN == 'E002')");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_DPTBXM.addEventHandler("oncolumnchanged", this.dsMD_CTMDXM_oncolumnchanged, this);
            this.dsMD_DPTBXM_RPT.addEventHandler("oncolumnchanged", this.dsMD_CTMDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.st_FormLocation.addEventHandler("onclick", this.st_FormLocation_onclick, this);
            this.grdMD_DPTBXM.addEventHandler("onheadclick", this.grdMD_DPTBXM_onheadclick, this);
            this.grdMD_DPTBXM.addEventHandler("ondropdown", this.grdMD_DPTBXM_ondropdown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMEDX_CODE.addEventHandler("ontextchanged", this.edtSHRMEDX_CODE_ontextchanged, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkeyup", this.edtSHRMEDX_NAME_onkeyup, this);
            this.edtSHRMEDX_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkeydown", this.edtSHRMEDX_NAME_onkeydown, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);
            this.btnDROP_FILE.addEventHandler("onclick", this.fn_DropFile, this);
            this.btnCONT_SEND.addEventHandler("onclick", this.fn_SendEmail, this);

        };

        this.loadIncludeScript("MACA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
