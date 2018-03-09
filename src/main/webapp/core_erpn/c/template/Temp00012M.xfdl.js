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
                this.set_name("Temp00012M");
                this.set_titletext("상세/그리드/상세");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "65", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormItemBoxOut");
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
            obj.set_text("출장승인신청 등록");
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

            obj = new Static("Static30", "absolute", "29", "69", "76", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "63", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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

            obj = new Static("Static52", "absolute", "28", "95", "52", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "98", "95", "80", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE01", "absolute", "180", "95", "21", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "203", "95", "100", "21", null, null, this);
            obj.set_taborder("113");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "98", "69", "836", "21", null, null, this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "331", "95", "76", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("출장기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "401", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "503", "95", "14", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "518", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar00", "absolute", "717", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("129");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static07", "absolute", "819", "95", "14", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "834", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("131");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static11", "absolute", "647", "95", "76", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("연수일정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "303", "90", "40", "34", null, null, this);
            obj.set_taborder("133");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "139", "294", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("출장자 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07", "absolute", "8", "160", null, null, "25", "253", this);
            obj.set_taborder("135");
            obj.set_binddataset("da_grd");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"구분\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"예금주\"/><Cell col=\"7\" text=\"은행\"/><Cell col=\"8\" text=\"계좌번호\"/><Cell col=\"9\" text=\"전도금\"/></Band><Band id=\"body\"><Cell style=\"align: ;\"/><Cell col=\"1\" style=\"align: ;\"/><Cell col=\"2\" style=\"align: ;\"/><Cell col=\"3\" style=\"align: ;\"/><Cell col=\"4\" style=\"align: ;\"/><Cell col=\"5\" style=\"align: ;\"/><Cell col=\"6\" style=\"align: ;\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "591", "125", "48", "35", null, null, this);
            obj.set_taborder("136");
            obj.set_text("H35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button55", "absolute", null, "135", "62", "21", "90", null, this);
            obj.set_taborder("137");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("Button41", "absolute", null, "135", "62", "21", "25", null, this);
            obj.set_taborder("138");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", null, "294", "21", null, "228", this);
            obj.set_taborder("139");
            obj.set_text("여비정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "589", "464", "48", "25", null, null, this);
            obj.set_taborder("140");
            obj.set_text("H25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", null, null, "213", "25", "15", this);
            obj.set_taborder("141");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", null, "80", "21", null, "198", this);
            obj.set_taborder("142");
            obj.set_text("출장구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "347", null, "107", "21", null, "198", this);
            obj.set_taborder("143");
            obj.set_text("출장목적");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "141", null, "180", "21", null, "198", this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">국내</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국외</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">외근</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("149");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static14", "absolute", "28", null, "56", "21", null, "172", this);
            obj.set_taborder("150");
            obj.set_text("출장지");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "141", null, "170", "21", null, "172", this);
            obj.set_taborder("151");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "417", null, "416", "21", null, "198", this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">업무출장</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">연수출장</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업무+연수</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상사지원</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("152");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Edit("Edit03", "absolute", "807", null, "334", "21", null, "198", this);
            obj.set_taborder("153");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "347", null, "80", "21", null, "172", this);
            obj.set_taborder("154");
            obj.set_text("교통편");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "478", null, "60", "21", null, "172", this);
            obj.set_taborder("155");
            obj.set_text("버스");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "418", null, "60", "21", null, "172", this);
            obj.set_taborder("156");
            obj.set_text("철도");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "538", null, "60", "21", null, "172", this);
            obj.set_taborder("157");
            obj.set_text("자가차");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "612", null, "60", "21", null, "172", this);
            obj.set_taborder("158");
            obj.set_text("항공");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "807", null, "60", "21", null, "172", this);
            obj.set_taborder("159");
            obj.set_text("기타");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "733", null, "60", "21", null, "172", this);
            obj.set_taborder("160");
            obj.set_text("회사차");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06", "absolute", "672", null, "60", "21", null, "172", this);
            obj.set_taborder("161");
            obj.set_text("선박");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "868", null, "273", "21", null, "172", this);
            obj.set_taborder("162");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", null, "120", "21", null, "146", this);
            obj.set_taborder("163");
            obj.set_text("해외시장개척비");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "141", null, "72", "21", null, "146", this);
            obj.set_taborder("165");
            obj.set_text("자료수집비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "215", null, "95", "21", null, "146", this);
            obj.set_taborder("166");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "370", null, "95", "21", null, "146", this);
            obj.set_taborder("167");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "320", null, "49", "21", null, "146", this);
            obj.set_taborder("168");
            obj.set_text("접대비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "120", "35", null, "44", this);
            obj.set_taborder("169");
            obj.set_text("전도금 세부내역\r\n및 기타사항");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "120", "21", null, "120", this);
            obj.set_taborder("170");
            obj.set_text("출장계획");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "141", null, "1000", "56", null, "85", this);
            obj.set_taborder("171");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "141", null, "1000", "56", null, "24", this);
            obj.set_taborder("172");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1141", "504", "20", "171", null, null, this);
            obj.set_taborder("173");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "9", "519", "30", "131", null, null, this);
            obj.set_taborder("174");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "8", "483", "216", "6", null, null, this);
            obj.set_taborder("175");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "8", "154", "216", "6", null, null, this);
            obj.set_taborder("176");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "310", "541", "10", "33", null, null, this);
            obj.set_taborder("177");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "152", "632", "128", "5", null, null, this);
            obj.set_taborder("178");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "152", "571", "128", "5", null, null, this);
            obj.set_taborder("179");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("상세/그리드/상세");

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
        this.registerScript("Temp00012M.xfdl", function() {

        this.CheckBox02_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpCUST_CODE01.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.CheckBox02.addEventHandler("onclick", this.CheckBox02_onclick, this);

        };

        this.loadIncludeScript("Temp00012M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
