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
                this.set_name("FSMA0020");
                this.set_titletext("품목분류관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_CLSFXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_LEVE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_CLSF\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"UPXX_CLSF\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"UPXX_NAME\" type=\"STRING\" size=\"100\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTREE_VIEW", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_LEVE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASCL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"IMAG_IDXX\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTE_IMAG\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_IMAG\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">FSM002</Col><Col id=\"DSNAME\">dsASCL_CODE</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox02", "absolute", "308", null, null, "91", "25", "15", this);
            obj.set_taborder("79");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "280", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_CLSFXM", "absolute", "308", "128", null, null, "25", "121", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_CLSFXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_align("right");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"193\"/><Column size=\"39\"/><Column size=\"0\"/><Column size=\"170\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"품목분류코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"품목분류명\"/><Cell col=\"2\" displaytype=\"text\" text=\"레벨\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"5\" displaytype=\"text\" text=\"정렬순서\"/><Cell col=\"6\" displaytype=\"text\" text=\"사용여부\"/><Cell col=\"7\" displaytype=\"text\" text=\"이전분류코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_CODE\" mask=\"@@-@@-@@@\" editlimit=\"6\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CLSF_NAME\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_LEVE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:ASCL_CODE\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASCL_NAME\" expandshow=\"hide\" expandsize=\"20\" treestartlevel=\"20\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SORT_ORDR\" editlimit=\"15\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:USEX_YSNO\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BEFO_CLSF\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("tvFS_CLSFXM", "absolute", "8", "128", "270", null, null, "15", this);
            obj.set_binddataset("dsTREE_VIEW");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("true");
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"261\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none transparent ;background2: ;selectline:1 none #808080ff ;\" text=\"bind:CLSF_NAME\" treestartlevel=\"1\" treelevel=\"bind:CLSF_LEVE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_text("품목분류관리");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_taborder("18");
            obj.set_text("자산관리>품목분류관리");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "162", "71", "176", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTREE_VIEW");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "97", "71", "63", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTREE_VIEW");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "20", "71", "70", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("선택분류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "563", "27", "25", null, this);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskUPXX_CLSF", "absolute", "426", null, "130", "21", null, "24", this);
            obj.set_taborder("51");
            obj.set_type("string");
            obj.set_mask("@@-@@-@@@");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "964", null, "178", "21", null, "50", this);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "896", null, "82", "21", null, "50", this);
            obj.set_taborder("56");
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPXX_NAME", "absolute", "581", null, "290", "21", null, "24", this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "333", null, "87", "21", null, "24", this);
            obj.set_taborder("59");
            obj.set_text("상위품목분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_NAME", "absolute", "581", null, "290", "21", null, "50", this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_CODE", "absolute", "426", null, "130", "21", null, "50", this);
            obj.set_taborder("62");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "357", null, "74", "21", null, "50", this);
            obj.set_taborder("63");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUSEX_YSNO", "absolute", "906", null, "77", "21", null, "24", this);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpASCL_CODE", "absolute", "558", null, "22", "21", null, "50", this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUPXX_CLSF", "absolute", "558", null, "22", "21", null, "24", this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "308", "107", "262", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", null, "141", "30", null, "879", "174", this);
            obj.set_taborder("76");
            obj.set_text("W30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("77");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "309", "612", "30", "89", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "602", null, "90", "21", null, "76", this);
            obj.set_taborder("50");
            obj.set_text("품목분류명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCLSF_CODE", "absolute", "426", null, "130", "21", null, "76", this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_mask("@@-@@-@@@");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cobCLSF_LEVE", "absolute", "964", null, "178", "21", null, "76", this);
            this.addChild(obj.name, obj);
            var cobCLSF_LEVE_innerdataset = new Dataset("cobCLSF_LEVE_innerdataset", this.cobCLSF_LEVE);
            cobCLSF_LEVE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(cobCLSF_LEVE_innerdataset);
            obj.set_taborder("2");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            obj.set_codecolumn("codecolumn");

            obj = new Edit("edtCLSF_NAME", "absolute", "683", null, "188", "21", null, "76", this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_CLSFXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "357", null, "74", "21", null, "76", this);
            obj.set_taborder("48");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "896", null, "82", "21", null, "76", this);
            obj.set_taborder("49");
            obj.set_text("Level");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품목분류관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtSHRCLSF_NAME_value","edtSHRCLSF_NAME","value","dsTREE_VIEW","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSHRCLSF_CODE_value","edtSHRCLSF_CODE","value","dsTREE_VIEW","CLSF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskHIGH_CODE_value","mskUPXX_CLSF","value","dsFS_CLSFXM","UPXX_CLSF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCATE_CODE_value","mskCLSF_CODE","value","dsFS_CLSFXM","CLSF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cobMENU_LEVE_value","cobCLSF_LEVE","value","dsFS_CLSFXM","CLSF_LEVE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMENU_NAME_value","edtCLSF_NAME","value","dsFS_CLSFXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMENU_ORDE_value","edtSORT_ORDR","value","dsFS_CLSFXM","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPROG_NAME_value","edtUPXX_NAME","value","dsFS_CLSFXM","UPXX_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUPXX_NAME_value","edtASCL_NAME","value","dsFS_CLSFXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUPXX_MENU_value","edtASCL_CODE","value","dsFS_CLSFXM","ASCL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkMENU_YSNO_value","chkUSEX_YSNO","value","dsFS_CLSFXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FSMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMA0020 품목분류관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "FSMA0020";

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
        	this.fn_Treeview();
        	this.fn_Search();
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
        	this.fnc_DatasetClear("dsFS_CLSFXM"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_CLSFXM=dsFS_CLSFXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_CLSFXM.setFocus(); 
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsFS_CLSFXM.addRow();
        	this.dsFS_CLSFXM.setColumn(this.dsFS_CLSFXM.rowposition, "USEX_YSNO", "1");

        	if (this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition, "CLSF_LEVE") == 2) {
        		this.dsFS_CLSFXM.setColumn(iRow, "CLSF_CODE", this.fnc_SubStr(this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition, "CLSF_CODE"), 0, 4));
        	}

        	this.mskCLSF_CODE.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsFS_CLSFXM.deleteRow(this.dsFS_CLSFXM.rowposition);
        	this.grdFS_CLSFXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_CLSFXM");
        	this.grdFS_CLSFXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsFS_CLSFXM=dsFS_CLSFXM:U";
        	var sOutDataSet = "dsTREE_VIEW=dsTREE_VIEW";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_CLSFXM.setFocus();
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
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_CLSFXM",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_CLSFXM.getRowCount() < 1) {
        		this.fnc_Message("TMM002");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdFS_CLSFXM);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("M1010", iSelectRowCount);
        		
        	} else {
        		var sQuestionText  = "품목분류코드 (" + this.fnc_Trim(this.dsFS_CLSFXM.getColumn(this.dsFS_CLSFXM.rowposition, "CLSF_CODE")) + ")";
        			sQuestionText += " 품목분류명  (" + this.fnc_Trim(this.dsFS_CLSFXM.getColumn(this.dsFS_CLSFXM.rowposition, "CLSF_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_CLSFXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sLevel;
        	// 필수 입력 항목 체크
        	for (var row = 0; row < this.dsFS_CLSFXM.getRowCount(); row++) 	{
        	
        		sLevel = this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "CLSF_LEVE"));

        		if (this.fnc_ToUpper(this.dsFS_CLSFXM.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "CLSF_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "품목분류", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "CLSF_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "CLSF_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "품목분류명", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "CLSF_NAME");
        		}

        		if (this.fnc_Length(sLevel) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "Level", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "CLSF_LEVE");
        		}

        		if (sLevel == "1" && this.fnc_Length(this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "ASCL_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산분류", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "ASCL_CODE");
        		}
        		
        		if (sLevel != "1" && this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "ASCL_CODE")) != this.fnc_SubStr(this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "CLSF_CODE")),0,2) ) {
        		       this.fnc_Message("TMM125", "Level값이 1인경우 품목분류값 앞2자리값이 자산분류코드와 같아야합니다");
        		    return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "SORT_ORDR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "정렬순서", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "SORT_ORDR");
        		}

        		// if (this.fnc_Trim(this.dsFS_CLSFXM.getColumn(row, "UPXX_CLSF")) != 1 ) {
        		// return this.fnc_CheckPostAction("TMM072", "상위메뉴", this.dsFS_CLSFXM, row, this.grdFS_CLSFXM, "UPXX_CLSF");
        		// }
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		// 조회 조건으로 레벨 * 2 자리수 만큼만 보내기
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Left(this.fnc_Trim(this.edtSHRCLSF_CODE.value), this.dsTREE_VIEW.getColumn(this.dsTREE_VIEW.rowposition, "CLSF_LEVE") * 2));

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtASCL_CODE.value));

        	// 조회 Argument 생성(treeview)
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsFS_CLSFXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_CLSFXM.rowcount);
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		this.fn_Treeview();
        		
        	} else if (sMethodName == "SEARCH01") {
        		// if (dsTREE_VIEW.getRowCount()>0) ExpandItem(tvFS_CLSFXM,1);
        		
        	} else if (sMethodName=="GetCommCode") {

        	} 
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) { 
        		this.mskCLSF_CODE.set_enable(true);
        	} else {
         		this.mskCLSF_CODE.set_enable(false);
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  MENU TREE VIEW        |
         +------------------------*/
        this.fn_Treeview = function () {

        	this.fnc_DatasetClear("dsTREE_VIEW"); 
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTREE_VIEW=dsTREE_VIEW";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tvFS_CLSFXM.setFocus(); 
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------------+
         |  레벨별 자산분류 수정여부 체크  |
         +---------------------------------*/
        this.dsFS_CLSFXM_OnColumnChanged = function (obj,e)
        {
        	if (e.columnid == "CLSF_LEVE") {
        	
        		if (e.newvalue != "1") {
        			this.dsFS_CLSFXM.setColumn(e.row, "ASCL_CODE", ""); //자산코드
        			this.dsFS_CLSFXM.setColumn(e.row, "ASCL_NAME", ""); //자산분류
        		}
        		
        	} else if (e.columnid != "ASCL_NAME") {
        		return;
        	}
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 자산분류
        	if ((obj.name == "imgHelpASCL_CODE") || (obj.name == "edtASCL_NAME")) {

        		arrParam[0] = "FSM0002";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtASCL_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtASCL_NAME";                         
        		arrParam[5] = "edtASCL_CODE,edtASCL_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	// 상위메뉴
        	} else if ((obj.name == "imgHelpUPXX_CLSF") || (obj.name == "edtUPXX_NAME")) {

        		arrParam[0] = "FSM0003";                                 		                              		
        		arrParam[1] = this.fnc_Trim(this.cobCLSF_LEVE.value); 
        		arrParam[2] = this.fnc_Trim(this.edtUPXX_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtUPXX_NAME";                         
        		arrParam[5] = "mskUPXX_CLSF,edtUPXX_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} 
        }

        /*---------------------------------+
         | Level 1일경우만 자산분류 가능 |
         +---------------------------------*/
        this.fn_ASCL_CODE = function () {

        	var sLevel = this.fnc_Trim(this.dsFS_CLSFXM.getColumn(this.dsFS_CLSFXM.rowposition, "CLSF_LEVE"));
        	
        //	trace("-------------sLevel : " + sLevel);
        	
        	if (this.fnc_Length(this.fnc_Trim(sLevel)) < 1) return;

        //	trace("-------------sLevel : " + sLevel);
        	if (sLevel != "1") {
        	
        		this.fnc_Message("TMM125", "Level 1인 경우만 자산분류 선택 가능합니다");
        		this.dsFS_CLSFXM.setColumn(this.dsFS_CLSFXM.rowposition, "ASCL_CODE", ""); //자산코드
        		this.dsFS_CLSFXM.setColumn(this.dsFS_CLSFXM.rowposition, "ASCL_NAME", ""); //자산분류
        		return false;
        		
        	} else {
        		return true;
        	}
        }

        

        this.fn_TreeCellClick = function (obj,e)
        {
        	if (this.dsTREE_VIEW.getColumn(e.row, "CLSF_LEVE") != "3") {
        		this.fn_Search();
        	}
        	// var nChildCnt = obj.getTreeChildCount(e.row);
        	// trace("nChildCnt:" + nChildCnt + " -- e.row:" + e.row);
        	// 
        	// if (nChildCnt == 0)
        	// {
        	// return;
        	// }
        	// 
        	// if (dsTREE_VIEW.getColumn(e.row, "MENU_STATUS") == "0")
        	// {
        	// dsTREE_VIEW.setColumn(e.row, "MENU_STATUS", "1");
        	// }
        	// else
        	// {
        	// dsTREE_VIEW.setColumn(e.row, "MENU_STATUS", "0");
        	// }
        }

        this.fn_TreeExpand = function (obj,e) {

        	var iRow = this.tvFS_CLSFXM.getTreeRow(e.row);

        	// Menu면 Expand
        	if (this.dsTREE_VIEW.getColumn(e.row, "CLSF_LEVE") != "3") {
        	
        		if (this.tvFS_CLSFXM.getTreeStatus(iRow)) {
        			this.tvFS_CLSFXM.setTreeStatus(iRow, false);
        		} else {
        			this.tvFS_CLSFXM.setTreeStatus(iRow, true);
        		}
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_CLSFXM.addEventHandler("oncolumnchanged", this.dsFS_CLSFXM_OnColumnChanged, this);
            this.dsFS_CLSFXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_CLSFXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdFS_CLSFXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tvFS_CLSFXM.addEventHandler("oncellclick", this.fn_TreeCellClick, this);
            this.tvFS_CLSFXM.addEventHandler("oncelldblclick", this.fn_TreeExpand, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPXX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPXX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_CODE.addEventHandler("oneditclick", this.edtASCL_CODE_oneditclick, this);
            this.imgHelpASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpUPXX_CLSF.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cobCLSF_LEVE.addEventHandler("onitemchanged", this.fn_MenuLevelChange, this);
            this.cobCLSF_LEVE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FSMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
