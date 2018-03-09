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
                this.set_name("PDMB0010");
                this.set_titletext("외주업체실행예산등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,710,505);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBOXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("제작외주업체실행예산등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("제작관리>제작의뢰서등록>외주업체실행예산등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "87", "400", "21", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "539", "23", "8", null, this);
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_JOBOXM", "absolute", "0.85%", "112", null, "377", "2.54%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsPD_JOBOXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"제작번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"제작명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"외주업체코드\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"외주처명\"/><Cell col=\"5\" text=\"외주내용\"/><Cell col=\"6\" text=\"예상금액\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQX_IDXX\"/><Cell col=\"1\" text=\"bind:JOBN_NUMB\"/><Cell col=\"2\" text=\"bind:JOBN_NAME\"/><Cell col=\"3\" text=\"bind:OUTS_CODE\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:OUTS_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:ITEM_NAME\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:OUTS_AMTX\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NAME", "absolute", "264", "66", "257", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_imemode("none");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("staselectCUST_NAME", "absolute", "5", "66", "68", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("제작번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staselectCUST_NAME00", "absolute", "197", "66", "68", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("제작건명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NUMB", "absolute", "72", null, "104", "21", null, "418", this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 710, 505, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("외주업체실행예산등록");
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
        this.addIncludeScript("PDMB0010P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PDMB0010P02.xfdl", function() {
        /***************************************************************************************************
         * # Program:	PDMC0010P02 외주업체 실행예산등록을 위한 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.16		오세훈		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
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

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTFF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "PDMB0010";

        this.sJOBN_NUMB = this.parent.sJOBN_NUMB;
        this.sJOBN_NAME = this.parent.sJOBN_NAME;
        this.edtJOBN_NAME.set_value(this.sJOBN_NAME);
        this.edtJOBN_NUMB.set_value(this.sJOBN_NUMB);

        
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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
            
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
        	this.fnc_DatasetClear("dsPD_JOBOXM");

        	var sMethodName = "SEARCH20";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_JOBOXM=dsPD_JOBOXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_JOBOXM.insertRow(this.dsPD_JOBOXM.rowposition + 1);
        	this.dsPD_JOBOXM.set_rowposition(iRow);
        	this.dsPD_JOBOXM.setColumn(iRow, "JOBN_NUMB", this.sJOBN_NUMB);
        	this.dsPD_JOBOXM.setColumn(iRow, "JOBN_NAME", this.sJOBN_NAME);
        	this.dsPD_JOBOXM.setColumn(iRow, "OUTS_AMTX", 0);
        	
        	this.grdPD_JOBRXM.setCellPos(this.fnc_GridColumnIndex(this.grdPD_JOBRXM, 0));	
        	this.grdPD_JOBRXM.setFocus();
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPD_JOBOXM.deleteRow(this.dsPD_JOBOXM.rowposition);
        	this.grdPD_JOBOXM.setFocus();
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
        if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE20";
        	var sInDataSet  = "dsPD_JOBOXM=dsPD_JOBOXM:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPD_JOBOXM", this);
        		
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
         |  12.Text Box가 Focus를 받을 때      |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if ((this.fnc_DatasetChangeCheck("dsPD_JOBOXM"))) return this.fnc_Message("TMM023");
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        	if (this.dsPD_JOBOXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_JOBOXM.getColumn(this.dsPD_JOBOXM.rowposition, "OUTS_NAME")) + ") 외주업체";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        		// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_JOBOXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_JOBOXM.getRowCount(); i++) {
        		var cnt = i + 1;
        			
        			if (this.fnc_ToUpper(this.dsPD_JOBOXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBOXM.getColumn(i, "JOBN_NUMB"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "제작번호", this.dsPD_JOBOXM, i, '', '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBOXM.getColumn(i, "OUTS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "제작사코드", this.dsPD_JOBOXM, i, '', '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBOXM.getColumn(i, "OUTS_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "외주처", this.dsPD_JOBOXM, i, '', '');
        			}
        		
        		}
        		return true;
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------***-------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH20") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.sJOBN_NUMB);

        	} else if (sKind == "SAVE20" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
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
        	
        	if (sMethodName == "SEARCH20") {
        		
        		this.fnc_Information(this.stInformation, this.dsPD_JOBOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SAVE20") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	//기능없음
        }

        

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function(obj,e){

           var arrReturn = new Array(3);

        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = this.dsPD_TYPEXH.getColumn(this.dsPD_JOBOXM.rowposition, "JOBN_NUMB");	
        	

        	this.fnc_PopupClose(arrReturn);
        	
        }

        

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_JOBOXM") {
        	
        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "OUTS_NAME") || (sColumnID == "OUTS_NAME")) {
        			arrParam[0] = "PDM0006";
        			arrParam[1] = "";
        			arrParam[2] = "OUTS_NAME"; 
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_JOBOXM";
        			arrParam[5] = "OUTS_CODE,OUTS_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }
        this.dsPD_JOBOXM_oncolumnchanged = function(obj,e)
        {
        	//이범석 부장님 요청 외주처명칭도 수정하여 저장하게 요청 하셨슴. 2017.02.10 수정
        	//if (e.columnid == "OUTS_NAME" ) this.fn_HelpDialoge(this.grdPD_JOBOXM, "YES", e.oldvalue, e.columnid);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_JOBOXM.addEventHandler("oncolumnchanged", this.dsPD_JOBOXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdPD_JOBOXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_JOBOXM.addEventHandler("oncelldblclick", this.grdPD_JOBRXM_oncelldblclick, this);
            this.edtJOBN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtJOBN_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PDMB0010P02.xfdl");
        this.loadPreloadList();
       
    };
}
)();
