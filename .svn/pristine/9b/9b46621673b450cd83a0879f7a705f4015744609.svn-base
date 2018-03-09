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
            obj = new Static("Static12", "absolute", "9", "12", "127", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("퇴직연금공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_PENSAV1", "absolute", "10", "34", null, "81", "10", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_PENSAV1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"218\"/><Column size=\"175\"/><Column size=\"183\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"퇴직연금구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"hangul\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "119", "12", "168", "21", null, null, this);
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

            obj = new Static("stInformation04", "absolute", "111", "15", "10", "13", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "132", "127", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("연금저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_PENSAV2", "absolute", "10", "154", null, "81", "10", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsYEA_PENSAV2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"218\"/><Column size=\"175\"/><Column size=\"183\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"연금저축구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"hangul\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "119", "132", "168", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow02", "absolute", null, "129", "62", "21", "77", null, this);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow02", "absolute", null, "129", "64", "21", "10", null, this);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "111", "135", "10", "13", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "9", "252", "127", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("주택마련저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_PENSAV3", "absolute", "10", "274", null, "81", "10", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("dsYEA_PENSAV3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"105\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"저축구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"2015.01.01 이후&#10;가입 여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR001\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"hangul\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" celltype=\"none\" displaytype=\"checkbox\" edittype=\"expr:YEA_PEN_STR001 == '34'? 'none' : 'checkbox'\" editfilter=\"none\" style=\"align:center;background:white;background2:white;\" text=\"bind:YEA_PEN_STR005\" editlimit=\"-1\" editlengthunit=\"utf16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "143", "252", "168", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow03", "absolute", null, "249", "62", "21", "77", null, this);
            obj.set_taborder("17");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow03", "absolute", null, "249", "64", "21", "10", null, this);
            obj.set_taborder("18");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "268", "216", "6", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", "135", "255", "10", "13", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "9", "372", "191", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("장기집합투자증권저축공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_PENSAV4", "absolute", "10", "394", null, "81", "10", null, this);
            obj.set_taborder("22");
            obj.set_binddataset("dsYEA_PENSAV4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"240\"/><Column size=\"240\"/><Column size=\"240\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"불입금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_FINA_NAME\" editimemode=\"hangul\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_PEN_STR003\" editlimit=\"20\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_PEN_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "199", "372", "168", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow04", "absolute", null, "369", "62", "21", "77", null, this);
            obj.set_taborder("24");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow04", "absolute", null, "369", "64", "21", "10", null, this);
            obj.set_taborder("25");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "8", "388", "216", "6", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation06", "absolute", "191", "375", "10", "13", null, null, this);
            obj.set_taborder("27");
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
        this.registerScript("YEAA0070T04.xfdl", function() {
        this.btnAddRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavAddRow(obj,e);
        }

        this.btnDelRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavDelRow(obj,e);
        }

        this.btnAddRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavAddRow(obj,e);
        }

        this.btnDelRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavDelRow(obj,e);
        }

        this.btnAddRow03_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavAddRow(obj,e);
        }

        this.btnDelRow03_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavDelRow(obj,e);
        }

        this.btnAddRow04_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavAddRow(obj,e);
        }

        this.btnDelRow04_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_PensavDelRow(obj,e);
        }

        this.fn_HelpDialoge = function(obj,e)
        {
        	this.parent.parent.parent.fn_HelpDialoge(obj,e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdYEA_PENSAV1.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow01.addEventHandler("onclick", this.btnAddRow01_OnClick, this);
            this.btnDelRow01.addEventHandler("onclick", this.btnDelRow01_OnClick, this);
            this.grdYEA_PENSAV2.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow02.addEventHandler("onclick", this.btnAddRow02_OnClick, this);
            this.btnDelRow02.addEventHandler("onclick", this.btnDelRow02_OnClick, this);
            this.grdYEA_PENSAV3.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow03.addEventHandler("onclick", this.btnAddRow03_OnClick, this);
            this.btnDelRow03.addEventHandler("onclick", this.btnDelRow03_OnClick, this);
            this.grdYEA_PENSAV4.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAddRow04.addEventHandler("onclick", this.btnAddRow04_OnClick, this);
            this.btnDelRow04.addEventHandler("onclick", this.btnDelRow04_OnClick, this);

        };

        this.loadIncludeScript("YEAA0070T04.xfdl");

       
    };
}
)();
