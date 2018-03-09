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
                this.set_name("FAMB0125");
                this.set_titletext("특수관계자채권/채무내역");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RELT_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT3\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT4\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT5\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">FA28</Col><Col id=\"DSNAME\">dsSHRACCT_TYPE</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"CODEID\">FC01</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsRELT_GUBN</Col><Col id=\"CODEID\">RELT_GUBN</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"DSNAME\">dsSHRRELT_GUBN</Col><Col id=\"CODEID\">RELT_GUBN</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_TYPE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCURR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRRELT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRELT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"관계사\" taborder=\"undefined\"/><Cell col=\"1\" colspan=\"3\" displaytype=\"text\" text=\"당   기\" taborder=\"undefined\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"text\" text=\"전   기\" taborder=\"undefined\"/><Cell row=\"1\" col=\"1\" text=\"매출채권\"/><Cell row=\"1\" col=\"2\" text=\"매입채무\"/><Cell row=\"1\" col=\"3\" text=\"미지급금\"/><Cell row=\"1\" col=\"4\" text=\"매출채권\"/><Cell row=\"1\" col=\"5\" text=\"미지급금\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:left;\" text=\"bind:RELT_GUBN\" combodataset=\"dsRELT_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT5\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT&quot;, 0)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT2&quot;, 0)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT3&quot;, 0)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT4&quot;, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;SLIP_AMNT5&quot;, 0)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("특수관계자채권/채무내역");
            obj.style.set_align("left middle");
            obj.style.set_font("GulimChe,11, bold");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("22");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "492", "29", "16", null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("재무관리>특수관계자채권/채무내역");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "203", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("25");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_FRDT", "absolute", "265", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRACCT_TYPE", "absolute", "448", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@dsSHRACCT_TYPE");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "77", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("@dsSHRACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static04", "absolute", "586", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "380", "68", "65", "22", null, null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("채권/채무");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "750", "68", "150", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHRACCT_INTL", "absolute", "727", "68", "22", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.set_visible("false");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "648", "68", "78", "22", null, null, this);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("특수관계자채권/채무내역");
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
        this.addIncludeScript("FAMB0125.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0125.xfdl", function() {
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
        // this.sPACKAGENAME = 'erp.u.fam.b.ab.FAMB0125AB'; //해당 Form에서 사용 할 Package 명
        this.sBUTTONLIST = 'TTFFFFTT'; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = 'FAMB0125'; //해당 Form에서 사용 할 Package 명
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
        this.sACCT_YEAR = ''; //ACCT09 계정코드조회를 위해 선언

        
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
        	this.calSHRAPPR_FRDT.set_value(this.fnc_GetServerDateTime("DATE")); //calSHRAPPR_TODT.value = fnc_GetServerDateTime("DATE");

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
        	application.GBL_RPTFILENAME = "famb0125.jrf"; //Report File Name

        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRAPPR_FRDT.value + "^";

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_SLIPNT,dsRELT_GUBN";
        	application.GBL_PRINT = 'Y'; //미리보기 사이즈 120%

        	// Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("특수관계자채권/채무내역", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
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
        		sReturnString += " ACCT_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_TYPE.value)); //차입종류
        		sReturnString += " APPR_FRDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_FRDT.value)); //거래일자1
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value)); //계정과목
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
        		// 계정종료(매출/매입)(보조필드1 : SPC1 || 전체인것) 필터 처리
        		var sFilterRequirement = "SUBREF1 == 'SPC2'";
        		this.dsSHRACCT_TYPE.filter(sFilterRequirement);

        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHRACCT_TYPE.set_index(0);
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
        		case "imgHelpSHRACCT_INTL":
        			// 계정과목1 정보 Popup

        			sSearchKind = "ACCT09"; //사용자 코드 조회 POPUP
        			sCommonGubn = this.sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRACCT_NAME.value;
        			sInputValue1 = this.cmbSHRACCT_TYPE.value; //계정타입
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME, sInputValue1); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME.set_value(sResponse[1]); //계정명
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
        		case "edtSHRACCT_NAME":
        			// 계정과목 정보
        			sSearchKind = "ACCT09"; //프로그램 정보
        			sCommonGubn = this.sACCT_YEAR; //필수인자값
        			sInputValue1 = this.cmbSHRACCT_TYPE.value; //계정타입
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL"; //프로그램 ID Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACCT_NAME"; //프로그램 명 Text Object명
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1);
        }

        
        /*----------------+
         |  세부내역조회 팝업  |
         +-----------------*/
        this.grd_OnCellDBLClick = function (obj,e)
        {
        	var sAcctType = "";
        	var sApprFrDt = "";

        	if (this.fnc_GridColumnIndex(obj, "SLIP_AMNT") == e.cell) 
        	{
        		// 당기 채권
        		sAcctType = "FA280150";
        		sApprFrDt = this.fnc_Trim(this.calSHRAPPR_FRDT.value);
        	}
        	else if (this.fnc_GridColumnIndex(obj, "SLIP_AMNT2") == e.cell) 
        	{
        		// 당기 채무
        		sAcctType = "FA280160";
        		sApprFrDt = this.fnc_Trim(this.calSHRAPPR_FRDT.value);
        	}
        	else if (this.fnc_GridColumnIndex(obj, "SLIP_AMNT3") == e.cell) 
        	{
        		// 당기 미지급금
        		sAcctType = ""; //FA280170 마땅한 화면이 우선 없으므로 우선 처리하지 않는다.
        		sApprFrDt = this.fnc_Trim(this.calSHRAPPR_FRDT.value);
        	}
        	else if (this.fnc_GridColumnIndex(obj, "SLIP_AMNT4") == e.cell) 
        	{
        		// 전기 채권
        		sAcctType = "FA280150";
        		sApprFrDt = (this.fnc_Left(this.calSHRAPPR_FRDT.value, 4) - 1) + this.fnc_SubStr(this.calSHRAPPR_FRDT.value, 4, 4);
        	}
        	else if (this.fnc_GridColumnIndex(obj, "SLIP_AMNT5") == e.cell) 
        	{
        		// 전기 미지급금
        		sAcctType = "";
        		sApprFrDt = (this.fnc_Left(this.calSHRAPPR_FRDT.value, 4) - 1) + this.fnc_SubStr(this.calSHRAPPR_FRDT.value, 4, 4);
        	}

        
        	if (sAcctType == "FA280150" || sAcctType == "FA280160") 
        	{
        		// 20150105 : 세부내역 추적기능 구현
        		var strName = "FAMB0120";
        		var strFormURL = "fam::FAMB0120.xfdl";
        		var strOpenStyle = "showtitlebar=true";
        		var nWidth = 990;
        		var nHeight = 830;
        		var nLeft = -1;
        		var nTop = -1;

        		var objArgumentList = {
        			refform : this, // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        			pLoadForm : "SHR",
        			pAcctGub1 : this.refform.fnc_Trim(this.refform.cmbSHRACCT_GUB1.value),
        			pAcctType : sAcctType,
        			pApprFrDt : sApprFrDt,
        			pAcctIntl : "",
        			pAcctName : "",
        			pReltGubn : this.refform.dsTA_SLIPNT.getColumn(this.refform.dsTA_SLIPNT.rowposition, "RELT_GUBN"),
        			pCustCode : this.refform.dsTA_SLIPNT.getColumn(this.refform.dsTA_SLIPNT.rowposition, "COND_VACD"),
        			pCustName : this.refform.dsTA_SLIPNT.getColumn(this.refform.dsTA_SLIPNT.rowposition, "COND_VANM")
        		};

        		var sResponse = this.fnc_Dialog(strName, strFormURL, this, objArgumentList, nWidth, nHeight, strOpenStyle, nLeft, nTop);

        		return sResponse;
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
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grd_OnCellDBLClick, this);
            this.calSHRAPPR_FRDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.imgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMB0125.xfdl");
        this.loadPreloadList();
       
    };
}
)();
