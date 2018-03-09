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
                this.set_name("form");
                this.set_titletext("공통버튼처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,492,23);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnSearch", "absolute", null, "0", "60", "23", "432", null, this);
            obj.set_taborder("0");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnInput", "absolute", null, "0", "60", "23", "369", null, this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "absolute", null, "0", "60", "23", "306", null, this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint", "absolute", null, "0", "60", "23", "243", null, this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("인쇄");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "0", "60", "23", "180", null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete", "absolute", null, "0", "60", "23", "117", null, this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, "0", "60", "23", "54", null, this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnd", "absolute", null, "0", "24", "23", "0", null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            obj.set_cssclass("btn_WF_CRUD2");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew", "absolute", null, "0", "24", "23", "27", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CRUD1");
            obj.set_visible("false");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 492, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통버튼처리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comButtonType01.xfdl", function() {
        /*******************************************************************************************
         2014.10.25 김석두 (최초 개발)
         본 화면은 공통 버튼 처리 화면 입니다.

         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         *******************************************************************************************/

        /*공통버튼 초기화*/
        this.fn_InitCommButton = function(obj,e)
        {
        	if (application.GBL_LANGCD != "ko") {
        		
        		this.btnSearch.set_text("SEARCH");
        		this.btnInput.set_text("INPUT");
        		this.btnSave.set_text("SAVE");
        		this.btnPrint.set_text("PRINT");
        		this.btnToExcel.set_text("EXCEL");
        		this.btnDelete.set_text("DELETE");
        		this.btnCancel.set_text("CANCEL");
        		
        	}
        }
         
        /* 조회 처리 */
        this.fn_Search = function(obj,e) {this.parent.fn_Search(obj,e);}

        /* 입력 처리 */
        this.fn_Input = function(obj,e) {this.parent.fn_Input(obj,e);}

        /* 저장 처리 */
        this.fn_Save = function(obj,e) {this.parent.fn_Save(obj,e);}

        /* 인쇄 처리 */
        this.fn_Print = function(obj,e) {this.parent.fn_Print(obj,e);}

        /* 엑셀 처리 */
        this.fn_ToExcel = function(obj,e) {this.parent.fn_ToExcel(obj,e);}

        /* 삭제 처리 */
        this.fn_Delete = function(obj,e) {this.parent.fn_Delete(obj,e);}

        /* 취소 처리 */
        this.fn_Cancel = function(obj,e) {this.parent.fn_Cancel(obj,e);}

        /* 종료 처리 */
        this.fn_End = function(obj,e) {
        	// WorkFrame의 종료 처리
        	if (this.parent.parent.parent.name == "_WORKFRAME") {
        		this.parent.parent.parent.fn_End(obj, e);
        	} else {
        		this.parent.fn_End(obj,e);
        	}
        }

        /**
         * 현재 화면을 새창으로 호출한다.
         */
        this.fn_PopupWindow = function(obj,e) {

        	// WorkFrame을 호출한다.
        	if (this.parent.parent.parent.name == "_WORKFRAME") {
        		
        		var _popName = "_pop_child_" + this.parent.sPACKAGENAME;
        		var _popFormUrl = "frame::workFrame.xfdl";
        		var _oPopArgs = 
        		{
        			"sFORM_MENU_ID" : this.getOwnerFrame()["sFORM_MENU_ID"],
        			"sFORM_URL" : this.getOwnerFrame()["sFORM_URL"],
        			"sFORMCAPTION" : this.getOwnerFrame()["sFORMCAPTION"],
        			"sFORMLOCATION" : this.getOwnerFrame()["sFORMLOCATION"],
        			"sUSERLAVEL" : this.getOwnerFrame()["sUSERLAVEL"],
        			"sUSERAUTH" : this.getOwnerFrame()["sUSERAUTH"],
        			"sLINKPARAM" : this.getOwnerFrame()["oLINKPARAM"],
        			"sCALLFROM" : this.getOwnerFrame()["sCALLFROM"],
        			"_WIN_POPUP" : true
        		}
        		
        		var _sOpenStyle = "resizable=true";
        		
        		var nParentTop = (opener.window ? opener.window.screenTop : 0);
        		var nParentLeft = (opener.window ? opener.window.screenLeft : 0);
        		
        		application.open(_popName, _popFormUrl, this, _oPopArgs, _sOpenStyle, nParentTop, nParentLeft); 
        		
        	}

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_InitCommButton, this);
            this.btnSearch.addEventHandler("onclick", this.fn_Search, this);
            this.btnInput.addEventHandler("onclick", this.fn_Input, this);
            this.btnSave.addEventHandler("onclick", this.fn_Save, this);
            this.btnPrint.addEventHandler("onclick", this.fn_Print, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnDelete.addEventHandler("onclick", this.fn_Delete, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.btnNew.addEventHandler("onclick", this.fn_PopupWindow, this);

        };

        this.loadIncludeScript("comButtonType01.xfdl");

       
    };
}
)();
