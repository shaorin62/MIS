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
                this.set_name("mdiFrame_new");
                this.set_classname("mnutop");
                this.set_scrollbars("none");
                this.set_cssclass("frm_BF_mdibg");
                this._setFormPosition(0,0,1204,34);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "1179", "0", "25", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabOpenMenu", "absolute", "22", "0", null, "25", "132", null, this);
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_BF_mdi");
            obj.set_tabjustify("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabOpenMenu);
            obj.set_text("tabpage1");
            this.tabOpenMenu.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "7", "4", "17", "122", null, this);
            obj.set_taborder("55");
            obj.style.set_border("0 none #808080ff,0 none #808080ff,0 none #808080ff,1 solid #ccccccff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize", "absolute", null, "5", "15", "21", "100", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_Mdi_Max");
            obj.set_tooltiptext("단일화면보기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tilevertical", "absolute", null, "5", "15", "21", "75", null, this);
            obj.set_taborder("57");
            obj.set_cssclass("btn_Mdi_ver");
            obj.set_tooltiptext("수평정렬");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tilehorizontal", "absolute", null, "5", "15", "21", "50", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_Mdi_hor");
            obj.set_tooltiptext("수직정렬");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeall", "absolute", null, "5", "21", "20", "19", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_Mdi_Close");
            obj.set_tooltiptext("전체화면닫기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1204, 34, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnutop");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_BF_mdibg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("mdiFrame.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("mdiFrame.xfdl", "script::lib_script_theme.xjs");
        this.registerScript("mdiFrame.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	mdiFrame 메인 하단 프레임
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

        
        /**
         * 최초 화면 로드 시 처리할 내용
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 화면 재정의
        	this.fnc_SetAdjustWindows();
        	
        	// 테마 설정 적용
        	this.fnc_ThemeSetting(this);

        	
        	// 기본 탭 제거 - 넥사크로플랫폼 스튜디오에서 탭페이지를 모두 지울수 없어서 1개 남겨둠
        	for (var i = (this.tabOpenMenu.components.length - 1); i >= 0; i--){
        		this.tabOpenMenu.removeTabpage(i);
        	}
        	
        }

        
        /**
         * 좌측 메뉴트리에서 메뉴 오픈 시 오픈된 메뉴를 탭에 추가합니다.
         * @param {String} menuId 열려진 메뉴의 ID
         * @param {String} menuName 열려진 메뉴명
         * @return {Number} 오픈된 메뉴의 탭 인덱스
         */
        this.fn_AddTabPage = function (menuId,menuName) {

        	// TabPage 추가 처리
        	var tabpageCnt = this.tabOpenMenu.components.length;
        	var newIndex = this.tabOpenMenu.insertTabpage(menuId, tabpageCnt, "", menuName);	// 탭id, 탭 인덱스, 초기url, 탭 텍스트
        	this.tabOpenMenu.components[menuId].menuid = menuId;
        	this.tabOpenMenu.components[menuId].set_text(menuName);
        	this.tabOpenMenu.set_tabindex(newIndex);
        	return newIndex;
        	
        }

        
        /**
         * 열려있는 메뉴 탭 페이지 이동 시
         */
        this.tabOpenMenu_onchanged = function(obj,e)
        {
        	if (this.tabOpenMenu.components[e.postindex] == null) return;
        	if (this.tabOpenMenu.components[e.postindex].menuid == undefined) return;

        	var childName = this.tabOpenMenu.components[e.postindex].menuid;
        	var objChild  = application.MAINWORK.frames[childName];
        	if (objChild.openstatus == "minimize") objChild.openstatus = "maximize";
        	objChild.setFocus();
        }

        
        /**
         * 열려있는 메뉴탭의 닫기 버튼 클릭 시
         */
        this.tabOpenMenu_onextrabuttonclick = function(obj,e)
        {
        	var childName = this.tabOpenMenu.components[e.index].id;

        	try {

        		if(application.MAINWORK.frames[childName].form.all.length == 0) {
        			this.tabOpenMenu.removeTabpage(e.index);
        			application.MAINWORK.frames[childName].form.close();
        			
        		} else {
        			application.MAINWORK.frames[childName].form.close();
        		}
        		
        	} catch (e) {}

        	/*	// 왜 또 필요한건지...??
        	try {
        		application.MAINWORK.frames[childName].form.close();
        	} catch (e) {}
        	*/
        }

        /**
         * 오픈된 화면의 탭이 선택되도록 처리
         * @param {String} sMenuId 선택된 메뉴의 ID
         */
        this.fn_SetTab = function (sMenuId) {
        	
        	for (var i = 0; i < this.tabOpenMenu.components.length; i++) {
        		if (this.tabOpenMenu.components[i].menuid == sMenuId) {
        			this.tabOpenMenu.set_tabindex(i);
        			break;
        		}
        	}
        	
        }

        
        /**
         * 열려있는 화면 탭을 삭제한다.
         * @param {String} sMenuId 선택된 메뉴의 ID
         */
        this.fn_RemoveTabPage = function (sMemuId) {

        	for (var i = 0; i < this.tabOpenMenu.components.length; i++) {
        		if (this.tabOpenMenu.components[i].menuid == sMemuId) {
        			this.tabOpenMenu.removeTabpage(i);
        			break;
        		}
        	}

        }

        
        /**
         * 화면 정렬 버튼 클릭 이벤트
         */
        this.fn_ArrangeWindows = function (obj,e) {
        	
        	if (obj.name == "btn_maximize") {
        		
        		var tabIndex = this.tabOpenMenu.tabindex;
        		var menuId = this.tabOpenMenu.components[tabIndex].menuid;

        		var nFrameCnt = application.MAINWORK.frames.length;
        		
        		for (var idx = 0; idx < nFrameCnt; idx++) {
        			application.MAINWORK.frames[idx].set_openstatus("maximize");
        			application.MAINWORK.frames[idx].set_showtitlebar(false);
        			application.MAINWORK.frames[idx].set_showstatusbar(false);
        			application.MAINWORK.frames[idx].set_showcascadetitletext(true);
        			application.MAINWORK.frames[idx].set_dragmovetype("normal");
        			application.MAINWORK.frames[idx].set_resizable(false);
        		}
        		
                application.MAINWORK.frames[menuId].setFocus();

        	
        		//application.MAINWORK.arrange("");	// 단일화면보기
        		//application.MAINWORK.arrange("cascade");    //계단식
        	} else if (obj.name == "btn_tilehorizontal") {
        		application.MAINWORK.arrange("horizontal"); //가로정렬
        	} else if (obj.name == "btn_tilevertical") {
        		application.MAINWORK.arrange("vertical");   //세로정렬
        	}

        	//화면 정렬 시 Title Bar 보이게 하고 나중에 Max 시 처리를 위한 Event Handler 처리
        	for (var i = 0 ; i < application.MAINWORK.all.length  ; i++){
        		application.MAINWORK.frames[i].set_showtitlebar(true);
        		application.MAINWORK.frames[i].titlebar.maxbutton.addEventHandler("onclick", this._Maxbuttononclick, application.MAINWORK.frames[i].form);
        	}

        }

        
        /**
         * 열린화면 모두 닫기 버튼 클릭 이벤트
         */
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
        	
        	// NSCOM :: 화면 전체닫기 할 때에 탭을 별도로 처리하지 않음. 화면닫히면서 처리.
        	//for (var j = 0; j <= this.tabOpenMenu.getTabpageCount(); j++) {
        	//	this.tabOpenMenu.removeTabpage(j);
        	//}

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.tabOpenMenu.addEventHandler("onchanged", this.tabOpenMenu_onchanged, this);
            this.tabOpenMenu.addEventHandler("onextrabuttonclick", this.tabOpenMenu_onextrabuttonclick, this);
            this.btn_maximize.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.btn_tilevertical.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.btn_tilehorizontal.addEventHandler("onclick", this.fn_ArrangeWindows, this);
            this.btn_closeall.addEventHandler("onclick", this.fn_CloseAll, this);

        };

        this.loadIncludeScript("mdiFrame.xfdl");

       
    };
}
)();
