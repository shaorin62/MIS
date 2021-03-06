﻿(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("comexcel");
                this.set_titletext("엑셀저장");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1054,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new ExcelExportObject("ExcelExportObject", this);
            obj.set_exporttype("288");
            obj.set_exporteventtype("itemrecord");
            obj.set_commcompress("true");
            obj.set_exportfilename("ExcelExportTest");
            obj.set_exportmessagecomplete("Export End");
            obj.set_exportmessageprocess("%d [ %d / %d ]");
            obj.set_exportmessageready("Export");
            obj.set_exportuitype("exportprogress");
            this.addChild(obj.name, obj);
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnClose", "absolute", "992", "7", "55", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styCommBtnClose");
            obj.style.set_cursor("hand");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("divGridPanel", "absolute", "0", "32", "1051", "802", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 802, this.divGridPanel,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.divGridPanel.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1054, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("엑셀저장");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comExcel_New.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comExcel_New.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        //include "script::lib_script_common.xjs";
        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sSENDTOPWINDOW = ""; //현재 MDI에 활성화된 폼
        this.iTOTALCOUNTER  = 0; //전체 그리드 Counter
        this.iContentTop    = 10; //Componect Top

        /*--------------------------------+
        |  최초 화면 Load時 처리 할 사항  |
        +---------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.sSENDTOPWINDOW = this.opener;         //Popup에서 전달한 폼 인자를 할당한다.
        	this.fn_CheckTopForm(this.sSENDTOPWINDOW); //Grid Create & Display
        }

        /*------------+
        |  화면 종료  |
        +-------------*/
        this.btnClose_OnClick = function (obj,e) {
        	this.close();
        }

        /*--------------------------------+
         |  Grid & Button Create(Drawing)  |
         +---------------------------------*/
        this.fn_CheckTopForm = function (checkObj) {

        	var sTemp    = "";
        	var sDataset = "";
        	var arrContents;
        	var arrProp = ["autosizebandtype","autosizingtype","extendsizetype","suppresslevel","cssclass"];

        	// MDI에서 활성된 폼의 Control을 배열에 할당한다.
        	arrContents = checkObj.components;

        	for (var i = 0; i < arrContents.length; i++) {
        		
        		// 컴포넌트중 Grid일 경우
        		if ((arrContents[i] instanceof Grid) && ((arrContents[i].visible == true) || (arrContents[i].UserData == 'Y'))) {
        			
        			// DataSet 명 구하기
        			sDataset = arrContents[i].binddataset;

        			// Create Object  
        			var objGrid = new Grid();
        			objGrid.init('grdExcel' + this.iTOTALCOUNTER, "absolute", 10, this.iContentTop, 940, 386, null, null);
        			this.divGridPanel.addChild('grdExcel' + this.iTOTALCOUNTER, objGrid); 
        			//objGrid.set_cssclass("styGrid01");
        			
        			objGrid.show(); 
        			objGrid.setBindDataset(eval("this.opener."+sDataset));

        			// 원본 Grid의 Contents를 생성된 Grid에 할당한다.
        			objGrid.set_enableredraw(false);
        			objGrid.set_formats(arrContents[i].getCurFormatString());
        			trace(arrContents[i].getCurFormatString());
        			
        			for(var iProp = 0; iProp < arrProp.length ; iProp++){
        				eval("objGrid.set_"+arrProp[iProp]+"(arrContents[i]."+arrProp[iProp]+")");
        			}			
        			
        			var arrDataset = [];
        			var j = 0;
        			
        			for (var iCell = 0; iCell < objGrid.getCellCount("Body") ; iCell++) {
        				if (!this.fnc_IsEmpty(objGrid.getCellProperty("Body", iCell, "combodataset"))) {
        					arrDataset[j] = objGrid.getCellProperty("Body", iCell, "combodataset");
        					j++;
        				}
        			}

        			for(var j=0; j < arrDataset.length ; j++){
        				if(!this.isValidObject(arrDataset[j])){
        					var objDs = new Dataset();
        					objDs.copyData(eval("this.opener." + arrDataset[j]));
        					this.addChild(arrDataset[j], objDs); 
        				}
        			}	

        			objGrid.set_enableredraw(true);
        			objGrid.body.style.set_cellbackground("default");
        			objGrid.body.style.set_cellbackground2("#eff5ffff");

        			// 엑셀 실행 버튼 만들기
        			var objButton = new Button();  
        			objButton.init('btnExcel' + this.iTOTALCOUNTER, "absolute", 954, this.iContentTop, 74, 21, null, null);
        			this.divGridPanel.addChild('btnExcel' + this.iTOTALCOUNTER, objButton); 
        			objButton.set_cssclass("styTextButtonBizProc");
        			objButton.set_text("엑셀저장");
        			objButton.addEventHandler("onclick", this.fn_ExportExcel, this);
        			objButton.show(); 

        			// Division에 컴포넌트가 생성될 때마다 Division의 Size을 재인식 시킨다.
        			this.divGridPanel.resetScroll();

        			// 생성되는 Grid의 Top의 위치
        			this.iContentTop = this.iContentTop + 396;
        			this.iTOTALCOUNTER++;

        		}

        		// Tab & Div 재귀 처리
        		if (arrContents[i] instanceof Div || arrContents[i] instanceof Tab || arrContents[i] instanceof Tabpage) {
        			this.fn_CheckTopForm(arrContents[i]);
        		}

        	}

        }

        /*-----------------+
        |  엑셀 저장 처리  |
        +------------------*/
        this.fn_ExportExcel = function (obj) {

        	var sGrid = "grd" + this.fnc_SubStr(obj.name, 3);

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	
        	var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, eval("this.divGridPanel."+sGrid), "Sheet1!A1","allband","allrecord","suppress","onlyvalue","none","color,background","both");
        	
            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);

        	this.ExcelExportObject.set_exportfilename("ExcelExport"+sGrid);

            this.ExcelExportObject.set_exporturl(application.GBL_HTTPURL + "/XExportImport");
            
        	// var objExportItem = this.ExcelExportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
        	// objExportItem.set_exceptstyle("background,background2");

            this.ExcelExportObject.exportData();
         
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ExcelExportObject.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
            this.ExcelExportObject.addEventHandler("onprogress", this.ExcelExportObject00_onprogress, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnClose.addEventHandler("onclick", this.btnClose_OnClick, this);

        };

        this.loadIncludeScript("comExcel_New.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
