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
                this.set_name("TXMD0080");
                this.set_titletext("일용근로소득전산매체");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCOMP_MED1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TAXO_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRES_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRES_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTEL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">PAQD_CODE</Col><Col id=\"DSNAME\">dsBASE_QUAR</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOMP_MED2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TAXO_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"BRCH_MAIL\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DATA_CNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOMP_MED3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRGN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYY_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DCNT\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOMP_MEDI", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RECD_DATA\" size=\"170\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stTITLE1", "absolute", "8", "107", null, "21", "860", null, this);
            obj.set_text("제출자 레코드");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCOMP_MED1", "absolute", "8", "128", null, "83", "25", null, this);
            obj.set_binddataset("dsCOMP_MED1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"79\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"125\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"세무서\"/><Cell col=\"1\" displaytype=\"text\" text=\"제출일\"/><Cell col=\"2\" displaytype=\"text\" text=\"제출자구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"홈택스ID\"/><Cell col=\"4\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"법인명\"/><Cell col=\"6\" displaytype=\"text\" text=\"담당자부서\"/><Cell col=\"7\" displaytype=\"text\" text=\"담당자성명\"/><Cell col=\"8\" displaytype=\"text\" text=\"담당자전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"bind:TAXO_NAME\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:PRES_DATE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PRES_GUBN\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:HTSX_IDXX\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:BSNS_NUMB\" mask=\"###-##-#####\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:OFFI_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"bind:HTEL_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "8", "215", null, "21", "860", null, this);
            obj.set_text("지급자별 집계");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCOMP_MED2", "absolute", "8", "236", null, "83", "25", null, this);
            obj.set_binddataset("dsCOMP_MED2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"125\"/><Column size=\"60\"/><Column size=\"97\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"법인명\"/><Cell col=\"2\" displaytype=\"text\" text=\"대표자\"/><Cell col=\"3\" displaytype=\"text\" text=\"법인등록번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"일용근로자수\"/><Cell col=\"5\" displaytype=\"text\" text=\"제출자료건수\"/><Cell col=\"6\" displaytype=\"text\" text=\"총지급액계\"/><Cell col=\"7\" displaytype=\"text\" text=\"비과세소득계\"/><Cell col=\"8\" displaytype=\"text\" text=\"소득세\"/><Cell col=\"9\" displaytype=\"text\" text=\"주민세\"/><Cell col=\"10\" displaytype=\"text\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:BSNS_NUMB\" mask=\"###-##-#####\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:OFFI_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:OWNR_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"bind:JURI_NUMB\" mask=\"######-#######\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CUST_CNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_CNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_KMAK\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OUTL_KMAK\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCM_TAXX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INHA_TAXX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SEKM_TOKM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "8", "323", null, "21", "860", null, this);
            obj.set_text("소득자 레코드");
            obj.set_cssclass("styFormItemTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCOMP_MED3", "absolute", "8", "344", null, null, "25", "15", this);
            obj.set_binddataset("dsCOMP_MED3");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"주민등록번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"내외국인구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"지급월\"/><Cell col=\"5\" displaytype=\"text\" text=\"근무월\"/><Cell col=\"6\" displaytype=\"text\" text=\"근무일수\"/><Cell col=\"7\" displaytype=\"text\" text=\"총지급액\" wordwrap=\"true\"/><Cell col=\"8\" displaytype=\"text\" text=\"비과세소득\" wordwrap=\"true\"/><Cell col=\"9\" displaytype=\"text\" text=\"소득세\"/><Cell col=\"10\" displaytype=\"text\" text=\"주민세\"/><Cell col=\"11\" displaytype=\"text\" text=\"세액합계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:RERN_NUMB\" mask=\"expr:comp.parent.fnc_Length(RERN_NUMB) &lt; 1 ? &quot;&quot; : &quot;######-#######&quot;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:FRGN_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TELE_NUMB\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PAYY_YYMM\" mask=\"expr:comp.parent.fnc_Length(PAYY_YYMM) &lt; 1 ? &quot;&quot; : &quot;####-##&quot;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PERS_YYMM\" mask=\"expr:comp.parent.fnc_Length(PERS_YYMM) &lt; 1 ? &quot;&quot; : &quot;####-##&quot;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: right;\" text=\"bind:WORK_DCNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_KMAK\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OUTL_KMAK\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCM_TAXX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INHA_TAXX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SEKM_TOKM\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: right;\" expr=\"expr:dataset.getCountNF() + &quot;건&quot;\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_KMAK&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;OUTL_KMAK&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;INCM_TAXX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;INHA_TAXX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SEKM_TOKM&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "34", "195", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFileCreate", "absolute", "0", "1", "122", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("전산매체파일생성");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "29", "71", "76", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("정산연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static2", "absolute", "205", "71", "49", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("분기");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBASE_QUAR", "absolute", "247", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static4", "absolute", "357", "71", "63", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("제출일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPRES_DATE", "absolute", "412", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("일용근로소득전산매체");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 재무관리 > 세무회계 > 원천세 > 일용근로소득전산매체");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "327", "61", "40", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "211", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "230", "216", "6", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "319", "80", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "338", "216", "6", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 195, 25, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일용근로소득전산매체");
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
        this.addIncludeScript("TXMD0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMD0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMD0080 일용근로소득전산매체
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
        this.sBUTTONLIST 	= "TTFFFFTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TXMD0080"; //해당 Form에서 사용 할 Package 명
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

        	this.calSHRBASE_YEAR.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRPRES_DATE.set_value(this.fnc_GetServerDateTime("DATE"));

        	if (this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "01" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "02" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "03") {
        		this.cmbSHRBASE_QUAR.set_value("1");
        	} else if (this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "04" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "05" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "06") {
        		this.cmbSHRBASE_QUAR.set_value("2");
        	} else if (this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "07" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "08" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "09") {
        		this.cmbSHRBASE_QUAR.set_value("3");
        	} else if (this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "10" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "11" || this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2) == "12") {
        		this.cmbSHRBASE_QUAR.set_value("4");
        	}
        	
        	this.calSHRBASE_YEAR.setFocus();
        	
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
        	
        	this.fnc_DatasetClear("dsCOMP_MED1,dsCOMP_MED2,dsCOMP_MED3,dsCOMP_MEDI");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsCOMP_MED1=dsCOMP_MED1 dsCOMP_MED2=dsCOMP_MED2 dsCOMP_MED3=dsCOMP_MED3 dsCOMP_MEDI=dsCOMP_MEDI";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCOMP_MED1.setFocus();
        	
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
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	//return this.fnc_FormUnloadCheck("", this);
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
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBASE_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "정산년도", this.calSHRBASE_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRBASE_QUAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "분기", this.cmbSHRBASE_QUAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPRES_DATE.value)) != 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "제출일", this.calSHRPRES_DATE);
        	}

        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        		
        	return true;
        	
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        		
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " BASE_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBASE_YEAR.value), 0, 4));
        		sReturnString += " BASE_QUAR=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBASE_QUAR.value));
        		sReturnString += " PRES_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRPRES_DATE.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO));
        	
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SAVE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " BSNS_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsCOMP_MED2.getColumn(this.dsCOMP_MED2.rowposition, "BSNS_NUMB")));
        	
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
        	
        		// fnc_Information(stInformation, dsCOMP_MED3.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsCOMP_MED3.rowcount); //정상 종료 메세지

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_ExcelFileDown();
        		//this.fnc_Message("PAY008", "기타소득");

        	} else if (sMethodName == "GetCommCode") {
        		
        		// 공통 코드 콤보를 가져오기
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRBASE_QUAR,dsBASE_QUAR,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);		
        		
        	}
        	
        }

        /*-----------------------------+
         |  전산매체 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {

        	var sPath    = this.sFILE_PATH;  //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명

        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.btnFileCreate_OnClick = function (obj,e) {
        	// 파일생성 전처리가 false 이면 다음처리를 하지않는다.
        	if (!this.PreCreateFile()) return;

        	// 파일생성 처리를 한다.
        	this.ComCreateFile();
        }

        // 파일생성 전처리 메소드
        this.PreCreateFile = function () {
        		
        	// 해당 Row가 있는지 확인
        	if (this.dsCOMP_MEDI.rowcount < 3) {
        		this.fnc_Message("PAY006", "일용근로소득"); // 전산매체 신고할 사업소득 내역이 없습니다.
        		return false;
        	}

        	if (!this.fnc_Message("PAY007")) return false; // 처리 하시겠습니까? 메시지 뿌리기

        	return true;
        	
        }

        // 파일생성
        this.ComCreateFile = function () {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsCOMP_MEDI=dsCOMP_MEDI:A";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        }

        this.cmbSHRBASE_QUAR_onitemchanged = function (obj,e) {
        	this.fn_Search();
        }

        this.calSHRBASE_YEAR_onspin = function (obj,e) {
        	
        	var sMethodName  = "SEARCH00";
        	var sInDataSet 	 = "";
        	var sOutDataSet  = "dsCOMP_MED1=dsCOMP_MED1 dsCOMP_MED2=dsCOMP_MED2 dsCOMP_MED3=dsCOMP_MED3 dsCOMP_MEDI=dsCOMP_MEDI";
        	var sArgument 	 = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  	+= " action=SEARCH00";
        		sArgument  	+= " BASE_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(e.postvalue), 0, 4)); //년도
        		sArgument  	+= " BASE_QUAR=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBASE_QUAR.value)); //분기
        		sArgument  	+= " PRES_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRPRES_DATE.value)); //제출일
        		sArgument  	+= " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO)); //담당자사번

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Div0.btnFileCreate.addEventHandler("onclick", this.btnFileCreate_OnClick, this);
            this.calSHRBASE_YEAR.addEventHandler("onspin", this.calSHRBASE_YEAR_onspin, this);
            this.calSHRBASE_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBASE_QUAR.addEventHandler("onitemchanged", this.cmbSHRBASE_QUAR_onitemchanged, this);
            this.cmbSHRBASE_QUAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPRES_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TXMD0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
