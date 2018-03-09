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
                this.set_name("comp_Combo");
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

            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales1</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">Sales2</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Sales3</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">IT1</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">IT2</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"text\">Marketing1</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"text\">Marketing2</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"text\">Marketing3</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"text\">HR1</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"text\">HR2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cmbDeptID", "absolute", "30", "50", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");

            obj = new Combo("cmbDeptID00", "absolute", "30", "201", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_type("search");

            obj = new Combo("cmbDeptID01", "absolute", "30", "277", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_type("filter");

            obj = new Combo("cmbDeptID02", "absolute", "30", "120", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            var cmbDeptID02_innerdataset = new Dataset("cmbDeptID02_innerdataset", this.cmbDeptID02);
            cmbDeptID02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">Sales</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">IT</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">Education</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">Marketing</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">HR</Col></Row></Rows>");
            obj.set_innerdataset(cmbDeptID02_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Div("Div00", "absolute", "32", "352", "239", "35", null, null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "2", "2", "76", "29", null, null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "79", "2", "125", "29", null, null, this.Div00);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "206", "2", "29", "28", null, null, this.Div00);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('theme://images/btn_drop_N.png') center middle");
            this.Div00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "31", "387", "242", "123", null, null, this);
            obj.style.set_border("1 solid #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "-2", "240", "122", null, null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent;background2:transparent;\" text=\"bind:code\"/><Cell col=\"1\" style=\"background:transparent;background2:transparent;\" text=\"bind:text\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "172", "150", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("3) Search");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "252", "150", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("4) Filter");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "92", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("2) Contents");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "324", "150", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("5) Multi Combo");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 239, 35, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 242, 123, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.style.set_border("1 solid #808080ff");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

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
        this.registerScript("Combo.xfdl", function() {

        this.Div00_Button00_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this.Div00, 0);
        	var nY = system.clientToScreenY(this.Div00, 0);

        	this.PopupDiv00.trackPopupByComponent(this.Div00, 0, this.Div00.getOffsetHeight()+2);
        }

        this.PopupDiv00_Grid00_oncellclick = function(obj,e)
        {
        	this.Div00.Edit00.set_value(this.ds_dept.getColumn(e.row, "code"));
        	this.Div00.Edit01.set_value(this.ds_dept.getColumn(e.row, "text"));
        	this.PopupDiv00.closePopup();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.PopupDiv00.Grid00.addEventHandler("oncellclick", this.PopupDiv00_Grid00_oncellclick, this);

        };

        this.loadIncludeScript("Combo.xfdl");

       
    };
}
)();
