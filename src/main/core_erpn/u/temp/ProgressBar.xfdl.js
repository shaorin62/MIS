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
                this.set_name("comp_ProgressBar");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ProgressBar("ProgressBar00", "absolute", "30", "50", "300", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_max("100");
            obj.set_min("0");
            obj.set_pos("50");
            obj.style.set_bartype("normal");
            obj.style.set_barcolor("#fbb03eff");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01", "absolute", "30", "135", "300", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_max("100");
            obj.set_min("0");
            obj.set_pos("50");
            obj.style.set_bartype("normal");
            obj.style.set_barcolor("#fbb03eff");
            obj.style.set_direction("backward");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar02", "absolute", "30", "216", "300", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_max("100");
            obj.set_min("0");
            obj.set_pos("50");
            obj.style.set_bartype("normal");
            obj.style.set_smooth("false");
            obj.style.set_barcolor("#fbb03eff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "336", "50", "80", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Start");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "108", "150", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("2) Direction");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "188", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("3) Smooth");
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
        this.registerScript("ProgressBar.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ProgressBar00.set_pos(0);
        	this.ProgressBar01.set_pos(0);
        	this.ProgressBar02.set_pos(0);

        	this.setTimer(0, 50);

        }

        
        this.comp_ProgressBar_ontimer = function(obj,e)
        {
        	if(e.timerid == 0)
        	{
        		if(this.ProgressBar00.pos == 100)
        		{
        			this.killTimer(0);
        		}
        		this.ProgressBar00.getNumSetter("pos").postInc();
        		this.ProgressBar01.getNumSetter("pos").postInc();
        		this.ProgressBar02.getNumSetter("pos").postInc();

        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer", this.comp_ProgressBar_ontimer, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("ProgressBar.xfdl");

       
    };
}
)();
