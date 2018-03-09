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
                this.set_name("topFrame");
                this.set_classname("mnutop");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1264,50);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "75", "14", "104", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "0", "0", "60", "50", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_TF_home");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "195", "10", "112", "28", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">인사시스템</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">회계시스템</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("23");
            obj.set_value("1");
            obj.set_text("선택1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("com_TF_system");
            obj.style.set_buttonsize("16");
            obj.set_index("0");

            obj = new Button("Button10", "absolute", null, "12", "34", "27", "114", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_TF_myinfo");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", null, "12", "34", "27", "67", null, this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_TF_set");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", null, "12", "34", "27", "20", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_TF_logout");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1244", "0", "20", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "303", "13", null, "28", "162", null, this);
            obj.set_taborder("48");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_TF_menu");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("인사관리");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("급여관리");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("복리후생");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("교육관리");
            this.Tab00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1264, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnutop");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");

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

        };

        this.loadIncludeScript("topFrame_pul.xfdl");

       
    };
}
)();
