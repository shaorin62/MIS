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
                this.set_name("Photochange_P");
                this.set_classname("passwordChange");
                this.set_titletext("사진변경");
                this._setFormPosition(0,0,365,242);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "350", "0", "15", "135", null, null, this);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "108", "230", "64", "12", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "108", "198", "64", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "15", "15", "335", "183", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", "205", "206", "80", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_text("사진삭제");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "122", "206", "80", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("사진저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L02", "absolute", "35", "24", "101", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("사진변경");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "288", "206", "62", "24", null, null, this);
            obj.set_taborder("17");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "103", "24", "215", "21", null, null, this);
            obj.set_taborder("18");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.style.set_buttonsize("38");
            obj.style.set_buttontext("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("ACCT_NAME_L00", "absolute", "35", "59", "101", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("미리보기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "143", "64", "120", "120", null, null, this);
            obj.set_taborder("20");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            obj.set_cssclass("img_MF_photo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 365, 242, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("사진변경");

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
            this.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.btnSubmit.addEventHandler("onclick", this.fn_changePassword, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.FileUpload.addEventHandler("onsuccess", this.fn_FileUploadCallback, this);
            this.FileUpload.addEventHandler("onerror", this.fn_FileUploadError, this);
            this.FileUpload.addEventHandler("onfindclick", this.FileUpload_onfindclick, this);
            this.FileUpload.addEventHandler("onitemchanged", this.fn_FileUpload, this);

        };

        this.loadIncludeScript("Photochange_P.xfdl");

       
    };
}
)();
