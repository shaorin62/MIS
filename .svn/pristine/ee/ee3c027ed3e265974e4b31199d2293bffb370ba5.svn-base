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
                this.set_name("comp_Grid_Cell");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,949);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_display", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/><Column id=\"BAR\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">ShinSoo Choo</Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col><Col id=\"BAR\">10</Col><Col id=\"IMAGE\">img_new</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Yuna Kim</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col><Col id=\"BAR\">30</Col><Col id=\"IMAGE\">img_save</Col></Row><Row><Col id=\"FULL_NAME\">Sumi Jo</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col><Col id=\"BAR\">60</Col><Col id=\"IMAGE\">img_delete</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS Park</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col><Col id=\"BAR\">90</Col><Col id=\"IMAGE\">Images::img_search.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);

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

            obj = new Dataset("ds_edit", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/><Column id=\"BAR\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">ShinSoo Choo</Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col><Col id=\"BAR\">10</Col><Col id=\"IMAGE\">img_new</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Yuna Kim</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col><Col id=\"BAR\">30</Col><Col id=\"IMAGE\">img_save</Col></Row><Row><Col id=\"FULL_NAME\">Sumi Jo</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col><Col id=\"BAR\">60</Col><Col id=\"IMAGE\">img_delete</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS Park</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col><Col id=\"BAR\">90</Col><Col id=\"IMAGE\">Images::img_search.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">ShinSoo Choo</Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col><Col id=\"IMAGE\">img_new</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Yuna Kim</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col><Col id=\"IMAGE\"/></Row><Row><Col id=\"FULL_NAME\">Sumi Jo</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col><Col id=\"IMAGE\">img_new</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS Park</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col><Col id=\"IMAGE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "50", "800", "123", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_display");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"number\"/><Cell col=\"3\" text=\"date\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"checkbox\"/><Cell col=\"6\" text=\"bar\"/><Cell col=\"7\" text=\"image\"/><Cell col=\"8\" text=\"button\"/><Cell col=\"9\" text=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:SALARY\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"6\" displaytype=\"bar\" text=\"bind:BAR\"/><Cell col=\"7\" displaytype=\"image\" text=\"bind:IMAGE\"/><Cell col=\"8\" displaytype=\"button\" style=\"controlcolor:#333333ff;\" text=\"click\"/><Cell col=\"9\" displaytype=\"none\" text=\"bind:FULL_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) displattype");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "196", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) edittype");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "30", "218", "800", "123", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_edit");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"none\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"textarea\"/><Cell col=\"3\" text=\"date\"/><Cell col=\"4\" text=\"mask\"/><Cell col=\"5\" text=\"masknum\"/><Cell col=\"6\" text=\"combo\"/><Cell col=\"7\" text=\"checkbox\"/><Cell col=\"8\" text=\"button\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" edittype=\"textarea\" text=\"bind:EMPL_MEMO\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:HIRE_DATE\" calendardisplay=\"display\"/><Cell col=\"4\" edittype=\"mask\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:SALARY\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\" combodisplay=\"display\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"controlcolor:#333333ff;\" text=\"click\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "364", "150", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("3) expand, Merge cells");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "30", "386", "640", "147", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_edit");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"25\"/><Column size=\"50\"/><Column size=\"25\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"Name\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" rowspan=\"2\" colspan=\"4\" text=\"Gender\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"2\" colspan=\"2\"><Cell text=\"Dept\"/><Cell col=\"1\" text=\"HireDate\"/></Cell></Band><Band id=\"body\"><Cell edittype=\"mask\" text=\"bind:EMPL_ID\" mask=\"AA-###\" expandshow=\"show\" expandsize=\"19\" expandimage=\"URL('Images::img_search.png')\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:HIRE_DATE\" calendardisplay=\"display\"/><Cell col=\"4\" colspan=\"4\"><Cell displaytype=\"image\" style=\"align:right;\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Images::radio_n.png&quot; : &quot;Images::radio_d.png&quot;\"/><Cell col=\"1\" text=\"Male\"/><Cell col=\"2\" displaytype=\"image\" style=\"align:right;\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Images::radio_d.png&quot; : &quot;Images::radio_n.png&quot;\"/><Cell col=\"3\" text=\"Female\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "556", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("4) setCellProperty");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "30", "584", "100", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "134", "584", "100", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Default");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "636", "150", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("5) Expression");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "30", "662", "813", "182", null, null, this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_emp");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"102\"/><Column size=\"63\"/><Column size=\"80\"/><Column size=\"87\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" colspan=\"2\" text=\"expr:comp.parent.sFormValue\"/><Cell col=\"3\" rowspan=\"2\" text=\"Dept\"/><Cell col=\"4\" rowspan=\"2\" text=\"HireDate\"/><Cell col=\"5\" rowspan=\"2\" text=\"Gender\"/><Cell col=\"6\" rowspan=\"2\" text=\"Married\"/><Cell col=\"7\" rowspan=\"2\" text=\"Salary\"/><Cell col=\"8\" rowspan=\"2\" text=\"Memo\"/><Cell row=\"1\" col=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"2\" text=\"Name\"/></Band><Band id=\"body\"><Cell celltype=\"head\" style=\"align:center;background2: ;\" text=\"expr:(dataset.rowposition == currow ? &quot;☞&quot; : currow+1)\"/><Cell col=\"1\" style=\"align:center;color:EXPR(GENDER=='W' ? 'blue' : 'red' );color2:EXPR(GENDER=='W' ? 'blue' : 'red' );\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"2\" style=\"color:EXPR(GENDER=='W' ? 'blue' : 'red' );color2:EXPR(GENDER=='W' ? 'blue' : 'red' );\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\" combodisplay=\"edit\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"expr:GENDER=='W' ? 'Female' : 'Male'\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:SALARY\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"2\" style=\"align:center;\" text=\"expr:'Total : '+comp.parent.ds_emp. getRowCount()\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_expr()\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:comp.parent.ds_emp.getSum('SALARY')\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 949, this,
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
        this.registerScript("Grid_Cell.xfdl", function() {

        this.Grid01_onexpandup = function(obj,e)
        {
        	this.alert("pop");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid01.setCellProperty("body", 2, "displaytype", "normal");
        	this.Grid01.setCellProperty("body", 3, "calendardisplay", "edit");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Grid01.setCellProperty("body", 2, "displaytype", "combo");
        	this.Grid01.setCellProperty("body", 3, "calendardisplay", "display");
        }

        
        this.sFormValue="TOBESOFT";
        this.fn_expr = function()
        {
        	var i=0;

        	return this.sFormValue+" : " + this.ds_emp.getRowCount();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid01.addEventHandler("onexpandup", this.Grid01_onexpandup, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Grid_Cell.xfdl");

       
    };
}
)();
