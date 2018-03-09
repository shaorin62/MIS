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
                this.set_name("mnuleft");
                this.set_classname("mnuleft");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,225,775);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_bordertype("normal 0 0");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stBackGroundTop", "absolute", "0", "0", "217", null, null, "0", this);
            obj.set_taborder("13");
            obj.style.set_background("#dfe2e7ff");
            obj.style.set_border("1 solid #b1b4b9ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgShowHide", "absolute", "217", "30.06%", "8", "130", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #b1b4b9ff");
            obj.style.set_cursor("hand");
            obj.set_image("URL('theme://imagesNex/leftframe/btn_hidebar_on.png')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("stSELECT_MY", "absolute", "36", "11", "174", "12", null, null, this);
            obj.set_taborder("26");
            obj.set_text("MY메뉴");
            obj.style.set_color("#343537ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 굴림");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stSELECT_GROUP", "absolute", "36", "11", "174", "12", null, null, this);
            obj.set_taborder("17");
            obj.set_text("전체메뉴");
            obj.style.set_color("#343537ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("stIconMenuGroup", "absolute", "13", "8", "16", "16", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/ico.png')");
            this.addChild(obj.name, obj);

            obj = new Grid("grdJobList", "absolute", "7", "28", "203", null, null, "8", this);
            obj.set_cssclass("styGrid02");
            obj.set_taborder("23");
            obj.set_binddataset("dsMenuList");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.style.set_border("1 solid #b1b4b9ff");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"191\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none #808080ff ;cursor:pointer;\" text=\"bind:MENU_NAME\" treestartlevel=\"0\" treelevel=\"bind:MENU_LEVL\" treestate=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMyJobList", "absolute", "7", "28", "203", null, null, "8", this);
            obj.set_cssclass("styGrid02");
            obj.set_taborder("25");
            obj.set_binddataset("dsMyMenuList");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_visible("false");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #b1b4b9ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"191\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:1 none #808080ff ;cursor:pointer;\" text=\"bind:MENU_NAME\" treestartlevel=\"0\" treelevel=\"bind:MENU_LEVL\" treestate=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 225, 775, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnuleft");
            		p.getSetter("inheritanceid").set("");
            		p.style.set_bordertype("normal 0 0");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grdJobList","binddataset","dsMenuList","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","grdMyJobList","binddataset","dsMenuList","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("mnuLeft.xfdl", "script::lib_script_common.xjs");
        this.registerScript("mnuLeft.xfdl", function() {
        /*******************************************************************************************
          - 메인화면 좌측(Tree 메뉴 영역)
         @name mnuTop.xfdl
         @version 1.5
         @author 김석두
         @fileOverview
            메인화면 좌측 메뉴 Tree 및 단위 프로그램의 실행을 담당합니다.
            현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         @description
            date			name		explanation
            ==================================================================
            2014.07			ksd			최초작성
            2016.05.29		jsh			프레임워크 교체로 수정
            ==================================================================
         *******************************************************************************************/
        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /*****************************
         Form Load Process
         *****************************/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.imgShowHide.userdata = "hide";
        	this.fn_TreeExpandShowJobList();
        	
        }

        /*----------------------------------+
         |  Menu Tree Click Then Form Open   |
         ------------------------------------*/
        this.fn_MenuCall = function (obj,e) {

        	var dsObj = application.dsMenuList;
        	
        	// MY메뉴 그리드라면..
        	if (obj.id == "grdMyJobList") {
        		dsObj = application.dsMyMenuList;
        	}
        	
        	var iRow = e.row;

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
        		
        	sArgument[0] = sFormLoca + "[" + sProgID + "]";
        	sArgument[1] = sFormLoca;
        	sArgument[2] = sUserAuth;
        	sArgument[3] = sAuthLevel;
        	
        	this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 0, 0, sDisplay, -1, -1);

        }

        /*-------------------------------+
         |  처음 메뉴 그룹만 Expand 처리  |
         ---------------------------------*/
        this.fn_TreeExpandShowJobList = function () {

        	//메뉴 그룹에 자료가 없으면 처리 않음
        	if (application.dsMenuList.getRowCount() < 1) return;

        	var iEnd = false;
        	var iRow = 0;

        	while (iEnd == false) {

        		// 해당 Row가 Child Form을 가지고 있는냐?
        		if (this.grdJobList.getTreeChildCount(iRow, false) > 0) {
        			this.grdJobList.setTreeStatus(iRow, true);
        			iRow++;
        		} else {
        			iEnd = true;
        		}

        	}

        }

        /*--------------------------------+
         |  imgShowHide ImageViewer Click  |
         
            application.FRMLEFT.form.컴포넌트id
            
            application.FRMTOP   = application.mainframe.VFrameSet.FRMTOP;
        	application.FRMLEFT  = application.mainframe.VFrameSet.HFrameSet.FRMLEFT;
        	application.MAINWORK = application.mainframe.VFrameSet.HFrameSet.MAIN_WORK;
         
         ----------------------------------*/
        this.fn_LeftFrameShowHide = function(obj,e) {

        	//레이아웃 변경으로 탑프레임의 탭 위치를 수정해야한다.
        	
        	var objTopForm = application.FRMTOP.form;

        	//닫힌 상태에서 열릴 때
        	if (obj.userdata == "show") {

        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("225,*");
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_on.png");
        		this.grdJobList.set_visible(true);
        		this.stBackGroundTop.set_visible(true);
        		
        		//레프트메뉴 배경판을 top하나만 남김
        		
        		//this.stBackGroundMiddle.set_visible(true);
        		//this.stBackGroundBottom.set_visible(true);
        		//this.stIconUserInfo.set_visible(true);
        		
        		this.stIconMenuGroup.set_visible(true);
        		obj.set_left(217);
        		
        		//업무화면 탭
        		objTopForm.tabOpenMenu.set_left(233);
        		//레프트 메인/마이메뉴의 탭
        		objTopForm.tabLeftSubMenu.set_visible(true);
        		obj.userdata = "hide";

        	//열린 상태에서 닫을 때
        	} else {

        		application.mainframe.VFrameSet.HFrameSet.set_separatesize("8,*");
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_off.png");
        		this.grdJobList.set_visible(false);
        		this.stBackGroundTop.set_visible(false);
        		
        		//this.stBackGroundMiddle.set_visible(false);
        		//this.stBackGroundBottom.set_visible(false);
        		//this.stIconUserInfo.set_visible(false);
        		
        		this.stIconMenuGroup.set_visible(false);
        		obj.set_left(0);
        		
        		//업무화면 탭
        		objTopForm.tabOpenMenu.set_left(16);//열기닫기버튼8+업무화면 여백8
        		//레프트 메인/마이메뉴의 탭
        		objTopForm.tabLeftSubMenu.set_visible(false);		
        		obj.userdata = "show";

        	}

        }

        /*--------------------------------------------+
         |  imgShowHide ImageViewer Mouse Enter(Over)  |
         ----------------------------------------------*/
        this.fn_LeftFrameShowHideMouseOver = function (obj,e) {

        	if (obj.userdata == "show") {
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_off_over.png");
        	} else {
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_on_over.png");
        	}

        }

        /*-------------------------------------------+
         |  imgShowHide ImageViewer Mouse Leave(Out)  |
         ---------------------------------------------*/
        this.fn_LeftFrameShowHideMoseOut = function (obj,e) {

        	if (obj.userdata == "show") {
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_off.png");
        	} else {
        		obj.set_image("theme://imagesNex/leftframe/btn_hidebar_on.png");
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.imgShowHide.addEventHandler("onclick", this.fn_LeftFrameShowHide, this);
            this.imgShowHide.addEventHandler("onmouseenter", this.fn_LeftFrameShowHideMouseOver, this);
            this.imgShowHide.addEventHandler("onmouseleave", this.fn_LeftFrameShowHideMoseOut, this);
            this.grdJobList.addEventHandler("oncellclick", this.fn_MenuCall, this);
            this.grdMyJobList.addEventHandler("oncellclick", this.fn_MenuCall, this);

        };

        this.loadIncludeScript("mnuLeft.xfdl");

       
    };
}
)();
