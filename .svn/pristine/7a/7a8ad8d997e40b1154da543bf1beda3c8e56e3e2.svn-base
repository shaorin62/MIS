(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("test_grid_rowsize");
                this.set_classname("test_grid_rowsize");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">11</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">22</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">33</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">44</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">55</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">66</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">77</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">88</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "72", "56", "383", "160", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "496", "56", "112", "35", null, null, this);
            obj.set_taborder("1");
            obj.set_text("set height");
            this.addChild(obj.name, obj);

            obj = new Grid("GRID", "absolute", "99", "307", "469", "251", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_formatid("POSI1");
            obj._setContents("<Formats><Format id=\"POSI1\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" expr=\"expr:dataset.getSum('Column1')\"/><Cell col=\"2\"/></Band></Format><Format id=\"POSI2\"><Columns><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"C1\"/><Cell col=\"1\" text=\"C2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/></Band></Format><Format id=\"POSI3\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"C1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "636", "399", "242", "51", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "628", "355", "224", "34", null, null, this);
            obj.set_taborder("4");
            obj.set_value("POSI1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "215", "596", "175", "53", null, null, this);
            obj.set_taborder("5");
            obj.set_text("excel");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "486", "570", "232", "70", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_grid_rowsize");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("test_grid_rowsize.xfdl", "script::lib_script_common.xjs");
        this.registerScript("test_grid_rowsize.xfdl", function() {
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	this.Grid00.setRealRowSize( 0, -1, 50, true );

        }

        this.Button01_onclick = function(obj,e)
        {
        	this.GRID.set_formatid(this.Edit00.value);
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        trace(this.GRID.getCurFormatString());
        	this.fnc_ToExcel(this.name);

        }
        this.test_grid_rowsize_onload = function(obj,e)
        {
        		this.fnc_GridSetting(this);
        }

        this.Button03_onclick = function(obj,e)
        {
        	
        	//var sGrid = "grd" + this.fnc_SubStr(obj.name, 3);

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	
        	var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, this.GRID, "Sheet1!A1","allband","allrecord","suppress","onlyvalue","none","color,background","both");
        	
            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);

        	this.ExcelExportObject.set_exportfilename("ExcelExport");

            this.ExcelExportObject.set_exporturl(application.GBL_HTTPURL + "/XExportImport");
            
        	// var objExportItem = this.ExcelExportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
        	// objExportItem.set_exceptstyle("background,background2");

            this.ExcelExportObject.exportData();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_grid_rowsize_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.fn_ToExcel, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("test_grid_rowsize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
