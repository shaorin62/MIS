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
                this.set_name("Temp00017M");
                this.set_titletext("Error page");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "282", "72", "630", "252", null, null, this);
            obj.set_taborder("46");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_ErrorBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "40", "50", "128", "128", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_ErrorImg01");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "219", "43", null, "25", "10", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("서비스 정검 중입니다.");
            obj.set_cssclass("sta_WF_ErrorTitle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "219", "101", null, null, "10", "3", this.Div00);
            obj.set_taborder("5");
            obj.set_text("죄송합니다. 현재 서비스 점검 중입니다.\r\n\r\n보다 빠른 시간 내에 작업을 완료하여 원활한 서비스가 이루어 질 수 \r\n있도록 최선을 다하고 있습니다.\r\n불편하시더라도 잠시만 기다려 주세요.\r\n\r\n이용에 불편을 드려 죄송합니다. ");
            obj.style.set_align("left top");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "282", "379", "630", "252", null, null, this);
            obj.set_taborder("47");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_ErrorBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "40", "50", "128", "128", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_ErrorImg02");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "219", "43", null, "25", "10", null, this.Div01);
            obj.set_taborder("7");
            obj.set_text("해당 페이지를 찾을 수 없습니다.");
            obj.set_cssclass("sta_WF_ErrorTitle");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "219", "101", null, null, "10", "3", this.Div01);
            obj.set_taborder("8");
            obj.set_text("죄송합니다. 요청하신 주소의 페이지를 찾을 수 없습니다.\r\n\r\n찾으시려는 페이지의 주소가 잘못 입력되었거나,\r\n페이지의 주소의 변경 혹은, 삭제로 인해 현재 이용하실 수 없습니다.\r\n입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.\r\n\r\n관리자에게 문의하시기 바랍니다.");
            obj.style.set_align("left top");
            this.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 630, 252, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.set_text("Div00");
            		p.set_cssclass("div_WF_ErrorBg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 630, 252, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_text("Div00");
            		p.set_cssclass("div_WF_ErrorBg");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Error page");

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
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("Temp00017M.xfdl");

       
    };
}
)();
