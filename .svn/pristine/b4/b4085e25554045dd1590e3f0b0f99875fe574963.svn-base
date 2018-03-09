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
                this.set_name("FAMB0150");
                this.set_titletext("원천납부세액명세현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INST_RATE\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "123", "240", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "147", null, null, "8", "8", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.style.set_background("#f5f5f5ff");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"원천징수의무자\" taborder=\"undefined\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"원천징수일\" taborder=\"undefined\"/><Cell col=\"3\" rowspan=\"2\" text=\"이자금액\" taborder=\"undefined\"/><Cell col=\"4\" rowspan=\"2\" text=\"세율&#10;(%)\" taborder=\"undefined\"/><Cell col=\"5\" rowspan=\"2\" text=\"법인세\" taborder=\"undefined\"/><Cell col=\"6\" rowspan=\"2\" text=\"적요\" taborder=\"undefined\"/><Cell row=\"1\" text=\"사업자번호\"/><Cell row=\"1\" col=\"1\" text=\"상호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:BSNS_NUMB\" mask=\"expr:BSNS_NUMB.toString().length == 0 ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PAYX_DATE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:INST_AMNT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:INST_RATE\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;INST_AMNT&quot;, 0)\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT&quot;, 0)\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("원천납부세액명세현황");
            obj.style.set_align("left middle");
            obj.style.set_font("GulimChe,11, bold");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "492", "29", "16", null, this);
            obj.set_text("세무조정자료>원천납부세액명세현황");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("22");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "77", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsSHRACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static02", "absolute", "212", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPT_TODT", "absolute", "390", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRAPPR_FRDT", "absolute", "274", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static36", "absolute", "371", "68", "16", "22", null, null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("~");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("원천납부세액명세현황");
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
        this.addIncludeScript("FAMB0150.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0150.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        // include "import::lib_XConvert.xjs";
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
        // this.sBUTTONLIST = 'TTFFFFTT'; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        // this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        // this.sFORMCAPTION = ''; //Form의 Title 정보
        // this.sFORMLOCATION = ''; //Form의 Location 정보
        // this.sUSERLAVEL = ''; //Form의 사용  Level
        // this.sPACKAGENAME = 'erp.u.fam.b.ab.FAMB0150AB'; //해당 Form에서 사용 할 Package 명
        this.sBUTTONLIST = 'TTFFFFTT'; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = 'FAMB0150'; //해당 Form에서 사용 할 Package 명
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        } else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }
        this.sACCT_YEAR = ''; //CUST01 계정코드조회를 위해 선언
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4);
        	this.calSHRAPPR_FRDT.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + '0101'));
        	this.calSHRAPPT_TODT.set_value(this.fnc_GetServerDateTime("DATE"));

        	this.cmbSHRACCT_GUB1.setFocus();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}
        	this.fnc_DatasetClear('dsTA_SLIPNT'); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	if (this.dsTA_SLIPNT.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "famb0150.jrf"; //Report File Name

        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRAPPR_FRDT.value + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + this.calSHRAPPT_TODT.value + "^";

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_SLIPNT";
        	application.GBL_PRINT = 'Y'; //미리보기 사이즈 120%

        	// Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("원천납부세액명세현황", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }
         
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	return this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	if (e.keycode == 13 && !(e.fromobject instanceof this.Grid)) 
        	{
        		var oFocusComponent = this.getNextComponent(e.fromobject, true);

        		oFocusComponent.setFocus();
        		return;
        	}

        	// Control Key가 눌려져 있다면 단축키 처리
        	if (e.ctrlKey) 
        	{
        		this.fnc_HotKey(this, e.keycode);
        	}

        	// fnc_HotKey_new(this, obj, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) 
        	{
        		if (this.fnc_Message("M1023") == false) 
        		{
        			return false;
        		}
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	// 기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)); //회계단위
        		sReturnString += " APPR_FRDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_FRDT.value)); //거래일자1
        		sReturnString += " APPT_TODT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPT_TODT.value)); //거래일자2
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	// Service 후 Progress Bar Close
        	//this.fnc_CloseProgress();

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.rowcount, "SHR");
        		this.fnc_Message("M1007", this.dsTA_SLIPNT.rowcount);
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// //계정종료(매출/매입)(보조필드1 : SPC1 || 전체인것) 필터 처리
        		// var sFilterRequirement = "SUBREF1 == 'SPC1'";
        		// dsSHRACCT_TYPE.filter(sFilterRequirement);

        		this.cmbSHRACCT_GUB1.set_index(0);
        		// cmbSHRACCT_TYPE.index =0;
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	this.fnc_GridSort(obj, obj.binddataset, e.col, e.cell);
        }

        /*---------------------------------+
         |  In Grid Enter Then Next Column  |
         +----------------------------------*/
        this.fn_NextColumn = function (obj,e)
        {
        	obj.moveToNextCell();
        }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	var sInputValue1 = "";
        	switch (obj.name) 
        	{
        		case "imgHelpSHRCUST_CODE":
        			// 계정과목1 정보 Popup

        			sSearchKind = "CUST01"; //사용자 코드 조회 POPUP
        			sCommonGubn = this.sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRCUST_NAME.value;
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRCUST_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRCUST_CODE.set_value(sResponse[0]); //계정
        				this.edtSHRCUST_NAME.set_value(sResponse[1]); //계정명
        			}
        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj)
        {
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sInputValue1 = "";

        	switch (obj.name) 
        	{
        		case "edtSHRCUST_NAME":
        			// 계정과목 정보
        			sSearchKind = "CUST01"; //프로그램 정보
        			sCommonGubn = this.sACCT_YEAR; //필수인자값
        			application.GBL_REVOBJ1 = "edtSHRCUST_CODE"; //프로그램 ID Text Object명
        			application.GBL_REVOBJ2 = "edtSHRCUST_NAME"; //프로그램 명 Text Object명
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1);
        }

        
        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e)
        {
        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "SLIP_NUMB") == e.cell
        		 && this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(e.row, "SLIP_NUMB"))) > 0) 
        	{
        		var sSLIP_NUMB = this.fnc_Trim(this.dsTA_SLIPNT.getColumn(e.row, "SLIP_NUMB"));
        		trace("SLIP_NUMB: " + sSLIP_NUMB);
        		this.gfn_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNT.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPT_TODT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_FRDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMB0150.xfdl");
        this.loadPreloadList();
       
    };
}
)();
