﻿(function()
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
                this.set_name("EVMB0040");
                this.set_titletext("업적평가");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_SBMTOT", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_GUBUN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SBMS_TOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBMS_YTOT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SBMS_NTOT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SGDL_NOPS\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"AGDL_NOPS\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"BGDL_NOPS\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CGDL_NOPS\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DGDL_NOPS\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"WES2_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"GLRS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"WROP_CNTT\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"WRG1_EVSC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE1_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVC1_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRG2_EVSC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE2_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVC2_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM1_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM2_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRG_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_GUBUN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"WRO1_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"WRO2_CNTT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_TAEGXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRWK_CNTT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"PROB_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"EVBS_CNTT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAIP_RATE\" size=\"3\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GLRS_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WRGD_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SELF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM1_YSNO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM2_YSNO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACH1_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE1_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACH2_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE2_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRG_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"WES1_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"WES2_EMNR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGEGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WGEG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ENDX_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ABLT_EVSC\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EVAL_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCodeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"name\">N</Col></Row></Rows>");
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
            obj.set_text("업적평가");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 2메뉴");
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

            obj = new Static("Static30", "absolute", "28", "71", "93", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("평가종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static31", "absolute", "305", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "829", "103", "80", "25", null, null, this);
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

            obj = new Grid("grdEV_SBMTOT", "absolute", "8", "128", "459", "240", null, null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsEV_SBMTOT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"인원\"/><Cell col=\"2\" rowspan=\"2\" text=\"완료\"/><Cell col=\"3\" rowspan=\"2\" text=\"미완료\"/><Cell col=\"4\" colspan=\"5\" text=\"등급별 인원\"/><Cell row=\"1\" col=\"4\" text=\"S\"/><Cell row=\"1\" col=\"5\" text=\"A\"/><Cell row=\"1\" col=\"6\" text=\"B\"/><Cell row=\"1\" col=\"7\" text=\"C\"/><Cell row=\"1\" col=\"8\" text=\"D\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:GLRS_GUBUN\" editlimit=\"0\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:SBMS_TOT\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:SBMS_YTOT\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:SBMS_NTOT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:SGDL_NOPS\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:AGDL_NOPS\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:BGDL_NOPS\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:CGDL_NOPS\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:DGDL_NOPS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "62", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "73", "35", "74", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("제출취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "374", "71", "80", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "456", "71", "21", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "479", "71", "100", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", "107", "366", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("피평가자현황");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "487", "107", "366", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("피평가자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_WGETXM", "absolute", "487", "128", null, "240", "25", null, this);
            obj.set_taborder("119");
            obj.set_binddataset("dsEV_WGETXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"소속\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"사원번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\"/><Cell col=\"4\" rowspan=\"2\" text=\"완료\"/><Cell col=\"5\" colspan=\"3\" text=\"1차평가\"/><Cell col=\"8\" colspan=\"3\" text=\"2차평가\"/><Cell row=\"1\" col=\"5\" text=\"점수\"/><Cell row=\"1\" col=\"6\" text=\"등급\"/><Cell row=\"1\" col=\"7\" text=\"제출\"/><Cell row=\"1\" col=\"8\" text=\"점수\"/><Cell row=\"1\" col=\"9\" text=\"등급\"/><Cell row=\"1\" col=\"10\" text=\"제출\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SECT_NAME\" editlimit=\"0\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:GLRG_CODE\"/><Cell col=\"5\" edittype=\"expr:GLRG_CODE =='Y' &amp;&amp; GLRS_GUBUN == '1' ? &quot;none&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:WRG1_EVSC\" mask=\"###\" maskchar=\" \"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:WGE1_CODE\" combodataset=\"dsEV_WGEGXM\" combocodecol=\"WGEG_CODE\" combodatacol=\"WGEG_CODE\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:SBM1_YSNO\" combodataset=\"dsCodeYn\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"8\" edittype=\"expr:SBM1_YSNO =='1' ? &quot;none&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:WRG2_EVSC\" mask=\"###\" maskchar=\" \"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:WGE2_CODE\" combodataset=\"dsEV_WGEGXM\" combocodecol=\"WGEG_CODE\" combodatacol=\"WGEG_CODE\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:SBM2_YSNO\" combodataset=\"dsCodeYn\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "8", "372", "366", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("업적평가");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_TAEGXD", "absolute", "8", "393", null, null, "25", "104", this);
            obj.set_taborder("121");
            obj.set_binddataset("dsEV_TAEGXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"연도목표\"/><Cell col=\"2\" rowspan=\"2\" text=\"실적\"/><Cell col=\"3\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"4\" rowspan=\"2\" text=\"비중도(%)\"/><Cell col=\"5\" colspan=\"2\" text=\"본인평가\"/><Cell col=\"7\" colspan=\"2\" text=\"1차평가\"/><Cell col=\"9\" colspan=\"2\" text=\"2차평가\"/><Cell row=\"1\" text=\"핵심과제\"/><Cell row=\"1\" col=\"1\" text=\"추진방법및일정\"/><Cell row=\"1\" col=\"5\" text=\"점수\"/><Cell row=\"1\" col=\"6\" text=\"등급\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"점수\"/><Cell row=\"1\" col=\"8\" text=\"등급\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"점수\"/><Cell row=\"1\" col=\"10\" text=\"등급\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:PRWK_CNTT\" wordwrap=\"char\" editlimit=\"0\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PROB_CNTT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:GLRS_CNTT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EVBS_CNTT\" wordwrap=\"char\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:TAIP_RATE\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:WRGD_EVSC\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:SELF_CODE\"/><Cell col=\"7\" edittype=\"expr:GLRG_CODE =='Y' &amp;&amp; GLRS_GUBUN == '1' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:ACH1_EVSC\" mask=\"###\" maskchar=\" \" editlimit=\"3\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:WGE1_CODE\"/><Cell col=\"9\" edittype=\"expr:SBM1_YSNO =='1' &amp;&amp; SBM2_YSNO =='0' &amp;&amp; GLRS_GUBUN == '2' ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:ACH2_EVSC\" mask=\"###\" maskchar=\" \" editlimit=\"3\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:WGE2_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "74", "25", "15", this);
            obj.set_taborder("122");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "16", null, "108", "21", null, "42", this);
            obj.set_taborder("124");
            obj.set_text("1차평가의견");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWRO1_CNTT", "absolute", "108", null, "473", "56", null, "24", this);
            obj.set_taborder("125");
            obj.set_wordwrap("char");
            obj.set_maxlength("700");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "111", "111", "10", "13", null, null, this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "119", "107", "168", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "563", "111", "10", "13", null, null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "573", "107", "212", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation3", "absolute", "95", "372", "168", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "87", "375", "10", "13", null, null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "614", "368", "80", "25", null, null, this);
            obj.set_taborder("132");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "545", "613", "80", "15", null, null, this);
            obj.set_taborder("133");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWRO2_CNTT", "absolute", "680", null, null, "56", "34", "24", this);
            obj.set_taborder("134");
            obj.set_wordwrap("char");
            obj.set_maxlength("700");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "588", null, "108", "21", null, "42", this);
            obj.set_taborder("135");
            obj.set_text("2차평가의견");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("업적평가");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","txtWRO1_CNTT","value","dsEV_WGETXM","WRO1_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","txtWRO2_CNTT","value","dsEV_WGETXM","WRO2_CNTT");
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
        this.addIncludeScript("EVMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMB0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMB0040 업적평가
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMB0040"; 
        this.sSaveRowChk  = "T";
        this.sAch1Evsc = "";
        this.sWge1Code = "";
        this.sAch2Evsc = "";
        this.sWge2Code = "";

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
        	this.fn_GetUserCombo("cmbSHREVAL_NAME");
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);	
        	
        	this.cmbSHREVAL_NAME.set_index(0);
        	this.cmbSHREVAL_NAME.setFocus();

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
        	
        	this.fnc_DatasetClear("dsEV_SBMTOT,dsEV_WGETXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_SBMTOT=dsEV_SBMTOT dsEV_WGETXM=dsEV_WGETXM dsEV_WGEGXM=dsEV_WGEGXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	this.fnc_DataSetCancel("dsEV_WGETXM");
        	this.fnc_DataSetCancel("dsEV_TAEGXD");
        	this.dsEV_TAEGXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_WGETXM=dsEV_WGETXM:U dsEV_TAEGXD=dsEV_TAEGXD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_TAEGXD.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_WGETXM,dsEV_TAEGXD", this);
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
            if (this.fnc_DatasetChangeCheck("dsEV_WGETXM,dsEV_TAEGXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
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

        	if (!this.fnc_DatasetChangeCheck("dsEV_WGETXM,dsEV_TAEGXD")) {
        		this.fnc_Message("TMM003");
        		return false;
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
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if (sKind == "SEARCH02") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "SYNT_EACD"));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		sReturnString += " ASSR_EMNR=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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
        	    this.fnc_Information(this.stInformation1, this.dsEV_SBMTOT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation2, this.dsEV_WGETXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_WGETXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation3, this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/
        /*-------------------------------+
         | 조회조건 평가명 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        	
        	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    	    	        
            arrParam2[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        this.cmbSHREVAL_NAME_onitemchanged = function(obj,e)
        {
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            var sEVTA_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVTA_YSNO")); // 평가대상여부  
            var sEVIN_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVIN_YSNO")); // 평가입력여부
        		
        	if(sCLSE_YSNO == '1' || sEVIN_YSNO == '0' || sEVTA_YSNO == '0'){
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        		
        		this.grdEV_WGETXM.set_readonly(true);
        		this.grdEV_TAEGXD.set_readonly(true);
        				
        		if(sCLSE_YSNO == '1'){
        			this.fnc_Message("EVM010");
        		} else if(sEVTA_YSNO == '0'){
        			this.fnc_Message("EVM014");
        		} else if(sEVIN_YSNO == '0'){
        			this.fnc_Message("EVM016");
        		}
        		
        	} else {
        		this.btn_PROC.set_enable(true);
        		this.btn_PROC00.set_enable(true);
        		
        		this.grdEV_WGETXM.set_readonly(false);
        		this.grdEV_TAEGXD.set_readonly(false);
        		
        	}
        	
        	this.fn_Search();
        }

        /*-------------------------------+
         | 제출 처리                    |
         +------------------------------*/
        this.btn_PROC_OnClick = function(obj,e)
        {
            if (this.fnc_DatasetChangeCheck("dsEV_WGETXM,dsEV_TAEGXD")) {
        		if (this.fnc_Message("EVM022") == false) return false;
        	}

        	if (!this.fn_EVAL_OnCheck("PROC00")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		sArgument  += " GLRS_GUBUN=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"));
        	    
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------------------+
         | 제출취소 처리               |
         +------------------------------*/
        this.btn_PROC00_OnClick = function(obj,e)
        {
        	if (!this.fn_EVAL_OnCheck("PROC01")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC01";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		sArgument  += " GLRS_GUBUN=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"));
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.fn_EVAL_OnCheck = function(sMethodName){
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_NAME = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_NAME"));
        	var sEMPL_NUMB = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB");
        	var sEMPL_NAME = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NAME");
        	
        	if (sMethodName == "PROC00") {
        		for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        			if (this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "GLRS_GUBUN")) == "1"){
        				if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "WGE1_CODE"))) < 1) {
        					return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 1차 평가등급이", this.dsEV_TAEGXD, i, this.grdEV_TAEGXD, "ACH1_EVSC");
        				}
        			} else {
        				if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "WGE2_CODE"))) < 1) {
        					return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 2차 평가등급이", this.dsEV_TAEGXD, i, this.grdEV_TAEGXD, "ACH2_EVSC");
        				}
        			}
        		}
        				
        		if (this.fnc_Message("EVM011", sCOMB_NAME + " " + sEMPL_NUMB + " " + sEMPL_NAME + " 업적평가") == false) return false;		
        	} else if (sMethodName == "PROC01") {
        		if (this.fnc_Message("EVM012", sCOMB_NAME + " " + sEMPL_NUMB + " " + sEMPL_NAME + " 업적평가") == false) return false;		
        	}
        	
        	return true;
        }

        this.dsEV_WGETXM_canrowposchange = function(obj,e)
        {
        	this.sSaveRowChk = "T";
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		this.sSaveRowChk = "F";
        		if (this.fnc_Message("TMM023") == false) return false;
        		this.sSaveRowChk = "T";
        		
        		if (this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN") == "1"){
        			this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WRG1_EVSC", this.sAch1Evsc);
        			this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE1_CODE", this.sWge1Code);
        		} else {
        			this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WRG2_EVSC", this.sAch2Evsc);
        			this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE2_CODE", this.sWge2Code);
        		}
        	}	
        }

        
        this.dsEV_WGETXM_onrowposchanged = function(obj,e)
        {
            if (this.sSaveRowChk == "F") return false;
        	if (obj.getRowCount < 0) return;
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            var sEVTA_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVTA_YSNO")); // 평가대상여부  
            var sEVIN_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVIN_YSNO")); // 평가입력여부
        	var sGLRG_CODE = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRG_CODE"); // 완료여부
        	var sSBM1_YSNO = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "SBM1_YSNO"); // 업적평가1차제출여부
        	var sSBM2_YSNO = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "SBM2_YSNO"); // 업적평가2차제출여부
        	var sGLRS_GUBUN = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"); // 1차, 2차 평가자 구분
        	
        	this.txtWRO1_CNTT.set_readonly(true);
        	this.txtWRO2_CNTT.set_readonly(true);
        	
        	// 평가 마감 여부
        	if(sCLSE_YSNO == '1'){
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        	} else {
        	    // 완료여부
        		if(sGLRG_CODE == 'Y'){
        		    // 평가자(1차/2차) 구분
        			if(sGLRS_GUBUN == '1'){
        			    // 업적평가1차제출여부
        				if(sSBM1_YSNO == '0'){
        					this.btn_PROC.set_enable(true);
        					this.btn_PROC00.set_enable(false);
        				} else {
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(true);
        				}
        				if(sSBM2_YSNO == '1'){
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(false);
        				}
        				
        				this.txtWRO1_CNTT.set_readonly(false);
        				this.txtWRO2_CNTT.set_readonly(true);
        			} else if(sGLRS_GUBUN == '2'){
        				this.txtWRO1_CNTT.set_readonly(true);
        				// 업적평가1차제출여부
        				if(sSBM1_YSNO == '0'){
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(false);
        					this.txtWRO2_CNTT.set_readonly(true);
        				} else {
        				    // 업적평가2차제출여부
        				    this.txtWRO2_CNTT.set_readonly(false);
        					if(sSBM2_YSNO == '0'){
        						this.btn_PROC.set_enable(true);
        						this.btn_PROC00.set_enable(false);
        					} else {
        						this.btn_PROC.set_enable(false);
        						this.btn_PROC00.set_enable(true);
        					}
        				}
        			} else {
        				this.btn_PROC.set_enable(false);
        				this.btn_PROC00.set_enable(false);
        			}
        		} else {
        			this.btn_PROC.set_enable(false);
        			this.btn_PROC00.set_enable(false);
        		}
        	}
        	
        	this.sAch1Evsc = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "WRG1_EVSC");
        	this.sWge1Code = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "WGE1_CODE");
        	this.sAch2Evsc = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "WRG2_EVSC");
        	this.sWge2Code = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "WGE2_CODE");

        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_TAEGXD=dsEV_TAEGXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*
        this.dsEV_WGETXM_oncolumnchanged = function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
        {
        	if (e.columnid == "WRG1_EVSC"){
        		var iWRGD_EVSC = parseInt(e.newvalue);		
        		this.dsEV_WGETXM.setColumn(e.row, "WGE1_CODE", "");
        		
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR")); 
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR")); 
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_WGETXM.setColumn(e.row, "WGE1_CODE", sWGEG_CODE);
        			}
        		}
        	} else if (e.columnid == "WRG2_EVSC"){
        		var iWRGD_EVSC = parseInt(e.newvalue);		
        		this.dsEV_WGETXM.setColumn(e.row, "WGE2_CODE", "");
        		
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR")); 
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR")); 
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_WGETXM.setColumn(e.row, "WGE2_CODE", sWGEG_CODE);
        			}
        		}
        	}	
        }
        */

        this.dsEV_TAEGXD_oncolumnchanged = function(obj,e)
        {
            var iWRGD_EVSC_TOT = 0;
        	var iWRGD_EVSC = parseInt(e.newvalue);
        	var iRowCnt = this.dsEV_TAEGXD.rowcount;
        	
        	if (e.columnid == "ACH1_EVSC"){
        		for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        		    var iACH1_EVSC = 0;
        			if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "ACH1_EVSC"))) > 0) {
        				iACH1_EVSC = parseInt(this.dsEV_TAEGXD.getColumn(i, "ACH1_EVSC"));
        			}
        			iWRGD_EVSC_TOT += iACH1_EVSC;
        		}
        		
        		iWRGD_EVSC_TOT = parseInt(iWRGD_EVSC_TOT / iRowCnt);
        		
        		this.dsEV_TAEGXD.setColumn(e.row, "WGE1_CODE", "");
        		this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE1_CODE", "");
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR"));
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR"));
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_TAEGXD.setColumn(e.row, "WGE1_CODE", sWGEG_CODE);
        			}
        			if(iWRGD_EVSC < 0 || iWRGD_EVSC > 100){
        				this.dsEV_TAEGXD.setColumn(e.row, "ACH1_EVSC", null);		
        				return this.fnc_CheckPostAction("EVM019", "", this.dsEV_TAEGXD, e.row, this.grdEV_TAEGXD, "ACH1_EVSC");
        			}
        			if(iWRGD_EVSC_TOT >= iBGIN_SCOR && iWRGD_EVSC_TOT <= iENDX_SCOR){
        				this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WRG1_EVSC", iWRGD_EVSC_TOT);
        				this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE1_CODE", sWGEG_CODE);
        			}
        		}
        	} else if (e.columnid == "ACH2_EVSC"){
        		for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        			var iACH2_EVSC = 0;
        			if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "ACH2_EVSC"))) > 0) {
        				iACH2_EVSC = parseInt(this.dsEV_TAEGXD.getColumn(i, "ACH2_EVSC"));
        			}
        			iWRGD_EVSC_TOT += iACH2_EVSC;
        		}
        		
        		iWRGD_EVSC_TOT = parseInt(iWRGD_EVSC_TOT / iRowCnt);
        		
        		this.dsEV_TAEGXD.setColumn(e.row, "WGE2_CODE", "");
        		this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE2_CODE", "");
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR"));
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR"));
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_TAEGXD.setColumn(e.row, "WGE2_CODE", sWGEG_CODE);
        			}
        			if(iWRGD_EVSC < 0 || iWRGD_EVSC > 100){
        				this.dsEV_TAEGXD.setColumn(e.row, "ACH2_EVSC", null);		
        				return this.fnc_CheckPostAction("EVM019", "", this.dsEV_TAEGXD, e.row, this.grdEV_TAEGXD, "ACH2_EVSC");
        			}
        			if(iWRGD_EVSC_TOT >= iBGIN_SCOR && iWRGD_EVSC_TOT <= iENDX_SCOR){
        				this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WRG2_EVSC", iWRGD_EVSC_TOT);
        				this.dsEV_WGETXM.setColumn(this.dsEV_WGETXM.rowposition, "WGE2_CODE", sWGEG_CODE);
        			}
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_WGETXM.addEventHandler("canrowposchange", this.dsEV_WGETXM_canrowposchange, this);
            this.dsEV_WGETXM.addEventHandler("onrowposchanged", this.dsEV_WGETXM_onrowposchanged, this);
            this.dsEV_TAEGXD.addEventHandler("oncolumnchanged", this.dsEV_TAEGXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.grdEV_SBMTOT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_OnClick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.txtWRO1_CNTT.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.txtWRO2_CNTT.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);

        };

        this.loadIncludeScript("EVMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
