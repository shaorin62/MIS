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
                this.set_name("sample_grid_multicell");
                this.set_classname("sample_grid_multicell");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLA\" type=\"STRING\" size=\"256\"/><Column id=\"COLB\" type=\"STRING\" size=\"256\"/><Column id=\"COLC\" type=\"STRING\" size=\"256\"/><Column id=\"COLD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLA\">1</Col><Col id=\"COLB\">2</Col><Col id=\"COLC\">3</Col><Col id=\"COLD\">4</Col></Row><Row><Col id=\"COLA\">가</Col><Col id=\"COLB\">나나</Col><Col id=\"COLC\">다</Col><Col id=\"COLD\">라</Col></Row><Row><Col id=\"COLA\">a</Col><Col id=\"COLB\">b</Col><Col id=\"COLC\">c</Col><Col id=\"COLD\">d</Col></Row><Row><Col id=\"COLA\">11</Col><Col id=\"COLB\">22</Col><Col id=\"COLC\">33</Col><Col id=\"COLD\">44</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "6", "16", "511", "442", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/><Column size=\"171\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:COLA\" tooltiptext=\"bind:COLA\"><Cell/><Cell row=\"1\"/><Cell row=\"2\"/></Cell><Cell col=\"1\" text=\"bind:COLB\" tooltiptext=\"bind:COLB\"/><Cell row=\"1\" col=\"1\" text=\"bind:COLC\" tooltiptext=\"bind:COLC\"/><Cell row=\"2\" col=\"1\" text=\"bind:COLD\" tooltiptext=\"bind:COLD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "518", "16", "494", "430", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/><Column size=\"152\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:COLA\" tooltiptext=\"bind:COLA\"/><Cell col=\"1\" text=\"bind:COLB\" tooltiptext=\"bind:COLB\"/><Cell row=\"1\" col=\"1\" text=\"bind:COLC\" tooltiptext=\"bind:COLC\"/><Cell row=\"2\" col=\"1\" text=\"bind:COLD\" tooltiptext=\"bind:COLD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_grid_multicell");
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

        this.loadIncludeScript("sample_grid_multicell.xfdl");

       
    };
}
)();
