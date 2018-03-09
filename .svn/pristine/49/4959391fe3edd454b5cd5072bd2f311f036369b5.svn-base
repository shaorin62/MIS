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
                this.set_name("comp_Radio");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Radio("Radio00", "absolute", "30", "50", "116", "108", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");

            obj = new Radio("Radio01", "absolute", "32", "202", "454", "38", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">Sales</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">IT</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">Education</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">Marketing</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">HR</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "172", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) Contents");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "252", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("3) Column Count");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02", "absolute", "30", "282", "257", "68", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_columncount("3");


            
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Radio.xfdl");

       
    };
}
)();
