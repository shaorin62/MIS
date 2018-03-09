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
                this.set_name("PDMA0010");
                this.set_titletext("계약서파일관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_FILEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("계약서파일관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "54", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("계약명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_FILEXH", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPD_FILEXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"280\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계약서파일번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"등록일\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"계약명\"/><Cell col=\"4\" text=\"파일수\"/><Cell col=\"5\" text=\"업로드\"/><Cell col=\"6\" text=\"다운로드\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_NUMB\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:REGI_DATE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CONT_NAME\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_CONT\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" text=\"파일 업로드\"/><Cell col=\"6\" displaytype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" edittype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" text=\"expr:DOWNLOAD == '파일 다운로드' ? DOWNLOAD : ''\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:MEMO_FILD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "522", "0", null, "29", "25", null, this);
            obj.set_taborder("109");
            obj.set_text("홈 > 제작시스템>제작관리>계약관리>계약서파일관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCONT_NAME", "absolute", "83", "71", "200", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계약서파일관리");

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
        this.addIncludeScript("PDMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PDMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMA0010 제작 계약서 파일관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.20		오세훈		Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMA0010"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fn_Search();

        
        } 
        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsPD_FILEXH");

        	//상단 계약서 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_FILEXH=dsPD_FILEXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_FILEXH.setFocus();

        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_FILEXH.insertRow(this.dsPD_FILEXH.rowposition + 1);
        	this.dsPD_FILEXH.set_rowposition(iRow);

        	this.dsPD_FILEXH.setColumn(iRow, "REGI_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,10 ));
        	
        	this.grdPD_FILEXH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_FILEXH, 0));
        	this.grdPD_FILEXH.setFocus();	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheck()) return;
        	
        	for(var i = this.dsPD_FILEXH.rowcount; i >= 0; i--){
        		if(this.dsPD_FILEXH.getColumn(i, "CHK") == 1){
        			this.dsPD_FILEXH.deleteRow(i);
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPD_FILEXH=dsPD_FILEXH:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
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
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_FILEXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_FILEXH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_FILEXH.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_FILEXH.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_FILEXH.getColumn(this.dsPD_FILEXH.rowposition, "CONT_NAME")) + ") 계약서";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_FILEXH") == false && this.fnc_DatasetChangeCheck("dsPD_CONTXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_FILEXH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_FILEXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_FILEXH.getColumn(i, "REGI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "등록일", this.dsPD_FILEXH, i, '', '');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_FILEXH.getColumn(i, "CONT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약명", this.dsPD_FILEXH, i, '', '');
        		}
        		
        	}
        	
        	return true;
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CONT_NAME=" + this.fnc_Quote(this.edtSHRCONT_NAME.value); //계약명
        	
        	} else if (sKind == "SAVE00" || sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
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
        			this.alert("session error");
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
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPD_FILEXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        	}	

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         //셀 파일 업로드 혹은 다운로드 클릭시
        this.grdPD_FILEXH_oncellclick = function(obj,e)
        {
        	
        	if(this.grdPD_FILEXH.getCellText(e.row, e.col) == "파일 업로드") {
        	
        		//그리드 셀 이미지 클릭시 그리드로우와 데이타셋 로우가 같은지 확인(같음)
        		//파일업로드 팝업창 호출
        		this.fnc_CallFileUplod(3,"doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml,tif","fn_CallFileUplodCallback");
        		
        	} else if(this.grdPD_FILEXH.getCellText(e.row, e.col) == "파일 다운로드") {
        		//다운로드 펑션
        		var filePath   = this.dsPD_FILEXH.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsPD_FILEXH.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsPD_FILEXH.getColumn(e.row,"LFIL_NAME");

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
        	var objmainds =form.dsPD_FILEXH;

        	var objmaingrd = form.grdPD_FILEXH;
        	
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

        	objmainds.setColumn(objmainds.rowposition, "DOWNLOAD", "파일 다운로드");

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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPD_FILEXH.addEventHandler("oncellclick", this.grdPD_FILEXH_oncellclick, this);
            this.edtSHRCONT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);

        };

        this.loadIncludeScript("PDMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
