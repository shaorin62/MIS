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
                this.set_name("TC_COM_3");
                this.set_scrollbars("none");
                this.set_titletext("[기획]공지사항");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"310\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_notice\" text=\"[아이폰/패드 사용자][iOS10]업무용APP 패치 완료 안내\"/><Cell row=\"1\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"농심그룹 정보보안 사고예방 및 대응방안 공지\"/><Cell row=\"2\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"2\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"3\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"3\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"4\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"4\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"농심기획 공지사항 제목영역입니다.\"/><Cell row=\"5\" style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;selectbackground:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell row=\"5\" col=\"1\" cssclass=\"Cellgrd_WF_notice\" text=\"농심기획 공지사항 제목영역입니다.\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "18", "9", "105", "32", null, null, this);
            obj.set_taborder("56");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_name");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "12", "0", "188", "18", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "308", "15", "54", "24", null, null, this);
            obj.set_taborder("58");
            obj.set_text("더보기+");
            obj.set_cssclass("btn_MF_button2");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 375, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]공지사항");

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

        this.loadIncludeScript("TC_COM_3.xfdl");

       
    };
}
)();
