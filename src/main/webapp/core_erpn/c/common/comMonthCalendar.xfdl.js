﻿(function()
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
                this.set_name("comMonthCalendar");
                this.set_classname("comMonthCalendar");
                this.set_titletext("월달력");
                this._setFormPosition(0,0,110,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calMONTH", "absolute", "0", "0", null, null, "0", "0", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("cal_WF_ComCal");
            obj.getSetter("class").set("cal_WF_noico");
            obj.set_value("null");

            obj = new Button("btnCalExpand", "absolute", null, "0", "24", null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ComCal");
            obj.getSetter("class").set("btn_WF_cal_ico");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 110, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comMonthCalendar");
            		p.set_titletext("월달력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comMonthCalendar.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comMonthCalendar.xfdl", function() {
         /***************************************************************************************************
         * # Program : comMonthCalendar 월 달력 컴포넌트
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.29		jsh			Initial Created.
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
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부*
         **********************/
        // 일시 문자열
        this.sDateStr = null;

        // 현재 일시 Date 객체
        this.oCurrentDate = null;

        // 년월 기본(현재 년월)
        this.sDateMonth = null;
        this._eventHandler = null;
        this._customEvent = null;
        this._customTargetForm = null;
        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	// 화면 로드 시 기본값(현재 년월) 세팅
        	/*this.sDateStr = this.fnc_GetServerDateTime("DATETIME");
        	
        	if (this.sDateStr) {
        	
        		var yy = this.sDateStr.substring(0, 4);
        		var mm = this.sDateStr.substring(4, 6);
        		var dd = this.sDateStr.substring(6, 8);
        		
        		this.oCurrentDate = new Date;
        		this.oCurrentDate.setFullYear(parseInt(yy), parseInt(mm), parseInt(dd));
        		
        		this.sDateMonth = this.oCurrentDate.getFullYear() + "";
        		this.sDateMonth += ((this.oCurrentDate.getMonth() + "").length == 1 ? "0" + this.oCurrentDate.getMonth() : this.oCurrentDate.getMonth());
        		//trace("--- Current month : " + this.sDateMonth);
        		
        		// 년월 기본 세팅 안함. 20161020 from mykwon
        		this.calMONTH.set_value(this.sDateMonth + "");
        		
        	}
        	*/
        	//trace("--- Month Calendar initialized...");
        }

        
        /**
         * 현재 선택된 년월을 반환한다.
         * @return {String} 월달력 컴포넌트에 선택된 년월 값을 문자열 형식으로 반환한다.
         */
        this.fn_GetMonth = function () {
        	var month = this.fnc_Trim(this.calMONTH.value).substring(0, 6);
        	return month;
        }

        
        /**
         * 월 달력 컴포넌트에 년월 값을 입력한다.
         * @param {String} 주어진 년월 값으로 월 달력 컴포넌트 값을 변경한다.
         */
        this.fn_SetMonth = function (month) {
        	if (month) {
        		if (this.fnc_Trim(month).length == 6) {
        			this.calMONTH.set_value(month);
        		}
        	} else {
        		if (this.fnc_Trim(month).length == 0) {
        			this.calMONTH.set_value("");
        		}
        	}
        }

        /**
         * 월달력 레이어 표시 버튼 클릭 時
         */
        this.btnCalExpand_onclick = function(obj,e) {
        	
        	if (this.IsNull(this.calMONTH.value)) {
        		this.calMONTH.set_value(this.sDateMonth);
        	}

        	var nWidth = 214;
        	var nHeight = 189;
        	var oParam = new Object;
        	oParam.Month = this.fnc_Trim(this.calMONTH.value).substring(0, 6);
        	
        	// 달력위치 조정을 위해 필요한 값들 세팅.
        	if (this.parent.parent == "[object Tab]" || this.parent == "[object PopupDiv]") {
        		var oTab = this.parent.parent;
        		var oForm = this.parent.parent.parent;
        		iTop   = oTab.getOffsetTop()     + this.getOffsetTop(); // 탭의 Top + 탭안의 컴포넌트 Top 을 더해준다.
        		iLeft  = oTab.getOffsetLeft()    + this.getOffsetLeft();// 탭의 Left + 탭안의 컴포넌트 Left 을 더해준다.
        		iDivW  = this.getOffsetWidth();// 탭의 Width + 탭안의 컴포넌트 Width 을 더해준다.
        		iFormH = oForm.getOffsetHeight();
        		iFormW = oForm.getOffsetWidth();
        		
        	} else {
        		var iTop = this.getOffsetTop();
        		var iLeft = this.getOffsetLeft();      // div 
        		var iDivW = this.getOffsetWidth();
        		var iFormW = this.parent.getOffsetWidth(); // form
        		var iFormH = this.parent.getOffsetHeight(); // form
        	}
        		
        	if (nexacro.toNumber(iTop) + nexacro.toNumber(nHeight) >  iFormH) {
        		nTop = -nHeight - 3;
        	} else {
        		nTop = this.calMONTH.getOffsetBottom() + 3;
        	}

        	if ((nexacro.toNumber(iLeft) + nexacro.toNumber(nWidth)) > iFormW) {
        		var nLeft = -(nexacro.toNumber(nWidth) - nexacro.toNumber(iDivW) - 2);
        	} else {
        		var nLeft = 0;
        	}

        	var sPopupDivName 	= "_PopupDiv_MonthCalendarPanel";
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
        	oPopupDiv.fn_InitMonthCalendar(oParam.Month);
        	// Div 화면 생성위치 Control
        	oPopupDiv.trackPopupByComponent(this.calMONTH, nLeft, nTop, nWidth, nHeight, "fn_MonthChoosedCallback");

        }

        
        /**
         * 월 선택 팝업DIV 레이어 종료 시 콜백 함수
         * @param {String} sPopupDivName 팝업레이어명(id)
         * @param {String} sReturnValue 팝업레이어에서 전달 값
         */
        this.fn_MonthChoosedCallback = function (sPopupDivName,sReturnValue) {
        	//trace("---- Choosed Month : " + sReturnValue);
        	
        	var sPreText = this.calMONTH.text;
        	var sPreValue = this.calMONTH.value;
        	
        	if (this.fnc_Length(this.fnc_Trim(sReturnValue)) > 0) {	//2016.10.21 kmy 리턴값 존재할 경우만 월달력 셋팅
        		this.fn_SetMonth(sReturnValue);	
        	}
        	
        	var eventSrcObj = this.calMONTH;
        	var eventInfoObj = new nexacro.ChangeEventInfo;
        	eventInfoObj.pretext = sPreText;
        	eventInfoObj.prevalue = sPreValue;
        	eventInfoObj.posttext = this.calMONTH.text;
        	eventInfoObj.postvalue = this.calMONTH.value;
        	
        	this.fn_FireUserCustomEventHandler(eventSrcObj, eventInfoObj);
        	
        }

        /**
         * 월달력 컴포넌트에 데이터셋을 바인딩 한다.
         * @param {Object} oBindInfo 데이터셋 바인드 정보
         * @example
         * var oBindInfo = new Object;
         * oBindInfo.binddataset = this.dsDataset;
         * oBindInfo.bindcolumn = "COLUMN_NAME";
         */
        this.fn_SetBindInfo = function(oBindInfo) {
        	
        	if (oBindInfo.binddataset && oBindInfo.bindcolumn) {
        		
        		var uid = (Math.random() + "").substring(2);
        		//trace("--- [Binding Info] Dataset : " + oBindInfo.binddataset.name + ", column : " + oBindInfo.bindcolumn);
        		var sBindName = "_monthCalendarBindInfo_" + uid;
        		var oBindItem = new BindItem;
        		oBindItem.init(sBindName, this.calMONTH.name, "value", oBindInfo.binddataset.name, oBindInfo.bindcolumn);
        		this.addChild(sBindName, oBindItem);
        		oBindItem.bind();
        	}
        	
        }

        
        /**
         * 캘린더 값이 변경 후 실행할 사용자 이벤트를 등록한다.
         * @param {Object} form 실행할 함수의 form 영역. 대상.
         * @param {String} func 값 변경 후 실행할 함수명
         */
        this.fn_CalendarCustomEvent = function (form,func){
        	this._customTargetForm = form;
        	this._customEvent = func;
        }

        /**
         * 캘린더 값 변경 이벤트가 발생한 경우 처리한다
         */
        this.calMONTH_onchanged = function(obj,e)
        {
        	this.fn_FireUserCustomEventHandler(obj, e);
        }

        
        /**
         * 사용자가 지정한 커스텀 이벤트를 실행한다.
         */
        this.fn_FireUserCustomEventHandler = function(obj,e) {

        	if ((this._customEvent != null) && (this._customTargetForm != null)) {
        		// 이벤트 정보 만들기
        		var eventSourceObj = this.calMONTH;
        		
        		var eventInfo = new nexacro.ChangeEventInfo;
        			eventInfo.evnetId = "onchanged";
        			eventInfo.fromobject = this._customTargetForm;
        			eventInfo.posttext = this.calMONTH.text;
        			eventInfo.pretext  = e.pretext;
        			eventInfo.postvalue = this.calMONTH.value;
        			eventInfo.prevalue = e.prevalue;
        			
        		var script = "this._customTargetForm." + this._customEvent + "(eventSourceObj, eventInfo)";
        		
        		eval(script);
        	}	

        
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onactivate", this.fn_InitMonthCalendar, this);
            this.calMONTH.addEventHandler("onchanged", this.calMONTH_onchanged, this);
            this.btnCalExpand.addEventHandler("onclick", this.btnCalExpand_onclick, this);

        };

        this.loadIncludeScript("comMonthCalendar.xfdl");

       
    };
}
)();
