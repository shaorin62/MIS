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
                this.set_name("FSMB0020P01");
                this.set_titletext("폐기엑셀일괄등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,732);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASCHXL_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_ASCHXM", "absolute", "15", "33", null, null, "15", "44", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASCHXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("class").set("styGrid01");
            obj.set_taborder("-1");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"102\"/><Column size=\"116\"/><Column size=\"257\"/><Column size=\"94\"/><Column size=\"234\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"폐기일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"3\" displaytype=\"text\" text=\"부서코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length==0?&quot;&quot;:&quot;####-####-####&quot;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", null, "8", "205", "21", "15", null, this);
            obj.set_taborder("2");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", "18", "0", "98", "21", null, null, this.Div0);
            obj.set_taborder("2");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", "119", "0", "86", "21", null, null, this.Div0);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.Div0.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "579", "11", "14", "18", null, null, this);
            obj.set_taborder("4");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.set_text("F");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "835", "6", "15", "461", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "758", "688", "64", "8", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "758", "720", "64", "12", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "700", "0", "64", "8", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "27", "5", "307", "22", null, null, this);
            obj.set_taborder("11");
            obj.set_text("개발시 ==>즐겨찾기 버튼 없애주세요");
            obj.style.set_background("crimson");
            obj.style.set_color("#ffffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_Bookmark");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 205, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 850, 732, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("폐기엑셀일괄등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FSMB0020P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0020P01.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        //include "import::lib_XConvert.xjs";
        /***************************************************************************************************
        *   Form Common Script                                                                             *
        *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
        *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
        *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
        *                                                                                                  *
        *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
        *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
        123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
        ***************************************************************************************************/

        /************************
        *  공통 Script Include  *
        ************************/
        //include "script::lib_script_common.xjs";
        //include "script::fileupdown.xjs"; 

        /*********************
        *  화면 변수 선언부  *
        *********************/
        this.sBUTTONLIST   = "TFFFFFFF";                           //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄) 
        this.sPACKAGENAME  = "FSMB0020P01";          //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }	
         

        /**************************************************************************************************
        *                                         공통 Event 처리 부분                                    *
        ***************************************************************************************************/
        /*-----------------------------------+
        |  01.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        }

        /*----------------------------------+
        |  02.화면 종료(닫기) 버튼 클릭 時  |
        ------------------------------------*/
        this.fn_End = function (obj) {
        	this.fnc_PopupClose("");
        }

        /*-----------------------+
        |  03.조회 버튼 클릭 時  |
        +------------------------*/
        this.fn_Search = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
        |  04.입력(신규) 버튼 클릭 時  |
        +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
        |  05.삭제(제거) 버튼 클릭 時  |
        +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
        |  06.취소 버튼 클릭 時  |
        -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*-----------------------+
        |  07.저장 버튼 클릭 時  |
        -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*-----------------------+
        |  08.엑셀 버튼 클릭 時  |
        -------------------------*/
        this.fn_ToExcel = function (obj) {
        	//기능없음
        }

        /*-----------------------+
        |  09.인쇄 버튼 클릭 時  |
        +------------------------*/
        this.fn_Print = function (obj) {
        	//기능 없음
        }

        /*-----------------------------------+
        |  10.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXL",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        
        /*-----------------------------------+
        |  11.단축키 처리(Form KeyDown)      |
        +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);	
        }

        /*-----------------------------------+
        |  12.Text Box가 Focus를 받을 때     |
        +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
        *                                      공통 Function 처리 부분                                    *
        ***************************************************************************************************/
        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	//저장 Argument 생성
        	if (sKind=="SAVE00") {
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
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

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM125", "엑셀자료 일괄 등록을 완료하였습니다!");
        		this.fnc_PopupClose("");
        	}

        }

        /**************************************************************************************************
        *                                  사용자 정의  Event 처리 부분                                   *
        ***************************************************************************************************/

        /*-----------------------------+
        |  양식파일 다운로드 클릭 時   |
        +------------------------------*/	
        this.fn_ExcelFileDown = function (obj,e) {
        	
        	this.fnc_FileDownLoad("", "", "", "FSMB0020");
        	
        }

        /*---------------------------+
        |  양식파일 업로드 클릭 時   |
        +----------------------------*/	
        this.fn_ExcelUpLoad = function (obj,e) {

        	this.fnc_DatasetClear("dsFS_ASCHXL_TEMP");
        	this.fnc_ExcelUpload("dsFS_ASCHXL_TEMP", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	this.dsFS_ASCHXL_TEMP.set_enableevent(false);
        	this.dsFS_ASCHXL_TEMP.appendData(this.objDsImportTemp);
        	this.objDsImportTemp.clear();
        	this.dsFS_ASCHXL_TEMP.set_enableevent(true);
        	
        	// TEMP DataSet에서 복사.
        	this.dsFS_ASCHXL.copyData(this.dsFS_ASCHXL_TEMP);
        	
        	// 복사해온 Row Status는 Insert Type.
        	this.dsFS_ASCHXL.set_updatecontrol(false);
        	for (var i = 0; i < this.dsFS_ASCHXL.getRowCount(); i++) {
        		this.dsFS_ASCHXL.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        	}
        	this.dsFS_ASCHXL.set_updatecontrol(true);
        	this.dsFS_ASCHXL.set_rowposition(1);
        	this.grdFS_ASCHXM.setFocus();

        
        	/* 엑셀 업로드 체크처리 후 저장 */
        	if (!this.fn_ExcelUploadCheck()) return;
        	var sMethodName = "SAVE00";                       
        	var sInDataSet  = "dsFS_ASCHXL=dsFS_ASCHXL";      
        	var sOutDataSet = "";                             
        	var sArgument   = this.fn_CreateArgument(this.sMethodName); 
            
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	this.grdFS_ASCHXM.setFocus();                          

        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASCHXL")) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	if (this.dsFS_ASCHXL.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i=0; i < this.dsFS_ASCHXL.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASCHXL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                 
        		if (!this.fnc_IsDate(this.dsFS_ASCHXL.getColumn(i, "CHNG_DATE"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 폐기일자가 잘못되었습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXL.getColumn(i,"ASST_NUMB")))< 1 ) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 자산번호가 없습니다.");   			
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXL.getColumn(i,"DEPT_CODE")))< 1 ) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 부서코드가 없습니다.");   			
        			return false;
        		}

        	}

        	return true;

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Div0.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.Div0.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0020P01.xfdl");

       
    };
}
)();
