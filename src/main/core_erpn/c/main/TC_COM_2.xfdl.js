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
                this.set_name("TC_COM_2");
                this.set_scrollbars("none");
                this.set_titletext("[공통]달력");
                this._setFormPosition(0,0,279,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "279", "260", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MF_bg1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "15", "47", "248", "199", null, null, this);
            obj.set_cssclass("grd_MF_date");
            obj.set_taborder("0");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell style=\"color:#f84f4fff;\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"1\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"2\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"3\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"4\" style=\"selectbackground: ;\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"5\" cssclass=\"Cellgrd_MF_noimg\"/><Cell col=\"6\" style=\"color:#5e95eeff;\" text=\"1\"/><Cell row=\"1\" style=\"color:#f84f4fff;\" text=\"2\"/><Cell row=\"1\" col=\"1\" text=\"3\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_MF_link\" text=\"4\"/><Cell row=\"1\" col=\"3\" text=\"5\"/><Cell row=\"1\" col=\"4\" text=\"6\"/><Cell row=\"1\" col=\"5\" text=\"7\"/><Cell row=\"1\" col=\"6\" style=\"color:#5e95eeff;\" text=\"8\"/><Cell row=\"2\" style=\"color:#f84f4fff;\" text=\"9\"/><Cell row=\"2\" col=\"1\" text=\"10\"/><Cell row=\"2\" col=\"2\" text=\"11\"/><Cell row=\"2\" col=\"3\" text=\"12\"/><Cell row=\"2\" col=\"4\" text=\"13\"/><Cell row=\"2\" col=\"5\" text=\"14\"/><Cell row=\"2\" col=\"6\" style=\"color:#5e95eeff;\" text=\"15\"/><Cell row=\"3\" style=\"color:#f84f4fff;\" text=\"16\"/><Cell row=\"3\" col=\"1\" text=\"17\"/><Cell row=\"3\" col=\"2\" text=\"18\"/><Cell row=\"3\" col=\"3\" text=\"19\"/><Cell row=\"3\" col=\"4\" cssclass=\"Cellgrd_MF_link\" text=\"20\"/><Cell row=\"3\" col=\"5\" text=\"21\"/><Cell row=\"3\" col=\"6\" style=\"color:#5e95eeff;\" text=\"22\"/><Cell row=\"4\" style=\"color:#f84f4fff;\" text=\"23\"/><Cell row=\"4\" col=\"1\" text=\"24\"/><Cell row=\"4\" col=\"2\" text=\"25\"/><Cell row=\"4\" col=\"3\" text=\"26\"/><Cell row=\"4\" col=\"4\" text=\"27\"/><Cell row=\"4\" col=\"5\" text=\"28\"/><Cell row=\"4\" col=\"6\" style=\"color:#5e95eeff;\" text=\"29\"/><Cell row=\"5\" style=\"color:#f84f4fff;\" text=\"30\"/><Cell row=\"5\" col=\"1\" text=\"31\"/><Cell row=\"5\" col=\"2\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"3\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"4\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"5\" cssclass=\"Cellgrd_MF_noimg\"/><Cell row=\"5\" col=\"6\" style=\"color:#5e95eeff;\" cssclass=\"Cellgrd_MF_noimg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "80", "9", "121", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("2016 . 10");
            obj.set_cssclass("sta_MF_text6");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "277", "53", "2", "186", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_line1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "70", "5", "21", "36", null, null, this);
            obj.set_taborder("3");
            obj.set_text("<");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "195", "4", "21", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_text(">");
            obj.set_cssclass("btn_MF_button1");
            obj.style.set_font("antialias 16 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "61", "0", "151", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "53", "25", "185", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "253", "53", "24", "185", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 279, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[공통]달력");

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
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_BeforeWorkFrameClosing, this);
            this.addEventHandler("onclose", this.fn_WorkFrameClose, this);

        };

        this.loadIncludeScript("TC_COM_2.xfdl");

       
    };
}
)();
