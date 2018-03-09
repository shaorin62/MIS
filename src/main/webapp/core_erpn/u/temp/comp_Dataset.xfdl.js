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
                this.set_name("comp_Dataset");
                this.set_classname("Dataset_Method1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,856);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column size=\"256\" id=\"col1\" type=\"INT\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"256\" id=\"col3\"/></ColumnInfo><Rows><Row><Col id=\"col1\">10</Col><Col id=\"col2\">40</Col><Col id=\"col3\">70</Col></Row><Row><Col id=\"col1\">20</Col><Col id=\"col2\">50</Col><Col id=\"col3\">80</Col></Row><Row><Col id=\"col1\">30</Col><Col id=\"col2\">60</Col><Col id=\"col3\">90</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_other", this);
            obj.set_preload("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"255\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/></ColumnInfo><Rows><Row><Col id=\"col1\">aa</Col><Col id=\"col2\">dd</Col><Col id=\"col3\">gg</Col></Row><Row><Col id=\"col1\">bb</Col><Col id=\"col2\">ee</Col><Col id=\"col3\">hh</Col></Row><Row><Col id=\"col1\">cc</Col><Col id=\"col2\">ff</Col><Col id=\"col3\">ii</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button12", "absolute", "185", "433", "150", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("copyData");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "28", "45", "260", "98", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"col1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowType(currow)\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:col1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:col2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "30", "469", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("appendData");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "30", "505", "150", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("clearData");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "341", "361", "150", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("deleteAll");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "185", "469", "150", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_text("mergeData");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "296", "45", "260", "98", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_other");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"col1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowType(currow)\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:col1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:col2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "300", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("2) Method");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "558", "150", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("3) Calculation");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "30", "582", "150", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("getSum");
            this.addChild(obj.name, obj);

            obj = new Button("Button18", "absolute", "185", "582", "150", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("getCaseSum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "638", "150", "20", null, null, this);
            obj.set_taborder("13");
            obj.set_text("4) Sort");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "718", "150", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("5) Filter");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "30", "663", "150", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Ascending");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "185", "663", "150", "30", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Descending");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "30", "743", "150", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("filter");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", "185", "743", "150", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_text("release filter");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "341", "814", "150", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_text("findRowExpr");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "30", "814", "150", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_text("findRow");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "790", "150", "20", null, null, this);
            obj.set_taborder("25");
            obj.set_text("6) Find");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "341", "325", "150", "30", null, null, this);
            obj.set_taborder("27");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "185", "397", "150", "30", null, null, this);
            obj.set_taborder("28");
            obj.set_text("getDeletedColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "341", "397", "150", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("reset");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "30", "397", "150", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_text("getOrgColumn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "156", "150", "20", null, null, this);
            obj.set_taborder("32");
            obj.set_text("2) Create");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "296", "182", "102", "30", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Create");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "28", "182", "260", "98", null, null, this);
            obj.set_taborder("38");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "30", "325", "150", "30", null, null, this);
            obj.set_taborder("39");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "185", "361", "150", "30", null, null, this);
            obj.set_taborder("40");
            obj.set_text("setColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "30", "361", "150", "30", null, null, this);
            obj.set_taborder("41");
            obj.set_text("getColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "185", "325", "150", "30", null, null, this);
            obj.set_taborder("43");
            obj.set_text("insertRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "185", "505", "150", "30", null, null, this);
            obj.set_taborder("44");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "497", "325", "305", "210", null, null, this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "30", "433", "150", "30", null, null, this);
            obj.set_taborder("46");
            obj.set_text("copyRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "185", "814", "150", "30", null, null, this);
            obj.set_taborder("47");
            obj.set_text("findRowAs");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "341", "433", "150", "30", null, null, this);
            obj.set_taborder("48");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "440", "552", "400", "60", null, null, this);
            obj.style.set_background("khaki");
            obj.style.set_border("1 solid #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("st_script", "absolute", "5", "7", "389", "20", null, null, this.PopupDiv00);
            obj.set_taborder("0");
            obj.style.set_font("bold 9 Courier New");
            obj.set_wordwrap("false");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("st_return", "absolute", "5", "31", "389", "20", null, null, this.PopupDiv00);
            obj.set_taborder("1");
            obj.style.set_font("bold 9 Courier New");
            obj.set_wordwrap("false");
            this.PopupDiv00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 60, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("khaki");
            		p.style.set_border("1 solid #808080ff");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 856, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Dataset_Method1");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds");
            this._addPreloadList("data", "", "ds_other");
        };
        
        // User Script
        this.registerScript("comp_Dataset.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	if(this.isValidObject("ds_create"))
        	{
        		var objDataset = this.removeChild("ds_create"); 
        		delete objDataset; 
        		objDataset = null;
        	}
        	
        	var objDataset = new Dataset("ds_create");
         	objDataset.addColumn("Column0", "string");
         	objDataset.addColumn("Column1", "string");
         	objDataset.addColumn("Column2", "string");
        	
        	this.addChild(objDataset.name, objDataset);

        
        	for(var i=0; i<3; i++)
        	{
        		objDataset.addRow();
        		objDataset.setColumn(objDataset.rowposition, "Column0", "Data A-" + i);
        		objDataset.setColumn(objDataset.rowposition, "Column1", "Data B-" + i);
        		objDataset.setColumn(objDataset.rowposition, "Column2", "Data C-" + i);
        	}

        	this.Grid02.set_binddataset(objDataset.name) ;
        	this.Grid02.createFormat();

        }

        

        this.Button02_onclick = function(obj,e)

        {

        	this.ds.addRow();	

        

        	this.fn_script(obj, 'this.ds.addRow()', '');

        

        }

        

        this.Button03_onclick = function(obj,e)

        {

        	this.ds.insertRow(this.ds.rowposition);

        

        	this.fn_script(obj, 'this.ds.insertRow(this.ds.rowposition)', '');

        

        }

        

        this.Button04_onclick = function(obj,e)

        {

        	this.ds.deleteRow(this.ds.rowposition);		

        

        	this.fn_script(obj, 'this.ds.deleteRow(this.ds.rowposition)', '');

        

        }

        

        this.Button05_onclick = function(obj,e)

        {

        	var sVal = this.ds.getColumn(this.ds.rowposition, "col1");

        	

        //	this.alert(sVal);

        	this.fn_script(obj, 'this.ds.getColumn(this.ds.rowposition, "col1")', sVal);

        

        }

        

        this.Button06_onclick = function(obj,e)

        {

        	this.ds.setColumn(this.ds.rowposition, "col1", "2000");	

        

        	this.fn_script(obj, 'this.ds.setColumn(this.ds.rowposition, "col1", "2000")', '');

        

        }

        

        this.Button07_onclick = function(obj,e)

        {

        	this.ds.deleteAll();

        

        	this.fn_script(obj, 'this.ds.deleteAll()', '');

        }

        

        this.Button08_onclick = function(obj,e)

        {

        	var sVal = this.ds.getOrgColumn(this.ds.rowposition, "col1");

        	

        //	this.alert(sVal);

        	this.fn_script(obj, 'this.ds.getOrgColumn(this.ds.rowposition, "col1")', sVal);

        

        }

        

        this.Button09_onclick = function(obj,e)

        {

        	var sVal = this.ds.getDeletedColumn(0, "col1");

        

        // 	this.alert(sVal);	

        	this.fn_script(obj, 'this.ds.getDeletedColumn(0, "col1");', sVal);

        }

        

        this.Button10_onclick = function(obj,e)

        {

        	this.ds.reset();	

        	this.fn_script(obj, 'this.ds.reset()', '');

        }

        

        this.Button11_onclick = function(obj,e)

        {

        	this.ds.addRow()

        	this.ds.copyRow(this.ds.rowposition, this.ds_other, 0);

        	this.fn_script(obj, 'this.ds.copyRow(this.ds.rowposition, this.ds_other, 0)', '');

        

        }

        

        this.Button12_onclick = function(obj,e)

        {

        	this.ds.copyData(this.ds_other);	

        	this.fn_script(obj, 'this.ds.copyData(this.ds_other)', '');

        }

        

        this.Button13_onclick = function(obj,e)

        {

        	this.ds.appendData(this.ds_other);	

        	this.fn_script(obj, 'this.ds.appendData(this.ds_other)', '');

        }

        

        this.Button14_onclick = function(obj,e)

        {

        	this.ds.mergeData(this.ds_other);	

        	this.fn_script(obj, 'this.ds.mergeData(this.ds_other)', '');

        }

        

        this.Button15_onclick = function(obj,e)

        {

        	this.ds.clearData();

        	this.fn_script(obj, 'this.ds.clearData()', '');

        }

        

        this.Button16_onclick = function(obj,e)

        {

        	this.ds.clear();

        	this.fn_script(obj, 'this.ds.clear()', '');

        

        }

        

        this.Button17_onclick = function(obj,e)

        {

        	var nVal = this.ds.getSum("col1");

        	

        // 	this.alert(nVal);	

        	this.fn_script(obj, 'this.ds.getSum("col1")', nVal);

        }

        

        this.Button18_onclick = function(obj,e)

        {

        	var nVal = this.ds.getCaseSum("col1 > 10", "col1");

        	

        // 	this.alert(nVal);

        	this.fn_script(obj, 'this.ds.getCaseSum("col1 > 10", "col1")', nVal);

        }

        

        this.Button19_onclick = function(obj,e)

        {

        	this.ds.set_keystring("S:+col1+col2");	

        	this.fn_script(obj, 'this.ds.set_keystring("S:+col1+col2")', '' );

        }

        

        this.Button20_onclick = function(obj,e)

        {

        	this.ds.set_keystring("S:-col1-col2");	

        	this.fn_script(obj, 'this.ds.set_keystring("S:-col1-col2")', '' );

        }

        

        this.Button21_onclick = function(obj,e)

        {

        	this.ds.filter("col1 > 10");

        	this.fn_script(obj, 'this.ds.filter("col1 > 10")', '' );

        }

        

        this.Button22_onclick = function(obj,e)

        {

        	this.ds.filter("");

        	this.fn_script(obj, 'this.ds.filter("")', '' );

        }

        

        this.Button23_onclick = function(obj,e)

        {

        	var nRow = this.ds.findRow("col1", "20");

        	

        // 	this.alert(nRow);

        	this.fn_script(obj, 'this.ds.findRow("col1", "20")', nRow);

        }

        

        this.Button24_onclick = function(obj,e)

        {

        	var nRow = this.ds_other.findRowAs("col1", "b");

        	

        // 	this.alert(nRow);

        	this.fn_script(obj, 'this.ds_other.findRowAs("col1", "b")', nRow);

        }

        

        this.Button25_onclick = function(obj,e)

        {

        	var nRow = this.ds.findRowExpr("col1 > 10");

        

        	//this.alert(nRow);	

        	this.fn_script(obj, 'this.ds.findRowExpr("col1 > 10")', nRow );

        }

        

        this.Button26_onclick = function(obj,e)

        {

        	var sVal = this.ds.saveXML();

        	this.TextArea00.set_value(sVal);		

        

        	this.fn_script(obj, 'this.ds.saveXML()', '' );

        }

        

        this.fn_script = function(obj,pScript,pRtn)

        {

        	this.PopupDiv00.st_script.set_text(pScript);

        	this.PopupDiv00.st_return.set_text(pRtn);

        	this.PopupDiv00.trackPopupByComponent(obj, 0, parseInt(obj.height), 400, 60);

        

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button12.addEventHandler("onclick", this.Button12_onclick, this);
            this.Button13.addEventHandler("onclick", this.Button13_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button14.addEventHandler("onclick", this.Button14_onclick, this);
            this.Button17.addEventHandler("onclick", this.Button17_onclick, this);
            this.Button18.addEventHandler("onclick", this.Button18_onclick, this);
            this.Button19.addEventHandler("onclick", this.Button19_onclick, this);
            this.Button20.addEventHandler("onclick", this.Button20_onclick, this);
            this.Button21.addEventHandler("onclick", this.Button21_onclick, this);
            this.Button22.addEventHandler("onclick", this.Button22_onclick, this);
            this.Button25.addEventHandler("onclick", this.Button25_onclick, this);
            this.Button23.addEventHandler("onclick", this.Button23_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button16.addEventHandler("onclick", this.Button16_onclick, this);
            this.Button11.addEventHandler("onclick", this.Button11_onclick, this);
            this.Button24.addEventHandler("onclick", this.Button24_onclick, this);
            this.Button26.addEventHandler("onclick", this.Button26_onclick, this);
            this.PopupDiv00.addEventHandler("oncloseup", this.PopupDiv00_oncloseup, this);

        };

        this.loadIncludeScript("comp_Dataset.xfdl");
        this.loadPreloadList();
       
    };
}
)();
