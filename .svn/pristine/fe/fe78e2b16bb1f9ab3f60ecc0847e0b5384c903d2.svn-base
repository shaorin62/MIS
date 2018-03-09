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
                this.set_name("testgrid");
                this.set_classname("testgrid");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SECT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"GNDR_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TOTAL\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "11", "111", "993", "530", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsHR_MASTXM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:SECT_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:GNDR_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("testgrid");
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

        this.loadIncludeScript("testgrid.xfdl");

       
    };
}
)();
