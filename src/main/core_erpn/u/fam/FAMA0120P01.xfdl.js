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
                this.set_name("FAME0041");
                this.set_titletext("전기재무제표복사");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,500,190);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Shape("Shape1", "absolute", "8", "78", "484", "38", null, null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("RoundRect");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape0", "absolute", "8", "37", "484", "6", null, null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgFormTitle", "absolute", "8", "8", "22", "22", null, null, this);
            obj.set_image("URL('image::imgFormTitle.bmp')");
            obj.set_taborder("2");
            obj.set_imagealign("left middle");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "37", "8", "453", "22", null, null, this);
            obj.set_text("전기재무제표출력설정복사");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "484", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnSave", "absolute", "370", "0", "55", "23", null, null, this.Div0);
            obj.set_taborder("1");
            obj.style.set_image("URL('image::btnSave.bmp')");
            obj.style.set_imagealign("left");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnEnd", "absolute", "427", "0", "55", "23", null, null, this.Div0);
            obj.set_taborder("2");
            obj.style.set_image("URL('image::btnEnd.bmp')");
            obj.style.set_imagealign("left");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "109", "86", "157", "22", null, null, this);
            obj.set_text("년도 재무제표출력설정을");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "329", "86", "128", "22", null, null, this);
            obj.set_text("년도로 복사합니다.");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFINA_YEAR1", "absolute", "40", "86", "60", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Calendar("calFINA_YEAR2", "absolute", "272", "86", "60", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 484, 25, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 190, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전기재무제표복사");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FAMA0120P01.xfdl", "lib::lib_common.xjs");
        this.registerScript("FAMA0120P01.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        // include "import::lib_XConvert.xjs";
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "lib::lib_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = 'erp.u.fam.e.ab.FAME0041AB'; //해당 Form에서 사용 할 Package 명
        this.sACCT_YEAR = '';
        this.sACCT_GUBN = '';
        this.sBASE_COUNT = ''; //편성단가 존재여부 체크

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 이월 년월 입력 여부 체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	// 이월년월 자료 존재여부 체크
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	// 이월 년월 입력 여부 체크
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}

        	// 이월 처리
        	var sMethodName = "SAVE00";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.lookupFunc("fnc_TransactionCall").call(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.lookup("medFINA_YEAR2").setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 팝업호출에 대한 파라메터를 셋팅한다.
        	// 메인버튼 제어를 위해 fnc_FormLoadSetting 이전에 실행되어야 한다.
        	this.fn_SetPopupArgument();

        	this.calFINA_YEAR1.set_value(this.lookupFunc("gfn_AddMonth").call(this.lookupFunc("gfn_ToString").call(this.sACCT_YEAR), -12)); //Form Year
        	this.calFINA_YEAR2.set_value(this.sACCT_YEAR); //To Year
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadProcess = function (obj,e)
        {
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if (e.keycode == 13) 
        	{
        		var oFocusComponent = this.getNextComponent(e.fromobject, true);
        		oFocusComponent.setFocus();
        		return;
        	}

        	// 단축키 처리
        	this.lookupFunc("fnc_HotKey").call(this, e.keycode);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.lookupFunc("fnc_EditFocus").call(obj);
        }

        
        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	// 필수 입력 항목 체크
        	if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR1.value)) != 8) 
        	{
        		this.lookupFunc("fnc_Message").call("TMM072", "복사년도"); //Message 처리 후
        		this.calFINA_YEAR1.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value)) != 8) 
        	{
        		this.lookupFunc("fnc_Message").call("TMM072", "복사년도"); //Message 처리 후
        		this.calFINA_YEAR2.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	if (this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR1.value), 4) <= '2014') 
        	{
        		this.lookupFunc("fnc_Message").call("TMM125", "2014년 이후연도를 선택해야 합니다."); //Message 처리 후
        		this.calFINA_YEAR1.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	if (this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value), 4) <= '2015') 
        	{
        		this.lookupFunc("fnc_Message").call("TMM125", "2015년 이후연도를 선택해야 합니다."); //Message 처리 후
        		this.calFINA_YEAR2.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	trace('GBL_SYSTDT -- ' + application.GBL_SYSTDT);

        	if (this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value), 4) <= this.lookupFunc("gfn_SubStr").call(application.GBL_SYSTDT, 0, 4)) 
        	{
        		this.lookupFunc("fnc_Message").call("M0001", application.GBL_SYSTDT); //Message 처리 후
        		this.calFINA_YEAR2.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	if (this.lookupFunc("gfn_Length").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value)) != 8) 
        	{
        		this.lookupFunc("fnc_Message").call("TMM072", "복사년도"); //Message 처리 후
        		this.calFINA_YEAR2.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        
        	if (this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value), 4) <= this.lookupFunc("gfn_SubStr").call(application.GBL_SYSTDT, 0, 4)) 
        	{
        		this.lookupFunc("fnc_Message").call("M0001", application.GBL_SYSTDT); //Message 처리 후
        		this.calFINA_YEAR2.setFocus(); //예산년월
        		return false;
        		// False 반환
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind); //호출할 Package의 Method명
        		sReturnString += " FINA_YEAR=" + this.lookupFunc("gfn_Quote").call(this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value), 4)); //기준년월

        		// 저장 Argument 생성
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.lookupFunc("gfn_Quote").call(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.lookupFunc("gfn_Quote").call(sKind); //호출할 Package의 Method명
        		sReturnString += " FINA_YEAR1=" + this.lookupFunc("gfn_Quote").call(this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR1.value), 4)); //복사 할 년월
        		sReturnString += " FINA_YEAR2=" + this.lookupFunc("gfn_Quote").call(this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR2.value), 4)); //복사 될 년월
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	// Service 후 Progress Bar Close
        	this.lookupFunc("fnc_CloseProgress").call();

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.lookupFunc("fnc_ErrorProcess").call(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.lookupFunc("fnc_Message").call("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		// 이미 건강보험 자료가 있다면 재 복사 여부 체크
        		if (this.sBASE_COUNT == "TRUE") 
        		{
        			if (this.lookupFunc("fnc_Message").call("HR1032", this.lookupFunc("gfn_Trim").call(this.lookup("medFINA_YEAR2").value),
        				this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.calFINA_YEAR1.value), 4),
        				this.lookupFunc("gfn_Left").call(this.lookupFunc("gfn_Trim").call(this.lookup("medFINA_YEAR2").value), 4))) 
        			{
        				this.fn_Save();
        			}
        		}
        		else 
        		{
        			this.fn_Save();
        		}
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.lookupFunc("fnc_Message").call("TMM103"); //정상 종료 Message
        		this.close(); //Close
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------------------+
         | To Year 변경 시 복사 년월 조회 |
         +--------------------------------*/

        this.calFINA_YEAR2_OnSpin = function (obj,e)
        {
        	obj.set_value(e.postvalue);

        	this.calFINA_YEAR1.set_value(this.lookupFunc("gfn_AddMonth").call(this.lookupFunc("gfn_ToString").call(obj.value), -12));
        }

        
        /*-----------------------------------------+
         |  팦업으로 호출될때 변수를 셋팅한다.  |
         +-----------------------------------------*/
        this.fn_SetPopupArgument = function ()
        {
        	// 메인메뉴 트리에서 클릭시 하단 파라메터들이 설정 되어 있지 않아
        	// 오류가 발생한다.
        	// try 구문으로 오류 발생시 무시하도록 한다.
        	try 
        	{
        		if (this.lookup("pACCT_YEAR") != null) 
        		{
        			this.sACCT_YEAR = this.lookup("pACCT_YEAR");
        		}
        		// if (pACCT_GUBN != null) { sACCT_GUBN = pACCT_GUBN; }
        	}
        	catch (e) 
        	{
        		trace(e.message);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Div0.btnSave.addEventHandler("onclick", this.fn_Save, this);
            this.Div0.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.calFINA_YEAR2.addEventHandler("onspin", this.calFINA_YEAR2_OnSpin, this);
            this.calFINA_YEAR2.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0120P01.xfdl");

       
    };
}
)();
