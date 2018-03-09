﻿//XJS=lib_script_common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "script::lib_gfn.xjs");
        this.addIncludeScript(path, "script::lib_script_multilang.xjs");
        this.registerScript(path, function() {

        
        /******************************************************************************************
          2014.10.01 김석두 (최초 개발)
          본 스크립트는 NEXACRO Platform 전체서 사용될 공통 함수입니다.
          
          * 만약 특정 함수의 Parameter나 Return Value 변경 시 기존 함수를 수정하시 마시고
            새로운 함수를 만들어 사용하세요!
            
          * 되도록 변경 없이 표준을 준수하세요~~!!!
            꼬~~오~~옥 수정, 추가, 삭제가 필요하시면 연락바람(협의 후 반영 예정).

          * 함수 중간에 새로운 함수 추가 하시 마세요
            현재 함수 순서대로 공통함수 정의서가 작성되어 있습니다. 
            추가 시 가장 마지막에 추가 합니다.
         ******************************************************************************************/

        // X/MI Platform 함수 Wrapping 함수 모음(향후 삭제될 예정 - 모두 Lib에 추가할 예정)
        //include "script::lib_gfn.xjs"
        //include "script::lib_script_multilang.xjs"

        /**
         * 프로그램 전체에 해당하는 메시지 처리 함수
         * @param {String} Message ID
         * @param {Array} 변환 문자열 1 ~ 5 
         * @return {boolean}
         * @example this.fnc_Message("TMM002")
         */
        this.fnc_Message = function (sMessageID,sArg1,sArg2,sArg3,sArg4,sArg5) {

          sArg1 = this.fnc_ToString(sArg1);
          sArg2 = this.fnc_ToString(sArg2);
          sArg3 = this.fnc_ToString(sArg3);
          sArg4 = this.fnc_ToString(sArg4);
          sArg5 = this.fnc_ToString(sArg5);

          if (sMessageID == 'TMM018') {

            //조회 결과 값이 존재하면 메시지 처리 않음
            if (sArg1 > 0 || sArg2 > 0 || sArg3 > 0 || sArg4 > 0 || sArg5 > 0) return true;

            //조회 결과 값이 존재하지 않으면 메시지 처리
            sMessageID = 'TMM112';  

          }

          var sMessageType = "";
          var sMessage     = "";
          var rtn          = false;
          
          // 서버에서 내려온 Error 내용을 그냥 그대로 Display 한다.
          if (sMessageID == "SERVERMSG") {
            
            sMessageType = "OK";

            /*************************************************************************************
               하단의 내용을 오라클 9i 오류 시 오후 라인 출처 제거 후 오후 메세지만 처리
               2014. 08. 01 (김석두) - 오라클 10g는 별 의미 없음 - 향후 오류 메세지에 따라
               edtMessage.value = sARG1; 이렇게 수정해도 상관 없음                         
             *************************************************************************************/
            // Oracle User Define Error Check
            var sPos  = sArg1.indexOf("ORA-20000");
              sArg1 = sArg1.split("\\n").join("\n");
              sArg1 = sArg1.split("ORA-20000: ").join("");
            var sPos2 = sArg1.indexOf("ORA-");

            // 오라클 사용자 정의 에러
            if (sPos >= 0) {
              
              // 오류 앞 부분만 DISPLAY 처리
              sMessage = sArg1.substr(sPos, sPos2-sPos);

            // 일반 오류
            } else  {
              
              if (sArg1.trim().length > 0) {
                sMessage = sArg1;
              } else {
                sMessage = '시스템에서 지원되지 않는 문자가 포함되어 있습니다.';
              }
            
            }

          // Message ID에 따른 화면 처리
          } else {
          
            var iFindRow = application.dsMessage.findRow("MSGE_CODE", sMessageID);
            
            if(iFindRow < 0){
              sMessage = "해당 메시지가 없습니다";
              //console.info("---------- 메시지ID : " + sMessageID + ",해당 메시지가 없습니다");
            } else {
              var sMessage = application.dsMessage.getColumn(iFindRow, "MSGE_CNTT");
              var iIndex = sMessage.indexOf("@");
              sMessageType = application.dsMessage.getColumn(iFindRow, "MSKN_CODE");
            }

            if (iIndex == -1) {
              sMessage = sMessage.split("\\n").join("\n");
            } else {
              sMessage = this._fnc_SetArgument(sMessage, sArg1, sArg2, sArg3, sArg4, sArg5);
            }
            
          }
          
          //console.info("---- Message Info = { Code : " + sMessageID + ", Type : " + sMessageType + ", Text : " + sMessage + " }");

          if (sMessageType == "OK") {
            alert(sMessage);
          } else {
            rtn = confirm(sMessage);
          }
          
          return rtn;
          
        }

        /***********************************************************************************************************
           함수명   : _fnc_SetArgument()
           설명     : 내부함수-메시지 코드에 변환 문자열 Replace 처리
           argument : 치환대상문자열('@'), 변환문자열1~5(sSendMessage, sArg1, sArg2, sArg3, sArg4, sArg5)
           return   : 메지시 문자(sMessage)
           2014.10.01 김석두(KSD)
         ***********************************************************************************************************/
        this._fnc_SetArgument = function (sSendMessage,sArg1,sArg2,sArg3,sArg4,sArg5) {

          var sMessage = "";
          var iInner   = 0;
          var sEval    = "";
          var arrSplit = new Array();
            arrSplit = sSendMessage.split("@");

          for (var i = 0; i < arrSplit.length; i++) {

            iInner = i + 1;

            if (iInner < arrSplit.length) {
              sEval = eval("sArg" + iInner);
            } else {
              sEval = "";
            }

            sMessage += arrSplit[i].split("\\n").join("\n") + sEval;

          }

          return sMessage;

        }

        /**
         * Form 단축키 처리
         * @param {Object} Form
         * @param {Object} Component
         * @param {event} KeyEventInfo
         * @return {None} None
         */
        this.fnc_HotKey = function (obj,objSenderObj,e) {

          var nChar = e.keycode;

          //Enter Key then Next Componect Focus(but Grid, TextArea 제외)
          if ((nChar == 13)  && !(objSenderObj instanceof TextArea) && !(objSenderObj instanceof Grid || objSenderObj.parent instanceof Grid || objSenderObj.parent.parent instanceof Grid || objSenderObj.parent.parent.parent instanceof Grid)) {
            
            var objComp = obj.getFocus();
            if(objComp instanceof Combo || objComp instanceof Calendar || objComp instanceof CheckBox){
              objSenderObj = objComp;
            }
            var oFocusComponent = this.getNextComponent(objSenderObj, true);
            oFocusComponent.setFocus();
            return;

          }
          
          /***********************************************
          * 2015.03.02 김석두                           *
          * 웹 브라우저 환경에서는 단축기 처리 불가 *
          ***********************************************/
          return;
          
          if (nChar == 116) {          // 조회(F5)
            if (obj.div_ButtonList.btnSearch.enable)  obj.div_ButtonList.btnSearch.click();
          } else if (nChar ==  113) {  // 입력(F2)
            if (obj.div_ButtonList.btnInput.enable)   obj.div_ButtonList.btnSearch.click();
          } else if (nChar ==  120) {  // 저장(F9)
            
            /***********************************************************************************
              특정 항목 수정 후 포커스 이동 없이 단축키를 통해 저장 시
              그리드 컬럼 수정 후 컬럼 이동 없이 단축키를 통해 저장 시 
              
              위 내용 시 Dataset이 변경(applychange) 되지 않아 저장되지 않는 현상 처리를 위해
              임으로 다음 컴포넌트, Next Column으로 포커스 이동 처리
              2014.10.14 김석두 수정
            ************************************************************************************/
            //if (objSenderObj instanceof Grid) {
            //  objSenderObj.moveToNextCell();
            //} else if (objSenderObj.parent instanceof Grid) {
            //         objSenderObj.parent.moveToNextCell();
            //} else if (objSenderObj.parent.parent instanceof Grid) {
            //         objSenderObj.parent.parent.moveToNextCell();
            //} else if (objSenderObj.parent.parent.parent instanceof Grid) {
            //         objSenderObj.parent.parent.parent.moveToNextCell();
            //} else {
            //  var oNextComponent = this.getNextComponent(objSenderObj, true);
            //  oNextComponent.setFocus();
            //}

            /***********************************************************************************
              필요 시 위의 코딩을 참조 하여 응용하시고
              하단의 내용으로 처리하여도 해당 문제는 해결됨(실행 버튼이 포커스를 받음)
              2014.10.15 김석두 수정
            ************************************************************************************/
            if (obj.div_ButtonList.btnSave.enable) {
              obj.div_ButtonList.setFocus();
              obj.div_ButtonList.btnSave.click();
            }

          } else if (nChar ==  119) {  // 출력(F8)
            if (obj.div_ButtonList.btnPrint.enable)   obj.div_ButtonList.btnPrint.click();
          } else if (nChar ==  121) {  // 엑셀(F10)
            if (obj.div_ButtonList.btnToExcel.enable) obj.div_ButtonList.btnToExcel.click();
          } else if (nChar ==  115) {  // 삭제(F4)
            if (obj.div_ButtonList.btnDelete.enable)  obj.div_ButtonList.btnDelete.click();
          } else if (nChar ==  118) {  // 취소(F7)
            if (obj.div_ButtonList.btnCancel.enable)  obj.div_ButtonList.btnCancel.click();
          } else if (nChar ==  114) {  // 종료(F3)
            if (obj.div_ButtonList.btnEnd.enable)     obj.div_ButtonList.btnEnd.click();
          }

        }

        /**
         * Form Load 時 처리 할 업무 처리
         * 1) 화면 Title, 화면 Information, Loaction 및 권한 처리
         * 2) Argument(화면 Object, Title, Location, 화면기능, 사용권한
         * @param {Object} Form
         * @param {String} Form Name
         * @param {String} Form Location
         * @param {String} Form 기능[조회 등...]
         * @param {String} 사용 권한
         * @return {None} None
         */
        this.fnc_FormLoadSetting = function (obj,sFORMCAPTION,sFORMLOCATION,sBUTTONLIST,sUSERAUTH) {

        	// 변수 선언 및 Program 정보 Display
        	var sNewButtonList = "";
        	var sFormName      = obj.name;

        	//해당 화면의 Scrollbar 설정
        	obj.set_scrollbars("autoboth");

        	//화면 Title Display
        	if (this.fnc_Length(this.fnc_Trim(sFORMCAPTION)) > 0) {
        		//obj.set_titletext(sFORMCAPTION);
        		obj.set_titletext("");
        		obj.st_FormTitle.set_text("" + sFORMCAPTION);
        	}
        	
        	// 즐겨찾기 버튼 추가 :: NSCOM
        	if (typeof obj.getOwnerFrame()["__FAVICON_MENU_ID"] != "undefined") {
        		var favBtnObj = null;
        		if (!obj.isValidObject("btn_favorite")) {
        			favBtnObj = new nexacro.Button;
        			favBtnObj.init("btn_favorite", "absolute", 8, 0, 18, 29, null, null);
        			favBtnObj.set_cssclass("btn_WF_Bookmark");
        			obj.addChild("btn_favorite", favBtnObj);
        			favBtnObj.addEventHandler("onclick", this.fnc_AddFavorite, obj);
        			favBtnObj.addStatus = "false";
        			favBtnObj.set_tabstop(false);
        			favBtnObj.show();
        		} else {
        			favBtnObj = obj.btn_favorite;
        			if (!favBtnObj.getEventHandler("onclick", 0)) {
        				favBtnObj.addStatus = "false";
        				favBtnObj.set_tabstop(false);
        				favBtnObj.addEventHandler("onclick", this.fnc_AddFavorite, obj);
        			}
        		}
        		
        		// 즐겨찾기 버튼 표시
        		if (favBtnObj != null) {
        		
        			var sMenuId = obj.getOwnerFrame()["__FAVICON_MENU_ID"];
        			var finded = application.dsMyMenuList.findRow("MENU_IDXX", sMenuId);

        			if (finded > -1) {
        				favBtnObj.set_cssclass("btn_WF_Bookmark_S");
        				favBtnObj.addStatus = "true";
        				favBtnObj.set_tooltiptext("Remove from MyMenu");
        			} else {
        				favBtnObj.set_cssclass("btn_WF_Bookmark");
        				favBtnObj.addStatus = "false";
        				favBtnObj.set_tooltiptext("Add to MyMenu");
        			}
        			
        		}
        		
        		/*	// 폼타이틀 위치 변경
        		if (obj.isValidObject("st_FormTitle")) {
        			var titleObj = obj.components["st_FormTitle"];
        			titleObj.set_left(33);
        		}
        		*/
        	} else {
        		
        		// 즐겨찾기 처리를 할 필요가 없을때... 즉, 해당 메뉴가 기본동작인
        		// 메뉴트리에서 선택되어서 표시된 경우가 아닐때는 즐겨찾기, 제목 숨김 - 단, MDI 화면 내에서일것
        		if (obj.isValidObject("btn_favorite")) {
        			obj.btn_favorite.set_visible(false);
        		}
        		
        		// SDI 상태에서는 즐겨찾기 표시는 안하더라도 메뉴명, 네비게이션 표시 필요
        		if (application.GBL_FRAMETYPE != "SDI") {
        			if (obj.isValidObject("st_FormTitle")) {
        				obj.st_FormTitle.set_visible(false);
        			}
        			
        			if (obj.isValidObject("st_FormLocation")) {
        				obj.st_FormLocation.set_visible(false);
        			}
        		} else {
        			if (obj.isValidObject("st_FormTitle")) {
        				obj.st_FormTitle.style.set_padding("9px 0px 0px 2px");
        			}
        		}
        	
        	}

          //Loaction 정보 Display  :: NSCOM 로케이션 사용
          if (this.fnc_Length(this.fnc_Trim(sFORMLOCATION)) > 0) obj.st_FormLocation.set_text(sFORMLOCATION);
          //obj.st_FormLocation.set_text("");//로케이션 사용 안함. 폼타이틀에 들어

        
          // 화면의 기능 유무 + 사용자 권한에 대한 버튼 처리
          for (var i = 0; i < this.fnc_Length(sBUTTONLIST); i++) {

            if (this.fnc_SubStr(sBUTTONLIST, i, 1) == this.fnc_SubStr(sUSERAUTH, i, 1)) {

              // 권한과 기능 유무가 동일하면 해당 권한으로 처리
              sNewButtonList += this.fnc_SubStr(sUSERAUTH, i, 1);

            } else {

              if (this.fnc_SubStr(sBUTTONLIST, i, 1) == 'F') {
                // 기능이 없는 버튼이면 권한이 있어도 False
                sNewButtonList += 'F';     
              } else {
                // 기능은 있다면 해당 기능은 사용자 권한에 의해 설정
                sNewButtonList += this.fnc_Decode(this.fnc_SubStr(sUSERAUTH, i, 1), '', 'T', this.fnc_SubStr(sUSERAUTH, i, 1));
              }
              
            }
          
          }

          /*******************************************************
            권한 없는 버튼 Enable 처리 시 아래 소스 사용
            2014.10.10(김석두)                              
           *******************************************************/
           /*
           if (fnc_SubStr(sNewButtonList,0,1)=="F") obj.div_ButtonList.btnEnd.Enable     = false;  //종료
           if (fnc_SubStr(sNewButtonList,1,1)=="F") obj.div_ButtonList.btnSearch.Enable  = false;  //조회
           if (fnc_SubStr(sNewButtonList,2,1)=="F") obj.div_ButtonList.btnInput.Enable   = false;  //입력
           if (fnc_SubStr(sNewButtonList,3,1)=="F") obj.div_ButtonList.btnDelete.Enable  = false;  //삭제
           if (fnc_SubStr(sNewButtonList,4,1)=="F") obj.div_ButtonList.btnCancel.Enable  = false;  //취소
           if (fnc_SubStr(sNewButtonList,5,1)=="F") obj.div_ButtonList.btnSave.Enable    = false;  //저장
           if (fnc_SubStr(sNewButtonList,6,1)=="F") obj.div_ButtonList.btnToExcel.Enable = false;  //엑셀
           if (fnc_SubStr(sNewButtonList,7,1)=="F") obj.div_ButtonList.btnPrint.Enable   = false;  //인쇄
           */

          /*******************************************************
            권한 없는 버튼 Visible 처리 시 아래 소스 사용
            2014.10.10(김석두)                              
           *******************************************************/
          var iLeft = 492;
          
          // 신규 디자인 대응
          // 공통버튼영역 div 넓이는 최소 510이 되어야 한다. :: NSCOM
          var _divWidth = obj.div_ButtonList.width;
          if (_divWidth < 510) {
        	obj.div_ButtonList.set_width(510);
          }
          
          // 공통버튼의 정력이 좌->우측 기준으로 변경됨 :: NSCOM
          var iRight = 0;
          
          if (this.fnc_SubStr(sNewButtonList, 0, 1) == "T") {   //종료버튼처리
            obj.div_ButtonList.btnEnd.set_visible(true);
            //obj.div_ButtonList.btnEnd.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnEnd.set_right(iRight);
            iRight = iRight + 27;
          }
          
          if ((application._SVCENV != "CUSTOMER") && this.parent.parent.bSHOW_WINPOP_BTN && (application.GBL_FRAMETYPE != "SDI")) {	// 새창버튼 처리. 본 업무화면, SDI 메뉴가 아닐 때!
        	obj.div_ButtonList.btnNew.set_visible(true);
        	obj.div_ButtonList.btnNew.set_right(iRight);
            iRight = iRight + 27;
          }
          
          if (this.fnc_SubStr(sNewButtonList, 4, 1) == "T") {   //취소버튼처리
            obj.div_ButtonList.btnCancel.set_visible(true);
            //obj.div_ButtonList.btnCancel.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnCancel.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 3, 1) == "T") {   //삭제버튼처리
            obj.div_ButtonList.btnDelete.set_visible(true);
            //obj.div_ButtonList.btnDelete.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnDelete.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 6, 1) == "T") {   //엑셀버튼처리
            obj.div_ButtonList.btnToExcel.set_visible(true);
            //obj.div_ButtonList.btnToExcel.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnToExcel.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 7, 1) == "T") {   //인쇄버튼처리
            obj.div_ButtonList.btnPrint.set_visible(true);
            //obj.div_ButtonList.btnPrint.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnPrint.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 5, 1) == "T") {   //저장버튼처리
            obj.div_ButtonList.btnSave.set_visible(true);
            //obj.div_ButtonList.btnSave.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnSave.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 2, 1) == "T") {   // 입력버튼처리
            obj.div_ButtonList.btnInput.set_visible(true);
            //obj.div_ButtonList.btnInput.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnInput.set_right(iRight);
            iRight = iRight + 63;
          }

          if (this.fnc_SubStr(sNewButtonList, 1, 1) == "T") {   // 조회버튼처리
            obj.div_ButtonList.btnSearch.set_visible(true);
            //obj.div_ButtonList.btnSearch.set_left(iLeft);
            //iLeft = iLeft - 60;
            obj.div_ButtonList.btnSearch.set_right(iRight);
            iRight = iRight + 63;
          }

        
        	/*******
        	 form의 다국어 처리 진행
        	 *******/
          // 기본 시스템 언어가 한국어(ko) 가 아니면 다국어 변환 처리
          if (application.GBL_LANGCD != "ko") {
        	this.fnc_SetFormLanguage(obj);
          }

        }

        /**
         * 화면 종료 시 종료 여부 체크(변경된 자료에 따른 종료 여부)
         * @param {String} DataSet Name 
         * @param {Object} Form
         * @return {boolean} true/false
         * @example this.fnc_FormUnloadCheck("dsTB_CPLTYR", this)
         */
        this.fnc_FormUnloadCheck = function (arrDatasetList,oForm) {

          var sMessageCode = "";
          var iDelRowCount = 0;

          // 변경된 자료가 있는지 체크함
          if (this.fnc_DatasetChangeCheck(arrDatasetList)) {
            
            var arrDSList = this.fnc_Split(arrDatasetList, ",");
            
            for (var i = 0; i < this.fnc_Length(arrDSList); i++) {

              // Dataset Check
              if (this.fnc_Length(arrDSList[i]) == 0) continue;

              // 값이 없으면 그냥 지나감
              iDelRowCount += this.all[this.fnc_Trim(arrDSList[i])].getDeletedRowCount(); //삭제된 Row Count
              
            }

            if (iDelRowCount > 0) {
              sMessageCode = "TMM104";
            } else {
              sMessageCode = "TMM017";
            }

            return this.fnc_GetMessage(sMessageCode, iDelRowCount);
            
          }

        }
        /**
         * 화면 종료 처리(Open Form List 삭제, Tab Remove 처리)
         * @param {Ojbect} Form 
         * @param {event} event
         * @return {None} None
         * @example this.fnc_FormUnload(obj, e)
         */
        this.fnc_FormUnload = function (oForm,e) {

        	if(e.fromobject instanceof Div) return;                    //Linked 된 Div Event는 처리 않음
        	if (this.IsNull(application.mainframe.VFrameSet)) return;  //Quick View는 실행 하지 않음

        	//활성화 폼 List에 해당 정보를 삭제한다.
        	var sFrameId = oForm.getOwnerFrame().id;
        	application.dsOpenFormList.deleteRow(application.dsOpenFormList.findRow("FORM_NAME", sFrameId)); 
        	application.FRMBOTTOM.form.fn_RemoveTabPage(sFrameId);

        	if (application.GBL_FRAMETYPE == "SDI") {

        		if (nexacro.Browser == "Runtime"){
        			application.exit();
        		}else{
        			window.top.close();
        		}

        	}

        }

        /**
         * Text Box Focus시 User Data Setting & SelSelect
         * @param {Ojbect} Component 
         * @return {None} None
         * @example this.fnc_EditFocus(obj)
         */
        this.fnc_EditFocus = function (obj) {

        	obj.UserData = obj.value;
        	if (sBaseData == "" || sBaseData == undefined) {
        		var sBaseData = "default"; // 디폴트값..
        	}

        	if (sBaseData == "default") { // 만약에 sBaseData가 초기값이라면 초기값을 저장해준다  입력시 "" 데이터 조회시 컬럼의 값
        		obj.BaseData = obj.value;
        	}
        	// 데이터셋의 이름을 구한다.
        	var dsName = this.fnc_getBindDataSet(this, obj.name)[0];
        	if (dsName != "" && this.fnc_Length(dsName) > 0 ) { // 바인드된 데이터셋이 있다면 해당 row도 저장한다.
        		obj.UserData2 = eval("this." +  dsName + ".rowposition");
            }
          // Component SelSelect
          if (obj instanceof Edit) {
            obj.set_autoselect(true);
            obj.setSelect();
            obj.set_lengthunit("ascii");
          } else if (obj instanceof MaskEdit) {
            obj.set_autoselect(true);
            obj.setSelect();
          } else if (obj instanceof Combo) {
            obj.setSelect();
          } else if (obj instanceof Calendar) {
        	obj.set_autoselect(true);
            //obj.setSelect();
          }

        }

        /**
        * Grid Sub Cell Property 수정
        * @param {Ojbect} Form 
        * @return {None} None
        * @example this.fnc_GridSetting(this)
        */
        this.fnc_GridSetting = function (sFormName) {

        	//var copyPaste = new Link.CellDataCopy(sFormName);
        	
        	//Grid Row Color 처리(Insert, Update, Group(Subtotal)1 ~ 3 Backcolor)
        	var sExpStr  = "EXPR(dataset.getRowLevel(currow)==0?";
        		sExpStr += "(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?'" + application.GBL_COLORINSERT + "':";
        		sExpStr += "(dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?'" + application.GBL_COLORUPDATE + "':'" + application.GBL_COLORNORMAL + "')):";
        		sExpStr += "(dataset.getRowLevel(currow)==1?'" + application.GBL_COLORGROUP1 + "':";
        		sExpStr += "(dataset.getRowLevel(currow)==2?'" + application.GBL_COLORGROUP2 + "':";
        		sExpStr += "(dataset.getRowLevel(currow)==3?'" + application.GBL_COLORGROUP3 + "':'" + application.GBL_COLORNORMAL + "'))))";

        	// 해당 폼의 Control을 배열에 할당한다.
        	var arrContents = sFormName.components;

        	// Form에서 Componect 만큼 돌면서
        	for (var i = 0; i < arrContents.length; i++) {

        		// 컴포넌트중 Grid일 경우
        		if (arrContents[i] instanceof Grid) {
        		
        			/*********************************************************************************
        			  Tab Component의 PreLoad 속성이 False 일 때
        			   - Form Load 시 그리드 컴포넌트는 올라오나 Body 객체는 미 생성 상태
        			   - body 체크 후 없으면 설정 않음
        			   - 이미 설정된 그리드는 다시 설정하지 않음
        			   - preload = false 일 때 Tab Onchange 이벤트에서 fnc_GridSetting 호출
        			     예: this.fnc_GridSetting(obj.components[e.postindex]);
        			  2016.12.20. 김석두
        			*********************************************************************************/
        			if (arrContents[i].body == null) continue;
        //			if (Eco.XComp.getUserProperty(arrContents[i], "initGridRClickExport")) return;

        			//Grid Setting Start...
        			arrContents[i].set_enableredraw(false);
        			arrContents[i].set_cellsizingtype("col");                                   //Fixed Column Resizing 처리
        			arrContents[i].set_nodataimage("theme://images/imgNoDataFound.png");   		//No Data Image Setting
        			arrContents[i].set_autoenter("select");                                     //Column Auto Edit & Select
        			arrContents[i].set_selectchangetype("up");                                  //mulitrow bug 대응
        			
        			/* Grid BG Color */
        			arrContents[i].body.style.set_cellbackground(sExpStr);                  	//Row Background Color
        			arrContents[i].body.style.set_cellbackground2(sExpStr);                 	//Row Background Color 2

        			/* Copy & Paste */
        			//copyPaste.addGrid(arrContents[i], this._CopyCallback, this._PasteCallback);

        			//Grid 속성 변경 처리(Head)  - Head Marge 시 Column Count 다름 방지
        			//for (var j=0; j < arrContents[i].getCellCount("Head"); j++) {
        				//arrContents[i].setCellProperty('Head', j, 'color', 'red');            //Grid Head Font Color
        			//}

        			//Grid 속성 변경 처리(Body) - Head Marge 시 Column Count 다름 방지
        			for(var j = 0; j < arrContents[i].getCellCount("Body"); j++){
        				arrContents[i].setCellProperty( "Body", j, "tooltiptext", "expr:comp.getCellText(currow, this.col)");  //Column ToolTIp
        			}

        			//if (arrContents[i].getSubCellCount > 0){
        			//}

        
        			arrContents[i].addEventHandler("onenterdown", this._NextColumn, this);

        			//grid sort 초기화
        			if ((arrContents[i]["nosort"] == undefined) || (arrContents[i].nosort != "true")) {
        				this._InitGridHeadClickSort(arrContents[i]);
        			}

        			if (!Eco.XComp.getUserProperty(arrContents[i], "initGridRClickExport")) {
        				//Mouse R-Button PopupDIv 처리
        				this._InitGridRClickExport(arrContents[i]);
        			}

        		}
        		
        		// Tab 인 경우에는 탭의 상황에 따라서 내부의 tabpage만 처리
        		/*
        		} else if (arrContents[i] instanceof Tab) {
        			
        			var cmTab = arrContents[i];

        			// 탭의 모든 페이지가 내부적으로 표현(구성)이 되었을 때만 그리드를 초기화시킴
        			if (cmTab.preload) {
        			
        				var cmPages = cmTab.components;
        				for (var nIdx = 0; nIdx < cmPages.length; nIdx++) {
        					this.fnc_GridSetting(cmPages[nIdx]);	// 텝페이지 내부만 처리 
        				}
        				
        			} else {
        			
        				var nIndex = cmTab.tabindex;
        				var cmPage = cmTab.components[nIndex];
        				this.fnc_GridSetting(cmPage);
        				cmPage._v_init = true;
        				cmTab.addEventHandler("onchanged", this._TabpageSetting, this);
        				
        			}
        		*/
        		//} else {
        		
        			arrContents[i].set_enableredraw(true);
        			
        			// Tab & Div 재귀 처리
        			var arrchilds = arrContents[i].components;
        			if (arrchilds != null && arrchilds.length > 0) this.fnc_GridSetting(arrContents[i]);
        		//}

        	}

        }

        /***********************************************************************************************
           함수명   : _NextColumn()
           설명     : Grid에서 Enter Key 시 다음 Cell로 이동 처리
                      Grid Handler에 자동 설정 함
           argument : obj:Grid, e:GridEditEventInfo
           return   : 없음
           2014.10.15 김석두(KSD)
         ***********************************************************************************************/
        this._NextColumn = function (obj,e) {
          obj.moveToNextCell();
        }

        /***********************************************************************************************
           함수명   : _InitGridRClickExport(grid)
           설명     : Grid에서 Mouse Right Button 클릭 시 팝업 Div 실행
           argument : obj:Grid
           return   : 없음
           2016.12.19 김석두(KSD)
         ***********************************************************************************************/
        this._InitGridRClickExport = function(obj) {

        	// 대상이 이미 초기화 되었는지 확인
        	if (Eco.XComp.getUserProperty(obj, "initGridRClickExport")) return;

        	var form = Eco.XComp.getTopLevelForm(obj.parent);
        	var objDs   = Eco.XComp.getUserProperty(form, "gridExportRClickDataset");		// 데이터셋 참조
        	var pmnu = Eco.XComp.getUserProperty(form, "gridExportRClickPopupMenu");	// 팝업메뉴 컴포넌트 참조

        	// Dataset 및 UserProperty는 Form에 유일하게 하나만 있으면 됨.
        	if (Eco.isEmpty(objDs)) {

        		//Create Dataset(Popup Menu)
        		objDs = new Dataset;		
        		objDs.set_name(Eco.getUniqueId("ds_"));

        		form.addChild(objDs.name, objDs);

        		/* Dataset Column 추가 */
        		objDs.addColumn("id", "string");
        		objDs.addColumn("level", "string");
        		objDs.addColumn("caption", "string");
        		objDs.addColumn("enable", "string");

        		/******************************************* 
        		  원하는 Popup Menu 추가
        		   - 필요 시 해당 구반 반복 처리
        		   - id 설정 후 선택 후 처리에서 분기
        		********************************************/
        		var iRow = objDs.addRow();
        			objDs.setColumn(iRow, "id", "export");
        			objDs.setColumn(iRow, "level", "0");		
        			objDs.setColumn(iRow, "caption", "Export Excel");
        			objDs.setColumn(iRow, "enable", "true");		

        		/* UserProperty 추가 - Mouse Right Button */
        		Eco.XComp.setUserProperty(form, "gridExportRClickDataset", objDs);

        	}

        	/* Popup Menu Create */
        	if (Eco.isEmpty(pmnu)) {

        		// add popupmenu component
        		var name = Eco.getUniqueId("pmnu_");

        		pmnu = new PopupMenu();		
        		pmnu.init(name, "absolute", 0, 0, 68, 65);
        		form.addChild(pmnu.name, pmnu);	
        		pmnu.set_innerdataset(objDs.name);
        		pmnu.set_idcolumn("id");
        		pmnu.set_levelcolumn("level");
        		pmnu.set_captioncolumn("caption");
        		pmnu.set_enablecolumn("enable");
        		pmnu.addEventHandler("onmenuclick", this._ExportPopupMenuOnMenuClickHandler, this);		
        		pmnu.show();

        		Eco.XComp.setUserProperty(form, "gridExportRClickPopupMenu", pmnu);

        	}

        	// 그리드 이벤트에서 팝업메뉴를 참조하기 위해 추가
        	Eco.XComp.setUserProperty(obj, "rClickPopupMenu", pmnu);

        	// add onrbuttondown handler
        	obj.addEventHandler("onrbuttondown", this._ExportGridOnRButtonDownHandler, this);
        	
        	// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
        	Eco.XComp.setUserProperty(obj, "initGridRClickExport", true);

        }

        /***********************************************************************************************
           함수명   : _ExportPopupMenuOnMenuClickHandler(obj, e)
           설명     : Grid에서 팝업 메뉴 선택 시 처리(onmenuclick Event Handler)
           argument : obj = Event가 발생한 PopupMenu Component, e = MenuClickEventInfo
           return   : 없음
           2016.12.19 김석두(KSD)
         ***********************************************************************************************/
        this._ExportPopupMenuOnMenuClickHandler = function(obj,e) {

        	var sSelectId = e.id;
        	var objGrid = Eco.XComp.getUserProperty(obj, "grid");

        	if (sSelectId == "export") {
        		this.fnc_GridToExcel(objGrid);
        	}

        }

        /***********************************************************************************************
           함수명   : _ExportGridOnRButtonDownHandler(obj, e)
           설명     : Grid에서 Mouse Right Button(onrbuttondown Event Handler)
           argument : obj = Event가 발생한 Grid Component, e = MouseEventInfo
           return   : 없음
           2016.12.19 김석두(KSD)
         ***********************************************************************************************/
        this._ExportGridOnRButtonDownHandler = function(obj,e) {

        	var iRow  = e.row;
        	var sCell = e.cell;
        	var pMenu = Eco.XComp.getUserProperty(obj, "rClickPopupMenu");

        	// 대상 그리드와 셀 정보를 추가
        	Eco.XComp.setUserProperty(pMenu, "grid", obj);

        	/*
        	var iRect = obj.getCellRect(iRow, sCell);
        	var arrXy = Eco.XComp.PositionSize.convertXY(application.mainframe, [iRect.left, iRect.bottom], obj);
        	var iX = arrXy[0];
        	var iY = arrXy[1];
        	
        	if (isNaN(iX) || isNaN(iY)) {
        		iX = e.clientX;
        		iY = e.clientY;
        	}
        	*/
        	
        	var iX = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(application.mainframe, 0))+10;
        	var iY = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(application.mainframe, 0))+10;	

        	pMenu.trackPopup(iX, iY);

        }
        /********************************* 여기까지 Grid Setting & Event 처리 ***********************************************************************/

        /***********************************************************************************************
           함수명   : fnc_GridToExcel()
           설명     : 선택된 그리드를 엑셀로 저장합니다.
           argument : obj:Export 대상 Grid Object
           return   : 없음
           2016.12.19 김석두(KSD)
         ***********************************************************************************************/
        this.fnc_GridToExcel = function (obj) {

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	var iRet = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","suppress","allstyle","image","","both","cellline");
        	var objExportItem = this.ExcelExportObject.getExportItem(nexacro.ExportItemTypes.GRID, 0);
        		objExportItem.set_exportimage("image");	

        	this.ExcelExportObject.setExportItem(nexacro.ExportItemTypes.GRID, 0,objExportItem);    
            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.ExcelExportObject.set_exportfilename(obj.name + "_" + Eco.date.getMaskFormatString(new Date(), "yyyyMMddHHmmss"));
            this.ExcelExportObject.set_exporturl(application.GBL_HTTPURL + "/XExportImport");

        	this.ExcelExportObject.addEventHandler("onsuccess",this._ExcelExport_onsuccess , this);
        	this.ExcelExportObject.addEventHandler("onerror", this._ExcelExport_onerror, this);	
        	this.setWaitCursor(true);	    
            this.ExcelExportObject.exportData();

        }

        //export onsuccess Event
        this._ExcelExport_onsuccess = function(obj,e) {

        	this.setWaitCursor(false);

        }

        //export onerror Event
        this._ExcelExport_onerror = function(obj,e) {

        	this.setWaitCursor(false);
        	this.fnc_Message("TMM125", "엑셀 익스포트 실패");

        }

        /**
         * DataSet을 Clear 
         * @param {String} Clear 대상 Dataset String(복수 구분자 = ",") 
         * @return {None} None
         * @example this.fnc_DatasetClear("dsTB_CPLTYR,dsTB_CPLTYR2,dsTB_CPLTYR3")
         */
        this.fnc_DatasetClear = function (arrDatasetList,oGrid,oGridColumnIndex) {

          // 값이 없으면 종료
          if (this.fnc_Length(arrDatasetList) < 1) return false;

          var arrDSList = this.fnc_Split(arrDatasetList, ",");
          var iCount    = arrDSList.length;

          for (var i = 0; i < iCount; i++) {
          
            // 값이 없으면 그냥 지나감
            if (this.fnc_Length(arrDSList[i]) == 0) continue;

            // Dataset Clear
            this.objects[this.fnc_Trim(arrDSList[i])].clearData();

          }
          

        
        }

        
        /**
         * 그리드 헤더컬럼  Clear 
         * @param {Object} 대상 Grid List 
         * @param {String} 대상 Grid Column Index (그리드단위 구분자 "&")(그리드 인덱스 구분자 = ",") 
         * @return {None} None
         * @example this.fnc_GridCheckClear("grdPY_REGSAL,grdPY_REGSAL00,grdPY_REGSAL02,grdPY_REGSAL03", "1,2,3,4&1,2,3,4&1,2,3,4&1,2,3,4");
         */
        this.fnc_GridCheckClear = function (sGridList,sGridColumnIndex){

        	if (sGridList == undefined || sGridColumnIndex == undefined) {
        			alert("파라메터가 올바르지 않습니다.");
        			return;
        	}
        	var arrGridList = this.fnc_Split(sGridList, ",");
        	var arrGridColumnIndexList = this.fnc_Split(sGridColumnIndex, "&");

        	if ( arrGridList.length != arrGridColumnIndexList.length) {
        		alert("그리드 갯수와 그리드단위 인덱스갯수는 일치해야 합니다");
        		return;
        	}
        	// 그리드 단위 CHK 컬럼 초기화하기.
        	for (var i = 0; i < arrGridList.length ; i ++){
        		var arrIndexList = this.fnc_Split(arrGridColumnIndexList[i], ",");
        		// 현재 그리드 
        		var oGrid = eval("this." + this.fnc_Trim(arrGridList[i]));
        		// 그리드 CHK컬럼 초기화
        		for (var j = 0 ; j < arrIndexList.length; j++){
        			oGrid.setCellProperty("head", arrIndexList[j], "text", "");
        		}
        	}
        }

        /**
         * DataSet의 변경 여부가 있는지 체크
         * @param {String} Check 대상 Dataset String(복수 구분자 = ",") 
         * @return {boolean} (True/False)
         * @example this.fnc_DatasetChangeCheck("dsTB_CPLTYR,dsTB_CPLTYR2,dsTB_CPLTYR3")
         */
        this.fnc_DatasetChangeCheck = function (arrDatasetList) {

          // 값이 없으면 변경 여부 없이 종료
          if (this.fnc_Length(arrDatasetList) < 1) return false;

          var arrDSList = this.fnc_Split(arrDatasetList, ",");
          var iCount    = arrDSList.length;
          
          for (var i = 0; i < iCount; i++) {
            
            // 값이 없으면 그냥 지나감
            if (this.fnc_Length(this.fnc_Trim(arrDSList[i])) == 0) continue;

            // 변경 여부 체크
            if (this.fnc_DsIsUpdated(this.objects[this.fnc_Trim(arrDSList[i])])) return true;

          }

          return false;

        }

        /**
         * DataSet의 최소 상태로 Reset 작업
         * @param {String} Cancel 대상 Dataset String(복수 구분자 = ",")
         * @return {None} None
         * @example this.fnc_DataSetCancel("dsTB_CPLTYR,dsTB_CPLTYR2,dsTB_CPLTYR3")
         */
        this.fnc_DataSetCancel = function (arrDatasetList) {

          // 값이 없으면 종료
          if (this.fnc_Length(arrDatasetList) < 1) return false;

          var arrDSList = this.fnc_Split(arrDatasetList, ",");
          var iCount = arrDSList.length;

          for (var i = 0; i < iCount; i++) {

            // 값이 없으면 그냥 지나감
            if (this.fnc_Length(arrDSList[i]) == 0) continue;

            // Dataset 초기화
            this.objects[this.fnc_Trim(arrDSList[i])].reset();

          }

        }

        /**
         * Grid에서 Multy로 선택된 Row Count 반환
         * @param {Object} Grid
         * @return {int} Row Count
         * @example this.fnc_SelectRowCount(this.grdTB_CPLDPT)
         */
        this.fnc_SelectRowCount = function (oGrid) {

          var arrRows = oGrid.getSelectedRows();
          var iRowCount = arrRows.length;
          return iRowCount;

        }

        /**
         * 서버로 Service(trnanaction) 보내기
         * @param {Object} Form
         * @param {String} Package Name
         * @param {String} Method Name
         * @param {String} In DataSet Name
         * @param {String} Out DataSet Name
         * @param {String} Get Parameter
         * @param {String} CallBack func Name
         * @param {boolean} Sync Mode (True/False) [생략가능]
         * @example this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         */
        this.fnc_TransactionCall = function (obj,sPACKAGENAME,sMethodName,sInDataSet,sOutDataSet,sArgument,sCallBack,bAsync) {

          /*****************************************************************************************
              1. 메뉴 ID 구하기
           *****************************************************************************************/
          //var sMenuId = this.fnc_Trim(application.dsMenuList.getColumn(application.dsMenuList.rowposition, "MENU_IDXX"));
          //if (this.fnc_Length(sMenuId) < 1) sMenuId = obj.name;
          
          /* 20161230 jsh 메뉴ID는 업무화면 메뉴 오픈 시 업무화면 ChildFrame에 셋. 없으면 파라미터로 전달받는 sPACKAGENAME을 이용한다.*/
          
          var sMenuId = "M" + sPACKAGENAME;
          if (this.getOwnerFrame != undefined) {
        	sMenuId = this.getOwnerFrame()["sFORM_MENU_ID"];
          }
          
          if ((sMenuId == undefined) || (this.fnc_Length(this.fnc_Trim(sMenuId)) < 1)) {
            sMenuId = "M" + sPACKAGENAME;
          }
          
          /*****************************************************************************************
              1. Hot-Deploy 시 서버의 Session이 끊기는 현상 발생 - 단말의 로그인 사용자 정보 보내기
              2. 프로그램별 조회 및 저장 내역 로그를 위해 프로그램 ID 및 IP 정보 전송 처리
           *****************************************************************************************/
          sArgument += " GBL_USERID="  + this.fnc_Quote(application.GBL_USERID);   //로그인 ID
          sArgument += " GBL_EMPLNO="  + this.fnc_Quote(application.GBL_EMPLNO);   //로그인 사원번호
          sArgument += " GBL_DEPTCD="  + this.fnc_Quote(application.GBL_DEPTCD);   //로그인 사용자 부서
          sArgument += " GBL_LOGINIP=" + this.fnc_Quote(application.GBL_LOGINIP);  //로그인 IP
          sArgument += " GBL_LANGCD="  + this.fnc_Quote(application.GBL_LANGCD);   //사용자 언어코드
          sArgument += " GBL_DBTYPECD="  + this.fnc_Quote(application.GBL_DBTYPECD);   //데이터베이스 타입
          sArgument += " MENU_ID="     + this.fnc_Quote(sMenuId);                 //실행 메뉴명

          //URL 설정
          var svcUrl  = application.GBL_HTTPURL + "/core/erp/" + this.fnc_ToLower(sPACKAGENAME.substr(0,3)) + "/" 
            svcUrl += sPACKAGENAME + "_" + sMethodName + ".do?CALL_TYPE=NEXACRO&GBL_DBTYPECD=" + application.GBL_DBTYPECD;

        
          //Sycn Mode Default 설정
          if (this.fnc_IsEmpty(bAsync)) bAsync = true;

          //transaction Call
          this.transaction(sMethodName, svcUrl, sInDataSet, sOutDataSet, sArgument, sCallBack, bAsync);

        }

        /**
         * 조회 결과 Display
         * @param {Object} Component
         * @param {int} Search Count
         * @param {String} sKind (SHR/SAVE 여부)
         * @return {None} None
         * @example this.fnc_Information(this.stInformation, this.dsTB_CPLDPT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
         */
        this.fnc_Information = function (obj,iRowCount,sKind) {

          if (sKind == "SAVE") {
        	if (application.GBL_LANGCD == "ko") {
        		obj.set_text("* 저장 작업을 완료 하였습니다!");
        	} else {
        		obj.set_text("* Save completed.");
        	}
          } else {
            obj.set_usedecorate(true);
            
            if (application.GBL_LANGCD == "ko") {
        		obj.set_text("* <b v='true'>" + this.fnc_AddComma(iRowCount) + "</b> 건이 조회 되었습니다!");
        	} else {
        		obj.set_text("* <b v='true'>" + this.fnc_AddComma(iRowCount) + "</b> rows retrieved!");
        	}
          }

        }

        /**
         * 서비스(조회 및 저장)에서 발행한 오류 처리
         * @param {String} Error Code
         * @param {String} Error Message
         * @return {None} None
         * @example this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
         */
        this.fnc_ErrorProcess = function (ErrorCode,ErrorMSG) {
          if (application.GBL_LANGCD == "ko") {
        	this.fnc_Message("TMM125", "서버와 연결(Session)이 끊겼습니다. 재실행 후 사용하세요");
          } else {
        	this.fnc_Message("TMM125", "Disconnected(Session) to server. Please retrying to connect.");
          }
          application.exit();
          
        }

        /**
         * Run-Time Create Dataset
         * @param {String} Dataset ID(String)
         * @return {None} None
         * @example fnc_CreateCommonCodeDataset(sComponentID)
         */
        this.fnc_CreateCommonCodeDataset = function (sComponentID) {

          var ObjDataSet = this.objects[sComponentID];

          if (ObjDataSet == null) {
            var objLdS = new Dataset;
            objLdS.set_name(sComponentID);
            this.addChild(sComponentID, objLdS);
          } else {
            this.objects[sComponentID].clearData();
          }

        }

        /**
         * 공통코드 콤보 설정
         * @param {Dataset} 공통코드 목록 Dataset
         * @return {None} None
         * @example fnc_GetComboDs(this.dsCombo)
         */
        this.fnc_GetComboDs = function (oDataSet) {

          // Combo List를 가지고 있는 DataSet의 이름 및 OBJECT 유무 체크
          if (!this.isValidObject(oDataSet) || oDataSet.name != "dsCombo") {
            this.fnc_Message("TMM105", "dsCombo");
            return;
          }

          var sPACKAGENAME = "ComMakeCombo";
          var sMethodName  = "GetCommCode";
          var sInDataSet   = oDataSet.name + "=" + oDataSet.name;
          var sOutDataSet  = "";
          var sDataSetName = "";

          for (var i = 0; i < oDataSet.getRowCount(); i++) {
            sDataSetName = oDataSet.getColumn(i, "DSNAME");
            this.fnc_CreateCommonCodeDataset(this.fnc_Trim(sDataSetName));
            sOutDataSet += sDataSetName + "=" + sDataSetName + " ";
          }

          this.sArgument  = " pgm="    + this.fnc_Quote(sPACKAGENAME);
          this.sArgument += " action=" + this.fnc_Quote(sMethodName);

          this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, this.sArgument, "fn_CallBack", false);

        }

        /**
         * 공통코드 콤보 Component Inner Binding
         * @param {Array} Binging 대상 Component Array
         * @return {None} None
         * @example fnc_CommonCodeInnerBind(arrParam)
         */
        this.fnc_CommonCodeInnerBind = function (arrParam) {

          var iCount      = arrParam.length;
          var arrParamCol = new Array();
          var iColIndex   = 0;

          // 전체 컴포넌트 바인딩 처리
          for (var i = 0; i < iCount; i++) {
            
            // 세부 항목 Split(1:콤보, 그리드 구분, 2:Bind 할 Componect명, 3:Bind 될 Dataset명, 그리드 컬럼명
            arrParamCol = this.fnc_Split(arrParam[i], ",");

            if (arrParamCol.length == 4) {
              
              // 일반 콤보일 때 Bind 처리
              if (this.fnc_ToUpper(arrParamCol[0]) == "COMBO") {

                eval("this." + this.fnc_Trim(arrParamCol[1])).set_codecolumn("COMD_CODE");
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_datacolumn("COMD_CDNM");
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_innerdataset(this.fnc_Trim(arrParamCol[2]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_index(arrParamCol[3]);

              // Grid의 Column이 콤보 일 때 처리
              } else if (this.fnc_ToUpper(arrParamCol[0]) == "GRID") {

                iColIndex = eval("this." + this.fnc_Trim(arrParamCol[1])).getBindCellIndex("body", this.fnc_Trim(arrParamCol[3]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodataset", this.fnc_Trim(arrParamCol[2]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combocodecol", "COMD_CODE");
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodatacol", "COMD_CDNM");
              
              }
            } else {
              
              this.fnc_Message("TMM125", i + 1 + "번째 공통코드 Binding에 인자가 맞지 않습니다. 정확이 4개의 항목을 확인하세요!");
              continue;
              
            }
            
          }
          
        }

        /**
         * 사용자 콤보 설정
         * @param {Dataset} 사용자 콤보 ID Dataset
         * @return {None} None
         * @example fnc_GetUserComboDs(this.dsUserCombo)
         */
        this.fnc_GetUserComboDs = function (oDataSet) {
          
          // Combo List를 가지고 있는 DataSet의 이름 및 OBJECT 유무 체크
          if (!this.isValidObject(oDataSet) || oDataSet.name != "dsUserCombo") {
            this.fnc_Message("TMM105", "dsUserCombo");
            return;
          }

          var sPACKAGENAME = "CommMakeCombo";
          var sMethodName  = "GetUserComboCode";
          var sInDataSet   = oDataSet.name + "=" + oDataSet.name;
          var sOutDataSet  = "";
          var sDataSetName = "";
          var sArgument    = "";

          for (var i = 0; i < oDataSet.rowcount; i++) {
            sDataSetName = oDataSet.getColumn(i, "DSNAME");
            this.fnc_CreateCommonCodeDataset(this.fnc_Trim(sDataSetName));
            sOutDataSet += sDataSetName + "=" + sDataSetName + " ";
          }

          sArgument  = " pgm="    + this.fnc_Quote(sPACKAGENAME);
          sArgument += " action=" + this.fnc_Quote(sMethodName);
          this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        /**
         * 사용자 콤보 단일건
         * @param {Array} 콤보 정보
         * @param {Array} Bind 정보
         * @return {None} None
         * @example this.fnc_GetUserComboSingle(arrParam1, arrParam2);
         */
        this.fnc_GetUserComboSingle = function (arrParam1,arrParam2) {

          this.fnc_CreateCommonCodeDataset(arrParam1[0]);

          var sPACKAGENAME = "CommMakeCombo";
          var sMethodName  = "GetUserComboCodeSingle";
          var sInDataSet   = "";
          var sOutDataSet  = this.fnc_Trim(arrParam1[0]) + "=" + this.fnc_Trim(arrParam1[0]);
          var sArgument    = " pgm="      + this.fnc_Quote(sPACKAGENAME);
            sArgument   += " action="   + this.fnc_Quote(sMethodName);
            sArgument   += " DSNAME="   + arrParam1[0];   //Dataset ID
            sArgument   += " COMBOID="  + arrParam1[1];   //콤보 ID
            sArgument   += " HEADFLAG=" + arrParam1[2];   //HEAD Flag
            sArgument   += " USEYSNO="  + arrParam1[3];   //Use YSNO
            sArgument   += " PARAM="    + arrParam1[4];   //조회 조건

          this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
          this.fnc_UserComboInnerBind(arrParam2);

        }

        /**
         * 사용자 콤보 Component Inner Binding
         * @param {Array} Binging 대상 Component Array
         * @return {None} None
         * @example this.fnc_UserComboInnerBind(arrParam);
         */
        this.fnc_UserComboInnerBind = function (arrParam) {

          var iCount      = arrParam.length;
          var arrParamCol = new Array();
          var iColIndex   = 0;

          // 전체 컴포넌트 바인딩 처리
          for (var i = 0; i < iCount; i++) {

            // 세부 항목 Split(1:콤보, 그리드 구분, 2:Bind 할 Componect명, 3:Bind 될 Dataset명, 그리드 컬럼명
            arrParamCol = this.fnc_Split(arrParam[i], ",");

            if (arrParamCol.length == 4) {

              // 일반 콤보일 때 Bind 처리
              if (this.fnc_ToUpper(arrParamCol[0]) == "COMBO") {

                eval("this." + this.fnc_Trim(arrParamCol[1])).set_codecolumn("COMB_CODE");
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_datacolumn("COMB_NAME");
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_innerdataset(this.fnc_Trim(arrParamCol[2]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).set_index(arrParamCol[3]);

              // Grid의 Column이 콤보 일 때 처리
              } else if (this.fnc_ToUpper(arrParamCol[0]) == "GRID") {

                iColIndex = eval("this." + this.fnc_Trim(arrParamCol[1])).getBindCellIndex("body", this.fnc_Trim(arrParamCol[3]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodataset", this.fnc_Trim(arrParamCol[2]));
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combocodecol", "COMB_CODE");
                eval("this." + this.fnc_Trim(arrParamCol[1])).setCellProperty("body", iColIndex, "combodatacol", "COMB_NAME");

              }

            } else {

              this.fnc_Message("TMM125", i + 1 + "번째 공통코드 Binding에 인자가 맞지 않습니다.호출인자 4개의 항목을 확인하세요!");
              continue;

            }

          }

        }

        /**
         * 숫자 자료에 콤마를 붙어 문자로 반환
         * @param {int} Number
         * @return {String} String(Added Comma Number)
         * @example this.fnc_AddComma(124125125125);
         */
        this.fnc_AddComma = function(sNum) {

          sNum = this.fnc_ToString(sNum);             //undefine 및 null 처리
          sNum = sNum.trim();                         //공백제거
          
          if (this.fnc_Length(sNum) < 1) return "";   //자리수 체크
          //if (!nexacro.isNumeric(sNum))    return "";  //숫자 여부 체크

          var ppos, sDigit, nEnd, nStart=0, sRet="";  //임시 변수 생성

          //음양(+/-) 부호 처리
          if (sNum.charAt(0) == "+" || sNum.charAt(0) == "-") {
            sRet += sNum.charAt(0);
            nStart = 1;
          }

          //소수점 처리
          ppos = sNum.indexOf(".", nStart);
          if (ppos < 0) {
            nEnd = sNum.length;
          } else {
            nEnd = ppos;
          }
          
          //정수부분 발췌
          sDigit = sNum.substr(nStart, nEnd - nStart);

          //3자리마다 Comma 붙이기
          for (var i = 0; i < sDigit.length; i++) {
            if (i != 0 && (sDigit.length - i)%3 == 0) sRet += ",";
            sRet += sDigit.charAt(i);
          }
          
          sRet += sNum.substr(nEnd);

          return sRet;
          
        }

        /**
         * 숫자 자료에 콤마를 붙어 문자로 반환
         * @param {int} UserLavel
         * @param {Array} 부서/사번 구분, Component ID
         * @return {None} None
         * @example this.fnc_AuthSetting(this.sUSERLAVEL, arrParam);
         */
        this.fnc_AuthSetting = function(sUserLavel,arrParam) {

          var iCount       = arrParam.length;    //Componect 갯수
          var arrParamComp = new Array();        //Componect 명칭
          
          //전체 컴포넌트 수만큼 돌기
          for (var i = 0; i < iCount; i++) {

            arrParamComp = arrParam[i].split(",");  //구분자로 자료 분리

            if (arrParamComp[0]=='EMPL') {         //사원정보 권한처리

              //개인 사용자 일때는 개인 정보 Display 후 사용자 수정 불가
              if (sUserLavel == '1') {
                eval("this." + arrParamComp[1]).set_value(application.GBL_EMPLNO);
                eval("this." + arrParamComp[2]).set_value(application.GBL_USERNM);
                eval("this." + arrParamComp[2]).UserData = application.GBL_USERNM;
                eval("this." + arrParamComp[2]).set_enable(false);
              }
              
            //부서정보 권한처리
            } else {
            
              //개인 권한일 때만 로그인 사용자 Display 하고 Enabled 처리
              if (sUserLavel == '4') {
                //본부권한
                eval("this." + arrParamComp[1]).set_value(application.GBL_DEPTCD1);
                eval("this." + arrParamComp[2]).set_value(application.GBL_DEPTNM1);
                eval("this." + arrParamComp[2]).UserData = application.GBL_DEPTNM1;
                eval("this." + arrParamComp[2]).set_enable(false);
              } else if (sUserLavel=='3') {
                //처실 권한
                eval("this." + arrParamComp[1]).set_value(application.GBL_DEPTCD2);
                eval("this." + arrParamComp[2]).set_value(application.GBL_DEPTNM2);
                eval("this." + arrParamComp[2]).UserData = application.GBL_DEPTNM2;
                eval("this." + arrParamComp[2]).set_enable(false);
              } else if (sUserLavel=='2') {
                //팀권한
                eval("this." + arrParamComp[1]).set_value(application.GBL_DEPTCD);
                eval("this." + arrParamComp[2]).set_value(application.GBL_DEPTNM);
                eval("this." + arrParamComp[2]).UserData = application.GBL_DEPTNM;
                eval("this." + arrParamComp[2]).set_enable(false);
              }

            }
            
          }
          
        }

        /**
         * 조회 조건 필수 입력 처리
         * @param {String} Message Code
         * @param {String} Message Text
         * @param {Object} Focus Component 
         * @return {boolean} false
         * @example this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRBUDG_YEAR);
         */
        this.fnc_SearchCheckPostAction = function (sMsgCode,sMsgArg,objFocusControl) {

          //Message 처리(받은 문자를 Split함)
          var arrMsg = sMsgArg.split(",");
          var rtn        = false;

          if (arrMsg.length == 0) {
            rtn = this.fnc_Message(sMsgCode);
          } else if (arrMsg.length == 1) {
            rtn = this.fnc_Message(sMsgCode, arrMsg[0]);
          } else if (arrMsg.length == 2) {
            rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1]);
          } else if (arrMsg.length == 3) {
            rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2]);
          } else if (arrMsg.length == 4) {
            rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2], arrMsg[3]);
          } else if (arrMsg.length == 5) {
            rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2], arrMsg[3], arrMsg[4]);
          }

          objFocusControl.setFocus(); //해당 컴포넌트로 포커스 처리
          return rtn;
          
        }

        /**
         * 입력항목 필수 입력 처리
         * @param {String} Message Code
         * @param {String} Message Text
         * @param {DataSet} Dataset
         * @param {int} row
         * @param {Object} Grid
         * @param {String} Grid Column name
         * @return {boolean} false
         * @example this.fnc_CheckPostAction("TMM072", "계정과목명", this.dsTB_CPLTYR, row, this.grdTB_CPLTYR, "ACCT_BFNM")
         */
        this.fnc_CheckPostAction = function (sMsgCode,sMsgArg,objDataset,iRow,objFocusControl,sCol) {

           //Message 처리(받은 문자를 Split함)
           var arrMsg       = sMsgArg.split(",");
           var iColIndex    = -1;
           var rtn        = false;
           
           if (arrMsg.length == 0) {
              rtn = this.fnc_Message(sMsgCode);
           } else if (arrMsg.length == 1) {
              rtn = this.fnc_Message(sMsgCode, arrMsg[0]);
           } else if (arrMsg.length == 2) {
              rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1]);
           } else if (arrMsg.length == 3) {
              rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2]);
           } else if (arrMsg.length == 4) {
              rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2], arrMsg[3]);
           } else if (arrMsg.length == 5) {
              rtn = this.fnc_Message(sMsgCode, arrMsg[0], arrMsg[1], arrMsg[2], arrMsg[3], arrMsg[4]);
           }

           //Dataset Row Position 이동 처리
           if (this.isValidObject(objDataset)) objDataset.set_rowposition(iRow); 

           // 그리드 체크 시 컬럼명을 통해 컬럼 인덱스 알아 내기
           if (objFocusControl instanceof Grid) {
              iColIndex = objFocusControl.getBindCellIndex("body", sCol);
              //objFocusControl.showEditor(true);
              if (objFocusControl.getSelectedRows() < 1) objFocusControl.selectRow(iRow);
              if (iColIndex > -1) objFocusControl.setCellPos(iColIndex);
           }

           //해당 컴포넌트로 포커스 처리
           objFocusControl.setFocus();
           return rtn;

        }

        /**
         * Grid의 Column ID의 Column Index 구하는 함수
         * @param {Object} Grid
         * @param {String} Grid Column name
         * @return {int} index
         * @example this.fnc_GridColumnIndex(this.grdTB_CPLTYR, "ACCT_BFNM")
         */
        this.fnc_GridColumnIndex = function (obj,sColumn) {

          var sObjectType = obj.toString().toUpperCase();

          //개발 오류 체크 추가 (2016.07.20 by302)
          if (obj.toString().toUpperCase() != "[OBJECT GRID]") {
            alert("[fnc_GridColumnIndex] 함수의 첫번째 파라메터의 객체(" + obj.id + ")가 GIRD가 아닙니다. GRID를 사용하세요!");
            return false;
          }
          
          return obj.getBindCellIndex("body", sColumn);

        }

        /**
         * Component Clear 처리
         * @param {String} Clear 대상 Component String(복수 구분자 = ",")
         * @return {None} None
         */
        this.fnc_ComponentClear = function(sComponentList) {

          var arrComList = sComponentList.split(",");

          for (var i = 0; i < arrComList.length; i++) {
            eval("this." + arrComList[i]).set_value("");
            eval("this." + arrComList[i]).UserData = "";
          }
          
        }

        /**
         * 메시지 ID에 해당하는 메지지 Text 반환
         * @param {String} Message ID
         * @param {String} Grid Column name
         * @return {String} Message Text
         * @example this.fnc_GetMessage("M1005", "대출 조회시작월")
         */
        this.fnc_GetMessage = function (sMessageID,sArg1,sArg2,sArg3,sArg4,sArg5) {

          var sMessage = "";
          var iFindRow = application.dsMessage.findRow("MSGE_CODE", sMessageID);
          if (iFindRow < 0) return "해당 메시지가 없습니다";

          var sMessage = application.dsMessage.getColumn(iFindRow, "MSGE_CNTT");
          var iIndex = sMessage.indexOf("@");

          if (iIndex == -1) {
            sMessage = sMessage.split("\\n").join("\n");
          } else {
            sMessage = this._fnc_SetArgument(sMessage, sArg1, sArg2, sArg3, sArg4, sArg5);
          }
          
          //sMessage = this.fnc_Replace(sMessage, "\n\n", "String.fromCharCode(13) + String.fromCharCode(10)");
          return sMessage;

        }

        /**
         * 사업자번호 체크
         * @param {String} 사업자 번호
         * @return {boolean} True/False
         * @example this.fnc_CustNumberCheck("1234567890")
         */
        this.fnc_CustNumberCheck = function (strNum) {

          var vCompNo = this.fnc_ToString(strNum);             //undefine 및 null 처리
            vCompNo = vCompNo.replace(/-/g, "");             //[-] 제거

          if (!nexacro.toNumber(vCompNo))       return false;  //숫자 여부 체크
          if (this.fnc_Length(vCompNo) != 10) return false;    //자리수 체크

          var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
          var i, Sum=0, c2, remander;

          for (i = 0; i <= 7; i++) 
            Sum += checkID[i] * vCompNo.charAt(i);

          c2   = "0" + (checkID[8] * vCompNo.charAt(8));
          c2   = c2.substring(c2.length - 2, c2.length);
          Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
          remander = (10 - (Sum % 10)) % 10;

          if (Math.floor(vCompNo.charAt(9)) != remander) return false;
          return true;
          
        }

        /**
         * 주민등록번호로 생년월일 반환
         * @param {String} 주민등록번호
         * @return {String} 생년월일
         * @example this.fnc_fnc_ResidenceNumberToBirthday("111128-1152634")
         */
        this.fnc_fnc_ResidenceNumberToBirthday = function (sResNum) {

          sResNum = this.fnc_ToString(sResNum);             //undefine 및 null 처리
          sResNum = sResNum.replace(/-/g, "");              //[-] 제거

          if (!nexacro.toNumber(sResNum))       return "";  //숫자 여부 체크
          if (this.fnc_Length(sResNum) != 13)   return "";  //자리수 체크

            var sChk = sResNum.substr(6,1);

            if (sChk == "1" || sChk == "2" || sChk == "5" || sChk == "6") {
                return "19" + sResNum.substr(0,6);
            } else if (sChk == "3" || sChk == "4" || sChk == "7" || sChk == "8") {
                return "20" + sResNum.substr(0,6);
            }

        }

        /**
         * 주민등록번호로 생년월일 반환
         * @param {String} 주민등록번호
         * @return {boolean} True/False
         * @example this.fnc_ResidenceNumberCheck("111128-1152634")
         */
        this.fnc_ResidenceNumberCheck = function (sResNum) {
         
          sResNum = this.fnc_ToString(sResNum);                //undefine 및 null 처리
          sResNum = sResNum.replace(/-/g, "");                 //[-] 제거
          sResNum = this.fnc_Trim(sResNum);                    //공백 제거

          if (!nexacro.toNumber(sResNum))       return false;  //숫자 여부 체크
          if (this.fnc_Length(sResNum) != 13)   return false;  //자리수 체크

          var sResUnit = new Array(13);    // 주민 번호를 자리수별로 나눔
          var sResArgu = new Array(13);    // 공식 계산 인자 값
          var iCalSum  = 0;                // 공식에 따른 결과 값
          var iResult  = 0;                // 계산되 체크 비트 값

          //주민 번호를 자리수로 자르기
          for (var i=0; i<13; i++) {
            sResUnit[i] = parseInt(sResNum.charAt(i));
          }
          
          //검증 매개변수 설정
          sResArgu = [2,3,4,5,6,7,8,9,2,3,4,5];
          
          if ((sResUnit[6] > 0) && (sResUnit[6] < 5)) {
          
            //국내 주민번호 체크
            for (i=0; i<12; i++) {
              iCalSum += parseInt(sResUnit[i]) * parseInt(sResArgu[i]);
            }

            iResult = parseInt(iCalSum) % 11;
              iResult = (11 - parseInt(iResult)) % 10;
          
          } else if ((sResUnit[6]>4)&&(sResUnit[6]<9)){
            
            //5,6,7,8은 외국인 등록 번호 체크
            var iTMP = (sResUnit[7]*10) + sResUnit[8]; 
            if(iTMP % 2 != 0) return false; 
            if (sResUnit[11]<6) return false;
                
                for (i=0; i<12; i++) { 
              iResult += (parseInt(sResUnit[i]) * parseInt(sResArgu[i])); 
            } 
                
                iResult = (11 - (iResult%11)); 
                if (iResult >= 10) iResult -= 10;  
                iResult += 2; 
                if(iResult >= 10) iResult -= 10; 

          } else {
            
            //기타는 False
            return false;
          
          }

          //계산된 Check Bit 값과 입력된 Check Bit 비교
          if (iResult == sResUnit[12]) {
            return true;
          } else {
            return false;
          }

        }

        /**
         * Popup창 열기 
         * @param {String} Popup Id
         * @param {String} URL
         * @param {String} Argument
         * @param {String} Open style
         * @param {String} Callback func name
         * @return {None} None
         * @example this.fnc_OpenPopup("EVMC0020", "evm::EVMC0020.xfdl", {sCOMP_CODE:this.cmbSHRCOMP_CODE.value,sEVAL_CODE:this.cmbSHREVAL_CODE.value }, sOpenStyle, “화면 종료 후 처리함수”)
         */
        this.fnc_OpenPopup = function (sPopupId,sUrl,oArg,sOption,sPopupCallback) {

          this._rtnModal = null;
            var objParentFrame = this.getOwnerFrame();
          var sOpenalign = "";

          var bModeless = true;
          var bAutoSize = true;
          var nTop = -1;
          var nLeft = -1;
          var nWidth = 1;
          var nHeight = 1;
          var bShowTitle = true;  
          var sTitleText = "";
          var bShowStatus = false;  
          var bResizable = true;

          var sPopupCallback = (this.fnc_IsEmpty(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;

          //Open Sytle 처리
          var aVal = sOption.split(",");  
          
          for (var i = 0; i < aVal.length; i++) { 

            var aVal2 = aVal[i].trim().split("=");
            switch (aVal2[0]) {
              case "modeless"  : bModeless   = aVal2[1];           break;
              case "autosize"  : bAutoSize   = aVal2[1];           break;
              case "top"       : nTop        = parseInt(aVal2[1]); break;
              case "left"      : nLeft       = parseInt(aVal2[1]); break;
              case "width"     : nWidth      = parseInt(aVal2[1]); break;
              case "height"    : nHeight     = parseInt(aVal2[1]); break;
              case "title"     : bShowTitle  = aVal2[1];           break; 
              case "titletext" : sTitleText  = aVal2[1];           break;             
              case "status"    : bShowStatus = aVal2[1];           break;   
              case "resizable" : bResizable  = aVal2[1];           break;
            }     

          } 

        
          //Top & Left -1은 소유창의 가운데 위치
          if (nLeft == -1 && nTop == -1) {    
            sOpenalign = "center middle";
              nLeft      = (application.mainframe.width / 2) - Math.round(nWidth / 2);
              nTop       = (application.mainframe.height / 2) - Math.round(nHeight / 2) ;   
          }
        	
            //Form Open Type
            if (bModeless == "true") {

                var sOpenStyle= "showtitlebar=true showstatusbar=false";
                application.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight,this);

            } else {

        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, "absolute", nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		newChild.set_dragmovetype("all");
        		newChild.set_layered("true");
        		newChild.set_autosize(bAutoSize);
        		newChild.set_showtitlebar(bShowTitle);
        		newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);
        		newChild.set_resizable(bResizable);
        		newChild.set_openalign(sOpenalign);
        		newChild.addEventHandler("onclose",this._stopPropagation,this);
        		newChild.addEventHandler("onmove", this.fn_PopupMoveCollisionCheck, this);
        		newChild.showModal(objParentFrame, oArg, this, sPopupCallback, true);

            }

        }

        /****************************************************************************************************
           함수명   : _stopPropagation
           설명     : 팝엄으로 오픈된 화면의 상위 버블 이벤트 발생을 중지시킴.
           argument : None
           return   : null
           2014.10.01 김석두(KSD)
         ****************************************************************************************************/
        this._stopPropagation = function (obj,e ) {
          e.stopPropagation();
        }

        /****************************************************************************************************
           함수명   : _rtnModal
           설명     : fnc_OpenPopup() 관련 내부 함수
           argument : None
           return   : null
           2014.10.01 김석두(KSD)
         ****************************************************************************************************/
        this._rtnModal=null;

        /****************************************************************************************************
           함수명   : _setReturn
           설명     : fnc_OpenPopup() 관련 내부 함수 - 결과 반환을 위한
           argument : Form Oject
           return   : Object
           2014.10.01 김석두(KSD)
         ****************************************************************************************************/
        this._setReturn = function(obj) {

          this._rtnModal = null;

          if (typeof(obj) == "string") {
            this._rtnModal = obj;
            return obj;
          }

          if (obj instanceof Array) {
            this._rtnModal = new Array();
            
            for (var prop in obj) {
              this._rtnModal[prop] = obj[prop]; 
            }
          
          //파일업로드 팝업의 추가로 오브젝트가 넘어왔을때 처리 추가
          } else {
            this._rtnModal = obj;
          }

          return "_rtnModal";

        }

        /**
         * fnc_OpenPopup()으로 호출된 화면의 결과값 받아오는 함수
         * @param {None} None
         * @return {Object} Object
         * @example this.fnc_GetPopupRtn()
         */
        this.fnc_GetPopupRtn = function() {
            return this._rtnModal;
        }

        /**
         * fnc_OpenPopup() 관련 내부 함수 - Form Close  then Return Argument
         * @param {None} None
         * @return {Object} Object
         * @example this.fnc_OpenPopup(value)
         */
        this.fnc_PopupClose = function(val) {
            this.close(this.opener._setReturn(val));
        }

        
        this.arrParam = [];          //Dialog Callback 공유변수
        this.objTarget = null;       //Dialog Callback 공유변수
        this.sColumnNameTarget = ""; //for grid(Column ID)
        this.iRowTarget = 0;         //for grid(Row Position)
        this.bAction = false;        //for checking status of HelpDialogeAction is Busy

        /**
         * Help Popup 실행
         * @param {Object} Form
         * @param {Event} Component
         * @param {Array} Parameter
         * @return {None} None
         * @example this.fnc_HelpDialogeAction(this, obj, arrParam)
         */
        this.fnc_HelpDialogeAction = function (sForm,obj,arrParam) {

            /***************************************************************
              Event 중첩 발생 시 선행 Event에 의해 팝업 모드가 실행 중이면 
              후행 Event의 팝업은 실행하지 않는다.                         
             **************************************************************/
            if (this.bAction == false) {
                this.bAction = true;
            } else {
                return;
            }

            //Popup CallBack 함수 공유 처리를 위해
            this.arrParam = arrParam;                      //Parameter Setting
            this.objTarget = eval("this." + arrParam[4]);  //Current Focus Component

            //Component 종류에 따라 다른 종류의 팝업 실행(Grid Or Normal Component)
            if (obj instanceof Grid) {
                this._HelpDialogeGrid(sForm, obj, arrParam);
            } else {
                //this.getNextComponent(eval("this."+this.arrParam[4]), true).setFocus();
               	// 데이터셋 이름가져오기
        		var dsName = this.fnc_getBindDataSet(sForm, this.objTarget.name)[0];
        		//  컴포넌트에 바인드 정보가 있을경우..
        		if (dsName != "" && this.fnc_Length(dsName) > 0) {
        			var row =  eval("this." + dsName + ".rowposition"); // 현재 데이터셋의 row
        			var userData2 = this.objTarget.UserData2;           // EditFocus로 저장된 row
        			// row가 다르면 해당 rowposition에서 값을뺴서 넣어줘야함 ... 
        			if (this.objTarget.BaseData == "default" || !(row == userData2)) {
        				// EditFocus를 하지않고 온경우 UserData, UserData2 새로 세팅해주기.
        				this.objTarget.UserData = this.fnc_getUserData(sForm, this.objTarget.name); 
        				this.objTarget.UserData2 = row;
        				this.objTarget.BaseData = this.objTarget.UserData;
        			}			
        		}
        		
                this._HelpDialogeComponent(sForm, obj, arrParam);
            }

        }

        /****************************************************************************************************
           함수명   : _HelpDialogeGrid
           설명     : fnc_HelpDialogeAction 종속 함수(Grid에서 Help Popup 실행 시 처리 로직)
           argument : Form Object, Event Component, Parameter
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._HelpDialogeGrid = function (sForm,obj,arrParam) {

            var sResponse;
            var sDatasetName = obj.binddataset;

            /*************************************************************************
              for onexpanddown of grid Event 구분
               그리드에서 시작되었는지 Dataset Column Change에서 시작되었는지 구분
               onexpanddown 시 arrParam[7] 값에는 그리드 객체가 들어가 있고
               Dataset에서 넘어온 arrParam[7] 값에는 YES or No가 들어 있다.
            **************************************************************************/
            if (arrParam[7] instanceof Object) {
                this.iRowTarget        = this.objTarget.getDatasetRow(arrParam[7].row);
                this.sColumnNameTarget = this.fnc_getColId(obj, arrParam[7].cell);
            } else {
                this.iRowTarget        = this.objects[sDatasetName].rowposition;
                this.sColumnNameTarget = arrParam[2];
            }

            //현재 그리드의 컬럼이 입력 불가이면 팝업 처리 하지 않음
            if (this.fnc_ToUpper(obj.getCellProperty("body", obj.getBindCellIndex("body", this.sColumnNameTarget), "edittype")) == "NONE") {
                this.bAction = false;
                return;
            }

            //현재 그리드에 입력된 조회 조건값을 받음
            if (this.fnc_Length(this.fnc_Trim(arrParam[2])) > 0) arrParam[2] = this.objects[sDatasetName].getColumn(this.iRowTarget, arrParam[2]);

            // 그리드에서 입력 항목 값 삭제 시 초기화
            if ((this.fnc_Length(this.fnc_Trim(this.objects[sDatasetName].getColumn(this.iRowTarget, this.sColumnNameTarget))) == 0) && (arrParam[7] == "YES")) {
                this._DatasetDefaultValue(sDatasetName, this.iRowTarget, arrParam[5], "");
                this.bAction = false;
                return;
            }

            //Dataset에서 실행했으면 HelpCodeNameSearch를 아니면 HelpDialoge를 실행 처리
            if (arrParam[7] == "YES") {
                sResponse = this._HelpCodeNameSearch(arrParam, sForm, obj);
            } else {
                sResponse = this._HelpDialoge(arrParam);
            }

            //in case one record returned(Not Open Popup then)
            if (!this.IsNull(sResponse)) {
                if (sResponse == "NoData") {
                    this._DatasetDefaultValue(sDatasetName, this.iRowTarget, arrParam[5], "");  
                } else {
                    this._ResultDisplayDataset(sResponse, sDatasetName, this.iRowTarget, arrParam[5], arrParam[6]);
                }
            }

        }

        /****************************************************************************************************
           함수명   : _HelpDialogeComponent
           설명     : fnc_HelpDialogeAction 종속 함수(일반 Component에서 Help Popup 실행 시 처리 로직)
           argument : Form Object, Event Component, Parameter
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._HelpDialogeComponent = function (sForm,obj,arrParam) {

            var sResponse;

            if ((obj instanceof Static) || (obj instanceof Button)) {

                //Help Popup Image를 통해 실행 시켰다면 컴포넌트의 Enable 여부에 따라 팝업 처리 여부 결정
                if (this._OpenPopupCheck(this.objTarget) == false) {
                    this.bAction = false;
                    return;
                }
            
                if (!(arrParam[0] == "COMPOST")){
                    //alert("우편번호아님 for _HelpDialogeComponent");
                    //팝업 화면 호출
                    this.getNextComponent(eval("this."+this.arrParam[4]), true).setFocus();
                    sResponse = this._HelpDialoge(arrParam);
                } else {
                    //alert("우편번호ㄱㄱ for _HelpDialogeComponent");
                    sResponse = this._HelpDialoge(arrParam);
                }

            } else {

                //일반 컴포넌트 입력을 통해 실행 시 자료에 변화가 없으면 팝업 처리 하지 않음
                if (obj.value == obj.UserData) {
                    this.bAction = false;
                    return;
                }

                //해당 컴포넌트의 값이 없으면 Value & UserDate초기화 처리
                if (this.fnc_Length(this.fnc_Trim(obj.value)) == 0) {
                    this.fnc_ComponentClear(arrParam[5]);
                    this.bAction = false;
                    return;
                }

                //팝업 화면 호출
                this.getNextComponent(eval("this."+this.arrParam[4]), true).setFocus();
                sResponse = this._HelpCodeNameSearch(arrParam, sForm);

            }

            //in case one record returned(Not Open Popup then)
            if (!this.IsNull(sResponse)) {
            // 데이터가 안나올경우 조회하도록 변경
        //         if (sResponse == "NoData") {
        //             this.fnc_ComponentClear(arrParam[5]);  
        //             // 데이터가 없으면 팝업창 띄워준다.
        //            this.getNextComponent(eval("this."+this.arrParam[4]), true).setFocus();
        //            sResponse = this._HelpDialoge(arrParam);
        //         } 
                
                this._ResultDisplayComp(sResponse, arrParam[5], arrParam[6]);
         
            }

        }

        /****************************************************************************************************
           함수명   : _OpenPopupCheck
           설명     : _HelpDialogeComponent 종속 함수(팝업 처리 여부를 결정하는 함수)
           argument : Current Object
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._OpenPopupCheck = function (obj) {
            
            //해당 컴포넌트가 Enable Or Readonly면 팝업 처리 않음
            if ((obj.enable == false) || (obj.readonly)) return false;

            //Bind 안된 컬럼(조회조건)이면 다음 처리하기
            var datasetName = obj.binddataset;  
            if (this.fnc_Length(this.fnc_Trim(datasetName)) < 1) return true;

            // Record가 없으면 처리 않음
            if (this.objects[datasetName].rowcount < 1) return false;

            return true;

        }

        /****************************************************************************************************
           함수명   : _HelpDialoge
           설명     : _HelpDialogeGrid, _HelpDialogeComponent 종속 함수(실제 Popup 화면 호출)
           argument : Param Array
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._HelpDialoge = function (arrParam) {

            //HelpDialoge로 전달 할 Parameter 설정
            var objArgumentList = {
                sSEARCHKIND  : arrParam[0],
                sSEARCHPARAM : arrParam[1],
                sSEARCHVALUE : arrParam[2],
                sSEARCHUSE   : arrParam[3]
            };
            
            if (!(arrParam[0] == "COMPOST")){
                //alert("우편번호 아님!");
                var strOpenStyle = "resizable=true openalign='center middle'";
                this.fnc_OpenPopup("comHelpPopup", "common::comHelpPopup.xfdl", objArgumentList, "", "_HelpDialogeActionCallback");
            } else {
                //alert("우편번호임!");
                var strOpenStyle = "resizable=true openalign='center middle'";
                this.fnc_OpenPopup("COMPOST", "common::comPostPopup2.xfdl", objArgumentList, "", "_HelpDialogeActionCallback");
            }
        }

        /****************************************************************************************************
           함수명   : _HelpCodeNameSearch
           설명     : _HelpDialogeGrid, _HelpDialogeComponent 종속 함수(코드명 조회 처리)
           argument : Param Array, Form Object
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._HelpCodeNameSearch = function (arrParam,oForm,obj) {

            this.fnc_CreateCommonCodeDataset("dsTM_POPUPX");  //Dataset 생성 - 화면 Contents
            this.fnc_CreateCommonCodeDataset("dsCommonCode"); //Dataset 생성 - 실제 자료

            var sPACKAGENAME = "ComHelpPopup";
            var sMethodName  = "HelpCodeNameSearch";
            var sInDataSet   = "";
            var sOutDataSet  = "dsTM_POPUPX=dsTM_POPUPX dsCommonCode=dsCommonCode";
            var sDataSetName = "";

            //Transacton Call을 위한 Parameter Setting
            var sArgument  = " pgm='HelpCodeNameSearch'";
                sArgument += " action='HelpCodeNameSearch'";
                sArgument += " sSEARCHKIND="  + this.fnc_Quote(arrParam[0]);
                sArgument += " sSEARCHPARAM=" + this.fnc_Quote(arrParam[1]);
                sArgument += " sSEARCHVALUE=" + this.fnc_Quote(arrParam[2]);
                sArgument += " sSEARCHUSE="   + this.fnc_Quote(arrParam[3]);
                sArgument += " POPP_CODE="    + this.fnc_Quote(arrParam[0]);
                sArgument += " sSEARCHCOL='0'";
            this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "", false);  //sync 로 실행한다

            //조회 결과가 없을 경우
        //     if (this.dsCommonCode.rowcount < 1) {
        //         this.bAction = false;
        //         return "NoData";
        //     }

            var iColumnCount = this.dsCommonCode.getColCount();
            var rtnArray     = new Array();

            // 조회 결과가 한건인 경우
            if (this.dsCommonCode.rowcount == 1) {

                for (var i = 0; i < iColumnCount; i++) {
                    rtnArray.getSetter(i).set(this.dsCommonCode.getColumn(this.dsCommonCode.Row, "COL_TMP" + i));
                }

        		if (!((this.arrParam[9] == undefined) || (this.arrParam[9] == null))) {
        			var fnName = this.arrParam[9];
        			fnName = (fnName.indexOf("this.") > -1 ? fnName : "this." + fnName);
        			eval(fnName + "('" + rtnArray + "')");
        		}
        		
                this.bAction = false;
                return rtnArray;

            } else { // 조회결과가 여러개이거나 없을경우 일반 공통팝업을 띄워서 조회
                if (!(arrParam[7] instanceof Object) && !(obj != undefined)) {
        			this.getNextComponent(eval("this."+this.arrParam[4]), true).setFocus();
        		} 
        		sResponse = this._HelpDialoge(arrParam);
            }
            

        /* 
            //조회 건수가 복수일 때 선택 화면
            if (this.dsCommonCode.rowcount > 1) {

                var iX = 0;
                var iY = 0;
                var iFormX = system.clientToScreenX(oForm, 0);
                var iFormY = system.clientToScreenY(oForm, 0);

                if (this.objTarget instanceof Grid) {

                    var iCell = this.objTarget.getBindCellIndex( "body", this.sColumnNameTarget);
                    var str_pos = this.objTarget.getCellRect(this.objects[this.objTarget.binddataset].rowposition, iCell);

                    //X 좌표 구하기

                    if ((oForm.width + iFormX) >= (str_pos.left + 532 + system.clientToScreenX(this.objTarget, 0))) {
                        iX = system.clientToScreenX(this.objTarget, 0) + str_pos.left - 2;
                    } else {
                        iX = (system.clientToScreenX(this.objTarget, 0)+str_pos.left) - (532 - str_pos.width);
                    }

                    //Y 좌표 구하기
                    if ((oForm.height+iFormY) >= (str_pos.top + 205 + system.clientToScreenY(this.objTarget, 0))) {
                        iY = system.clientToScreenY(this.objTarget, 0) + str_pos.bottom;
                    } else {
                        iY = system.clientToScreenY(this.objTarget, 0) + str_pos.bottom - 233;
                    }
                    
                } else {

                    //X 좌표 구하기
                    if ((oForm.width + iFormX) >= (532 + system.clientToScreenX(this.objTarget, 0))) {
                        iX = system.clientToScreenX(this.objTarget, 0) - 2;
                    } else {
                        iX = system.clientToScreenX(this.objTarget, 0) - (532 -this.objTarget.width );
                    }

                    //Y 좌표 구하기
                    if ((oForm.height+iFormY) >= (205+ system.clientToScreenY(this.objTarget, 0) + parseInt(this.objTarget.height))) {
                        iY = system.clientToScreenY(this.objTarget, 0) + parseInt(this.objTarget.height)-1;
                    } else {
                        iY = system.clientToScreenY(this.objTarget, 0)-233;
                    }
            
                }

                var objArgumentList = {};
                iX -= system.clientToScreenX(application.mainframe,0);
                iY -= system.clientToScreenY(application.mainframe,0);
                var sOption = "left=" + iX + ",top=" + iY + ",title=false";
                this.fnc_OpenPopup("comHelpChoice", "common::comHelpChoice.xfdl", objArgumentList, sOption, "_HelpDialogeActionCallback");

            }
            */

        }

        /****************************************************************************************************
           함수명   : _DatasetDefaultValue
           설명     : _HelpDialogeGrid 종속 함수(팝업 결과 적용 시 Dataset에 Default setColumn 처리
           argument : sDatasetName, iRow, sColList, sValue
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._DatasetDefaultValue = function (sDatasetName,iRow,sColList,sValue) {

            if (this.fnc_Length(this.fnc_Trim(sColList)) < 1) return;

            var arrColList = this.fnc_Split(sColList, ",");
            
            /********************************************
              TO BE Check 후 처리 예정 2014.10.25 김석두
             ********************************************/
             //(Dataset의 OnColumnChanged 이벤트에서는 Change 이벤트 발생 안 함)
            if (this.arrParam[7] != "YES") this.objects[sDatasetName].set_enableevent(false);

            for (var i = 0; i < arrColList.length; i++) {
                this.objects[sDatasetName].setColumn(iRow, arrColList[i], sValue);
            }

            //(Dataset의 OnColumnChanged 이벤트에서는 Change 이벤트 발생 안 함)
            if (this.arrParam[7] != "YES") this.objects[sDatasetName].set_enableevent(true);

        }

        /****************************************************************************************************
           함수명   : _ResultDisplayDataset
           설명     : _HelpDialogeGrid 종속 함수(팝업 결과 적용 - Dataset에 setColumn 처리
           argument : sResponse, sDatasetName, iRow, sColList, sIndexList
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._ResultDisplayDataset = function (sResponse,sDatasetName,iRow,sColList,sIndexList) {

            if ((this.fnc_Length(this.fnc_Trim(sColList)) < 1) || (this.fnc_Length(this.fnc_Trim(sIndexList)) < 1)) return;

            var arrColList   = this.fnc_Split(sColList, ",");
            var arrIndexList = this.fnc_Split(sIndexList, ",");

            //두개의 개수는 일치해야 함
            if (arrColList.length != arrIndexList.length) return;

            //Dataset의 Event는 잠시 쉬게하자(Dataset의 OnColumnChanged 이벤트에서는 Change 이벤트 발생 안 함)
            if (this.arrParam[7] != "YES") this.objects[sDatasetName].set_enableevent(false);

            for (var i = 0; i < arrColList.length; i++) {
                this.objects[sDatasetName].setColumn(iRow, arrColList[i], sResponse[nexacro.toNumber(arrIndexList[i], 0)]);
            }

            //Dataset의 Event를 원래대로..(Dataset의 OnColumnChanged 이벤트에서는 Change 이벤트 발생 안 함)
            if (this.arrParam[7] != "YES") this.objects[sDatasetName].set_enableevent(true);

        }

        /****************************************************************************************************
           함수명   : _ResultDisplayComp
           설명     : _HelpDialogeComponent 종속 함수(팝업 결과 적용 Comp에 Set Value)
           argument : sResponse, sDatasetName, iRow, sColList, sIndexList
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._ResultDisplayComp = function (sResponse,sCompList,sIndexList) {

            if ((this.fnc_Length(this.fnc_Trim(sCompList)) < 1) || (this.fnc_Length(this.fnc_Trim(sIndexList)) < 1)) return;

            var arrCompList  = this.fnc_Split(sCompList, ",");
            var arrIndexList = this.fnc_Split(sIndexList, ",");

            // 두개의 개수는 일치해야 함
            if (arrCompList.length != arrIndexList.length) return;

            for (var i = 0; i < arrCompList.length; i++) {
                eval("this." + arrCompList[i]).set_value(sResponse[nexacro.toNumber(arrIndexList[i], 0)]);
                eval("this." + arrCompList[i]).UserData = sResponse[nexacro.toNumber(arrIndexList[i], 0)];
            }

        }

        /****************************************************************************************************
           함수명   : _ComponentDataRollback
           설명     : _HelpDialogeComponent 종속 함수(컴포넌트 초기값으로 재설정)
           argument : sResponse, sDatasetName, iRow, sColList, sIndexList
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._ComponentDataRollback = function (sComponentList) {

            var arrComList = this.fnc_Split(sComponentList, ",");

            for (var i = 0; i < arrComList.length; i++) {
                eval("this." +arrComList[i]).set_value(eval("this." +arrComList[i]).UserData);
            }

        }

        /****************************************************************************************************
           함수명   : _HelpDialogeActionCallback
           설명     : Help Popup의 Callback 처리
           argument : sPopupId, Variant
           return   : None
           2014.10.23 김석두(KSD)
         ****************************************************************************************************/
        this._HelpDialogeActionCallback = function(sPopupId,Variant) {

            // 반환받은 문자열데이타 형변환(String, Array, Object) 처리
            var sResponse = this.fnc_GetPopupRtn();
          
            if (this.objTarget instanceof Grid) {
                
                var oGrid = this.objTarget;
                var sDatasetName = this.objTarget.binddataset;

                //조회 결과 자료가 없을 때  Componect 초기화
                if (sResponse == "NoData") {
                    this._DatasetDefaultValue(sDatasetName, this.iRowTarget, this.arrParam[5], "");

                //조회 결과가 1개 이상 있을 때 팝업 결과 적용
                } else if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) {
                    this._ResultDisplayDataset(sResponse, sDatasetName, this.iRowTarget, this.arrParam[5], this.arrParam[6]);
                
                //조회 결과에서 취소 시 Componect Value Rollback
                } else if ((this.fnc_Length(this.fnc_Trim(sResponse)) < 1) && (this.arrParam[7] == 'YES')) {
                    this._DatasetDefaultValue(sDatasetName, this.iRowTarget, this.sColumnNameTarget, this.arrParam[8]);
                }   

                //Object Type 이 Grid이면 다음 셀로..
                if (this.arrParam[7] instanceof Object) this.objTarget.moveToNextCell();

            } else {

                //Help Pupup Callback 처리
                if (sPopupId == "comHelpPopup") {

                    //조회 결과 자료가 없을 때  Componect 초기화
                    if (sResponse == 'NoData') {
                        this.fnc_ComponentClear(this.arrParam[5]);

                    //조회 결과가 1개 이상 일 경우 팝업 결과 적용
                    } else if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) {
                        this._ResultDisplayComp(sResponse, this.arrParam[5], this.arrParam[6]);

                    //조회 결과에서 취소 시 Componect Value Rollback
                    } else if ((this.fnc_Length(this.fnc_Trim(sResponse)) < 1))  {
                        this._ComponentDataRollback(this.arrParam[4]);
                    }       

                //Code Name 선택 Pupup Callback 처리
                } else {
                
                    //조회 결과 자료가 없을 때  Componect 초기화
                    if (sResponse == "NoData") {
                        this.fnc_ComponentClear(this.arrParam[5]);

                    //조회 결과가 1개 이상일 경우 팝업 결과 적용
                    } else if (sPopupId == "COMPOST"){
                        var returnData = this.fnc_GetPopupRtn();
        				
                        var target = this.arrParam[5].split(",");
                        // 도로명 주소일 경우
                        //if ((returnData != null) && (returnData.userSelectedType == "R")) {            
                        if (returnData != null) {
        					// 0. 우편번호 1. 주소 2. 건물명
        					eval("this." + target[0]).set_value(returnData.zonecode);
        					eval("this." + target[1]).set_value(returnData.roadAddress);
        					eval("this." + target[2]).set_value(returnData.buildingName);
        				} 
                    
                    } else if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) {
                        this._ResultDisplayComp(sResponse, this.arrParam[5], this.arrParam[6]);

                    //조회 결과에서 취소 시 Componect Value Rollback
                    } else if ((this.fnc_Length(this.fnc_Trim(sResponse)) < 1) || (!(obj instanceof Static))) {
                        this._ComponentDataRollback(this.arrParam[4]);
                    }

                }

            }
        	
        	// 팝업 호출시 후처리 호출 함수가 지정되어 있다면... 함수를 실행
        	if (sResponse == null) {
        		sResponse = "";
        	}
          
        	if (!((this.arrParam[9] == undefined) || (this.arrParam[9] == null))) {
        		var fnName = this.arrParam[9];
        		fnName = (fnName.indexOf("this.") > -1 ? fnName : "this." + fnName);
        		eval(fnName + "('" + sResponse + "')");
        	}
        	
          
            this.bAction = false;

        }

        this.sSERVERDATETIME = "";
        /**
         * 서버의 일시 가져오기
         * @param {String} ('DATE', 'TIME', 'DATETIME')
         * @return {String} Server Datetime
         * @example this.fnc_GetServerDateTime("DATE")
         */
        this.fnc_GetServerDateTime = function(sKind) {

          sKind = this.fnc_ToString(sKind);             //undefine 및 null 처리
          sKind = sKind.trim();                         //공백제거
          if (this.fnc_Length(sKind) < 1) return "";    //자리수 체크
          sKind = this.fnc_ToUpper(sKind);

          var sPackageName = "ComReturnServerTime";
          var sMethodName  = "RETURNDT";
          var sArgument    = " pgm="    + this.fnc_Quote(sPackageName);
            sArgument   += " action=" + this.fnc_Quote(sMethodName);
            sArgument   += " sKind="  + this.fnc_Quote(sKind);

          this.fnc_TransactionCall(this, sPackageName, sMethodName, "", "", sArgument, "fn_CallBack", false);
          return this.sSERVERDATETIME;

        }

        /**
         * 그리드의 특정 컬럼에 포커스 주기
         * @param {Object} Grid
         * @param {String } Column Name
         * @return {None} None
         * @example this.fnc_GridSetCellFocus(this.grd, "ACCT_GUBN")
         */
        this.fnc_GridSetCellFocus = function(obj,sColumn) {
        	
        	iColIndex = obj.getBindCellIndex("body", sColumn);
        	
        	//obj.showEditor(true);
        	
        	var iRow = this.objects[obj.binddataset].rowposition;
        	obj.selectRow(iRow);
        	
        	if (iColIndex > -1) obj.setCellPos(iColIndex);
        	obj.setFocus();

        }

        this.sENCRYPEPWD = "";
        /**
         * 비밀번호 암호화 처리
         * @param {String} 암호화 대상 비밀번호
         * @return {String} 암호화된 비밀번호
         * @example fnc_GetPasswordEncrypt("aaqweojnqw")
         */
        this.fnc_GetPasswordEncrypt = function(sPassword) {

          var sPackageName = "ComReturnEncryptPassword";
          var sMethodName  = "RETURNPW";
          var sArgument    = " pgm="    + this.fnc_Quote(sPackageName);
            sArgument   += " action=" + this.fnc_Quote(sMethodName);
            sArgument   += " sPassword="  + this.fnc_Quote(sPassword);

          this.fnc_TransactionCall(this, sPackageName, sMethodName, "", "", sArgument, "fn_CallBack", false);
          return this.sENCRYPEPWD;

        }

        /**
         * 숫자를 한글로 변환하는 함수
         * @param {String} 한글로 변환 할 숫자
         * @return {String} 한글로 변환된 결과
         * @example fnc_NumberToKorean(25)
         */
        this.fnc_NumberToKorean = function (iNumber) {

          if (this.fnc_Length(iNumber) < 1)        return "";  // 값이 없으면 종료
          if (nexacro.isNumeric(iNumber.toString()) == false) return "";  // 숫자가 아니면 종료

          var return_Val = "";
          var arg_Str    = "";    //현재값을 문자열로 변경
          var str_One    = "";    //한글자로 자른값
          var arg_Length = "";    //자리수
          var cut_Four   = "";    //네자리로 자를경우 몇개 나오는가
          var four_Mod   = "";    //처음 자른 자리수(나머지)는 몇개 인가
          var four_Len   = "";    //네자리로 자른 갯수(몫, 자리수)
          var isZero     = "";    //'0' 인지 체크
          var str_Four   = "";    //네자리로 자른 값
          
          var arg_Str    = this.fnc_Trim(iNumber);
            var arg_Length = this.fnc_Length(arg_Str);
            var cut_Four   = nexacro.ceil(arg_Length / 4);    // 네자리로 자른 몫
            var four_Mod   = arg_Length % 4;                  // 네자리로 자른 나머지

            //몫으로 루프
            for (var i = 1; i <= cut_Four; i++) {
            
                str_Four = "";

                if (four_Mod != 0 && i == 1 ) {
                    four_Len = four_Mod;
                } else {
                    four_Len = 4;
                }

                //나머지값 or 4번씩 루프
                for (var j = 1; j <= four_Len; j++) {

                    if (i == 1) {
                        str_One = arg_Str.substr(j-1, 1);
                    } else if (four_Mod == 0) {
                        str_One = arg_Str.substr((((i-2)*4) + (four_Mod+j) + 4)-1, 1); 
                    } else {
                        str_One = arg_Str.substr((((i-2)*4) + (four_Mod+j))-1, 1);
                    }
                    
                    str_Four = str_Four+str_One;

                    if (str_One == "0") {
                        isZero = "Y";
                    } else {
                    
                        isZero = "N";

                        if (str_One == "1") {
                            return_Val += "일";
                        } else if (str_One == "2") {
                  return_Val += "이";
                } else if (str_One == "3") {
                  return_Val += "삼";
                } else if (str_One == "4") {
                  return_Val += "사";
                } else if (str_One == "5") {
                  return_Val += "오";
                } else if (str_One == "6") {
                  return_Val += "육";
                } else if (str_One == "7") {
                  return_Val += "칠";
                } else if (str_One == "8") {
                  return_Val += "팔";
                } else if (str_One == "9") {
                  return_Val += "구";
                  }
                    
                    }

                    //0이면 천, 백, 십 단위 안 붙임
                    if (isZero == "N") {
                    
                        if (four_Len-j == 3) {
                            return_Val += "천";
                        } else if (four_Len-j == 2) {
                  return_Val += "백";
                        } else if (four_Len-j == 1) {
                            return_Val += "십";
                        }
                        
                    }
                
                }

            //네자리가 0000이면 만, 억, 조, 경 안 붙임
                if (str_Four != "0000" && nexacro.toNumber(str_Four) != 0) {

                    if (cut_Four-i == 1) {
                        return_Val += "만";
                    } else if (cut_Four-i == 2) {
                        return_Val += "억";
                    } else if (cut_Four-i == 3) {
                        return_Val += "조";
                    } else if (cut_Four-i == 4) {
                        return_Val += "경";
                    }
                    
            }
                
            }

            return return_Val;

        }

        
        /*
         * 파일의 확장자 반환
         * @param {String} File Full Path & Name String
         * @return {String} 파일 확장자
         * @example fnc_FileNameExtensionReturn("D:\logsmylog.log", sGubun)
         */
        this.fnc_FileNameExtensionReturn = function (sFullName,sGubun) {

          var sFileName      = sFullName.split('\\').slice(-1).toString();     //파일명가져오기
          var sFileArr       = sFullName.split('.');                           //확장자 구분을 위해 배열처리
          var sFileExtension = sFileArr.slice(-1).toString();                  //파일 확장자

          if (sGubun == 'NAME') {
            return sFileName;
          } else {
            return sFileExtension;
          }

        }

        /**
         * 신규 화면을 Open 합니다. 신규 화면이 Open 될 때 Open Form List 정보에 Insert 합니다.  *
         * @param {String} 화면명
         * @param {String} 타이틀
         * @param {String} URL
         * @param {String} 매개변수
         * @param {String} width
         * @param {String} height
         * @param {String} 모드
         * @param {String} left
         * @param {String} right
         * @example this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 0, 0, sDisplay, -1, -1);
         */
        this.fnc_NewWindow = function (sFormID,sFormTitle,sFormUrl,sFormArgument,iWidth,iHeight,sDisplayMode,iLeft,iTop) {

          // 존재하지 않는 url이면 종료한다.
          if (sFormUrl.trim().length < 1) {
            this.fnc_Message("TMM150");
            return;
          }

          // Child Frame 생성
          var oChildFrame = application.MAINWORK.frames[sFormID];

          if (oChildFrame == null) {
          
            //열수 있는 화면을 제한한다.
            if (application.dsOpenFormList.rowcount >= application.GBL_WINMAXNUM) {
              this.fnc_Message("TMM149", application.GBL_WINMAXNUM);
              return;
            }

            oChildFrame = new ChildFrame;
            //oChildFrame.init(sFormID, "absolute", 0, 0, 1051, 768);
            // NSCOM :: 화면 오픈 및 리사이징 처리는 Fix 시킴
            oChildFrame.init(sFormID, "absolute", 0, 0, 1187, 717);
            application.MAINWORK.addChild(sFormID, oChildFrame);    
            //oChildFrame.set_formurl(sFormUrl);		// Non WorkFrame - [NSCOM]
            oChildFrame.set_formurl("frame::workFrame.xfdl");	// WorkFrame - [NSCOM]
            oChildFrame.set_showtitlebar(false);
            oChildFrame.set_showstatusbar(false);
            oChildFrame.set_showcascadetitletext(true);
            oChildFrame.set_dragmovetype("normal");
            oChildFrame.set_resizable(true);			// NSCOM ::: 업무화면 영역의 리사이징은 제한합니다. 추후 변경의 여지가 있습니다..
            oChildFrame.set_openstatus(sDisplayMode);
        	
        	oChildFrame.sFORM_MENU_ID = sFormID;	// 메뉴ID
        	oChildFrame.sFORM_URL = sFormUrl;		// WorkFrame - [NSCOM]
            oChildFrame.sFORMCAPTION  = sFormArgument[0];
            oChildFrame.sFORMLOCATION = sFormArgument[1];
            oChildFrame.sUSERAUTH     = sFormArgument[2];
            oChildFrame.sUSERLAVEL    = sFormArgument[3];
        	if (sFormArgument[5] != undefined && sFormArgument[5] != "") {
        		oChildFrame.sCALLFROM = sFormArgument[5];
        	}
        	
        	// 화면으로 전달해야할 파라미터 값이 존재한다면... 파라미터를 넘겨줌
        	if (sFormArgument[6] != undefined && sFormArgument[6] != null) {
        		oChildFrame.oLINKPARAM = sFormArgument[6];
        	}
        	
            application.GBL_FORMCAPTION = sFormArgument[0];
            application.GBL_FORMLOCATION = sFormArgument[1];
            application.GBL_USERAUTH = sFormArgument[2];
            application.GBL_USERLAVEL = sFormArgument[3];
        	
        	// 즐겨찾기 처리를 위한 변수. SDI 화면에서는 불필요
        	if (application.GBL_FRAMETYPE != "SDI") {
        		oChildFrame.__FAVICON_MENU_ID  = sFormID;
        	}
        	
            oChildFrame.show();
            
        	//tab page 이벤트
        	oChildFrame.addEventHandler("onactivate",this._ChildFrameActivate,this);
        	oChildFrame.addEventHandler("onclose",this._ChildFrameClose,this);

        	var iRow = application.dsOpenFormList.addRow();
        	application.dsOpenFormList.setColumn(iRow, "FORM_NAME", sFormID); //화면 ID
        	application.dsOpenFormList.setColumn(iRow, "FORM_CAPTION", sFormTitle); //화면 Title
        	//application.FRMTOP.form.fn_AddTabPage(sFormID, sFormTitle);       //Open Tab 처리
        	application.FRMBOTTOM.form.fn_AddTabPage(sFormID, sFormTitle);       //Open Tab 처리

          } else {
            
            for (var i = 0; i < application.FRMBOTTOM.form.tabOpenMenu.components.length; i++) {
              
              var childID = application.FRMBOTTOM.form.tabOpenMenu.components[i].menuid;

              if (childID == sFormID) {
                application.FRMBOTTOM.form.tabOpenMenu.set_tabindex(i);
                break;
              }

            }

            oChildFrame.setFocus();

          }
           
        }

        /******************************************************************************
         *  화면 Activate event
        *******************************************************************************/
        this._ChildFrameActivate = function(obj,e) {
          //application.FRMTOP.form.fn_SetTab(obj.name);
          application.FRMBOTTOM.form.fn_SetTab(obj.name);
        }

        /******************************************************************************
         *  화면 close event
        *******************************************************************************/
        this._ChildFrameClose = function(obj,e) {
          
          if(application.dsMenuList.findRowAs( "PROG_IDXX", e.fromobject.name ) < 0 || obj.opener != null) return;
          application.FRMBOTTOM.form.fn_RemoveTabPage(obj.name);

        }

        /***************************************
          화면 maximize 처리
         ***************************************/
        this._Maxbuttononclick = function (obj,e) {

          for (var i = 0 ; i < application.MAINWORK.all.length  ; i++){
            if(e.fromreferenceobject.parent.parent.name != application.MAINWORK.frames[i].name){
              application.MAINWORK.frames[i].set_showtitlebar(false);
            }
          } 

            application.MAINWORK.frames[e.fromreferenceobject.parent.parent.name].set_openstatus("maximize");
            application.MAINWORK.frames[e.fromreferenceobject.parent.parent.name].set_showtitlebar(false);

        }

        /**
         * 화면 즐겨찾기 추가/삭제 기능
         * @param {Object} obj 이벤트 발생한 버튼 컴포넌트
         */
        this.fnc_AddFavorite = function(obj) {
        	
        	if(obj instanceof nexacro.Button) {
        		var addStatus = obj.addStatus;
        		var menuId = this.getOwnerFrame()["__FAVICON_MENU_ID"];
        		
        		if (addStatus == "false") {
        			var row = application.dsMyMenuList.addRow();
        			application.dsMyMenuList.setColumn(row, "MENU_IDXX", menuId);
        		} else {
        			var row = application.dsMyMenuList.findRow("MENU_IDXX", menuId);
        			if (row > -1) {
        				application.dsMyMenuList.deleteRow(row);
        			}
        		}
        		
        		
        		this.fnc_TransactionCall(
        			this,
        			"ComMain",
        			"Favorite",
        			"dsMyMenuList=dsMyMenuList:U",
        			"dsMyMenuList=dsMyMenuList",
        			"GBL_USERID=" + nexacro.wrapQuote(application.GBL_USERID),
        			"fnc_AddFavoriteCallback",
        			true);
        		
        	}
        }

        /**
         * 화면 즐겨찾기 추가/삭제 처리 트랜젝션 후 실행할 콜백함수
         * @param {String} methodName 트랜젝션 메소드명
         * @param {Number} errorCode 에러코드
         * @param {String} errorMsg 에러메시지
         */
        this.fnc_AddFavoriteCallback = function(methodName,errorCode,errorMsg) {
        	
        	if (errorCode == -1) {
        		alert(errorMsg);
        		return;
        	}
        	
        	// 메인화면 좌측 SNB의 즐겨찾기 버튼 목록 초기화
        	if (typeof application.FRMLEFT.form.fn_InitFavoriteBtn == "function") {
        		application.FRMLEFT.form.fn_InitFavoriteBtn();
        	}
        	
        	
        	if (errorCode > -1) {

        		var sMenuId = application.getActiveForm().getOwnerFrame()["__FAVICON_MENU_ID"];
        		var finded = application.dsMyMenuList.findRow("MENU_IDXX", sMenuId);
        		var favBtnObj = application.getActiveForm().btn_favorite;
        		
        		if (application.getActiveForm().name == "_WORKFRAME") {
        			favBtnObj = application.getActiveForm().div_work_out.div_work.btn_favorite;
        		}
        		
        		if (finded > -1) {
        			favBtnObj.set_cssclass("btn_WF_Bookmark_S");
        			favBtnObj.addStatus = "true";
        			favBtnObj.set_tooltiptext("Remove from MyMenu");
        		} else {
        			favBtnObj.set_cssclass("btn_WF_Bookmark");
        			favBtnObj.addStatus = "false";
        			favBtnObj.set_tooltiptext("Add to MyMenu");
        		}
        		
        	}
        	
        }

        
        /**
         * Export to Excel
         * @param {Object} Grid
         * @example this.fnc_ToExcel(this.name);
         */
        this.fnc_ToExcel = function (grdiObj) {
            this.fnc_OpenPopup("comExcel","common::comExcel.xfdl",{},""); 
        }

        /******************************************************************************
          그리드 헤드 셀 클릭 정렬 기능 관련 function
        ******************************************************************************/
        // 정렬이 토글될 때 취소를 실행할지 여부
        // true 일 경우 오름차순/내림차순/취소 반복
        // false 일 경우 오름차순/내림차순 반복
        this.SORT_TOGGLE_CANCEL = true;

        // 정렬 표시자 구분 (text or image)
        this.MARKER_TYPE = "text";

        // Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정 
        // [오름차순표시, 내림차순표시]
        //this.MARKER = ["URL('temp::grd_sort_up.png')", "URL('temp::grd_sort_dn.png')"]; // ["▲", "▼"]
        this.MARKER = ["▲", "▼"];

        /*
         * Grid head click 시 소팅 처리하기 위한 초기 지정
         * @param {Grid} grid 대상 Grid Component
         */
        this._InitGridHeadClickSort = function(grid) {
          
          // 대상이 이미 초기화 되었는지 확인
          if (this._GetUserProperty(grid, "initGridHeadClickSort")) return;
          
          // add headclick handler
          grid.addEventHandler("onheadclick", this._SortGridOnHeadClickHandler, this);
          
          // 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
          this._SetUserProperty(grid, "initGridHeadClickSort", true); 

        }

        /*
         * onheadclick Event Handler
         * @param {Grid} obj Event가 발생한 Grid Component
         * @param {GridClickEventInfo} e GridClickEventInfo
         */
        this._SortGridOnHeadClickHandler = function(obj,e) {

          if(obj.getCellProperty( "Head", e.cell, "edittype" ) == "checkbox") return;
          
          var multiple = false;
          
          // Shift 키
          if ( e.shiftKey ) multiple = true;
            
          // Ctrl 키
          if ( e.ctrlKey ) multiple = true;
          
          // 정렬 상태 변경이 성공하면 정렬을 실행한다.
          if (this._SetSortStatus(obj, e.cell, multiple)) this._ExecuteSort(obj);

        }

        /*
         * 정렬 상태를 지정한다. (실제 소팅 처리는 executeSort 에서 담당한다.)
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex 대상 head cell index
         * @param {boolean=} isMultiple 다중선택여부
         * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
         * @return {boolean} 상태 변경 여부
         */
        this._SetSortStatus = function(grid,headCellIndex,isMultiple,sortStatus) { 
          
          // head cell index 에 해당하는 body cell index
          var bodyCellIndex = this._GetBodyCellIndex(grid, headCellIndex);
          if ( bodyCellIndex < 0 ) return false;
          
          // body cell index 에 해당하는 바인드 컬럼명
          var columnName = this._GetBindColumnNameByIndex(grid, bodyCellIndex);
          if ( this.IsNull(columnName) ) 
          {
            return false;
          }
          
          if ( this.IsNull(isMultiple) ) isMultiple = false;

          if ( this.IsNull(sortStatus) ) sortStatus = -1;
          
          // 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
          if ( this._GetUserProperty(grid, "sortInfos") === undefined )
          {
            this._SetUserProperty(grid, "sortInfos", {});
          }
          
          // 정렬대상컬럼 (순서중요)
          if ( this._GetUserProperty(grid, "sortItems") === undefined )
          {
            this._SetUserProperty(grid, "sortItems", []);
          } 
          
          var sortInfos = this._GetUserProperty(grid, "sortInfos"),
            sortItems = this._GetUserProperty(grid, "sortItems"),
            sortInfo = sortInfos[columnName],
            sortItem,
            status;
          
          if ( this.IsNull(sortInfo) )
          {
            var headText = grid.getCellText(-1, headCellIndex);
            
            // executeSort에서 정렬 표시를 위해 cell index 가 필요한데
            // cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.     
            var refCell = this._GetGridCellObject(grid, "head", headCellIndex);
            
            sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
          }

          // set sort status
          if ( isMultiple ) 
          {   
            status = sortInfo.status;
            if ( sortStatus == -1 ) 
            {
              if ( status == 0 ) 
              {
                sortInfo.status = 1;
              } 
              else if ( status == 1 ) 
              {
                sortInfo.status = 2;
              } 
              else if ( status == 2 ) 
              {
                sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
              }
            }
            else 
            {
              sortInfo.status = sortStatus;
            }
          }
          else 
          {
            for (var p in sortInfos) 
            {
              if ( sortInfos.hasOwnProperty(p) )
              {
                sortInfo = sortInfos[p];
                
                if ( p == columnName ) 
                {
                  status = sortInfo.status;
                  if ( sortStatus == -1 ) 
                  {
                    if ( status == 0 ) 
                    {
                      sortInfo.status = 1;
                    } 
                    else if ( status == 1 ) 
                    {
                      sortInfo.status = 2;
                    } 
                    else if ( status == 2) 
                    {
                      sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
                    }
                  } 
                  else 
                  {
                    sortInfo.status = sortStatus;
                  }
                } 
                else 
                {
                  sortInfo.status = 0;
                }
                
                if ( sortInfo.status == 0 )
                {
                  for (var j=0, len2=sortItems.length; j<len2; j++) 
                  {
                    if ( sortItems[j] !== columnName ) 
                    {
                      sortItems.splice(j,1);
                      break;
                    }
                  }
                }
              }
            }
          }
          
          
                
          // 컬럼정보 등록
          if ( this._ArrayIndexOfItem(sortItems, columnName, null, null) == -1 )
          {
            sortItems.push(columnName);
          }
          return true;
        }

        /*
         * 정렬 적용
         * @param {Grid} grid 대상 Grid Component
         */
        this._ExecuteSort = function(grid) 
        {
          var sortInfo, 
            sortItem,
            sortInfos = this._GetUserProperty(grid, "sortInfos"),
            sortItems = this._GetUserProperty(grid, "sortItems"),
            columnName,
            status,
            cell,
            sortString = "";
            
          if ( this.IsNull(sortInfos) || this.IsNull(sortItems) ) return;

          // keystring 조합
          for (var i=0; i<sortItems.length; i++) 
          {
            columnName = sortItems[i];
            sortInfo = sortInfos[columnName];
            status = sortInfo.status;
            cell = sortInfo.refCell;
            
            // 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
            // 확인하여 없으면 제거해 준다.
            if ( this.IsNull(cell) || grid.getBindCellIndex("body", columnName) < 0 )
            {
              sortItems.splice(i,1);
              sortInfos[columnName] = null;
              delete sortInfos[columnName];
              
              i--;
            }
            else if ( status > 0 ) 
            {
              sortString += (status == 1 ? "+" : "-") + columnName;
            }
          }

          var ds = this._Lookup(grid.parent, grid.binddataset);
          
          // keystring 확인
          var curKeyString = ds.keystring;
          var groupKeyString = "";
          
          if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 )
          {
            var sIndex = curKeyString.indexOf("S:");
            var gIndex = curKeyString.indexOf("G:");

            if ( sIndex > -1 )
            {
              groupKeyString = "";
            }
            else
            {
              if ( gIndex < 0 )
              {
                groupKeyString = "G:"+curKeyString;
              }
              else
              {
                groupKeyString = curKeyString;
              }
            }
          }
          else
          {
            var temps = curKeyString.split(",");
            var temp;
            for (var i=0,len=temps.length; i<len; i++)
            {
              temp = temps[i];
              if ( temp.length > 0 && temp.indexOf("S:") < 0 )
              {
                if ( temp.indexOf("G:") < 0 )
                {
                  groupKeyString = "G:"+temp;
                }
                else
                {
                  groupKeyString = temp;
                }
              }
            }
          }
          
          if ( sortString.length > 0 )
          {
            var sortKeyString = "S:"+sortString;
            
            if ( groupKeyString.length > 0 )
            {
              ds.set_keystring(sortKeyString + "," + groupKeyString);
            }
            else
            {
              ds.set_keystring(sortKeyString);
            }
            
            this._SetUserProperty(grid, "sortKeyString", sortKeyString);
          } 
          else
          {   
            ds.set_keystring(groupKeyString);
            
            this._SetUserProperty(grid, "sortKeyString", "");
          }

        

          // 정렬표시
          var type = this.MARKER_TYPE;
          var index, marker;
          for (var p in sortInfos) 
          {
            if ( sortInfos.hasOwnProperty(p) )
            {
              sortInfo = sortInfos[p];      
              cell = sortInfo.refCell;
              
              if ( cell )
              {
                index = this._GetCellObjectIndex(cell);
                
                marker = sortInfo.status == 1? this.MARKER[0]:(sortInfo.status == 2? this.MARKER[1]:"");
                
                if ( type == "text" )
                {
                  grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
                }
                else if ( type == "image" )
                {
                  grid.setCellProperty( "head", index, "style", "background:"+marker + " 50 5;");
                }
              }
            }
          }
        }

        /*
         * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {Grid} grid 대상 Grid Component
         * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
         * @param {number} index 얻고자 하는 cell 의 index
         * @return {object} cell object
         */
        this._GetGridCellObject = function(grid,band,index)
        {
          // 내부속성을 통해 얻어온다.
          var refCell;
          var format = grid._curFormat;
          if (format)
          {
            if ( band == "head" )
            {
              refCell = format._headcells[index];
            }
            else if ( band == "body" )
            {
              refCell = format._bodycells[index];
            }
            else if ( band == "summ" || band == "summary" )
            {
              refCell = format._summcells[index];
            }
          }
          
          return refCell;
        }

        /*
         * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {object} cell 대상 cell object
         * @return {number} cell index
         */
        this._GetCellObjectIndex = function(cell)
        {
          return cell._cellidx;
        }

        /*
         * body cell index로 binding 된 컬럼명을 얻어온다.
         * @param {Grid} grid 대상 Grid Component
         * @param {number} index body cell index
         */
        this._GetBindColumnNameByIndex = function(grid,index) 
        {
          var text = "";
          var columnid = "";
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }
          
          if ( !this.IsNull(text) )
          {
            if ( text.search(/^BIND\(/) > -1 ) 
            { 
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            } 
            else if ( text.search(/^bind:/) > -1 ) 
            {
              columnid = text.replace(/^bind:/, "");
            }
          }
          
          return columnid;
        }

        /*
         * head cell에 match되는 body cell을 얻어온다
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex head cell index
         * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
         */
        this._GetBodyCellIndex = function(grid,headCellIndex,useColspan) 
        { 
          // Max Head Row Index
          var maxHeadRow = 0;
          for (var i=0, len=grid.getCellCount("head"); i<len; i++) 
          {
            var row = grid.getCellProperty("head", i, "row");
            if (maxHeadRow < row) 
            {
              maxHeadRow = row;
            }
          }
          // Max Body Row Index
          var maxBodyRow = 0;
          for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
          {
            var row = grid.getCellProperty("body", i, "row");
            if (maxBodyRow < row) 
            {
              maxBodyRow = row;
            }
          }
          
          if (maxHeadRow == 0 && maxBodyRow == 0) 
          {
            return headCellIndex;
          }
          
          // Body Row 가 1개 이상일 경우
          // Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
          // Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.      
          var cellIndex = -1;
          var sRow = -1;
          var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
          var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
          var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));        
          
          if (maxHeadRow > maxBodyRow) 
          {
            sRow = nRow - (maxHeadRow - maxBodyRow);
            sRow = (sRow < 0 ? 0 : sRow);
          }
          else 
          {
            sRow = nRow;
          }
          
          var cRow, cCol, cColspan;
          for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
          {
            cRow = parseInt(grid.getCellProperty("body", i, "row"));
            cCol = parseInt(grid.getCellProperty("body", i, "col"));  
            cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));          

            // colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
            if ( useColspan )
            {
              if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
              {   
                cellIndex = i;
                break;
              }   
            }
            else
            {
              if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
              {   
                cellIndex = i;
                break;
              }
            }
          }
          return cellIndex;
        }

        /*
         * 주어진 nexacro Component, object 에 사용자 속성을 추가한다.<br>
         * 대상이 원래 가지고 있는 이름을 지정해도 상관없이 동작한다.<br>
         * ※ 사용자 정의 속성을 대상에 바로 사용하면 내부 속성을<br> 
         * 덮어쓸 수 있으므로 본 메소드를 통해서 사용하도록 한다.     
         * @public
         * @param {*} target nexacro Component, object
         * @param {string} name 사용자 정의 속성 명
         * @param {*=} value 속성 값
         */
        this._SetUserProperty =  function(target,name,value)
        {
           var propName = "";
           propName += "_" + name;
           
           target[propName] = value;
        }
         
        /*
         * 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다.<br>
         * ※ setUserProperty 메소드에 의해 지정된 사용자 정의 속성값을 얻어온다.
         * @public
         * @param {*} target nexacro Component, object
         * @param {string} name 사용자 정의 속성 명
         * @return {*} 주어진 target에 name으로 지정된 사용자 정의 속성값
         */
        this._GetUserProperty = function(target,name)
        {
           var propName = "";
           propName += "_" + name;
           
           return target[propName];
        }
         
        /*
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {XComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {XComp} 검색된 component, object
         */
        this._Lookup = function(p,name)
        {
          var o;
          while (p)
          {   
            o = p.components;
            if ( o && o[name] ) return o[name];
            
            o = p.objects;
            if ( o && o[name] ) return o[name];
            
            p = p.parent;
          }
          return null;
        }

        
        /*
        * 원하는 항목을 배열에서 삭제 처리한다.
        * @param {array} array remove 대상 Array
        * @param {object} item remove하고자 하는 item
        */
        this._ArrayRemoveItem = function(array,item) 
        {
          var index = this._ArrayIndexOfItem(array, item);

          if (index !== -1) 
          {
            array.splice(index, 1);
          }
        }

        /*
        * 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
        * @param {array} array 검색 대상 Array
        * @param {object} item 찾고자 하는 Item
        * @param {number=} from 검색의 시작 위치 (default: 0)
        * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
        * @return {number} 검색된 배열 위치. 없다면 -1 리턴
        */
        this._ArrayIndexOfItem = function(array,item,from,strict) 
        {
          var len = array.length;
          if ( from == null ) from = 0;;
          strict == !!strict;
          from = (from < 0) ? Math.ceil(from) : Math.floor(from);
          if (from < 0)
          {
            from += len;
          }
          
          if (strict)
          {
            for (; from < len; from++) 
            {
              if ( array[from] === item)
              {
                return from;
              }
            }
          }
          else
          {
            for (; from < len; from++) 
            {
              if ( array[from] == item)
              {
                return from;
              }
            }
          }
          
          return -1;
        }

        /*
        * object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.<br>
        * 주어진 함수에서 임의 속성 처리에서 return false를 하면 임의 속성지점에서 반복이 멈춘다.
        * @param {object} object 
        * @param {function} func callback 함수 
        * @param {string} func.prop object property name 
        * @param {object} func.val object property value
        * @param {object} func.object object 그 자체
        * @param {object} scope callback 함수에 대한 수행 scope
        */
        this._ObjectEach = function(object,func,scope)
        {
          var p,
            scope = scope || object;
          for (p in object)
          {
            if (object.hasOwnProperty(p))
            {
              if (func.call(scope, p, object[p], object) === false)
              {
                return;
              }
            }
          }
        } 

        /**
        * 법인 번호 체크로직
        * @param {String} 법인번호 13자리 
        * @return {boolean} True/False
        */
        this.fnc_CorpNumberCheck = function (strNum) {

          strNum = this.fnc_Trim(strNum);

          // 숫자   체크
          if (nexacro.isNumeric(strNum) == false) return false;

          // 자리수 체크
          if (this.fnc_Length(this.fnc_Trim(strNum)) != 13) return false;

          var sumMod = 0;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 0, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 1, 1)) * 2;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 2, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 3, 1)) * 2;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 4, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 5, 1)) * 2;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 6, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 7, 1)) * 2;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 8, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 9, 1)) * 2;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 10, 1)) * 1;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 11, 1)) * 2;

          var lastMod = nexacro.toNumber(this.fnc_SubStr(strNum, 12, 1));

          var chkSum = sumMod % 10;
          chkSum = 10 - chkSum;

          if (chkSum != lastMod) return false;

          return true;

        }

        
        /***********************************************************************************************************
           함수명   : fnc_FileDownLoad2()
           설명     : 파일 다운로드 처리
           argument : sPath(파일경로),  sLogFile(논리명), sPhyFile(물리명)
           return   : None
           2014.10.01 김석두(KSD)
         ***********************************************************************************************************/
        this.fnc_FileDownLoad2 = function (sPath,sLogFile,sPhyFile) {

        //  var objFD = new FileDownload();
        //  
        //  objFD.init("FileDownLoad");
        //  this.addChild("FileDown", objFD); 
        //  objFD.show(); 
        // 
        //    var sFileUrl = application.GBL_HTTPURL + "/core/erp/com/fileDownload.do";
        //    objFD.set_downloadurl(sFileUrl + "?sPath=" + sPath + "&sLogFile=" + encodeURIComponent(encodeURIComponent(sLogFile)) + "&sPhyFile=" + sPhyFile);
        //  objFD.set_downloadfilename(sLogFile);
        //  objFD.download();
        // 
        //  // Destroy Object   
        //  this.removeChild("FileDown");
        //  objFD.destroy(); 
        //  objFD = null;

        }

        /**
        * Oz Report Viewer
        * @param {String} mode
        * @return {boolean} True/False
        */
        this.fnc_OzPrintViewer = function(mode) {

          var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
            sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
            sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
            sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
            sOpenStyle += ",width=200";       //현재 반응 없음
            sOpenStyle += ",height=200";      //현재 반응 없음
            sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
            sOpenStyle += ",titletext=Oz Report Viewer";      //Form Title Bar Visible 여부
            sOpenStyle += ",status=false";      //Form Title Bar Visible 여부
            sOpenStyle += ",resizable=true";      //Form Title Bar Visible 여부
          if(mode == "once") {
            this.fnc_OpenPopup("comReportViewerOz", "common::comReportViewerOzOnce.xfdl", null, sOpenStyle);  
          } else {  
            this.fnc_OpenPopup("comReportViewerOz", "common::comReportViewerOz.xfdl", null, sOpenStyle);  
          }

        }

        this.objDsImport     = null;    //화면으로 보낼 Dataset
        this.objDsImportTemp = null;    //서버에서 임시로 받아 올 Dataset
        this.importObj       = null;    //Import Excel Ojbect
        /**
        * 엑셀 데이터를 데이터셋으로 import 처리
        * @param {DataSet} DataSet name
        * @param {String} sSheet 엑셀 시트명
        * @param {String} sBody 업로드 위치
        * @return {DataSet} DataSet
        */
        this.fnc_ExcelUpload = function(sDataset,sSheet,sBody,sUploadCallBack) {

          //Excel Import URL
          var sExcelImportUrl = application.GBL_HTTPURL + "/XImport";
          var sUpdateCallBack = (this.fnc_IsEmpty(sUploadCallBack)) ? "_ExcelUpload_onsuccess" : sUploadCallBack;
          
           //임시로 받을 Dataset 생성
          if (this.objDsImportTemp == null){
        	var objDsTemp = new Dataset();
        	this.addChild("dsImportTemp", objDsTemp); 
        	this.objDsImportTemp = objDsTemp;
          }

          //단말로 보낼 Dataset 선언(Success 후 처리에서 사용)
          this.objDsImport = this.objects[sDataset];
        	
          if (!this.isValidObject("Import00")){
        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.addChild("Import00", this.importObj);
        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.set_importurl(sExcelImportUrl);
        	this.importObj.set_importfilemode("server");
        	this.importObj.addEventHandler("onsuccess", eval("this." + sUpdateCallBack), this);
        	this.importObj.addEventHandler("onerror", this._ExcelUpload_onerror, this);	
          }
        	
          this.setWaitCursor(true);    
          var sAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var iCnt = this.objects[sDataset].getColCount() - this.objects[sDataset].getConstCount();

          var i = Math.floor(iCnt / 26);
          var j = iCnt % 26;
          var sHeader = "A1:" + (i == 0 ? '' : sAlphabet.charAt(i-1)) + (j == 0? 'Z' : sAlphabet.charAt(j-1)) + "1";
          var sParam = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
          var sParam2 = "[dsImportTemp=outDs]";
          
          this.importObj.importData("", sParam, sParam2);
          this.setWaitCursor(false);

        }

        //import onsuccess Event
        this._ExcelUpload_onsuccess = function(obj,e) {
          
          this.setWaitCursor(false);
          this.objDsImport.clearData();
          this.objDsImport.set_enableevent(false);
          this.objDsImport.appendData(this.objDsImportTemp);
          this.objDsImportTemp.clear();
          this.objDsImport.set_enableevent(true);

        //  this.importObj.destroy();
        //  this.importObj = null;    
          this.fnc_Message("TMM125", "엑셀 업로드 성공");

        }

        //import onerror Event
        this._ExcelUpload_onerror = function(obj,e) {
          
          this.setWaitCursor(false);
        //  this.importObj.destroy();
        //  this.importObj = null;    

          this.fnc_Message("TMM125", "엑셀 업로드 실패\n\n[" + e.errortype + "-" + e.statuscode + "] " + e.errormsg);

        }

        /**
        * WebBrowser Post 방식 호출
        * html form 태그 동적생성후 post값을 설정된 url로 submit함
        * @param {Object} document (dom Object)
        * @param {String} sSubmitSrc : submit 대상 src
        * @param {Array} sParam  : {param1:'abc',param2:'123'}
        * @param {String} sTarget : _self || _blank
        * @param {Object} objWebBrowser : 임베딩할 webBrowser컴포넌트 object(브라우저에 Page를 보일 때..)
        * @return {None} None
        */
        this.fnc_WebBrowserCallPost = function(objDoc,submitSrc,param,target,objWebBrowser) {
          
          var frm;
          
          if(target != "_self" && target != "_blank"){
            document.getElementById(objWebBrowser._unique_id).setAttribute( 'name', target );
            document.getElementById(objWebBrowser._unique_id).setAttribute( 'id', target );
            //브라우저 name attribure추가함 (*ie경우 예외처리존재)
            if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 9) {
              document.getElementById(objWebBrowser._unique_id + "_WebBrowser").contentWindow.name = target;
            }
          }
          
          if(objDoc.getElementById("dummy") == null){
            frm = this._create_form(objDoc,'dummy', 'POST', submitSrc, target);
          }else{
            frm = objDoc.getElementById("dummy");
          }
          
          var paramCnt = 0;
          if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 9) {
            //Object.keys 함수 추가
            if (!Object.keys) {
              Object.keys = function(param) {
              var keys = [];

              for (var i in param) {
                if (param.hasOwnProperty(i)) {
                keys.push(i);
                }
              }
              return keys;
              };
            }
          }
          
          paramCnt = Object.keys(param).length;

          for(var i=0;i<paramCnt;i++)
          {
            var key = Object.keys(param)[i];
            this._add_input(objDoc,frm,key,param[key]);
          }
          objDoc.body.insertBefore(frm,null);
          frm.submit();

          //동적생성한 form 삭제
          objDoc.body.removeChild(frm);
        }

        // 동적으로 form 생성
        this._create_form = function(objDoc,nm,mt,ac,tg) 
        {    
          var fm = objDoc.createElement("form");
          fm.name = nm;
          fm.id = nm;
          fm.method = mt;
          fm.action = ac;
          fm.target = tg;
          return fm;
        }

        // 동적으로 input 객체 생성
        this._add_input = function(objDoc,fm,nm,vu)
        {    
          var input = objDoc.createElement("input");
          input.type = "hidden";
          input.name = nm;
          input.value =  vu;
          fm.insertBefore(input,null);
          return fm;
        }

        //2016.04.20 : alert 추가
        this.fnc_Alert = function(sMessage) {
          return alert(sMessage);
        };

        //2016.04.20 : alert 추가
        this.fnc_Confirm = function(sMessage) {
          return confirm(sMessage);
        };

        
        /**
        * 사업자 번호 체크 - 10자리
        * @param {Object} document (dom Object)
        * @param {String} strNum : 사업자 번호 10자리
        * @return {String} 사업자 번호
        */
        this.fnc_FormatCustNumber = function(strNum) {
          return this.fnc_CustNumberCheck(strNum);
        }

        this.fnc_CustNumberCheck = function(strNum) {

            strNum = this.fnc_Replace(this.fnc_Trim(strNum), "-", "");

            if (this.fnc_Length(this.fnc_Trim(strNum)) != 10) return false;

            var sumMod = 0;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 0,1));
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 1,1)) * 3  ;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 2,1)) * 7 ;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 3,1)) ;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 4,1)) * 3;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 5,1)) * 7;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 6,1)) ;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 7,1)) * 3;
            sumMod += nexacro.toNumber(this.fnc_SubStr(strNum, 8,1)) * 5;
            
            //sumMod += (toNumber(gfn_SubStr(strNum, 8,1)) * 5 ) / 10;
            
            sumMod += Math.floor((nexacro.toNumber(this.fnc_SubStr(strNum, 8,1)) * 5 )/ 10);

            var chkSum = sumMod %10;

            if (chkSum == 0) {
            ckkSum = 0;
            } else {
            chkSum = 10 - chkSum;
            }

            if (chkSum  == nexacro.toNumber(this.fnc_SubStr(strNum, 9,1))) return true;
          return false;

        }

        /**
        * 사업자 번호 체크 - 10자리
        * @param {None} None
        * @return {DataSet} dsBRANCH_CD
        */
        this.fnc_GetBranch = function(){

          if (this.dsBRANCH_CD == null || this.dsBRANCH_CD == "undefine")  {
          this.fnc_CreateCommonCodeDataset("dsBRANCH_CD"); }
          var sPackageName  = "CommMakeCombo";  //해당 Form에서 사용 할 Package 명
          var sMethodName   = "GetBranch";
          var sOutDataSet   = "dsBRANCH_CD=dsBRANCH_CD";       //조회 후 돌려 받을 DataSet 명칭
          var sArgument     = "";
          
          sArgument  = " pgm="       + this.fnc_Quote(sPackageName);               //Pacaage(Action Bean명)
          sArgument += " action="    + this.fnc_Quote(sMethodName);                //호출할 Package의 Method명
          
          this.fnc_TransactionCall(this, sPackageName, sMethodName, "", sOutDataSet, sArgument, "fn_CallBack", false);
          
        }

        
        /**
        * 신규 화면을 Open 합니다. 이미 열여있으면 닫고 새로 엽니다.  *
        * fnc_NewWindow에서 변형
        * 업무화면에서 다른 업무화면을 호출한다.
        * 팝업을 사용하는것 처럼 파라미터를 준다.
        * 호출업무화면이 열여 있으면 닫고 새로 연다.(열여있는 화면의 변경된 데이터는 무시한다.)
        * 
        * 사용예제 tmma0011 -> tmma0012 
        * @param {String} sFormID 폼 ID
        * @param {String} param 매개변수
        * @return {DataSet} dsBRANCH_CD
        */
        this.fnc_OpenMenu = function (sFormID,param) {
          
          var dsObj = application.dsMenuList;
          var iRow = -1;
          
          dsObj.enableevent = false;
          var filterStr = dsObj.filterstr;
          dsObj.filter("");
          iRow = dsObj.findRow("MENU_IDXX", sFormID);

          if (dsObj.getColumn(iRow, 'MNUT_YSNO') != '0') return;
          // Form이 아니면 종료
          if (dsObj.getColumn(iRow, 'DEVC_YSNO') != '1') {
            // 미개발 메뉴는 그냥 RETURN
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
          
          dsObj.filter(filterStr);
          dsObj.enableevent = true;
          
          
          var sArgument  = new Array();
          sArgument[0] = sFormCapt + "[" + sProgID + "]";
          sArgument[1] = sFormLoca;
          sArgument[2] = sUserAuth;
          sArgument[3] = sAuthLevel;

        //기존 로직은 중복업무화면 갱신기능이 없는데, 같은 함수에서 분기시킬지 따로 갈지 미정.
        //(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 0, 0, sDisplay, -1, -1);
        //(sFormID, sFormTitle, sFormUrl, sFormArgument, iWidth, iHeight, sDisplayMode, iLeft, iTop) 

          var sFormTitle = sFormCapt;
          var sFormUrl = sFilePath + "::" + sProgID+ ".xfdl";
          var sFormArgument = sArgument;
          var iWidth = 0;
          var iHeight = 0;
          var sDisplayMode = sDisplay;
          var iLeft = -1;
          var iTop = -1;

          // 존재하지 않는 url이면 종료한다.
          if (sFormUrl.trim().length < 1) {
            this.alert("프로그램이 등록되지 않았습니다.");
            return;
          }

          // Child Frame 생성
          var oChildFrame = application.MAINWORK.frames[sFormID];

          //갱신전용(없으면 그냥 만들고, 있으면 제거하고 만든다)

          //화면갱신방법
          //1.갱신 기존 childFrame만 제거하고 그자리에 새로 생성해서 넣는다.
          //2.기존 화면을 재활용 하지 못함. form load 이벤트 발생 안함.
          //3.oChildFrame.destroy(); 를 실행하면 onclose 이벤트가 발생되면서 제목이 날아감.
          
          if (oChildFrame == null) {
          
            //열수 있는 화면을 제한한다.
            if (application.dsOpenFormList.rowcount >= 20) {
              this.fnc_Message("TMM125", "최대 20개까지 열 수 있습니다!");
              return;
            }

          }else{
            //이미 열여있으면 제거하고 연다. 이때 close 이벤트가 발생한다.
            oChildFrame.destroy();
          }
          
          //메뉴트리에서 오픈한 메뉴의 로우에 포커스를 준다..필터되었다면 사라짐
          dsObj.set_rowposition(iRow);

          //생성
          oChildFrame = new ChildFrame;
          oChildFrame.init(sFormID, "absolute", 0, 0, 1051, 768);
          application.MAINWORK.addChild(sFormID, oChildFrame);  
            
          oChildFrame.set_formurl("frame::workFrame.xfdl");	// WorkFrame - [NSCOM]
          oChildFrame.set_showtitlebar(false);
          oChildFrame.set_showstatusbar(false);
          oChildFrame.set_showcascadetitletext(true);
          oChildFrame.set_dragmovetype("normal");
          oChildFrame.set_resizable(true);
          oChildFrame.set_openstatus(sDisplayMode);

          oChildFrame.sFORM_URL 	= sFormUrl;	// WorkFrame - [NSCOM]
          oChildFrame.sFORMCAPTION  = sFormArgument[0];
          oChildFrame.sFORMLOCATION = sFormArgument[1];
          oChildFrame.sUSERAUTH     = sFormArgument[2];
          oChildFrame.sUSERLAVEL    = sFormArgument[3];
          
          // 즐겨찾기 처리를 위한 변수
        	oChildFrame.__FAVICON_MENU_ID  = sFormID;
          
          //업무화면에 파라미터 추가
          //param을 안쓰는 경우 에러 예외처리, 호출된 화면에서 
          //(typeof openParameter != "undefined" && openParameter.length>0) 으로 걸러낸다.
          if(typeof param == "undifinded" || param == null ){
            oChildFrame.openParameter = "";//length 0이 나오게 처리
          } else {
            oChildFrame.openParameter = new Array();
            for(var i = 0 ; i < param.length ; i++){
              oChildFrame.openParameter[i] = param[i];        
            }   
          }

          application.GBL_FORMCAPTION = sFormArgument[0];
          application.GBL_FORMLOCATION = sFormArgument[1];
          application.GBL_USERAUTH = sFormArgument[2];
          application.GBL_USERLAVEL = sFormArgument[3];
          
          oChildFrame.show();
            
          //프레임을 destroy할때 _ChildFrameClose 이벤트로 인해 제목 표시줄이 날아가서 제목을 다시 넣어야 한다.
          //이때 제거 되고 새로 만들어지기 때문에 맨 뒤로 밀린다.
          //ex) a b c 에서 b가 갱신되면 a c b 로 된다.
          //tab page 이벤트
          oChildFrame.addEventHandler("onactivate",this._ChildFrameActivate,this);
          oChildFrame.addEventHandler("onclose",this._ChildFrameClose,this);

          //상단에 업무화면 제목 탭 표시하는데, 이 순서대로 업무화면이 등록되지 않아도 된다..
          var iRow = application.dsOpenFormList.addRow();
          application.dsOpenFormList.setColumn(iRow, "FORM_NAME", sFormID); //화면 ID
          application.dsOpenFormList.setColumn(iRow, "FORM_CAPTION", sFormTitle); //화면 Title
          application.FRMBOTTOM.form.fn_AddTabPage(sFormID, sFormTitle);       //Open Tab 처리
        }

        /**
        * DB에서 일련번호를 생성해서 가져온다.
        * @param {String} TABLE_NAME
        * @param {String} COLUMN_NAME
        * @param {String} SECH_COND
        * @param {String} RPLC_VALU
        * @return {String} 일련번호 스트링
        */
        this.fnc_GetSequence = function () {

          //TABLE_NAME,COLUMN_NAME,SECH_COND,RPLC_VALU
          if((arguments[0] == undefined) || (arguments[1] == undefined) || (arguments[2] == undefined)) {
            this.fnc_Message("TMM125", "인자가 맞지 않습니다.호출인자 4개의 항목을 확인하세요!");
            return;
          }
          
          var responsedsname = "dsGET_SEQUENCE";//서버사이드 하드코딩
          
          this.fnc_CreateCommonCodeDataset(responsedsname);
          

          var sPACKAGENAME = "ComGetSequence";
          var sMethodName  = "GetSequenceInfo";
          var sInDataSet   = "";
          var sOutDataSet  = this.fnc_Trim(responsedsname) + "=" + this.fnc_Trim(responsedsname);
          var sArgument    = " pgm="      + this.fnc_Quote(sPACKAGENAME);
            sArgument   += " action="   + this.fnc_Quote(sMethodName);
            sArgument   += " TABLE_NAME="   + this.fnc_Quote(arguments[0]);   //테이블명
            sArgument   += " COLUMN_NAME="  + this.fnc_Quote(arguments[1]);   //컬럼명
            sArgument   += " SECH_COND=" + this.fnc_Quote(arguments[2]);      //2번째 키값
            sArgument   += " RPLC_VALU="  + this.fnc_Quote(arguments[3]);     //시작문자,종료문자 @ 치환값

          this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
          
          
          var objds = eval("this." + this.fnc_Trim(responsedsname));
          
          if(objds.getRowCount()<=0){
            this.fnc_Message("TMM125", "검색된 데이터가 없습니다. 테이블,컬럼을 확인하세요");
            return;
          }else{
            return objds.getColumn(0,"SRAL_NUMB");
          }
        }

         /**
         * 파일업로드 팝업창을 호출하고, 팝업창 종료시 콜백함수에 업로드한 파일리스트를 넘겨줘서 처리한다.
         * @param {String} maxFileLimit : 최대 업로드 허용갯수
         * @param {String} filterStr  : 업로드 할 파일 형식
         * @param {String} callbackfunctionname : 콜백함수명  
         * @return   : None
         * @example comLib.CallFileUplod(1, "xls,xlsx");  -> 엑셀형식 파일 1개를 업로드 가능하도록 파일업로드 팝업창 호출
        */
        this.fnc_CallFileUplod = function (maxFileLimit,filterStr,callbackFnName) {
          
          var limit = 1;
          var callbckName;
          
          // 파일업로드 업무영역
          var bizCat = "ETC";
          
          if (this.sPACKAGENAME != undefined) {
            bizCat = this.sPACKAGENAME.substring(0, 3);
          }
          
          //파일업로드 최대 갯수
          if ( (typeof maxFileLimit != 'undefined') && (maxFileLimit != "") ) {
            try {
              limit = parseInt(maxFileLimit);
              limit = (limit <= 0 ? 1 : limit);
            } catch(e) {
              limit = "UNLIMIT";
            }
          }
          
          //파일 확장자 필터 설정
          if ( (typeof filterStr == 'undefined') || (filterStr == "") ) {
            filterStr = "doc,docx,ppt,pptx,xls,xlsx,pdf,hwp,txt,jpg,gif,bmp,dwg,dwf,zip,png,xml,tif";
          }
          
          //팝업창 콜백과 파일업로드 콜백은 다름
          callbckName = callbackFnName;
          
          if ( (typeof callbackFnName == 'undefined') || (callbackFnName == "") ) { 
            callbckName = null;
          }
          
          //파일업로드 팝업창으로 전달 할 Parameter 설정
          var objArgumentList = {
            maxFileLimit  : limit,
            filterStr : filterStr,
            callbackfunctionname : callbckName,
            bizCategory : bizCat
          };
          
          /***************************************************************
            Event 중첩 발생 시 선행 Event에 의해 팝업 모드가 실행 중이면 
            후행 Event의 팝업은 실행하지 않는다.                         
           **************************************************************/
          if (this.bAction == false) {
            this.bAction = true;
          } else {
            return;
          } 
          
            this.fnc_OpenPopup("comFileuploadPopup", "common::comFileuploadPopup.xfdl", objArgumentList, "", "_CallFileUplodCallback");

        }

        
        /****************************************************************************************************
           함수명   : _CallFileUplodCallback
           설명     : CallFileUplod Popup의 Callback 처리
           argument : sPopupId, Variant
           Variant는 모달 close할때 인자가 나온다.  this.close(Variant);
           return   : None
           2016.07.07 최흥규
         ****************************************************************************************************/
        this._CallFileUplodCallback = function(sPopupId,Variant) {
          
          // 반환받은 문자열데이타 형변환(String, Array, Object) 처리
          // 파일업로드는 오브젝트가 나온다.
          this.bAction = false;
          var sResponse = this.fnc_GetPopupRtn();
          
          //팝업에서 그냥 종료시 "" 반환. / 업로드후 종료시 오브젝트 반환
          if(sResponse == "") return;
          if(sResponse.callbackFunctionName == null) return;

          //var retDsObj = new Dataset;
          //retDsObj.loadXML(sResponse.dsFiles);
          
          //공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
          var thisform = this.getOwnerFrame().form;
          
          if (this.getOwnerFrame().form.name == "_WORKFRAME") {
        	thisform = this.getOwnerFrame().form.div_work_out.div_work;
          }
          
          eval("this." + sResponse.callbackFunctionName)(sResponse.dsFiles, thisform);

        }

         /**
        * 첨부파일 테이블에 등록된 파일을 다운로드 한다.
        * @param {String} sFilePath : 파일경로
        * @param {String} sPhyFileNm : 서버에 저장된 물리명
        * @param {String} sRealFileNm : 다운받을 논리적 파일명
        * @param {String} sExcelId : 다운받을 파일의 서식 ID
        * @return {None} None
        */
        this.fnc_FileDownLoad = function(sFilePath,sPhyFileNm,sRealFileNm,sExcelId) {
          
          /* 엑셀파일 서식 ID 로 파일 다운로드 받는 경우 */
          if ( this.IsNull(sFilePath) && this.IsNull(sPhyFileNm) && this.IsNull(sRealFileNm) && !this.IsNull(sExcelId) ) {
            
            this.fnc_DownExcelSample(sExcelId);
            
          } else {

        	  /* 파일 다운로드 */
        	  var GBL_FILEDOWNLOADURL = application.GBL_HTTPURL + "/core/erp/com/comFile_filedown.do";

        	  var fdFileDownload = this.getOwnerFrame().form.components["fdFileDownload"];
        	  
        	  if (fdFileDownload == null) {
        		fdFileDownload = new FileDownload();
        		fdFileDownload.init("FileDownLoad");
        		
        		fdFileDownload.getSetter("retry").set("0");
        		this.addChild("fdFileDownload", fdFileDownload);
        		fdFileDownload.show();
        	  }
        	  
        	  var sDownFilePath = encodeURI(encodeURIComponent(sFilePath));
        	  var sDownFileName = encodeURI(encodeURIComponent(sPhyFileNm));
        	  var sFileRealName = encodeURI(encodeURIComponent(sRealFileNm));
        	  
        	  var fileserverurl = GBL_FILEDOWNLOADURL 
        				+ "?path=" + sDownFilePath 
        				+ "&name=" + sDownFileName
        				+ "&realname=" + sFileRealName;
        	  
        	  fdFileDownload.set_downloadfilename(sRealFileNm);
        	  fdFileDownload.set_downloadurl(fileserverurl);
        	  
        	  var bSucc = fdFileDownload.download();
        	  
        	  // Destroy Object   
        	  this.removeChild("fdFileDownload");
        	  fdFileDownload.destroy(); 
        	  fdFileDownload = null;  
          }
        }

        
         /**
        * Grid의 헤더의 체크박스를 일괄 Check / 일괄 UnCheck 처리한다.
        * @param {Object} obj  : 해당 그리드
        * @param {String} sCol : 데이터셋 컬럼명
        * @return {None} None
        */
        this.fnc_GridAllCheck = function(obj,sCol) {
          
          if (obj.enable == false) return;

          var objDataSet = this.objects[obj.binddataset];
          var iCheckValue = 0;
          var iCellIndex = this.fnc_GridColumnIndex(obj, sCol);
          
          if (nexacro.toNumber(obj.getCellProperty("head", iCellIndex, "text"), 0) == 1) {
            obj.setCellProperty("head", iCellIndex, "text", "0");
            iCheckValue = 0;
          } else {
            obj.setCellProperty("head", iCellIndex, "text", "1");
            iCheckValue = 1;
          }
          
          obj.set_enableredraw(false);
          for (var i = 0; i < objDataSet.rowcount; i++) {
            objDataSet.setColumn(i, sCol, iCheckValue);
          }
          obj.set_enableredraw(true);

        }

         /**
        * 전표 상세 조회 화면.
        * @param {String} sSlipNumb  : 전표번호
        * @param {String} sLoadForm  : 화면 오픈 모드가
        * @param {String} sUserLavel : 권한레벨
        * @param {String} sPopupCallback : Callback func name
        * @param {String} RPLC_VALU
        * @return {None} None
        */
        this.fnc_ViewSlipForm = function(sSlipNumb,sLoadForm,sUserLavel,sPopupCallback,sSlipLine) {

        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=false";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1187";       //현재 반응 없음
        		sOpenStyle += ",height=750";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        	
        	this.fnc_OpenPopup("FAMB0030" + this.fnc_GetServerDateTime("TIME"), "fam::FAMB0030.xfdl"
        									, {sSLIP_NUMB 	: sSlipNumb
        									  ,sLoadForm	: sLoadForm
        									  ,sUSERLAVEL	: sUserLavel
        									  ,sSLIP_LINE	: sSlipLine}, sOpenStyle, sPopupCallback);

        }

        
         /**
        * 파일미리보기
        * @param {Object} objImgViewr  : 이미지뷰어
        * @param {String} sPath        : 파일경로
        * @param {String} sPhyFile     : 물리 파일명
        * @param {String} sLogFile     : 논리 파일명
        * @return {None} None
        */
        this.fnc_ShowImageFile = function(objImgViewer,sPath,sPhyFile,sLogFile) {
          
          if ( !(objImgViewer instanceof ImageViewer) ) return;
          
          var sFileUrl = application.GBL_HTTPURL + "/core/erp/com/ComImageView.do" 
                   + "?path=" + encodeURI(encodeURIComponent(sPath)) 
                   + "&name=" + sPhyFile
                   + "&_postfix=" + ((new Date()).getTime());
          objImgViewer.set_image(sFileUrl);

        }

        /**
        *  전표번호 Mask Format 설정.
        * @param {Object} obj        : Object(Grid or Mask Edit)
        * @param {String} sColumn        : [전표번호 컬럼명] - 생략 가능
        * @param {Number} sSubSeq      : [전표순번 여부 Y/N] 생략 가능
        * @return {None} None
        * @example MaskEdit                  : this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);
              Grid(전표번호)           : this.fnc_FormatSlipNumber(this.grdTA_ASSEXM, "SLIP_NUMB");
              Grid(전표번호+라인순번) : this.fnc_FormatSlipNumber(this.grdTA_ASSEXM, "SLIP_SEQN", "Y");
        */
        this.fnc_FormatSlipNumber = function(obj,sColumn,sSubSeq) {
          
          if (sColumn == undefined) sColumn = "";
          if (sSubSeq == undefined) sSubSeq = "";
          
          var sSlipMask = application.GBL_SLIPMASK;
          if (sSubSeq == "Y") sSlipMask +=  "-####";

          if (obj instanceof MaskEdit) {

            obj.set_type("string");
            obj.set_maskchar("_");
            obj.style.set_align("center middle");
            obj.set_mask(sSlipMask);
            
          } else if (obj instanceof Grid) {

            if (sColumn == "") {
              alert("설정할 컬럼명을 정의하세요!");
              return;
            }
            
            var iCol = obj.getBindCellIndex("body", sColumn);
            if (iCol < 0) {
              alert("해당 그리드에 전표번호컬럼[" + sColumn + "]이 존재하지 않습니다!");
              return;
            }
            
            obj.setCellProperty( "Body", iCol, "mask", "expr:" + sColumn + ".toString().length == 0 ? '' : '" + sSlipMask + "'");
            obj.setCellProperty( "Body", iCol, "maskchar", "_");
            obj.setCellProperty( "Body", iCol, "style", "align:center&#32;middle;cursor:hand;");
            
          } else {

            this.fnc_Message("TMM300", "Grid 또는 MaskEdit Componect만 설정 가능합니다!");

          }

        }

        /**
        *  동적 그리드 생성
        * @param {Object} objGrid        : 동적 생성될 그리드
        * @param {Object} objColDataset  : 동적 생성 컬럼 정보가 있는 Dataset
        * @param {Number} iMergeCnt      : 합계(Summ) 밴드 Marge Count 
        * @return {None} None
        */
        this.fnc_GridColumnAppend = function(objGrid,objColDataset,iMergeCnt) {

          var sbinddataset   = objGrid.binddataset;				   //2016-10-14 LYG 데이터셋명	
          
          var iColCount      = objGrid.getCellCount("body");       //현재 그리드의 컬럼 Count
          var iSumColCnt     = objGrid.getCellCount("Summ");       //현재 그리드의 합계컬럼 Count
          var iAddColCnt     = objColDataset.getRowCount();        //동적 생성할 컬럼 Count
          var iBefoColCnt    = objGrid.userdata;                   //이전에 생성된 동적 컬럼 수
          var iCol           = -1;                                 //Append Column ID
          var sColDispType   = "";
          var sColEditType   = "";
          
          objGrid.set_binddataset("");	//2016-10-14 LYG 그리드에 컬럼 추가하기 전에 Bind된 Dataset 초기화(속도향상을 위해)
          	
          //이전에 생성된 동적 컬럼 수 
          if (iBefoColCnt == undefined) iBefoColCnt = 0;
          if (iBefoColCnt == "")        iBefoColCnt = 0;

          //이전에 생성된 동적 컬럼 초기화
          for (var i = iColCount; i >= iColCount - iBefoColCnt; i--){
            objGrid.deleteContentsCol(i);
          }

          //summ 밴드가 있다면 Merge ColumnS plit 처리
          if (iSumColCnt > 0) objGrid.splitContentsCell("Summ", 0, 0, 0, iMergeCnt, true);

          //동적 컬럼 생성
          for (var i = 0 ; i < objColDataset.getRowCount(); i++) { 

        		iCol = objGrid.appendContentsCol();  
        		objGrid.setFormatColProperty(iCol, "size", 100);

        		objGrid.setCellProperty("Head", iCol, "text", objColDataset.getColumn(i, "EXPD_NAME"));
        		objGrid.setCellProperty("Body", iCol, "text","bind:"+objColDataset.getColumn(i, "EXPD_CODE"));   
        		
        		sColDispType = this.fnc_ToLower(objColDataset.getColumn(i, "DISP_TYPE"));
        		sColEditType = this.fnc_ToLower(objColDataset.getColumn(i, "EDIT_TYPE"));

        		objGrid.setCellProperty("Body", iCol, "displaytype", sColDispType); 
        		objGrid.setCellProperty("Body", iCol, "edittype", sColEditType); 
        		objGrid.setCellProperty("Body", iCol, "style","align:left;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  

        		if (sColDispType == "number" || sColEditType == "masknumber") {
                    objGrid.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  
        			objGrid.setCellProperty("Body", iCol, "editfilter", "number"); 
        		}

        		//summ 밴드가 있다면 합계 컬럼 생성
        		if (iSumColCnt < 1) continue;
        		objGrid.setCellProperty("Summ", iCol, "displaytype", "number"); 
        		objGrid.setCellProperty("Summ", iCol, "style", "align:right;");       
        		objGrid.setCellProperty("Summ", iCol, "expr", "expr:dataset.getSum('" + objColDataset.getColumn(i,"EXPD_CODE") + "')");

          } 

          //summ 밴드가 있다면 Merge 및 합계 텍스트 처리
          if (iSumColCnt > 0) {
            objGrid.mergeContentsCell("Summ", 0, 0, 0, iMergeCnt, 0, false);
            objGrid.setCellProperty("Summ", 0, "text", "합계");
          }

          //추가된 컬럼 수 설정
          objGrid.set_userdata(iAddColCnt);
          
          objGrid.set_binddataset(sbinddataset);	//2016-10-14 LYG 그리드에 BindDataset에 원래 데이터셋명 설정

        }

        /**
         *  동적 그리드 생성2 [Summary 영역도 동적으로 생성]
         * @param {Object} objGrid        : 동적 생성될 그리드
         * @param {Object} objColDataset  : 동적 생성 컬럼 정보가 있는 Dataset // EXPD_CODE[코드],EXPD_NAME[명],SORT_ORDR[정렬]
         * @param {Number} iMergeCnt      : 합계(Summ) 밴드 Marge Count 
         * @param {Object} aParams 		  : Summary 영역관련 파라메터.참조 sample_dynamicColumnAndRow
         * @return {None} None
         * @author 김준수
         */
        this.fnc_GridColumnAppend2 = function(objGrid,objColDataset,iMergeCnt,aParams) {

          var sbinddataset   = objGrid.binddataset;				   //2016-10-14 LYG 데이터셋명	
          var iSumColCnt     = objGrid.getCellCount("Summ");       //현재 그리드의 합계컬럼 Count  
          var iColCount      = objGrid.getCellCount("body");       //현재 그리드의 컬럼 Count
          var iMergeCnt      = iMergeCnt - 1 ;
          var iAddColCnt     = objColDataset.getRowCount();        //동적 생성할 컬럼 Count
          var iBefoColCnt    = objGrid.userdata;                   //이전에 생성된 동적 컬럼 수
          var iCol           = -1;                                 //Append Column ID
          var sColDispType   = "";
          var sColEditType   = "";
          var aFunc = aParams[2].split("&"); // 각 컬럼에 함수와 컬럼명 넣기위함.
          var aCondition = aParams[3].split("&"); // 각 컬럼에 넣을 조건
          var iRowCnt = objGrid.getFormatRowCount();  // 현재 Row 숫자
          var iBefoRowCnt = objGrid.userdata2; 		  // 이전에 추가된 Row [재조회시 초기화를위해]
          
          objGrid.set_binddataset("");	//2016-10-14 LYG 그리드에 컬럼 추가하기 전에 Bind된 Dataset 초기화(속도향상을 위해)
          
          if (iBefoRowCnt == undefined || iBefoRowCnt == "") iBefoRowCnt = 0;
          if (aParams[3] != undefined && aFunc.length != aCondition.length) {
        	alert("aParams[2]와 aParams[3]의 Length는 같아야합니다...!");
        	return;
          }
          //이전에 생성된 동적 컬럼 수 
          if (iBefoColCnt == undefined) iBefoColCnt = 0;
          if (iBefoColCnt == "")        iBefoColCnt = 0;

          //이전에 생성된 동적 컬럼 초기화
          for (var i = iColCount; i >= iColCount - iBefoColCnt; i--){
        	//trace("Delete Index : " + i);
            objGrid.deleteContentsCol(i);
          }
        	

        

          //동적 컬럼 생성
          for (var i = 0 ; i < objColDataset.getRowCount(); i++) { 
        		iCol = objGrid.appendContentsCol("body", false);  
        		objGrid.setFormatColProperty(iCol, "size", 100);

        		objGrid.setCellProperty("Head", iCol, "text", objColDataset.getColumn(i, "EXPD_NAME"));
        		objGrid.setCellProperty("Body", iCol, "text","bind:"+objColDataset.getColumn(i, "EXPD_CODE"));   
        		
        		sColDispType = this.fnc_ToLower(objColDataset.getColumn(i, "DISP_TYPE"));
        		sColEditType = this.fnc_ToLower(objColDataset.getColumn(i, "EDIT_TYPE"));

        		objGrid.setCellProperty("Body", iCol, "displaytype", sColDispType); 
        		objGrid.setCellProperty("Body", iCol, "edittype", sColEditType); 
        		objGrid.setCellProperty("Body", iCol, "style","align:left;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  

        		if (sColDispType == "number" || sColEditType == "masknumber") {
                    objGrid.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  
        			objGrid.setCellProperty("Body", iCol, "editfilter", "number"); 
        		}
          } 
          
        	  //이전에 생성된 동적 Row 초기화
        		for (var i = iBefoRowCnt - 1; i >= 0; i--) {
        			objGrid.deleteContentsRow("summ", i, false);
        		  }
        		  
        		// 각 컬럼에 [Merge할 크기]
        		var cell = iMergeCnt;
        		var iSumm = 0;
        		for (i = 0 ; i < aParams[0]; i++) {
        			var nIndex = objGrid.appendContentsRow("Summ");
        			iSumm++
        		}
        		
        		var aText = aParams[1].split(","); // Merge컬럼의 Text 넣기 위한 배열
        		var iRow = (objGrid.getCellCount("Summ")) / iSumm; // 해당 Summary Row
         		for (var i = 0 ; i < iSumm; i++ ) {
        			// Summary 로우의 앞부분을 Merge한다.
         			objGrid.mergeContentsCell("Summ", i, 0, i, iMergeCnt, ((iRow * i ) - (i * iMergeCnt)) , false);
        //  			trace("(iRow * i ) - ( i * iMergeCnt) = ");O
        //  			trace((iRow * i ) - (i * iMergeCnt));
        			// Summary컬럼의 이름 수정하기.
         			objGrid.setCellProperty("Summ", ((iRow * i ) - (i * iMergeCnt)), "text", aText[i]);
         		}
        		
        		// 각컬럼에 Expr 집어넣기. 
        		var iCursor = 0; // Row단위 커서
        		var iCursor2 = 0; // Col단위 커서 [각Row의 해당컬럼에 Expr넣어주기 위함.

        		
        		for (var k = 0; k < objGrid.getCellCount("Summ") ; k++){
        		
        			if (k == 0) { // 0일때 
        				objGrid.setCellProperty("Summ", k, "style", "align:center;");
        				continue;
        			} else if (k == (iRow - iMergeCnt) ){ // 첫번째 커서 증가.
        				iCursor++;
        				iCursor2 = 0;
        				objGrid.setCellProperty("Summ", k, "style", "align:center;");
        				continue;   // 이후 커서 잡기
        			} else if ( k == ((iRow * (iCursor + 1) ) - ((iCursor + 1) * iMergeCnt))){
        				iCursor++;
        				iCursor2 = 0;
        				objGrid.setCellProperty("Summ", k, "style", "align:center;");
        				continue;
        			}
        			objGrid.setCellProperty("Summ", k, "displaytype", "number"); 
        			objGrid.setCellProperty("Summ", k, "style", "align:right;");
        			
        			// 조건이 존재하고 조건값이 들어있는 경우.
        			if ( aCondition != undefined && aCondition.length > 0 && aCondition[iCursor].length > 0 ) {   // ()
        				var expr = "expr:dataset." + aFunc[iCursor] + "('" + aCondition[iCursor] + "', '" + objColDataset.getColumn(iCursor2,"EXPD_CODE") + "')";
        				objGrid.setCellProperty("Summ", k, "text", expr);
        			// 컨디션이 존재하지만 해당 Row에는 필요없이 함수만 넣으면 되는 경우
        			} else if (aCondition[iCursor] != undefined && aCondition.length > 0 && aCondition[iCursor].length == 0 ) {
        				objGrid.setCellProperty("Summ", k, "text", "expr:dataset." + aFunc[iCursor] + "('" + objColDataset.getColumn(iCursor2,"EXPD_CODE") + "')");
        			// 컨디션 없이 일반 함수로 표시할경우
        			} else {
        				objGrid.setCellProperty("Summ", k, "text", "expr:dataset." + aFunc[iCursor] + "('" + objColDataset.getColumn(iCursor2,"EXPD_CODE") + "')");
        			}
        			
        			
        			
        			iCursor2++
        		}
        		
        	
          //추가된 컬럼 수 설정
          objGrid.set_userdata(iAddColCnt);
          objGrid.userdata2 = iSumm;
          objGrid.set_binddataset(sbinddataset);	//2016-10-14 LYG 그리드에 BindDataset에 원래 데이터셋명 설정

        }

        
        /**
        *  동적 그리드 생성(HEAD가 2라인경우)
        * @param {Object} objGrid        : 동적 생성될 그리드
        * @param {Object} objColDataset  : 동적 생성 컬럼 정보가 있는 Dataset
        * @param {Number} iMergeCnt      : 합계(Summ) 밴드 Marge Count 
        * @return {None} None
        */
        this.fnc_GridColumnAppendLine2 = function(objGrid,objColDataset,iMergeCnt) {

        	var sbinddataset   = objGrid.binddataset;				   //2016-10-14 LYG 데이터셋명	

        	var iColCount      = objGrid.getCellCount("body");       //현재 그리드의 컬럼 Count
        	var iSumColCnt     = objGrid.getCellCount("Summ");       //현재 그리드의 합계컬럼 Count
        	var iAddColCnt     = objColDataset.getRowCount();        //동적 생성할 컬럼 Count
        	var iBefoColCnt    = objGrid.userdata;                   //이전에 생성된 동적 컬럼 수
        	var iCol           = -1;                                 //Append Column ID
        	var sColDispType   = "";
        	var sColEditType   = "";

        	objGrid.set_binddataset("");	//2016-10-14 LYG 그리드에 컬럼 추가하기 전에 Bind된 Dataset 초기화(속도향상을 위해)

        	//이전에 생성된 동적 컬럼 수 
        	if (iBefoColCnt == undefined) iBefoColCnt = 0;
        	if (iBefoColCnt == "")        iBefoColCnt = 0;

        	//이전에 생성된 동적 컬럼 초기화
        	for (var i = iColCount; i >= iColCount - iBefoColCnt; i--){
        		objGrid.deleteContentsCol(i);
        	}

        	//summ 밴드가 있다면 Merge ColumnS plit 처리
        	if (iSumColCnt > 0) objGrid.splitContentsCell("Summ", 0, 0, 0, iMergeCnt, true);

        	//동적 컬럼 생성
        	var sHEAD_LINE  = 	"";
        	var nCnt 		= 	0;
        	var iIdx		=	0;
        	var iFirstCol	=	-1;
        	var iStart		=	-1;
        	var iEnd		=	-1;
        	var aStartCol	=	new Array();;
        	var aEndCol		=	new Array();;

        	for (var i = 0 ; i < objColDataset.getRowCount(); i++) { 
        			
        		iCol = objGrid.appendContentsCol();  
        		objGrid.setFormatColProperty(iCol, "size", 100);
        		if (i == 0) {
        			iFirstCol 	= 	iCol;
        			sHEAD_LINE 	= 	objColDataset.getColumn(i, "HEAD_LINE");
        			iRowSpan	=	objColDataset.getColumn(i, "ROWX_SPAN");
        			iStart		=	iCol;
        		}
        		
        		/* 그리드의 Body Cell Property 설정*/
        		objGrid.setCellProperty("Body", iCol, "text","bind:"+objColDataset.getColumn(i, "BIND_NAME"));   
        		sColDispType = this.fnc_ToLower(objColDataset.getColumn(i, "DISP_TYPE"));
        		sColEditType = this.fnc_ToLower(objColDataset.getColumn(i, "EDIT_TYPE"));

        		objGrid.setCellProperty("Body", iCol, "displaytype", sColDispType); 
        		objGrid.setCellProperty("Body", iCol, "edittype", sColEditType); 
        		objGrid.setCellProperty("Body", iCol, "style","align:left;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  

        		objGrid.setCellProperty("Body", iCol, "background", objColDataset.getColumn(i, "BACK_COLR")); 
        		objGrid.setCellProperty("Body", iCol, "background2", objColDataset.getColumn(i, "BACK_COLR")); 

        		if (sColDispType == "number" || sColEditType == "masknumber") {
        			objGrid.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));");  
        			objGrid.setCellProperty("Body", iCol, "editfilter", "number"); 
        		}	
        	
        		//Head Row Merge 처리
        		if (objColDataset.getColumn(i, "ROWX_SPAN") == 1) {
        			objGrid.setCellProperty("head", iCol, "text", objColDataset.getColumn(i, "HEAD_LINE"));
        			objGrid.mergeContentsCell("head", 0, iCol, 1, iCol, iCol, false);
        			nCnt += 1;
        		} else {	/*그리드의 Head Line 2 제목 설정*/
        			objGrid.setCellProperty("head", iCol, "text", objColDataset.getColumn(i, "HEAD_LINE"));
        			objGrid.setCellProperty("head", (iFirstCol + nCnt + 1), "text", objColDataset.getColumn(i, "EXPD_NAME"));
        		
        			nCnt += 2;
        		}
        		
        		if ((sHEAD_LINE != objColDataset.getColumn(i, "HEAD_LINE")) || ( i == (objColDataset.getRowCount()-1) ) )  {
        			if (iRowSpan == 0) {
        				if ( i == (objColDataset.getRowCount()-1) ) {
        					iEnd			=	iCol;
        					aStartCol[iIdx]	=	iStart;
        					aEndCol[iIdx]	=	iEnd;			
        				} else {
        					iEnd			=	iCol - 1;
        					aStartCol[iIdx]	=	iStart;
        					aEndCol[iIdx]	=	iEnd;
        					iIdx			=	iIdx + 1;
        				}
        			}
        			sHEAD_LINE 	= 	objColDataset.getColumn(i, "HEAD_LINE");
        			iRowSpan	=	objColDataset.getColumn(i, "ROWX_SPAN");
        			iStart		=	iCol;
        		}

        		//summ 밴드가 있다면 합계 컬럼 생성
        		if (iSumColCnt < 1) continue;
        		objGrid.setCellProperty("Summ", iCol, "displaytype", "number"); 
        		objGrid.setCellProperty("Summ", iCol, "style", "align:right;");       
        		objGrid.setCellProperty("Summ", iCol, "expr", "expr:dataset.getSum('" + objColDataset.getColumn(i,"BIND_NAME") + "')");
        		
        	}	

        	/*
        	objGrid.mergeContentsCell("head", 0, 11, 0, 13, 11, false);	
        	objGrid.mergeContentsCell("head", 0, 9, 0, 10, 9, false);	
        	objGrid.mergeContentsCell("head", 0, 5, 0, 7, 5, false);	
        	*/
        	for (var i = (aStartCol.length - 1); i >= 0; i--) {
        		//alert("i=" + i +", aStartCol=" + aStartCol[i] + ", aEndCol=" + aEndCol[i]);
        		objGrid.mergeContentsCell("head", 0, aStartCol[i], 0, aEndCol[i], aStartCol[i], false);		
        	}
        	//summ 밴드가 있다면 Merge 및 합계 텍스트 처리
        	if (iSumColCnt > 0) {
        		objGrid.mergeContentsCell("Summ", 0, 0, 0, iMergeCnt, 0, false);
        		objGrid.setCellProperty("Summ", 0, "text", "합계");
        	}
        	
        	//추가된 컬럼 수 설정
        	objGrid.set_userdata(iAddColCnt);

        	objGrid.set_binddataset(sbinddataset);	//2016-10-14 LYG 그리드에 BindDataset에 원래 데이터셋명 설정

        }

        /**
        *  컴포넌트 Readonly 처리
        * @param {Object} objComp 		: readonly 처리 대상 컴포넌트
        * @param {Boolean} bReadonly	: readonly 처리 여부 (true / false) : default값 false
        * @return {None} None
        */
        this.fnc_SetReadonly = function(objComp,bReadonly) {
        	
        	if (this.IsNull(bReadonly)) bReadonly = false;
        	
        	
        	if (   !(objComp instanceof Edit) && !(objComp instanceof Combo) && !(objComp instanceof MaskEdit) && !(objComp instanceof CheckBox) 
        		&& !(objComp instanceof Spin) && !(objComp instanceof Radio) && !(objComp instanceof TextArea) && !(objComp instanceof Calendar) 
        		&& !(objComp instanceof Grid) ) {
        		objComp.set_enable(!bReadonly);
        		return;
        	}
        	
        	var sCssClass;	//적용할 cssclass 명
        	
        	if (bReadonly == false) {
        		
        		sCssClass = "";
        		
        	} else {
        		
        		if (objComp instanceof Edit) {
        			sCssClass = "edt_WF_Readonly";
        		} else if (objComp instanceof MaskEdit) {
        			sCssClass = "msk_WF_Readonly";
        		} else if (objComp instanceof Combo) {
        			sCssClass = "cmb_WF_Readonly";
        		} else if (objComp instanceof Calendar) {
        			sCssClass = "cal_WF_Readonly";
        		} else if (objComp instanceof CheckBox) {
        			sCssClass = "chk_WF_Readonly";
        		} else if (objComp instanceof Spin) {
        			sCssClass = "spn_WF_Readonly";
        		} else if (objComp instanceof TextArea) {
        			sCssClass = "txt_WF_Readonly";
        		} else if (objComp instanceof Radio) {
        			sCssClass = "rdo_WF_Readonly";
        		} else if (objComp instanceof Grid) {
        			sCssClass = "";
        		}
        		
        	}
        		
        	objComp.set_cssclass(sCssClass);
        	objComp.set_readonly(bReadonly);
        	objComp.set_tabstop(!bReadonly);
        	
        }

        
        /**
          * 팝업 화면 이동 이벤트 핸들러 함수. 팝업화면을 화면 벗어나지 않도록 제한함.
          */
        this.fn_PopupMoveCollisionCheck = function(obj,e)
        {
        	var left = obj.left;
        	var top = obj.top;
        	var width = obj.width;
        	var height = obj.height;
        	
        	var ww = application.mainframe.width;
        	var wh = application.mainframe.height;
        	
        	var newLeft = 0;
        	var newTop = 0;
        	
        	if ((left + width) < 100) {
        		newLeft = 100 - width;
        	} else {
        		if (left > (ww - 100)) {
        			newLeft = ww - 100;
        		} else {
        			newLeft = left;
        		}
        	}
        	
        	/*
        	if (left < 0) {
        		newLeft = 0;
        	} else {
        		if ((left + width) > ww) {
        			newLeft = ww - width;
        		} else {
        			newLeft = left;
        		}
        	}
        	*/
        	
        	if (top < 0) {
        		newTop = 0;
        	} else if (top >= (wh - 50)) {
        		newTop = wh - 50;
        	} else {
        		newTop = top;
        	}
        	
        	/*
        	if (top < 0) {
        		newTop = 0;
        	} else {
        		if ((top + height) > wh) {
        			newTop = wh - height - 2;
        		} else {
        			newTop = top;
        		}
        	}
        	*/
        	
        	obj.set_top(newTop);
        	obj.set_left(newLeft);
        	
        }

         /**
          * 엑셀 양식 파일 다운로드 함수.
          * 
          * @param  {String} excelid 엑셀서식id 
          */
        this.fnc_DownExcelSample = function(excelId) {
        	
        	if ( this.IsNull(excelId) ) this.fnc_Message("TMM125", "서식ID를 지정하세요");
        	
        	//엑셀샘플 정보용 데이타셋 생성
        	var sDsName = "dsEXCELSAMPLE";
        	this.fnc_CreateCommonCodeDataset(sDsName);

        	//엑셀샘플 정보용 트랜잭션 정보 생성
        	var sPACKAGENAME = "comExcel";
        	var sMethodName  = "GetExcelSample";
        	var sInDataSet   = "";
        	var sOutDataSet  = this.fnc_Trim(sDsName) + "=" + this.fnc_Trim(sDsName);
        	var sArgument    = " pgm="       + this.fnc_Quote(sPACKAGENAME);
        		sArgument   += " action="    + this.fnc_Quote(sMethodName);
        		sArgument   += " EXCL_VWID=" + this.fnc_Quote(excelId);

        	this.fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false); //bAsync:false 동기
        	
        	if (this.dsEXCELSAMPLE.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "서식ID ["  + excelId + "]로 등록된 양식이 존재하지 않습니다");
        		return;			
        	}
        	
        	var sFile_Name = this.dsEXCELSAMPLE.getColumn(0, "FILE_NAME");	//다운로드 파일명
        	var sExtn = sFile_Name.substring(sFile_Name.lastIndexOf("."));	//확장자
        		
        	var sRealFileNm = excelId + sExtn;
        	
        	//파일 다운로드
        	var GBL_FILEDOWNLOADURL = application.GBL_HTTPURL + "/core/erp/tmm/TMMA0070_sampledown.do";

        	var fdFileDownload = this.getOwnerFrame().form.components["fdFileDownload"];
        	
        	if (fdFileDownload == null) {
        		fdFileDownload = new FileDownload();
        		fdFileDownload.init("FileDownLoad");
        		
        		fdFileDownload.getSetter("retry").set("0");
        		this.addChild("fdFileDownload", fdFileDownload);
        		fdFileDownload.show();
        	}
        	
        	var sDownFileName = encodeURI(encodeURIComponent(sRealFileNm));
        	var sFileRealName = encodeURI(encodeURIComponent(sFile_Name));
        	
        	var fileserverurl = GBL_FILEDOWNLOADURL 
        						+ "?name=" + sDownFileName // 서버측 파일 명 [서식ID]
        						+ "&realname=" + sFileRealName; // 실제 파일명 [올릴때 파일명]

        	fdFileDownload.set_downloadfilename(sFile_Name);
        	fdFileDownload.set_downloadurl(fileserverurl);
        	
        	var bSucc = fdFileDownload.download();
        	
        	// Destroy Object   
        	this.removeChild("fdFileDownload");
        	fdFileDownload.destroy(); 
        	fdFileDownload = null;	
        	
        }

        /**
         * 탭의 onchange를 위한 공통 이벤트 함수입니다.
         * 화면 초기화 시 그리드의 preload 옵션에 따라 공통 그리드 초기화 함수가 모든 탭페이지 내의
         * 그리드를 초기화 할 수 있거나, 초기화 시킬수 없게 됩니다.
         * 따라서 탭 내 초기화 되지 않은 그리드의 처리를 위하여 탭 onchanged 이벤트에서 해당 함수가
         * 추가적으로 판단하여 그리드를 처리하게 됩니다.
         */
        this._TabpageSetting = function(obj,e) {
        	
        	var nIndex = obj.tabindex;
        	var cmPage = obj.components[nIndex];
        	if (cmPage._v_init) return;
        	this.fnc_GridSetting(cmPage);
        	cmPage._v_init = true;
        	
        }

        
        /**
         * 전자결재기안서 오픈
         * @param {String} sApprGubn 	: 결재처리구분 (show : 문서보기 / attach : 문서파일첨부 / 그외 : 상신화면)
         * @param {String} sDocuId		: documentId
         * @param {String} sJobId		: jobID
         * @param {String} sPerm		: 문서오픈권한 (true : 관리자 / false : 개인)
         * @return {None} None
         */
        this.fnc_ShowApproval = function(sApprGubn,sDocuId,sJobId,bPerm) {
        	
        	//trace(" --gw:" + application.GBL_APPROVALURL);
        	
        	var sUrl = application.GBL_APPROVALURL;
        	if (this.IsNull(sUrl)) sUrl = "http://www.nsgportal.net/ekp/user.do?cmpID=CK";
        	if (this.IsNull(bPerm)) bPerm = false;
        	
        	var sPerm = (bPerm == false) ? "false" : "true";
        	
        	var sPostData = "&userID=" + encodeURI(encodeURIComponent(application.GBL_EMPLNO));
        	
        	sDocuId = encodeURI(encodeURIComponent(sDocuId));
        	sJobId 	= encodeURI(encodeURIComponent(sJobId));
        	
        	if (this.fnc_ToLower(sApprGubn) == "show") {	// 문서보기 (결재상태가 진행중이거나 완료일 때는 결재문서 pdf 를 보여준다.)
        		
        		sUrl 		+= "&cmd=goNsSapOpenDoc&perm=" + sPerm;	
        		sPostData 	+= "&documentId=" + sDocuId;
        		
        	} else if (this.fnc_ToLower(sApprGubn) == "attach") {	// 문서파일첨부
        		
        		sUrl 		+= "&cmd=goNsAttachDoc&isAdmin=true";//&perm=true";	
        		sPostData 	+= "&docID=" + sDocuId + "&jobID=" + sJobId;

        	} else {	// 결재상신
        	
        		sUrl 		+= "&cmd=goNsSapDraft";
        		sPostData 	+= "&docID=" + sDocuId + "&jobID=" + sJobId;
        	}
        	
        	if (nexacro.Browser == "Runtime") {  	//런타임모드
        		system.execBrowser(sUrl + sPostData);
        	} else {								//브라우저
        		//window.open(sUrl + sPostData, "_blank", "fullscreen=yes");
        		var win = window.open("", "_blank", "fullscreen=yes");
        			win.opener = win;
        			win.location.href = sUrl + sPostData;
        	}
        	
        	//trace(sUrl + sPostData);
        	return sUrl + sPostData;
        	

        }

        
        /**
         * e.cell을 이용하여 현재 클릭된Cell의 컬럼ID를 정확하게 가져온다.
         * @param {String} obj 		: 해당 Grid obj
         * @param {String} sFromDs	: event[Nexacro Event]
         * @return {String} 해당 ColumnID
         */
        this.fnc_getGridHelpColName = function (obj,sFromDs) {
           
           var nIndex = -1;
           
           if (typeof sFromDs == "object") {
              nIndex = sFromDs.cell;
              var objDs = this.objects[obj.binddataset];
              objDs.set_rowposition(obj.getDatasetRow(sFromDs.row));
           } else {
              nIndex = obj.currentcell;
           }
              
           return this.fnc_getColId(obj, nIndex);
        }

        /**
         *  함수명   : fnc_FormatResidentNumber
         *  설명     : 주민등록번호 Mask Format 설정.
         * @param {Object} obj 	  : Object(Grid or Mask Edit)
         * @param {String} sColumn : [주민등록번호 컬럼명] - 생략 가능
         * @return   : None
         *  2016.10.31 김준수
         *  
         *  예)MaskEdit                  : this.fnc_FormatResidentNumber(this.mskRERN_NUMB);
         * Grid(주민등록번호)           : this.fnc_FormatResidentNumber(this.grdTA_ASSEXM, "RERN_NUMB");
        */
        this.fnc_FormatResidentNumber = function(obj,sColumn) {
        	
        	if (sColumn == undefined) sColumn = "";
        	
        	var sResidentMask = "######-#{######}";

        	if (obj instanceof MaskEdit) {

        		obj.set_type("string");
        		obj.set_maskchar("_");
        		obj.style.set_align("center middle");
        		obj.set_mask(sResidentMask);
        		
        	} else if (obj instanceof Grid) {

        		if (sColumn == "") {
        			alert("설정할 컬럼명을 정의하세요!");
        			return;
        		}
        		
        		var iCol = obj.getBindCellIndex("body", sColumn);
        		if (iCol < 0) {
        			alert("해당 그리드에 주민등록번호컬럼[" + sColumn + "]이 존재하지 않습니다!");
        			return;
        		}
        		
        		//obj.setCellProperty( "Body", iCol, "edittype", "mask");
        		obj.setCellProperty( "Body", iCol, "mask", sResidentMask);
        		obj.setCellProperty( "Body", iCol, "maskchar", "_");
        		obj.setCellProperty( "Body", iCol, "style", "align:center&#32;middle;");
        		
        	} else {

        		alert("Grid 또는 MaskEdit Componect만 설정 가능합니다!");

        	}

        }

        /**
         * 사용자 프로필 이미지를 표시하기 위한 url 주소를 반환한다.
         */
        this.fnc_GetProfileImageURL = function(sUserID) {
           var imgProviderUrl = application.GBL_HTTPURL;
           imgProviderUrl += "/core/erp/com/ComMain_LoadProfileImage.do";
           imgProviderUrl += "?user=" + sUserID;
           imgProviderUrl += "&tstamp=" + (new Date()).getTime();
           return imgProviderUrl;
        }

        

        /**
         *  함수명   : fnc_GridMonthCalendar
         *  설명     : 그리드 월달력 클릭시 월달력 Div 출력
         * @param {Object} oForm 		 : Object(Form)
         * @param {Object} obj 		 : Object(Grid)
         * @param {Object} e 		 : 발생 이벤트 객체.
         * @param {String} scol   	 : 바인드된 Dataset 컬럼명
         * @return   : _GridMonthChoosedCallback
         *  2016.12.19 김준수
         * @example 
         *	if (this.grdMonCal2.getCellText(-1, e.col) == "MNTH_DATA" ) {
         *			this.fnc_GridMonthCalendar(this, obj, e, "MNTH_DATA");
         *	}
        */
        this.fnc_GridMonthCalendar = function(oForm,obj,e,col) {
        	var nWidth = 214;
        	var nHeight = 189;
        	var oParam = new Object;
        	
        	var sPopupDivName 	= "_PopupDiv_GridMonthCalendarPanel";
        	var oPopupDiv 	= this.components[sPopupDivName];
        	// 월달력 레이어 생성
        	if (!oPopupDiv) {
        		oPopupDiv = new nexacro.PopupDiv;
        		oPopupDiv.init(sPopupDivName, "absolute", 0, 0, nWidth, nHeight);
        		oPopupDiv.set_scrollbars("none");
        		oPopupDiv.set_tabstop(false);
        		oPopupDiv.set_async(false);
        		this.addChild(sPopupDivName, oPopupDiv);
        		oPopupDiv.show();
        	}
        	
        	// 월달력 레이어가 이미 표시되어 있으면
        	if (oPopupDiv.isPopup()) {
        		oPopupDiv.closePopup();
        		return;
        	}
        	
        	oPopupDiv.set_url("common::comMonthCalendarDiv.xfdl");
        	oPopupDiv._targetGrid = obj; // 해당 Grid
        	oPopupDiv._datasetColumn = col; // 변경적용될 Dataset Column
        	oPopupDiv._targetDS = obj.binddataset; // bind Dataset
        	oPopupDiv.fn_InitMonthCalendar(this.objects[oPopupDiv._targetDS].getColumn(this.objects[oPopupDiv._targetDS].rowposition, col));

        	var iFormX = system.clientToScreenX(oForm, 0) // Form 이 화면 X의 0에서 얼마나 떨어졌는가.
        	var iFormY = system.clientToScreenY(oForm, 0) // Form 이 화면 Y의 0에서 얼마나 떨어졌는가.
        	var iX = 0;
        	var iY = 0;
        	var iCell = obj.getBindCellIndex( "body", col);  //인덱스 가져오기.
        	var str_pos = obj.getCellRect(this.objects[obj.binddataset].rowposition, iCell); // 현재 컴포넌트의 위치정보
        	

        	//  해당 셀의 시작점 + 넓이 + 팝업의 너비 + 현재 오브젝트의 X시작 좌표
        	// X좌표 설정
        	
        	if ( (oForm.width + iFormX) >=  (str_pos.left + str_pos.width + 214  + system.clientToScreenX(obj, 0))) {
        		iX = system.clientToScreenX(obj, 0) + str_pos.left + str_pos.width - 2;;
        	} else {
        		iX = (system.clientToScreenX(obj, 0) + str_pos.left) - 214;
        	}
        	// Y좌표 설정
        	if ( (oForm.height + iFormY) >=  (str_pos.top + 189  + system.clientToScreenY(obj, 0))) {
        		iY = system.clientToScreenY(obj, 0) + str_pos.top;;
        	} else {
        		iY = (system.clientToScreenY(obj, 0) + str_pos.top) - 189 + str_pos.height + 3;
        	}
        	
        	
        	// Div 화면 생성위치 Control
        	//alert("x = " + x + " y = "+  y);
        	iX -= system.clientToScreenX(application.mainframe,0);
            iY -= system.clientToScreenY(application.mainframe,0);
        	oPopupDiv.trackPopup( iX, iY, nWidth, nHeight, "_GridMonthChoosedCallback");
        }

        /**
         * 월 선택 팝업DIV 레이어 종료 시 콜백 함수
         * 그리드에 바인드된 Dataset의 컬럼을 set한다.
         * @param {String} sPopupDivName 팝업레이어명(id)
         * @param {String} sReturnValue 팝업레이어에서 전달 값
         */
        this._GridMonthChoosedCallback = function (sPopupDivName,sReturnValue) {

        	if (sReturnValue.length < 0 ) return;
        	var oGrid = this.components[sPopupDivName]._targetGrid;
        	var sCol = this.components[sPopupDivName]._datasetColumn;
        	var oDataset = this.objects[this.components[sPopupDivName]._targetDS];

        	if (this.fnc_Length(this.fnc_Trim(sReturnValue)) > 0) {	
        		oDataset.setColumn(oDataset.rowposition, sCol, sReturnValue);
        	}

        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
