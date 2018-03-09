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
                this.set_name("FAMB0060");
                this.set_titletext("총계정원장");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPDD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPMM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"25\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"CODEID\">FA14</Col><Col id=\"DSNAME\">dsACCT_GUB2</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">브랜드</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_UTTN\" type=\"STRING\" size=\"7\"/><Column id=\"MAST_OFFI\" type=\"STRING\" size=\"4\"/><Column id=\"MAST_OFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CLSE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OFAR_SQMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OFAR_PYNG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"5\"/><Column id=\"DEPT_CNTX\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("총계정원장");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "8", "148", null, null, "8", "8", this);
            obj.set_taborder("8");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_taborder("43");
            obj.set_text("  일 별  ");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdTA_SLIPDD", "absolute", "4", "24", null, null, "4", "4", this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPDD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목명\"/><Cell col=\"1\" displaytype=\"text\" text=\"일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"차변\"/><Cell col=\"3\" displaytype=\"text\" text=\"대변\"/><Cell col=\"4\" displaytype=\"text\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:APPR_DATE\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BALA_AMNT\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "0", "0", "400", "20", null, null, this.Tab0.tab1);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_taborder("43");
            obj.set_text("  월 별  ");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "0", "0", "400", "20", null, null, this.Tab0.tab2);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdTA_SLIPMM", "absolute", "0", "24", null, null, "0", "0", this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPMM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목명\"/><Cell col=\"1\" displaytype=\"text\" text=\"년월\"/><Cell col=\"2\" displaytype=\"text\" text=\"차변\"/><Cell col=\"3\" displaytype=\"text\" text=\"대변\"/><Cell col=\"4\" displaytype=\"text\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:APPR_DATE\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BALA_AMNT\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.getSetter("taborder").set("28");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME_TO", "absolute", "493", "92", "208", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgHelpSHRACCT_INTL_TO", "absolute", "470", "92", "22", "22", null, null, this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            obj.set_cssclass("styHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL_TO", "absolute", "401", "92", "68", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "383", "92", "14", "22", null, null, this);
            obj.getSetter("taborder").set("32");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME_FR", "absolute", "170", "92", "208", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgHelpSHRACCT_INTL_FR", "absolute", "147", "92", "22", "22", null, null, this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            obj.set_cssclass("styHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL_FR", "absolute", "78", "92", "68", "22", null, null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "92", "60", "22", null, null, this);
            obj.getSetter("taborder").set("36");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "230", "68", "200", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("dsACCT_GUBN");
            obj.set_codecolumn("ACCT_GUBN");
            obj.set_datacolumn("OFFI_NAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "178", "68", "50", "22", null, null, this);
            obj.getSetter("taborder").set("38");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE_FR", "absolute", "499", "68", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSLIP_DATE_TO", "absolute", "616", "68", "90", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "596", "68", "14", "22", null, null, this);
            obj.getSetter("taborder").set("41");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "437", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("42");
            obj.set_text("회계기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "78", "68", "92", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static4", "absolute", "16", "68", "60", "22", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "16", null, this);
            obj.getSetter("taborder").set("45");
            obj.set_text("회계관리>총계정원장");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 956, 605, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("  일 별  ");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("white");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 968, 615, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("  월 별  ");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("white");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("총계정원장");
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
        this.addIncludeScript("FAMB0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0060.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        /* this.sBUTTONLIST = 'TTFFFFTT'; //공통기능정의(버튼순으로 T or F)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = ''; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = ''; //Form의 Location 정보
        this.sPACKAGENAME = 'erp.u.fam.b.ab.FAMB0060AB'; //해당 Form에서 사용 할 Package 명*/
        this.sBUTTONLIST = 'TTFFFFTT'; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = 'FAMB0060'; //해당 Form에서 사용 할 Package 명
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
        	var sOutDataSet = "dsTA_SLIPMM=dsTA_SLIPMM dsTA_SLIPDD=dsTA_SLIPDD ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.Tab0.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel(this.dsTA_SLIPDD); //취소 할 DataSet의 이름을 입력한다.
        	this.Tab0.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
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
        	var nDataset;

        	if (this.Tab0.tabindex == 0) 
        	{
        		nDataset = this.dsTA_SLIPDD;
        	}
        	else 
        	{
        		nDataset = this.dsTA_SLIPMM;
        	}

        	if (nDataset.getRowCount() <= 0) 
        	{
        		this.fnc_Message("M1046", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;
        	}

        	// File Location & File Name
        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "famb0060r" + (this.Tab0.tabindex + 1) + ".jrf"; //Report File Name

        	// Parameter
        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRSLIP_DATE_FR.value + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + this.calSHRSLIP_DATE_TO.value + "^";

        	if (!this.IsNull(this.edtSHRACCT_NAME_FR.value)) 
        	{
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + this.edtSHRACCT_INTL_FR.value + "^";
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg004,' + this.edtSHRACCT_NAME_FR.value + "^";

        		if (!this.IsNull(this.edtSHRACCT_NAME_TO.value)) 
        		{
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg005,' + this.edtSHRACCT_INTL_TO.value + "^";
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg006,' + this.edtSHRACCT_NAME_TO.value + "^";
        		}
        	}
        	else 
        	{
        		if (!this.IsNull(this.edtSHRACCT_NAME_TO.value)) 
        		{
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + nDataset.getMin("ACCT_INTL") + "^";
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg004,' + nDataset.getColumn(nDataset.findRow("ACCT_INTL", nDataset.getMin("ACCT_INTL")), "ACCT_NAME") + "^";

        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg005,' + this.edtSHRACCT_INTL_TO.value + "^";
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg006,' + this.edtSHRACCT_NAME_TO.value + "^";
        		}
        		else 
        		{
        			application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg007,전체^';
        		}
        	}

        	// Dataset
        	application.GBL_RPTDATASET = nDataset.name;
        	application.GBL_PRINT = 'Y'; //미리보기 사이즈 120%

        	// Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	// Report Viewer Call
        	// Dialog("popup::comReportViewer.xfdl" , "", -1, -1, "",-1, -1);
        	application.dialog("총계정원장", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	//this.fnc_GridSetting(this.Tab0.tab2.grdTA_SLIPMM);
        	this.fnc_GetComboDs(this.dsCombo);

        	// 공통콤보외 콤보 설정
        	//this.fnc_GetComboDs_AcctGubn(this.dsACCT_GUBN); //사업장 구분 콤보

        	this.calSHRSLIP_DATE_FR.set_value(this.fnc_AddDate(this.fnc_GetServerDateTime("DATE"), -30));
        	this.calSHRSLIP_DATE_TO.set_value(this.fnc_GetServerDateTime("DATE"));

        	this.Tab0.setFocus();
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if (this.fnc_IsDate(this.calSHRSLIP_DATE_FR.value) == false) 
        	{
        		this.fnc_Message("M1005", "조회시작일자"); //Message 처리 후
        		this.calSHRSLIP_DATE_FR.setFocus(); //품의 일자
        		return false;
        		// False 반환
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE_TO.value) == false) 
        	{
        		this.fnc_Message("M1005", "조회종료일자"); //Message 처리 후
        		this.calSHRSLIP_DATE_TO.setFocus(); //품의 일자
        		return false;
        		// False 반환
        	}

        	if (this.calSHRSLIP_DATE_FR.value > this.calSHRSLIP_DATE_TO.value) 
        	{
        		this.fnc_Message("M1017", "조회시작일자", "조회종료일자"); //Message 처리 후
        		this.calSHRSLIP_ENDT.setFocus(); //품의 일자
        		return false;
        		// False 반환
        	}

        	// 계정조회
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL_FR.value)) > 0 && this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL_TO.value)) > 0) 
        	{
        		if (this.edtSHRACCT_INTL_FR.value > this.edtSHRACCT_INTL_TO.value) 
        		{
        			this.fnc_Message("M1017", "계정과목시작", "계정과목종료"); //Message 처리 후
        			this.edtSHRACCT_NAME_TO.setFocus(); //품의 일자
        			return false;
        			// False 반환
        		}
        	}

        
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
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
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote(this.cmbSHRACCT_GUBN.value); //계정과목
        		sReturnString += " ACCT_INTL_FR=" + this.fnc_Quote(this.edtSHRACCT_INTL_FR.value); //호출할 Package의 Method명
        		sReturnString += " ACCT_INTL_TO=" + this.fnc_Quote(this.edtSHRACCT_INTL_TO.value); //기표일자
        		sReturnString += " SLIP_DATE_FR=" + this.fnc_Quote(this.calSHRSLIP_DATE_FR.value); //호출할 Package의 Method명
        		sReturnString += " SLIP_DATE_TO=" + this.fnc_Quote(this.calSHRSLIP_DATE_TO.value); //호출할 Package의 Method명
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
        		this.fnc_Information(this.Tab0.tab1.stInformation, this.dsTA_SLIPDD.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Information(this.Tab0.tab2.stInformation, this.dsTA_SLIPMM.rowcount, "SHR"); //fnc_Message("M1007", dsTA_SLIPNT.rowcount);                  //정상 종료 메세지
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 화면의 조회조건에 해당하는 콤보컨트롤의 index = 0 를 셋팅한다
        		// 추가시작
        		this.cmbSHRACCT_GUB1.set_index(0);
        		// 추가끝
        	}
        	else if (sMethodName == "SEARCHAG") 
        	{
        		this.dsACCT_GUBN.insertRow(0);
        		this.dsACCT_GUBN.setColumn(0, "ACCT_GUBN", "");
        		this.dsACCT_GUBN.setColumn(0, "OFFI_NAME", "전체");
        		this.cmbSHRACCT_GUBN.set_index(0);
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
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sInputValue1 = "";
        	var sInputValue2 = "";
        	var sInputValue3 = "";
        	var sInputValue4 = "";
        	var sResponse;
        	var sACCT_YEAR = this.fnc_SubStr(this.calSHRSLIP_DATE_FR.value, 0, 4);

        	switch (obj.name) 
        	{
        		case "ImgHelpSHRACCT_INTL_FR":
        			// 계정과목

        			sSearchKind = "ACCT02"; //사용자 코드 조회 POPUP
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRACCT_NAME_FR.value;
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME_FR); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL_FR.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME_FR.set_value(sResponse[1]); //계정명
        			}

        			break;
        		case "ImgHelpSHRACCT_INTL_TO":
        			// 계정과목

        			sSearchKind = "ACCT02"; //사용자 코드 조회 POPUP
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sInputValue = this.edtSHRACCT_NAME_TO.value;
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_NAME_TO); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL_TO.set_value(sResponse[0]); //계정
        				this.edtSHRACCT_NAME_TO.set_value(sResponse[1]); //계정명
        			}

        			break;
        	}
        }

        
        /*----------------------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +-----------------------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
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
        	var sInputValue2 = "";
        	var sInputValue3 = "";
        	var sInputValue4 = "";
        	var sACCT_YEAR = this.fnc_SubStr(this.calSHRSLIP_DATE_FR.value, 0, 4);

        	switch (obj.name) 
        	{
        		case "edtSHRACCT_NAME_FR":
        			// 계정과목
        			sSearchKind = "ACCT02"; //계정 정보
        			sCommonGubn = sACCT_YEAR;
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL_FR"; //계정 코드 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACCT_NAME_FR"; //계정 명칭 Text Object명
        			break;
        		case "edtSHRACCT_NAME_TO":
        			// 계정과목
        			sSearchKind = "ACCT02"; //계정 정보
        			sCommonGubn = sACCT_YEAR;
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL_TO"; //계정 코드 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACCT_NAME_TO"; //계정 명칭 Text Object명
        			break;
        	}

        
        	// 조회 서비스 실횅
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1, sInputValue2, sInputValue3, sInputValue4);
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, this.all[obj.name], e.cell);
        }

        
        /*-----------------------+
         |  잔액 세부현황 |
         +------------------------*/
        this.fn_OnCellDBLClick = function (obj,e)
        {
        	// trace( " obj.name : " + obj.name ) ;

        	if (obj.name == "grdTA_SLIPDD") 
        	{
        		this.fnc_PopFAMB0040(this.cmbSHRACCT_GUB1.value, this.cmbSHRACCT_GUBN.value, this.calSHRSLIP_DATE_FR.value, this.calSHRSLIP_DATE_TO.value, this.dsTA_SLIPDD.getColumn(e.row, 'ACCT_INTL'), this.dsTA_SLIPDD.getColumn(e.row, 'ACCT_NAME'));
        	}
        	else if (obj.name == "grdTA_SLIPMM") 
        	{
        		this.fnc_PopFAMB0040(this.cmbSHRACCT_GUB1.value, this.cmbSHRACCT_GUBN.value, this.calSHRSLIP_DATE_FR.value, this.calSHRSLIP_DATE_TO.value, this.dsTA_SLIPMM.getColumn(e.row, 'ACCT_INTL'), this.dsTA_SLIPMM.getColumn(e.row, 'ACCT_NAME'));
        	}
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
            this.Tab0.tab1.grdTA_SLIPDD.addEventHandler("oncelldblclick", this.fn_OnCellDBLClick, this);
            this.Tab0.tab2.grdTA_SLIPMM.addEventHandler("oncelldblclick", this.fn_OnCellDBLClick, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_TO.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.ImgHelpSHRACCT_INTL_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME_FR.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.ImgHelpSHRACCT_INTL_FR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE_FR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMB0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
