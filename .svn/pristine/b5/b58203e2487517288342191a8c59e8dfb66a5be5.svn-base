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
                this.set_name("comp_Button");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employees", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">ShinSoo Choo</Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Yuna Kim</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"FULL_NAME\">Sumi Jo</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS Park</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "30", "50", "150", "40", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Button");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "139", "150", "44", null, null, this);
            obj.set_taborder("1");
            obj.set_text("enabled");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "30", "187", "150", "44", null, null, this);
            obj.set_taborder("2");
            obj.set_text("disabled");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "30", "235", "150", "44", null, null, this);
            obj.set_taborder("3");
            obj.set_text("mouseover");
            obj.style.setStyleValue("background", "mouseover", "lightblue");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "190", "139", "150", "44", null, null, this);
            obj.set_taborder("4");
            obj.set_text("pushed");
            obj.style.setStyleValue("background", "pushed", "khaki");
            obj.style.setStyleValue("font", "pushed", "14 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "190", "235", "150", "44", null, null, this);
            obj.set_taborder("5");
            obj.set_text("selected");
            obj.style.setStyleValue("background", "selected", "lightgreen");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("2) Pseudo");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "388", "150", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("3) expr");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "30", "414", "150", "44", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Button08");
            obj.set_expr("expr:comp.parent.Static00.text + \" \" + comp.parent.Button00.text");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "30", "462", "150", "44", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Button08");
            obj.set_expr("expr:comp.parent.expr_result()");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "190", "187", "150", "44", null, null, this);
            obj.set_taborder("12");
            obj.set_text("focused");
            obj.style.setStyleValue("background", "focused", "lightpink");
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
            obj = new BindItem("item0","Button08","text","ds_employees","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Button06","text","ds_employees","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Button.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.alert(obj.id+" Click!");
        }

        this.Button05_onclick = function(obj,e)
        {
        	obj.setSelectStatus(true);
        }

        this.expr_result = function()
        {
             return "Return ABC";
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_employees.addEventHandler("onload", this.ds_employees_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("Button.xfdl");

       
    };
}
)();
