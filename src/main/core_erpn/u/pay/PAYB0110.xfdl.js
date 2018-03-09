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
                this.set_name("PAYB0110");
                this.set_titletext("연차수당관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">PAYX_CODE</Col><Col id=\"DSNAME\">dsPAYX_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">PAAU_CODE</Col><Col id=\"DSNAME\">dsPAAU_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ANNUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" type=\"STRING\"/><Column id=\"STDS_YEAR\" size=\"4\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"APLY_ANDC\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"USEX_ANDC\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"REMA_ANDC\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_VADC\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"REYS_VADC\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"BSLY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVAM_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAAU_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PAYX_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"WADE_YSNO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("연차수당관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 연차수당관리");
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

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "452", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_ANNUXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_ANNUXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"총연차\"/><Cell col=\"9\" text=\"사용일수\"/><Cell col=\"10\" text=\"잔여연차\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"지급연차\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴직정산분\"/><Cell col=\"13\" text=\"기본급\"/><Cell col=\"14\" text=\"연차수당(1일)\"/><Cell col=\"15\" text=\"연차수당금액\"/><Cell col=\"16\" text=\"지급대상여부\"/><Cell col=\"17\" text=\"급여반영여부\"/><Cell col=\"18\" text=\"지급일\"/><Cell col=\"19\" text=\"마감여부\"/><Cell col=\"20\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:EMPL_NAME\" editlimit=\"0\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SECT_NAME\" editlimit=\"0\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\"/><Cell col=\"5\" style=\"align: ;\" text=\"bind:OPOS_NAME\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"date\" style=\"align: ;\" text=\"bind:ENCO_DATE\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" style=\"align: ;\" text=\"bind:RETR_DATE\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align: ;\" text=\"bind:APLY_ANDC\"/><Cell col=\"9\" text=\"bind:USEX_ANDC\"/><Cell col=\"10\" text=\"bind:REMA_ANDC\"/><Cell col=\"11\" edittype=\"expr:PAYX_CODE == &quot;1&quot; ? &quot;none&quot; : &quot;normal&quot;\" editfilter=\"number\" text=\"bind:PAYX_VADC\" editlimit=\"10\"/><Cell col=\"12\" edittype=\"expr:PAYX_CODE == &quot;1&quot; ? &quot;none&quot; : &quot;normal&quot;\" editfilter=\"number\" text=\"bind:REYS_VADC\" editlimit=\"10\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSLY_AMOT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAVR_WAGE\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AVAM_AMOT\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"expr:PAYX_CODE == &quot;1&quot; ? &quot;none&quot; : &quot;combo&quot;\" editfilter=\"number\" text=\"bind:PAAU_CODE\" editlimit=\"15\"/><Cell col=\"17\" displaytype=\"combo\" text=\"bind:PAYX_CODE\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"checkbox\" text=\"bind:WADE_YSNO\"/><Cell col=\"20\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"expr:dataset.getSum('APLY_ANDC')\"/><Cell col=\"9\" text=\"expr:dataset.getSum('USEX_ANDC')\"/><Cell col=\"10\" text=\"expr:dataset.getSum('REMA_ANDC')\"/><Cell col=\"11\" text=\"expr:dataset.getSum('PAYX_VADC')\"/><Cell col=\"12\" text=\"expr:dataset.getSum('REYS_VADC')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('BSLY_AMOT')\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('DAVR_WAGE')\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum('AVAM_AMOT')\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "121", "35", "98", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("연차불러오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("퇴직자연차처리");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC01", "absolute", "222", "35", "74", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("급여반영");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "205", "71", "52", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "247", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "329", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "352", "71", "100", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "480", "71", "52", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "522", "71", "80", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "604", "71", "21", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "627", "71", "100", "21", null, null, this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "230", "728", "323", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "305", "39", null, null, this.popINSERT);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("26");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "252", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("29");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnPayAply", "absolute", "175", "56", "74", "24", null, null, this.popINSERT);
            obj.set_taborder("30");
            obj.set_text("급여반영");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "166", "18", "21", "21", null, null, this.popINSERT);
            obj.set_taborder("32");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME", "absolute", "189", "18", "100", "21", null, null, this.popINSERT);
            obj.set_taborder("33");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "18", "80", "21", null, null, this.popINSERT);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "16", "56", "60", "22", null, null, this.popINSERT);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGP_CODE", "absolute", "86", "56", "50", "22", null, null, this.popINSERT);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "200", "729", "182", "8", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "200", "808", "350", "8", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "231", "748", "8", "96", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "544", "748", "8", "96", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_YEAR", "absolute", "96", "72", "80", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_dateformat("yyyy");
            obj.set_value("null");
            obj.set_editformat("yyyy");
            obj.set_type("spin");

            obj = new Button("btnPayCancle", "absolute", "299", "35", "74", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("급여취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "757", "71", "68", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "823", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");
            obj.set_index("0");

            obj = new Static("Static15", "absolute", "727", "61", "40", "41", null, null, this);
            obj.set_taborder("135");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "952", "71", "98", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("급여반영여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPAYX_CODE", "absolute", "1048", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("137");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");
            obj.set_index("0");

            obj = new Static("Static16", "absolute", "923", "61", "40", "41", null, null, this);
            obj.set_taborder("138");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 323, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연차수당관리");

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
        this.addIncludeScript("PAYB0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0110 연차수당관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.24		안윤준		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYB0110";

        this.sPAYX_DATE = "";
        this.sWAGE_CODE = "";
        this.sWAGE_NAME = "";
        this.sKeyValue = "";

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
        	this.calSHRSTDS_YEAR.set_value(this.fnc_GetServerDateTime("DATE"));

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

        	this.fnc_GridCheckClear("grdAT_ANNUXM","0");
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsAT_ANNUXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsAT_ANNUXM=dsAT_ANNUXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ANNUXM.setFocus();

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
        	if (this.fn_DeleteCheck()){
        		for (var i = this.dsAT_ANNUXM.getRowCount() - 1; i >= 0; i--) {
        			if ( this.dsAT_ANNUXM.getColumn(i, "CHK") == "1" ){
        				this.dsAT_ANNUXM.deleteRow(i);
        			}
        		}
        		
        	}
        	this.grdAT_ANNUXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsAT_ANNUXM");
        	this.grdAT_ANNUXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_ANNUXM=dsAT_ANNUXM:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsAT_ANNUXM", this);
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

        	if (this.fnc_DatasetChangeCheck("dsAT_ANNUXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRSTDS_YEAR);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var iSelectRowCount = 0;
        	var iRow = 0;
        	for ( var i=0; i<this.dsAT_ANNUXM.getRowCount(); i++ ) {
        		if ( this.dsAT_ANNUXM.getColumn(i, "CHK") == "1" ){
        			if ( this.dsAT_ANNUXM.getColumn(i, "WADE_YSNO") == "1" ){
        				return this.fnc_Message("PAY071", this.dsAT_ANNUXM.getColumn(i, "EMPL_NAME"));
        				
        			}
        			iRow = i;
        			iSelectRowCount++;
        		}
        	}
        	
        	if (iSelectRowCount == 0) {
        		return this.fnc_Message("TMM007");
        		
        	} else if ( iSelectRowCount == 1 ) {
        		var sQuestionText = "사원번호:" + this.dsAT_ANNUXM.getColumn(iRow, "EMPL_NUMB") 
        		                  + " 성명:" + this.dsAT_ANNUXM.getColumn(iRow, "EMPL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	} else {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	}

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsAT_ANNUXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsAT_ANNUXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsAT_ANNUXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        	}

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentsType) {

        	var sReturnString;

        	if ( sKind == "SEARCH00" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRSTDS_YEAR.value, 0, 4)));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " WODN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value));
        		sReturnString += " PAYX_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPAYX_CODE.value));

        	} else if ( sKind == "SEARCH01" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRSTDS_YEAR.value, 0, 4)));
        		sReturnString += " QUERY_TYPE=" + this.fnc_Quote(this.fnc_Trim(sContentsType));

        	} else if ( sKind == "SAVE00" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

        	} else if ( sKind == "DELETE00" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRSTDS_YEAR.value, 0, 4)));

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
        		this.fnc_Information(this.stInformation, this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_ANNUXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        		this.dsAT_ANNUXM.set_updatecontrol(false);
        		this.dsAT_ANNUXM.set_enableeventk;(false);
        		for ( var i=0; i<this.dsAT_ANNUXM.getRowCount(); i++ ){
        			this.dsAT_ANNUXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		this.dsAT_ANNUXM.set_enableevent(true);
        		this.dsAT_ANNUXM.set_updatecontrol(true);

        		this.fn_Save();

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "DELETE00") {
        		var sMethodName = "SEARCH01";
        		var sInDataSet 	= "";
        		var sOutDataSet = "dsAT_ANNUXM=dsAT_ANNUXM";
        		var sArgument 	= this.fn_CreateArgument(sMethodName, "1");
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.grdAT_ANNUXM.setFocus();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRPAYX_CODE,dsPAYX_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRWODN_CODE,dsWODN_CODE,0";
        			arrParam[2] = "GRID,grdAT_ANNUXM,dsPAYX_CODE,PAYX_CODE";
        			arrParam[3] = "GRID,grdAT_ANNUXM,dsPAAU_CODE,PAAU_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popINSERT.edtSHRWAGE_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "popINSERT.edtSHRWAGE_NAME";
        		arrParam[5] = "popINSERT.medSHRPAYX_DATE,popINSERT.edtSHRWAGE_CODE,popINSERT.edtSHRWAGE_NAME,popINSERT.edtSHRWAGP_CODE";
        		arrParam[6] = "0,1,2,5";
        		arrParam[9] = "fn_CommPopupPost";

        	}

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        this.fn_CommPopupPost = function(sResponse) {
        	this.btn_PROC01_onclick();
        	var sArrRtn = this.fnc_Split(sResponse, ",");
        	this.popINSERT.medSHRPAYX_DATE.set_value(sArrRtn[0]);
        	this.popINSERT.edtSHRWAGE_CODE.set_value(sArrRtn[1]);
        	this.popINSERT.edtSHRWAGP_CODE.set_value(sArrRtn[2]);
        	this.popINSERT.edtSHRWAGE_NAME.set_value(sArrRtn[3]);

        }

        /*-----------------------+
         |  그리드 헤더 클릭   |
         +------------------------*/
        this.grdAT_ANNUXM_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        /*--------------+
         |  연차불러오기 |
         +--------------*/
        this.btn_PROC_onclick = function(obj,e) {
        	
        	this.fnc_GridCheckClear("grdAT_ANNUXM","0");
        	if (!this.fn_SearchItemCheck()) return;
        	if (!this.fnc_Message("PAY070", this.fnc_SubStr(this.calSHRSTDS_YEAR.value, 0, 4))) return;

        	this.fnc_DatasetClear("dsAT_ANNUXM");

        	var sMethodName = "DELETE00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*----------------+
         |  퇴직자연차처리 |
         +----------------*/
        this.btn_PROC00_onclick = function(obj,e) {
        	
        	this.fnc_GridCheckClear("grdAT_ANNUXM","0");
        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear("dsAT_ANNUXM");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsAT_ANNUXM=dsAT_ANNUXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName, "2");
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_ANNUXM.setFocus();

        }

        /*----------------+
         |  급여반영 |
         +----------------*/
        this.btn_PROC01_onclick = function(obj,e) {
        	var nX 	= system.clientToScreenX(this.btn_PROC01, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_PROC01, this.btn_PROC01.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);

        	this.popINSERT.trackPopup(nX, nY - 2);

        }

        this.dsAT_ANNUXM_oncolumnchanged = function(obj,e) {
        	if ( e.columnid == "PAYX_VADC" || e.columnid == "REYS_VADC" ) {
        		var sPAYX_VADC = nexacro.toNumber(obj.getColumn(e.row, "PAYX_VADC"));
        		var sREYS_VADC = nexacro.toNumber(obj.getColumn(e.row, "REYS_VADC"));
        		var sDAVR_WAGE = nexacro.toNumber(obj.getColumn(e.row, "DAVR_WAGE"));

        		obj.setColumn(e.row, "AVAM_AMOT", (sPAYX_VADC+sREYS_VADC)*sDAVR_WAGE);
        	}
        	
        }

        /*----------------+
         |  닫기 버튼 클릭 |
         +----------------*/
        this.btnClose_onclick = function(obj,e) {
        	this.popINSERT.closePopup();

        }

        /*---------------------+
         |  급여 반영/취소 클릭 |
         +---------------------*/
        this.popINSERT_btnPay_onclick = function(obj,e) {

        	if ( this.dsAT_ANNUXM.getCaseCount("CHK==1") == 0 ) return this.fnc_Message("MDM002");

        	if ( obj.name == "btnPayAply" ) {
        		if ( this.fnc_Length(this.popINSERT.medSHRPAYX_DATE.value) == 0 ){
        			return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.popINSERT.edtSHRWAGE_NAME);
        		}

        		this.dsAT_ANNUXM.set_enableevent(false);
        		for ( var i=0; i<this.dsAT_ANNUXM.getRowCount(); i++ ) {
        			if ( this.dsAT_ANNUXM.getColumn(i, "CHK") == "1" ) {
        				this.dsAT_ANNUXM.setColumn(i, "PAYX_CODE", "1");
        				this.dsAT_ANNUXM.setColumn(i, "PAYX_DATE", this.popINSERT.medSHRPAYX_DATE.value);
        				this.dsAT_ANNUXM.setColumn(i, "WAGE_CODE", this.popINSERT.edtSHRWAGE_CODE.value);

        			}
        		}
        		this.dsAT_ANNUXM.set_enableevent(true);
        		
        		this.fn_Save();
        		
        	} else if ( obj.name == "btnPayCancle" ) {
        		this.dsAT_ANNUXM.set_enableevent(false);
        		for ( var i=0; i<this.dsAT_ANNUXM.getRowCount(); i++ ) {
        			if ( this.dsAT_ANNUXM.getColumn(i, "CHK") == "1" ){
        				if ( this.dsAT_ANNUXM.getColumn(i, "WADE_YSNO") == "0" ){
        					this.dsAT_ANNUXM.setColumn(i, "PAYX_CODE", "2");
        					this.dsAT_ANNUXM.setColumn(i, "PAYX_DATE", "");
        					this.dsAT_ANNUXM.setColumn(i, "WAGE_CODE", "");
        					
        				} else { // 마감일경우
        					this.dsAT_ANNUXM.set_rowposition(i);
        					this.fnc_DataSetCancel("dsAT_ANNUXM");
        					this.dsAT_ANNUXM.set_enableevent(true);
        					return this.fnc_Message("PAY071", this.dsAT_ANNUXM.getColumn(i, "EMPL_NAME"));
        					
        				}
        			}
        		}
        		this.dsAT_ANNUXM.set_enableevent(true);

        	}
        	this.fnc_GridCheckClear("grdAT_ANNUXM","0");

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_ANNUXM.addEventHandler("oncolumnchanged", this.dsAT_ANNUXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdAT_ANNUXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_ANNUXM.addEventHandler("onheadclick", this.grdAT_ANNUXM_onheadclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_onclick, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_onclick, this);
            this.btn_PROC01.addEventHandler("onclick", this.btn_PROC01_onclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.btnClose_onclick, this);
            this.popINSERT.btnPayAply.addEventHandler("onclick", this.popINSERT_btnPay_onclick, this);
            this.popINSERT.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnPayCancle.addEventHandler("onclick", this.popINSERT_btnPay_onclick, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRPAYX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYB0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
