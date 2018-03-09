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
                this.set_name("TC_PHOTOCHANGE");
                this.set_classname("passwordChange");
                this.set_titletext("사진변경");
                this._setFormPosition(0,0,365,242);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUploadFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"string\" size=\"32\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\"/><Column id=\"PFIL_NAME\" type=\"string\" size=\"32\"/><Column id=\"LFIL_NAME\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"EXTN_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "350", "0", "15", "135", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "108", "230", "64", "12", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "108", "198", "64", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "15", "15", "335", "183", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeletePhoto", "absolute", "205", "206", "80", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("사진삭제");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSavePhoto", "absolute", "122", "206", "80", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_text("사진저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("staPhoto", "absolute", "35", "24", "101", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("사진변경");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "288", "206", "62", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("staPreview", "absolute", "35", "59", "101", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("미리보기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPreview", "absolute", "143", "64", "120", "120", null, null, this);
            obj.set_taborder("20");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            obj.set_cssclass("img_MF_photo");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btnChooseFile", "absolute", "280", "24", "36", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFILE_NAME", "absolute", "103", "24", "176", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_usecontextmenu("false");
            obj.set_readonly("true");
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
        this.addIncludeScript("photochange_common.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("photochange_common.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("photochange_common.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	topFrame 메인 상단 프레임
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.14		jsh			Initial Created.
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

        
        /**
         * 공통 스크립트 Include
         */
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_dashboard.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "ComMain"; //해당 Form에서 사용 할 Package 명

        // 업로드하려는 이미지의 타입(PROFILE : 프로필 이미지, MYPHOTO : 나의사진
        this.sIMAGE_TYPE = this.getOwnerFrame()["sTYPE"];

        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function(obj,e)
        {
        }

        
        /**
         * 사진 선택 버튼 클릭 시
         */
        this.btnChooseFile_onclick = function(obj,e)
        {
        	this.fnc_CallFileUplod(1, "jpg,jpeg,gif,tif,tiff,png,bmp", "fn_CallFileUplodCallback");
        }

        
        /**
         * 사진 업로드 처리 콜백
         */
        this.fn_CallFileUplodCallback = function(robjds,form) {
        	
        	var uploadDsObj = robjds;
        	if (uploadDsObj.rowcount > 0) {
        	
        		var filePath = uploadDsObj.getColumn(0, "FILE_PATH");	// 파일 저장경로
        		var fileName = uploadDsObj.getColumn(0, "LFIL_NAME");	// 논리파일명
        		var actualFileName = uploadDsObj.getColumn(0, "PFIL_NAME");	// 실제 저장된 파일명
        		
        		form.edtFILE_NAME.set_readonly(false);
        		form.edtFILE_NAME.set_value(fileName);
        		form.edtFILE_NAME.set_readonly(true);
        		
        		form.dsUploadFile.copyData(uploadDsObj);
        		
        		form.fn_ImagePreview(filePath, actualFileName);
        		
        	}
        	
        }

        
        /**
         * 사진 미리보기 URL 호출
         */
        this.fn_ImagePreview = function(path,fileName) {
        	
        	var url = application.GBL_HTTPURL;
        	url = url.concat("/core/erp/com/ComImageView.do?");
        	url = url.concat("path=").concat(path);
        	url = url.concat("&name=").concat(fileName);
        	url = url.concat("&t=").concat((new Date()).getTime() + "");

        	this.imgPreview.set_image(url);
        	
        }

        
        /**
         * 사진저장 버튼 클릭 시
         */
        this.btnSavePhoto_onclick = function(obj,e)
        {
        	if (this.dsUploadFile.rowcount > 0) {
        		if (this.fnc_Message("TMM201")) {
        			var sMethodName = "SaveProfileImage";
        			var sInDataSet = "dsUPLOAD_FILE=dsUploadFile";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			sArgument += " SAVE_MODE="	+ this.fnc_Quote("SAVE");

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}
        }

        
        /**
         * 사진삭제 버튼 클릭 시
         */
        this.btnDeletePhoto_onclick = function(obj,e)
        {
        	// 삭제여부 확인
        	if (this.fnc_Message("TMM202")) {
        		var sMethodName = "SaveProfileImage";
        		var sInDataSet = "";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		sArgument += " SAVE_MODE="	+ this.fnc_Quote("DEL");

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        
        /**
         * 팝업 하단의 닫기버튼 클릭 시
         */
        this.fn_Cancel = function(obj,e)
        {
        	this.fnc_PopupClose("");
        }

        
        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SaveProfileImage") {
        		
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		sReturnString += " USER_IDXX="	+ this.fnc_Quote(application.GBL_USERID);
        		sReturnString += " SAVE_TYPE="	+ this.fnc_Quote(this.sIMAGE_TYPE);
        	}

        	return sReturnString;
        }

        
        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        
        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == 'SaveProfileImage') {
        		this.fnc_PopupClose("SAVE");
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnDeletePhoto.addEventHandler("onclick", this.btnDeletePhoto_onclick, this);
            this.btnSavePhoto.addEventHandler("onclick", this.btnSavePhoto_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btnChooseFile.addEventHandler("onclick", this.btnChooseFile_onclick, this);

        };

        this.loadIncludeScript("photochange_common.xfdl");

       
    };
}
)();
