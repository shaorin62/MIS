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
                this.set_name("sample_grid_mult_edittype");
                this.set_classname("sample_grid_mult_edittype");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">Dataset01</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">Dataset01</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">Dataset01</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column3\">a</Col><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">Dataset02</Col></Row><Row><Col id=\"Column3\">b</Col><Col id=\"Column0\">5</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">Dataset02</Col></Row><Row><Col id=\"Column3\">c</Col><Col id=\"Column0\">6</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">Dataset02</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">나</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">다</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">A</Col></Row><Row><Col id=\"Column0\">b</Col><Col id=\"Column1\">B</Col></Row><Row><Col id=\"Column0\">c</Col><Col id=\"Column1\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "56", "48", "607", "214", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column3\" combodataset=\"bind:Column2\" combocodecol=\"Column0\" combodatacol=\"Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_grid_mult_edittype");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("sample_grid_mult_edittype.xfdl");

       
    };
}
)();
