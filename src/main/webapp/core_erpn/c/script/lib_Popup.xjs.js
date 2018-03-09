//XJS=lib_Popup.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /*********************************************************************
         *  Popup Load 時 처리 할 업무 처리                                    *
         *    1) 화면 버튼제어    *
         *********************************************************************/
        this.fnc_PopLoadSetting = function (obj,sFORMCAPTION,sFORMLOCATION,sPOPBTNLIST)
        {
        	// 변수 선언 및 Program 정보 Display
        	var sNewButtonList = sPOPBTNLIST;
        	var sFormName = obj.name;
        	if (this.gfn_SubStr(sNewButtonList, 0, 1) == "F") 
        	{
        		obj.div_PopButtonList.btnSearch.set_visible(false);
        	}
        	// 조회
        	if (this.gfn_SubStr(sNewButtonList, 1, 1) == "F") 
        	{
        		obj.div_PopButtonList.btnOk.set_visible(false);
        	}
        	// 선택
        	if (this.gfn_SubStr(sNewButtonList, 2, 1) == "F") 
        	{
        		obj.div_PopButtonList.btnCancel.set_visible(false);
        	}
        	// 취소
        	if (this.gfn_SubStr(sNewButtonList, 3, 1) == "F") 
        	{
        		obj.div_PopButtonList.btnClose.set_visible(false);
        	}
        	// 닫기

        	var btnNames = "btnClose,btnCancel,btnOk,btnSearch";

        	var btnEndObj = obj.div_PopButtonList.components["btnClose"];
        	var baseLeft = btnEndObj.getOffsetLeft() + 58;

        	var btns = this.gfn_Split(btnNames, ',');

        	for (this.i = 0; this.i < btns.length; this.i++) 
        	{
        		var btnObj = obj.div_PopButtonList.components[btns[this.i]];

        		if (btnObj.visible == true) 
        		{
        			var nWidth = btnObj.getOffsetRight() - btnObj.getOffsetLeft();
        			var nLeft = baseLeft - 2 - nWidth;
        			var nRight = nLeft + nWidth;

        			btnObj.set_left(nLeft);
        			btnObj.setOffsetRight(nRight);

        			baseLeft = nLeft;
        		}
        	}
        }

        
        /*******************************************************************************
         ★ gfn_PopSlipForm : 전표 역추적(팝업) 호출
         ★ 목적 : 호출되는 곳이 많고, 다양한 조건 변동에 대한 수정을 최소화하기 위해 작성
         ★ parameter
         sSlipNumb : 전표번호
         sLoadForm : 호출 모드 ( 지정시 최우선시 한다. 미지정시 조건에 따라 지정한다.)
         "NEW" : 직접입력(메뉴 클릭 시만 지정, 함수에서는 사용안함)
         "SHR" : 조회만 가능
         "REV" : 수정 가능
         "SEM" : 반자동전표(연동모드시)
         sUserLevl : 폼에 대한 사용자 권한 레벨
         sGwxxStat : 전자결재상태 (호출 모드 미지정시 호출모드 산출의 기준이 된다.)
         ★ return
         - sResponse
         ******************************************************************************/
        this.gfn_PopSlipForm = function (sSlipNumb,sLoadForm,sUserLevl,sGwxxStat)
        {
        	if (this.IsNull(sSlipNumb)) 
        	{
        		return "";
        	}
        	// 전표번호가 없으면 리턴
        	// 메세지 처리가 필요한경우 각 화면단에서 구현

        	var loadForm = "";
        	var slipNumb = "";

        	if (this.gfn_Length(sSlipNumb) == 14) 
        	{
        		slipNumb = sSlipNumb;
        	}
        	else if (this.gfn_Length(sSlipNumb) > 14) 
        	{
        		slipNumb = this.gfn_SubStr(sSlipNumb, 0, 14);
        	}
        	else 
        	{
        		// 정상적인 전표 번호 아님.. 오류 메세지 추가 할것
        	}

        

        
        	trace(" ============================================== gfn_PopSlipForm strar ");
        	trace("sSlipNumb : " + sSlipNumb);
        	trace(" slipNumb : " + slipNumb);
        	// trace("sLoadForm : " + sLoadForm + " / " + IsNull(sLoadForm));
        	// trace("sUserLevl : " + sUserLevl );
        	// trace("sGwxxStat : " + sGwxxStat + " / " + IsNull(sGwxxStat));

        	if (this.IsNull(sLoadForm)) 
        	{
        		// 호출 모드 미지정시
        		// 그룹웨어의 결재 상태값에 따라 호출모드를 결정

        		if (this.IsNull(sGwxxStat) || sGwxxStat == "GO030090") 
        		{
        			// 전자결재가 진행중이 아니거나 임시분개 일경우 수정 가능 모드로
        			loadForm = "REV";
        		}
        		else 
        		{
        			// 그외는 모두 조회만 되도록 오픈
        			loadForm = "SHR";
        		}
        	}
        	else 
        	{
        		loadForm = sLoadForm;
        	}

        	// trace("loadForm : " + loadForm );

        	var strName = "FAMA0010";
        	var strFormURL = "fam::FAMA0010.xfdl";
        	var strOpenStyle = "";
        	var nWidth = 793;
        	var nHeight = 590;
        	var nLeft = -1;
        	var nTop = -1;

        	var objArgumentList = { // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        		pLoadForm : loadForm,
        		pSHRSLIP_NUMB : slipNumb,
        		pUSERLAVEL : sUserLevl
        	};

        	var sResponse = this.fnc_Dialog(strName, strFormURL, this, objArgumentList, nWidth, nHeight, strOpenStyle, nLeft, nTop);

        	return sResponse;
        }

        
        /*******************************************************************************
         ★ gfn_PopFAMA0170 : 전표작성세부현황(팝업) 호출
         ★ 목적 : 호출되는 곳이 많고, 다양한 조건 변동에 대한 수정을 최소화하기 위해 작성
         ★ parameter
         sAcctGub1 : 부문
         sAcctGub2 : 브랜드
         sSlipDtFr : 조회기간 시작일
         sSlipDtTo : 조회기간 종료일
         sAcctIntl : 계정코드
         sAcctName : 계정명
         sCondCode : 관리항목 구분
         sCondVaCd : 관리항목 코드
         sCondVaNm : 관리항목 명
         sApprYsNo : 승인여부
         sSmokCode : 예산세목 코드
         sSmokName : 예산세목 명
         ★ return
         - sResponse
         ******************************************************************************/
        this.gfn_PopFAMA0170 = function (sAcctGub1,sAcctGub2,sSlipDtFr,sSlipDtTo,sAcctIntl,sAcctName,sCondCode,sCondVaCd,sCondVaNm,sApprYsNo,sSmokCode,sSmokName)
        {
        	if (this.IsNull(sSlipDtFr)) 
        	{
        		return "";
        	}
        	// 조회기간 시작일이 없으면 리턴
        	if (this.IsNull(sSlipDtTo)) 
        	{
        		return "";
        	}
        	// 조회기간 종료일이 없으면 리턴
        	// 메세지 처리가 필요한경우 각 화면단에서 구현

        	var strName = "FAMA0170";
        	var strFormURL = "fam::FAMA0170.xfdl";
        	var strOpenStyle = "";
        	var nWidth = 793;
        	var nHeight = 590;
        	var nLeft = -1;
        	var nTop = -1;

        	var objArgumentList = { // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        		pAcctGub1 : sAcctGub1,
        		pAcctGub2 : sAcctGub2,
        		pSlipDtFr : sSlipDtFr,
        		pSlipDtTo : sSlipDtTo,
        		pAcctIntl : sAcctIntl,
        		pAcctName : sAcctName,
        		pCondCode : sCondCode,
        		pCondVaCd : sCondVaCd,
        		pCondVaNm : sCondVaNm,
        		pApprYsNo : sApprYsNo,
        		pSmokCode : sSmokCode,
        		pSmokName : sSmokName
        	};

        	var sResponse = this.fnc_Dialog(strName, strFormURL, this, objArgumentList, nWidth, nHeight, strOpenStyle, nLeft, nTop);

        	return sResponse;
        }

        

        /*******************************************************************************
         ★ gfn_PopFAMB0040 : 잔액세부현황(팝업) 호출
         ★ 목적 : 호출되는 곳이 많고, 다양한 조건 변동에 대한 수정을 최소화하기 위해 작성
         ★ parameter
         sAcctGub1 : 부문
         sAcctGub2 : 브랜드
         sApprDtFr : 조회기간 시작일
         sApprDtTo : 조회기간 종료일
         sAcctIntl : 계정코드
         sAcctName : 계정명
         sCondCode : 관리항목 구분
         sCondVaCd : 관리항목 코드
         sCondVaNm : 관리항목 명
         sSmokCode : 예산세목 코드
         sSmokName : 예산세목 명
         sDetlCode : 예산과목 코드
         sDetlName : 예산과목 명
         ★ return
         - sResponse
         ******************************************************************************/
        this.gfn_PopFAMB0040 = function (sAcctGub1,sAcctGub2,sApprDtFr,sApprDtTo,sAcctIntl,sAcctName,sCondCode,sCondVaCd,sCondVaNm,sSmokCode,sSmokName,sDetlCode,sDetlName)
        {
        	if (this.IsNull(sApprDtFr)) 
        	{
        		return "";
        	}
        	// 조회기간 시작일이 없으면 리턴
        	if (this.IsNull(sApprDtTo)) 
        	{
        		return "";
        	}
        	// 조회기간 종료일이 없으면 리턴
        	// 메세지 처리가 필요한경우 각 화면단에서 구현

        	var strName = "FAMB0040";
        	var strFormURL = "fam::FAMB0040.xfdl";
        	var strOpenStyle = "";
        	var nWidth = 793;
        	var nHeight = 590;
        	var nLeft = -1;
        	var nTop = -1;

        	var objArgumentList = { // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        		pAcctGub1 : sAcctGub1,
        		pAcctGub2 : sAcctGub2,
        		pApprDtFr : sApprDtFr,
        		pApprDtTo : sApprDtTo,
        		pAcctIntl : sAcctIntl,
        		pAcctName : sAcctName,
        		pCondCode : sCondCode,
        		pCondVaCd : sCondVaCd,
        		pCondVaNm : sCondVaNm,
        		pSmokCode : sSmokCode,
        		pSmokName : sSmokName,
        		pDetlCode : sDetlCode,
        		pDetlName : sDetlName
        	};

        	var sResponse = this.fnc_Dialog(strName, strFormURL, this, objArgumentList, nWidth, nHeight, strOpenStyle, nLeft, nTop);

        	return sResponse;
        }

        
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
