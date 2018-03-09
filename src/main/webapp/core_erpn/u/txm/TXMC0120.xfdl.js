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
                this.set_name("TXMC0120");
                this.set_titletext("사업자단위과세별부가세과세표준및납부세액");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT166_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_APPRNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT166_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UNITBRA_SEQ\" size=\"10\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"UNITBRA_CD\" size=\"3\" type=\"STRING\"/><Column id=\"UNITBRA_NM\" size=\"40\" type=\"STRING\"/><Column id=\"UNITBRA_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"SALBIL_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SALBIL_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SALETC_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SALETC_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ZERBIL_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ZERETC_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"SALTOT_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PURBIL_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PURBIL_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"AGENDA_SAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ADDTOT_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"ETCBIL_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"RETURN_VAMT\" size=\"17\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT166_D", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT166_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center middle;\" text=\"사업장\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" text=\"구분\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"매출과세표준\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center middle;\" text=\"매출세액\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center middle;\" text=\"과세표준\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center middle;\" text=\"구분\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center middle;\" text=\"매입과세표준\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:center middle;\" text=\"매입세액\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center middle;\" text=\"가산세\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:center middle;\" text=\"공제세액\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:center middle;\" text=\"납부(환급)세액\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:UNITBRA_NM\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"과세\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"세금계산서교부분\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SALBIL_SAMT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SALBIL_VAMT\"/><Cell col=\"5\" rowspan=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SALTOT_SAMT\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"과세\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PURBIL_SAMT\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PURBIL_VAMT\"/><Cell col=\"9\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ADDTOT_VAMT\"/><Cell col=\"10\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ETCBIL_VAMT\"/><Cell col=\"11\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RETURN_VAMT\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"과세\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"기타분\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SALETC_SAMT\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SALETC_VAMT\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"영세율\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"세금계산서교부분\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:ZERBIL_SAMT\"/><Cell row=\"2\" col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell displaytype=\"number\" style=\"align: left;\"/><Cell row=\"1\" displaytype=\"number\" style=\"align: left;\"/></Cell><Cell row=\"2\" col=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"의제등\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:AGENDA_SAMT\"/><Cell row=\"2\" col=\"8\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PD_AGENDA_VAMT\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"영세율\"/><Cell row=\"3\" col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"기타분\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:ZERETC_SAMT\"/></Band><Band id=\"summary\"><Cell rowspan=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"과세\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"세금계산서교부분\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SALBIL_SAMT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SALBIL_VAMT&quot;)\"/><Cell col=\"5\" rowspan=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SALTOT_SAMT&quot;)\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"과세\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;PURBIL_SAMT&quot;)\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;PURBIL_VAMT&quot;)\"/><Cell col=\"9\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;ADDTOT_VAMT&quot;)\"/><Cell col=\"10\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;ETCBIL_VAMT&quot;)\"/><Cell col=\"11\" rowspan=\"4\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;RETURN_VAMT&quot;)\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"과세\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"기타분\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SALETC_SAMT&quot;)\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SALETC_VAMT&quot;)\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"영세율\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"세금계산서교부분\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ZERBIL_SAMT&quot;)\"/><Cell row=\"2\" col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell displaytype=\"number\" style=\"align: right;\"/><Cell row=\"1\" displaytype=\"number\" style=\"align: right;\"/></Cell><Cell row=\"2\" col=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align:center middle;\" text=\"의제등\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;AGENDA_SAMT&quot;)\"/><Cell row=\"2\" col=\"8\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;AGENDA_VAMT&quot;)\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"영세율\"/><Cell row=\"3\" col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"기타분\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ZERETC_SAMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "142", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("본/지점");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "90", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "442", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "511", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("사업자단위과세별부가세과세표준및납부세액");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("18");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>사업자단위과세별부가세과세표준및납부세액");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 142, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사업자단위과세별부가세과세표준및납부세액");
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
        this.addIncludeScript("TXMC0120.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0120.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0120  사업자단위과세별부가세과세표준및납부세액
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.10		안윤준		수정
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
        this.sBUTTONLIST 	= "TTFFFTFT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TXMC0120"; //해당 Form에서 사용 할 Package 명
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
        	}

        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();
        	
        }
         
        /*----------------------------------+
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

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH dsTA_VAT166_H=dsTA_VAT166_H dsTA_VAT166_D=dsTA_VAT166_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (this.dsTA_VAT166_H.rowcount < 1) {
        		this.fnc_Message("TMM125", "조회 후 저장하세요");
        		return false;
        	}

        	if (this.dsTA_VAT166_D.rowcount < 1) {
        		this.fnc_Message("TMM125", "저장 할 내역이 없습니다");
        		return false;
        	}
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_VAT166_H,dsTA_VAT166_D")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VAT166_H=dsTA_VAT166_H:A dsTA_VAT166_D=dsTA_VAT166_D:A";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0120R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0120_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT166_H=dsTA_VAT166_H dsTA_VAT166_D=dsTA_VAT166_D dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT166_H,dsTA_VAT166_D", this);	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_VAT166_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        	}
        	
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		
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
        		this.fnc_Message("TMM018", this.dsTA_VAT166_D.rowcount); //정상 종료 메세지
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103"); //정상 종료 Message
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);
        	
        	} else if (sMethodName == "GetCommCode") {
        // 		var arrParam = new Array();
        // 			arrParam[0] = "GRID,grdTA_VAT106_D,dsCURR_CODE,EXPORT_CURRENCY_CD";
        // 		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.btn_PROC_OnClick = function (obj,e) {
        	if (!this.fn_SearchItemCheck()) return;

        	var sInDataSet = "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT166_H=dsTA_VAT166_H ";
        		sOutDataSet += "dsTA_VAT166_D=dsTA_VAT166_D ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
