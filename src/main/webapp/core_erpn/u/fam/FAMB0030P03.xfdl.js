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
                this.set_name("FAMC0017");
                this.set_titletext("미결정산전표내역조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VACD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_DISP\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_ACDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BALA_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BANJ_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT", "absolute", "15", "103", null, null, "15", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\" band=\"left\"/><Column size=\"96\" band=\"left\"/><Column size=\"95\" band=\"left\"/><Column size=\"95\" band=\"left\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"61\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"미결정산번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"미결정산회계일\"/><Cell col=\"2\" displaytype=\"text\" text=\"미결정산금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"4\" displaytype=\"text\" text=\"미결정산적요\"/><Cell col=\"5\" displaytype=\"text\" text=\"발생번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"작성일\"/><Cell col=\"7\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"8\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"9\" text=\"관리항목\"/><Cell col=\"10\" displaytype=\"text\" style=\"selectline:가;\" text=\"관리항목값\"/><Cell col=\"11\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:BANJ_DISP\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;\" text=\"bind:BANJ_ACDT\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BANJ_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BANJ_REMK\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DISP_NUMB\" suppress=\"0\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:SLIP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACCT_DATE\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" suppress=\"0\"/><Cell col=\"9\" text=\"bind:COND_NAME\" suppress=\"0\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COND_VANM\" suppress=\"0\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\" suppress=\"0\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합    계\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BANJ_AMNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"4\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "82", "304", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "43", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_LINE", "absolute", "262", "46", "60", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "35", "46", "73", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("발생번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "249", "46", "21", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRSLIP_NUMB", "absolute", "103", "46", "140", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("background", "disabled", "#f4f4f4ff");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "568", "31", "110", "4", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "541", "0", "110", "8", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, "15", "461", null, "0", this);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "38", "30", "31", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "78", "80", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, null, "15", "461", "0", "0", this);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "439", null, "110", "15", null, "0", this);
            obj.set_taborder("20");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("미결정산전표내역조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("medSLIP_PGBN_value","edtSHRSLIP_NUMB","value","dsTA_SLIPXM","SLIP_NUMB");
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
        this.addIncludeScript("FAMB0030P03.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0030P03.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMB0030P03";
        this.edtSHRSLIP_NUMB.set_value(this.parent.sSHRDISP_NUMB);
        this.edtSHRSLIP_LINE.set_value(this.parent.sSLIP_LINE);

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
         /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.edtSHRSLIP_NUMB);
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"DISP_NUMB", "Y");	//행번호포함
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"BANJ_DISP", "Y");	//행번호포함
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.fn_Search();
        	
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_SLIPNT"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음	
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	this.fnc_FormUnload(obj,e);
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {	
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!   |
         +---------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_NUMB.value));
        		sReturnString += " SLIP_LINE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_LINE.value));

        	} 
        	
        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        /*--------------------------------------+
         |  Transaction 후 Post Process!       |
         +--------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------------------------------+
         |  그리드에서 더블 클릭 시 선택과 동일한 작업 !  |
         +------------------------------------------------*/
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {
        		
        	//this.fn_Confirm();	//종료
        	var sColumnName = this.fnc_getColId(obj, e.cell);
        	if (sColumnName == "BANJ_DISP") {
        		var sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BANJ_NUMB");
        		var sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BANJ_LINE");
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        	
        }

        /*--------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (){
        	
        	var sReturn = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DISP_NUMB");
        	this.close(sReturn);
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.edtSHRSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMB0030P03.xfdl");
        this.loadPreloadList();
       
    };
}
)();
