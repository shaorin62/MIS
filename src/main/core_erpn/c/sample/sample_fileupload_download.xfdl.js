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
                this.set_name("file_up_test");
                this.set_classname("file_up_test");
                this.set_titletext("첨부파일업로드 다운로드");
                this._setFormPosition(0,0,972,632);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"32\"/><Column id=\"fileSize\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"fileType\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_File", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SZDS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00", "absolute", "20", "14", null, "88", "10", null, this);
            obj.set_text("싱글파일 업로드");
            obj.set_taborder("8");
            obj.style.set_border("2 solid #9aaeddff");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "20", "110", null, "168", "10", null, this);
            obj.set_taborder("12");
            obj.style.set_border("2 solid #9aaeddff");
            obj.set_text("멀티파일 업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "34", "125", null, "145", "256", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"CHK\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:FILE_PATH\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:NUM\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", null, "127", "100", "27", "143", null, this);
            obj.set_taborder("5");
            obj.set_multiselect("true");
            obj.getSetter("retry").set("0");
            obj.style.set_buttonsize("100");
            obj.style.set_buttonpadding("0 0 0 10");
            obj.style.set_buttontext("멀티파일선택");
            obj.style.set_align("center middle");
            obj.set_scrollbars("none");
            obj.set_itemcount("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", null, "52", "100", "22", "145", null, this);
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.style.set_buttonsize("100");
            obj.style.set_buttonpadding("0 0 0 10");
            obj.style.set_buttontext("싱글파일선택");
            obj.style.set_align("center middle");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "127", "78", "21", "57", null, this);
            obj.set_taborder("7");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "44", "78", "21", "57", null, this);
            obj.set_taborder("9");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "34", "51", null, "20", "255", null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "720", "4", "116", "40", null, null, this);
            obj.set_taborder("22");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", null, "71", "78", "21", "57", null, this);
            obj.set_taborder("23");
            obj.set_text("download");
            this.addChild(obj.name, obj);

            obj = new Button("btnUploadMulti", "absolute", "20", "320", "125", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_text("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "20", "369", "935", "212", null, null, this);
            obj.set_taborder("25");
            obj.set_binddataset("dsFiles");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_IDXX\"/><Cell col=\"1\" text=\"PFIL_NAME\"/><Cell col=\"2\" text=\"LFIL_NAME\"/><Cell col=\"3\" text=\"FILE_SIZE\"/><Cell col=\"4\" text=\"EXTN_NAME\"/><Cell col=\"5\" text=\"FILE_PATH\"/><Cell col=\"6\" text=\"FILE_SZDS\"/><Cell col=\"7\" text=\"FILE_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_IDXX\"/><Cell col=\"1\" text=\"bind:PFIL_NAME\"/><Cell col=\"2\" text=\"bind:LFIL_NAME\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\"/><Cell col=\"4\" text=\"bind:EXTN_NAME\"/><Cell col=\"5\" text=\"bind:FILE_PATH\"/><Cell col=\"6\" text=\"bind:FILE_SZDS\"/><Cell col=\"7\" text=\"bind:FILE_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 972, 632, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("file_up_test");
            		p.set_titletext("첨부파일업로드 다운로드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_fileupload_download.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_fileupload_download.xfdl", function() {
        //include "script::lib_script_common.xjs";

        var GBL_FILEUPLOADURL   = application.GBL_HTTPURL+"/core/erp/com/comFile_UploadMulti.do";
        var GBL_FILEDOWNLOADURL = application.GBL_HTTPURL+"/core/erp/com/comFile_Download.do";
        var GBL_FILEUPLOADPATH = "nexa_test";//저장 폴더명

        // var GBL_FILEUPLOADURL = "http://localhost:9040/NSCOM_MIS/core/erp/com/fileUpload.do";
        // var GBL_FILEDOWNLOADURL = "http://localhost:9040/NSCOM_MIS/core/erp/com/fileDownload.do";
        // var GBL_FILEUPLOADPATH = "ksd_test";//저장 폴더명

        //파일 선택 시 발생
        this.FileUpload_onitemchanged = function(obj,e)
        {
            //multi 
            if(obj.multiselect)
            {
        		var sFileName;
        		var sFilePath;
        	    var sFullData = e.newvalue;
        		
        		var aFilePath = sFullData.split(",");
        		
        		this.ds_File.clearData();
        		trace("aFilePath.length="+aFilePath.length);
        		for(var i=0; i<aFilePath.length; i++)
        		{
        		
        		    sFilePath = aFilePath[i];
        		    var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		    sFileName = sFilePath.substr(dirExpt);
        		    
        		    this.ds_File.addRow();
        		    
        			this.ds_File.setColumn(i, "FILE_PATH", sFilePath);
        			this.ds_File.setColumn(i, "FILE_NAME", sFileName);
        			this.ds_File.setColumn(i, "NUM", i+1);
        			this.ds_File.setColumn(i, "CHK",1);		    
        		}
           		       
            }else{
        		//single
                this.Edit00.set_value(e.newvalue);
            }	
        	
        	this.FileUpload00.upload(GBL_FILEUPLOADURL+"?path="+GBL_FILEUPLOADPATH);

        }

        //single upload
        this.Button00_onclick = function(obj,e)
        {
        	this.FileUpload00.upload(GBL_FILEUPLOADURL+"?path="+GBL_FILEUPLOADPATH);
        }

        
        //multi upload
        this.Button01_onclick = function(obj,e)
        {
        	this.FileUpload01.upload(GBL_FILEUPLOADURL+"?path="+GBL_FILEUPLOADPATH);
        }

        //single,multi fileupload onsucess
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	alert("업로드 성공"); 
        	trace(e.datasets[0].saveXML());
        	trace(e.errorcode);
        	trace(e.errormsg);
        	trace(e.eventid);
        	
        	//upload information copy
        	this.ds_uploadresult.copyData(e.datasets[0]); 
        			
        }

        //single,multi fileupload onerror
        this.FileUpload00_onerror = function(obj,e)
        {
        	trace(e.eventid);
        	trace(e.statuscode);
        	trace(e.errorcode);
        	trace(e.errormsg);
        }

        //single download
        this.Button05_onclick = function(obj,e)
        {
        	this.fnc_downloadFile(this.ds_uploadresult.getColumn(0,"fileName"), GBL_FILEUPLOADPATH);
        }

        //multi download
        this.Grid00_oncellclick = function(obj,e)
        {
        	this.fnc_downloadFile(this.ds_File.getColumn(e.row,"FILE_NAME").trim(),GBL_FILEUPLOADPATH);
        }

        //download function
        this.fnc_downloadFile = function(sFileName,sPath)
        {
        // 	if(this.IsNull(sFileName)){ 
        // 		alert("No file selected!");
        // 		return;
        // 	}
        // 	if(this.IsNull(sPath)) sPath = "";
        	
        	//this.FileDownload00.downloadurl = GBL_FILEDOWNLOADURL +"?file="+sFileName + "&path=" + sPath;
        	this.FileDownload00.downloadurl = GBL_FILEDOWNLOADURL +"?file="+"aaa.xlsx" + "&path='file'";
        	var bSucc = this.FileDownload00.download();
        	trace("bSucc >> "+bSucc);
        }

        

        
        this.FileUpload_onitemchanged1 = function(obj,e)
        {
            //multi 
            if(obj.multiselect)
            {
        		var sFileName;
        		var sFilePath;
        	    var sFullData = e.newvalue;
        		
        		var aFilePath = sFullData.split(",");
        		
        		this.ds_File.clearData();
        		trace("aFilePath.length="+aFilePath.length);
        		for(var i=0; i<aFilePath.length; i++)
        		{
        		
        		    sFilePath = aFilePath[i];
        		    var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		    sFileName = sFilePath.substr(dirExpt);
        		    
        		    this.ds_File.addRow();
        		    
        			this.ds_File.setColumn(i, "FILE_PATH", sFilePath);
        			this.ds_File.setColumn(i, "FILE_NAME", sFileName);
        			
        			var file = File(sFilePath);
        			
        			this.ds_File.setColumn(i, "FILE_SIZE", file.fileSize);
        			//this.ds_File.setColumn(i, "CHK",1);		    
        		}
           		       
            }else{
        		//single
                this.Edit00.set_value(e.newvalue);
            }	
        	
        	//this.FileUpload01.upload(GBL_FILEUPLOADURL+"?path="+GBL_FILEUPLOADPATH);
        }

        
        /**
         * 화면 중간의 파일업로드 버튼 이벤트
         */
        this.btnUploadMulti_onclick = function(obj,e)
        {
        	this.dsFiles.clearData();
        	// 파일 업로드 팝업 호출
        	this.fnc_CallFileUplod(3, "xls,xlsx", "fn_CallFileUplodCallback");

        }

        // 파일업로드 후처리 콜백함수
        // 공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
        // form 새로 꺼내야 한다.
        this.fn_CallFileUplodCallback = function(retDsObj,form) {

        	//dataset이 없으면 이 함수가 실행되지 않는다.
        	//tmp에 업로드된 파일리스트가 담긴 dataset object 
        	//기존의 데이터를 삭제해야 하는데.
        	var grdObj = form.grdFileGrid;
        	var dsObj = form.dsFiles;
        	
        	trace(retDsObj.saveXML);
        	
        	trace("=====================================");
        	form.dsFiles.copyData(retDsObj);
        	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged1, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.FileDownload00.addEventHandler("onclick", this.FileDownload00_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.btnUploadMulti.addEventHandler("onclick", this.btnUploadMulti_onclick, this);

        };

        this.loadIncludeScript("sample_fileupload_download.xfdl");

       
    };
}
)();
