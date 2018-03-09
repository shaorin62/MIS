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
                this.set_name("test_isValidObject");
                this.set_classname("test_isValidObject");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">123456789</Col></Row><Row><Col id=\"Column0\">987654321</Col></Row><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "50", "53", "112", "49", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "49", "139", "355", "161", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "44", "29", "123", "44", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "51.17%", "105", null, "93", "25.78%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell style=\"align:left top;\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "51.56%", "252", null, "62", "21.97%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "52.44%", "393", null, "65", "30.37%", null, this);
            obj.set_taborder("4");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "3.22%", "408", null, "34", "89.65%", null, this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "12.11%", "408", null, "34", "80.76%", null, this);
            obj.set_taborder("6");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "23.83%", "516", null, "62", "62.5%", null, this);
            obj.set_taborder("7");
            obj.set_text("메일 유효성 체크");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "24.32%", "468", null, "34", "54.1%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 355, 161, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_isValidObject");
            		p.set_titletext("New Form");
            		p.getSetter("text").set("object 존재 체크");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","MaskEdit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_isValidObject.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_isValidObject.xfdl", function() {
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	trace(typeof this.Div00.Button00 != "undefined");
        	trace(typeof this.Div00.Button01 != "undefined");
        	trace(typeof this.Dataset00 != "undefined");
        	trace(typeof this.Dataset01 != "undefined");
        	
        }

        
        this.Button01_onclick = function(obj,e) {

        	this.fnc_FormatSlipNumber(this.MaskEdit00);
        	this.fnc_FormatSlipNumber(this.Grid00, "Column0", "Y");

        }
        this.Button02_onclick = function(obj,e)
        {
        	this.Grid00.set_userdata("dddd");
        }

        this.Button03_onclick = function(obj,e)
        {
        	alert(this.Grid00.userdata);
        }

        this.Button04_onclick = function(obj,e) {

        	alert(this.fnc_IsEmail(this.Edit00.value));
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("sample_isValidObject.xfdl");

       
    };
}
)();
