﻿(function()
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
                this.set_name("PDMB0010P01");
                this.set_titletext("제작실적분배율팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,510,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBRXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RSUT_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("제작실적분배율등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("제작관리>제작의뢰서등록>실적분배율등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "55", "400", "21", null, null, this);
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

            obj = new Grid("grdPD_JOBRXM", "absolute", "0.78%", "80", null, "409", "2.55%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsPD_JOBRXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"text\" text=\"ID\"/><Cell col=\"1\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"2\" style=\"background: ;\" text=\"담당부서코드\"/><Cell col=\"3\" style=\"background: ;\" text=\"담당부서명\"/><Cell col=\"4\" style=\"background: ;\" text=\"실적분배율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SEQX_IDXX\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:RSUT_RATE\" expandsize=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작실적분배율팝업");
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
        this.addIncludeScript("PDMB0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PDMB0010P01.xfdl", function() {
        /***************************************************************************************************
         * # Program:	PDMC0010P01 제작 실적 분배율 등록을 위한 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.14		오세훈		Initial Created.
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
        	this.fnc_DatasetClear("dsPD_JOBRXM");

        	var sMethodName = "SEARCH10";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_JOBRXM=dsPD_JOBRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_JOBRXM.insertRow(this.dsPD_JOBRXM.rowposition + 1);
        	this.dsPD_JOBRXM.set_rowposition(iRow);
        	this.dsPD_JOBRXM.setColumn(iRow, "JOBN_NUMB", this.sJOBN_NUMB);
        	this.dsPD_JOBRXM.setColumn(iRow, "JOBN_NAME", this.sJOBN_NAME);
        	this.dsPD_JOBRXM.setColumn(iRow, "RSUT_RATE", 100);
        	
        	this.grdPD_JOBRXM.setCellPos(this.fnc_GridColumnIndex(this.grdPD_JOBRXM, 0));	
        	this.grdPD_JOBRXM.setFocus();
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

        if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE10";
        	var sInDataSet  = "dsPD_JOBRXM=dsPD_JOBRXM:A";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPD_JOBRXM", this);
        		
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

        	if ((this.fnc_DatasetChangeCheck("dsPD_JOBRXM"))) return this.fnc_Message("TMM023");
        	
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        		// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_JOBRXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var sumrate = 0;
        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_JOBRXM.getRowCount(); i++) {
        	
        			var rate = 0;
        			sumrate += rate + parseInt(this.dsPD_JOBRXM.getColumn(i,"RSUT_RATE"));
        			
        			
        			if (this.fnc_ToUpper(this.dsPD_JOBRXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBRXM.getColumn(i, "JOBN_NUMB"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "제작번호", this.dsPD_JOBRXM, i, '', '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBRXM.getColumn(i, "DEPT_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "부서코드", this.dsPD_JOBRXM, i, '', '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBRXM.getColumn(i, "DEPT_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "부서명", this.dsPD_JOBRXM, i, '', '');
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBRXM.getColumn(i, "RSUT_RATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "실적분배율", this.dsPD_JOBRXM, i, '', '');
        			}
        	
        	}

        	if(sumrate != 100){
        		this.fnc_Message("TMM125","분배율은 100 가 넘거나 모자를 수 없습니다.");
        		return ;
        	}
        	
        	
        	for(var i = 0; i < this.dsPD_JOBRXM.rowcount; i ++){
        		var sDEPT_CODE = this.dsPD_JOBRXM.getColumn(i, "DEPT_CODE");
        		
        		for(var j =0; j < this.dsPD_JOBRXM.rowcount; j ++){
        			if(sDEPT_CODE == this.dsPD_JOBRXM.getColumn(j,"DEPT_CODE")){
        				if(i == j){
        				}else{
        					this.fnc_Message("TMM125","실적을 같은 부서로 입력할 수 없습니다..");
        					return ;
        				}
        			}
        		}
        	}
        	
        	
        	
        	
        	return true;
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------***-------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH10") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.sJOBN_NUMB);

        	} else if (sKind == "SAVE10" ) {
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
        	
        	if (sMethodName == "SEARCH10") {
        		this.fnc_Information(this.stInformation, this.dsPD_JOBRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE10") {
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
        	arrReturn[0] = this.dsPD_JOBRXM.getColumn(this.dsPD_JOBRXM.rowposition, "JOBN_NUMB");	
        	

        	this.fnc_PopupClose(arrReturn);
        	
        }

        

        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_JOBRXM") {
        	

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:DEPT_NAME") || (sColumnID == "DEPT_NAME")) {
        			arrParam[0] = "PDM0003";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_JOBRXM";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }
        this.dsPD_JOBRXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DEPT_NAME" ) this.fn_HelpDialoge(this.grdPD_JOBRXM, "YES", e.oldvalue, e.columnid);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_JOBRXM.addEventHandler("oncolumnchanged", this.dsPD_JOBRXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdPD_JOBRXM.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.grdPD_JOBRXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PDMB0010P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
