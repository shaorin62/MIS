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
                this.set_name("comHelpPopup");
                this.set_titletext("공통조회팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,510,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_POPUPX", this);
            obj._setContents("<ColumnInfo><Column id=\"POPP_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POPP_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"POPP_CNTT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNE_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"AULU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CDRI_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SERS_GRDC\" size=\"3000\" prop=\"default\" type=\"STRING\"/><Column id=\"SECH_SYNX\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"FROM_SYNT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WHRE_SYNT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WHRE_ADDX\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"USYN_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDT_SQLC\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SECN_CBCT\" size=\"3000\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCommonCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">1</Col><Col id=\"No\">a</Col></Row><Row><Col id=\"codeName\">2</Col><Col id=\"No\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo00", this);
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_POPUPX", "absolute", "15", "108", null, null, "15", "44", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsCommonCode");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_scrollbars("autovert");
            obj.set_tabstop("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"22\"/><Column size=\"150\"/><Column size=\"172\"/><Column size=\"182\"/><Column size=\"157\"/><Column size=\"125\"/></Columns><Rows></Rows></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "87", "262", "21", null, null, this);
            obj.set_cssclass("styFormSearchInfo");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "15", null, null, "21", "74", "13", this);
            obj.set_text("해당 항목에서 더블클릭 또는 Enter Key를 누르시면 선택 됩니다.");
            obj.set_cssclass("sta_WF_Desc01");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "15", "6", null, "21", "15", null, this);
            obj.set_cssclass("sta_WF_Info");
            obj.set_text("조회조건 후 입력하세요 등 주석내용");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "30", null, "43", "15", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearch", "absolute", "26", "41", "115", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("No");
            obj.set_datacolumn("codeName");
            obj.set_innerdataset("dsCombo");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSearchText", "absolute", "143", "41", null, "21", "88", null, this);
            obj.set_autoselect("true");
            obj.set_imemode("native");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "83", "50", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button69", "absolute", null, "41", "52", "21", "26", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "102", "216", "6", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "15", "461", "0", null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "0", "120", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "320", "0", "56", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "73", "56", "35", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "415", "483", "64", "12", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "415", "451", "64", "8", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통조회팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comHelpPopup.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comHelpPopup.xfdl", function() {
        /*****************************************************************************************************
         2014.10.25 김석두 (최초 개발)
         본 화면은 Help Popup 처리 화면 입니다.
         
         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ****************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sSEARCHKIND  = this.parent.sSEARCHKIND;  //Open 할 Popup 종류
        this.sSEARCHPARAM = this.parent.sSEARCHPARAM; //조회 Parameter
        this.sSEARCHVALUE = this.parent.sSEARCHVALUE; //입력된 자료가 있다면 Default로 조회
        this.sSEARCHUSE   = this.parent.sSEARCHUSE;   //사용여부구문 포함 여부
        this.sPACKAGENAME = 'ComHelpPopup';

        /*------------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.edtSearchText.set_value(this.sSEARCHVALUE);
        	this.fn_FormDesignQuery();
        	if (this.fnc_Length(this.edtSearchText.text) > 0 ){
        		this.fn_SearchList();
        		this.grdTM_POPUPX.setFocus();
        	}

        }

        /*-----------------------------------------+
         |  화면 ID에 다른 Form Setting 자료 조회  |
         +-----------------------------------------*/
        this.fn_FormDesignQuery = function () {

        	var sMethodName = "HelpFormSearch";
        	var sOutDataSet = "dsTM_POPUPX=dsTM_POPUPX";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, '', sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------+
         |  공통 조회 실행 !  |
         +--------------------*/
        this.fn_SearchList = function (obj,e) {
        	// 조회 필수 조건 확인
        	if (this.dsTM_POPUPX.getColumn(0, "CDRI_YSNO") == '1') {

        		if (this.fnc_Length(this.fnc_Trim(this.edtSearchText.value)) < 1) {
        			this.fnc_Message("TMM072", "조회 조건을");
        			this.edtSearchText.setFocus();
        			return;
        		}

        	}

        	var sMethodName = "HelpDataSearch";
        	var sInDataSet  = "dsTM_POPUPX=dsTM_POPUPX";
        	var sOutDataSet = "dsCommonCode=dsCommonCode";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_POPUPX.setFocus();

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 화면 내용 조회
        	if (sKind == 'HelpFormSearch') {

        		sReturnString  = " pgm="         + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      + this.fnc_Quote(sKind);
        		sReturnString += " sSEARCHKIND=" + this.fnc_Quote(this.sSEARCHKIND);

        	// 대상 자료 조회
        	} else if (sKind == 'HelpDataSearch') {

        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
        		sReturnString += " sSEARCHKIND="  + this.fnc_Quote(this.sSEARCHKIND);
        		sReturnString += " sSEARCHPARAM=" + this.fnc_Quote(this.sSEARCHPARAM);
        		sReturnString += " sSEARCHVALUE=" + this.fnc_Quote(this.edtSearchText.value);
        		sReturnString += " sSEARCHUSE="   + this.fnc_Quote(this.sSEARCHUSE);
        		sReturnString += " sSEARCHCOL="   + this.fnc_Quote(this.cmbSearch.value == undefined ? "0" : this.cmbSearch.value);

        	}

        	return sReturnString;

        }

        /*-------------------------------------+
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

        	if (sMethodName == 'HelpFormSearch') {

        		// 해당 ID가 존재하지 않으면 화면 종료
        		if (this.dsTM_POPUPX.getRowCount() < 1) {
        			this.fnc_Message("TMM125", "잘못된 Popup ID입니다. 확인 하세요!");
        			this.fnc_PopupClose("");
        			return;
        		}
        		
        		// 화면 Width,Height,중앙위치 설정
        		if (this.dsTM_POPUPX.getColumn(0, "POPP_SIZW") != undefined || this.dsTM_POPUPX.getColumn(0, "POPP_SIZH") != undefined) {
        			
        			var nWidth  = nexacro.toNumber(this.dsTM_POPUPX.getColumn(0, "POPP_SIZW"), 0);
        			var nHeight = nexacro.toNumber(this.dsTM_POPUPX.getColumn(0, "POPP_SIZH"), 0);
        			 
        			if (nWidth == 0 || nWidth < this.width) {
        				nWidth = this.width;
        			} else {
        				nWidth = this.dsTM_POPUPX.getColumn(0, "POPP_SIZW");
        			}
        			
        			if (nHeight == 0 || nHeight < this.height) {
        				nHeight = this.height;
        			} else {
        				nHeight = this.dsTM_POPUPX.getColumn(0, "POPP_SIZH");
        			}
        			
        			this.parent.set_width(nWidth);
        			this.parent.set_height(nHeight);
        			
        			var nLeft = (application.mainframe.width / 2) - Math.round(nWidth / 2);
        			var nTop  = (application.mainframe.height / 2) - Math.round(nHeight / 2) ;  
        			 
        			this.parent.set_left(nLeft);
        			this.parent.set_top(nTop);
        		}
        		
        		// 화면 디자인
        		this.set_titletext(this.dsTM_POPUPX.getColumn(0, "POPP_NAME") + "[" + this.dsTM_POPUPX.getColumn(0, "POPP_CODE") + "]");    //화면 Caption
        		this.imgFormTitle.set_text(this.dsTM_POPUPX.getColumn(0, "POPP_CNTT"));      //Form Title
        		this.dsCombo.loadXML(this.dsTM_POPUPX.getColumn(0, "SECN_CBCT"));
        		this.cmbSearch.set_index(0);

        		this.grdTM_POPUPX.set_formats(this.dsTM_POPUPX.getColumn(0, "SERS_GRDC"));   //Grid Setting
        		this.grdTM_POPUPX.set_cellsizingtype("row");
        		//this.grdTM_POPUPX.set_autosizingtype("col");
        		this.fnc_GridSetting(this);
        		
        		this.edtSearchText.setFocus();
        		
        		if (this.dsTM_POPUPX.getColumn(0, "AULU_YSNO") == '0') return;               // 자동 조회가 아니면 그냥 종료

        		if (this.dsTM_POPUPX.getColumn(0, "CDRI_YSNO") == '1') {
        			// 필수 입력이나 조회 조건이 없으면 조회하지 않음
        			if (this.fnc_Length(this.fnc_Trim(this.edtSearchText.value)) > 0) this.fn_SearchList();
        		} else {
        			// 자동 조회 처리
        			this.fn_SearchList();
        		}

        	} else if (sMethodName == 'HelpDataSearch') {

        		this.fnc_Information(this.stInformation, this.dsCommonCode.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdTM_POPUPX.selectRow(this.dsCommonCode.rowposition);
        		
        		if (this.dsCommonCode.rowcount < 1) {
        			this.edtSearchText.setFocus();
        		} else {
        			this.grdTM_POPUPX.setFocus();
        		}

        	}

        }

        /*----------------------------------+
         |  Enter Key Press 시 조회 실행 !  |
         +----------------------------------*/
        this.edtSearchText_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_SearchList();

        }

        /*-----------------------------------------------------+
         |  검색 조건 Combo가 바뀔 때 검색 조건 Text로 Focus!  |
         +-----------------------------------------------------*/
        this.cmbSearch_OnChanged = function (obj,e) {

        	this.edtSearchText.setFocus();

        }

        /*------------------------------------------------+
         |  그리드에서 Enter Key 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTM_POPUPX_OnKeyDown = function (obj,e) {

        	if (e.keycode == 13) this.fn_Confirm();

        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {

        	if (e.keycode == 27) this.fn_Cancel();

        }

        /*---------------------+
         |  엑셀 버튼 클릭 時  |
         ----------------------*/
        this.fn_ToExcel = function (obj,e) {

        	this.fnc_ToExcel(this.name);

        }

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var iColumnCount = this.dsCommonCode.getColCount();
        	var arrReturn = new Array(iColumnCount);

        	// 반환 할 자료(Array) 만들기
        	for (var i = 0; i < iColumnCount; i++) {
        		arrReturn[i] = this.dsCommonCode.getColumn(this.dsCommonCode.rowposition, "COL_TMP" + i);
        	}

        	this.arrReturnFinal = arrReturn;
        	this.fnc_PopupClose(arrReturn);

        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTM_POPUPX.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.grdTM_POPUPX.addEventHandler("onkeydown", this.grdTM_POPUPX_OnKeyDown, this);
            this.cmbSearch.addEventHandler("onitemchanged", this.cmbSearch_OnChanged, this);
            this.edtSearchText.addEventHandler("onkeydown", this.edtSearchText_OnKeyDown, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.Button69.addEventHandler("onclick", this.fn_SearchList, this);

        };

        this.loadIncludeScript("comHelpPopup.xfdl");

       
    };
}
)();
