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
                this.set_name("comp_Calendar");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"bkcolor\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolor\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20140703</Col><Col id=\"color\">blue</Col><Col id=\"bkcolor\">lightpink</Col><Col id=\"bordercolor\">1 solid red</Col></Row><Row><Col id=\"date\">20140704</Col><Col id=\"color\">red</Col><Col id=\"bkcolor\">lightpink</Col><Col id=\"bordercolor\">1 solid red</Col></Row><Row><Col id=\"date\">20140710</Col><Col id=\"color\">green</Col><Col id=\"bkcolor\">lightpink</Col><Col id=\"bordercolor\">1 solid red</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Calendar("Calendar00", "absolute", "30", "50", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("20140701");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Calendar("Calendar01", "absolute", "30", "126", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("20140701");
            obj.set_dateformat("yyyy/MM/dd");
            obj.set_editformat("yyyy/MM/dd");

            obj = new Calendar("Calendar02", "absolute", "30", "361", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20140701");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Calendar("Calendar03", "absolute", "410", "43", "166", "198", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_value("20140701");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Calendar("Calendar04", "absolute", "410", "284", "166", "198", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("20140701");
            obj.set_innerdataset("@ds_date");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("color");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_backgroundcolumn("bkcolor");
            obj.set_type("monthonly");
            obj.style.set_background("lightpink");
            obj.set_bordercolumn("bordercolor");

            obj = new Calendar("Calendar05", "absolute", "30", "201", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_value("20140701");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Calendar("Calendar06", "absolute", "30", "276", "200", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_value("20140701");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Static("Static00", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("8");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "100", "150", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("2) Format");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "172", "150", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("3) Today");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "252", "150", "20", null, null, this);
            obj.set_taborder("11");
            obj.set_text("4) Last Day");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "331", "150", "20", null, null, this);
            obj.set_taborder("12");
            obj.set_text("5) Type - Spin");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "400", "20", "150", "20", null, null, this);
            obj.set_taborder("13");
            obj.set_text("6) Type - Month");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "400", "260", "150", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("7) Anniversary");
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
        this.registerScript("Calendar.xfdl", function() {

        this.comp_Calendar_onload = function(obj,e)
        {
        	this.Calendar05.set_value(this.fn_Today());
        	this.Calendar06.set_value(this.fn_LastDay(this.fn_Today()));
        }

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        this.fn_LastDay = function(sDate)
        {
        	var dDate = new Date(parseInt(sDate.substr(0,4))
                               , parseInt(sDate.substr(4,2))
                               , "01");
        	dDate = dDate.addDate(-1);

        	var objDate  = new Date(dDate);
            var sRtn =  objDate.getFullYear()
                     + (objDate.getMonth()+1).toString().padLeft(2, "0")
                     +  objDate.getDate().toString().padLeft(2, "0");

        	return sRtn;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.comp_Calendar_onload, this);

        };

        this.loadIncludeScript("Calendar.xfdl");

       
    };
}
)();
