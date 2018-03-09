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
                this.set_name("sample_excel_import");
                this.set_classname("sample_excel_import");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"aa\" type=\"STRING\" size=\"256\"/><Column id=\"bb\" type=\"STRING\" size=\"256\"/><Column id=\"cc\" type=\"STRING\" size=\"256\"/><Column id=\"dd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTemp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "11", "48", "349", "536", null, null, this);
            obj.set_cssclass("EXCEL");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"aa\"/><Cell col=\"1\" text=\"bb\"/><Cell col=\"2\" text=\"cc\"/><Cell col=\"3\" text=\"dd\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:aa\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:bb\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:cc\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "12", "11", "81", "27", null, null, this);
            obj.set_taborder("1");
            obj.set_text("import");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "400", "68", "270", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Dataset ColCnt = Excel ColCnt (Okay)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "400", "92", "270", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Dataset ColCnt > Excel ColCnt (Okay)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "400", "116", "270", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Dataset ColCnt < Excel ColCnt (Error)");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_excel_import");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_excel_import.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_excel_import.xfdl", function() {
        //include "script::lib_script_common.xjs"

        this.Button00_onclick = function(obj,e) {

        	this.dsList.clearData();
        	this.fnc_ExcelUpload("dsList","Sheet1","A2", "this.fn_ExcelSuccess");

        }

        this.fn_ExcelSuccess = function(obj,e) {

        	this.objDsImport.clearData();
        	this.objDsImport.set_enableevent(false);
        	this.objDsImport.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();

        	/*
        	윗 스크립트와 하단 스크립트는 고정으로 사용하고
        	이곳에 후처리 프로세스를 넣는다.
        	*/

        	this.objDsImport.set_enableevent(true);
        	this.setWaitCursor(false);
        	this.fnc_Message("TMM125", "엑셀 업로드를 완료하였습니다.");

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample_excel_import.xfdl");

       
    };
}
)();
