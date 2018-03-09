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
                this.set_name("mdiFrame_pul");
                this.set_classname("mnutop");
                this.set_scrollbars("none");
                this.set_cssclass("frm_BF_mdibg");
                this._setFormPosition(0,0,1204,34);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "1179", "0", "25", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabOpenMenu", "absolute", "22", "0", null, "25", "132", null, this);
            obj.set_taborder("47");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_BF_mdi");
            obj.set_tabjustify("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tabOpenMenu);
            obj.set_text("tabpage2");
            this.tabOpenMenu.addChild(obj.name, obj);

            obj = new Button("btn_closeAll", "absolute", null, "5", "21", "20", "19", null, this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_Mdi_Close");
            obj.set_tooltiptext("전체화면닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize", "absolute", null, "5", "15", "21", "100", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_Mdi_Max");
            obj.set_tooltiptext("단일화면보기");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tilevertical", "absolute", null, "5", "15", "21", "75", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("btn_Mdi_hor");
            obj.set_tooltiptext("열린화면보기");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "7", "4", "17", "122", null, this);
            obj.set_taborder("55");
            obj.style.set_border("0 none #808080ff,0 none #808080ff,0 none #808080ff,1 solid #ccccccff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tilevertical00", "absolute", null, "5", "15", "21", "50", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_Mdi_ver");
            obj.set_tooltiptext("열린화면보기");
            obj.set_enable("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1204, 34, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnutop");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_BF_mdibg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("ontimer", this.fn_OnTimer, this);
            this.tabOpenMenu.addEventHandler("onchanged", this.fn_TabChange, this);
            this.tabOpenMenu.addEventHandler("onextrabuttonclick", this.fn_CloseTab, this);
            this.btn_closeAll.addEventHandler("onkillfocus", this.btn_closeAll_onkillfocus, this);
            this.btn_closeAll.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_maximize.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_tilevertical.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_tilevertical00.addEventHandler("onclick", this.btn_arrange_onclick, this);

        };

        this.loadIncludeScript("mdiFrame_pul.xfdl");

       
    };
}
)();
