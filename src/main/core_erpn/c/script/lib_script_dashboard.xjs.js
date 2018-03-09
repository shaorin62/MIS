//XJS=lib_script_dashboard.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
         /***************************************************************************************************
         * # Program : lib_script_dashboard.xjs	공통>메인>대시보드 스크립트
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		jsh			Initial Created.
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

        this._sCallbackProfileImageChange = null;

        this.dsSearchOpenMenu = new Dataset;

        this.oLinkMenuParam = null;

        /**
         * 연결된 메뉴를 호출한다.
         * @param {String} menuId 호출할 메뉴 아이디
         */
        this.fn_OpenLinkMenu = function(menuId,menuParam) {
        	
        	// 트랜젝션 이용하여 메뉴 정보를 확인하여 메뉴를 표시한다.
        	//var findRow = application.dsMenuList.findRow("MENU_IDXX", menuId);
        	
        	// 현재 시스템의 메뉴에서 해당 메뉴ID가 검색된다면...
        //	if (findRow > -1) {

        		// 해당 메뉴를 여기에서 호출하지 않고... 우측 메뉴트리를 이용해서 처리한다.
        		// 대시보드는 숨김
        //		application.FRMTOP.form.fn_ShowHome(false);
        //		application.FRMLEFT.form.fn_MenuOpen(application.FRMLEFT.form.divLNBMenu.grdLeftMenu, menuId);

        //	} else {
        		
        		if (menuParam != undefined) {
        			this.oLinkMenuParam = menuParam;
        		}
        		
        		// 데이터 받을 데이터셋 생성
        		this.dsSearchOpenMenu.clearData();
        		
        		// 서버 트랜젝션 실행
        		var sPackageName = "ComMain"
        		var sActionName = "SearchOpenMenu";
        		var sInDataset = "";
        		var sOutDataSet = " dsSearchOpenMenu=dsOpenMenu";
        		var sArgument    = " MENU_IDXX=" + menuId;
        			sArgument	+= " USER_IDXX=" + application.GBL_USERID;
        		
        		this.fnc_TransactionCall(this, sPackageName, sActionName, sInDataset, sOutDataSet, sArgument, "fn_OpenLinkMenuTransactionCallback", false);
        		
        //	}

        }

        
        this.fn_OpenLinkMenuTransactionCallback = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        	} else {
        		
        		if (sMethodName == "SearchOpenMenu") {
        			if (this.dsSearchOpenMenu.rowcount > 0) {
        				var dsObj = this.dsSearchOpenMenu;
        				var iRow = 0;
        				
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
        				sArgument[4] = "";
        				sArgument[5] = "DASHBOARD";
        				
        				if (this.oLinkMenuParam != null) {
        					sArgument[6] = this.oLinkMenuParam;
        				}
        								
        				// 메뉴 오픈 전 프레임은 숨김
        				if (!application._wideview) {	// 화면 해상도가 크다면..
        					application.FRMLEFT.form.fn_LeftLNBShowHide(true);
        				}
        				
        				// 메뉴 오픈시에는 무조건 대시보드 숨김
        				application.FRMTOP.form.fn_ShowHome(false);
        				
        				this.fnc_NewWindow(sFormID, sFormCapt, sFilePath + "::" + sProgID + ".xfdl", sArgument, 0, 0, sDisplay, -1, -1);
        				
        				this.oLinkMenuParam = null;
        	
        			}
        		}
        		
        	}

        }

        

        /**
         * 대시보드의 프로필 사진 변경 버튼 클릭 시
         * @param {String} sType 사진 업로드 타입. "PROFILE" : 프로필 이미지, "MYPHOTO" : 나의사진
         */
        this.fn_UploadProfileImage = function(sType,sCallbackMethodName) {
        	this._sCallbackProfileImageChange = sCallbackMethodName;
        	var sPopupId = "__profileImageUpload";
        	var sUrl = "main::photochange_common.xfdl";
        	var oArgs = { sUSER_ID : application.GBL_USERID , sTYPE : sType};
        	var sOptions = "";
        	var sPopupCallback = sCallbackMethodName;
        	this.fnc_OpenPopup(sPopupId, sUrl, oArgs, sOptions, sPopupCallback);
        }

        /**
         * 프로필 사진 변경 후 처리
         */
        this.fn_UploadProfileImageCallback = function(popupId,returnInfo) {
        	// 저장/삭제한 경우에만...
        	if (returnInfo == "SAVE") {
        		this.fn_LoadProfileImage();
        	}
        }

        

        /**
         * 개인 사진 이미지를 호출한다.
         */
        this.fn_LoadProfileImage = function() {
        	
        	var imgProviderUrl = this.fnc_GetProfileImageURL(application.GBL_USERID);
        	this.imgProfile.set_image(imgProviderUrl);
        	
        }

        
        /**
         * 개인 연차/정기휴가 일수 정보를 조회한다.
         */
        this.fn_GetHolidayInfo = function() {

        	// 트랜젝션 실행
        	var sPackageName = "ComMain"
        	var sActionName = "GetHolidayInfo";
        	var sInDataset = "";
        	var sOutDataSet = " dsHolidayInfo=dsHolidayInfo";
        	var sArgument = " USER_IDXX=" + application.GBL_USERID;
        	sArgument += " EMPL_NUMB=" + application.GBL_EMPLNO;

        	this.fnc_TransactionCall(this, sPackageName, sActionName, sInDataset, sOutDataSet, sArgument, "fn_GetHolidayInfoCallback");
        }

        /**
         * 개인 연차/정기휴가 일수 정보 조회 콜백함수
         */
        this.fn_GetHolidayInfoCallback = function(MethodName,ErrorCode,ErrorMsg) {
        	
        	if (ErrorCode < 0) {
        		this.alert(ErrorMsg);
        	} else {
        		
        		var dsObj = application.dsHolidayInfo;
        		
        		if (application.dsHolidayInfo.getRowCount() > 0) {
        			
        			var yearTotal = dsObj.getColumn(0, "APLY_ANDC");	// 연차 발생일수
        			var yearUsed = dsObj.getColumn(0, "USEX_ANDC");	// 연차 사용일수
        			var vacnTotal = dsObj.getColumn(0, "OCUR_VADC");	// 정기 발생일수
        			var vacnUsed = dsObj.getColumn(0, "USEX_VADC");	// 정기 사용일수
        			var dutyCnt = dsObj.getColumn(0, "PROM_ANDC");		// 연차 의무사용일수
        		
        			var templateStr = "$USED<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>$TOTAL<fs v='11'>일</fs>";
        			
        			var yearText = templateStr.replace("$USED", yearUsed);
        			yearText = yearText.replace("$TOTAL", yearTotal);
        			
        			var vacantText = templateStr.replace("$USED", vacnUsed);
        			vacantText = vacantText.replace("$TOTAL", vacnTotal);
        			
        			this.staYearlyDay.set_text(yearText);
        			this.staRegularDay.set_text(vacantText);
        		
        			// 안내문구...
        			if (this.satVacationInfo) {
        				var infoText = "※ 연차휴가 의무사용일수는 <fc v='#ff1d5c'>$USE일</fc>입니다.";
        				infoText = infoText.replace("$USE", dutyCnt);
        				this.staVacationInfo.set_text(infoText);
        			}
        		}
        		
        	}
        }

        
        /************************* 메인 대시보드 하단 영역 Start!!! *************************/

        
        /**
         * 대시보드 바로가기 아이템 목록을 조회한다.
         */
        this.fn_GetBoardItems = function() {
        	
        	var sMethodName = "GetBoardItems";
        	var sInDataSet = "";
        	var sOutDataSet = "dsBoardItem=dsBoardItem";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        /**
         * 사용자 바로가기 아이템을 구성한다.
         */
        this.fn_PlaceBoardItems = function() {
        	
        	// 현재 버튼 시작점
        	var startLeft = this.BASE_LEFT;	
        	var startTop = this.BASE_TOP;
        	
        	var dsObj = this.dsBoardItem;
        	
        	// 자료 건수를 표시를 위한 데이터셋은 초기화 시킴
        	this.dsBoardCountItem.clearData();
        	
        	var nCol = 0;
        	var nRow = 0;
        	var nTotalRows = dsObj.rowcount;
        	
        	var itemSeq, itemType, itemName, linkUrl;	// 바로가기 유형, 바로가기명, 바로가기경로(링크메뉴,팝업 등);
        	var iconUrl, useYn, countYn;				// 바로가기 아이콘 이미지, 바로가기 사용여부, 카운트 표시 여부
        	var empNo;	// 사원번호
        	
        	this.arrCheckBoxes = new Array();
        	chkboxCnt = 0;
        	
        	// 바로가기 아이템 수
        	for(var row = 0; row < nTotalRows; row++) {
        		
        		if ((nCol > 0) && ((nCol % this.MAX_COL) == 0)) {
        			nRow++;
        			nCol = 0;
        			startLeft = this.BASE_LEFT;
        		}
        		
        		itemSeq = dsObj.getColumn(row, "DBSC_SEQN");	// 대시보드바로가기일련번호
        		itemType = dsObj.getColumn(row, "DBSC_TYCD");	// 대시보드바로가기유형코드
        		itemName = dsObj.getColumn(row, "DBSC_NAME");	// 대시보드바로가기명
        		linkUrl = dsObj.getColumn(row, "DBSC_PATH");	// 대시보드바로가기경로
        		iconUrl = dsObj.getColumn(row, "ICON_FLPT");	// 아이콘파일경로
        		useYn = dsObj.getColumn(row, "USEX_YSNO");		// 바로가기사용여부
        		countYn = dsObj.getColumn(row, "DBCD_YSNO");	// 대시보드 카운트 표시여부
        		empNo = dsObj.getColumn(row, "EMPL_NUMB");		// 대시보드바로가기일련번호 사용자사번
        		
        		//trace("--- Item : " + itemSeq + ", Name : " + itemName + ", Count : " + countYn);
        		
        		// 버튼 컴포넌트의 시작점 계산
        		startLeft = (this.LEFT_SPACE * nCol) + this.BASE_LEFT;
        		startTop = (this.TOP_SPACE * nRow) + this.BASE_TOP;
        		
        		// 버튼 생성
        		var btnName = this.BTN_PREFIX + itemSeq;
        		var btnObj = this.fn_CreateLinkButton(btnName);
        		// 체크박스 생성
        		var chkObj = this.fn_CreateChkbox(this.CHK_PREFIX + itemSeq);
        		
        		// 바로가기 링크버튼 속성 부여
        		btnObj.set_left(startLeft);
        		btnObj.set_top(startTop);
        		btnObj.set_text(itemName);
        		
        		// 테마에 따라서 버튼의 배경색이 다르다.
        		if (application.GBL_THEMECD == "PURPLE") {	// 바이올렛 테마
        			btnObj.style.set_background_color("#ffffffff");
        		} else if (application.GBL_THEMECD == "BLUE") {	// 블루 테마
        			btnObj.style.set_background_color("#e8f1f7ff");
        		} else if (application.GBL_THEMECD == "GRAY") {	// 그레이 테마
        			btnObj.style.set_background_color("#ffffffff");
        		}
        		
        		
        		btnObj.style.set_background_image(iconUrl);
        		btnObj.style.set_background_repeat("no-repeat");
        		btnObj.style.set_background_clientonly(true);
        		btnObj.style.set_background_position("center middle");
        		btnObj._itemSeq = itemSeq;
        		btnObj._itemType = itemType;
        		btnObj._linkUrl = linkUrl;
        		btnObj.show();
        		
        		// 바로가기 링크버튼 사용여부 체크박스 
        		chkObj.set_top(startTop + this.BTN_HEIGHT - 19);
        		chkObj.set_left(startLeft + this.BTN_WIDTH - 19);
        		chkObj.set_visible(false);
        		chkObj._RELATED_BTN = btnObj;
        		chkObj.show();
        		
        		if (useYn == "1") {
        			btnObj.set_enable(true);
        			chkObj.set_value(true);
        		} else {
        			btnObj.set_enable(false);
        			chkObj.set_value(false);
        		}
        		
        		// 체크박스는 추후 처리 편의를 위하여 배열에 저장.
        		this.arrCheckBoxes[chkboxCnt++] = chkObj;
        		
        		
        		// 대시보드의 카운트 표시 여부에 따라..
        		if (countYn == "1") {
        			var staCnt = this.fn_CreateCountStatic(this.STA_PREFIX + itemSeq);
        			staCnt.set_text("0");
        			staCnt.set_top(startTop - 5);
        			staCnt.set_left(startLeft - 5);
        			staCnt._RELATED_BTN = btnName;
        			staCnt.show();
        			
        			var nAddRow = this.dsBoardCountItem.addRow();
        			this.dsBoardCountItem.setColumn(nAddRow, "DBSC_SEQN", itemSeq);
        			this.dsBoardCountItem.setColumn(nAddRow, "EMPL_NUMB", empNo);
        			this.dsBoardCountItem.setColumn(nAddRow, "ITEM_CNTX", 0);
        			
        		}
        		
        		nCol++;
        	}
        	
        	// 저장/취소 버튼의 Top 조절
        	this.btnSave.set_top(startTop + this.BTN_HEIGHT + 15);
        	this.btnCancel.set_top(startTop + this.BTN_HEIGHT + 15);
        	
        	// 저장과 취소버튼은 기본 처리
        	this.btnSave.set_visible(this.bEditMode);
        	this.btnCancel.set_visible(this.bEditMode);
        	
        	// 폼의 높이 조절
        	this.set_scrollbars("autovert");
        	this.resetScroll();
        	
        }

        
        /**
         * 바로가기 링크버튼을 생성한다.
         */
        this.fn_CreateLinkButton = function(name) {
        	
        	var btnObj = this.components[name];
        	
        	if (btnObj != null) {
        		this.removeChild(name);
        		btnObj.destroy();
        		btnObj = null;
        	}
        	
        	var oButton = new nexacro.Button;
        	oButton.init(name, "absolute", 25, 5, this.BTN_WIDTH, this.BTN_HEIGHT, null, null);
        	this.addChild(name, oButton);
        	oButton.set_cssclass("btn_MF_content");
        	oButton.set_tabstop(true);
        	oButton.addEventHandler("onclick", this.fn_LinkButtonClick, this);
        	return oButton;
        	
        }

        /**
         * 바로가기 링크버튼의 카운트 아이템을 생성한다.
         */
        this.fn_CreateCountStatic = function(name) {
        	
        	var staCnt = this.components[name];
        	if (staCnt != null) {
        		this.removeChild(name);
        		staCnt.destroy();
        		staCnt = null;
        	}
        	
        	var oStatic = new nexacro.Static;
        	oStatic.init(name, "absolute", 0, 0, this.STATIC_WIDTH, this.STATIC_HEIGHT, null, null);
        	this.addChild(name, oStatic);
        	oStatic.set_cssclass("sta_MF_number");
        	oStatic.set_tabstop(false);
        	return oStatic;
        	
        }

        
        /**
         * 대시보드 바로가기 버튼 사용여부 처리를 위한 체크박스를 생성한다.
         */
        this.fn_CreateChkbox = function(name) {
        	
        	var chkObj = this.components[name];
        	if (chkObj != null) {
        		this.removeChild(name);
        		chkObj.destroy();
        		chkObj = null;
        	}
        	
        	var oChkbox = new nexacro.CheckBox;
        	oChkbox.init(name, "absolute", 0, 0, this.CHECK_WIDTH, this.CHECH_HEIGHT, null, null);
        	this.addChild(name, oChkbox);
        	oChkbox.set_cssclass("che_MF_C");
        	oChkbox.set_tabstop(false);
        	oChkbox.addEventHandler("onchanged", this.fn_LinkBtnUseCheck, this);
        	return oChkbox;
        	
        }

        
        /**
         * 대시보드 바로가기 사용여부 변경
         */
        this.fn_SetLinkEditMode = function() {
        	
        	if (!this.bEditMode) {
        		
        		var chkCnt = this.arrCheckBoxes.length;
        		if (chkCnt > 0) {
        			for (var idx in this.arrCheckBoxes) {
        				this.arrCheckBoxes[idx].set_visible(true);
        				this.arrCheckBoxes[idx].set_tabstop(true);
        			}
        		}
        		
        		this.btnSave.set_visible(true);
        		this.btnCancel.set_visible(true);
        		
        		this.resetScroll();
        		
        		this.bEditMode = true;
        		
        	}
        	
        }

        
        /**
         * 링크버튼 클릭 이벤트 핸들러
         */
        this.fn_LinkButtonClick = function(obj,e)
        {
        	
        	// 링크버튼 수정모드에서는...
        	if (this.bEditMode) {
        		var oBtn = obj;
        		var oChkBox = this.components[this.CHK_PREFIX + oBtn._itemSeq];
        		var bUse = oChkBox.value;
        		oChkBox.set_value(!bUse);
        		this.fn_ChangeUseLinkBtn(oBtn, !bUse);
        		return;
        	}
        	
        	var typeCode = obj._itemType;
        	var linkUrl = obj._linkUrl;
        	var itemSeq = obj._itemSeq;
        	
        	if (typeCode == "INNR_POPP") {
        	
        		// 내부 팝업 - 팝업으로 URL XFDL만 호출
        		var sPopupId = "__INNER_POPUP_DASHBOARD_" + itemSeq;
        		var sUrl = linkUrl;
        		var oArgs = {};
        		var sOptions = "";
        		var sPopupCallback = "";
        		this.fnc_OpenPopup(sPopupId, sUrl, oArgs, sOptions, sPopupCallback);
        		return;
        		
        	} else if (typeCode == "MENU_OPEN") {	// 메뉴를 연결한다.
        	
        		// 서비스를 이용하여 메뉴정보 및 권한정보를 조회 후 화면을 오픈하여야 한다.
        		this.fn_OpenLinkMenu(linkUrl);
        		
        	} else if (typeCode == "OUTR_POPP") {	// 

        		// 외부 팝업 - 외부 URL을 호출한다.
        		if (nexacro.Browser == "Runtime") {  	//런타임모드
        			system.execBrowser(linkUrl);
        		} else {								//브라우저
        			window.open(linkUrl);
        		}
        		
        	}

        }

        
        /**
         * 링크버튼 사용여부 체크박스 값 변경 시
         */
        this.fn_LinkBtnUseCheck = function(obj,e)
        {
        	var oRelatedBtn = obj._RELATED_BTN;
        	var bUse = e.postvalue;
        	this.fn_ChangeUseLinkBtn(oRelatedBtn, bUse);
        }

        
        this.fn_ChangeUseLinkBtn = function(oLinkBtn,bUse)
        {

        	oLinkBtn.set_enable(bUse);
        	
        	// 데이터셋 처리.
        	var itemSeq = oLinkBtn._itemSeq;
        	var row = this.dsBoardItem.findRow("DBSC_SEQN", itemSeq);
        	
        	if (row > -1) {
        		this.dsBoardItem.setColumn(row, "USEX_YSNO", (bUse ? "1" : "0"));
        	}
        }

        
        /**
         * 저장버튼 클릭 시 사용자의 변경(사용여부) 내역을 저장한다.
         */
        this.btnSave_onclick = function(obj,e)
        {

        	// 변경된 자료가 있는가...
        	if (!this.fnc_DatasetChangeCheck("dsBoardItem")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var sMethodName = "SaveBoardItems";
        	var sInDataSet = "dsBoardItem=dsBoardItem:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        
        /**
         * 취소버튼 클릭 시 이벤트 처리
         */
        this.btnCancel_onclick = function(obj,e)
        {
        	if (this.bEditMode) {
        		
        		var chkCnt = this.arrCheckBoxes.length;
        		if (chkCnt > 0) {
        			for (var idx in this.arrCheckBoxes) {
        				this.arrCheckBoxes[idx].set_visible(false);
        				this.arrCheckBoxes[idx].set_tabstop(false);
        			}
        		}
        		
        		this.btnSave.set_visible(false);
        		this.btnCancel.set_visible(false);
        		
        		this.resetScroll();
        		
        		// 데이터셋 원상복구.
        		this.dsBoardItem.reset();
        		
        		this.bEditMode = false;
        		
        	}
        }

        
        /**
         * 대시보드 항목의 알림건수를 조회하여 표시한다.
         */
        this.fn_GetItemCount = function() {
        	
        	if ((this.dsBoardCountItem != undefined) && (this.dsBoardCountItem.getRowCount() > 0)) {
        		
        		var sMethodName = "GetItemCount";
        		var sInDataSet = "dsBoardCountItem=dsBoardCountItem:A";
        		var sOutDataSet = "dsBoardCountItem=dsBoardCountItem";
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}
        	
        }

        /************************* 메인 대시보드 하단 영역 End!!! *************************/

        
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
