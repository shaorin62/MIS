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
                this.set_name("HATF0070P01");
                this.set_classname("passwordChange");
                this.set_titletext("유류대 계산");
                this._setFormPosition(0,0,520,188);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_GASBCT", this);
            obj._setContents("<ColumnInfo><Column id=\"STDR_DSTN\" size=\"10\" type=\"INT\"/><Column id=\"OILP_UNTP\" size=\"10\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static28", "absolute", "15", "47", "490", "33", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "15", "79", "490", "33", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "15", "15", "490", "33", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "111", "490", "33", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "135", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", "443", "152", "62", "24", null, null, this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "378", "152", "62", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "505", "0", "15", "135", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "441", "144", "64", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "441", "176", "64", "12", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "232", "117", "12", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "111", "90", "33", null, null, this);
            obj.set_taborder("8");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_TRAP_CARM", "absolute", "110", "117", "120", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "15", "90", "33", null, null, this);
            obj.set_taborder("22");
            obj.set_text("유류대");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "15", "47", "90", "33", null, null, this);
            obj.set_taborder("24");
            obj.set_text("통행료");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "15", "79", "90", "33", null, null, this);
            obj.set_taborder("26");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_STDR_DSTN", "absolute", "208", "21", "35", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "249", "21", "14", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_OILP_UNTP", "absolute", "264", "21", "75", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "343", "21", "37", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("원  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_OILP_SUMP", "absolute", "377", "21", "95", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_mask("###,###");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "475", "21", "20", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_BSRP_DSTN", "absolute", "110", "21", "55", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "169", "21", "36", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("KM  /");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "232", "53", "12", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_PASS_AMNT", "absolute", "110", "53", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_value("0");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "232", "85", "12", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ETC_AMNT", "absolute", "110", "85", "120", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_value("0");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC_REMK", "absolute", "248", "85", "224", "21", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 520, 188, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("유류대 계산");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","mae_STDR_DSTN","value","dsAT_GASBCT","STDR_DSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","mae_OILP_UNTP","value","dsAT_GASBCT","OILP_UNTP");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HATF0070P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0070P01.xfdl", function() {
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "FTFFFFFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0070P01"; //해당 Form에서 사용 할 Package 명
        this.sBSRP_DATE1   = "";

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

        	this.sBSRP_DATE1 = this.parent.oBSRP_DATE1;
        trace("  HATF0070P01.fn_FormLoadSetting.sBSRP_DATE1 = "+this.sBSRP_DATE1);

        	this.fnc_DatasetClear('dsAT_GASBCT');
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_GASBCT=dsAT_GASBCT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	//기능없음
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
        	//기능없음
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	//기능없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        		sReturnString += " BSRP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.sBSRP_DATE1)); 
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
        		
        		if(this.dsAT_GASBCT.rowcount < 1){
        			alert("유류대 정보가 없습니다.\n관리부서에 문의 바랍니다.");
        			this.fnc_PopupClose("");
        		}

        		this.mae_STDR_DSTN.set_value(this.dsAT_GASBCT.getColumn(0, "STDR_DSTN"));
        		this.mae_OILP_UNTP.set_value(this.dsAT_GASBCT.getColumn(0, "OILP_UNTP"));
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var arrReturn = new Array(3);
        	var strReturn = "";

        	var sBSRP_DSTN = this.fnc_AddComma(this.mae_BSRP_DSTN.value);
        	var sSTDR_DSTN = this.fnc_AddComma(this.mae_STDR_DSTN.value);
        	var sOILP_UNTP = this.fnc_AddComma(this.mae_OILP_UNTP.value);
        	var sOILP_SUMP = this.fnc_AddComma(this.mae_OILP_SUMP.value);
        	var sPASS_AMNT = this.fnc_AddComma(this.mae_PASS_AMNT.value);
        	var sETC_AMNT = this.fnc_AddComma(this.mae_ETC_AMNT.value);
        	var sETC_REMK = (this.edt_ETC_REMK.value==null)?"":this.edt_ETC_REMK.value;
        	var sTRAP_CARM = this.fnc_AddComma(this.mae_TRAP_CARM.value);

        	if(this.mae_BSRP_DSTN.value == 0 && this.mae_ETC_AMNT.value == 0){
        		arrReturn[0] = 0;
        		arrReturn[0] = strReturn;
        		arrReturn[0] = 0;
        	} else {
        		if(this.mae_BSRP_DSTN.value == 0 && this.mae_ETC_AMNT.value > 0){
        			strReturn = "\n업무용 : "+sPASS_AMNT+"원(통행료) + "+sETC_AMNT+"원(기타/"+sETC_REMK+") = "+sTRAP_CARM+"원";
        		} else {
        			strReturn = "\n자가차 : {("+sBSRP_DSTN+"km / "+sSTDR_DSTN+") * "+sOILP_UNTP+"원(유류단가)}";
        			strReturn = strReturn+" + "+sPASS_AMNT+"원(통행료) + "+sETC_AMNT+"원(기타/"+sETC_REMK+") = "+sTRAP_CARM+"원";
        		}
        		
        		trace("fn_Confirm.arrReturn[0] = "+this.mae_TRAP_CARM.value);
        		trace("fn_Confirm.arrReturn[2] = "+strReturn);
        		// 반환 할 자료(Array) 만들기
        		arrReturn[0] = this.mae_TRAP_CARM.value;
        		arrReturn[1] = strReturn;
        		arrReturn[2] = this.mae_BSRP_DSTN.value;
        	}

        	this.fnc_PopupClose(arrReturn);

        }

        
        this.mae_BSRP_DSTN_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_TRAP_CARM();
        }

        this.mae_PASS_AMNT_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_TRAP_CARM();
        }

        this.mae_ETC_AMNT_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_TRAP_CARM();
        }

        this.fn_SUM_TRAP_CARM = function()
        {
        	var nBSRP_DSTN = parseInt(this.mae_BSRP_DSTN.value);
        	var nSTDR_DSTN = parseInt(this.mae_STDR_DSTN.value);
        	var nOILP_UNTP = parseInt(this.mae_OILP_UNTP.value);
        	var nOILP_SUMP = Math.floor((nBSRP_DSTN / nSTDR_DSTN) * nOILP_UNTP / 10) * 10;
        	this.mae_OILP_SUMP.set_value(nOILP_SUMP);

        	var nPASS_AMNT = parseInt(this.mae_PASS_AMNT.value);
        	var nETC_AMNT = parseInt(this.mae_ETC_AMNT.value);
        	var nTRAP_CARM = nOILP_SUMP + nPASS_AMNT + nETC_AMNT
        	this.mae_TRAP_CARM.set_value(nTRAP_CARM);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.btnSubmit.addEventHandler("onclick", this.fn_Confirm, this);
            this.mae_BSRP_DSTN.addEventHandler("ontextchanged", this.mae_BSRP_DSTN_ontextchanged, this);
            this.mae_PASS_AMNT.addEventHandler("ontextchanged", this.mae_PASS_AMNT_ontextchanged, this);
            this.mae_ETC_AMNT.addEventHandler("ontextchanged", this.mae_ETC_AMNT_ontextchanged, this);

        };

        this.loadIncludeScript("HATF0070P01.xfdl");

       
    };
}
)();
