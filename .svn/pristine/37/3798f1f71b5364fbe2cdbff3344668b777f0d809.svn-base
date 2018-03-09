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
                this.set_name("FILEUPLOAD");
                this.set_classname("FILEUPLOAD");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,762,483);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new FileUpload("FileUpload", "absolute", "42", "38", "70", "23", null, null, this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_scrollbars("none");
            obj.style.set_itemheight("23");
            obj.style.set_buttonsize("70");
            obj.style.set_buttonpadding("0 0 0 0");
            obj.style.set_buttontext("파일업로드");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "126", "37", "103", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styCommBtnXlsFormDown");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "626", "409", "93", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("파일업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 762, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FILEUPLOAD");
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
        this.addIncludeScript("FILEUPLOAD_new.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FILEUPLOAD_new.xfdl", function() {
        //include "script::lib_script_common.xjs"

        
        /************************************
           Single File Upload Post Process
        *************************************/
        this.fn_FileUploadCallback = function(obj,e) {

        	trace(e.errorcode);
        	trace(e.errormsg);
        	alert("파일 업로드 후 처리");

        }

        /************************************
           Single File Upload Error Process
        *************************************/
        this.fn_FileUploadError = function(obj,e) {

        	alert("파일 업로드 오류");
        	trace(e.eventid);
        	trace(e.statuscode);
        	trace(e.errorcode);
        	trace(e.errormsg);

        }

        /*************************************
           파일 다운로드 처리 
        **************************************/
        this.fn_FileDownload = function(obj,e) {

        	var sPath    = "CAL_PDF/";       //파일 경로
            var sLogFile = "다운로드테스트 (홍길동).pdf";  //파일 논리명
            var sPhyFile = "214002__201410231414024875945.pdf";       //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        /*************************************
           File Runtime 처리 
        **************************************/
        this.Button01_onclick = function(obj,e) {

        // 	var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/fileUploadSingle.do";
        // 	var sPath = this.fnc_GetServerDateTiem("DATE");
        // 		sPath = "CAL_PDF/" + sPath.substr(0,4);
        // 	var sPhyFile = "21108.pdf";

        	//파일다이얼로그 띄우기 (fileUpload컴포넌트 코어 API호출-정상작동 test필요)
        	nexacro._findclick(this.FileUpload._unique_id, "upfile0", this.FileUpload._items[0], true);
        	//this.FileUpload.upload(sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile);

        }

        /***********************
           Single File Upload
        ************************/
        this.fn_FileUpload = function(obj,e) {

        return false;

        	var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/fileUploadSingle.do";
        	var sPath = this.fnc_GetServerDateTiem("DATE");
        		sPath = "CAL_PDF/" + sPath.substr(0,4);
        	var sPhyFile = "21108.pdf";

        	this.FileUpload.upload(sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile);
        	this.FileUpload.deleteItem(0);     //업로드 후 업로드 항목 초기화
        	this.FileUpload.appendItem();

        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload.addEventHandler("onsuccess", this.fn_FileUploadCallback, this);
            this.FileUpload.addEventHandler("onerror", this.fn_FileUploadError, this);
            this.FileUpload.addEventHandler("onitemchanged", this.fn_FileUpload, this);
            this.Button00.addEventHandler("onclick", this.fn_FileDownload, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("FILEUPLOAD_new.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
