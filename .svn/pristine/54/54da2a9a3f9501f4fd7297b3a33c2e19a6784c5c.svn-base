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
                this.set_name("Temp00005M");
                this.set_titletext("C. Master Detail 3");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
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
            obj.set_text("자금계획관리");
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

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, "213", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"43\"/><Column size=\"144\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"71\"/><Column size=\"258\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"대분류\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌명\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"은행\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"환종\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"내용\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align: ;\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"2\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"3\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"4\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"5\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"6\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"7\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"8\" style=\"align: ;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("168");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "8", "351", null, null, "25", "15", this);
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("탭페이지");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "9", "262", "21", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("Button41", "absolute", null, "5", "62", "21", "10", null, this.Tab00.tabpage1);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("Button55", "absolute", null, "5", "62", "21", "75", null, this.Tab00.tabpage1);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "938", "26", "216", "4", null, null, this.Tab00.tabpage1);
            obj.set_taborder("4");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab00.tabpage1);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("grdTR_MONEPL00", "absolute", "10", "30", null, null, "10", "100", this.Tab00.tabpage1);
            obj.set_taborder("6");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"43\"/><Column size=\"144\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"71\"/><Column size=\"258\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"대분류\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌명\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"은행\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"환종\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"내용\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"2\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"3\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"4\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"5\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"6\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"7\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"8\" style=\"align: ;\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.Tab00.tabpage1);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "10", null, "262", "21", null, "75", this.Tab00.tabpage1);
            obj.set_taborder("8");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "10", null, null, "65", "10", "10", this.Tab00.tabpage1);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "653", "222", "80", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("10");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "30", null, "80", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("11");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Combo("cmbSHRACCT_UNIT06", "absolute", "98", null, "179", "21", null, "45", this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj = new Static("Static67", "absolute", "306", null, "80", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("13");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "374", null, "179", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("14");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static69", "absolute", "582", null, "80", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("15");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "650", null, "179", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("16");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "858", null, "80", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("17");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "926", null, "195", "21", null, "45", this.Tab00.tabpage1);
            obj.set_taborder("18");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", null, "80", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("19");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Combo("cmbSHRACCT_UNIT00", "absolute", "98", null, "179", "21", null, "19", this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj = new Static("Static01", "absolute", "306", null, "80", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("21");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "374", null, "179", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("22");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "582", null, "80", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("23");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "650", null, "179", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("24");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "858", null, "80", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("25");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "926", null, "195", "21", null, "19", this.Tab00.tabpage1);
            obj.set_taborder("26");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("탭페이지2");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("탭페이지3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "661", "341", "80", "37", null, null, this);
            obj.set_taborder("170");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "20", "634", "30", "43", null, null, this);
            obj.set_taborder("175");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "29", "341", "80", "10", null, null, this);
            obj.set_taborder("212");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("215");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "682", "61", "40", "41", null, null, this);
            obj.set_taborder("216");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("217");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("218");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static31", "absolute", "271", "71", "68", "21", null, null, this);
            obj.set_taborder("219");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "467", "71", "70", "21", null, null, this);
            obj.set_taborder("220");
            obj.set_text("자금구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "536", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("221");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Calendar("calSHRPROV_DATE", "absolute", "339", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "711", "71", "70", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("입출구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "780", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("224");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("225");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("226");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "242", "61", "40", "41", null, null, this);
            obj.set_taborder("227");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "438", "61", "40", "41", null, null, this);
            obj.set_taborder("228");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "568", "103", "80", "25", null, null, this);
            obj.set_taborder("229");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "626", "56", "128", "4", null, null, this);
            obj.set_taborder("230");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "230", "21", null, null, this);
            obj.set_taborder("232");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("234");
            obj.set_text("일계획가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("235");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "605", "691", "80", "10", null, null, this);
            obj.set_taborder("236");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("탭페이지");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("C. Master Detail 3");

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
            this.Tab00.tabpage1.grdTR_MONEPL00.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab00.tabpage1.cmbSHRACCT_UNIT06.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.Tab00.tabpage1.cmbSHRACCT_UNIT06.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.Tab00.tabpage1.cmbSHRACCT_UNIT00.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.Tab00.tabpage1.cmbSHRACCT_UNIT00.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("ontextchange", this.fn_clearData, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);

        };

        this.loadIncludeScript("Temp00005M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
