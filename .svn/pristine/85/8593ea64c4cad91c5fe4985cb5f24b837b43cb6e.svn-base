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
                this.set_name("TMMD0410");
                this.set_titletext("assist프로그램");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("Assist 프로그램");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>공통관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateParameter", "absolute", "8", "66", "100", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1.쿼리주석변환");
            obj.set_cssclass("styTextButtonBizProc");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "264", null, null, "23", "8", "360", this);
            obj.set_text("Query Syntax");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtQuery", "absolute", "537", "112", null, null, "8", "1", this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtCODE", "absolute", "8", "112", "514", null, null, "1", this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "7", "90", "499", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("원본 소스");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "544", "90", null, "23", "8", null, this);
            obj.set_taborder("24");
            obj.set_text("변환 소스");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateGrid", "absolute", "212", "66", "100", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("3.그리드변환");
            obj.set_cssclass("styTextButtonBizProc");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyChg", "absolute", "110", "66", "100", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("2.readonly변환");
            obj.set_cssclass("styTextButtonBizProc");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("assist프로그램");
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
        this.addIncludeScript("TMMD0410.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0410.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0410 assist프로그램
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.23		안윤준		Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TFFFFFFF";
        this.sPACKAGENAME = "TMMD0410";

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
        	
        	this.fnc_DatasetClear('dsTM_TABLE,dsTM_QUERY'); 
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_TABLE=dsTM_TABLE";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        } 

        /*------------------------------------+
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
        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentsType) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
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

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        }

        /*-------------------------------------+
         |  작업 처리 - 버튼 종류에 따라 처리  |
         +-------------------------------------*/
        /*-------------------+
         |  쿼리주석변환 버튼 |
         +-------------------*/
        this.fn_CreateSource = function (obj,e) {

        	/* 2016.09.23 안윤준
        	 * ** 로 처리된 주석을 다 찾아서 앞뒤로 별 사이 한칸을 띄웁니다.
        	*/
        	this.fnc_Message("TMM300", "사용방법은 eclipse *oracle.xml 파일을 열어서 전체복사 후 원본소스 텍스트박스에 붙여넣고 쿼리주석변환을 누른다.");
        	var orgStr = this.edtCODE.value;
        	this.edtQuery.set_value("");
        	
        	if (this.fnc_Length(orgStr) > 0) {
        		var before1 = /\/\*(.*)\*\//g;
        		var after1	= "/* $1 */";
        		var str		= orgStr.replace(before1, after1);

        		// 주석 앞에 /*  (내용)  */ 스페이스 바 2칸을 1칸으로
        		var before2 = /\/\*\s*/g;  
        		var after2	= "/* ";
        			str		= str.replace(before2, after2);

        		// 주석 뒤에 /* (내용)  */ 스페이스 바 2칸을 1칸으로
        		var before3 = /\s*\*\//g; 
        		var after3	= " */";
        			str		= str.replace(before3, after3);
        		
        		// TAB 위치를 space 4칸으로
        		var before4 = /\t/g;
        		var after4	= "    ";
        			str		= str.replace(before4, after4);
        		
        		this.edtQuery.set_value(str);
        	}
        	return;
        }

        /*-----------------+
         |  그리드변환 버튼 |
         +-----------------*/
        this.fn_CreateGrid = function(obj,e) {
        	
        	/* 2016.09.26 안윤준
        	 * 웹스퀘어 그리드를 넥사그리드로 변환
        	 * 여러 소스로 테스트를 못해봐서 사용 시 문제 발생 할 수 있음.
        	*/
        	
        	this.fnc_Message("TMM300", "크롬에서 사용 하세요.\n 웹스퀘어 전체 소스 복사 후 그리드 부분에 대한 내용만 추출.");
        	
        	var orgStr = this.edtCODE.value;
        	this.edtQuery.set_value("");
        	
        	if (this.fnc_Length(orgStr) > 0 ) {
        		
        		var parser = new DomParser;
        		var xmlDoc=parser.parseFromString(orgStr,"text/xml");
        		
        		var x			 = xmlDoc.documentElement.childNodes; // documentElement는 항상 루트 노드를 나타낸다
        		var cnt			 = 0; // 전체 노드의 i 대신 사용 하는 cnt
        		var objDataset	 = []; // datset object
        		var objIdList	 = []; // dataset object 에서 id attribute 항목 List
        		var objBindList	 = []; // dataset object 에서 BindDataSet attribute 항목 List
        		
        		var strDataSetId = "";
        		var nexaCroGridId1 = '<Grid id="';
        		var nexaCroGridId2 = '" taborder="5" binddataset="';
        		var nexaCroGridId3 = '" autoenter="TRUE" cellsizingtype="both" cssclass="styGrid01" onexpandup="fn_HelpDialoge" left="8" top="132" right="8" bottom="8">\n';
        		var nexaCroGridId4 = '\t\t</Band>\n\t\t</Format>\n\t</Formats>\n</Grid>\n';
        		var nexaCroFormats1 = '\t<Formats>\n\t\t<Format id="default">\n\t\t<Columns>\n';
        		var nexaCroFormats2 = '\t\t</Columns>\n\t\t<Rows>\n\t\t\t<Row size="30" band="head"/>\n\t\t\t<Row size="24"/>\n\t\t</Rows>\n\t\t<Band id="head">\n';
        		
        		for( var i=0; i<x.length; i++ ){
        			if ( typeof xmlDoc.getElementsByTagName('gridView')[cnt] != 'undefined' ) {
        				objDataset.push(xmlDoc.getElementsByTagName('gridView')[cnt]); // 전체 노드 에서 dataset 이 들어간 node를 objDataset 에 담는다
        				strDataSetId += nexaCroGridId1 + objDataset[cnt].getAttribute("id") + nexaCroGridId2 + objDataset[cnt].getAttribute("dataList") + nexaCroGridId3; // <Grid> XML 기본에 ID를 넣어서 담는다.
        				strDataSetId += nexaCroFormats1;
        				
        				var objHeadList			= []; // dataset object 에서 Head 항목 List
        				var objBodyColumnList	= []; // dataset object 에서 Body 항목 List
        				for ( var j=0; j<objDataset[cnt].childNodes.length; j++ ){
        					if ( objDataset[cnt].childNodes[j].nodeName == 'w2:header'){ // 헤더 리스트를 가지고 와서 사이즈를 구한다.
        						for ( var k=0; k<objDataset[cnt].childNodes[j].childNodes.length; k++ ){
        							if ( objDataset[cnt].childNodes[j].childNodes[k].nodeName == 'w2:row'){
        								for ( var l=0; l<objDataset[cnt].childNodes[j].childNodes[k].childNodes.length; l++ ){
        									if ( objDataset[cnt].childNodes[j].childNodes[k].childNodes[l].nodeName == 'w2:column'){
        										var strColumnId = objDataset[cnt].childNodes[j].childNodes[k].childNodes[l];
        										objHeadList.push(strColumnId);
        									}
        								}
        							}
        						}
        					} else if ( objDataset[cnt].childNodes[j].nodeName == 'w2:gBody'){ // 바디 리스틀 가지고 와서 Bind id를 구한다.
        						for ( var k=0; k<objDataset[cnt].childNodes[j].childNodes.length; k++ ){
        							if ( objDataset[cnt].childNodes[j].childNodes[k].nodeName == 'w2:row'){
        								for ( var l=0; l<objDataset[cnt].childNodes[j].childNodes[k].childNodes.length; l++ ){
        									if ( objDataset[cnt].childNodes[j].childNodes[k].childNodes[l].nodeName == 'w2:column'){
        										var strColumnId = objDataset[cnt].childNodes[j].childNodes[k].childNodes[l];
        										objBodyColumnList.push(strColumnId);
        									}
        								}
        							}
        						}
        					}
        				}
        				
        				var columnSize = '';
        				var headCell = '';
        				var bodyCell = '';
        				var cntIndex = 0;
        				for ( var j=0; j<objBodyColumnList.length; j++ ) {
        					//if ( objBodyColumnList[j].getAttribute('visible') != 'false'){
        						var columnStyle		= objHeadList[j].getAttribute('width');
        						columnSize += '\t\t\t<Column size="' + columnStyle + '"/>\n';

        						var headId = objHeadList[j].getAttribute('value');
        							headId = headId.replace("<br/>", "&#13;&#10;");
        							headId = headId.replace("&nbsp;", "&#32;");
        						headCell += '\t\t\t<Cell col="' + cntIndex + '" text="' + headId + '"/>\n';

        						var bodyDataSetId = objBodyColumnList[j].getAttribute('id');
        						bodyCell += '\t\t\t<Cell col="' + cntIndex + '" text="bind:' + bodyDataSetId + '"/>\n';
        						cntIndex++;
        					//}
        				}

        				strDataSetId += columnSize;
        				strDataSetId += nexaCroFormats2;
        				strDataSetId += headCell;
        				strDataSetId += '\t\t</Band>\n\t\t<Band id="body">\n';
        				strDataSetId += bodyCell;
        				strDataSetId += nexaCroGridId4;
        				cnt++
        			}
        		}
        		this.edtQuery.set_value(strDataSetId);
        	}
        	return;
        	
        }

        /*-----------------+
         |  readonly 버튼 |
         +-----------------*/
        this.btnReadonlyChg_onclick = function(obj,e) {

        	/* 2016.10.12 안윤준
        	 * this.edtCODE.set_readonly(true); => this.fnc_SetReadonly(this.edtCODE, true);
        	*/
        	
        	this.fnc_Message("TMM300", "사용방법은 넥사크로 스크립트 전체 복사 후 붙여넣기");
        	var orgStr = this.edtCODE.value;
        	this.edtQuery.set_value("");
        	
        	if (this.fnc_Length(orgStr) > 0 ) {
        		var before1 = /this(.*).set_readonly\(/g;
        		var after1	= "this.fnc_SetReadonly(this$1, ";
        		var str		= orgStr.replace(before1, after1);
        		
        		this.edtQuery.set_value(str);
        	}
        	return;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnCreateParameter.addEventHandler("onclick", this.fn_CreateSource, this);
            this.btnCreateGrid.addEventHandler("onclick", this.fn_CreateGrid, this);
            this.btnReadonlyChg.addEventHandler("onclick", this.btnReadonlyChg_onclick, this);

        };

        this.loadIncludeScript("TMMD0410.xfdl");
        this.loadPreloadList();
       
    };
}
)();
