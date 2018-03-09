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
                this.set_name("Temp00013M");
                this.set_titletext("조회(1)/예외버튼/그리드(1)");
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
            obj.set_text("학자금지급내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 학자금지급내역");
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

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "373", "103", "48", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
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

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"사번\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\"/><Cell col=\"4\" rowspan=\"2\" text=\"직위\"/><Cell col=\"5\" rowspan=\"2\" text=\"자녀명\"/><Cell col=\"6\" colspan=\"6\" text=\"학자금\"/><Cell col=\"12\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"전표상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"전표번호\"/><Cell col=\"15\" rowspan=\"2\" text=\"상태\"/><Cell col=\"16\" rowspan=\"2\" text=\"기타사항\"/><Cell row=\"1\" col=\"6\" text=\"구분\"/><Cell row=\"1\" col=\"7\" text=\"년도\"/><Cell row=\"1\" col=\"8\" text=\"학기\"/><Cell row=\"1\" col=\"9\" text=\"지급횟수\"/><Cell row=\"1\" col=\"10\" text=\"지급일자\"/><Cell row=\"1\" col=\"11\" text=\"지급금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "98", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("122");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "344", "71", "70", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "413", "71", "210", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("124");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Button("Button55", "absolute", null, "113", "74", "21", "336", null, this);
            obj.set_taborder("125");
            obj.set_text("전표생성");
            this.addChild(obj.name, obj);

            obj = new Button("Button41", "absolute", null, "113", "74", "21", "260", null, this);
            obj.set_taborder("126");
            obj.set_text("전표삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU00", "absolute", "721", "71", "210", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("127");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static03", "absolute", "652", "71", "70", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("전표상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, "113", "68", "21", "511", null, this);
            obj.set_taborder("129");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROV_DATE00", "absolute", null, "113", "99", "21", "412", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("130");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static08", "absolute", null, "113", "68", "21", "183", null, this);
            obj.set_taborder("131");
            obj.set_text("대상년월");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "113", "74", "21", "25", null, this);
            obj.set_taborder("133");
            obj.set_text("급여전환");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", null, "113", "82", "21", "101", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조회(1)/예외버튼/그리드(1)");

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
            this.calSHRPROV_DATE00.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE00.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE00.addEventHandler("ontextchange", this.fn_clearData, this);

        };

        this.loadIncludeScript("Temp00013M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
