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
                this.set_name("PAYB0210");
                this.set_titletext("기타소득관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">INDN_CODE</Col><Col id=\"DSNAME\">dsINDN_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">INDN_CODE</Col><Col id=\"DSNAME\">dsSHRINDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsSHRCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_INCOME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"1\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"INDN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"INDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"REMK_400X\" size=\"400\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"INDN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAYX_TAMT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_TAMT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"REAL_AMOT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"WORK_CNTT\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"WABK_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"WAGE_ACNO\" size=\"256\" type=\"STRING\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_INCOME", "absolute", "8", "154", null, null, "25", "13", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_INCOME");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_taborder("5");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"재직구분\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_essential\" text=\"지급일\"/><Cell col=\"5\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_edit\" text=\"급여일지\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"소득구분\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"과세지급액\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비과세지급액\"/><Cell col=\"9\" style=\"background: ;\" text=\"지급계\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"소득세\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"주민세\"/><Cell col=\"12\" style=\"background: ;\" text=\"공제계\"/><Cell col=\"13\" style=\"background: ;\" text=\"실지급액\"/><Cell col=\"14\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editimemode=\"hangul\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:WODN_CODE\" combodataset=\"dsWODN_CODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:INDN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:WORK_CNTT\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" editfilter=\"none\" style=\"align:left;background: ;\" text=\"bind:INDN_CODE\" editlimit=\"100\" editlengthunit=\"ascii\" combodataset=\"dsPY_INCOME\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:TAP1_AMOT\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:NTP1_AMOT\" editlimit=\"15\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PAYX_TAMT\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:INCM_TAXX\" editlimit=\"15\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:INHA_TAXX\" editlimit=\"15\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DEDU_TAMT\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REAL_AMOT\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" editfilter=\"none\" style=\"align:left;background: ;\" text=\"bind:REMK_400X\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;TAP1_AMOT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;NTP1_AMOT&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PAYX_TAMT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;INCM_TAXX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;INHA_TAXX&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;DEDU_TAMT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;REAL_AMOT&quot;)\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "588", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "670", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "693", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "313", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "395", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "418", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "245", "71", "49", "21", null, null, this);
            obj.set_text("부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "401", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "101", "0", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btn_DATA_COPY", "absolute", "190", "0", "95", "21", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_text("이전자료복사");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "288", "0", "95", "21", null, null, this.divButtonList);
            obj.set_taborder("3");
            obj.set_text("급여일지선택");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "546", "71", "49", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("지급년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("기타소득관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("25");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "677", "56", "128", "4", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "613", "103", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "217", "61", "40", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "518", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRINDN_DATE", "absolute", "96", "71", "121", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("소득구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRINDN_CODE", "absolute", "96", "97", "121", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "245", "97", "70", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "313", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new PopupDiv("popINSERT1", "absolute", "1260", "288", "323", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "305", "39", null, null, this.popINSERT1);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT1);
            obj.set_taborder("39");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "252", "56", "62", "24", null, null, this.popINSERT1);
            obj.set_taborder("40");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Button("btnPayAply", "absolute", "175", "56", "74", "24", null, null, this.popINSERT1);
            obj.set_taborder("41");
            obj.set_text("급여매핑");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "166", "18", "21", "21", null, null, this.popINSERT1);
            obj.set_taborder("42");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME", "absolute", "189", "18", "100", "21", null, null, this.popINSERT1);
            obj.set_taborder("43");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "18", "80", "21", null, null, this.popINSERT1);
            obj.set_taborder("44");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "16", "56", "60", "22", null, null, this.popINSERT1);
            obj.set_taborder("45");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT1.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGP_CODE", "absolute", "86", "56", "50", "22", null, null, this.popINSERT1);
            obj.set_taborder("46");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT1.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1230", "289", "182", "8", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1230", "368", "350", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1261", "308", "8", "96", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "1574", "308", "8", "96", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1237", "398", "344", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "326", "67", null, null, this.popINSERT);
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "273", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "208", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("17");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "215", "44", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("18");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "215", "18", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("19");
            obj.set_text("의 기타소득 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("26");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("27");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Div("medSHRPAYX_DATE_FROM", "absolute", "108", "18", "100", "21", null, null, this.popINSERT);
            obj.set_taborder("28");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Div("medSHRPAYX_DATE_TO", "absolute", "108", "44", "100", "21", null, null, this.popINSERT);
            obj.set_taborder("29");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1207", "399", "182", "8", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1207", "474", "294", "8", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "1238", "418", "8", "96", null, null, this);
            obj.set_taborder("61");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1572", "418", "8", "96", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 401, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 323, 90, this.popINSERT1,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 344, 118, this.popINSERT,
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
            		p.set_titletext("기타소득관리");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYB0210.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0210.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0210 기타소득관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		고민주		Initial Created.
         *   2016.10.12		황치웅		수정.
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
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYB0210";

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
        	var month = this.fnc_Trim(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6));
        	this.divSHRINDN_DATE.fn_SetMonth(month);
        	this.divSHRINDN_DATE.setFocus();

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

        	this.fnc_GridCheckClear("grdPY_INCOME","0");
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_INCOME");
        	this.popINSERT1.medSHRPAYX_DATE.set_value("");
        	this.popINSERT1.edtSHRWAGE_CODE.set_value("");
        	this.popINSERT1.edtSHRWAGE_NAME.set_value("");
        	this.popINSERT1.edtSHRWAGP_CODE.set_value("");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_INCOME=dsPY_INCOME";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_INCOME.insertRow(this.dsPY_INCOME.rowposition + 1);
        	this.dsPY_INCOME.setColumn(iRow, "INDN_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsPY_INCOME.setColumn(iRow, "INDN_CODE", "01");
        	this.dsPY_INCOME.setColumn(iRow, "TAP1_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "TAP2_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "TAP3_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "NTP1_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "NTP2_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "NTP3_AMOT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "INCM_TAXX", "0");
        	this.dsPY_INCOME.setColumn(iRow, "INHA_TAXX", "0");
        	this.dsPY_INCOME.setColumn(iRow, "DEDU_TAMT", "0");
        	this.dsPY_INCOME.setColumn(iRow, "REAL_AMOT", "0");
        	this.fnc_GridSetCellFocus(this.grdPY_INCOME, "EMPL_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_INCOME.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsPY_INCOME.getColumn(i,"CHK") == "1"){
        				this.dsPY_INCOME.deleteRow(i);
        			}
        		}
        		this.grdPY_INCOME.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_INCOME");
        	this.grdPY_INCOME.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_INCOME=dsPY_INCOME:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_INCOME.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_INCOME", this);

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

        	if (this.fnc_DatasetChangeCheck("dsPY_INCOME")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRINDN_DATE.fn_GetMonth())) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급년월", this.divSHRINDN_DATE);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_INCOME.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.dsPY_INCOME.getCaseCount("CHK == '1'");
        	
        	if (iSelectRowCount == 0) {
        		return this.fnc_Message("TMM020");
        		
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "성명:" + this.fnc_Trim(this.dsPY_INCOME.getColumn(this.dsPY_INCOME.rowposition, "EMPL_NAME"))
        				     	+ ",지급일:" + this.fnc_Trim(this.dsPY_INCOME.getColumn(this.dsPY_INCOME.rowposition, "INDN_DATE"))
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	} else {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	}

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_INCOME")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsPY_INCOME.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_INCOME.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_INCOME.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_INCOME, i, this.grdPY_INCOME, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_INCOME.getColumn(i, "INDN_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급일", this.dsPY_INCOME, i, this.grdPY_INCOME, "INDN_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_INCOME.getColumn(i, "INDN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "소득구분", this.dsPY_INCOME, i, this.grdPY_INCOME, "INDN_CODE");
        		}
        		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsPY_INCOME.getColumn(i, "REF1_FILD"))) < 1) {  //정산예외여부
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsPY_INCOME.getColumn(i, "PAYX_DATE"))) < 1) {
        // 				return this.fnc_CheckPostAction("PAY072", this.dsPY_INCOME.getColumn(i, "EMPL_NAME"), this.dsPY_INCOME, i, this.grdPY_INCOME, "WORK_CNTT");
        // 			}
        // 		}
        	}
        	
        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    		+ this.fnc_Quote(sKind);
        		sReturnString += " INDN_DATE=" 		+ this.fnc_Quote(this.fnc_Trim(this.divSHRINDN_DATE.fn_GetMonth()));
        		sReturnString += " EMPL_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " INDN_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRINDN_CODE.value)); // 소득구분
        		sReturnString += " CLSD_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)); // 직원구분

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    		+ this.fnc_Quote(sKind);

        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm="          	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE_FROM=" + this.fnc_Quote(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth());
        		sReturnString += " PAYX_DATE_TO=" 	+ this.fnc_Quote(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth());
        		
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
        		this.fnc_Information(this.stInformation, this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdPY_INCOME.setFocus();
        		this.fn_KeyFieldDisible(this.dsPY_INCOME);

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_INCOME);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM073", this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdPY_INCOME,dsINDN_CODE,INDN_CODE";
        			arrParam[1] = "COMBO,cmbSHRINDN_CODE,dsSHRINDN_CODE,0";
        			arrParam[2] = "COMBO,cmbSHRCLSD_CODE,dsSHRCLSD_CODE,0";
        			arrParam[3] = "GRID,grdPY_INCOME,dsWODN_CODE,WODN_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		//this.dsINDN_CODE.filter("WAST_DATE==''"); // 폐기일자 없는 데이터만
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_INCOME.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_INCOME, "EMPL_NAME"), "edittype", "normal");
        		this.grdPY_INCOME.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_INCOME, "INDN_DATE"), "edittype", "date");

        	} else {
        		this.grdPY_INCOME.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_INCOME, "EMPL_NAME"), "edittype", "none");
        		this.grdPY_INCOME.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_INCOME, "INDN_DATE"), "edittype", "none");
        		
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
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
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
        		
        	} else if (obj.name == "grdPY_INCOME") {
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {
        			arrParam[0] = "HRM0002";
        			arrParam[1] = this.edtSHRDEPT_CODE.value;
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_INCOME";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "WORK_CNTT") {
        			arrParam[0] = "PAY0001";
        			arrParam[1] = "0";
        			arrParam[2] = "WORK_CNTT";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_INCOME";
        			arrParam[5] = "PAYX_DATE,WAGE_CODE,WORK_CNTT";
        			arrParam[6] = "0,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		}
        	} else if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "0";
        		arrParam[2] = this.fnc_Trim(this.popINSERT1.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "popINSERT1.edtSHRWAGE_NAME";
        		arrParam[5] = "popINSERT1.medSHRPAYX_DATE,popINSERT1.edtSHRWAGE_CODE,popINSERT1.edtSHRWAGE_NAME,popINSERT1.edtSHRWAGP_CODE";
        		arrParam[6] = "0,1,2,5";
        		arrParam[9] = "fn_CommPopupPost";

        	}
        	
        	if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        this.fn_CommPopupPost = function(sResponse) {
        	this.divButtonList_btn_PROC_onclick();
        	var sArrRtn = this.fnc_Split(sResponse, ",");
        	this.popINSERT1.medSHRPAYX_DATE.set_value(sArrRtn[0]);
        	this.popINSERT1.edtSHRWAGE_CODE.set_value(sArrRtn[1]);
        	this.popINSERT1.edtSHRWAGE_NAME.set_value(sArrRtn[2]);
        	this.popINSERT1.edtSHRWAGP_CODE.set_value(sArrRtn[3]);
        	

        }

        this.dsPY_INCOME_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_INCOME, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "WORK_CNTT") this.fn_HelpDialoge(this.grdPY_INCOME, "YES" ,e.oldvalue, e.columnid);
        	
        	var sPAYX_TAMT = this.dsPY_INCOME.getColumn(e.row, "TAP1_AMOT") + this.dsPY_INCOME.getColumn(e.row, "NTP1_AMOT");
        	var sDEDU_TAMT = this.dsPY_INCOME.getColumn(e.row, "INCM_TAXX") + this.dsPY_INCOME.getColumn(e.row, "INHA_TAXX");
        	var sREAL_AMOT = nexacro.toNumber(sPAYX_TAMT) - nexacro.toNumber(sDEDU_TAMT);
        	if ( e.columnid == "TAP1_AMOT" || e.columnid == "NTP1_AMOT" ) {
        		this.dsPY_INCOME.setColumn(e.row, "PAYX_TAMT", sPAYX_TAMT); // 지급계
        		this.dsPY_INCOME.setColumn(e.row, "REAL_AMOT", sREAL_AMOT); // 실지급액
        		
        	} else if ( e.columnid == "INCM_TAXX" || e.columnid == "INHA_TAXX" ) {	
        		this.dsPY_INCOME.setColumn(e.row, "DEDU_TAMT", sDEDU_TAMT); // 공제계
        		this.dsPY_INCOME.setColumn(e.row, "REAL_AMOT", sREAL_AMOT); // 실지급액
        		
        	} else if ( e.columnid == "INDN_CODE" ){
        		this.dsPY_INCOME.setColumn(e.row, "REF1_FILD", this.dsINDN_CODE.getColumn(this.dsINDN_CODE.findRow( "COMD_CODE", this.dsPY_INCOME.getColumn(e.row, "INDN_CODE")), "REF1_FILD"));
        		
        	}
        	
        }

        /*-----------------+
         |  팝업 열기  |
         +-----------------*/
        this.fn_DataCodeCopy = function(obj,e) {
        	
        	this.popINSERT.medSHRPAYX_DATE_TO.fn_SetMonth(this.divSHRINDN_DATE.fn_GetMonth());
        	
        	var nX 	= system.clientToScreenX(this.divButtonList.btn_DATA_COPY, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.divButtonList.btn_DATA_COPY, this.divButtonList.btn_DATA_COPY.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        	
        	this.popINSERT.trackPopup(nX, nY - 2);
        	
        }

        /*-----------------+
         |  팝업 자료생성  |
         +-----------------*/
        this.popINSERT_btnINSERT_OnClick = function(obj,e){
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준지급일", this.popINSERT.medSHRPAYX_DATE_TO);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상지급일", this.popINSERT.medSHRPAYX_DATE_FROM);
        	}

        	var sFROM_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth(), 0, 4)+"-"+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth(), 4, 2);
        	var sTO_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth(), 0, 4)+"-"+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth(), 4, 2);
        	if (this.fnc_Message("PAY011", sTO_MESS, sFROM_MESS, sTO_MESS )){
        		this.fnc_DatasetClear("dsPY_INCOME");
        		
        		var sMethodName = "PROC00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPY_INCOME=dsPY_INCOME";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);	
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		this.fn_Popup_close();
        	}
        		
        }

        /*---------------+
         | 입력 팝업 닫기 |
         +----------------*/
        this.fn_Popup_close = function(obj,e) {
        	this.popINSERT.closePopup();
        	
        }

        this.grdPY_INCOME_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }

        
        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsPY_INCOME")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsPY_INCOME");
        	this.fnc_ExcelUpload("dsPY_INCOME", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        this.fn_ExcelSuccess = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsPY_INCOME.set_enableevent(false);
        	this.dsPY_INCOME.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		
        		var iRow = this.dsPY_INCOME.addRow();
        		this.dsPY_INCOME.setRowType(i, Dataset.ROWTYPE_INSERT);
        		var sINDN_DATE = this.fnc_Replace(this.objDsImportTemp.getColumn(i, 2), "-", "");
        		
        		this.dsPY_INCOME.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, 0)); 
        		this.dsPY_INCOME.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, 1));
        		this.dsPY_INCOME.setColumn(iRow, "INDN_DATE", sINDN_DATE);
        		this.dsPY_INCOME.setColumn(iRow, "INDN_CODE", this.objDsImportTemp.getColumn(i, 3)); 
        		this.dsPY_INCOME.setColumn(iRow, "TAP1_AMOT", this.objDsImportTemp.getColumn(i, 5)); 
        		this.dsPY_INCOME.setColumn(iRow, "NTP1_AMOT", this.objDsImportTemp.getColumn(i, 6)); 
        		this.dsPY_INCOME.setColumn(iRow, "INCM_TAXX", this.objDsImportTemp.getColumn(i, 7)); 
        		this.dsPY_INCOME.setColumn(iRow, "INHA_TAXX", this.objDsImportTemp.getColumn(i, 8)); 
        		this.dsPY_INCOME.setColumn(iRow, "REMK_400X", this.objDsImportTemp.getColumn(i, 9)); 
        		if ( this.objDsImportTemp.getColumn(i, 3) == "10" )	this.dsPY_INCOME.setColumn(iRow, "REF1_FILD", "1");
        		
        	}
        	
        	this.objDsImportTemp.clear();
        	this.dsPY_INCOME.set_updatecontrol(true);
        	this.dsPY_INCOME.set_enableevent(true);

        	this.dsPY_INCOME.set_rowposition(0);
        	this.grdPY_INCOME.setFocus();

        }

        /*--------------------------+
         |  급여일지반영 버튼 클릭 시 |
         +--------------------------*/
        this.divButtonList_btn_PROC_onclick = function(obj,e) {
        	var nX 	= system.clientToScreenX(this.divButtonList.btn_PROC, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.divButtonList.btn_PROC, this.divButtonList.btn_PROC.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);

        	this.popINSERT1.trackPopup(nX, nY - 2);
        	
        }

        
        /*----------------+
         |  닫기 버튼 클릭 |
         +----------------*/
        this.btnClose_onclick = function(obj,e) {
        	this.popINSERT1.closePopup();

        }

        this.popINSERT_btnPay_onclick = function(obj,e) {
        	if ( this.dsPY_INCOME.getCaseCount("CHK==1") == 0 ) return this.fnc_Message("MDM002");
        	
        	if ( this.fnc_Length(this.popINSERT1.medSHRPAYX_DATE.value) == 0 ){
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.popINSERT1.edtSHRWAGE_NAME);
        	}

        	this.dsPY_INCOME.set_enableevent(false);
        	for ( var i=0; i<this.dsPY_INCOME.getRowCount(); i++ ) {
        		if ( this.dsPY_INCOME.getColumn(i, "CHK") == "1" ) {
        			this.dsPY_INCOME.setColumn(i, "PAYX_DATE", this.popINSERT1.medSHRPAYX_DATE.value);
        			this.dsPY_INCOME.setColumn(i, "WAGE_CODE", this.popINSERT1.edtSHRWAGE_CODE.value);
        			this.dsPY_INCOME.setColumn(i, "WORK_CNTT", this.popINSERT1.edtSHRWAGE_NAME.value);

        		}
        	}
        	this.dsPY_INCOME.set_enableevent(true);
        	
        	this.popINSERT1.closePopup();
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_INCOME.addEventHandler("oncolumnchanged", this.dsPY_INCOME_oncolumnchanged, this);
            this.dsPY_INCOME.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_INCOME.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_INCOME.addEventHandler("onheadclick", this.grdPY_INCOME_onheadclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.divButtonList.btn_DATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.divButtonList.btn_PROC.addEventHandler("onclick", this.divButtonList_btn_PROC_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT1.btnClose.addEventHandler("onclick", this.btnClose_onclick, this);
            this.popINSERT1.btnPayAply.addEventHandler("onclick", this.popINSERT_btnPay_onclick, this);
            this.popINSERT1.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT1.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT1.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT1.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT1.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT1.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT1.edtSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT1.edtSHRWAGP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.fn_Popup_close, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);

        };

        this.loadIncludeScript("PAYB0210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
