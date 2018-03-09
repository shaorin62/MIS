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
                this.set_name("HATC0040P01");
                this.set_titletext("휴가내역(팝업)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,700,391);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_HDAPXH", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_RESN\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_DAYS\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_USED\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdAT_HDAPXH", "absolute", "8", "126", null, null, "8", "10", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsAT_HDAPXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_scrollbars("autovert");
            obj.set_tabstop("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"신청일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"휴가구분\"/><Cell col=\"2\" colspan=\"2\" text=\"휴가기간\"/><Cell col=\"4\" rowspan=\"2\" text=\"휴가일수\"/><Cell col=\"5\" rowspan=\"2\" text=\"휴가사유\"/><Cell row=\"1\" col=\"2\" text=\"시작일\"/><Cell row=\"1\" col=\"3\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:APPR_DATE\"/><Cell col=\"1\" text=\"bind:WORK_GUBN\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:STRT_DATE\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENDX_DATE\"/><Cell col=\"4\" text=\"bind:HOLY_DAYS\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:HOLY_RESN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "58", null, "43", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "7", "415", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "8", "415", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "320", "40", "56", "15", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "296", "101", "56", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "23", "120", "216", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "7", "105", "206", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "35", "69", "98", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("휴가기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRHOLY_DATE1", "absolute", "105", "69", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "207", "69", "14", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRHOLY_DATE2", "absolute", "222", "69", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static31", "absolute", "351", "69", "68", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "393", "69", "80", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "475", "69", "21", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "498", "69", "100", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("41");
            obj.set_text("휴가신청조회 팝업");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "23", "8", null, this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("43");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "564", "54", "128", "4", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 391, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("휴가내역(팝업)");
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
        this.addIncludeScript("HATC0040P01.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("HATC0040P01.xfdl", "script::lib_gfn.xjs");
        this.registerScript("HATC0040P01.xfdl", function() {
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
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_gfn.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "FTFFFFFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATC0040P01"; //해당 Form에서 사용 할 Package 명

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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	
        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.calSHRHOLY_DATE1.set_value(this.fnc_SubStr(iNowDate, 0, 6)+"01");
        	this.calSHRHOLY_DATE2.set_value(this.fnc_SubStr(iNowDate, 0, 6)+""+this.fnc_GetLastDayOfMonth(iNowDate));
        	
        	
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 
        			this.imgHelpEMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
        			break;
        	}

        }
         
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsAT_HDAPXH");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsAT_HDAPXH=dsAT_HDAPXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_HDAPXH.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e){
        	this.close();
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){
        	//기능없음.
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e){

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	
        	return this.fnc_FormUnloadCheck(obj, this);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)     |
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function (){
        	
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_HDAPXH")) {
        		return this.fnc_Message("TMM023");
        	}

        	if (this.fnc_IsDate(this.calSHRHOLY_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "휴가시작일", this.calSHRHOLY_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRHOLY_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "휴가종료일", this.calSHRHOLY_DATE2);
        	}

        	if (this.calSHRHOLY_DATE1.value > this.calSHRHOLY_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM022", "휴가시작일,휴가종료일자", this.calSHRHOLY_DATE2);
        	}
        	
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){

        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        		sReturnString += " HOLY_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRHOLY_DATE1.value)); 
        		sReturnString += " HOLY_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRHOLY_DATE2.value)); 
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        	}
        	
        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){
        	
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00"){
        		this.fnc_Information(this.stInformation, this.dsAT_HDAPXH.rowcount, "SHR"); 
        		this.fnc_Message("TMM018", this.dsAT_HDAPXH.rowcount);
        		
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

                arrParam[0] = "HRM0001"; //HRM0001                               
                arrParam[1] = "";                               
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "Y";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

           }     
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	//var iColumnCount = this.dsTM_NWPOST.getColCount();
        	var arrReturn = new Array(3);

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsAT_HDAPXH.getColumn(this.dsAT_HDAPXH.rowposition, "DOCU_IDXX");
        	arrReturn[1] = this.dsAT_HDAPXH.getColumn(this.dsAT_HDAPXH.rowposition, "APPR_SEQN");
        	arrReturn[2] = this.dsAT_HDAPXH.getColumn(this.dsAT_HDAPXH.rowposition, "DOCU_IDXX_SEQN");
        	arrReturn[3] = this.dsAT_HDAPXH.getColumn(this.dsAT_HDAPXH.rowposition, "MGAM_GUBN1");
        	arrReturn[4] = this.dsAT_HDAPXH.getColumn(this.dsAT_HDAPXH.rowposition, "MGAM_GUBN2");
        		
        	this.fnc_PopupClose(arrReturn);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdAT_HDAPXH.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATC0040P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
