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
                this.set_name("Guide_tab");
                this.set_classname("guide02_new");
                this.set_titletext("Tab / GroupBox / ProgressBar");
                this._setFormPosition(0,0,990,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "186", "78", "600", "190", null, null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("탭페이지");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tab("Tab00", "absolute", "10", "10", "578", "141", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_2depth");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00.tabpage1.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.tabpage1.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00.tabpage1.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.tabpage1.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("탭페이지2");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("탭페이지3");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("탭페이지4");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab00);
            obj.set_text("tabpage5");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab00);
            obj.set_text("tabpage6");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01", "absolute", "186", "329", "600", "190", null, null, this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab01);
            obj.set_text("tabpage1");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab01);
            obj.set_text("tabpage2");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab01);
            obj.set_text("tabpage3");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab01);
            obj.set_text("tabpage4");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab01);
            obj.set_text("tabpage5");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab01);
            obj.set_text("tabpage6");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.Tab01);
            obj.set_text("tabpage7");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "186", "304", "210", "18", null, null, this);
            obj.set_taborder("2");
            obj.set_text("showextrabutton = <b v='true'>true</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "186", "53", "210", "18", null, null, this);
            obj.set_taborder("3");
            obj.set_text("showextrabutton = <b v='true'>None</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", "990", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Tab");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "25", "652", "205", "115", null, null, this);
            obj.set_text("그룹박스");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "261", "652", "205", "115", null, null, this);
            obj.set_text("그룹박스");
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "558", "510", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "25", "615", "62", "18", null, null, this);
            obj.set_taborder("8");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "261", "615", "65", "18", null, null, this);
            obj.set_taborder("9");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00", "absolute", "569", "664", "160", "14", null, null, this);
            obj.set_taborder("10");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01", "absolute", "569", "682", "160", "14", null, null, this);
            obj.set_taborder("11");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar02", "absolute", "569", "730", "271", "14", null, null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar03", "absolute", "789", "682", "160", "14", null, null, this);
            obj.set_taborder("13");
            obj.set_pos("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar04", "absolute", "789", "664", "160", "14", null, null, this);
            obj.set_taborder("14");
            obj.set_pos("65");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "568", "626", "62", "18", null, null, this);
            obj.set_taborder("15");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "789", "626", "65", "18", null, null, this);
            obj.set_taborder("16");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "509", "558", "481", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "509", "584", "1", "213", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static08");
            obj.style.set_background("#c6c6c5ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "842", "726", "96", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Progress Test ");
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
            obj = new Layout("default", "", 990, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Tab / GroupBox / ProgressBar");

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

        };

        this.loadIncludeScript("06_Guide_tab.xfdl");

       
    };
}
)();
