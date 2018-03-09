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
                this.set_name("PAYA0070");
                this.set_titletext("수당공제코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_ALLDED1", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EPDD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAUE_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UINU_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETA_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ODPY_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SNTX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTA_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PADN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAYC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAUE_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ODPY_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SNTX_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTA_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PADN_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAYC_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WOND_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTRT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALLDED2", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EPDD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAUE_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REUD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UINU_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETA_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ODPY_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PADN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAYC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAUE_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ODPY_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PADN_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DAYC_YSNO_V\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WOND_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">EPDD_CODE</Col><Col id=\"DSNAME\">dsEPDD_CODE_A</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">EPDD_CODE</Col><Col id=\"DSNAME\">dsEPDD_CODE_D</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">WOND_CODE</Col><Col id=\"DSNAME\">dsWOND_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">REUD_CODE</Col><Col id=\"DSNAME\">dsREUD_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsRTRT_CODE</Col><Col id=\"CODEID\">RTRT_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tabPY_ALLDED", "absolute", "8", "37", null, null, "25", "15", this);
            obj.set_taborder("1");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabPY_ALLDED_A", this.tabPY_ALLDED);
            obj.set_taborder("38");
            obj.set_text("지급항목");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.tabPY_ALLDED.addChild(obj.name, obj);
            obj = new Grid("grdPY_ALLDED1", "absolute", "10", "30", null, null, "10", "10", this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_ALLDED1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"87\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급항목코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급항목명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"급여사용\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"고용보험포함\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"보수총액포함\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"통상임금포함\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"지급여부관리\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"일할계산\"/><Cell col=\"9\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"지급총액여부\"/><Cell col=\"10\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"퇴직사용\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"원단위\"/><Cell col=\"12\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계산순서\"/><Cell col=\"13\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"출력순서\"/><Cell col=\"14\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:EXPD_CODE\" mask=\"####\" editlimit=\"4\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:EXPD_NAME\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:WAUE_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:UINU_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:RETA_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ODPY_YSNO\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:PADN_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:DAYC_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PYTA_YSNO\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:REUD_CODE\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:WOND_CODE\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:CALC_ORDR\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:SORT_ORDR\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:REMK_200X\" editlimit=\"100\" editimemode=\"native\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "224", "21", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "10", "24", "216", "6", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_taborder("2");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "630", "80", "10", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_taborder("4");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1142", "75", "10", "67", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "580", "0", "80", "30", null, null, this.tabPY_ALLDED.tabPY_ALLDED_A);
            obj.set_taborder("6");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_A.addChild(obj.name, obj);
            obj = new Tabpage("tabPY_ALLDED_D", this.tabPY_ALLDED);
            obj.set_taborder("38");
            obj.set_text("공제항목");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.tabPY_ALLDED.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "176", "21", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("1");
            obj.set_usedecorate("true");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Grid("grdPY_ALLDED2", "absolute", "10", "30", null, null, "10", "10", this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_ALLDED2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"83\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"64\"/><Column size=\"89\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"347\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공제항목코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공제항목명\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"공제항목구분\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"급여사용\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"지급여부관리\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"원단위\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"계산순서\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"출력순서\"/><Cell col=\"9\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:EXPD_CODE\" mask=\"####\" editlimit=\"4\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:EXPD_NAME\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EPDD_CODE\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:WAUE_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:PADN_YSNO\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:WOND_CODE\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:CALC_ORDR\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:SORT_ORDR\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:REMK_200X\" editlimit=\"100\" editimemode=\"native\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "10", "24", "216", "6", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_taborder("2");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "580", "0", "80", "30", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_taborder("4");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1142", "75", "10", "67", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "603", "80", "10", null, null, this.tabPY_ALLDED.tabPY_ALLDED_D);
            obj.set_taborder("6");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabPY_ALLDED.tabPY_ALLDED_D.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("급여항목관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 급여관리 > 급여기준정보 > 급여항목관리");
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

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "652", "56", "128", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("10");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("11");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 731, this.tabPY_ALLDED.tabPY_ALLDED_A,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_text("지급항목");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");

            	}
            );
            this.tabPY_ALLDED.tabPY_ALLDED_A.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 731, this.tabPY_ALLDED.tabPY_ALLDED_D,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_text("공제항목");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");

            	}
            );
            this.tabPY_ALLDED.tabPY_ALLDED_D.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("수당공제코드관리");
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
        this.addIncludeScript("PAYA0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0070 급여항목관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.12		고민주		Initial Created.
         *   2016.10.04		안윤준		수정
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
        this.sPACKAGENAME = "PAYA0070";

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

        	this.fnc_DatasetClear("dsPY_ALLDED1");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_ALLDED1=dsPY_ALLDED";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.fnc_DatasetClear("dsPY_ALLDED2");
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_ALLDED2=dsPY_ALLDED";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.tabPY_ALLDED.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	if (this.tabPY_ALLDED.tabindex == "0") {
        		var iRow = this.dsPY_ALLDED1.insertRow(this.dsPY_ALLDED1.rowposition + 1);
        		this.dsPY_ALLDED1.set_rowposition(iRow);

        		this.dsPY_ALLDED1.setColumn(iRow,  "EXPD_TYPE", "A" );
        		this.dsPY_ALLDED1.setColumn(iRow,  "WOND_CODE", "1" );

        		this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setCellPos(this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_CODE"));
        		this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setFocus();

        	} else if(this.tabPY_ALLDED.tabindex == "1") {
        		var iRow = this.dsPY_ALLDED2.insertRow(this.dsPY_ALLDED2.rowposition + 1);
        		this.dsPY_ALLDED2.set_rowposition(iRow);

        		this.dsPY_ALLDED2.setColumn(iRow,  "EXPD_TYPE", "D" );
        		this.dsPY_ALLDED2.setColumn(iRow,  "WOND_CODE", "1" );

        		this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setCellPos(this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_CODE"));
        		this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setFocus();
        	}

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.tabPY_ALLDED.tabindex == "0") {
        		if (this.fn_DeleteCheck()) this.dsPY_ALLDED1.deleteRow(this.dsPY_ALLDED1.rowposition);
        		this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setFocus();

        	} else if(this.tabPY_ALLDED.tabindex == "1") {
        		if (this.fn_DeleteCheck()) this.dsPY_ALLDED2.deleteRow(this.dsPY_ALLDED2.rowposition);
        		this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setFocus();

        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	if (this.tabPY_ALLDED.tabindex == "0") {
        		this.fnc_DataSetCancel("dsPY_ALLDED1");
        		this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setFocus();

        	} else if(this.tabPY_ALLDED.tabindex == "1") {
        		this.fnc_DataSetCancel("dsPY_ALLDED2");
        		this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setFocus();

        	}
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_ALLDED_A=dsPY_ALLDED1:U dsPY_ALLDED_D=dsPY_ALLDED2:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabPY_ALLDED.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_ALLDED1, dsPY_ALLDED2", this);
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
        	if (this.fnc_DatasetChangeCheck("dsPY_ALLDED1,dsPY_ALLDED2")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var iSelectRowCount;
        	if (this.tabPY_ALLDED.tabindex == "0") {

        		if (this.dsPY_ALLDED1.getRowCount() < 1 ) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		iSelectRowCount = this.fnc_SelectRowCount(this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1);
        	} else if (this.tabPY_ALLDED.tabindex == "1") {

        		if (this.dsPY_ALLDED2.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		iSelectRowCount = this.fnc_SelectRowCount(this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2);
        	}

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {

        		var sQuestionText;
        		if (this.tabPY_ALLDED.tabindex == "0") {
        			sQuestionText = "지급항목코드 : " + this.fnc_Trim(this.dsPY_ALLDED1.getColumn(this.dsPY_ALLDED1.rowposition, "EXPD_CODE"));
        		} else if (this.tabPY_ALLDED.tabindex == "1") {
        			sQuestionText = "공제항목코드 : " + this.fnc_Trim(this.dsPY_ALLDED2.getColumn(this.dsPY_ALLDED2.rowposition, "EXPD_CODE"));
        		}

        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_ALLDED1 ,dsPY_ALLDED2")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsPY_ALLDED1.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_ALLDED1.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED1.getColumn(i, "EXPD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급항목코드", this.dsPY_ALLDED1, i, this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED1.getColumn(i, "EXPD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급항목명", this.dsPY_ALLDED1, i, this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED1.getColumn(i, "EXPD_CODE"))) <1) {
        			return this.fnc_CheckPostAction("TMM072", "원단위", this.dsPY_ALLDED1, i, this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "WOND_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED1.getColumn(i, "CALC_ORDR"))) <1) {
        			return this.fnc_CheckPostAction("TMM072", "계산순서", this.dsPY_ALLDED1, i, this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "CALC_ORDR");
        		}
        	}

        	for (var i = 0; i < this.dsPY_ALLDED2.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_ALLDED2.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED2.getColumn(i, "EXPD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제항목코드", this.dsPY_ALLDED2, i, this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED2.getColumn(i, "EXPD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제항목명", this.dsPY_ALLDED2, i, this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED2.getColumn(i, "EXPD_CODE"))) <1) {
        			return this.fnc_CheckPostAction("TMM072", "원단위", this.dsPY_ALLDED2, i, this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "WOND_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALLDED2.getColumn(i, "CALC_ORDR"))) <1) {
        			return this.fnc_CheckPostAction("TMM072", "계산순서", this.dsPY_ALLDED2, i, this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "CALC_ORDR");
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
        		sReturnString += " EXPD_TYPE=" 	+ this.fnc_Quote("A");

        	}else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EXPD_TYPE=" 	+ this.fnc_Quote("D");

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
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
        		this.fnc_Information(this.tabPY_ALLDED.tabPY_ALLDED_A.stInformation, this.dsPY_ALLDED1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_ALLDED1.getCaseCount("dataset.getRowLevel(currow)==0"), this.dsPY_ALLDED2.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabPY_ALLDED.tabPY_ALLDED_D.stInformation, this.dsPY_ALLDED2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_ALLDED1);
        		this.fn_KeyFieldDisible(this.dsPY_ALLDED2);
        		this.fnc_Information(this.tabPY_ALLDED.tabPY_ALLDED_A.stInformation, 0, "SAVE");
        		this.fnc_Information(this.tabPY_ALLDED.tabPY_ALLDED_D.stInformation, 0, "SAVE");
        		this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setCellPos(this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_CODE"));
        		this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setCellPos(this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_CODE"));
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 	= new Array();
        			arrParam[0] = "GRID,tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1,dsRTRT_CODE,RTRT_CODE";
        			arrParam[1] = "GRID,tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1,dsREUD_CODE,REUD_CODE";
        			arrParam[2] = "GRID,tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1,dsWOND_CODE,WOND_CODE";
        			arrParam[3] = "GRID,tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2,dsWOND_CODE,WOND_CODE";
        			arrParam[4] = "GRID,tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2,dsEPDD_CODE_D,EPDD_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        	
        	this.dsEPDD_CODE_A.filter("REF1_FILD=='A'");
        	this.dsEPDD_CODE_D.filter("REF1_FILD=='D'");
        	var nRow = this.dsEPDD_CODE_D.insertRow(0)
        	this.dsEPDD_CODE_D.setColumn(nRow, "COMD_CDNM", "선택");
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		if (this.tabPY_ALLDED.tabindex == "0") {
        			this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setCellProperty("Body", this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_CODE"), "edittype", "normal");
        		} else if (this.tabPY_ALLDED.tabindex == "1") {
        			this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setCellProperty("Body", this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_CODE"), "edittype", "normal");
        		}

        	} else {
        		if (this.tabPY_ALLDED.tabindex == "0") {
        			this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1.setCellProperty("Body", this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_A.grdPY_ALLDED1, "EXPD_CODE"), "edittype", "none");
        		} else if (this.tabPY_ALLDED.tabindex == "1") {
        			this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2.setCellProperty("Body", this.fnc_GridColumnIndex(this.tabPY_ALLDED.tabPY_ALLDED_D.grdPY_ALLDED2, "EXPD_CODE"), "edittype", "none");
        		}
        	}
        }

        this.tabPY_ALLDED_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_ALLDED1.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_ALLDED2.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.tabPY_ALLDED.addEventHandler("onchanged", this.tabPY_ALLDED_onchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
