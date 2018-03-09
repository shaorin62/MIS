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
                this.set_name("test_datset_keystring");
                this.set_classname("test_datset_keystring");
                this.set_titletext("소계");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"소계\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">4</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">5</Col></Row><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">4</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">5</Col></Row><Row><Col id=\"Column0\">나</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "72", "111", "448", "511", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"currow\"/><Cell col=\"4\" text=\"rowlevel\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow) == 2 ? '중계':Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"expr:currow\"/><Cell col=\"4\" text=\"expr:dataset.getRowLevel(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "72", "58", "94", "42", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "176", "57", "532", "45", null, null, this);
            obj.set_taborder("2");
            obj.set_value("G:Column0,Column1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "555", "122", "429", "150", null, null, this);
            obj.set_taborder("3");
            obj.set_text("설정 항목\r\n\r\n소계\r\n1) Dataset.keystring = \"G:Column0,Column1\"\r\n2) Dataset 의 prop,sumtext 설정\r\n3) Grid 의 suppress 설정\r\n4) Grid 의 expr 설정\r\n    dataset.getRowLevel(currow) == 2 ? '중계':Column1\r\n\r\n");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_datset_keystring");
            		p.set_titletext("소계");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_datset_subsum.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_datset_subsum.xfdl", function() {
        //include "script::lib_script_common.xjs"

        this.Button00_onclick = function(obj,e) {

        	this.Dataset00.set_keystring(this.Edit00.value);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("sample_datset_subsum.xfdl");

       
    };
}
)();
