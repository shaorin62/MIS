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
            obj = new FileUpload("FileUpload", "absolute", null, "16", "100", "22", "642", null, this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_scrollbars("none");
            obj.style.set_buttonsize("100");
            obj.style.set_buttonpadding("0 0 0 10");
            obj.style.set_buttontext("싱글파일선택");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload", "absolute", "37", "160", "115", "36", null, null, this);
            obj.set_taborder("1");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "180", "161", "119", "35", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Button00");
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
        this.addIncludeScript("FILEUPLOAD.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FILEUPLOAD.xfdl", function() {
        //include "script::lib_script_common.xjs"

        /***********************
           Single File Upload
        ************************/
        this.fn_FileUpload = function(obj,e) {

        	var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/fileUploadSingle.do";
        	var sFilePath = this.fnc_GetServerDateTiem("DATE");
        		sFilePath = "CAL_PDF/" + sFilePath.substr(0,4);
        	var sFileName = "21108.pdf";

        	this.FileUpload.upload(sFileUrl + "?path=" + sFilePath + "&fname=" + sFileName);

        }

        /***********************
           Single File Upload
        ************************/
        this.fn_FileUploadCallback = function(obj,e) {

        	trace(e.errorcode);
        	trace(e.errormsg);

        	alert("파일 업로드 후 처리");

        }

        this.fn_FileUploadError = function(obj,e) {

        	alert("파일 업로드 오류");
        	trace(e.eventid);
        	trace(e.statuscode);
        	trace(e.errorcode);
        	trace(e.errormsg);

        }

        
        this.fn_FileDownAction = function(obj,e)
        {
        	this.fn_FileDownLoad(this.FileDownload, "XLS_FILE/", "kimsd.xlsx");
        }

        /*************************************
           파일 다운로드 처리 
        **************************************/
        this.fn_FileDownLoad = function(obj,sFilePath,sFileName) {

         	var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/fileDownload.do";

            var sFilePath = this.fnc_GetServerDateTiem("DATE");
        		sFilePath = "CAL_PDF/" + sFilePath.substr(0,4);
            
            var sFileName = "가나다.pdf";
         	
            var sPFileName = "21108.hwp";
         	
         	obj.downloadurl = sFileUrl +"?name=" + sFileName + "&path=" + sFilePath + "&physname=" + sPFileName;
        	var bSuss = obj.download();

        return;

        	// 해당 객체가 있는지 판단해서
        	
        	var objFD = new FileDownload();
        		objFD.init("FileDown00"); //, "absolute", -100, -100, 0, 0, null, null);
        		this.addChild('FileDown', objFD); 
        //		objFD.addEventHandler("onsuccess", this._DownComplet,this);
        		objFD.show(); 

         	var sFileUrl  = application.GBL_HTTPURL + "/upload/fileDownload.jsp";
         	objFD.downloadurl = sFileUrl +"?file=" + sFileName + "&path=" + sFilePath;
        	var bSuss = objFD.download();
        //	alert(bSuss);
        	
        	// Destroy Object  
        	objFD.destroy(); 
        	objFD = null;

        }

        // this._DownComplet = function(obj:FileDownload,  e:nexacro.FileDownloadEventInfo) {
        // 	alert("ksd COmlet");
        // }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload.addEventHandler("onsuccess", this.fn_FileUploadCallback, this);
            this.FileUpload.addEventHandler("onerror", this.fn_FileUploadError, this);
            this.FileUpload.addEventHandler("onitemchanged", this.fn_FileUpload, this);
            this.Button00.addEventHandler("onclick", this.fn_FileDownAction, this);

        };

        this.loadIncludeScript("FILEUPLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
