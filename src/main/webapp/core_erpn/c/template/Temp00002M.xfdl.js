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
                this.set_name("Temp00002M");
                this.set_titletext("B. List Detail");
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

            obj = new Static("Static41", "absolute", "682", "61", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("일계획가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static31", "absolute", "271", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "467", "71", "70", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("자금구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREXCE_GUBN", "absolute", "536", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Calendar("calSHRPROV_DATE", "absolute", "339", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "711", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("입출구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_INOU", "absolute", "780", "71", "146", "21", null, null, this);
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

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "242", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "438", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
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

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
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

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "143", "25", "15", this);
            obj.set_taborder("54");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "9", "560", "30", "141", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "449", null, "102", "5", null, "123", this);
            obj.set_taborder("56");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "280", "560", "40", "141", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "449", null, "38", "8", null, "149", this);
            obj.set_taborder("58");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "449", null, "38", "10", null, "45", this);
            obj.set_taborder("59");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "561", "560", "40", "141", null, null, this);
            obj.set_taborder("60");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "449", null, "102", "5", null, "97", this);
            obj.set_taborder("61");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "28", null, "80", "21", null, "128", this);
            obj.set_taborder("62");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "28", null, "80", "21", null, "102", this);
            obj.set_taborder("63");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT05", "absolute", "96", null, "184", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Combo("cmbSHRACCT_UNIT06", "absolute", "96", null, "184", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static66", "absolute", "309", null, "80", "21", null, "102", this);
            obj.set_taborder("66");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "309", null, "80", "21", null, "128", this);
            obj.set_taborder("67");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "377", null, "184", "21", null, "128", this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "377", null, "184", "21", null, "102", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "590", null, "80", "21", null, "102", this);
            obj.set_taborder("70");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "590", null, "80", "21", null, "128", this);
            obj.set_taborder("71");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17", "absolute", "658", null, "184", "21", null, "128", this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18", "absolute", "658", null, "184", "21", null, "102", this);
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit21", "absolute", "658", null, "184", "21", null, "76", this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "590", null, "80", "21", null, "76", this);
            obj.set_taborder("75");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit22", "absolute", "377", null, "184", "21", null, "76", this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "309", null, "80", "21", null, "76", this);
            obj.set_taborder("77");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT07", "absolute", "96", null, "184", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static74", "absolute", "28", null, "80", "21", null, "76", this);
            obj.set_taborder("79");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", null, "80", "21", null, "50", this);
            obj.set_taborder("80");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT08", "absolute", "96", null, "184", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static77", "absolute", "309", null, "80", "21", null, "50", this);
            obj.set_taborder("82");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", "377", null, "184", "21", null, "50", this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "590", null, "80", "21", null, "50", this);
            obj.set_taborder("84");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25", "absolute", "658", null, "184", "21", null, "50", this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "449", null, "102", "5", null, "71", this);
            obj.set_taborder("86");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", null, "430", "21", null, "158", this);
            obj.set_taborder("87");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "658", null, "184", "21", null, "24", this);
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "377", null, "184", "21", null, "24", this);
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "309", null, "80", "21", null, "24", this);
            obj.set_taborder("90");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "590", null, "80", "21", null, "24", this);
            obj.set_taborder("91");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT00", "absolute", "96", null, "184", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static14", "absolute", "28", null, "80", "21", null, "24", this);
            obj.set_taborder("93");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "449", null, "38", "8", null, "16", this);
            obj.set_taborder("94");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "871", null, "80", "21", null, "102", this);
            obj.set_taborder("95");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "871", null, "80", "21", null, "128", this);
            obj.set_taborder("96");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "939", null, "202", "21", null, "128", this);
            obj.set_taborder("97");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "939", null, "202", "21", null, "102", this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "939", null, "202", "21", null, "76", this);
            obj.set_taborder("99");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "871", null, "80", "21", null, "76", this);
            obj.set_taborder("100");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "871", null, "80", "21", null, "50", this);
            obj.set_taborder("101");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "939", null, "202", "21", null, "50", this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "939", null, "202", "21", null, "24", this);
            obj.set_taborder("103");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "871", null, "80", "21", null, "24", this);
            obj.set_taborder("104");
            obj.set_text("라벨라벨");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "629", "534", "80", "25", null, null, this);
            obj.set_taborder("105");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "842", "560", "40", "141", null, null, this);
            obj.set_taborder("106");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1141", "560", "20", "141", null, null, this);
            obj.set_taborder("107");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "183", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"43\"/><Column size=\"144\"/><Column size=\"175\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"71\"/><Column size=\"258\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"대분류\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌명\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"은행\"/><Cell col=\"6\" style=\"background: ;\" text=\"환종\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"내용\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"2\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"3\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"4\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"5\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"6\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"7\" style=\"align: ;\" editlimit=\"0\"/><Cell col=\"8\" style=\"align: ;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("B. List Detail");

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
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE.addEventHandler("ontextchange", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT05.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT05.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT06.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT06.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT07.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT07.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT08.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT08.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT00.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT00.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("Temp00002M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
