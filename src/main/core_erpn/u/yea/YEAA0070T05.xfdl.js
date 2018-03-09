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
                this.set_name("YEAA0070T04");
                this.set_classname("YEAA0070T01");
                this.set_titletext("연금저축");
                this._setFormPosition(0,0,1024,493);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static12", "absolute", "9", "12", "159", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("월세액 소득공제 명세서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_RENTA1", "absolute", "10", "34", null, "166", "10", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_RENTA1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대인&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민(사업자)&#10;번호\" wordwrap=\"true\"/><Cell col=\"2\" style=\"backgroundimage: ;\" text=\"주택유형\" wordwrap=\"true\"/><Cell col=\"3\" style=\"backgroundimage: ;\" text=\"주택계약&#10;면적(㎡)\" wordwrap=\"true\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약서상&#10;주소지\" wordwrap=\"true\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임대차계약&#10;개시일\" wordwrap=\"true\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연간월세액\"/><Cell col=\"8\" displaytype=\"text\" style=\"backgroundimage:&#10;;\" text=\"공제금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT1_STR001\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR002\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:YEA_RT1_STR003\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:YEA_RT1_NUM003\" mask=\"###.##\" editlimit=\"-1\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT1_STR004\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR005\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT1_STR006\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT1_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT1_NUM002\" mask=\"#,##0\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "183", "12", "168", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow01", "absolute", null, "9", "62", "21", "77", null, this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow01", "absolute", null, "9", "64", "21", "10", null, this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "28", "216", "6", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "175", "15", "10", "13", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "209", "165", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("금전소비대차 계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_RENTA2_1", "absolute", "10", "231", null, "107", "10", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsYEA_RENTA2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"대주&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\" wordwrap=\"true\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"금전소비&#10;대차계약&#10;시작일\" wordwrap=\"true\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"금전소비&#10;대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"차입금&#10;이자율&#10;(%)\" wordwrap=\"true\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"text\" text=\"원리금 상환액\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"공제금액\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"원리금\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"이자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:&#10;;\" text=\"bind:YEA_RT2_STR001\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\" editlengthunit=\"utf8\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background:&#10;;\" text=\"bind:YEA_RT2_STR002\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:YEA_RT2_STR003\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:YEA_RT2_STR004\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM001\" mask=\"##.##\" editlimit=\"2\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT2_NUM002\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM003\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:&#10;;\" text=\"bind:YEA_RT2_NUM004\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YEA_RT2_NUM005\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "175", "209", "168", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow02", "absolute", null, "206", "62", "21", "77", null, this);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow02", "absolute", null, "206", "64", "21", "10", null, this);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "225", "216", "6", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "167", "212", "10", "13", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "9", "348", "127", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("임대차 계약내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_RENTA2_2", "absolute", "10", "370", null, "107", "10", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsYEA_RENTA2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대인&#10;성명\" wordwrap=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\" wordwrap=\"true\"/><Cell col=\"2\" style=\"backgroundimage: ;\" text=\"주택유형\" wordwrap=\"true\"/><Cell col=\"3\" style=\"backgroundimage: ;\" text=\"주택계약&#10;면적(㎡)\" wordwrap=\"true\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"임대차계약서상&#10;주소지\" wordwrap=\"true\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임대차계약&#10;개시일\" wordwrap=\"true\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임대차계약&#10;종료일\" wordwrap=\"true\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전세보증금\" wordwrap=\"true\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_RT2_STR005\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\" editlengthunit=\"utf8\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR006\" mask=\"######-#######\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:YEA_RT2_STR007\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:YEA_RT2_NUM006\" mask=\"###.##\" editautoselect=\"true\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_RT2_STR008\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR009\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:YEA_RT2_STR010\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_RT2_NUM007\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "135", "348", "168", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "364", "216", "6", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", "127", "351", "10", "13", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 493, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("YEAA0070T01");
            		p.set_titletext("연금저축");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("YEAA0070T05.xfdl", function() {
        this.btnAddRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_RentaAddRow(obj,e);
        }

        this.btnDelRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_RentaDelRow(obj,e);
        }

        this.btnAddRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_RentaAddRow(obj,e);
        }

        this.btnDelRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_RentaDelRow(obj,e);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdYEA_RENTA1.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow01.addEventHandler("onclick", this.btnAddRow01_OnClick, this);
            this.btnDelRow01.addEventHandler("onclick", this.btnDelRow01_OnClick, this);
            this.grdYEA_RENTA2_1.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow02.addEventHandler("onclick", this.btnAddRow02_OnClick, this);
            this.btnDelRow02.addEventHandler("onclick", this.btnDelRow02_OnClick, this);
            this.grdYEA_RENTA2_2.addEventHandler("onexpandup", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("YEAA0070T05.xfdl");

       
    };
}
)();
