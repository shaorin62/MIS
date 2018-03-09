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
                this.set_name("comp_ListBox");
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
            obj = new ListBox("ListBox00", "absolute", "30", "50", "150", "120", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");

            obj = new ListBox("ListBox01", "absolute", "30", "231", "150", "120", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_multiselect("true");

            obj = new Button("Button00", "absolute", "188", "231", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Get SelectList");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "196", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) MultiSelect");
            obj.style.set_font("bold 9 arial");
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ListBox.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var sMsg = "";
        	for (var i=0; i<this.ListBox01.getCount(); i++)
        	{
        		if(this.ListBox01.getSelect(i) == true)
        		{
        			sMsg += "Row : "+ i +"\n";
        		}
        	}
        	this.alert("Selected Count : " + iCount + "\n" + sMsg);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("ListBox.xfdl");

       
    };
}
)();
