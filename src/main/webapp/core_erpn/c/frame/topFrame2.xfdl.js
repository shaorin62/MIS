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
                this.set_name("mnutop");
                this.set_classname("mnutop");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1278,92);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_border("0 none transparent transparent");
            this.style.set_bordertype("normal 0 0");

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsMenuAllList", this);
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
            obj = new Tab("tabOpenMenu", "absolute", "233", "72", null, "20", "8", null, this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("styMenuTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tabOpenMenu);
            obj.set_text("tabpage2");
            this.tabOpenMenu.addChild(obj.name, obj);

            obj = new ImageViewer("imgcascade1", "absolute", null, "6", "26", "26", "177", null, this);
            obj.set_taborder("4");
            obj.set_image("URL('theme://imagesInbus/imgcascade1ot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new Static("stMainBG", "absolute", "211", "0", null, "70", "0", null, this);
            obj.set_taborder("17");
            obj.style.set_background("#ffffff00 URL('theme://imagesNex/topframe/top_bg.gif') repeat-x");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgcascade2", "absolute", null, "6", "26", "26", "149", null, this);
            obj.set_taborder("5");
            obj.set_image("URL('theme://imagesInbus/imgcascade2ot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgcascade3", "absolute", null, "6", "26", "26", "121", null, this);
            obj.set_taborder("6");
            obj.set_image("URL('theme://imagesInbus/imgcascade3ot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgSystemLock", "absolute", null, "6", "26", "26", "93", null, this);
            obj.set_taborder("7");
            obj.set_image("URL('theme://imagesInbus/imgSystemLockot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgChangePW", "absolute", null, "6", "26", "26", "65", null, this);
            obj.set_taborder("8");
            obj.set_image("URL('theme://imagesInbus/imgChangePWot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgAllClose", "absolute", null, "6", "26", "26", "37", null, this);
            obj.set_taborder("9");
            obj.set_image("URL('theme://imagesInbus/imgAllCloseot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogout", "absolute", null, "6", "26", "26", "9", null, this);
            obj.set_taborder("10");
            obj.set_image("URL('theme://imagesInbus/imgLogoutot.png')");
            obj.style.set_cursor("hand");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_UserInfo00", "absolute", "0", "0", "211", "70", null, null, this);
            obj.set_taborder("11");
            obj.set_image("URL('theme://imagesNex/topframe/top_back_inbus.gif')");
            obj.set_cssclass("styFormImageDisplay");
            obj.style.set_border("0 none #c9cbccff");
            this.addChild(obj.name, obj);

            obj = new Tab("tabTopMenu", "absolute", "233", "40", null, "28", "8", null, this);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_usecontrolkey("false");
            obj.set_multiline("false");
            obj.set_cssclass("styTopMenuTabControl");
            obj.set_tabjustify("false");
            obj.set_tabposition("top");
            this.addChild(obj.name, obj);
            obj = new Tabpage("allmenu", this.tabTopMenu);
            obj.set_text("tabpage1");
            this.tabTopMenu.addChild(obj.name, obj);

            obj = new Tab("tabLeftSubMenu", "absolute", "7", "72", "200", "20", null, null, this);
            obj.set_taborder("15");
            obj.set_tabindex("0");
            obj.set_usecontrolkey("false");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("mainmenu", this.tabLeftSubMenu);
            obj.set_text("전체메뉴");
            this.tabLeftSubMenu.addChild(obj.name, obj);
            obj = new Tabpage("mymenu", this.tabLeftSubMenu);
            obj.set_text("MY메뉴");
            this.tabLeftSubMenu.addChild(obj.name, obj);

            obj = new Static("stUSER_INFO", "absolute", "233", "7", null, "16", "220", null, this);
            obj.set_taborder("16");
            obj.set_text("[프로젝트3팀] 장성환  접속 IP : 127.0.0.1");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/user.png') no-repeat 0px");
            obj.style.set_color("black");
            obj.style.set_padding("2 0 0 18");
            obj.style.set_align("left middle");
            obj.style.set_font("9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "6", "26", "26", "177", null, this);
            obj.set_taborder("18");
            obj.set_text("BOT");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1278, 92, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnutop");
            		p.getSetter("inheritanceid").set("");
            		p.style.set_border("0 none transparent transparent");
            		p.style.set_bordertype("normal 0 0");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("topFrame2.xfdl", "script::lib_script_common.xjs");
        this.registerScript("topFrame2.xfdl", function() {
        /*******************************************************************************************
          - 메인화면 상단(Top 메뉴 영역)
         @name mnuTop.xfdl
         @version 1.5
         @author 김석두
         @fileOverview
            메인 화면의 상단 Top 메뉴를 구성하는 화면입니다.
            현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         @description
            date			name		explanation
            ==================================================================
            2014.07			ksd			최초작성
            2016.05.29		jsh			프레임워크 교체로 수정
            ==================================================================
         *******************************************************************************************/
        //include "script::lib_script_common.xjs"
        this.sSELECTSYSTEM = "";

        /*****************************
           Form Load Process
         *****************************/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//로그인 사용자 정보 Display
        	var sUserInfo = "[" + application.GBL_DEPTNM + "] " + application.GBL_USERNM+ "   접속IP : " + application.GBL_LOGINIP;

        	this.stUSER_INFO.set_text(sUserInfo);
        	
        	//Design Mode의 하나 남은 TabPage 제거 - 시스템 구분
        	for (var i = (this.tabTopMenu.components.length - 1); i >= 0; i--){
        		this.tabTopMenu.removeTabpage(i);
        	}

        	//Design Mode의 하나 남은 TabPage 제거 - Open Form List
        	for (var i = (this.tabOpenMenu.components.length - 1); i >= 0; i--){
        		this.tabOpenMenu.removeTabpage(i);
        	}

        	//메뉴 List로 Top Menu 목록 구성
        	this.dsMenuAllList.copyData(application.dsMenuList);
        	this.dsTopMenu.copyData(application.dsMenuList);
        	this.dsTopMenu.filter("MENU_LEVL == '1'");

        	//시스템 구분 Tab Insert 처리
        	for (var i = 1; i < this.dsTopMenu.rowcount + 1 ; i++){
        		this.tabTopMenu.insertTabpage(this.dsTopMenu.getColumn(i-1, "SYST_CODE").trim(), i, "", this.dsTopMenu.getColumn(i-1,"MENU_NAME").trim());
        	}
        	
        	// 최초 실행 시 기본 라벨 표시
        	application.FRMLEFT.form.stSELECT_GROUP.set_text("전체업무");
        	this.tabTopMenu.insertTabpage("allmenu", 0, "", "전체업무");
        }

        /******************************************************
          시스템 구분 Tab 변경 시 해당 메뉴 처리
         ******************************************************/
        this.fn_SystemTabChange = function(obj,e) {

        	//현재 선택된 시스템
        	this.sSELECTSYSTEM = this.tabTopMenu.components[e.postindex].id;
        	
        	// Menu Filter
        	if (this.sSELECTSYSTEM == "allmenu") {
        		application.dsMenuList.filter("");
        	} else {
        		// 메뉴 필터 시 대분류 메뉴 자신은 제외되도록
        		application.dsMenuList.filter("SYST_CODE=='" + this.sSELECTSYSTEM + "' && MENU_IDXX != 'M" + this.sSELECTSYSTEM + "'");
        	}

        	// Left Frame Tree Expand(0)
        	application.FRMLEFT.form.fn_TreeExpandShowJobList();

        	//선택메뉴
        	application.FRMLEFT.form.stSELECT_GROUP.set_text(this.tabTopMenu.components[e.postindex].text);

        }

        /*****************************************************
          오픈 화면 목록 Tabpage 변경 시 해당 화면으로 Focus
         *****************************************************/
        this.fn_TabChange = function (obj,e) {

        	if (this.tabOpenMenu.components[e.postindex] == null) return;
        	if (this.tabOpenMenu.components[e.postindex].menuid == undefined) return;

        	var childName = this.tabOpenMenu.components[e.postindex].menuid;
        	var objChild  = application.MAINWORK.frames[childName];
        	if (objChild.openstatus == "minimize") objChild.openstatus = "maximize";
        	objChild.setFocus();

        	var iRow      = application.dsMenuList.findRow("MENU_IDXX", childName);
        	if (iRow < 0) {

        		/**********************************************************************
        		 선택된 텝의 메뉴가 현재 Dataset에 없으면 unfilter 후 해당 화면 찾고
        		 그 메뉴의 시스템 코드로 필더 후 Tree의 Row 줍니다.
        		 **********************************************************************/
        		application.dsMenuList.filter("");                             //unfilter
        		iRow = application.dsMenuList.findRow("MENU_IDXX", childName); //해당 메뉴 찾기

        		var sSystemCode = application.dsMenuList.getColumn(iRow, "SYST_CODE");
        		application.dsMenuList.filter("SYST_CODE=='" + sSystemCode + "'"); //해당 시스템으로 Filter
        		
        		iRow = application.dsMenuList.findRow("MENU_IDXX", childName); //해당 메뉴 찾기

        		/**********************************************************************
        		 해당 메뉴 그룹에서 선택된 텝의 화면이 나올 때 까지 Tree Expand 처리
        		 **********************************************************************/
        		application.FRMLEFT.form.grdJobList.set_enableredraw(false);
        		for (var i = 0; i < application.dsMenuList.getRowCount(); i++) {

        			if (childName == application.dsMenuList.getColumn(i, "MENU_IDXX")) {

        				// 선택된 메뉴를 찾았으면 For문 종료
        				break;

        			} else {

        				// 만약 Child node가 있으면 Expand 처리
        				if (application.FRMLEFT.form.grdJobList.getTreeChildCount(i, false) > 0) {
        					application.FRMLEFT.form.grdJobList.setTreeStatus(i, true);
        				}

        			}

        		}

        		application.FRMLEFT.form.grdJobList.set_enableredraw(true);
        		// 해당 위치로 Row Position Change...
        		this.iRow  = iRow;
        		this.setTimer(0, 5);

        	} else {

        		// 선택된 텝의 메뉴가 현재 Dataset에 있다면 해당 Row로 이동
        		application.dsMenuList.set_rowposition(iRow);

        	}

        }

        /*******************************
         화면 종료(Tabpage Remove )
         *******************************/
        this.fn_CloseTab = function (obj,e) {

        	var childName = this.tabOpenMenu.components[e.index].id;

        	try {

        		if(application.MAINWORK.frames[childName].form.all.length == 0) {
        			
        			this.tabOpenMenu.removeTabpage(e.index);
        			application.MAINWORK.frames[childName].form.close();
        			
        		} else {
        			
        			application.MAINWORK.frames[childName].form.close();
        		}
        		
        	} catch (e) {}

        

        	try {
        		application.MAINWORK.frames[childName].form.close();
        	} catch (e) {}

        }

        /********************************************************************
          화면 Open(Tabpage Add ) - Left Frame에서 메뉴 실행 시 Tab Page Add
         ********************************************************************/
        this.fn_AddTabPage = function (menuID,menuNM) {

        	// TabPage 추가 처리
        	var tabpageCnt = this.tabOpenMenu.components.length;
        	var newIndex = this.tabOpenMenu.insertTabpage(menuID, tabpageCnt);
        	this.tabOpenMenu.components[menuID].menuid = menuID;
        	this.tabOpenMenu.components[menuID].set_text(menuNM);
        	this.tabOpenMenu.set_tabindex(newIndex);

        	return newIndex;
        	
        }

        /**************************************************************
          화면 Close(Tabpage Remode) - 화면 Unload 시 Tab Page Remove 
         **************************************************************/
        this.fn_RemoveTabPage = function (sMemuId) {

        	for (var i = 0; i < this.tabOpenMenu.components.length; i++) {

        		if (this.tabOpenMenu.components[i].menuid == sMemuId) {
        			this.tabOpenMenu.removeTabpage(i);
        			break;
        		}

        	}

        }

        /**************************************************************
          이미 오픈된 화면으로 Tab Page 보내기 
         **************************************************************/
        this.fn_SetTab = function (sMemuId) {

        	for (var i = 0; i < this.tabOpenMenu.components.length; i++) {

        		if (this.tabOpenMenu.components[i].menuid == sMemuId) {
        			this.tabOpenMenu.set_tabindex(i);
        			break;
        		}

        	}

        	var sSystcode = this.dsMenuAllList.lookup("MENU_IDXX", sMemuId, "SYST_CODE");

        	for (var i = 0; i < this.tabTopMenu.components.length; i++) {

        		if (this.tabTopMenu.components[i].name  == sSystcode) {
        			this.tabTopMenu.set_tabindex(i);
        			break;
        		}

        	}	

        }

        /********************************************
         Image Button MouseOver(우측 상단 메뉴 모음)
         ********************************************/
        this.fn_ButtonMouseOver = function(obj,e) {
        	obj.set_image("URL('theme://imagesInbus/" + obj.name + "ov.png')");
        }

        /********************************************
         Image Button MouseOut(우측 상단 메뉴 모음)
         ********************************************/
        this.fn_ButtonMouseOut =  function(obj,e) {
        	obj.set_image("URL('theme://imagesInbus/" + obj.name + "ot.png')");
        }

        /***************************************
         Frameset의 화면 정렬
         ***************************************/
        this.fn_ArrangeWindows = function (obj,e) {
        	
        	if (obj.name == "imgcascade1") {
        		application.MAINWORK.arrange("cascade");    //계단식
        	} else if (obj.name == "imgcascade2") {
        		application.MAINWORK.arrange("horizontal"); //가로정렬
        	} else if (obj.name == "imgcascade3") {
        		application.MAINWORK.arrange("vertical");   //세로정렬
        	}

        	//화면 정렬 시 Title Bar 보이게 하고 나중에 Max 시 처리를 위한 Event Handler 처리
        	for (var i = 0 ; i < application.MAINWORK.all.length  ; i++){
        		application.MAINWORK.frames[i].set_showtitlebar(true);
        		application.MAINWORK.frames[i].titlebar.maxbutton.addEventHandler("onclick", this._Maxbuttononclick, application.MAINWORK.frames[i].form);
        	}

        }

        /***************************************
         System Lock
         ***************************************/
        this.fn_SystemLock = function (obj,e) {

        	var objNewFrm = new ChildFrame();
        	objNewFrm.set_showtitlebar(false);
        	objNewFrm.set_showstatusbar(false);
        	objNewFrm.set_openalign("center middle");
        	objNewFrm.init("SystemLock", "absolute",  0, 0, 0, 0, null, null, "common::comLock.xfdl");
        	objNewFrm.showModal(application.MAINWORK);

        }

        /***************************************
         Change Password
         ***************************************/
        this.fn_PasswordChange = function (obj,e) {

        	this.fnc_Message("TMM125", "비밀번호의 변경은 포털시스템에서 변경하세요");
        	return;
        	/*  	SSO/EAM에서 처리
        	var objNewFrm = new ChildFrame();
        	objNewFrm.set_showtitlebar(false);
        	objNewFrm.set_showstatusbar(false);
        	objNewFrm.set_openalign("center middle");
        	objNewFrm.init("ChangePasswork", "absolute",  0, 0, 0, 0, null, null, "tmm::TMMB0080.xfdl");
        	objNewFrm.showModal(application.MAINWORK);
        	*/
        }

        /***************************************
         Close All Form
         ***************************************/
        this.fn_CloseAll = function (obj,e) {

        	if (application.MAINWORK.all.length < 1) {
        		this.fnc_Message("TMM125", "현재 실행중인 화면이 없습니다");
        		return;   //활성화된 화면이 없으면 그냥 종료....
        	}
        	
        	if (!this.fnc_Message("TMM117")) return;            //닫기 여부 확인

        	//실행중인 모든 화면 닫기
        	for (var i = (application.MAINWORK.all.length - 1); i >= 0; i--) {
        		try {
        			application.MAINWORK.all[i].form.close();
        		} catch (e) {}
        	}

        	for (var j = 0; j <= this.tabOpenMenu.getTabpageCount(); j++) {
        		this.tabOpenMenu.removeTabpage(j);
        	}

        }

        /***************************************
         System End
         ***************************************/
        this.fn_SystemLogout = function (obj,e) {

        	if (!this.fnc_Message("TMM140", "실행중인 모든 화면을 닫고 시스템을 종료하시겠습니까?")) return;

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

        this.iRow = 0; //Row Position Change 오동작 대응

        this.fn_OnTimer = function(obj,e) {
        	application.dsMenuList.set_rowposition(this.iRow);
        	this.killTimer(0);
        }

        /*-------------------------------------------+
         |  레프트서브메뉴 탭이 변경될 때 menu <> MYmenu,  |
            기존 mnuLeft.xfdl에 있는 메뉴종류탭을 top으로 옮겨서
            mainmenu, mymenu grid 포인터가 달라짐
          
            application.FRMLEFT.form.컴포넌트id
            
            application.FRMTOP   = application.mainframe.VFrameSet.FRMTOP;
        	application.FRMLEFT  = application.mainframe.VFrameSet.HFrameSet.FRMLEFT;
        	application.MAINWORK = application.mainframe.VFrameSet.HFrameSet.MAIN_WORK;
         ---------------------------------------------*/
        this.fn_LeftSubTabChange = function(obj,e)
        {
        	//[taborder:tabid] = 0:mainmenu,1:mymenu 
        	var tabid = this.tabLeftSubMenu.components[e.postindex].id;//하드코딩된 탭이라 index로 해도 상관없음
        	
        	var objLeftForm = application.FRMLEFT.form;
        	switch(tabid){
        		case "mainmenu":
        			objLeftForm.grdJobList.set_visible(true);
        			objLeftForm.stSELECT_GROUP.set_visible(true);
        			objLeftForm.grdMyJobList.set_visible(false);
        			objLeftForm.stSELECT_MY.set_visible(false);
        		
        			break;
        		case "mymenu":
        			objLeftForm.grdJobList.set_visible(false);
        			objLeftForm.stSELECT_GROUP.set_visible(false);
        			objLeftForm.grdMyJobList.set_visible(true);
        			objLeftForm.stSELECT_MY.set_visible(true);
        			break;
        		default :
        			//메뉴탭은 2개만 있고 동적으로 추가되거나 제거되지 않음. id가 없으면 코딩 에러
        			objLeftForm.grdJobList.set_visible(true);
        			objLeftForm.stSELECT_GROUP.set_visible(true);
        			objLeftForm.grdMyJobList.set_visible(false);
        			objLeftForm.stSELECT_MY.set_visible(false);		
        			break;
        	}
        	
        }

        this.Button00_onclick = function(obj,e) {
        	this.fn_swapTB();
        }

        this.fn_swapTB = function(){
        	if ((this.Button00.userdata == undefined) || (this.Button00.userdata == "TOP")) {
        		this.Button00.userdata = "BUTTOM";
        		this.Button00.set_text("TOP");
        		application.mainframe.VFrameSet.FRMTOP.set_top(application.mainframe.VFrameSet.HFrameSet.height);
        		application.mainframe.VFrameSet.HFrameSet.set_top(0);
        	} else if (this.Button00.userdata == "BUTTOM") {
        		this.Button00.userdata = "TOP";
        		this.Button00.set_text("BOT");
        		application.mainframe.VFrameSet.FRMTOP.set_top(0);
        		application.mainframe.VFrameSet.HFrameSet.set_top(92);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("ontimer", this.fn_OnTimer, this);
            this.tabOpenMenu.addEventHandler("onextrabuttonclick", this.fn_CloseTab, this);
            this.tabOpenMenu.addEventHandler("onchanged", this.fn_TabChange, this);
            this.imgcascade1.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.imgcascade1.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgcascade1.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgcascade2.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.imgcascade2.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgcascade2.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgcascade3.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.imgcascade3.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgcascade3.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgSystemLock.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgSystemLock.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgSystemLock.addEventHandler("onclick", this.fn_SystemLock, this);
            this.imgChangePW.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgChangePW.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgChangePW.addEventHandler("onclick", this.fn_PasswordChange, this);
            this.imgAllClose.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgAllClose.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgAllClose.addEventHandler("onclick", this.fn_CloseAll, this);
            this.imgLogout.addEventHandler("onmouseenter", this.fn_ButtonMouseOver, this);
            this.imgLogout.addEventHandler("onmouseleave", this.fn_ButtonMouseOut, this);
            this.imgLogout.addEventHandler("onclick", this.fn_SystemLogout, this);
            this.tabTopMenu.addEventHandler("onchanged", this.fn_SystemTabChange, this);
            this.tabLeftSubMenu.addEventHandler("onchanged", this.fn_LeftSubTabChange, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("topFrame2.xfdl");

       
    };
}
)();
