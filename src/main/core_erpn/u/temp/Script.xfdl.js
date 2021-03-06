﻿(function()
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
                this.set_name("comp_Script");
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
            obj = new Button("Button00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Form");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "30", "131", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("include");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) Form");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) Include");
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
        this.addIncludeScript("Script.xfdl", "Lib::Common.xjs");
        this.registerScript("Script.xfdl", function() {
        //include "Lib::Common.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	var sRtn = this.fn_formFunction();
        	this.alert(sRtn);
        }

        this.fn_formFunction = function()
        {
        	var sRtn1 = "Form Function";
        	return sRtn1;
        }

        this.Button01_onclick = function(obj,e)
        {
        	var sRtn = this.cfn_includeFunction();
        	this.alert(sRtn);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_employees.addEventHandler("onload", this.ds_employees_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Script.xfdl");

       
    };
}
)();
