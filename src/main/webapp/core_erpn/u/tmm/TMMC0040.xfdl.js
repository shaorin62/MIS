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
                this.set_name("TMMC0040");
                this.set_titletext("메타용어오류검증");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorMeta", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"106\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DATA_LENGTH2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COLM_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTR_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMN_LEN1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DOMN_LEN2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("메타용어오류검증");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("staLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>시스템관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchOption", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("Option");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_METAXM", "absolute", "8", "132", null, null, "8", "73", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsErrorMeta");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" displaytype=\"text\" text=\"Meta 표준용어\"/><Cell col=\"5\" colspan=\"7\" displaytype=\"text\" text=\"Table 정의 용어\"/><Cell row=\"1\" displaytype=\"text\" text=\"물리명\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"논리명\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"TYPE\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"Len1\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"Len2\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"테이블명\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"논리 테이블명\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"물리명\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"논리명\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"TYPE\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"Len1\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"Len2\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:center;\" text=\"bind:COLM_NAME\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ATTR_NAME\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:REFR_FLD1\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN2\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:TABLE_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TABLE_COMMENTS\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:COLUMN_NAME\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:COMMENTS\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DATA_TYPE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_LENGTH1\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_LENGTH2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Image3", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRDESC_REMK", "absolute", "84", "68", "159", "22", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("0");
            obj.set_text("DESC_REMK 포함여부");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Static("Shape3", "absolute", "8", null, null, "57", "8", "8", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Shape2", "absolute", "10", null, null, "53", "10", "10", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "378", null, null, "25", "12", "36", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "108", null, "175", "25", null, "36", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "764", null, "88", "25", null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "951", null, null, "25", "12", "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "108", null, "175", "25", null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOLUMN_NAME", "absolute", "110", null, "171", "21", null, "14", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "378", null, "289", "25", null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMMENTS", "absolute", "380", null, "285", "21", null, "14", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDATA_LENGTH1", "absolute", "766", null, "84", "21", null, "14", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_readonly("true");
            obj.set_taborder("29");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msdDATA_LENGTH2", "absolute", "953", null, null, "21", "14", "14", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_readonly("true");
            obj.set_taborder("7");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_COMMENTS", "absolute", "380", null, null, "21", "14", "38", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_NAME", "absolute", "110", null, "171", "21", null, "38", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD5", "absolute", "668", null, "96", "25", null, "12", this);
            obj.set_text("Len 1");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD6", "absolute", "851", null, "101", "25", null, "12", this);
            obj.set_text("Len 2");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "12", null, "96", "25", null, "12", this);
            obj.set_text("물리명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "282", null, "96", "25", null, "12", this);
            obj.set_text("논리명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "12", null, "96", "25", null, "36", this);
            obj.set_text("테이블명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "282", null, "96", "25", null, "36", this);
            obj.set_text("논리 테이블명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메타용어오류검증");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtTABLE_COMMENTS_value","edtTABLE_COMMENTS","value","dsErrorMeta","TABLE_COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTABLE_NAME_value","edtTABLE_NAME","value","dsErrorMeta","TABLE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOLUMN_NAME_value","edtCOLUMN_NAME","value","dsErrorMeta","COLUMN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMMENTS_value","edtCOMMENTS","value","dsErrorMeta","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDATA_LENGTH1_value","mskDATA_LENGTH1","value","dsErrorMeta","DATA_LENGTH1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("msdDATA_LENGTH2_value","msdDATA_LENGTH2","value","dsErrorMeta","DATA_LENGTH2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMC0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMC0040.xfdl", function() {
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
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFFFTF'; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = 'TMMC0040'; //해당 Form에서 사용 할 Package 명
        this.sSCRIPT = ''; //Script Source
        	
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        }else{
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

        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	this.fnc_DatasetClear('dsErrorMeta');
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsErrorMeta=dsErrorMeta";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

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

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) {
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == 'SEARCH00') {
        			
        		this.fnc_Information(this.stInformation, this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("M1007", this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_CheckBoxChange();
        		
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------------+
         |  CheckBox 선택 처리  |
         +----------------------*/
        this.fn_CheckBoxChange = function (obj) {

        	if (this.chkSHRDESC_REMK.value == "true" || this.chkSHRDESC_REMK.value == "1") {
        		this.dsErrorMeta.filter("");
        	} else {
        		this.dsErrorMeta.filter("COLUMN_NAME !== 'DESC_REMK'");
        	}

        	this.fnc_Information(this.stInformation, this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.chkSHRDESC_REMK.addEventHandler("onclick", this.fn_CheckBoxChange, this);

        };

        this.loadIncludeScript("TMMC0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
