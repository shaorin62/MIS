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
                this.set_name("TMMA0080");
                this.set_titletext("우편번호관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NWPOST", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_NUMB\" size=\"7\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_RDCD\" type=\"STRING\" size=\"20\" prop=\"default\"/><Column id=\"POST_SEQN\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"POST_SIDO\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_SIGU\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_DONG\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_ROAD\" size=\"120\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_NWPOST", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_NWPOST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("500");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"우편번호\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"도로명코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"일련번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"시도\"/><Cell col=\"4\" displaytype=\"text\" text=\"시군구\"/><Cell col=\"5\" displaytype=\"text\" text=\"읍면동\"/><Cell col=\"6\" displaytype=\"text\" text=\"도로명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"mask\" editfilter=\"none\" style=\"align:center;\" text=\"bind:POST_NUMB\" mask=\"###-###\" editlimit=\"6\" editautoselect=\"true\" editlimitbymask=\"none\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"digit\" style=\"align:center middle;\" text=\"bind:POST_RDCD\" mask=\"############\" editlimit=\"12\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"digit\" style=\"align:right;\" text=\"bind:POST_SEQN\" editlimit=\"10\" editimemode=\"native\" editautoselect=\"true\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:POST_SIDO\" editlimit=\"40\" editimemode=\"hangul\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:POST_SIGU\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:POST_DONG\" editlimit=\"20\" editimemode=\"hangul\" editautoselect=\"true\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:POST_ROAD\" editlimit=\"120\" editimemode=\"hangul\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("우편번호관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPOST_ADDR", "absolute", "54", "68", "300", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", "0", "1", "103", "23", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", "103", "1", "94", "23", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>공통관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "16", "68", "33", "22", null, null, this);
            obj.set_text("주소");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("우편번호관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMA0080.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TMMA0080.xfdl", "script::fileupdown.xjs");
        this.registerScript("TMMA0080.xfdl", function() {
        /****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::fileupdown.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0080"; 

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	 this.sUSERAUTH     = "";
        	 this.sFORMCAPTION  = "";
        	 this.sFORMLOCATION = "";
        	 this.sUSERLAVEL    = "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.grdTM_NWPOST.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTM_NWPOST"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_NWPOST=dsTM_NWPOST";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NWPOST.setFocus();
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_NWPOST.addRow();
        	this.fnc_GridSetCellFocus(this.grdTM_NWPOST, "POST_NUMB");

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {

        		this.dsTM_NWPOST.deleteRow(this.dsTM_NWPOST.rowposition);

        	}

        	this.grdTM_NWPOST.setFocus();
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_NWPOST");
        	this.grdTM_NWPOST.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_NWPOST=dsTM_NWPOST:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NWPOST.setFocus();
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.화면 UnLoad時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_NWPOST", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }  

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_NWPOST")) {

        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRPOST_ADDR.value)) < 1) {

        		return this.fnc_SearchCheckPostAction("TMM072", "주소", this.edtSHRPOST_ADDR);

        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_NWPOST.getRowCount() < 1) {

        		this.fnc_Message("TMM007");
        		return false;

        	}

        	var sQuestionText = "우편번호(" + this.fnc_Trim(this.dsTM_NWPOST.getColumn(this.dsTM_NWPOST.rowposition, "POST_NUMB")) + ") ";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_NWPOST")) {

        		this.fnc_Message("TMM003");
        		return false;

        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_NWPOST.getRowCount(); i++) {

        		if (this.dsTM_NWPOST.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_SEQN"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "일련번호", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_SEQN");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_NUMB"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "우편번호", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_NUMB");

        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_RDCD"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "도로명코드", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_RDCD");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_SIDO"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "시도", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_SIDO");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_SIGU"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "시군구", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_SIGU");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_DONG"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "읍면동", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_DONG");

        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NWPOST.getColumn(i, "POST_ROAD"))) < 1) {

        			return this.fnc_CheckPostAction("TMM072", "도로명", this.dsTM_NWPOST, i, this.grdTM_NWPOST, "POST_ROAD");

        		}

        	}

        	return true;

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);						 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 									 
        		sReturnString += " sPOST_ADDR=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPOST_ADDR.value));
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        	
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
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

        	// 조회 후 post process
        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_NWPOST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_NWPOST.getCaseCount("dataset.getRowLevel(currow)==0"));

        	// 저장 처리 후 post process
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리   |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_NUMB"), "edittype", "normal"); //삽입 시 우편번호 수정 가능
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_RDCD"), "edittype", "normal"); //삽입 시 도로명코드 수정 가능
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_SEQN"), "edittype", "normal"); //삽입 시 일련번호 수정 가능
        	
        	} else {
        	
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_NUMB"), "edittype", "none"); //우편번호 수정 불가능 처리
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_RDCD"), "edittype", "none"); //도로명코드 수정 불가능 처리
        		this.grdTM_NWPOST.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_NWPOST, "POST_SEQN"), "edittype", "none"); //일련번호 수정 불가능 처리

        	}

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------------------+
         |  양식파일 업로드 클릭 時   |
         +----------------------------*/
        this.fn_ExcelUpload = function(obj,e) {

        	this.dsTM_NWPOST.clearData();
        	this.fnc_ExcelUpload("dsTM_NWPOST", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        /*---------------------------------------+
         |  양식파일 업로드 클릭 時 후처리함수   |
         +---------------------------------------*/
        this.fn_ExcelSuccess = function(obj,e) {

        	this.objDsImport.clearData();
        	this.objDsImport.set_enableevent(false);
        	this.objDsImport.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	this.objDsImport.set_updatecontrol(false); 

        	for (var i = 0 ; i < this.objDsImport.getRowCount() ; i++ ) {

        		this.objDsImport.setRowType(i, Dataset.ROWTYPE_INSERT);

        	}
        	
        	this.objDsImport.set_updatecontrol(true); 
        	this.objDsImport.set_enableevent(true);

        	this.setWaitCursor(false);
        	this.fnc_Message("TMM125", "엑셀 업로드를 완료하였습니다.");

        }

        /*************************************
           파일 다운로드 처리 
        **************************************/
        this.fn_ExcelFileDown = function(obj,e) {

        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_NWPOST.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpload, this);

        };

        this.loadIncludeScript("TMMA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
