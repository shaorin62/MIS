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
                this.set_name("PDMC0021");
                this.set_titletext("제작견적서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMH", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PLPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PDPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PMPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_YNGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSTAT_FLAG", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STAT_NAME\">전체</Col></Row><Row><Col id=\"STAT_FLAG\">SF01</Col><Col id=\"STAT_NAME\">의뢰</Col></Row><Row><Col id=\"STAT_FLAG\">SF02</Col><Col id=\"STAT_NAME\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_HIGH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMH_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CINT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ESTIMD_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("172");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", "144", null, "91", "25", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_ESTIMD", "absolute", "8", "270", null, null, "25", "1", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("19");
            obj.set_binddataset("dsPD_ESTIMD");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적일자\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적번호\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목코드\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대분류명\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"중분류명\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목명\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적명\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"내역\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"수량\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"단가\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적금액\"/><Cell col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"청구금액\"/><Cell col=\"14\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사코드\"/><Cell col=\"15\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:ESTI_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ITEM_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MIDD_NAME\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" text=\"bind:SUBX_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" text=\"bind:PREE_NAME\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:TYPE_QTYX\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_PRCE\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DEND_AMTX\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" text=\"bind:OUTS_CODE\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"8\" style=\"align: center;\" text=\"합계\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TYPE_QTYX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_PRCE&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DEND_AMTX&quot;)\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "179", "67", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "28", "153", "67", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "278", "153", "65", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("제작번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "278", "179", "65", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "528", "153", "82", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("제작명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "27", "205", "65", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("청구일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "278", "205", "65", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("의뢰일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "98", "153", "150", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NUMB", "absolute", "347", "153", "150", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NAME", "absolute", "640", "153", "358", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.style.set_align("left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREQU_DATE", "absolute", "347", "205", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_readonly("true");

            obj = new Static("st_FormTitle", "absolute", "10", "0", null, "29", "441", null, this);
            obj.set_taborder("111");
            obj.set_text("제작견적서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "825", "29", "25", null, this);
            obj.set_taborder("112");
            obj.set_text("홈 > 제작시스템>제작관리>견적관리>제작견적서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "579", "23", "25", null, this);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "606", "0", "37", "60", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "9", "150", "30", "76", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "248", "150", "40", "76", null, null, this);
            obj.set_taborder("127");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "497", "150", "41", "76", null, null, this);
            obj.set_taborder("128");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "29", "71", "71", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRJOBN_NAME", "absolute", "175", "71", "21", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "196", "71", "235", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "96", "95", "80", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "175", "95", "21", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "196", "95", "140", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchSTAT_FLAG00", "absolute", "28", "95", "60", "22", null, null, this);
            obj.set_taborder("150");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "7", "245", "69", "25", null, null, this);
            obj.set_taborder("155");
            obj.set_text("청구견적");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "528", "179", "82", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "526", "205", "83", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_text("완료희망일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCOMP_DATE", "absolute", "640", "205", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_taborder("162");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_readonly("true");

            obj = new Calendar("calDEND_DATE", "absolute", "98", "205", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_taborder("165");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_readonly("true");

            obj = new Combo("cmbMEDA_CODE", "absolute", "98", "179", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("166");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Combo("cmbHIGH_LEVL", "absolute", "347", "179", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("167");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_readonly("true");
            obj.set_innerdataset("@dsPD_HIGH");
            obj.set_datacolumn("COMB_NAME");
            obj.set_codecolumn("COMB_CODE");
            obj.set_index("-1");

            obj = new Combo("cmbUSEX_TYPE", "absolute", "640", "179", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("168");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_ESTIMH");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("177");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("178");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("190");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("191");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("192");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("193");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("214");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "606", "235", "81", "35", null, null, this);
            obj.set_taborder("215");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "606", "129", "81", "15", null, null, this);
            obj.set_taborder("216");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "599", "150", "41", "76", null, null, this);
            obj.set_taborder("217");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "104", "250", "271", "21", null, null, this);
            obj.set_taborder("218");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkALL", "absolute", "38.75%", "71", null, "20", "56.02%", null, this);
            obj.set_taborder("219");
            obj.set_text("전체");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작견적서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtCUST_NAME","binddataset","dsPD_ESTIMH","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCUST_NAME","value","dsPD_ESTIMH","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtJOBN_NUMB","binddataset","dsPD_ESTIMH","JOBN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtJOBN_NUMB","value","dsPD_ESTIMH","JOBN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtJOBN_NAME","value","dsPD_ESTIMH","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtJOBN_NAME","binddataset","dsPD_ESTIMH","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","calREQU_DATE","value","dsPD_ESTIMH","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calREQU_DATE","binddataset","dsPD_ESTIMH","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","calCOMP_DATE","value","dsPD_ESTIMH","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","calCOMP_DATE","binddataset","dsPD_ESTIMH","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","calDEND_DATE","value","dsPD_ESTIMH","DEND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","calDEND_DATE","binddataset","dsPD_ESTIMH","DEND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cmbMEDA_CODE","value","dsPD_ESTIMH","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbHIGH_LEVL","value","dsPD_ESTIMH","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmbUSEX_TYPE","value","dsPD_ESTIMH","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmbMEDA_CODE","binddataset","dsPD_ESTIMH","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmbHIGH_LEVL","binddataset","dsPD_ESTIMH","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cmbUSEX_TYPE","binddataset","dsPD_ESTIMH","USEX_TYPE");
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
        this.addIncludeScript("PDMC0021.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PDMC0021.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PDMC0021.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMA0021 제작 견적서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.21		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTTTTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMC0021"; //해당 Form에서 사용 할 Package 명
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
        	
        	//제작종류 콤보 데이터셋 가져오기
        	this.fn_getHigh_codeCombo();
        	
        	
        	//this.fn_Search();

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

        	//상단 계약서 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ESTIMH=dsPD_ESTIMH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	//하단  계약서 상세 조회
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ESTIMD=dsPD_ESTIMD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdPD_ESTIMD.setFocus();
        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var sJOBN_NUMB = this.edtJOBN_NUMB.value;
        	var sPREE_CODE = this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE");
        	
        	if(this.fn_nullChk(sJOBN_NUMB) == ""){
        		this.fnc_Message("PDM001");
        		return ;
        	}
        	
        	if(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "CONF_FLAG") == "견적확정"){
        		this.fnc_Message("TMM300","확정된 제작건에 데이터를 추가할 수 없습니다.");
        		return ;
        	}

        	var iRow = this.dsPD_ESTIMD.insertRow(this.dsPD_ESTIMD.rowposition + 1);
        	this.dsPD_ESTIMD.set_rowposition(iRow);
        	
        	this.dsPD_ESTIMD.setColumn(iRow, "PREE_CODE", this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE"));
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_DATE", this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "ESTI_DATE"));
        	this.dsPD_ESTIMD.setColumn(iRow, "JOBN_NUMB", this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "JOBN_NUMB"));
        	this.dsPD_ESTIMD.setColumn(iRow, "TYPE_QTYX", 1);
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_PRCE", 0);
        	this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", 0);
        	this.dsPD_ESTIMD.setColumn(iRow, "DEND_AMTX", 0);

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheckDtl()) return;
        	
        	for(var i = this.dsPD_ESTIMD.rowcount; i >= 0; i--){
        		if(this.dsPD_ESTIMD.getColumn(i, "CHK") == 1){
        			this.dsPD_ESTIMD.deleteRow(i);
        		}
        	}
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
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	if(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "CONF_FLAG") == "견적확정"){
        		this.fnc_Message("TMM300","확정된 제작건에 데이터를 저장할 수 없습니다.");
        		return ;
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_ESTIMD")){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_ESTIMH=dsPD_ESTIMH:A dsPD_ESTIMD=dsPD_ESTIMD:A";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	
        	if (this.dsPD_ESTIMD.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_ESTIMD.rowposition < 0) return;

            this.fnc_DatasetClear("dsPD_ESTIMH_RPT");
            this.fnc_DatasetClear("dsPD_ESTIMD_RPT");
            

        	var reportfile 	= "/pdm/PDMC0020R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pdm/PDMC0021_PRINT00.do";
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

        	if (this.fnc_DatasetChangeCheck("dsPD_ESTIMH")){ 
        		if(this.fnc_Message("TMM023") == false){ 
        		return false;
        		}
        	}
        	
        	if((this.fn_nullChk(this.edtSHRJOBN_NAME.value) == "") && (this.fn_nullChk(this.edtSHRJOBN_NUMB.value) == "")) {
        		this.fnc_Message("TMM300","제작건명은 필수 입력 사항입니다.. ")
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
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_NAME")) + ") 견적";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_ESTIMH") == false && this.fnc_DatasetChangeCheck("dsPD_ESTIMD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	//상단은 일단 저장 및 수정 상태 없음 
        	for (var i = 0; i < this.dsPD_ESTIMH.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMH.getColumn(i, "PREE_CODE"))) < 1) {
        			//헤더에 견적번호가 없으면 입력 타입으로 변경
        			this.dsPD_ESTIMH.set_updatecontrol(false);
        			var bSucc = this.dsPD_ESTIMH.setRowType(i, Dataset.ROWTYPE_INSERT);
        			this.dsPD_ESTIMH.set_updatecontrol(true);
        		}
        	
        		if (this.fnc_ToUpper(this.dsPD_ESTIMH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMH.getColumn(i, "JOBN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상단의 제작번호", this.dsPD_ESTIMH, i, this.grdPD_ESTIMH, '');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMH.getColumn(i, "JOBN_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상단의 제작명", this.dsPD_ESTIMH, i, this.grdPD_ESTIMH, '');
        		}
        	
        	}
        	
        	// 공통 Detail 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_ESTIMD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_ESTIMD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMD.getColumn(i, "OUTS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사코드", this.dsPD_ESTIMD, i, this.grdPD_ESTIMD, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMD.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사명", this.dsPD_ESTIMD, i, this.grdPD_ESTIMD, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ESTIMD.getColumn(i, "JOBN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작번호", this.dsPD_ESTIMD, i, this.grdPD_ESTIMD, '');
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
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        		
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호

        	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SAVE00" ) {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PREE_NAME=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_NAME")); //해더의 견적명
        		sReturnString += " ESTI_DATE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "ESTI_DATE")); //해더의 견적일
        		
        	}else if (sKind == "PRINT00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition, "PREE_CODE")); //해더의 견적명
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

        	} else if (sMethodName == "SEARCH01") {
        	this.fnc_Information(this.stInformation, this.dsPD_ESTIMD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SEARCH02") {
        		
        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();			
        		
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		// 제작내용 입력용
        		this.fnc_GetComboMEDA_CODE();
        		
        		// 제작용도 입력용
        		this.fnc_GetComboUSEX_TYPE();
        		
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

        
        /*------------------+
         |  제작종류 가져오기!  |
         +-------------------*/
        this.fn_getHigh_codeCombo = function (obj) {

        	this.fnc_DatasetClear("dsPD_HIGH");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_HIGH=dsPD_HIGH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, 'PDMC0020',sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        /*------------------------------------+
         |  제작번호 조회팝업
         +-------------------------------------*/
        this.fn_HelpDialogeJOBN_NUMB = function(obj,e)
        {

        	var popID = "" ;
        	if(this.chkALL.value == true){
        		popID = 'PDM0005';                                 //Popup ID
        	}else{
        		popID = 'PDM0007';                                 //Popup ID
        	}
        		
        		
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpSHRJOBN_NAME') || (obj.name == 'edtSHRJOBN_NAME')) {

        		arrParam[0] = popID;                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRJOBN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRJOBN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRJOBN_NUMB,edtSHRJOBN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*------------------------------------+
         |  광고주코드 조회팝업
         +-------------------------------------*/
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

        
        /*------------------------------------+
         |  그리드 진행상태 콤보
         +-------------------------------------*/
        this.fnc_GetComboGrdSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_ESTIMH,dsGRDSTAT_FLAG,STAT_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*------------------------------------+
         |  그리드 제작내용 콤보 박스
         +-------------------------------------*/
        this.fnc_GetComboGrdMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_ESTIMH,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        
        /*------------------------------------+
         |  그리드 제작용도 콤보박스
         +-------------------------------------*/
        this.fnc_GetComboGrdUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_ESTIMH,dsGRDUSEX_TYPE,USEX_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*------------------------------------+
         |  바인딩을 위한 제작종류 콤보
         +-------------------------------------*/
        this.fnc_GetComboMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbMEDA_CODE,dsMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*------------------------------------+
         |  바인딩을 위한 제작내용 콤보
         +-------------------------------------*/
        this.fnc_GetComboHIGH_LEVL = function()
        {
        	
        		var SHRCLAS_TYPE = this.cmbMEDA_CODE.value;
        		
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbHIGH_LEVL,dsHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*------------------------------------+
         |  바인딩을 위한 제작용도 콤보
         +-------------------------------------*/
        this.fnc_GetComboUSEX_TYPE = function()
        {	

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbUSEX_TYPE,dsUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        
        /*------------------------------------+
         |  하단 그리드 팝업
         +-------------------------------------*/
         
        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) 
        {
        	var arrParam = new Array();
        	

        	if (obj.name == "grdPD_ESTIMD") {
        	
        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "SUBX_NAME") || (sColumnID == "SUBX_NAME")) {
        		
        			arrParam[0] = "PCM0004";
        			arrParam[1] = this.cmbHIGH_LEVL.value;
        			arrParam[2] = "SUBX_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_ESTIMD";
        			arrParam[5] = "ITEM_CODE,HIGH_NAME,MIDD_NAME,SUBX_NAME";
        			arrParam[6] = "0,1,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        		
        		//제작사 팝업
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

        
        /*------------------------------------+
         |  하단 그리드 변경
         +-------------------------------------*/
        this.dsPD_ESTIMD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBX_NAME" ) this.fn_HelpDialoge(this.grdPD_ESTIMD, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdPD_ESTIMD, "YES", e.oldvalue, e.columnid);
        	
        	
        	if (e.columnid == "TYPE_QTYX" || e.columnid == "ESTI_PRCE" ){
        		var iRow = this.dsPD_ESTIMD.rowposition;
        		var iTYPE_QTYX = this.dsPD_ESTIMD.getColumn(iRow, "TYPE_QTYX");
        		var iESTI_PRCE = this.dsPD_ESTIMD.getColumn(iRow, "ESTI_PRCE");
        		var iESTI_AMTX = this.dsPD_ESTIMD.getColumn(iRow, "ESTI_AMTX");
        		
        		var iRETURN = iTYPE_QTYX * iESTI_PRCE;
        		
        		this.dsPD_ESTIMD.setColumn(iRow, "ESTI_AMTX", iRETURN);
        		this.dsPD_ESTIMD.setColumn(iRow, "DEND_AMTX", iRETURN);
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
        			this.fnc_Message("TMM300","선택된 데이터가 없습니다.");
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

        

        //제작내용 콤보 선택시 제작 종류 선택
        this.cmbSHRMEDA_CODE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }

        var sJOBN_NAME
        this.grdPD_ESTIMH_onexpandup = function(obj,sFromDs,sOldValue,sColumnID) {
        	var arrParam = new Array();
        	if (obj.name == "grdPD_ESTIMH") {
        	
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "JOBN_NAME")  || (sColumnID == "JOBN_NAME")) {
        			
        			if(this.dsPD_ESTIMH.getColumn(this.dsPD_ESTIMH.rowposition,"CONF_FLAG")=="견적확정"){
        				this.fnc_Message("TMM300","견적이 확정된 데이터는 제작명을 수정할 수 없습니다.");
        				return ;
        			}
        			
        			arrParam[0] = "PDM0007";
        			arrParam[1] = "";
        			arrParam[2] = "JOBN_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_ESTIMH";
        			arrParam[5] = "JOBN_NUMB,JOBN_NAME,PREE_NAME";
        			arrParam[6] = "0,1,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_ESTIMD.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.dsPD_ESTIMH_RPT.addEventHandler("onrowposchanged", this.dsPD_ESTIMH_onrowposchanged, this);
            this.dsPD_ESTIMD_RPT.addEventHandler("oncolumnchanged", this.dsPD_ESTIMD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_ESTIMD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPD_ESTIMD.addEventHandler("onheadclick", this.grdPD_ESTIMD_onheadclick, this);
            this.calREQU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRJOBN_NAME.addEventHandler("onclick", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.imgSearchSTAT_FLAG00.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.calCOMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calDEND_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.chkALL.addEventHandler("onclick", this.CheckBox00_onclick, this);

        };

        this.loadIncludeScript("PDMC0021.xfdl");
        this.loadPreloadList();
       
    };
}
)();
