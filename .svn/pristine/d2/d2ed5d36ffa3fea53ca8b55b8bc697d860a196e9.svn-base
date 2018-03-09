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
                this.set_name("comp_Grid_Basic");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,1092);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
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
            obj = new Grid("Grid00", "absolute", "30", "50", "713", "122", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "196", "300", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("2) autofit, cellsizing, cellmoving");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "30", "218", "713", "122", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "364", "420", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("3) column fix");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "30", "386", "481", "136", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"MARRIED\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "540", "420", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("4) selecttype - multirow");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "30", "562", "320", "123", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_emp");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "299", "535", "51", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "380", "540", "236", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("selecttype - area");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05", "absolute", "382", "562", "320", "123", null, null, this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_emp");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "651", "535", "51", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "30", "760", "640", "123", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"MARRIED\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"DEPT_ID\"/><Cell col=\"2\" text=\"SALARY\"/><Cell col=\"3\" rowspan=\"2\" text=\"EMPL_MEMO\"/><Cell row=\"1\" text=\"FULL_NAME\"/><Cell row=\"1\" col=\"1\" text=\"HIRE_DATE\"/><Cell row=\"1\" col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:DEPT_ID\"/><Cell col=\"2\" text=\"bind:SALARY\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:EMPL_MEMO\"/><Cell row=\"1\" text=\"bind:FULL_NAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:HIRE_DATE\"/><Cell row=\"1\" col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "134", "722", "100", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_text("default");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "30", "722", "100", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("format1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "700", "150", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_text("5) format");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 1092, this,
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
        this.registerScript("Grid_Basic.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid04.selectRow(1, true);
         	this.Grid04.selectRow(2, true);
         	this.Grid04.selectRow(3, true);
        }

        

        this.Button01_onclick = function(obj,e)
        {
        	var arrRow = this.Grid04.getSelectedDatasetRows();
        	var sMsg = "";
        	for(var i=0; i<arrRow.length; i++)
        	{
        		sMsg += "Row : " + arrRow[i] + "\n";
        	}

        	this.alert(sMsg);
        }

        this.Button02_onclick = function(obj,e)
        {
        	var sMsg = "";
        	sMsg =  "Start = " + "Column : " + this.Grid05.selectstartcol
        	                   + ", Row : " + this.Grid05.selectstartrow;
        	sMsg += "\n";
        	sMsg += "End   = " + "Column : " + this.Grid05.selectendcol
        	                   + ", Row : " + this.Grid05.selectendrow;
        	alert(sMsg);

        }

        this.Button04_onclick = function(obj,e)
        {
        	this.Grid03.set_formatid("format1");
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.Grid03.set_formatid("default");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("Grid_Basic.xfdl");

       
    };
}
)();
