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
                this.set_name("comp_CheckBox");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chk", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"chk2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col><Col id=\"chk2\">Y</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"chk2\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new CheckBox("CheckBox00", "absolute", "30", "40", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "32", "112", "80", "75", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_chk");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "136", "111", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "84", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2) Bind");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "136", "232", "150", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("CheckBox00");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "204", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("3) true, false value");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "32", "232", "80", "75", null, null, this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_chk");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/></Band><Band id=\"body\"><Cell text=\"bind:chk2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Button");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","CheckBox01","value","ds_chk","chk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","CheckBox02","value","ds_chk","chk2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("CheckBox.xfdl");

       
    };
}
)();
