(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("web_test");
                this.set_classname("web_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,694,456);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "38", "72", "628", "313", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_seturl", "absolute", "40", "14", "120", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("set_url");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetVal", "absolute", "192", "13", "120", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("set_value");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 694, 456, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("web_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("web_test.xfdl", function() {

        
        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	trace("WebBrowser00_onloadcompleted");
        	//this.WebBrowser00.callMethod();
        	var v1 = this.WebBrowser00.getProperty("document");
        	var v2 = this.WebBrowser00.getProperty( "document").getProperty("body");
        	var v3 = this.WebBrowser00.getProperty( "document").getProperty("body").getProperty("innerHTML");
        	//v2.setProperty( "innerHTML", "aaaaaaaaaaaaaaaaaa" );
        	//v4.setProperty( "value", "1234" );
        	//this.WebBrowser00.setProperty( "document", v1 );	
        	trace(v3);
        	var strVal1 = v3;
        	strVal1 += "<br><input type='text' id='newID' value='1q2w3e4r5t'>";

        	
        	v2.setProperty("innerHTML", strVal1);
        }

        this.btn_seturl_onclick = function(obj,e)
        {
        	//this.WebBrowser00.set_url("about:blank");
        	this.WebBrowser00.set_url("http://localhost:9180/CoreERP_eGOV/navi.html");
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        // 	trace("WebBrowser00_onusernotify");
        // 	//this.WebBrowser00.callMethod();
        // 	var v1 = this.WebBrowser00.getProperty("document");
        // 	var v2 = this.WebBrowser00.getProperty( "document").getProperty("body");
        // 	var v3 = this.WebBrowser00.getProperty( "document").getProperty("body").getProperty("innerHTML");
        // 	v2.setProperty( "innerHTML", "aaaaaaaaaaaaaaaaaa" );
        // 	v1.setProperty( "body", v2 );
        // 	this.WebBrowser00.setProperty( "document", v1 );		
        }

        this.btnSetVal_onclick = function(obj,e)
        {
        	var doc = this.WebBrowser00.getProperty("document");
        	var htmlArea = doc.callMethod("getElementById" ,"text1");

        	htmlArea.setProperty("value", "이값은 새로 입력한 값...");
        	
        	var htmlbtn = doc.callMethod("getElementById" ,"popup1");
        	htmlbtn.callMethod("click");
        }

        
        /*

        this.Button00_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	var _doc = this.WebBrowser00.getProperty("document");
        	var _body = _doc.getProperty("body");
        	var _style = _body.getProperty("style");
        	
        // 	for(a in _style._handle )
        // 	{
        // 		trace(a + " >>>> : " + _style._handle  [a])
        // 	}
        	_style.setProperty("overflowY", "hidden") ;
        	_style.setProperty("overflowX", "hidden") ;
        	
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.btn_seturl.addEventHandler("onclick", this.btn_seturl_onclick, this);
            this.btnSetVal.addEventHandler("onclick", this.btnSetVal_onclick, this);

        };

        this.loadIncludeScript("web_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
