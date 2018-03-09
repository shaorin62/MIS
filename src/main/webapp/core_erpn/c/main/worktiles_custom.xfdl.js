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
                this.set_name("BC_COM");
                this.set_scrollbars("none");
                this.set_titletext("[기획]하단컨텐츠");
                this._setFormPosition(0,0,1183,383);
            }
            this.style.set_padding("0 0 10 0");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DBSC_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DBSC_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"DBSC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DBSC_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DBCN_QURY\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_FLPT\" type=\"STRING\" size=\"256\"/><Column id=\"DBCD_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBoardCountItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DBSC_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CNTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "37", "26", "210", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "150", "150", "90", "49", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h49");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1156", "37", "27", "210", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "1073", "348", "62", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", "1008", "348", "62", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "945", "372", "196", "11", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1183, 383, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[기획]하단컨텐츠");
            		p.style.set_padding("0 0 10 0");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("worktiles_custom.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("worktiles_custom.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("worktiles_custom.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	worktiles_common.xfdl 메인 대시보드>하단>업무버튼
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		jsh			Initial Created.
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

        
        /**
         * 공통 스크립트 Include
         */
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_dashboard.xjs"

        
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "ComMain"; //해당 Form에서 사용 할 Package 명

        this.bEditMode = false;

        this.MAX_COL = 6; // 바로가기 최대 열 갯수
        this.LEFT_SPACE = 198;	// 바로가기 간 좌측 시작점 간격
        this.TOP_SPACE = 194;	// 바로가기 간 상단 시작점 간격

        // 버튼 기본 시작위치
        this.BASE_TOP = 5;
        this.BASE_LEFT = 26;

        // 각 컴포넌트의 기본 높이/넓이
        this.BTN_WIDTH = 140;
        this.BTN_HEIGHT = 145;
        this.STATIC_WIDTH = 31;
        this.STATIC_HEIGHT = 36;
        this.CHECK_WIDTH = 24;
        this.CHECH_HEIGHT = 24;

        // 각 컴포넌트명의 기본 Prefix
        this.BTN_PREFIX = "BTN_LINK_";
        this.STA_PREFIX = "STA_LINK_";
        this.CHK_PREFIX = "CHK_LINK_";

        
        this.arrCheckBoxes = null;

        /**
         * Form Load 시 실행
         */
        this.fn_FormLoadSetting = function(obj,e)
        {
        		
        	// 최초에는 수정모드가 아님
        	this.bEditMode = false;
        	
        	// 대시보드 바로가기 목록을 조회
        	this.fn_GetBoardItems();
        	
        }

        
        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'GetBoardItems') {
        	
        		sReturnString  = " pgm="			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="			+ this.fnc_Quote(sKind);
        		sReturnString += " USER_IDXX=" 		+ this.fnc_Quote(application.GBL_USERID);
        		sReturnString += " EMPL_NUMB=" 		+ this.fnc_Quote(application.GBL_EMPLNO);

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
        	
        	if (sMethodName == 'GetBoardItems') {
        		// 대시보드 바로가기 세팅
        		this.fn_PlaceBoardItems();
        		
        		// 알림 건수 조회 처리
        		this.fn_GetItemCount();
        	} else if (sMethodName == "GetItemCount") {
        		
        		var rows = this.dsBoardCountItem.getRowCount();
        		var staticObj = null;
        		var itemSeq;
        		var itemCount = 0;
        		
        		for (var row = 0; row < rows; row++) {
        		
        			itemSeq = this.dsBoardCountItem.getColumn(row, "DBSC_SEQN");
        			itemCount = this.dsBoardCountItem.getColumn(row, "ITEM_CNTX");
        			staticObj = this.lookup(this.STA_PREFIX + itemSeq);
        			
        			if (staticObj != undefined) {
        				staticObj.set_text(itemCount);
        				if (!staticObj.visible) {
        					staticObj.set_visible(true);
        				}
        			}
        			
        		}
        		
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);
            this.btnSave.addEventHandler("onclick", this.btnSave_onclick, this);

        };

        this.loadIncludeScript("worktiles_custom.xfdl");

       
    };
}
)();
