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
                this.set_name("FAMD0340");
                this.set_titletext("월별 손익계산서 조회");
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
            obj._setContents("<ColumnInfo><Column id=\"GRPKEY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_BFNM\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_LEVL\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_01\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_02\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_03\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_04\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_05\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_06\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_07\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_08\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_09\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_10\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_11\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_12\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"QTER_01\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"QTER_02\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"QTER_03\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"QTER_04\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALF_01\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALF_02\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_GUBN", "absolute", "271", "67", "150", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("dsACCT_GUBN");
            obj.set_codecolumn("ACCT_GUBN");
            obj.set_datacolumn("OFFI_NAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("월별 손익계산서 조회");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "16", null, this);
            obj.set_text("재무관리>결산관리>재무제표관리>월별 손익계산서 조회");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTM", "absolute", "8", "147", null, null, "8", "8", this);
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"201\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" text=\"기간계\"/><Cell col=\"2\" displaytype=\"text\" text=\"1월\"/><Cell col=\"3\" displaytype=\"text\" text=\"2월\"/><Cell col=\"4\" displaytype=\"text\" text=\"3월\"/><Cell col=\"5\" displaytype=\"text\" text=\"1/4분기\"/><Cell col=\"6\" displaytype=\"text\" text=\"4월\"/><Cell col=\"7\" displaytype=\"text\" text=\"5월\"/><Cell col=\"8\" displaytype=\"text\" text=\"6월\"/><Cell col=\"9\" displaytype=\"text\" text=\"2/4분기\"/><Cell col=\"10\" displaytype=\"text\" text=\"상반기\"/><Cell col=\"11\" displaytype=\"text\" text=\"7월\"/><Cell col=\"12\" displaytype=\"text\" text=\"8월\"/><Cell col=\"13\" displaytype=\"text\" text=\"9월\"/><Cell col=\"14\" displaytype=\"text\" text=\"3/4분기\"/><Cell col=\"15\" displaytype=\"text\" text=\"10월\"/><Cell col=\"16\" displaytype=\"text\" text=\"11월\"/><Cell col=\"17\" displaytype=\"text\" text=\"12월\"/><Cell col=\"18\" displaytype=\"text\" text=\"4/4분기\"/><Cell col=\"19\" displaytype=\"text\" text=\"하반기\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_BFNM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:TOTA_AMNT\" mask=\"#,###\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_01\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_02\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_03\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_01\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_04\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_05\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_06\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_02\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:HALF_01\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_07\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_08\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_09\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_03\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_10\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_11\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_12\" mask=\"#,###\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_04\" mask=\"#,###\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;\" text=\"bind:HALF_02\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "11", "123", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "439", "67", "45", "22", null, null, this);
            obj.set_text("기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_YYMM_FR", "absolute", "479", "67", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM");
            obj.set_taborder("2");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRBASE_YYMM_TO", "absolute", "580", "67", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM");
            obj.set_taborder("3");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static3", "absolute", "671", "67", "60", "22", null, null, this);
            obj.set_text("조회레벨");
            obj.style.set_align("left");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPRNT_LEVL_FR", "absolute", "857", "67", "19", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("1");
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "563", "67", "13", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "67", "70", "22", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "80", "67", "120", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "219", "67", "50", "22", null, null, this);
            obj.set_text("사업장");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPRNT_LEVL_TO", "absolute", "732", "67", "40", "22", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRPRNT_LEVL_TO_innerdataset = new Dataset("cmbSHRPRNT_LEVL_TO_innerdataset", this.cmbSHRPRNT_LEVL_TO);
            cmbSHRPRNT_LEVL_TO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRPRNT_LEVL_TO_innerdataset);
            obj.set_taborder("4");
            obj.set_value("4");
            obj.set_text("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("3");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월별 손익계산서 조회");
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
        this.addIncludeScript("FAMD0340.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMD0340.xfdl", function() {
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
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	
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
        this.sPACKAGENAME = 'erp.u.fam.d.ab.FAMD0340AB'; //해당 Form에서 사용 할 Package 명

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
        	trace('fn_Search -------- ');

        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM";
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
        	application.GBL_RPTFILENAME = "famd0340r1.jrf"; //Report File Name

        	var toDay = "";
        	toDay = this.fnc_SubStr(this.calSHRBASE_YYMM_FR.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRBASE_YYMM_FR.value, 4, 2) + '월 ~ ' + this.fnc_SubStr(this.calSHRBASE_YYMM_TO.value, 0, 4) + '년 ' + this.fnc_SubStr(this.calSHRBASE_YYMM_TO.value, 4, 2) + '월 ';

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
        	application.GBL_RPTARGUMENT = 'sArg001,' + toDay + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + pleaceBusiness;
        	// GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg003,'+ "118-81-17174" + '^';

        	// Dataset
        	application.GBL_RPTDATASET = "dsTA_MAMNTM";
        	application.GBL_PRINT = 'Y'; //Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("월별손익계산서", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
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

        	// 조회 기초값 설정
        	this.calSHRBASE_YYMM_FR.set_value((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "01"));
        	this.calSHRBASE_YYMM_TO.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
         
         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
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
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBASE_YYMM_FR.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "기간시작월"); //Message 처리
        		this.calSHRBASE_YYMM_FR.setFocus(); //해당 항목으로 Focus
        		return false;
        	}
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBASE_YYMM_TO.value)) < 1) 
        	{
        		this.fnc_Message("M1005", "기간종료월"); //Message 처리
        		this.calSHRBASE_YYMM_TO.setFocus(); //해당 항목으로 Focus
        		return false;
        	}

        	if (this.fnc_SubStr(this.fnc_Trim(this.calSHRBASE_YYMM_FR.value), 0, 4) != this.fnc_SubStr(this.fnc_Trim(this.calSHRBASE_YYMM_TO.value), 0, 4)) 
        	{
        		this.fnc_Message("M1046", "기간의 연도는 동일한 연도 이어야 합니다.."); //인쇄자료 없음
        		this.calSHRBASE_YYMM_TO.setFocus(); //해당 항목으로 Focus
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
        		sReturnString += " BASE_YYMM_FR=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRBASE_YYMM_FR.value, 0, 6))); //전송 할 인자 값
        		sReturnString += " BASE_YYMM_TO=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRBASE_YYMM_TO.value, 0, 6))); //전송 할 인자 값
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
        	// 기능없음
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
        	// cmbACCT_GUBN.index = 0;
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsACCT_GUBN.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTA_MAMNTM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.calSHRBASE_YYMM_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_YYMM_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPRNT_LEVL_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.cmbSHRACCT_GUB1_OnChanged, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRPRNT_LEVL_TO.addEventHandler("onitemchanged", this.cmbSHRACCT_GUB1_OnChanged, this);
            this.cmbSHRPRNT_LEVL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMD0340.xfdl");
        this.loadPreloadList();
       
    };
}
)();
