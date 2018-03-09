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
                this.set_name("leftFrame");
                this.set_classname("mnuleft");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,290,750);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAllMenuList", this);
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
            obj = new Div("divSNBLeft", "absolute", "0", "0", "60", null, null, "0", this);
            obj.set_taborder("26");
            obj.set_cssclass("div_LF_box");
            this.addChild(obj.name, obj);
            obj = new Button("btnLNBClose", "absolute", "0", "0", "60", "60", null, null, this.divSNBLeft);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MenuClose");
            obj.set_tooltiptext("닫기");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnLNBMenu", "absolute", "0", "60", "60", "60", null, null, this.divSNBLeft);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_SubMenu");
            obj.set_tooltiptext("메뉴");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnLNBMyMenu", "absolute", "0", "120", "60", "60", null, null, this.divSNBLeft);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Bookmark");
            obj.set_tooltiptext("즐겨찾기");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut01", "absolute", "19", "193", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut02", "absolute", "19", "226", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut03", "absolute", "19", "259", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut04", "absolute", "19", "292", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut05", "absolute", "19", "325", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut06", "absolute", "19", "358", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut07", "absolute", "19", "391", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut08", "absolute", "19", "424", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut09", "absolute", "19", "457", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);
            obj = new Button("btnShortCut10", "absolute", "19", "490", "22", "22", null, null, this.divSNBLeft);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("btn_LF_MenuNm");
            this.divSNBLeft.addChild(obj.name, obj);

            obj = new Div("divLNBMenu", "absolute", "60", "0", "230", null, null, "0", this);
            obj.set_taborder("27");
            obj.set_text("Div01");
            obj.set_cssclass("div_LF_box02");
            this.addChild(obj.name, obj);
            obj = new Grid("grdMyMenu", "absolute", "14", "44", "201", null, null, "44", this.divLNBMenu);
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_taborder("8");
            obj.set_binddataset("dsMyMenuList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"175\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:center middle;\" text=\"\"/><Cell col=\"1\" style=\"padding: ;\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnMoveUp", "absolute", "15", null, "64", "21", null, "12", this.divLNBMenu);
            obj.set_taborder("5");
            obj.set_text("↑ 위로");
            obj.set_tooltiptext("↑ 위로");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnMoveDown", "absolute", "82", null, "65", "21", null, "12", this.divLNBMenu);
            obj.set_taborder("6");
            obj.set_text("↓ 아래로");
            obj.set_tooltiptext("↓ 아래로");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnMyMenuSave", "absolute", "150", null, "64", "21", null, "12", this.divLNBMenu);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Edit("edtMenuSearch", "absolute", "14", "14", "201", "27", null, null, this.divLNBMenu);
            obj.set_taborder("0");
            obj.set_cssclass("Edit_LF_search");
            obj.set_tooltiptext("검색할 메뉴명");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnMenuSearch", "absolute", "185", "16", "28", "23", null, null, this.divLNBMenu);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_search");
            obj.set_tooltiptext("메뉴검색버튼");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Grid("grdLeftMenu", "absolute", "14", "44", "201", null, null, "44", this.divLNBMenu);
            obj.set_taborder("2");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_treeusecheckbox("false");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMenuList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"padding:0 0 0 -3;\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVL\"/></Band></Format></Formats>");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnExpandAll", "absolute", "15", null, "96", "21", null, "12", this.divLNBMenu);
            obj.set_taborder("3");
            obj.set_text("전체펼침");
            obj.set_tooltiptext("전체펼침");
            this.divLNBMenu.addChild(obj.name, obj);
            obj = new Button("btnCollapseAll", "absolute", "118", null, "96", "21", null, "12", this.divLNBMenu);
            obj.set_taborder("4");
            obj.set_text("전체닫힘");
            obj.set_tooltiptext("전체닫힘");
            this.divLNBMenu.addChild(obj.name, obj);

            obj = new PopupDiv("pdvFindMenu", "absolute", "74", "41", "201", "266", null, null, this);
            obj.set_cssclass("pdiv_LF_search");
            this.addChild(obj.name, obj);
            obj = new Grid("grdFindMenu", "absolute", "2", "1", "197", "262", null, null, this.pdvFindMenu);
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_taborder("0");
            obj.set_binddataset("dsFindMenuList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.style.set_background("#ffffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell style=\"padding:0 0 0 8;\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.pdvFindMenu.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 60, 0, this.divSNBLeft,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_cssclass("div_LF_box");

            	}
            );
            this.divSNBLeft.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 230, 750, this.divLNBMenu,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div01");
            		p.set_cssclass("div_LF_box02");

            	}
            );
            this.divLNBMenu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 201, 266, this.pdvFindMenu,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("pdiv_LF_search");

            	}
            );
            this.pdvFindMenu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 290, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnuleft");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("leftFrame.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("leftFrame.xfdl", "script::lib_script_dashboard.xjs");
        this.addIncludeScript("leftFrame.xfdl", "script::lib_script_theme.xjs");
        this.registerScript("leftFrame.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	leftframe 메인 좌측 메뉴프레임 (SNB, LNB 영역)
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.19		jsh			Initial Created.
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
        //include "script::lib_script_theme.xjs"

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
         
        /**
         Form Load Process
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 화면 재정의
        	this.fnc_SetAdjustWindows();
        	
        	// 테마 설정 적용
        	this.fnc_ThemeSetting(this);
        	
        	// 즐겨찾기 메뉴의 그리드에 테마 설정 적용하여 값 적용
        	var themeType = application.GBL_THEMECD;
        	var shortThemeType = themeType.substr(0, 1);	
        	var exprStr = "expr:currow < 10 ?  \"URL('theme://images_" + shortThemeType + "/grd_LF_0\" + (currow+1) + \".png')\" : \"URL('theme://images_" + shortThemeType + "/grd_LF_Bkmk.png')\"";
        	this.divLNBMenu.grdMyMenu.setCellProperty("Body", 0, "text", exprStr);
        	
        	// 기본 좌측 메뉴 설정 - 일반 메뉴목록 표시
        	this.fn_ChangeMenuList("MENU");
        	
        	// 즐겨찾기 버튼 초기화
        	this.fn_InitFavoriteBtn();
        	
        	// 메뉴 목록 설정
        	this.divLNBMenu.menustatus = "MENU"
        	this.divLNBMenu.menuvisible = true;
        	
        	if (application.GBL_LANGCD != "ko") {
        		this.divSNBLeft.btnLNBClose.set_tooltiptext("Close");
        		this.divSNBLeft.btnLNBMenu.set_tooltiptext("Menu");
        		this.divSNBLeft.btnLNBMyMenu.set_tooltiptext("My Menu");
        		
        		this.divLNBMenu.btnMenuSearch.set_tooltiptext("Menu Search");
        		
        		this.divLNBMenu.btnCollapseAll.set_text("Collapse All");
        		this.divLNBMenu.btnCollapseAll.set_tooltiptext("Collapse All");
        		this.divLNBMenu.btnExpandAll.set_text("Expand All");
        		this.divLNBMenu.btnExpandAll.set_tooltiptext("Expand All");
        		
        		this.divLNBMenu.btnMoveUp.set_text("Up");
        		this.divLNBMenu.btnMoveUp.set_tooltiptext("Up");
        		this.divLNBMenu.btnMoveDown.set_text("Down");
        		this.divLNBMenu.btnMoveDown.set_tooltiptext("Down");
        		this.divLNBMenu.btnMyMenuSave.set_text("Save");
        		this.divLNBMenu.btnMyMenuSave.set_tooltiptext("Save");
        		
        		
        	}
        	
        }

        
        /**
         * 업무 메뉴 그리드 클릭 시 이벤트
         */
        this.divLNBMenu_grdLeftMenu_oncellclick = function(obj,e) {
        	// 메뉴 ID
        	var menuId = application.dsMenuList.getColumn(e.row, "MENU_IDXX");
        	this.fn_MenuOpen(obj, menuId);
        }

        
        /**
         * MY메뉴 그리드 더블클릭 시 이벤트
         */
        this.divLNBMenu_grdMyMenu_oncelldblclick = function(obj,e)
        {
        	var menuId = application.dsMyMenuList.getColumn(e.row, "MENU_IDXX");
        	this.fn_MenuOpen(obj, menuId);
        }

        
        /**
         * 좌측 SNB의 메뉴 펼침/닫힘 버튼 클릭 이벤트
         */
        this.divSNBLeft_btnLNBClose_onclick = function(obj,e) {
        	var bVisible = this.divLNBMenu.menuvisible;
        	this.fn_LeftLNBShowHide(bVisible);
        }

        
        /**
         * 좌측 SNB의 "MENU" 버튼 클릭 시 일반 메뉴목록 표시
         */
        this.divSNBLeft_btnLNBMenu_onclick = function(obj,e) {
        	this.fn_ChangeMenuList("MENU");
        }

        
        /**
         * 좌측 SNB의 "MYMENU" 버튼 클릭 시 MY메뉴목록 표시
         */
        this.divSNBLeft_btnLNBMyMenu_onclick = function(obj,e) {
        	this.fn_ChangeMenuList("MYMENU");
        }

        
        /**
         * 메뉴 전체펼침 버튼 클릭 시
         */
        this.divLNBMenu_btnExpandAll_onclick = function(obj,e)
        {
        	this.divLNBMenu.grdLeftMenu.set_treeinitstatus("expand,all");
        }

        
        /**
         * 메뉴 전체닫힘 버튼 클릭 시
         */
        this.divLNBMenu_btnCollapseAll_onclick = function(obj,e)
        {
        	this.divLNBMenu.grdLeftMenu.set_treeinitstatus("collapse,all");
        }

        
        /**
         * 좌측 SNB 내의 즐겨찾기 버튼 클릭 이벤트 처리
         */
        this.divSNBLeft_btnShortCut_onclick = function(obj,e)
        {
        	var menuId = obj.menuid;
        	
        	if (menuId) {
        		this.fn_MenuOpen(this.divLNBMenu.grdMyMenu, menuId);
        	}
        }

        
        /**
         * 좌측 LNB 즐겨찾기 목록의 '↑ 위로' 버튼 클릭 처리
         */
        this.divLNBMenu_btnMoveUp_onclick = function(obj,e)
        {
        	var row = application.dsMyMenuList.rowposition;
        	
        	if (row > 0) {
        		// 선택된 행과 선택된 행의 -1 데이터를 교환
        		application.dsMyMenuList.exchangeRow(row, row - 1);
        		var pre = application.dsMyMenuList.getColumn(row - 1, "MENU_ORDR");
        		var next = application.dsMyMenuList.getColumn(row, "MENU_ORDR");
        		application.dsMyMenuList.setColumn(row, "MENU_ORDR", pre);
        		application.dsMyMenuList.setColumn(row - 1, "MENU_ORDR", next);
        	}
        }

        
        /**
         * 좌측 LNB 즐겨찾기 목록의 '↓ 아래로' 버튼 클릭 처리
         */
        this.divLNBMenu_btnMoveDown_onclick = function(obj,e)
        {
        	var row = application.dsMyMenuList.rowposition;
        	
        	if ((row >= 0) && (row < application.dsMyMenuList.rowcount - 1)) {
        		// 선택된 행과 선택된 행의 -1 데이터를 교환
        		application.dsMyMenuList.exchangeRow(row, row + 1);
        		var pre = application.dsMyMenuList.getColumn(row + 1, "MENU_ORDR");
        		var next = application.dsMyMenuList.getColumn(row, "MENU_ORDR");
        		application.dsMyMenuList.setColumn(row, "MENU_ORDR", pre);
        		application.dsMyMenuList.setColumn(row + 1, "MENU_ORDR", next);
        	}
        }

        
        /**
         * 좌측 LNB 즐겨찾기 목록의 '저장' 버튼 클릭 처리
         */
        this.divLNBMenu_btnMyMenuSave_onclick = function(obj,e)
        {
        		
        	application.transaction("_favorite"
        						,application.GBL_HTTPURL + "/core/erp/com/ComMain_Favorite.do?CALL_TYPE=NEXACRO"
        						,"dsMyMenuList=dsMyMenuList:U"
        						,"dsMyMenuList=dsMyMenuList"
        						,"GBL_USERID=" + nexacro.wrapQuote(application.GBL_USERID)
        						,"fnc_AddFavoriteCallback"
        						,true
        	);
        	
        }

        
        /**
         * 좌측 LNB 메뉴 검색 버튼 클릭 시
         */
        this.divLNBMenu_btnMenuSearch_onclick = function(obj,e)
        {
        	this.fn_SearchMenuList();
        }

        
        /**
         * 좌측 LNB 메뉴 검색 텍스트 키 입력 이벤트
         */
        this.divLNBMenu_edtMenuSearch_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_SearchMenuList();
        	}
        }

        
        /**
         * LNB 메뉴 검색 후 레이어가 사라질 때 검색 값을 없앰
         */
        this.pdvFindMenu_oncloseup = function(obj,e)
        {
        	this.divLNBMenu.edtMenuSearch.set_value("");
        }

        
        /**
         * 메뉴 검색 레이어의 그리드 셀 클릭 시 메뉴로 이동
         */
        this.pdvFindMenu_grdFindMenu_oncellclick = function(obj,e)
        {
        	var menuId = application.dsFindMenuList.getColumn(application.dsFindMenuList.rowposition, "MENU_IDXX");
        	var oTargetGrid = null;
        	if (this.divLNBMenu.menustatus == "MENU") {
        		oTargetGrid = this.divLNBMenu.grdLeftMenu;
        	} else if (this.divLNBMenu.menustatus == "MYMENU") {
        		oTargetGrid = this.divLNBMenu.grdMyMenu;
        	}
        	this.pdvFindMenu.closePopup();
        	this.fn_MenuOpen(oTargetGrid, menuId);
        }

        
        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /**
         * 메뉴 트리의 레벨 시작 값을 변경
         * @param {Number} startLevel 변경할 메뉴트리의 시작 레벨
         */
        this.fn_SetMenuStartLevel = function(startLevel) {
        	if (startLevel == 1) {
        		this.divLNBMenu.grdLeftMenu.setCellProperty("body", 0, "treestartlevel", 1);
        	} else {
        		this.divLNBMenu.grdLeftMenu.setCellProperty("body", 0, "treestartlevel", 2);
        	}
        }

        
        /*----------------------------------+
         |  Menu Tree Click Then Form Open   |
         ------------------------------------*/
        this.fn_MenuOpen = function (obj,menuId) {

        	var dsObj = application.FRMTOP.form.dsAllMenuList;
        	
        	// MY메뉴 그리드라면..
        	if (obj.name == "grdMyMenu") {
        		dsObj = application.dsMyMenuList;
        	}
        	
        	var iRow = -1;
        	
        	iRow = dsObj.findRow("MENU_IDXX", menuId);
        	
        	// 찾는 메뉴가 없다면...
        	if (iRow == -1) return;

        	//Form이 아니면 종료
        	if (dsObj.getColumn(iRow, "MNUT_YSNO") != "0") return;

        	//미개발 메뉴는 그냥 RETURN
        	if (dsObj.getColumn(iRow, "DEVC_YSNO") != "1") {
        		this.fnc_Message("TMM125", "아직 개발이 완료되지 않았습니다. 완료 후 실행 하세요!");
        		return;
        	}

        	var sDisplay   = "maximize";
        	var sFormID    = dsObj.getColumn(iRow, "MENU_IDXX");
        	var sProgID    = dsObj.getColumn(iRow, "PROG_IDXX");
        	var sFormCapt  = dsObj.getColumn(iRow, "MENU_NAME");
        	var sFormLoca  = dsObj.getColumn(iRow, "MENU_FUNM");
        	var sUserAuth  = dsObj.getColumn(iRow, "USER_AUTH");
        	var sFilePath  = dsObj.getColumn(iRow, "PROG_PATH");
        	var sAuthLevel = dsObj.getColumn(iRow, "ATHR_LEVL");
        	
        	var sArgument  = new Array();
        	
        	//업무화면 상단에 타이틀 로케이션 표시할때
        	//기존   업무화면명[아아디]  로케이션
        	//로케이션[아이디]  (로케이션 표시 안함
        	// 업무화면명 [업무ID] 및 로케이션 사용 :: NSCOM
        	sArgument[0] = sFormCapt + "[" + sProgID + "]";
        	sArgument[1] = sFormLoca;
        	sArgument[2] = sUserAuth;
        	sArgument[3] = sAuthLevel;
        	
        	// 메뉴 오픈 전 프레임은 숨김
        	if (!application._wideview) {	// 화면 해상도가 크다면..
        		this.fn_LeftLNBShowHide(true);
        	}
        	
        	// 메뉴 오픈시에는 무조건 대시보드 숨김
        	application.FRMTOP.form.fn_ShowHome(false);
        	
        	this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 0, 0, sDisplay, -1, -1);
        	
        }

        
        /**
         * 좌측 LNB 메뉴 영역을 숨김 또는 펼침
         */
        this.fn_LeftLNBShowHide = function(bVisible) {
        	
        	// 메뉴가 "펼침" 상태이면 닫는다
        	if (bVisible) {
        		
        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("60,*");
        		
        		this.divSNBLeft.btnLNBClose.set_cssclass("btn_LF_MenuOpen");	//열기 버튼으로 스타일 변경
        		this.divSNBLeft.btnLNBClose.set_tooltiptext("Open");
        		this.divLNBMenu.menuvisible = false;
        		
        	} else {
        	
        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("290,*");
        		
        		this.divSNBLeft.btnLNBClose.set_cssclass("btn_LF_MenuClose");	//닫기 버튼으로 스타일 변경
        		this.divSNBLeft.btnLNBClose.set_tooltiptext("Close");
        		this.divLNBMenu.menuvisible = true;
        		
        	}
        	
        }

        
        /**
         * 메뉴 또는 마이메뉴 목록으로 메뉴프레임 레이어를 전환합니다.
         * @param {String} listType 표시할 메뉴목록 타입입니다. 
         *					"MENU"는 일반 메뉴목록, "MYMENU" 는 마이메뉴 목록을 표시합니다.
         */
        this.fn_ChangeMenuList = function(listType) {
        	
        	this.divLNBMenu.menustatus = this.fnc_Trim(listType).toUpperCase();
        	
        	// 메뉴목록 표시
        	if (this.fnc_Trim(listType).toUpperCase() == "MENU") {
        	
        		// 메뉴 버튼 선택
        		this.divSNBLeft.btnLNBMenu.set_cssclass("btn_LF_SubMenu_S");
        		this.divLNBMenu.grdLeftMenu.set_visible(true);		// 메뉴트리
        		this.divLNBMenu.btnExpandAll.set_visible(true);		// 전체펼침 버튼
        		this.divLNBMenu.btnCollapseAll.set_visible(true);	// 전체닫힘 버튼
        		
        		this.divSNBLeft.btnLNBMyMenu.set_cssclass("btn_LF_Bookmark");
        		this.divLNBMenu.grdMyMenu.set_visible(false);		// 마이메뉴 목록
        		this.divLNBMenu.btnMoveUp.set_visible(false);		// 위로 버튼
        		this.divLNBMenu.btnMoveDown.set_visible(false);		// 아래로 버튼
        		this.divLNBMenu.btnMyMenuSave.set_visible(false);	// 저장 버튼
        		
        	// MY메뉴목록 표시
        	} else if (this.fnc_Trim(listType).toUpperCase() == "MYMENU") {
        		
        		this.divSNBLeft.btnLNBMenu.set_cssclass("btn_LF_SubMenu");
        		this.divLNBMenu.grdLeftMenu.set_visible(false);		// 메뉴트리
        		this.divLNBMenu.btnExpandAll.set_visible(false);	// 전체펼침 버튼
        		this.divLNBMenu.btnCollapseAll.set_visible(false);	// 전체닫힘 버튼
        		
        		this.divSNBLeft.btnLNBMyMenu.set_cssclass("btn_LF_Bookmark_S");
        		this.divLNBMenu.grdMyMenu.set_visible(true);		// 마이메뉴 목록
        		this.divLNBMenu.btnMoveUp.set_visible(true);		// 위로 버튼
        		this.divLNBMenu.btnMoveDown.set_visible(true);		// 아래로 버튼
        		this.divLNBMenu.btnMyMenuSave.set_visible(true);	// 저장 버튼
        		
        	}
        	
        	
        	this.fn_CheckAndShowMenuList();
        	
        }

        
        /**
         * 메뉴가 숨김 상태이라면 메뉴 목록을 표시한다.
         */
        this.fn_CheckAndShowMenuList = function() {
        		
        	var bMenuVisible = this.divLNBMenu.menuvisible;
        	
        	if (!bMenuVisible) {
        		this.fn_LeftLNBShowHide(bMenuVisible);
        	}
        	
        }

        
        /**
         * 좌측 SNB의 즐겨찾기 목록 처리
         */
        this.fn_InitFavoriteBtn = function() {
        	
        	var arrFavBtn = Eco.XComp.query(this.divSNBLeft, "prop[name] ^= 'btnShortCut'");
        	
        	// 버튼 초기화
        	for(var idx in arrFavBtn) {
        		arrFavBtn[idx].menuid = "";
        		arrFavBtn[idx].set_enable(false);
        		arrFavBtn[idx].set_tooltiptext("");
        	}
        	
        	
        	var maxRow = application.dsMyMenuList.rowcount;
        	if (maxRow > 10) maxRow = 10;
        	
        	var menuId = "";
        	for (var row = 0; row < maxRow; row++) {
        		menuId = application.dsMyMenuList.getColumn(row, "MENU_IDXX");
        		if (menuId) {
        			arrFavBtn[row].menuid = menuId;
        			arrFavBtn[row].set_enable(true);
        			arrFavBtn[row].set_tooltiptext(application.dsMyMenuList.getColumn(row, "MENU_NAME"));
        		}
        	}

        }

        
        /**
         * 메뉴 또는 MY메뉴 검색
         */
        this.fn_SearchMenuList = function() {
        	
        	var oTargetDs = null;
        	
        	if (this.divLNBMenu.menustatus == "MENU") {
        		oTargetDs = application.dsMenuList;
        	} else if (this.divLNBMenu.menustatus == "MYMENU") {
        		oTargetDs = application.dsMyMenuList;
        	}
        	
        	oTargetDs.set_enableevent(false);
        	var filterStr = oTargetDs.filterstr;
        	var findFilterStr = "(MENU_NAME.indexOf('" + this.divLNBMenu.edtMenuSearch.value + "') > -1";
        	findFilterStr = findFilterStr + " || MENU_IDXX.indexOf('" + this.divLNBMenu.edtMenuSearch.value + "') > -1)";
        	findFilterStr = findFilterStr + " && MNUT_YSNO == 0";
        	oTargetDs.filter(findFilterStr);
        	application.dsFindMenuList.clearData();
        	application.dsFindMenuList.copyData(oTargetDs, true);
        	oTargetDs.filter(filterStr);
        	oTargetDs.set_enableevent(true);
        	
        	var nTop = this.divLNBMenu.edtMenuSearch.getOffsetHeight();
        	var nLeft = 0;
        	var nWidth = 201;
        	var nHeight = 266;
        	this.pdvFindMenu.trackPopupByComponent(this.divLNBMenu.edtMenuSearch, nLeft, nTop, nWidth, nHeight);
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.divSNBLeft.btnLNBClose.addEventHandler("onclick", this.divSNBLeft_btnLNBClose_onclick, this);
            this.divSNBLeft.btnLNBMenu.addEventHandler("onclick", this.divSNBLeft_btnLNBMenu_onclick, this);
            this.divSNBLeft.btnLNBMyMenu.addEventHandler("onclick", this.divSNBLeft_btnLNBMyMenu_onclick, this);
            this.divSNBLeft.btnShortCut01.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut02.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut03.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut04.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut05.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut06.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut07.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut08.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut09.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divSNBLeft.btnShortCut10.addEventHandler("onclick", this.divSNBLeft_btnShortCut_onclick, this);
            this.divLNBMenu.grdMyMenu.addEventHandler("oncelldblclick", this.divLNBMenu_grdMyMenu_oncelldblclick, this);
            this.divLNBMenu.btnMoveUp.addEventHandler("onclick", this.divLNBMenu_btnMoveUp_onclick, this);
            this.divLNBMenu.btnMoveDown.addEventHandler("onclick", this.divLNBMenu_btnMoveDown_onclick, this);
            this.divLNBMenu.btnMyMenuSave.addEventHandler("onclick", this.divLNBMenu_btnMyMenuSave_onclick, this);
            this.divLNBMenu.edtMenuSearch.addEventHandler("onkeydown", this.divLNBMenu_edtMenuSearch_onkeydown, this);
            this.divLNBMenu.btnMenuSearch.addEventHandler("onclick", this.divLNBMenu_btnMenuSearch_onclick, this);
            this.divLNBMenu.grdLeftMenu.addEventHandler("oncellclick", this.divLNBMenu_grdLeftMenu_oncellclick, this);
            this.divLNBMenu.btnExpandAll.addEventHandler("onclick", this.divLNBMenu_btnExpandAll_onclick, this);
            this.divLNBMenu.btnCollapseAll.addEventHandler("onclick", this.divLNBMenu_btnCollapseAll_onclick, this);
            this.pdvFindMenu.addEventHandler("oncloseup", this.pdvFindMenu_oncloseup, this);
            this.pdvFindMenu.grdFindMenu.addEventHandler("oncellclick", this.pdvFindMenu_grdFindMenu_oncellclick, this);

        };

        this.loadIncludeScript("leftFrame.xfdl");

       
    };
}
)();
