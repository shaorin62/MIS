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
                this.set_name("passwordChange");
                this.set_classname("passwordChange");
                this.set_titletext("비밀번호 변경");
                this._setFormPosition(0,0,400,175);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div", "absolute", "8", "8", null, null, "8", "8", this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("spSearchBox0", "absolute", "8", "4", null, "38", "8", null, this.Div);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btnCancle", "absolute", null, "12", "50", "23", "16", null, this.Div);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("styTextButtonBizProc");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.Div.addChild(obj.name, obj);
            obj = new Button("btnSubmit", "absolute", null, "12", "50", "23", "71", null, this.Div);
            obj.set_taborder("12");
            obj.set_text("변경");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "8", "46", null, null, "8", "8", this.Div);
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemBoxOut");
            this.Div.addChild(obj.name, obj);
            obj = new Static("Shape05", "absolute", "10", "48", null, null, "10", "10", this.Div);
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemBoxIn");
            this.Div.addChild(obj.name, obj);
            obj = new Static("staXxxx04", "absolute", "12", "50", null, "25", "12", null, this.Div);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("staXxxx00", "absolute", "12", "98", null, "25", "12", null, this.Div);
            obj.set_taborder("34");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("staXxxx01", "absolute", "12", "74", null, "25", "12", null, this.Div);
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("staXxxx02", "absolute", "12", "122", null, "25", "12", null, this.Div);
            obj.set_taborder("36");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Edit("edtSCRT_NUMB2", "absolute", "114", "124", null, "21", "14", null, this.Div);
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemText");
            this.Div.addChild(obj.name, obj);
            obj = new Edit("edtSCRT_NUMB", "absolute", "114", "100", null, "21", "14", null, this.Div);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemText");
            this.Div.addChild(obj.name, obj);
            obj = new Edit("edtCURR_NUMB", "absolute", "114", "76", null, "21", "14", null, this.Div);
            obj.set_taborder("39");
            obj.set_cssclass("styFormItemText");
            this.Div.addChild(obj.name, obj);
            obj = new Edit("edtUSER_IDXX", "absolute", "114", "52", null, "21", "14", null, this.Div);
            obj.set_taborder("40");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("true");
            this.Div.addChild(obj.name, obj);
            obj = new Static("ACCT_NAME_L01", "absolute", "12", "98", "101", "25", null, null, this.Div);
            obj.set_taborder("41");
            obj.set_text("변경 비밀번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("ACCT_NAME_L", "absolute", "12", "74", "101", "25", null, null, this.Div);
            obj.set_taborder("42");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("ACCT_NAME_L00", "absolute", "12", "122", "101", "25", null, null, this.Div);
            obj.set_taborder("43");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);
            obj = new Static("ACCT_NAME_L02", "absolute", "12", "50", "101", "25", null, null, this.Div);
            obj.set_taborder("44");
            obj.set_text("아이디");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Div.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 441, 308, this.Div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 400, 175, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("비밀번호 변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("passwordChange.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("passwordChange.xfdl", "script::lib_base64.xjs");
        this.registerScript("passwordChange.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	passwordChange 패스워드 변경
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.12		김준수		Initial Created.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_base64.xjs"

        /*-----------------------------------+
         |  최초 화면 Load時 처리 할 사항     |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.Div.edtUSER_IDXX.set_value(application.GBL_USERID);
        }

        /*--------------------------+
         |   Form Enter Key Then...  |
         +---------------------------*/
        this.fn_HotKey = function (obj,e) {

        	if (e.keycode != 13) return;

        	var sComp = e.fromreferenceobject.name;
        	if ((sComp == "edtUSER_IDXX") || (e.fromreferenceobject.name == "edtSCRT_NUMB")) {
        		this.getNextComponent(this.getFocus()).setFocus();
        	}

        }

        /*------------------+
         |   비밀번호 변경|
         +-------------------*/
        this.fn_changePassword = function() {

        	if (this.fnc_Length(this.fnc_Trim(this.Div.edtUSER_IDXX.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사원번호", this.Div.edtUSER_IDXX);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.Div.edtCURR_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "현재 비밀번호", this.Div.edtCURR_NUMB);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.Div.edtSCRT_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "변경할 비밀번호", this.Div.edtSCRT_NUMB);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.Div.edtSCRT_NUMB2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "비밀번호 확인", this.Div.edtSCRT_NUMB2);
        	}
        	
        	if ((this.fnc_Trim(this.Div.edtCURR_NUMB.value)) == (this.fnc_Trim(this.Div.edtSCRT_NUMB.value))) {
        		return this.fnc_SearchCheckPostAction("TMM123", "현재 비밀번호와 동일", this.Div.edtSCRT_NUMB);
        	} 
        	
        	if (this.fnc_Trim(this.Div.edtSCRT_NUMB.value) != this.fnc_Trim(this.Div.edtSCRT_NUMB2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM122", "신규 비밀번호 틀림", this.Div.edtSCRT_NUMB);
        	}
        	
        	var sArgument  = " USER_IDXX="  + this.base64Encode(this.Div.edtUSER_IDXX.value);
        		sArgument += " CURR_NUMB="  + this.base64Encode(this.Div.edtCURR_NUMB.value);
        		sArgument += " SCRT_NUMB="  + this.base64Encode(this.Div.edtSCRT_NUMB.value);
        		sArgument += " SCRT_NUMB2=" + this.base64Encode(this.Div.edtSCRT_NUMB2.value);
        	this.fnc_TransactionCall(this, "ComLogin", "PasswordChange", "", "", sArgument, "fn_CallBack");
        }			

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        		this.Div.edtUSER_IDXX.setFocus();
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}

        }

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "PasswordChange") {
        		alert("비밀번호 변경 성공!!!!!!!!!!!!!!!!!!!!");
        	} 

        }

        /*------------------+
        |   시스템 종료     |
        +-------------------*/
        this.fn_End = function(obj,e) {
        	this.close(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.Div.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.Div.btnSubmit.addEventHandler("onclick", this.fn_changePassword, this);

        };

        this.loadIncludeScript("passwordChange.xfdl");

       
    };
}
)();
