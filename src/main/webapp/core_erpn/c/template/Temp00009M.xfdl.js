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
                this.set_name("Temp00009");
                this.set_titletext("그리드(체크박스)");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
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
            obj.set_text("신청 및 내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("Static30", "absolute", "28", "71", "52", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("성명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "304", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "620", "71", "77", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("신청서종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "702", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static33", "absolute", "876", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "944", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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
            obj.set_text("h 6");
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

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"264\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"신청일\"/><Cell col=\"2\" text=\"신청자\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"대상자\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"승인상태\"/><Cell col=\"7\" text=\"결재일자\"/><Cell col=\"8\" text=\"처리\"/><Cell col=\"9\" text=\"취소여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "152", "71", "21", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("111");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "374", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "476", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "491", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드(체크박스)");

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("Temp00009M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
