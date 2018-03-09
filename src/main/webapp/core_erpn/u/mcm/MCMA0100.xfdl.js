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
                this.set_name("MCMA0100");
                this.set_titletext("매체거래명세표파일관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TRFLXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("매체거래명세표 파일관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("매체기준>기준정보");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_TRFLXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("67");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMD_TRFLXM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" text=\"파일번호\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"파일명\"/><Cell col=\"3\" style=\"background: ;\" text=\"등록자\"/><Cell col=\"4\" style=\"background: ;\" text=\"등록일자\"/><Cell col=\"5\" text=\"파일업로드\"/><Cell col=\"6\" text=\"파일다운로드\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:FILE_NUMB\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" text=\"bind:FILE_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"파일업로드\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"파일다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "347", "71", "48", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("파일명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFILE_NAME", "absolute", "401", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("116");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("119");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "318", "61", "40", "41", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("121");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("124");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "393", "61", "8", "41", null, null, this);
            obj.set_taborder("125");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "70", "66", "22", null, null, this);
            obj.set_taborder("126");
            obj.set_text("등록일자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "90", "61", "8", "41", null, null, this);
            obj.set_taborder("127");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSHRINST_DATE00", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static29", "absolute", "203", "71", "14", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSHRINST_DATE01", "absolute", "218", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("130");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매체거래명세표파일관리");
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
        this.addIncludeScript("MCMA0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0100.xfdl", function() {
         /***************************************************************************************************
          * # Program : MCMA0100 매체거래명세표파일관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.09		조민희 	Initial Created.
         *   
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
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0100";
        this.sKeyValue    = new Array();

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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	//this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRINST_DATE00.set_value(this.fnc_SubStr(this.fnc_AddDate(this.fnc_GetServerDateTime("DATE"),-7),0,8));
        	this.edtSHRINST_DATE01.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
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
        	this.fnc_DatasetClear("dsMD_TRFLXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_TRFLXM=dsMD_TRFLXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_TRFLXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsMD_TRFLXM.insertRow(this.dsMD_TRFLXM.rowposition + 1);
        	this.dsMD_TRFLXM.set_rowposition(iRow);
        	this.dsMD_TRFLXM.setCellPos(this.fnc_GridColumnIndex(this.grdMD_TRFLXM, 0));
        	this.dsMD_TRFLXM.setFocus();
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_TRFLXM.rowcount ; i++){
        		if(this.dsMD_TRFLXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_TRFLXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_TRFLXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_TRFLXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsMD_TRFLXM");
        	this.grdMD_TRFLXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsMD_TRFLXM.getColumn(this.dsMD_TRFLXM.rowposition,"FILE_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsMD_TRFLXM=dsMD_TRFLXM:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdMD_TRFLXM.setFocus();
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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_TRFLXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

        } 

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsMD_TRFLXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsMD_TRFLXM,dsFL_ATTACH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_TRFLXM.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsMD_TRFLXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TRFLXM.getColumn(i, "FILE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "파일명", this.dsMD_TRFLXM, i, this.dsMD_TRFLXM, 'FILE_NAME');
        		}	
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        	if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var grdMD_TRFLXM = this.grdMD_TRFLXM;
        		var sQuestionText  = "파일명 : ("+grdMD_TRFLXM.getCellText(grdMD_TRFLXM.currentrow, grdMD_TRFLXM.getBindCellIndex( "body", "FILE_NAME" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " INS1_DATE=" + this.fnc_Quote(this.edtSHRINST_DATE00.value); //등록일자
         		sReturnString += " INS2_DATE=" + this.fnc_Quote(this.edtSHRINST_DATE01.value); //등록일자
         		sReturnString += " FILE_NAME=" + this.fnc_Quote(this.edtSHRFILE_NAME.value); //파일명
         		
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*-------------------------------------+
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation1, this.dsMD_TRFLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_TRFLXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {	
        	}
        	
        	
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_TRFLXM_onheadclick = function(obj,e)
        {
        		if (e.cell == 0) {
        		var v_Colid = this.grdMD_TRFLXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TRFLXM.getRowCount(); i++) {
        			this.dsMD_TRFLXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_TRFLXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*----------------+
         | 	 파일업로드  |
         +----------------*/
        this.grdMD_TRFLXM_oncellclick = function(obj,e)
        {
        	
        	if(this.grdMD_TRFLXM.getCellText(e.row,e.col)=="파일업로드") {
        		//그리드 셀 이미지 클릭시 그리드로우와 데이타셋 로우가 같은지 확인(같음)
        		//파일업로드 팝업창 호출
        		this.fnc_CallFileUplod(3,"doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml","fn_CallFileUplodCallback");
        		
        	} else if(this.grdMD_TRFLXM.getCellText(e.row,e.col)=="파일다운로드") {
        		//다운로드 펑션
        		var filePath   = this.dsMD_TRFLXM.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsMD_TRFLXM.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsMD_TRFLXM.getColumn(e.row,"LFIL_NAME");

        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}		
        	}
        }

        //공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
        //form 새로 꺼내야 한다.
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	//dataset이 없으면 이 함수가 실행되지 않는다.
        	//tmp에 업로드된 파일리스트가 담긴 dataset object 
        	
        	//기존의 데이터를 삭제해야 하는데.
        	 
        	//var objds = form.components["dsFL_ATTACH"];
        	var objds = form.dsFL_ATTACH;
        	//var objmainds =form.components["dsTM_EXCLXM"];
        	var objmainds =form.dsMD_TRFLXM;
        	
        	var objmaingrd = form.grdMD_TRFLXM;
        	
        	//기존에 등록된 데이터는 삭제로 등록한다.
        	if((objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != "") && (objmainds.getColumn(objmainds.rowposition, "PFIL_NAME") != null )){
        		
        		var preFileName = objmainds.getColumn(objmainds.rowposition, "PFIL_NAME");
        		
        		// 만약 기존에 등록된 데이터가 이전 업로드에 업로드 하였다면(이전에 파일 업로드 후 저장하지는 않았다면...)
        		// dsFL_ATTACH 데이터셋에도 존재한다. 방금 업로드 했기에...
        		var findRow = objds.findRow("PFIL_NAME", preFileName);
        		
        		if (findRow == -1) {
        			
        			// 기존에 엑셀양식파일이 업로드 데이터셋에 존재하지 않는 경우(업로드를 한 것이 아니었다면...)
        			var iRow = objds.addRow();
        			objds.setColumn(iRow, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        			objds.setColumn(iRow, "PFIL_NAME", objmainds.getColumn(objmainds.rowposition, "PFIL_NAME"));
        			objds.setColumn(iRow, "FILE_PATH", objmainds.getColumn(objmainds.rowposition, "FILE_PATH"));
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(iRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(iRow, Dataset.ROWTYPE_DELETE);
        			}
        		
        		} else {
        			
        			if(objds.updatecontrol){
        				//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        				//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        				//그래서 addRow deleteRow로 변경함.	
        				objds.deleteRow(findRow);
        			}else{
        				//첨부파일 리스트가 바인드 되지 않은 화면은  
        				////addRow 후 deleteRow를 하면 로우가 제거 되서
        				//updatecontrol: false로 하고    setRowType 로 설정한다.
        				objds.setRowType(findRow, Dataset.ROWTYPE_DELETE);
        			}
        			
        		}
        	}
        	
        	//업무테이블에 해당 컬럼을 저장할 때만 갱신함, 보통 FILE_IDXX만 있으면 된다.
        	objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	objmainds.setColumn(objmainds.rowposition, "FILE_NAME", robjds.getColumn(0, "LFIL_NAME"));

        	//현재 첨부파일이 tmp 폴더에 있는 상태에서 다운로드 버튼을 활성화 시킨다. (다운로드를 하려면 FILE_PATH,PFIL_NAME,LFIL_NAME 가 필요함.
        	objmainds.setColumn(objmainds.rowposition, "FILE_PATH", robjds.getColumn(0, "FILE_PATH"));
        	objmainds.setColumn(objmainds.rowposition, "PFIL_NAME", robjds.getColumn(0, "PFIL_NAME"));
        	objmainds.setColumn(objmainds.rowposition, "LFIL_NAME", robjds.getColumn(0, "LFIL_NAME"));

        	objmainds.setColumn(objmainds.rowposition, "DOWNLOAD", "theme://imagesNex/button_fileupload/fileDown.gif");

        	//저장버튼을 누르게 되면 tmp폴더에 있는 파일이 실제 폴더로 옮겨지기 때문에 FILE_PATH를 갱신하기 위해서 검색을 다시 해야 한다.
        	
        	//팝업창에서 추가된 파일리스트를 추가상태로 복사한다.(copyData를 사용하면 초기상태가된다)
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);
        		
        		if(objds.updatecontrol){
        			//copyRow 시
        			//updatecontrol 속성의 값이 'true'이면 복사된 행의 타입은 ROWTYPE_UPDATE가 되고, 'false'이면 ROWTYPE_NORMAL
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        }

        
        this.fn_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.fn_Search();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdMD_TRFLXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdMD_TRFLXM.addEventHandler("onheadclick", this.grdMD_TRFLXM_onheadclick, this);
            this.grdMD_TRFLXM.addEventHandler("oncellclick", this.grdMD_TRFLXM_oncellclick, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRFILE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRFILE_NAME.addEventHandler("onkeydown", this.fn_onkeydown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);

        };

        this.loadIncludeScript("MCMA0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
