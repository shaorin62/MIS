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
                this.set_name("TC_NDS_3");
                this.set_scrollbars("none");
                this.set_titletext("[솔루션]MY TODAY");
                this._setFormPosition(0,0,375,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", "375", "260", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_MF_bg1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "9", "19", "152", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "12", "47", "360", "192", null, null, this);
            obj.set_cssclass("grd_MF_notice");
            obj.set_taborder("55");
            obj.set_binddataset("Dataset01");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"255\"/><Column size=\"40\"/><Column size=\"45\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_notice\" text=\"하하하하하하하하하하하하하하하하하하하하\"/><Cell col=\"2\" expandshow=\"show\" expandsize=\"32\" expandimage=\"URL('theme://images/ico_MF_arlam.png')\"/><Cell col=\"3\" text=\"00:00\"/><Cell row=\"1\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"최대 한글 20자까지 보여짐\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" text=\"00:00\"/><Cell row=\"2\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"2\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"20자 이상일 경우 19자까지 노출하고 뒤에 ...\"/><Cell row=\"2\" col=\"2\" expandshow=\"show\" expandsize=\"32\" expandimage=\"URL('theme://images/ico_MF_arlam.png')\"/><Cell row=\"2\" col=\"3\" text=\"00:00\"/><Cell row=\"3\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"3\" col=\"1\" style=\"selectcolor: ;\" cssclass=\"Cellgrd_WF_notice\" text=\"나의일정 - 내용보여짐\"/><Cell row=\"3\" col=\"2\" expandshow=\"show\" expandsize=\"32\" expandimage=\"URL('theme://images/ico_MF_arlam.png')\"/><Cell row=\"3\" col=\"3\" text=\"00:00\"/><Cell row=\"4\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"4\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"나의일정 - 내용보여짐\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\" text=\"00:00\"/><Cell row=\"5\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"5\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"나의일정 - 내용보여짐\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\" text=\"00:00\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "18", "9", "121", "32", null, null, this);
            obj.set_taborder("56");
            obj.set_text("MY TODAY");
            obj.set_cssclass("sta_MF_name");
            obj.style.set_font("antialias 15 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "12", "0", "188", "18", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "295", "15", "67", "24", null, null, this);
            obj.set_taborder("58");
            obj.set_text("일정등록+");
            obj.set_cssclass("btn_MF_button2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 375, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[솔루션]MY TODAY");

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

        this.loadIncludeScript("TC_NDS_3.xfdl");

       
    };
}
)();
