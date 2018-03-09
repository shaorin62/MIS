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
                this.set_name("FAME0011");
                this.set_titletext("부서관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_DEPTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_LONM\" type=\"STRING\" size=\"300\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"DELE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_PCOD\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_PNME\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_DEPT\" type=\"STRING\" size=\"6\"/><Column id=\"PRIN_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT_RMRK\" type=\"STRING\" size=\"60\"/><Column id=\"SLIP_YSNO\" type=\"STRING\" size=\"1\" sumtext=\"기표부서여부\"/><Column id=\"BUDG_YSNO\" type=\"STRING\" size=\"1\" sumtext=\"예산부서여부\"/><Column id=\"COND_DPYN\" type=\"STRING\" size=\"1\" sumtext=\"주관부서여부\"/><Column id=\"DEPT_LEVL\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_UTTN\" type=\"STRING\" size=\"7\"/><Column id=\"MAST_OFFI\" type=\"STRING\" size=\"4\"/><Column id=\"MAST_OFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CLSE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OFAR_SQMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OFAR_PYNG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"5\"/><Column id=\"DEPT_CNTX\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDEPT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">진행부서</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">종료부서</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "123", "400", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_DEPTXM", "absolute", "8", "147", null, null, "8", "7", this);
            obj.set_binddataset("dsTA_DEPTXM");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"150\"/><Column size=\"55\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"생성일자\"/><Cell col=\"4\" text=\"종료일자\"/><Cell col=\"5\" text=\"상위부서\"/><Cell col=\"6\" text=\"상위부서명\"/><Cell col=\"7\" text=\"레벨\"/><Cell col=\"8\" text=\"회계부서\"/><Cell col=\"9\" text=\"예산부서\"/><Cell col=\"10\" text=\"주관부서\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:ACCT_GUBN\" combodataset=\"dsACCT_GUBN\" combocodecol=\"ACCT_GUBN\" combodatacol=\"OFFI_NAME\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:REGI_DATE\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;\" text=\"bind:DELE_DATE\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:DEPT_PCOD\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:DEPT_PNME\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:DEPT_LEVL\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SLIP_YSNO\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:BUDG_YSNO\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:COND_DPYN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "16", null, this);
            obj.set_text("부서관리");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text(">회계관리>사업장등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("23");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("부서명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "66", "68", "210", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "282", "68", "60", "22", null, null, this);
            obj.set_text("부서구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDEPT_GUBN", "absolute", "344", "68", "112", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDEPT_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("staSHRSTDX_DATE", "absolute", "462", "68", "61", "22", null, null, this);
            obj.set_text("기준일자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDX_DATE", "absolute", "525", "68", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서관리");
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
        this.addIncludeScript("FAME0011.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0011.xfdl", function() {
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
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        // 2014-12-10 : 실데이터는 인사쪽에서 관리하므로 삭제기능은 빼자.
        this.sBUTTONLIST = 'TTFFTTTF'; //공통기능정의(버튼순으로 T or F)

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        	
        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        	
        }
        this.sPACKAGENAME = 'erp.u.bdm.a.ab.FAME0011AB'; //해당 Form에서 사용 할 Package 명

        this.sACCT_GUBN = '';

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
        	var sOutDataSet = "dsTA_DEPTXM=dsTA_DEPTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_DEPTXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	var nRow = this.dsTA_DEPTXM.addRow();
        	this.grdTA_DEPTXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        	this.grdTA_DEPTXM.setCellPos(this.fnc_GridColumnIndex(this.grdTA_DEPTXM, "DEPT_CODE"));
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTA_DEPTXM.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck()) 
        		{
        			this.dsTA_DEPTXM.deleteSelectedRows();
        		}
        		// 삭제 여부 확인
        	}
        	else 
        	{
        		this.fnc_Message("M1003"); //삭제 자료 없음 정보 Display
        	}

        	this.grdTA_DEPTXM.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel(this.dsTA_DEPTXM); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTA_DEPTXM.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTA_DEPTXM=dsTA_DEPTXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// fn_search();

        	this.grdTA_DEPTXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this.name); //Export 할 화면 Call
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	// fnc_GetComboDs(dsCombo);
        	this.fnc_GridSetting(this);

        	// 공통콤보외 콤보 설정
        	//this.fnc_GetComboDs_AcctGubn(this.dsACCT_GUBN); //사업장 구분 콤보

        	//this.fnc_GridKeyFieldDisable(this.grdTA_DEPTXM, "DEPT_CODE", "edittype", "normal");

        	this.calSHRSTDX_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8)); //조회 초기값
        	this.cmbSHRDEPT_GUBN.set_index(1);

        	this.fn_Search();
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
         
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_DEPTXM",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }
         
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("dsTA_DEPTXM", this);
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
        	// 2014-12-30
        	// 변경한 내역이 있으면 조회 할지 다시 묻는다.
        	if (this.fnc_DatasetChangeCheck('dsTA_DEPTXM')) 
        	{
        		if (this.fnc_Message("M1023") == false) 
        		{
        			return false;
        		}
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.dsTA_DEPTXM);
        	trace("iSelectRowCount::" + iSelectRowCount);
        	if (iSelectRowCount > 1) 
        	{
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("M1010", iSelectRowCount);
        	}
        	else 
        	{
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		// var sQuestionText = "카드번호 : '"+ GetCellText(grdTA_CARDXM,"body",dsTA_DEPTXM.rowposition,1)+"'";
        		var sQuestionText = '부서코드 (' + this.fnc_Trim(this.dsTA_DEPTXM.getColumn(this.dsTA_DEPTXM.rowposition, "DEPT_CODE")) + ')';
        		return this.fnc_Message("M1004", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck(this.dsTA_DEPTXM)) 
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("M1006");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_DEPTXM.getRowCount(); i++) 
        	{
        		// if (fnc_ToUpper(GetRowType(dsTA_DEPTXM,i)) == "NORMAL") continue;
        		if (this.fnc_ToUpper(this.dsTA_DEPTXM.GetRowType(i)) != "NORMAL") 
        		{
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_DEPTXM.getColumn(i, 'DEPT_CODE'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "부서코드", this.dsTA_DEPTXM, i, this.grdTA_DEPTXM, 'DEPT_CODE');
        			}

        			// if (fnc_Length(fnc_Trim(dsTA_DEPTXM.getColumn(i, 'DEPT_NAME')))< 1 ) {
        			// return fnc_CheckPostAction("M1005", "부서명", dsTA_DEPTXM, i, grdTA_DEPTXM, 'DEPT_NAME');
        			// }
        			// 
        		}
        	}
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
        		sReturnString += " DEPT_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_NAME.value)); //부서명
        		sReturnString += " DEPT_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDEPT_GUBN.value)); //부서구분
        		sReturnString += " STDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDX_DATE.value)); //기준일자

        		// 저장 Argument 생성
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
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
        		this.fnc_Information(this.stInformation, this.dsTA_DEPTXM.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTA_DEPTXM.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("M1008"); //fn_KeyFieldDisible(dsTA_DEPTXM,0,dsTA_DEPTXM.rowposition);

        		this.fn_Search();
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		trace(" GBL_CUROBJ.name : " + application.GBL_CUROBJ.name);

        		if (application.GBL_CUROBJ.name == '') 
        		{
        			// 우편번호 조회 후 처리
        			this.fnc_MultiRowDisplayPost(this);
        		}
        		else 
        		{
        			// 코드명 조회 후 처리
        			this.fnc_MultiRowDisplay(this);
        		}
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e)
        {
        	// 시작
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;

        	if (nRow == -1) 
        	{
        		return;
        	}
        	// 끝

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
        	switch (obj.name) 
        	{
        		case "imgHelpCUST_NAME":
        			// 거래처

        			// 우편번호 비활성일 경우 바로 리턴
        			if (this.lookup("edtCUST_NAME").enable == false || this.dsTA_DEPTXM.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "CUST01"; //거래처 조회 POPUP
        			sInputValue = this.fnc_Trim(this.lookup("edtCUST_NAME").value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtCUST_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.lookup("edtCUST_CODE").set_value(sResponse[0]); //거래처코드
        				this.lookup("edtCUST_NAME").set_value(sResponse[1]); //거래처명
        			}
        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
        {
        	trace("fn_CodeNameDisplay --");
        	trace("fn_CodeNameDisplay --  obj.value  " + obj.value);
        	trace("fn_CodeNameDisplay --  obj.UserData  " + obj.UserData);

        
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = this.all[obj.name]; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (obj.name) 
        	{
        		case "edtCUST_NAME":
        			// 우편 번호
        			sSearchKind = "CUST01"; //우편번호 조회
        			application.GBL_REVOBJ1 = "edtCUST_CODE"; //우편번호를 받을
        			application.GBL_REVOBJ2 = "edtCUST_NAME"; //주소를 받을
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn);
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, obj.binddataset, e.col);
        }

        
        this.cmbSHRDEPT_GUBN_onitemchanged = function (obj,e)
        {
        	// trace( "=====>>>>> cmbSHRDEPT_GUBN_onitemchanged" );
        	if (this.cmbSHRDEPT_GUBN.value == '0' || this.cmbSHRDEPT_GUBN.value == '1') 
        	{
        		this.staSHRSTDX_DATE.set_visible(true);
        		this.calSHRSTDX_DATE.set_visible(true);
        	}
        	else 
        	{
        		this.staSHRSTDX_DATE.set_visible(false);
        		this.calSHRSTDX_DATE.set_visible(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_DEPTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsACCT_GUBN.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_DEPTXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDEPT_GUBN.addEventHandler("onitemchanged", this.cmbSHRDEPT_GUBN_onitemchanged, this);
            this.cmbSHRDEPT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAME0011.xfdl");
        this.loadPreloadList();
       
    };
}
)();
