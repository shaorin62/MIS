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
                this.set_name("topFrame");
                this.set_classname("mnutop");
                this.set_scrollbars("none");
                this.set_cssclass("frm_TF_Bg");
                this._setFormPosition(0,0,1264,50);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsGBL_SYSTCD</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTopMenu", this);
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
            obj = new Static("staUserInfo", "absolute", null, "15", "191", "24", "168", null, this);
            obj.set_taborder("50");
            obj.set_text("홍길동(0123456)");
            obj.style.set_color("#959595ff");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staLogoImg", "absolute", "75", "14", "104", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_logo");
            obj.set_tooltiptext("농심기획");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome", "absolute", "0", "0", "60", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_home");
            obj.set_tooltiptext("HOME");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyinfo", "absolute", null, "12", "34", "27", "67", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_myinfo");
            obj.set_tooltiptext("나의정보");
            this.addChild(obj.name, obj);

            obj = new Button("btnMySetting", "absolute", null, "12", "34", "27", "67", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_set");
            obj.set_tooltiptext("설정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSystemClose", "absolute", null, "12", "34", "27", "20", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_logout");
            obj.set_tooltiptext("시스템닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1244", "0", "20", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabTopMenu", "absolute", "303", "13", null, "28", "162", null, this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_TF_menu");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabTopMenu);
            obj.set_text("공통관리");
            this.tabTopMenu.addChild(obj.name, obj);

            obj = new Combo("cmbGBL_SYSTCD", "absolute", "195", "10", "115", "28", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("com_TF_system");
            obj.set_tooltiptext("시스템선택");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1264, 50, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnutop");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_TF_Bg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("topFrame.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("topFrame.xfdl", "script::lib_script_theme.xjs");
        this.registerScript("topFrame.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	topFrame 메인 상단 프레임
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.14		jsh			Initial Created.
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
        //include "script::lib_script_theme.xjs"

        /**
         *  화면 변수 선언
         */
        this.iRow = 0; //Row Position Change 오동작 대응

        this.bShowHome = false;

        /**
         * 최초 화면 로드 시 처리할 내용
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 다국어 처리에 따라
        	if (application.GBL_LANGCD != "ko") {
        		this.btnMySetting.set_tooltiptext("Setting");
        		this.btnMyinfo.set_tooltiptext("My Info");
        		this.btnSystemClose.set_tooltiptext("System Exit");
        	}
        	
        	// 솔루션일때는 테마설정 버튼 활성화
        	if (application._SVCENV == "SOLUTION") {
        		this.btnMyinfo.set_right(114);
        		this.btnMySetting.set_visible(true);
        	}
        	
        	// 화면 재정의
        	this.fnc_SetAdjustWindows();
        	
        	// 테마 설정 적용
        	this.fnc_ThemeSetting(this);
        	
        	// 사원정보 표시
        	var infoStr = application.GBL_USERNM + "(" + application.GBL_EMPLNO + ")";
        	this.staUserInfo.set_text(infoStr);
        	
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	// 기본 탭 제거 - 넥사크로플랫폼 스튜디오에서 탭페이지를 모두 지울수 없어서 1개 남겨둠
        	for (var i = (this.tabTopMenu.components.length - 1); i >= 0; i--){
        		this.tabTopMenu.removeTabpage(i);
        	}
        	
        	// 메인(대시보드) 표시
        	this.fn_ShowHome(true);
        	
        	// 상단메뉴 초기화
        	this.fn_InitTopMenuTab();

        }

        
        /**
         * Transaction 후 처리
         */
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}

        }

        
        /**
         * Transaction 후 Post Process!
         */
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "GetCommCode") {
        		this.dsGBL_SYSTCD.filter("REF3_FILD == '1' || COMD_CDNM == '선택'");
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbGBL_SYSTCD,dsGBL_SYSTCD,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.cmbGBL_SYSTCD.set_value(application.GBL_SYSTCD);
        		
        	} else if (sMethodName == "Menusearch") {
        		
        		// 시스템 구분 변경시에도 메인 홈화면 표시
        		this.fn_ShowHome(true);
        		
        		// 메뉴 목록 처리
        		this.fn_InitTopMenuTab();
        		
        		// 메뉴는 모두 전체펼침
        		application.FRMLEFT.form.divLNBMenu.grdLeftMenu.set_treeinitstatus("expand,all");
        		// 트리의 시작 레벨을 조정
        		application.FRMLEFT.form.fn_SetMenuStartLevel(1);
        		
        		// 메뉴 목록이 숨겨져있으면 다시 표시
        		application.FRMLEFT.form.fn_ChangeMenuList("MENU");
        		
        		// 좌측 즐겨찾기 버튼 재정렬
        		application.FRMLEFT.form.fn_InitFavoriteBtn();
        		
        	}

        }

        
        /**
         * 상단 메뉴 초기화
         */
        this.fn_InitTopMenuTab = function() {
        	
        	// 전체 메뉴 목록 처리
        	this.dsAllMenuList.clearData();
        	this.dsAllMenuList.copyData(application.dsMenuList);

        	// 전체 메뉴리스트에서 상단 1레벨 메뉴 구성
        	this.dsTopMenu.clearData();
        	this.dsTopMenu.copyData(application.dsMenuList);
        	this.dsTopMenu.filter("MENU_LEVL == '1'");
        	var nCount = this.tabTopMenu.getTabpageCount();
        	
        	this.tabTopMenu.set_enableevent(false);
        	
        	for (nIdx = nCount; nIdx >= 0; nIdx--) {
        		this.tabTopMenu.removeTabpage(nIdx);
        	}
        	
        	this.tabTopMenu.set_enableevent(true);
        	
        	// 메뉴 탭 추가
        	for (var idx = 1; idx < this.dsTopMenu.rowcount + 1 ; idx++){
        		this.tabTopMenu.insertTabpage(this.dsTopMenu.getColumn(idx - 1, "SYST_CODE").trim(), idx, "", this.dsTopMenu.getColumn(idx - 1,"MENU_NAME").trim());
        	}
        	
        	// 전체 메뉴 추가!
        	this.tabTopMenu.insertTabpage("ALLMENU", 0, "", "전체메뉴");
        	
        	// 첫번째 메뉴 탭 선택!
        	this.tabTopMenu.set_tabindex(0);
        	
        }

        /**
         * 상단 메뉴탭 클릭 시 이벤트 처리
         */
        this.tabTopMenu_onlbuttonup = function(obj,e) {

        	var sChoosedMenu = this.tabTopMenu.components[obj.tabindex].id;
        	
        	// 전체업무를 선택한 경우와 다른 메뉴를 선택한 경우
        	if (sChoosedMenu == "ALLMENU") {
        		// 메뉴 레벨 조정
        		application.FRMLEFT.form.fn_SetMenuStartLevel(1);
        		
        		application.dsMenuList.filter("");
        	} else {
        	
        		// 메뉴 레벨 조정
        		application.FRMLEFT.form.fn_SetMenuStartLevel(2);
        		
        		// 메뉴 목록을 선택된 대분류 메뉴 하위만 표시되도록 필터
        		application.dsMenuList.filter("SYST_CODE=='" + sChoosedMenu + "' && MENU_IDXX != 'M" + sChoosedMenu + "'");	
        	}
        	
        	// 메뉴는 모두 전체펼침
        	application.FRMLEFT.form.divLNBMenu.grdLeftMenu.set_treeinitstatus("expand,all");
        	
        	// 메뉴 데이터셋 행 처리
        	application.dsMenuList.set_rowposition(0);
        	
        	// 메뉴목록 표시
        	application.FRMLEFT.form.fn_ChangeMenuList("MENU");
        	
        }

        
        /**
         * 메인 상단 시스템구분 콤보 변경 시
         */
        this.cmbGBL_SYSTCD_onitemchanged = function(obj,e) {
        	
        	application.dsMenuList.filter(""); // 메뉴필터 초기화
        	var sChoosedVal = e.postvalue;
        	var sPrevVal = e.prevalue;
        	
        	application.GBL_SYSTCD = (sChoosedVal == "ALL" ? sPrevVal : sChoosedVal);

        	// 1. 선택된 시스템구분에 따라서 메뉴를 다시 조회
        	var sOutDataSet = "dsMenuList=dsMenuList dsMyMenuList=dsMyMenuList";
        	var sArgument    = " USER_IDXX=" + application.GBL_USERID;
        		sArgument	+= " SYST_CODE=" + (sChoosedVal == "ALL" ? application.GBL_SYSTCD + "||" + sChoosedVal : application.GBL_SYSTCD);
        	
        	this.fnc_TransactionCall(this, "ComMain", "Menusearch", "", sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        
        /**
         * 시스템구분 펼쳐질 때
         */
        this.cmbGBL_SYSTCD_ondropdown = function(obj,e) {
        	var ev = window.event || event;
        	
        	if (ev.ctrlKey && ev.shiftKey && (this.dsGBL_SYSTCD.getColumn(0, "COMD_CODE") != "ALL")) {
        		this.dsGBL_SYSTCD.insertRow(0);
        		this.dsGBL_SYSTCD.setColumn(0, "COMM_CODE", "SYST_CODE");
        		this.dsGBL_SYSTCD.setColumn(0, "COMD_CODE", "ALL");
        		this.dsGBL_SYSTCD.setColumn(0, "COMD_CDNM", "전체");
        	}

        }

        
        /**
         * 시스템 종료 버튼 클릭 시 로그아웃 처리
         */
        this.fn_SystemLogout = function (obj,e) {

        	if (!this.fnc_Message("TMM140", "실행중인 모든 화면을 닫고 시스템을 종료하시겠습니까?")) return;
        	
        	  this.fnc_TransactionCall(this, "ComLogin", "Logout", "", "", "", "fn_CallBack", false);
        	
        	
        	//실행중인 모든 화면 닫기
        	for (var i = (application.MAINWORK.all.length - 1); i >= 0; i--) {
        		try {
        			application.MAINWORK.all[i].form.close();
        		} catch (e) {}
        	}

        	//활성화된 화면이 없으면 시스템을 종료하고 있으면 종료처리 않음
        	if (application.MAINWORK.all.length < 1){
        			if (application.GBL_SERVERGUBUN == "LOCAL") {
        				application.exit();
        			}else{
        				window.top.close();
        			}
        	}

        }

        
        /**
         * 홈버튼 클릭 시 메인 대시보드 표시
         */
        this.btnHome_onclick = function(obj,e)
        {
        	this.fn_ShowHome(!this.bShowHome);
        }

        /**
         * 홈화면 대시보드를 보여줄것인지 말것인지 표시
         */
        this.fn_ShowHome = function(bShow) {
        	
        	this.bShowHome = bShow;
        	
        	if (bShow) {
        		application.FRMBODY.set_separatesize("0,0,*");
        		
        		if (application.FRMDASHBOARD.form.divMainTop) {
        			this.fnc_RefreshChilds(application.FRMDASHBOARD.form.divMainTop);
        		}
        		
        		// 대시보드 보여질 때 카운트 재조회
        		if (application.FRMDASHBOARD.form.divMainBottom) {
        			application.FRMDASHBOARD.form.divMainBottom.divBottomArea.fn_GetItemCount();
        		}
        	} else {
        		application.FRMBODY.set_separatesize("*,34,0");
        	}

        }

        
        /**
         * 화면 상단우측 나의정보 버튼 클릭 시 처리
         */
        this.btnMyinfo_onclick = function(obj,e)
        {
        	var cw = application.mainframe.width;
        	var ch = application.mainframe.height;
        	
        	var nTop = 25;
        	var nLeft = -187;
        	var nWidth = 305;
        	var nHeight = ch - 25;

        	var sPopupDivName 	= "_POPUPDIV_MYINFO_LAYER";
        	var oPopupDiv 	= this.components[sPopupDivName];
        	
        	// 개인정보 레이어 생성
        	if (oPopupDiv) {
        		
        		// 개인정보 레이어가 이미 표시되어 있으면 닫고 화면에서 제거..
        		if (oPopupDiv.isPopup()) {
        			oPopupDiv.closePopup();
        		}
        		
        		this.removeChild(oPopupDiv.name);
        		oPopupDiv.destroy(); 
        	}
        	
        	oPopupDiv = new nexacro.PopupDiv;
        	oPopupDiv.init(sPopupDivName, "absolute", cw - nWidth, nTop, nWidth, nHeight, null, null);
        	oPopupDiv.set_scrollbars("none");
        	oPopupDiv.set_tabstop(false);
        	oPopupDiv.set_async(false);
        	oPopupDiv.set_cssclass("pdiv_WF_Myinfo");
        	this.addChild(sPopupDivName, oPopupDiv);
        	oPopupDiv.show();
        	
        	oPopupDiv.set_url("main::myinfolayer.xfdl");
        	oPopupDiv.trackPopupByComponent(obj, nLeft, nTop, nWidth, nHeight);
        	
        }

        /**
         * 나의정보 설정 버튼 클릭 시
         */
        this.btnMySetting_onclick = function(obj,e)
        {	
        	
        	var sPopupId = "__POP_THEMESET";
        	var sFormUrl = "main::Themeset.xfdl";
        	
        	this.fnc_OpenPopup(sPopupId, sFormUrl, {}, "", "");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnHome.addEventHandler("onclick", this.btnHome_onclick, this);
            this.btnMyinfo.addEventHandler("onclick", this.btnMyinfo_onclick, this);
            this.btnMySetting.addEventHandler("onclick", this.btnMySetting_onclick, this);
            this.btnSystemClose.addEventHandler("onclick", this.fn_SystemLogout, this);
            this.tabTopMenu.addEventHandler("onlbuttonup", this.tabTopMenu_onlbuttonup, this);
            this.cmbGBL_SYSTCD.addEventHandler("ondropdown", this.cmbGBL_SYSTCD_ondropdown, this);
            this.cmbGBL_SYSTCD.addEventHandler("onitemchanged", this.cmbGBL_SYSTCD_onitemchanged, this);

        };

        this.loadIncludeScript("topFrame.xfdl");

       
    };
}
)();
