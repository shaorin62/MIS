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
                this.set_name("PCMA0030");
                this.set_titletext("견적템플릿관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_TYPEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_TAMT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_DTLX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_TYPEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_SEQE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_STDX\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox02", "absolute", "8", null, null, "91", "25", "15", this);
            obj.set_taborder("83");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "473", "612", "38", "8", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "473", "641", "102", "5", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "473", "667", "102", "5", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "473", "693", "38", "8", null, null, this);
            obj.set_taborder("87");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "9", "615", "30", "81", null, null, this);
            obj.set_taborder("88");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_TYPEXH", "absolute", "8", "128", null, "240", "25", null, this);
            obj.set_binddataset("dsPD_TYPEXH");
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
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"70\"/><Column size=\"320\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" text=\"No.\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"템플릿제목\"/><Cell col=\"3\" displaytype=\"text\" text=\"견적단가\"/><Cell col=\"4\" displaytype=\"text\" text=\"견적금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"수량\"/><Cell col=\"6\" displaytype=\"text\" text=\"상세항목수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:TYPE_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:TYPE_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:right;\" text=\"bind:ESTI_PRICE\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:right;\" text=\"bind:ESTI_TAMT\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:right;\" text=\"bind:TYPE_QTYX\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:right;\" text=\"bind:TYPE_DTLX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_TYPEXD", "absolute", "7", "403", null, null, "25", "121", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("19");
            obj.set_binddataset("dsPD_TYPEXD");
            obj.set_wheelscrollrow("1");
            obj.set_tooltiptype("inplace");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"44\"/><Column size=\"51\"/><Column size=\"143\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"137\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"템플릿번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"템플릿제목\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작항목코드\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류명\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류코드\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류명\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"소분류코드\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"소분류명\"/><Cell col=\"11\" displaytype=\"text\" text=\"제작내용\"/><Cell col=\"12\" displaytype=\"text\" text=\"수량\"/><Cell col=\"13\" displaytype=\"text\" text=\"견적단가\"/><Cell col=\"14\" displaytype=\"text\" text=\"견적금액\"/><Cell col=\"15\" displaytype=\"text\" text=\"대분류명\"/><Cell col=\"16\" displaytype=\"text\" text=\"중분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:TYPE_CODE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:ITEM_SEQE\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:TYPE_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" text=\"bind:ITEM_CODE\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" text=\"bind:HIGH_LEVL\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:MIDD_LEVL\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" text=\"bind:MIDD_NAME\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" text=\"bind:SUBX_LEVL\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"normal\" text=\"bind:ITEM_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" text=\"bind:TYPE_STDX\"/><Cell col=\"12\" celltype=\"none\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:TYPE_QTYX\" editlimitbymask=\"none\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_PRCE\" editlimitbymask=\"none\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"none\" text=\"bind:MIDD_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTYPE_NAME", "absolute", "109", "71", "300", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchCombo");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME", "absolute", "28", "71", "79", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("템플릿제목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, "378", "62", "21", "90", null, this);
            obj.set_taborder("46");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, "378", "62", "21", "25", null, this);
            obj.set_taborder("47");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_text("견적템플릿관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("66");
            obj.set_text("홈 > 제작시스템>기준정보>견적템플릿관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("67");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("75");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("76");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("77");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "368", "80", "35", null, null, this);
            obj.set_taborder("81");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1069", "368", "80", "10", null, null, this);
            obj.set_taborder("82");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtESTI_PRCE", "absolute", "824", null, "120", "21", null, "76", this);
            obj.set_taborder("89");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ditESTI_AMTX", "absolute", "824", null, "120", "21", null, "50", this);
            obj.set_taborder("90");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTYPE_NAME", "absolute", "109", null, "220", "21", null, "76", this);
            obj.set_taborder("91");
            obj.set_inputmode("normal");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHIGH_NAME", "absolute", "109", null, "220", "21", null, "50", this);
            obj.set_taborder("92");
            obj.set_inputmode("normal");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMIDD_NAME", "absolute", "467", null, "220", "21", null, "50", this);
            obj.set_taborder("93");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSUBX_NAME", "absolute", "109", null, "220", "21", null, "24", this);
            obj.set_taborder("94");
            obj.set_inputmode("normal");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtITEM_NAME", "absolute", "467", null, "220", "21", null, "76", this);
            obj.set_taborder("95");
            obj.set_inputmode("normal");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTYPE_STDX", "absolute", "467", null, "220", "21", null, "24", this);
            obj.set_taborder("96");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtTYPE_QTYX", "absolute", "824", null, "120", "21", null, "24", this);
            obj.set_taborder("97");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsPD_TYPEXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", null, "80", "21", null, "76", this);
            obj.set_taborder("98");
            obj.set_text("템플릿제목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "28", null, "80", "21", null, "50", this);
            obj.set_taborder("99");
            obj.set_text("대분류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "399", null, "80", "21", null, "76", this);
            obj.set_taborder("100");
            obj.set_text("제작항목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "756", null, "80", "21", null, "76", this);
            obj.set_taborder("101");
            obj.set_text("견적단가");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "399", null, "80", "21", null, "50", this);
            obj.set_taborder("102");
            obj.set_text("중분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "399", null, "80", "21", null, "24", this);
            obj.set_taborder("103");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "756", null, "80", "21", null, "50", this);
            obj.set_taborder("104");
            obj.set_text("견적금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "80", "21", null, "24", this);
            obj.set_taborder("105");
            obj.set_text("소분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "756", null, "80", "21", null, "24", this);
            obj.set_taborder("106");
            obj.set_text("수량");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("107");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "596", "80", "15", null, null, this);
            obj.set_taborder("108");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("견적템플릿관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edtESTI_PRCE","value","dsPD_TYPEXD","ESTI_PRCE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","ditESTI_AMTX","value","dsPD_TYPEXD","ESTI_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtTYPE_NAME","value","dsPD_TYPEXD","TYPE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtHIGH_NAME","value","dsPD_TYPEXD","HIGH_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtMIDD_NAME","value","dsPD_TYPEXD","MIDD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtSUBX_NAME","value","dsPD_TYPEXD","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtITEM_NAME","value","dsPD_TYPEXD","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtTYPE_STDX","value","dsPD_TYPEXD","TYPE_STDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtTYPE_QTYX","value","dsPD_TYPEXD","TYPE_QTYX");
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
        this.addIncludeScript("PCMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PCMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PCMA0030 제작 견적템플릿관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.31		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PCMA0030"; //해당 Form에서 사용 할 Package 명
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
        	this.fnc_DatasetClear("dsPD_TYPEXH");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_TYPEXH=dsPD_TYPEXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_TYPEXH.insertRow(this.dsPD_TYPEXH.rowposition + 1);
        	this.dsPD_TYPEXH.set_rowposition(iRow);
        	this.dsPD_TYPEXH.setColumn(iRow, "TYPE_CODE", "");
        	this.dsPD_TYPEXH.setColumn(iRow, "TYPE_NAME", "");
        	
        	this.grdPD_TYPEXH.setFocus();
        	this.grdPD_TYPEXH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_TYPEXH, "TYPE_NAME"));	
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        //상단 삭제버튼 견적 및 템플릿 까지 모두 삭제
        	
        	if (this.fn_DeleteCheck()) {
        		for(var i = this.dsPD_TYPEXH.rowcount; i >= 0; i--){
        			if(this.dsPD_TYPEXH.getColumn(i, "CHK") == 1){
        					this.dsPD_TYPEXH.deleteRow(i);
        			}
        		}
        	}
        	this.grdPD_TYPEXH.setFocus(true);
        	
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
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_TYPEXH")){
        		this.fn_SaveHDR(obj);
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_TYPEXD")){
        		this.fn_SaveDTL(obj);
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
        	if ((this.fnc_DatasetChangeCheck("dsPD_TYPEXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_TYPEXH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_TYPEXH.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_TYPEXH.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_TYPEXH.getColumn(this.dsPD_TYPEXH.rowposition, "TYPE_NAME")) + ") 템플릿";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_TYPEXH") == false && this.fnc_DatasetChangeCheck("dsPD_TYPEXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_TYPEXH.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_TYPEXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_TYPEXH.getColumn(i, "TYPE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "템플릿 제목", this.dsPD_TYPEXH, i, '', '');
        		}
        	}
        	
        	// 공통 Detail 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_TYPEXD.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_TYPEXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_TYPEXD.getColumn(i, "TYPE_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "템플릿 코드", this.dsPD_TYPEXD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_TYPEXD.getColumn(i, "ITEM_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작항목", this.dsPD_TYPEXD, i, '', '');
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
        		sReturnString += " TYPE_NAME=" + this.fnc_Quote(this.edtSHRTYPE_NAME.value); //시스템
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " TYPE_CODE=" + this.fnc_Quote(this.dsPD_TYPEXH.getColumn(this.dsPD_TYPEXH.rowposition, "TYPE_CODE")); //시스템
        	
        	} else if (sKind == "SAVE00" || sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}  else if (sKind == "DELETE01" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
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

        		this.fnc_Information(this.stInformation, this.dsPD_TYPEXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		//this.fnc_Information(this.stInformation, this.dsPD_TYPEXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "DELETE00") {
        		//체크 선택된 데이터만 제거
        		var cnt = this.dsPD_TYPEXD.rowcount -1 ;
        		for(var i = cnt; i >= 0  ; i --) {	
        			if(this.dsPD_TYPEXD.getColumn(i, "CHK") == "1"){
        				this.dsPD_TYPEXD.deleteRow(i);	
        			}
        		}
        		
        	} else if (sMethodName == "DELETE01") {

        // 			var cnt = this.dsPD_TYPEXH.rowcount -1 ;
        // 			for(var i = cnt; i >= 0  ; i --) {	
        // 				if(this.dsPD_TYPEXH.getColumn(i, "CHK") == "1"){
        // 					this.dsPD_TYPEXH.deleteRow(i);	
        // 				}
        // 			}
        // 		상단 삭제시 재조회
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        //상단의 속성이 변경될  경우 하단의 내용이 조회된다.
        this.dsPD_TYPEXH_onrowposchanged = function(obj,e)
        {
        	this.fnc_DatasetClear("dsPD_TYPEXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_TYPEXD=dsPD_TYPEXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_TYPEXD.setFocus();
        }

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_TYPEXD") {
        	

        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "ITEM_NAME") || (sColumnID == "ITEM_NAME")) {
        		
        			arrParam[0] = "PCMA0030";
        			arrParam[1] = "";
        			arrParam[2] = "ITEM_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_TYPEXD";
        			arrParam[5] = "ITEM_CODE,HIGH_LEVL,MIDD_LEVL,SUBX_LEVL,ITEM_NAME,HIGH_NAME,MIDD_NAME";
        			arrParam[6] = "0,4,5,6,3,1,2";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPD_TYPEXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ITEM_NAME" ) this.fn_HelpDialoge(this.grdPD_TYPEXD, "YES", e.oldvalue, e.columnid);
        	
        	if (e.columnid == "TYPE_QTYX" || e.columnid == "ESTI_PRCE" ){
        		var iRow = this.dsPD_TYPEXD.rowposition;
        		var iTYPE_QTYX = this.dsPD_TYPEXD.getColumn(iRow, "TYPE_QTYX");
        		var iESTI_PRCE = this.dsPD_TYPEXD.getColumn(iRow, "ESTI_PRCE");
        		var iESTI_AMTX = this.dsPD_TYPEXD.getColumn(iRow, "ESTI_AMTX");
        		
        		var iRETURN = iTYPE_QTYX * iESTI_PRCE;
        		
        		this.dsPD_TYPEXD.setColumn(iRow, "ESTI_AMTX", iRETURN);
        	}
        }

        this.fn_All_Btn_OnClick = function(obj,e)
        {
        	switch (obj.name) {
        		case "btnAddRow":
        			this.fn_DtlInput();
        			break;
        			// 행추가
        		case "btnDelRow":
        			this.fn_DtlDelete();
        			break;
        			//행삭제
        	}
        }

        //하단 행추가 
        this.fn_DtlInput = function()
        {
        	
        	var  sValue = this.dsPD_TYPEXH.getColumn(this.dsPD_TYPEXH.rowposition, "TYPE_CODE");
        	
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	
        	if(sValue == "" ){
        		this.fnc_Message("PDM001");
        		return;
        	}

        	var iRow = this.dsPD_TYPEXD.insertRow(this.dsPD_TYPEXD.rowposition + 1);
        	this.dsPD_TYPEXD.set_rowposition(iRow);
        	this.dsPD_TYPEXD.setColumn(iRow, "TYPE_CODE", this.dsPD_TYPEXH.getColumn(this.dsPD_TYPEXH.rowposition, "TYPE_CODE"));
        	this.dsPD_TYPEXD.setColumn(iRow, "TYPE_NAME", this.dsPD_TYPEXH.getColumn(this.dsPD_TYPEXH.rowposition, "TYPE_NAME"));
        	this.dsPD_TYPEXD.setColumn(iRow, "TYPE_QTYX", "1");
        	
        	this.grdPD_TYPEXD.setFocus();
        	this.grdPD_TYPEXD.setCellPos(this.fnc_GridColumnIndex(this.grdPD_TYPEXD, "TYPE_NAME"));	
        	
        }

        
        this.fn_SaveHDR = function (obj)
        {

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPD_TYPEXH=dsPD_TYPEXH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.fn_SaveDTL = function (obj)
        {
        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsPD_TYPEXD=dsPD_TYPEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        //헤더 체크박스 클릭시 전체 선택
        var isAllChecked = 0;
        this.grdPD_TYPEXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_TYPEXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_TYPEXD.getRowCount(); i++) {
        			this.dsPD_TYPEXD.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_TYPEXD.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        	
        }

        var isAllChecked1 = 0;
        this.grdPD_TYPEXH_onheadclick = function(obj,e)
        {
        		if (e.cell == 0) {
        		var v_Colid = this.grdPD_TYPEXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_TYPEXH.getRowCount(); i++) {
        			this.dsPD_TYPEXH.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.grdPD_TYPEXH.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }

        
        this.fn_DtlDelete = function()
        {
        	if (this.fn_DeleteCheckDtl()) {
        		for(var i = this.dsPD_TYPEXD.rowcount; i >= 0; i--){
        			if(this.dsPD_TYPEXD.getColumn(i, "CHK") == 1){
        					this.dsPD_TYPEXD.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheckDtl = function () {
        	if (this.dsPD_TYPEXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_TYPEXD.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_TYPEXD.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_TYPEXD.getColumn(this.dsPD_TYPEXD.rowposition, "ITEM_NAME")) + ") 제작항목";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_TYPEXH.addEventHandler("onrowposchanged", this.dsPD_TYPEXH_onrowposchanged, this);
            this.dsPD_TYPEXD.addEventHandler("oncolumnchanged", this.dsPD_TYPEXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_TYPEXH.addEventHandler("onheadclick", this.grdPD_TYPEXH_onheadclick, this);
            this.grdPD_TYPEXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_TYPEXD.addEventHandler("onheadclick", this.grdPD_TYPEXD_onheadclick, this);
            this.edtSHRTYPE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchTYPE_NAME.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.btnAddRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtESTI_PRCE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtESTI_PRCE.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.ditESTI_AMTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ditESTI_AMTX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.edtTYPE_QTYX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTYPE_QTYX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);

        };

        this.loadIncludeScript("PCMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
