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
                this.set_name("FAMD0320");
                this.set_titletext("재무상태표 조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">FA14</Col><Col id=\"DSNAME\">dsACCT_GUB2</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MAMNTM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GRPKEY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_BFNM\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_LEVL\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BASE_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BASE_BALA\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PREV_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PREV_BALA\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BASE_SUMX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PREV_SUMX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_UTTN\" type=\"STRING\" size=\"7\"/><Column id=\"MAST_OFFI\" type=\"STRING\" size=\"4\"/><Column id=\"MAST_OFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CLSE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OFAR_SQMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OFAR_PYNG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"5\"/><Column id=\"DEPT_CNTX\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MAMNTM_PRINT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_SEQX_1\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"CALX_YSNO_1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"FINA_CODE_1\" type=\"STRING\" size=\"256\"/><Column id=\"FINA_NAME_1\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMT_2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRNT_SEQX_2\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"CALX_YSNO_2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"FINA_CODE_2\" type=\"STRING\" size=\"256\"/><Column id=\"FINA_NAME_2\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_3\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AMT_4\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("재무상태표 조회");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "124", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTM", "absolute", "8", "147", null, null, "8", "8", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"300\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" text=\"당기\" taborder=\"undefined\"/><Cell col=\"2\" displaytype=\"text\" text=\"전기\" taborder=\"undefined\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(gfn_Decode(PRNT_LEVL, 6 ,'#d7f1eeff','default'));align: left;\" text=\"bind:ACCT_BFNM\"/><Cell col=\"1\" displaytype=\"number\" style=\"background: EXPR(gfn_Decode(PRNT_LEVL, 6 ,'#d7f1eeff','default'));align: right;\" text=\"bind:BASE_AMNT\" mask=\"#,###\"/><Cell col=\"2\" displaytype=\"number\" style=\"background: EXPR(gfn_Decode(PRNT_LEVL, 6 ,'#d7f1eeff','default'));align: right;\" text=\"bind:PREV_AMNT\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("taborder").set("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnPREV_PRINT", "absolute", null, "67", "100", "23", "19", null, this);
            obj.set_taborder("26");
            obj.set_text("이전양식출력");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPRNT_LEVL_TO", "absolute", "806", "68", "40", "22", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRPRNT_LEVL_TO_innerdataset = new Dataset("cmbSHRPRNT_LEVL_TO_innerdataset", this.cmbSHRPRNT_LEVL_TO);
            cmbSHRPRNT_LEVL_TO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRPRNT_LEVL_TO_innerdataset);
            obj.set_taborder("27");
            obj.set_value("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("4");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            obj.style.set_align("center middle");
            obj.set_text("5");

            obj = new Combo("cmbACCT_GUBN", "absolute", "266", "67", "150", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("dsACCT_GUBN");
            obj.set_codecolumn("ACCT_GUBN");
            obj.set_datacolumn("OFFI_NAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRPRNT_LEVL_FR", "absolute", "847", "68", "19", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_value("0");
            obj.set_maxlength("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "213", "68", "50", "22", null, null, this);
            obj.getSetter("taborder").set("30");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "86", "68", "120", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "16", "69", "60", "22", null, null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "745", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("조회레벨");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPREV_YYMM", "absolute", "661", "68", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static0", "absolute", "584", "68", "75", "22", null, null, this);
            obj.getSetter("taborder").set("35");
            obj.set_text("전기기준월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_YYMM", "absolute", "500", "68", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static9", "absolute", "423", "68", "75", "22", null, null, this);
            obj.getSetter("taborder").set("37");
            obj.set_text("당기기준월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "16", null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("재무관리>결산관리>재무제표관리>대차대조표 조회");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("재무상태표 조회");
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
        this.addIncludeScript("FAMD0320.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMD0320.xfdl", function() {
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
        this.sBUTTONLIST = 'TTFFFFTT'; //공통기능정의(버튼순으로 T or F)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = ''; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = ''; //Form의 Location 정보
        this.sPACKAGENAME = 'erp.u.fam.d.ab.FAMD0320AB'; //해당 Form에서 사용 할 Package 명

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM dsTA_MAMNTM_PRINT=dsTA_MAMNTM_PRINT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	// TRACE(sArgument);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        
        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	if (this.dsTA_MAMNTM.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "famd0320r1.jrf"; //Report File Name

        	var toDay1 = "";
        	var toDay2 = "";
        	var toDay1f = "";
        	var toDay1t = "";
        	var toDay2f = "";
        	var toDay2t = "";

        	toDay1f = this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 4) + '년 ' + '01월 01일';
        	toDay1t = this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRBASE_YYMM.value, 4, 2) + '월 ' + this.fnc_SubStr(this.fnc_LastDate(this.calSHRBASE_YYMM.value), 6, 2) + '일';
        	toDay2f = this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 4) + '년 ' + '01월 01일';
        	toDay2t = this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRPREV_YYMM.value, 4, 2) + '월 ' + this.fnc_SubStr(this.fnc_LastDate(this.calSHRPREV_YYMM.value), 6, 2) + '일';

        	toDay1 = toDay1f + " ~ " + toDay1t;
        	toDay2 = toDay2f + " ~ " + toDay2t;

        	var pleaceBusiness = "";
        	trace("value: " + this.cmbACCT_GUBN.text);

        	if (this.cmbACCT_GUBN.text != "전체") 
        	{
        		pleaceBusiness = this.cmbACCT_GUBN.text;
        	}
        	else 
        	{
        		pleaceBusiness = "농심엔지니어링총합병";
        	}

        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + toDay1 + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + pleaceBusiness + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + toDay2;

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_MAMNTM";
        	application.GBL_PRINT = 'Y'; //Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("재무상태표", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);

        	//this.fnc_GetComboDs_AcctGubn(this.dsACCT_GUBN); //사업장 구분 콤보

        	this.fnc_GridSetting(this);

        	for (var i = 0; i < this.grdTA_MAMNTM.getCellCount("body"); i++) 
        	{
        		var styleObj = this.grdTA_MAMNTM.getCellProperty("body", i, "style");
        		styleObj.background = "expr:(GRPKEY == '1' || GRPKEY == '2'  || GRPKEY == '3') && fnc_Length(ACCT_BFNM) > 0 ? '#d7f1eeff' : 'white'";
        		styleObj.background2 = "expr:(GRPKEY == '1' || GRPKEY == '2'  || GRPKEY == '3') && fnc_Length(ACCT_BFNM) > 0 ? '#d7f1eeff' : 'white'";
        	}

        
        	// trace( " ==================================== fn_FormLoadSetting ");
        	// trace( " fnc_GetServerDateTime("DATE") -> " + fnc_GetServerDateTime("DATE"));
        	// trace( " fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4) -> " + fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4));
        	// trace( " toNumber(fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4)) -> " + toNumber(fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4)));
        	// trace( " (toNumber(fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4)) - 1) -> " +(toNumber(fnc_SubStr(fnc_GetServerDateTime("DATE"),0,4)) - 1));

        
        	// 조회 초기값 설정
        	this.calSHRBASE_YYMM.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	this.calSHRPREV_YYMM.set_value(((nexacro.toNumber(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4)) - 1) + this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2)));
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_ANDTXM01",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        } 
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if (e.keycode == 13) 
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
        	
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBASE_YYMM.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "당기기준월"); //Message 처리
        		this.calSHRBASE_YYMM.setFocus(); //해당 항목으로 Focus
        		return false;
        	}
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPREV_YYMM.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "전기기준월"); //Message 처리
        		this.calSHRPREV_YYMM.setFocus(); //해당 항목으로 Focus
        		return false;
        	}

        	if (this.fnc_SubStr(this.fnc_Trim(this.calSHRBASE_YYMM.value), 0, 4) == this.fnc_SubStr(this.fnc_Trim(this.calSHRPREV_YYMM.value), 0, 4)) 
        	{
        		this.fnc_Message("M1046", "당기기간과 전기기간의 연도는 달라야 합니다.."); //인쇄자료 없음
        		this.calSHRPREV_YYMM.setFocus(); //해당 항목으로 Focus
        		return false;
        	}

        
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRPRNT_LEVL_FR.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "계정레벨시작"); //Message 처리
        		this.edtSHRPRNT_LEVL_FR.setFocus(); //해당 항목으로 Focus
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRPRNT_LEVL_TO.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "계정레벨종료"); //Message 처리
        		this.cmbSHRPRNT_LEVL_TO.setFocus(); //해당 항목으로 Focus
        		return false;
        	}

        

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
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

        	return true;
        	// Validation Check Sign Return
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
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " BASE_YYMM=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 6))); //전송 할 인자 값
        		sReturnString += " PREV_YYMM=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 6))); //전송 할 인자 값
        		sReturnString += " PRNT_LEVL_FR=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPRNT_LEVL_FR.value)); //전송 할 인자 값
        		sReturnString += " PRNT_LEVL_TO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRNT_LEVL_TO.value)); //전송 할 인자 값
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)); //전송 할 인자 값
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote(this.cmbACCT_GUBN.value); //호출할 Package의 Method명
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " BASE_YYMM=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 6))); //전송 할 인자 값
        		sReturnString += " PREV_YYMM=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 6))); //전송 할 인자 값
        		sReturnString += " PRNT_LEVL_FR=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPRNT_LEVL_FR.value)); //전송 할 인자 값
        		sReturnString += " PRNT_LEVL_TO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRNT_LEVL_TO.value)); //전송 할 인자 값
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)); //전송 할 인자 값
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote(this.cmbACCT_GUBN.value); //호출할 Package의 Method명
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

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
        		var sum_dBal;
        		var sum_cBal;
        		var sum_dTotal;
        		var sum_cTotal;

        		this.dsTA_MAMNTM.set_enableevent(false); //Dataset의 Event False
        		this.fn_GridSetting(); //그리드 Setting
        		this.dsTA_MAMNTM.set_enableevent(true); //Dataset의 Event False

        		trace(this.dsTA_MAMNTM_PRINT.saveXML());
        		// 
        		// 조회 후 실행 해야 할 이후 작업이 있다면 여기에 기술한다.

        		this.fnc_Information(this.stInformation, this.dsTA_MAMNTM.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTA_MAMNTM.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 화면의 조회조건에 해당하는 콤보컨트롤의 index = 0 를 셋팅한다
        		// 추가시작
        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHRACCT_GUB1_OnChanged();
        		// 추가끝
        	}
        	else if (sMethodName == "SEARCHAG") 
        	{
        		this.dsACCT_GUBN.insertRow(0);
        		this.dsACCT_GUBN.setColumn(0, "ACCT_GUBN", "");
        		this.dsACCT_GUBN.setColumn(0, "OFFI_NAME", "전체");
        		this.cmbACCT_GUBN.set_index(0);
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow)
        {
        	// 기능없음
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	/*
        	 switch(obj.name) {
        	 
        	 default :
        	 break;
        	 }
        	 */
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj)
        {
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  계정과목 Setting!     |
         +------------------------*/
        this.fn_GridSetting = function ()
        {
        	// 레벨 구분 비교 변수
        	var iGubn01 = 0;
        	var iGubn02 = 0;
        	var iGubn03 = 0;

        	// 레벨 2의 배열 값
        	var varArray = new Array(10);
        	varArray[0] = '   가.';
        	varArray[1] = '   나.';
        	varArray[2] = '   다.';
        	varArray[3] = '   라.';
        	varArray[4] = '   마.';
        	varArray[5] = '   바.';
        	varArray[6] = '   사.';
        	varArray[7] = '   아.';
        	varArray[8] = '   자.';
        	varArray[9] = '   차.';
        	varArray[10] = '   카.';
        	varArray[11] = '   타.';
        	varArray[12] = '   파.';
        	varArray[13] = '   하.';

        	/*
        	 for(var i = 0; i < dsTA_MAMNTM.GetRowCount(); i++) {
        	 
        	 // 레벨 1 Setting
        	 if(parseInt(dsTA_MAMNTM.GetColumn(i, "PRNT_LEVL")) == 1) {
        	 
        	 iGubn01 = iGubn01 + 1;
        	 dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", iGubn01 + '.' + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 iGubn02 = 0;
        	 iGubn03 = 0;
        	 
        	 
        	 // 레벨 2 Setting
        	 } else if(parseInt(dsTA_MAMNTM.GetColumn(i, "PRNT_LEVL")) == 2) {
        	 
        	 //dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", varArray[iGubn02] + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", Space(3) + '(' + (toNumber(iGubn02)+1) + ')' + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 iGubn02 = iGubn02 + 1;
        	 iGubn03 = 0;
        	 
        	 // 레벨 3 Setting
        	 } else if(parseInt(dsTA_MAMNTM.GetColumn(i, "PRNT_LEVL")) == 3) {
        	 
        	 iGubn03 = iGubn03 + 1;
        	 dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", Space(6) + iGubn03 + ')' + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 
        	 // 레벨 4 Setting
        	 } else if(parseInt(dsTA_MAMNTM.GetColumn(i, "PRNT_LEVL")) == 4) {
        	 
        	 dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", Space(9) + '- ' + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 
        	 } else if(parseInt(dsTA_MAMNTM.GetColumn(i, "PRNT_LEVL")) == 5) {
        	 
        	 dsTA_MAMNTM.SetColumn(i, "ACCT_BFNM", Space(12) + dsTA_MAMNTM.GetColumn(i, "ACCT_BFNM"));
        	 }
        	 }
        	 */
        }

        /*--------------------------------------------------------+
         |  캐릭터의 허용자릿수의 나머지 부분을 "" BLANK 로 치환.! |
         +---------------------------------------------------------*/
        this.fn_CharacterBlank = function (iCnt,sValue)
        {
        	var sBlankLength = "";

        	for (var i = 0; i < (iCnt - this.LengthB(sValue)); i++) 
        	{
        		sBlankLength = sBlankLength + " ";
        	}

        	return sValue + sBlankLength;
        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-----------------------+
         |  회계단위변경시 |
         +------------------------*/
        this.cmbSHRACCT_GUB1_OnChanged = function (obj,e)
        {
        	// dsACCT_GUB2.filter("SUBREF1 == '" + cmbSHRACCT_GUB1.value + "'");
        	// var iROW = dsACCT_GUB2.insertRow(0);
        	// dsACCT_GUB2.setColumn(0,'SUBCODE',"");
        	// dsACCT_GUB2.setColumn(0,'SUBNAME',"전체");
        	// 
        	// cmbSHRACCT_GUB2.index = 0;
        }

        
        this.fn_row = function (currow)
        {
        	var iCnt = 0;
        	for (var i = 0; i <= currow; i++) 
        	{
        		if (this.dsTA_MAMNTM.getRowLevel(i) == 1) 
        		{
        			iCnt++;
        		}
        	}

        	return ((currow + 1) - iCnt);
        }

        this.fn_Print_2 = function (obj,e)
        {
        	if (this.dsTA_MAMNTM_PRINT.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "famd0320r2.jrf"; //Report File Name

        	var toDay1 = "";
        	var toDay2 = "";
        	var toDay1f = "";
        	var toDay1t = "";
        	var toDay2f = "";
        	var toDay2t = "";

        	toDay1f = this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 4) + '년 ' + '01월 01일';
        	toDay1t = this.fnc_SubStr(this.calSHRBASE_YYMM.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRBASE_YYMM.value, 4, 2) + '월 ' + this.fnc_SubStr(this.fnc_LastDate(this.calSHRBASE_YYMM.value), 6, 2) + '일';
        	toDay2f = this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 4) + '년 ' + '01월 01일';
        	toDay2t = this.fnc_SubStr(this.calSHRPREV_YYMM.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRPREV_YYMM.value, 4, 2) + '월 ' + this.fnc_SubStr(this.fnc_LastDate(this.calSHRPREV_YYMM.value), 6, 2) + '일';

        	toDay1 = toDay1f + " ~ " + toDay1t;
        	toDay2 = toDay2f + " ~ " + toDay2t;

        	var pleaceBusiness = "";
        	trace("value: " + this.cmbACCT_GUBN.text);

        	if (this.cmbACCT_GUBN.text != "전체") 
        	{
        		pleaceBusiness = this.cmbACCT_GUBN.text;
        	}
        	else 
        	{
        		pleaceBusiness = "농심엔지니어링총합병";
        	}

        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + toDay1 + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + pleaceBusiness + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + toDay2;

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_MAMNTM_PRINT";
        	application.GBL_PRINT = 'Y'; //Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("재무상태표", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsACCT_GUBN.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnPREV_PRINT.addEventHandler("onclick", this.fn_Print_2, this);
            this.cmbSHRPRNT_LEVL_TO.addEventHandler("onitemchanged", this.cmbSHRACCT_GUB1_OnChanged, this);
            this.cmbSHRPRNT_LEVL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPRNT_LEVL_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.cmbSHRACCT_GUB1_OnChanged, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPREV_YYMM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_YYMM.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMD0320.xfdl");
        this.loadPreloadList();
       
    };
}
)();
