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
                this.set_name("comHelpChoice");
                this.set_scrollbars("none");
                this.set_titletext("중복 Recored선택");
                this._setFormPosition(0,0,532,205);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_totalCount", "absolute", "64", "390", "252", "20", null, null, this);
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCommonCode", "absolute", "0", "0", "532", "205", null, null, this);
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("this.opener.dsCommonCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"COL_TMP0\"/><Cell col=\"1\" text=\"COL_TMP1\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_TMP0\"/><Cell col=\"1\" text=\"bind:COL_TMP1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", null, "8", "13", "13", "8", null, this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.style.set_background("#ffffffff URL('theme://images/btn_TitlebarClose_O.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 532, 205, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("중복 Recored선택");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comHelpChoice.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comHelpChoice.xfdl", function() {
        /*******************************************************************************************
         2014.10.25 김석두 (최초 개발)
         본 화면은 공통 팝업 실행 후 복수의 결과 값을 선택하는 화면 입니다.
         
         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         *******************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*---------------------------------+
         |  최초 화면 Load時 처리 할 사항  |
         +---------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

         	this.grdCommonCode.set_formats(this.opener.dsTM_POPUPX.getColumn(0, "SERS_GRDC"));
         	this.dsCommonCode.copyData(this.opener.dsCommonCode);
        	this.grdCommonCode.setBindDataset(this.dsCommonCode); 	
        	this.fnc_GridSetting(this);

        }

        /*----------------+
         | 화면 Key Event |
         +----------------*/
        this.fn_FormKeyDown = function (obj,e) {

        	if (e.keycode == 13) {
        		this.fn_Confirm();
        	} else if (e.keycode == 27) {
        		this.fnc_PopupClose("");
        	}

        }

        /*-----------+
         | 확인 처리 |
         +-----------*/
        this.fn_Confirm = function (obj,e) {

        	var iColumnCount = this.dsCommonCode.getColCount();
        	var iRow = this.dsCommonCode.rowposition;
        	var arrReturn = new Array(iColumnCount);

        	//반환 할 자료(Array) 만들기
        	for (var i = 0; i < iColumnCount; i++) {
        		arrReturn[i] = this.dsCommonCode.getColumn(iRow, "COL_TMP" + i);
        	}

        	this.fnc_PopupClose(arrReturn);

        }

        /*---------------------------------+
         | 닫기 버튼을 통한 화면 종료 처리 |
         +---------------------------------*/
        this.btn_Close_OnClick = function (obj,e) {
        	this.fnc_PopupClose("");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_FormKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdCommonCode.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_OnClick, this);

        };

        this.loadIncludeScript("comHelpChoice.xfdl");

       
    };
}
)();
