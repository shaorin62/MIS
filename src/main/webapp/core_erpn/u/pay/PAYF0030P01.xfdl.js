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
                this.set_name("PAYF0030P01");
                this.set_titletext("퇴직금계산처리(퇴직금계산)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,338);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_RTPAYA", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAY1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RTPY_TAMT\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"PAY1_AMOT_ORG\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT_ORG\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT_ORG\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT_ORG\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RTPY_TAMT_ORG\" size=\"255\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTBONA", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PAYX_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT_ORG\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnClose", "absolute", null, "302", "62", "24", "14", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_cursor("hand");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "15", "10", "209", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("급여조정");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPAYA", "absolute", "15", "31", null, "263", "385", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsPY_RTPAYA");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"수당\"/><Cell col=\"2\" text=\"M\"/><Cell col=\"3\" text=\"M+1\"/><Cell col=\"4\" text=\"M+2\"/><Cell col=\"5\" text=\"M+3\"/><Cell col=\"6\" text=\"합계\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:EXPD_NAME\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" text=\"기본금액\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAY1_AMOT_ORG\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAY2_AMOT_ORG\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAY3_AMOT_ORG\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAY4_AMOT_ORG\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTPY_TAMT_ORG\"/><Cell row=\"1\" col=\"1\" text=\"조정금액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY1_AMOT\" editlimit=\"15\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY2_AMOT\" editlimit=\"15\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY3_AMOT\" editlimit=\"15\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY4_AMOT\" editlimit=\"15\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTPY_TAMT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY1_AMOT')+dataset.getSum('PAY1_AMOT_ORG')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY2_AMOT')+dataset.getSum('PAY2_AMOT_ORG')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY3_AMOT')+dataset.getSum('PAY3_AMOT_ORG')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY4_AMOT')+dataset.getSum('PAY4_AMOT_ORG')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('RTPY_TAMT')+dataset.getSum('RTPY_TAMT_ORG')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTBONA", "absolute", "635", "31", null, "263", "15", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPY_RTBONA");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"95\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급년월\"/><Cell col=\"1\" colspan=\"2\" text=\"수당\"/><Cell col=\"3\" text=\"상여금액\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;date&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" rowspan=\"2\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:EXPD_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" text=\"기본금액\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYX_AMOT_ORG\"/><Cell row=\"1\" col=\"2\" text=\"조정금액\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAYX_AMOT\" editlimit=\"15\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYX_AMOT')+dataset.getSum('PAYX_AMOT_ORG')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnPY_RTBONAADD", "absolute", null, "6", "62", "21", "80", null, this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnPY_RTBONADEL", "absolute", null, "6", "62", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "635", "10", "209", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("상여조정");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "302", "62", "24", "79", null, this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 338, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직금계산처리(퇴직금계산)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PAYF0030P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0030P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0030P01 퇴직금계산처리(퇴직금계산)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		안윤준		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME 	= "PAYF0030";
        this.sEMPL_NUMB		= this.parent.sEMPL_NUMB;
        this.sRECE_SEQN		= this.parent.sRECE_SEQN;
        this.sCAL1_YMTH 	= this.parent.sCAL1_YMTH;
        this.sCAL2_YMTH 	= this.parent.sCAL2_YMTH;
        this.sCAL3_YMTH 	= this.parent.sCAL3_YMTH;
        this.sCAL4_YMTH 	= this.parent.sCAL4_YMTH;
        this.sCLSE_YSNO 	= this.parent.sCLSE_YSNO;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.grdPY_RTPAYA.setCellProperty("Head", 1, "text", this.sCAL1_YMTH);
        	this.grdPY_RTPAYA.setCellProperty("Head", 2, "text", this.sCAL2_YMTH);
        	this.grdPY_RTPAYA.setCellProperty("Head", 3, "text", this.sCAL3_YMTH);
        	this.grdPY_RTPAYA.setCellProperty("Head", 4, "text", this.sCAL4_YMTH);
        	
        	if ( this.sCLSE_YSNO == "Y" ) {
        		this.btnPY_RTBONAADD.set_enable(false);
        		this.btnPY_RTBONADEL.set_enable(false);
        		this.btnSave.set_enable(false);
        		this.grdPY_RTBONA.set_readonly(true);
        		this.grdPY_RTPAYA.set_readonly(true);
        	}
        	
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_RTBONA,dsPY_RTPAYA");
        	
        	var sMethodName = "POPSEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_RTBONA=dsPY_RTBONA dsPY_RTPAYA=dsPY_RTPAYA";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var nRow = this.dsPY_RTBONA.insertRow(this.dsPY_RTBONA.rowposition + 1);
        	this.dsPY_RTBONA.setColumn(nRow, "EMPL_NUMB", this.sEMPL_NUMB);
        	this.dsPY_RTBONA.setColumn(nRow, "RECE_SEQN", this.sRECE_SEQN);
        	this.grdPY_RTBONA.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck(this.dsPY_RTBONA)) this.dsPY_RTBONA.deleteRow(this.dsPY_RTBONA.rowposition);

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_RTPAYA,dsPY_RTBONA");

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.dsPY_RTPAYA.set_updatecontrol(false);
        	for ( var i=0; i<this.dsPY_RTPAYA.getRowCount(); i++ ) {
        		this.dsPY_RTPAYA.setRowType(i, Dataset.ROWTYPE_INSERT);
        	}
        	this.dsPY_RTPAYA.set_updatecontrol(true);
        	
        	this.dsPY_RTBONA.set_updatecontrol(false);
        	for ( var i=0; i<this.dsPY_RTBONA.getRowCount(); i++ ) {
        		if ( this.fnc_ToUpper(this.dsPY_RTBONA.getRowType(i)) != Dataset.ROWTYPE_DELETE ) {
        			this.dsPY_RTBONA.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	this.dsPY_RTBONA.set_updatecontrol(true);
        	
        	var sMethodName = "POPSAVE00";
        	var sInDataSet 	= "dsPY_RTPAYA=dsPY_RTPAYA:U dsPY_RTBONA=dsPY_RTBONA:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_RTBONA,dsPY_RTPAYA", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsPY_RTBONA,dsPY_RTPAYA")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (objds) {
        	var row = objds.rowposition;
        	if ( objds.getRowType(row) == Dataset.ROWTYPE_INSERT ){
        		if ( objds.name == "dsPY_RTBONA" ){
        			sQuestionText = "수당 : ";
        		} else {
        			return;
        		}
        	} else {
        		if ( objds.name == "dsPY_RTBONA" ){
        			sQuestionText = "수당 : "	+ this.dsPY_RTBONA.getColumn(row, "EXPD_NAME");
        			
        		} else {
        			return;
        		}
        	}
        	
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsPY_RTBONA,dsPY_RTPAYA")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsPY_RTBONA.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsPY_RTBONA.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTBONA.getColumn(i, "PAYX_DATE"))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "지급년월", this.dsPY_RTPAYA, i, this.grdPY_RTBONA, "PAYX_YMTH");
        		}
        		
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "POPSEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.sEMPL_NUMB);
        		sReturnString += " RECE_SEQN=" 	+ this.fnc_Quote(this.sRECE_SEQN);
        		
        	} else if ( sKind == "POPSAVE00" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}
        	
        	return sReturnString;

        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "POPSEARCH00") {
        		this.fnc_Message("TMM018", this.dsPY_RTPAYA.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "POPSAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();

        	if ( obj.name == "grdPY_RTBONA" ) { // 상여
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME" || sColumnID == "EXPD_NAME") { 
        			arrParam[0] = "PAY0012";
        			arrParam[1] = "1,A,1";
        			arrParam[2] = "EXPD_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_RTBONA";
        			arrParam[5] = "EXPD_CODE,EXPD_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        		
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-----------------------+
         |  상여조정 수당 변경 시  |
         +------------------------*/
        this.dsPY_RTBONA_oncolumnchanged = function(obj,e) {
        	if ( e.columnid == "EXPD_NAME" ) {
        		this.fn_HelpDialoge(this.grdPY_RTBONA, "YES" ,e.oldvalue, e.columnid);
        	}
        }

        /*-----------------------+
         |  급여조정 수당 변경 시  |
         +------------------------*/
        this.dsPY_RTPAYA_oncolumnchanged = function(obj,e) {
        	if ( e.columnid == "PAY1_AMOT" || e.columnid == "PAY2_AMOT" 
        	  || e.columnid == "PAY3_AMOT" || e.columnid == "PAY4_AMOT" ) {
        		var sPAY1_AMOT = nexacro.toNumber(this.dsPY_RTPAYA.getColumn(e.row, "PAY1_AMOT"));
        		var sPAY2_AMOT = nexacro.toNumber(this.dsPY_RTPAYA.getColumn(e.row, "PAY2_AMOT"));
        		var sPAY3_AMOT = nexacro.toNumber(this.dsPY_RTPAYA.getColumn(e.row, "PAY3_AMOT"));
        		var sPAY4_AMOT = nexacro.toNumber(this.dsPY_RTPAYA.getColumn(e.row, "PAY4_AMOT"));
        		var sRTPY_TAMT = sPAY1_AMOT + sPAY2_AMOT + sPAY3_AMOT + sPAY4_AMOT;
        		this.dsPY_RTPAYA.setColumn(e.row, "RTPY_TAMT", sRTPY_TAMT);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTPAYA.addEventHandler("oncolumnchanged", this.dsPY_RTPAYA_oncolumnchanged, this);
            this.dsPY_RTBONA.addEventHandler("oncolumnchanged", this.dsPY_RTBONA_oncolumnchanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.btnClose.addEventHandler("onclick", this.fn_End, this);
            this.grdPY_RTPAYA.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_RTBONA.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnPY_RTBONAADD.addEventHandler("onclick", this.fn_Input, this);
            this.btnPY_RTBONADEL.addEventHandler("onclick", this.fn_Delete, this);
            this.btnSave.addEventHandler("onclick", this.fn_Save, this);

        };

        this.loadIncludeScript("PAYF0030P01.xfdl");

       
    };
}
)();
