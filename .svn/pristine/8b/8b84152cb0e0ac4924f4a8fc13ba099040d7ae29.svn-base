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
                this.set_name("comLock");
                this.set_titletext("System Lock");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1270,938);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("imgLock", "absolute", "335", "359", "600", "220", null, null, this);
            obj.style.set_background("URL('image::imgLock.bmp')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPASS_WORK", "absolute", "566", "449", "214", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_password("true");
            obj.set_taborder("0");
            obj.style.set_border("1 solid #aaaaaaff");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1270, 938, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("System Lock");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comLock_ORG.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comLock_ORG.xfdl", function() {
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        this.iPWCheck = false;

        this.Edit0_OnKeyDown = function (obj,e)
        {
        	if (e.keycode != 13) 
        	{
        		return false;
        	}
        	if (this.fnc_GetPasswordEncrypt(this.fnc_Trim(this.edtPASS_WORK.value)) == application.GBL_USERPW) 
        	{
        		this.iPWCheck = true;
        	}
        	this.close();
        }

        this.fn_FormUnloadProcess = function (obj,e)
        {
        	if (this.iPWCheck == false) 
        	{
        		this.fnc_Message("TMM115");
        		return false;
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtPASS_WORK.addEventHandler("onkeydown", this.Edit0_OnKeyDown, this);

        };

        this.loadIncludeScript("comLock_ORG.xfdl");

       
    };
}
)();
