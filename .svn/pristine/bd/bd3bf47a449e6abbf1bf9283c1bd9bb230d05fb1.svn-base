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
                this.set_name("Temp00010M");
                this.set_titletext("그리드(1) 상세(1) 버튼(X)");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
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
            obj.set_text("경조금신청등록");
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

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "103", "61", "8", "67", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
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

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "154", null, null, "25", "184", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"신청일자\"/><Cell col=\"1\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" style=\"background: ;\" text=\"소속\"/><Cell col=\"4\" style=\"background: ;\" text=\"부서\"/><Cell col=\"5\" style=\"background: ;\" text=\"직급\"/><Cell col=\"6\" style=\"background: ;\" text=\"직위\"/><Cell col=\"7\" style=\"background: ;\" text=\"경조종류\"/><Cell col=\"8\" text=\"과가족관계\"/><Cell col=\"9\" text=\"재직기간\"/><Cell col=\"10\" text=\"경조일\"/><Cell col=\"11\" text=\"경조금액\"/><Cell col=\"12\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell style=\"align: ;\"/><Cell col=\"1\" style=\"align: ;\"/><Cell col=\"2\" style=\"align: ;\"/><Cell col=\"3\" style=\"align: ;\"/><Cell col=\"4\" style=\"align: ;\"/><Cell col=\"5\" style=\"align: ;\"/><Cell col=\"6\" style=\"align: ;\"/><Cell col=\"7\" style=\"align: ;\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "111", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("109");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "213", "71", "14", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "228", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static03", "absolute", "328", "61", "40", "67", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "425", "71", "80", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE01", "absolute", "507", "71", "21", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "530", "71", "100", "21", null, null, this);
            obj.set_taborder("115");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "357", "71", "52", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "630", "61", "40", "67", null, null, this);
            obj.set_taborder("117");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "659", "71", "52", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "716", "71", "80", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE00", "absolute", "798", "71", "21", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "821", "71", "100", "21", null, null, this);
            obj.set_taborder("121");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "90", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("경조대상자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "111", "97", "217", "21", null, null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "357", "97", "70", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "425", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("125");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "154", "25", "15", this);
            obj.set_taborder("126");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "28", null, "80", "21", null, "139", this);
            obj.set_taborder("127");
            obj.set_text("신청일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "28", null, "80", "21", null, "113", this);
            obj.set_taborder("130");
            obj.set_text("경조일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "28", null, "80", "21", null, "87", this);
            obj.set_taborder("131");
            obj.set_text("경조종류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", null, "80", "21", null, "61", this);
            obj.set_taborder("134");
            obj.set_text("경조사유");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "581", "533", "80", "15", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "269", null, null, "21", "838", "139", this);
            obj.set_taborder("143");
            obj.set_text("신청대상자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "557", "549", "40", "86", null, null, this);
            obj.set_taborder("145");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "586", null, null, "21", "541", "139", this);
            obj.set_taborder("146");
            obj.set_text("소속");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", "654", null, "184", "21", null, "138", this);
            obj.set_taborder("147");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "838", "549", "40", "86", null, null, this);
            obj.set_taborder("148");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "867", null, null, "21", "260", "139", this);
            obj.set_taborder("149");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "935", null, "206", "21", null, "138", this);
            obj.set_taborder("150");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "1141", "549", "20", "152", null, null, this);
            obj.set_taborder("151");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "96", null, "100", "21", null, "139", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("153");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "96", null, "100", "21", null, "113", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("154");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Combo("Combo01", "absolute", "96", null, "144", "21", null, "87", this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("155");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new TextArea("TextArea00", "absolute", "96", null, "1045", "58", null, "24", this);
            obj.set_taborder("156");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE02", "absolute", "434", null, "21", "21", null, "139", this);
            obj.set_taborder("158");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "586", null, null, "21", "541", "113", this);
            obj.set_taborder("160");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "654", null, "184", "21", null, "112", this);
            obj.set_taborder("161");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "867", null, null, "21", "240", "113", this);
            obj.set_taborder("163");
            obj.set_text("재직기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "935", null, "206", "21", null, "112", this);
            obj.set_taborder("164");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "586", null, null, "21", "521", "87", this);
            obj.set_taborder("165");
            obj.set_text("경조용품");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "654", null, "184", "21", null, "86", this);
            obj.set_taborder("166");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "867", null, null, "21", "240", "87", this);
            obj.set_taborder("168");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "935", null, "206", "21", null, "86", this);
            obj.set_taborder("169");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "269", null, null, "21", "858", "113", this);
            obj.set_taborder("170");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "352", null, "205", "21", null, "112", this);
            obj.set_taborder("171");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "269", null, null, "21", "838", "87", this);
            obj.set_taborder("173");
            obj.set_text("경조용품");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "352", null, "205", "21", null, "86", this);
            obj.set_taborder("174");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "352", null, "80", "21", null, "139", this);
            obj.set_taborder("175");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "457", null, "100", "21", null, "139", this);
            obj.set_taborder("176");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "240", "549", "40", "86", null, null, this);
            obj.set_taborder("177");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그리드(1) 상세(1) 버튼(X)");

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
            this.imgHelpCUST_CODE01.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE00.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE02.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("Temp00010M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
