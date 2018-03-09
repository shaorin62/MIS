//XJS=lib_script_theme.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
         /***************************************************************************************************
         * # Program : lib_script_theme.xjs	공통>메인>테마 처리 공통 스크립트
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.04		jsh			Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/

        /**
         *  이 공통 스크립트 파일의 함수는 테마와 관련된 기능을 지원합니다.
         *  기본 테마의 적용부터 변경 및 테마와 관련하여 부수적으로 변경하여야 하는 
         *  각 폼, 컴포넌트 별 처리를 위한 기능을 지원합니다.
         */

        /**
         * 전역변수의 테마 설정값에 따라 화면의 테마를 적용한다.
         * @param {Object:nexacro.Form} 테마를 적용하고자 하는 Form
         */
        this.fnc_ThemeSetting = function(oTargetForm) {
        	
        	var themeId = application.GBL_THEMECD;
        	var themePrefix = themeId.substring(0, 1);
        	
        	// 기본 CSS 적용
        	oTargetForm.loadStyle("css::Common_" + themePrefix + ".css");
        	
        	// Frame CSS 적용
        	oTargetForm.loadStyle("css::Frame_" + themePrefix + ".css", false);
        	
        	// Work CSS 적용
        	oTargetForm.loadStyle("css::Work_" + themePrefix + ".css", false);
        	
        }

        
        /**
         * 어플리케이션 로드 후 또는 테마 변경 후 화면사이즈에 맞게 프레임, 폼, 컴포넌트 등이
         * 적절한 화면 사이즈에 맞게 재배치 및 리사이즈되도록 처리한다.
         */
        this.fnc_SetAdjustWindows = function() {

        	// 웹브라우저에서 리사이즈에 따른 버그(?) 등으로 프레임이 안맞는 경우가 생김
        	// mdi가 마지막으로 로딩되므로, MDI에서 강제로 리사이즈 일어나도록
        	// 사이즈를 살짝 줄였다가 원상복구. 사용자 눈치 못채도록!
        	if (nexacro.Browser != "Runtime") {
        		var w = window.outerWidth;
        		var h = window.outerHeight;
        		window.top.resizeTo(w, h - 1);	// 화면 창 조정으로 강제로 메인프레임의 프레임들을 리사이즈 시킴
        		
        		// 리사이즈 처리 후 표준 화면창으로 사이즈 정리
        		application.application_resizeframe(nexacro.Browser, (application.GBL_FRAMETYPE == "SDI"));
        		
        	}

        }

        
        /**
         * 대시보드를 표시할 때 다시 대시보드에 표시되는 항목들(알람, 공지사항 목록 등)이
         * 갱신될 수 있도록 한다.
         */
        this.fnc_RefreshChilds = function(oParentForm) {
        	// 지정된 부모폼의 모든 자식 폼의 fn_RefreshForm 함수를 찾아서 실행시켜 준다.
        	//trace("------ target : " + oParentForm.name + " start");
        	// 해당 폼의 Control을 배열에 할당한다.
        	if (oParentForm.components) {
        	
        		var childsArr = oParentForm.components;
        		var child = null;
        		
        		// Form에서 Componect 만큼 돌면서
        		for (var idx = 0; idx < childsArr.length; idx++) {
        			child = childsArr[idx];
        			//trace("------ target : " + oParentForm.name + " child : " + child.name);
        			
        			if ((child.fn_RefreshForm != null) && (typeof child.fn_RefreshForm == "function")) {
        				//trace("------ target : " + oParentForm.name + " child : " + child.name + ", calling fn_RefreshHome");
        				child.fn_RefreshForm();
        			}
        			
        			if (child.components) {
        				this.fnc_RefreshChilds(child)
        			}
        			
        		}
        		
        	}
        }

        

        

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
