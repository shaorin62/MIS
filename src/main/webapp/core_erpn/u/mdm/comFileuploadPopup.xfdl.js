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
                this.set_name("comFileUploadPopup");
                this.set_classname("FileUpDownload");
                this.set_titletext("File Upload");
                this._setFormPosition(0,0,600,314);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"FILE_EXTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SZDS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PROG\" type=\"INT\" size=\"256\"/><Column id=\"TRAN_SIZE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SZDS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFileList", "absolute", "15", "31", null, null, "15", "44", this);
            obj.set_taborder("20");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:FILE_NAME\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"280\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:FILE_NAME\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:FILE_SZDS\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"expr:(FILE_PROG &lt; 100)?((FILE_PROG &lt; 0)?'normal':'bar'):'normal'\" text=\"bind:FILE_PROG\" expr=\"expr:(FILE_PROG &lt; 100)?((FILE_PROG &lt; 0)?'Error!':FILE_PROG + '%'):'완료'\" tooltiptext=\"Upload Progress\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_dropArea", "absolute", "17", "34", null, null, "17", "46", this);
            obj.set_taborder("32");
            obj.set_text("파일을 마우스로 선택한 후 끌어서 이곳에 놓으세요");
            obj.style.set_border("1 dashed #ff6e6eff");
            obj.style.set_color("#ff6e6eff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "6", "74", "21", "15", null, this);
            obj.set_taborder("35");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnYes", "absolute", null, null, "62", "24", "80", "12", this);
            obj.set_taborder("36");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("37");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "6", "74", "21", "92", null, this);
            obj.set_taborder("38");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", null, "324", "20", null, "14", this);
            obj.set_taborder("39");
            obj.set_text("첨부파일은 <b v='true'><fc v='#ff0000'>30Mbyte</b></fc> 를 넘지 않아야 합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "585", "0", "15", "125", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "15", "125", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_maxSize", "absolute", "291", null, "70", "23", null, "8", this);
            obj.set_taborder("46");
            obj.set_text("30Mbyte");
            obj.style.set_color("#b72025ff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "256", "0", "296", "6", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "32", "270", "120", "14", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "270", "64", "8", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "302", "64", "12", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 314, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.set_titletext("File Upload");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comFileuploadPopup.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comFileuploadPopup.xfdl", function() {
        /***************************************************************************************************
         * # Program : comFileUploadPopup 공통파일 업로드 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		최흥규		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/

        /*--------------------------------------+
         |  공통 Script Include					|
         +--------------------------------------*/
        //include "script::lib_script_common.xjs"

        /*--------------------------------------+
         |  화면 변수 선언부					|
         +--------------------------------------*/
        if(this.parent.maxFileLimit == undefined) {
        	//Quick View 실행 시 설정
        	this.maxFileLimit = "UNLIMIT";
        	this.filterStr = "doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml,tif";
        	this.callbackfunctionname = null;
        	this.bizCategory = "ETC";
        } else {
        	this.maxFileLimit  = this.parent.maxFileLimit;
        	this.filterStr = this.parent.filterStr;
        	this.callbackfunctionname = this.parent.callbackfunctionname;
        	this.bizCategory = this.parent.bizCategory;
        }

        this.maxFileCount = 1;
        this.filter = [];
        this.maxFlag = false;
        this.fileUploadServiceUrl   = application.GBL_HTTPURL + "/core/erp/com/comFile_UploadMulti.do";

        this.extFileUpload;     //file upload object

        //XHR2 진행처리용
        this.tranFiles = {
        	added : [],				// 업로드 파일 정보
        	downloaded : [],		// 다운로드 파일 정보
        	transferFileSize : 0,	// 현재까지 전송된 파일 크기
        	transferFileIndex : 0,	// 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0		// 현재까지 전송된 파일크기 합계
        };

        this.transferType = "all";

        // 30MB 기본 설정
        this.maxFileSizeLimit = 30 * 1024 * 1024;

        
        /*--------------------------------------+
         |  최초 화면 Load時 처리 할 사항	|
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// TODO 기본 업로드 확장자 
        	
        	// 최대 업로드 사이즈
        	this.st_maxSize.set_text(this.bytesToSize(this.maxFileSizeLimit, 3));
        	
        	//파일 확장자 필터스트링
        	if (this.filterStr != "") {
        		this.filter = this.filterStr.split(",");
        	}
        	
        	//갯수제한에 "" 이 들어오는 경우 무제한
        	if (this.maxFileLimit == "UNLIMIT") {
        		this.maxFileCount = 9999;
        	} else {
        		this.maxFileCount = this.maxFileLimit;
        	}
        	
        	// 파일업로드 시 세부 업무 구분을 파라미터로 전달
        	this.fileUploadServiceUrl = this.fileUploadServiceUrl + "?biz=" + this.bizCategory;
        	
        	this.grdFileList.setFocus();
        	
        	this.initFileUploadObj();
        }

        
        /*--------------------------------------+
         |  확장 파일업로드 컴포넌트 초기화	|
         +--------------------------------------*/
        this.initFileUploadObj = function() {
        	
        	// 확장 파일 업로드 컴포넌트 생성 및 초기화
        	var name = Eco.getUniqueId("extUpload_");
        	var extUpload = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUpload.name, extUpload);
        	this.extFileUpload = extUpload;
        	
        	// 업로드 제한파일이 1개면 다중선택 안됨
        	if (this.maxFileLimit == "1") {
        		extUpload.set_multiselect(false);
        	} else {
        		extUpload.set_multiselect(true);
        	}
        	
        	// Drag&Drop 컴포넌트 이벤트 처리
        	extUpload.setResponseZone(this, this.st_dropArea, this.grdFileList);	
        	
        	// 상황별 이벤트 핸들러 등록
        	extUpload.addEventHandler("onchange", this.extFileUpload_onchange, this);
        	extUpload.addEventHandler("onreadystatechange", this.extFileUpload_onreadystatechange, this);
        	extUpload.addEventHandler("onprogress", this.extFileUpload_onprogress, this);
        	extUpload.addEventHandler("onsuccess", this.extFileUpload_onsuccess, this);
        	extUpload.addEventHandler("onerror", this.extFileUpload_onerror, this);
        	
        	// 초기화 완료!
        	extUpload.show();
        	
        	this.grdFileList.setFormat("format1");
        	
        	//Drag and Drop 미지원 브라우저 확인.
        	if(extUpload.support.FileAPI == false) {
        		this.st_dropArea.set_visible(false);
        	}
        	
        	//XHR2와 FileAPI 지원하지 않을 경우 그리드 format 변경. ex) file 전송량 표시용 progress bar
        	if (!extUpload.support.XHR2) {
        		this.grdFileList.setFormat("default");
        	}	
        	
        }

        
        /*--------------------------------------+
         |  Form 키보드 이벤트 처리			|
         +--------------------------------------*/
        this.comFileUploadPopup_onkeydown = function(obj,e) {
        	if (e.keycode == 27) {
        		this.btnCancel_onclick();
        	}
        }

        
        /*---------------------------------------+
         |  파일이 업로드 가능한 확장자 타입인가? |
         +---------------------------------------*/
        this.isAllowFileType = function(filename) {

        	var ext = filename.toLowerCase().substr(filename.lastIndexOf(".") + 1);

        	if ((ext == undefined) || (ext.length == 0)) {
        		return false;
        	}	

        	var isAllowType = false;

        	for (var idx = 0; idx < this.filter.length; idx++) {
        		//소문자로 변환 후 비교
        		if (ext == this.filter[idx].toLowerCase()) {
        			isAllowType = true;
        			break;
        		}
        	}
        	return isAllowType;
        }

        /*--------------------------------------+
         |  파일추가 버튼 클릭 이벤트 처리	|
         +--------------------------------------*/
        this.btnAdd_onclick = function(obj,e) {
        	
        	var fileCnt = this.dsFileList.getRowCount();
        	
        	if (this.maxFileCount <= fileCnt) {
        		var msg = "첨부파일은 최대  " + this.maxFileCount + "개를 초과할 수 없습니다.";
        		this.fnc_Alert(msg);
        		return;
        	}
        	
        	this.extFileUpload.addFiles();
        		
        	if (this.st_dropArea.visible) {
        		this.st_dropArea.set_visible(false);
        	}
        	
        }

        
        /*--------------------------------------+
         |  파일삭제 버튼 클릭 이벤트 처리	|
         +--------------------------------------*/
        this.btnDel_onclick = function(obj,e) {
        	
        	if (this.dsFileList.getRowCount() == 0) {
        		return;
        	}
        	
        	var row = this.dsFileList.rowposition;
        	
        	if (this.checkDeleteFile(row)) {
        		var fileId = this.dsFileList.getColumn(row, "FILE_IDXX");
        		this.extFileUpload.removeFile(fileId);
        		this.dsFileList.deleteRow(row);
        		
        		if (this.dsFileList.getRowCount() == 0) {
        			this.st_dropArea.set_visible(true);
        		}
        	}
        	
        }

        
        /*--------------------------------------+
         |  파일 삭제여부 확인				|
         +--------------------------------------*/
        this.checkDeleteFile = function(row) {
        	var msg = "파일명 : " + this.dsFileList.getColumn(row, "FILE_NAME");
        	return this.fnc_Message("TMM002", msg);
        }

        
        /*--------------------------------------+
         |  확인 버튼 클릭 이벤트 처리		|
         +--------------------------------------*/
        this.btnYes_onclick = function(obj,e) {
        	
        	// 선택된 파일이 없을 경우..
        	if (this.dsFileList.getRowCount() == 0) {
        		this.fnc_Alert("업로드 할 파일을 선택하세요!");
        		return;
        	} else {
        		this.uploadFiles();	// 파일전송
        	}
        	
        }

        
        /*--------------------------------------+
         |  취소 버튼 클릭 이벤트 처리		|
         +--------------------------------------*/
        this.btnCancel_onclick = function(obj,e) {
        	// 추가 기능 없이 팝업 종료
        	this.fnc_PopupClose("");
        }

        
        /*--------------------------------------+
         |  파일다이얼로그에서 파일 선택 시	|
         +--------------------------------------*/
        this.extFileUpload_onchange = function(obj,e) {
        	
        	var dsObj = this.dsFileList;
        	var files = e.files;
        	var fileCnt = files.length;
        	var isSupport = (this.extFileUpload.support.XHR2 && this.extFileUpload.support.FileAPI);
        	var file = "";
        	
        	var fileId;
        	var fileName;
        	var fileSize;
        	var fileType;
        	var fileExt;
        	var row;
        	var msg = "";
        	var choosedCnt;
        	
        	for (var idx = 0; idx < fileCnt; idx++) {
        		
        		// 파일 정보
        		file = files[idx];
        		fileId = file.id;		// 파일ID
        		fileName = file.name;	// 파일명
                fileSize = file.size;	// 크기
                fileType = file.type;	// 파일형식(Mime Type);
        		fileExt = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : "";	// 확장자
        		
        		// 업로드 한 파일의 갯수가 업로드 제한 갯수를 초과하지 않았나?
        		choosedCnt = dsObj.getRowCount();
        		
        		if (this.maxFileCount <= choosedCnt) {
        			msg = "첨부파일은 최대  " + this.maxFileCount + "개를 초과할 수 없습니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			break;
        		}
        		
        		// 이미 추가되어 있는 파일인가?
        		var findRow = dsObj.findRow("FILE_NAME", fileName);
        		if (findRow > -1) {
        			var filesz = dsObj.getColumn(findRow, "FILE_SIZE");
        			// 파일 사이즈도 확인해보자
        			if (fileSize == filesz) {
        				msg = "파일명 : " + fileName + ", 이미 동일한 이름,크기로 등록된 파일이 있습니다.";
        				this.fnc_Alert(msg);
        				this.extFileUpload.removeFile(fileId);
        				continue;
        			}
        		}
        		
        		// 파일이 업로드 가능한 확장자인가?
        		/*
        		if (!this.isAllowFileType(fileName)) {
        			msg = "파일명 : " + fileName + ", 첨부할 수 없는 파일 형식입니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			continue;
        		}
        		*/
        		
        		//업로드할 파일의 크기가.. 제한용량을 넘는가?
        		if (fileSize > this.maxFileSizeLimit) {
        			msg = "파일명 : " + fileName + ", 크기는 " + this.bytesToSize(this.maxFileSizeLimit, 3) + "를 초과할 수 없습니다.";
        			this.fnc_Alert(msg);
        			this.extFileUpload.removeFile(fileId);
        			continue;
        		}
        		
        		// 파일정보 추가
        		row = dsObj.addRow();
        		dsObj.setColumn(row, "FILE_IDXX", fileId);
        		dsObj.setColumn(row, "FILE_NAME", fileName);
        		dsObj.setColumn(row, "FILE_EXTN", fileExt);
        		dsObj.setColumn(row, "FILE_TYPE", fileType);
        		dsObj.setColumn(row, "FILE_SZDS", this.bytesToSize(fileSize, 3));
        		dsObj.setColumn(row, "FILE_SIZE", fileSize);
        		dsObj.setColumn(row, "FILE_PROG", 0);
        		dsObj.set_rowposition(row);
        				
        	}
        	
        }

        
        /**
         * byte를 size로 변환처리한다.
         * @param {number} filesize file size
         * @param {string} type 표시형태
         * @return {string} file size
         */
        this.bytesToSize = function(filesize,type)
        {
        	if (Eco.isEmpty(filesize)) return;
        	
            var size = filesize  + " bytes",
                multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                idx = 0, 
                approx = 0;
        	
            for (idx = 0, approx = filesize / 1024; approx > 1; approx /= 1024, idx++) 
            {
                if (type == 1)
                {
                    size = approx.toFixed(2) + multiples[idx] + " (" + filesize + " bytes)";
                }
                else if (type == 2)
                {
                    size = approx.toFixed(2);
                }
                else
                {
                    size = approx.toFixed(2) + multiples[idx];
                }
            }
          
            return size;
        }

        /**
         * size를 byte로 변환처리한다.
         * @param {number} fileSize file size
         * @return {number} file size
         */
        this.sizeToByte = function(fileSize) 
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;
        	
        	if (unit == "mb") 
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb") 
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb") 
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "") 
        	{
        		return size;
        	}
        	else 
        	{
        		return fileSize;
        	}
        }

        
        /**
         * 추가한 첨부파일을 서버로 업로드 한다.
         */
        this.uploadFiles = function() {
        	
        	var extUp = this.extFileUpload;
        	var fileLength = extUp.getAddedFileLength();
        	
        	if (fileLength > 0) {
        		
        		extUp.upload(this.fileUploadServiceUrl, "dsFiles=dsFiles", "", this.transferType, 0);
        		
        	}	// end of if (fileLength > 0) 
        	
        }

        
        /*--------------------------------------+
         |  확장업로드 컴포넌트의 상태변경 이벤트 핸들러|
         +--------------------------------------*/
        this.extFileUpload_onreadystatechange = function(obj,e) {

        	if (e.readyState == 4) {
        		
        		if (e.status != 200) {
        			var ds = this.dsFileList;
        			var count = ds.rowcount;
        			for(var row = 0; row < count; row++)
        			{
        				ds.setColumn(row, "FILE_PROG", -1);
        			}
        		}
        		
        	}

        }

        
        /*--------------------------------------+
         |  서버에 파일 업로드 진행 이벤트 핸들러		|
         |  이 기능은 HTML5 지원 가능 브라우저에서만 동작합니다.
         |  Runtime 환경에서는 작동하지 않습니다.
         +--------------------------------------*/
        this.extFileUpload_onprogress = function(obj,e) {

        	var files = obj.getAddedFile();
        	var len = files.length;
        	
        	// 진행률 계산이 가능하다면...
        	if (e.lengthComputable && (len > 0)) {
        		
        		var fileId = e.fileId;
        		var currSize;
        		var totalSize;
        		var dsObj = this.dsFileList;
        		
        		if (fileId) {
        			
        			currSize = e.loaded;
        			totalSize = e.total;
        			
        			var row = dsObj.findRow("FILE_NAME", fileId);
        			var rate = Math.floor((currSize / totalSize) * 100);
        			dsObj.setColumn(row, "FILE_PROG", rate);
        			return;
        		
        		}
        		
        		var sendFiles = this.tranFiles;
        		sendFiles.transferFileSize = e.loaded;
        		
        		var currFileId;
        		var dsRow;
        		var currentFile;
        		var currFileNm;
        		var transSize;
        		
        		while ((sendFiles.transferFileSize > sendFiles.preFileSizeSum) && (sendFiles.transferFileIndex < len)) {
        			
        			currFileId = files[sendFiles.transferFileIndex].id;
        			dsRow = dsObj.findRow("FILE_IDXX", currFileId);
        			
        			currentFile = files[sendFiles.transferFileIndex].file;
        			currSize = currentFile.size;
        			currFileNm = currentFile.name;
        			
        			dsObj.setColumn(dsRow, "FILE_SIZE", currSize);
        			
        			transSize = sendFiles.transferFileSize - sendFiles.preFileSizeSum;
        			var rate = Math.floor((transSize / currSize) * 100);
        			
        			if (rate < 100) {	
        				dsObj.setColumn(dsRow, "FILE_PROG", rate);
        				break;
        			}
        			
        			if (rate >= 100) {
        				
        				transSize = currSize;
        				rate = 100;
        				
        				dsObj.setColumn(dsRow, "FILE_PROG", rate);
        				
        				// 다음 순서로 전송할 파일 정보 설정
        				sendFiles.preFileSizeSum += currSize;	// 이전 파일 사이즈 합계
        				sendFiles.transferFileIndex++;
        				
        				if (sendFiles.transferFileIndex >= len)
        				{
        					break;
        				}
        			}
        			
        		}	// end of while...
        		
        		
        	}

        }

        
        /*--------------------------------------+
         |  서버에 파일 전송이 완료된 경우 이벤트 처리	|
         +--------------------------------------*/
        this.extFileUpload_onsuccess = function(obj,e) {
        	
        	var ErrorCode = e.errorcode;
        	var ErrorMsg = e.errormsg;
        	
        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMsg);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMsg);
        		}
        		
        		return;
        	}
        	
        	
        	
        	this.dsFiles.applyChange();
        	
        	if (e.datasets) {
        		
        		var dsRets = e.datasets[0];
        		this.dsFiles.copyData(dsRets);
        		this.dsFiles.set_name("dsFiles");
        		
        		var retObj = {};
        		retObj.callbackFunctionName = this.callbackfunctionname;
        		retObj.dsFiles = e.datasets[0];
        		this.fnc_Alert(this.dsFiles.getRowCount() + "개의 파일 업로드가 완료되었습니다");
        		this.fnc_PopupClose(retObj);
        		
        	}
        	
        }

        
        /*--------------------------------------+
         |  서버에 파일 전송 중 오류 발생 시 이벤트 핸들러	|
         +--------------------------------------*/
        this.extFileUpload_onerror = function(obj,e) {
        	
        	this.fnc_Alert("파일 전송 중 오류가 발생하였습니다.");
        	trace("에러발생 \extUpload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting , this);
            this.addEventHandler("onkeydown", this.comFileUploadPopup_onkeydown, this);
            this.grdFileList.addEventHandler("oncellclick", this.grdFileList_oncellclick, this);
            this.btnDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.btnYes.addEventHandler("onclick", this.btnYes_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);
            this.btnAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.Static0.addEventHandler("onclick", this.Static0_onclick, this);

        };

        this.loadIncludeScript("comFileuploadPopup.xfdl");

       
    };
}
)();
