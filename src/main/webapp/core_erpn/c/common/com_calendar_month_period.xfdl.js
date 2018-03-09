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
                this.set_name("com_calendar");
                this.set_classname("com_calendar");
                this.set_titletext("Period Calendar[Month]");
                this._setFormPosition(0,0,454,248);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_31", "absolute", "0", "0", "454", "248", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_CalBg");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom", "absolute", "12", "12", "212", "189", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Edit("staMonth", "absolute", "41", "0", "130", "30", null, null, this.divFrom);
            obj.set_taborder("47");
            obj.set_value("2015");
            obj.set_cssclass("edt_WF_Calendaryy");
            obj.set_enable("false");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btn_month_prev0", "absolute", "11", "3", "20", "20", null, null, this.divFrom);
            obj.set_taborder("48");
            obj.set_tabstop("false");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #808080ff");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnYearPrev", "absolute", "1", "0", "22", "30", null, null, this.divFrom);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_CalPrev");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnYearNext", "absolute", "189", "0", "22", "30", null, null, this.divFrom);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_CalNext");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth01", "absolute", "3", "32", "50", "50", null, null, this.divFrom);
            obj.set_taborder("51");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm01.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth02", "absolute", "55", "32", "50", "50", null, null, this.divFrom);
            obj.set_taborder("52");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm02.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth03", "absolute", "107", "32", "50", "50", null, null, this.divFrom);
            obj.set_taborder("53");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm03.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth04", "absolute", "159", "32", "50", "50", null, null, this.divFrom);
            obj.set_taborder("54");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm04.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth05", "absolute", "3", "84", "50", "50", null, null, this.divFrom);
            obj.set_taborder("55");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm05.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth06", "absolute", "55", "84", "50", "50", null, null, this.divFrom);
            obj.set_taborder("56");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm06.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth07", "absolute", "107", "84", "50", "50", null, null, this.divFrom);
            obj.set_taborder("57");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm07.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth08", "absolute", "159", "84", "50", "50", null, null, this.divFrom);
            obj.set_taborder("58");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm08.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth09", "absolute", "3", "136", "50", "50", null, null, this.divFrom);
            obj.set_taborder("59");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm09.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth10", "absolute", "55", "136", "50", "50", null, null, this.divFrom);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm10.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth11", "absolute", "107", "136", "50", "50", null, null, this.divFrom);
            obj.set_taborder("61");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm11.png')");
            this.divFrom.addChild(obj.name, obj);
            obj = new Button("btnMonth12", "absolute", "159", "136", "50", "50", null, null, this.divFrom);
            obj.set_taborder("62");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm12.png')");
            this.divFrom.addChild(obj.name, obj);

            obj = new Div("divTo", "absolute", "230", "12", "212", "189", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Edit("staMonth", "absolute", "41", "0", "130", "30", null, null, this.divTo);
            obj.set_taborder("63");
            obj.set_value("2015");
            obj.set_cssclass("edt_WF_Calendaryy");
            obj.set_enable("false");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btn_month_prev0", "absolute", "11", "3", "20", "20", null, null, this.divTo);
            obj.set_taborder("64");
            obj.set_tabstop("false");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #808080ff");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnYearPrev", "absolute", "1", "0", "22", "30", null, null, this.divTo);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_CalPrev");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnYearNext", "absolute", "189", "0", "22", "30", null, null, this.divTo);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_CalNext");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth01", "absolute", "3", "32", "50", "50", null, null, this.divTo);
            obj.set_taborder("67");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm01.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth02", "absolute", "55", "32", "50", "50", null, null, this.divTo);
            obj.set_taborder("68");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm02.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth03", "absolute", "107", "32", "50", "50", null, null, this.divTo);
            obj.set_taborder("69");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm03.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth04", "absolute", "159", "32", "50", "50", null, null, this.divTo);
            obj.set_taborder("70");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm04.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth05", "absolute", "3", "84", "50", "50", null, null, this.divTo);
            obj.set_taborder("71");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm05.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth06", "absolute", "55", "84", "50", "50", null, null, this.divTo);
            obj.set_taborder("72");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm06.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth07", "absolute", "107", "84", "50", "50", null, null, this.divTo);
            obj.set_taborder("73");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm07.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth08", "absolute", "159", "84", "50", "50", null, null, this.divTo);
            obj.set_taborder("74");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm08.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth09", "absolute", "3", "136", "50", "50", null, null, this.divTo);
            obj.set_taborder("75");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm09.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth10", "absolute", "55", "136", "50", "50", null, null, this.divTo);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm10.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth11", "absolute", "107", "136", "50", "50", null, null, this.divTo);
            obj.set_taborder("77");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm11.png')");
            this.divTo.addChild(obj.name, obj);
            obj = new Button("btnMonth12", "absolute", "159", "136", "50", "50", null, null, this.divTo);
            obj.set_taborder("78");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm12.png')");
            this.divTo.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "228", "211", "74", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm", "absolute", "151", "211", "74", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("divBg", "absolute", "0", "248", "454", "248", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#00000030");
            obj.style.set_bordertype("round 3 3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("divAlert", "absolute", "89", "64", "298", "110", null, null, this.divBg);
            obj.set_taborder("0");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("2 solid #4b89dcff");
            obj.style.set_bordertype("round 7 7");
            obj.style.set_shadow("drop 0,5 5 #00000050");
            this.divBg.addChild(obj.name, obj);
            obj = new Static("imgIcon", "absolute", "20", "14", "50", "50", null, null, this.divBg.divAlert);
            obj.set_taborder("5");
            obj.style.set_background("transparent URL('theme://images/ico_alert_error.png') center middle");
            this.divBg.divAlert.addChild(obj.name, obj);
            obj = new Static("staMsg", "absolute", "82", "14", "191", "50", null, null, this.divBg.divAlert);
            obj.set_taborder("6");
            obj.style.set_color("#4b89dcff");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("메시지");
            obj.set_wordwrap("char");
            this.divBg.divAlert.addChild(obj.name, obj);
            obj = new Button("btnConfirm", "absolute", "114", "74", "58", "22", null, null, this.divBg.divAlert);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divBg.divAlert.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this.divFrom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.divFrom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this.divTo,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.divTo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 298, 110, this.divBg.divAlert,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("2 solid #4b89dcff");
            		p.style.set_bordertype("round 7 7");
            		p.style.set_shadow("drop 0,5 5 #00000050");

            	}
            );
            this.divBg.divAlert.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 454, 245, this.divBg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("#00000030");
            		p.style.set_bordertype("round 3 3");
            		p.set_visible("false");

            	}
            );
            this.divBg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 454, 248, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("com_calendar");
            		p.set_titletext("Period Calendar[Month]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("com_calendar_month_period.xfdl", function() {
        this.fvFromMonth 	= "";
        this.fvToMonth		= "";

        this.fvValidate = ""; // 허용기간 : month:숫자,year:숫자

        this.cfnOnload = function(obj,e)
        {
        	this.divBg.setOffsetTop(0);
        	this.divBg.bringToFront();
        }

        this.btnConfirm_onclick = function(obj,e)
        {
        	// 체크

        	this.closePopup([this.fvFromMonth, this.fvToMonth]);
        }

        this.btnCancel_onclick = function(obj,e)
        {
        	this.closePopup();
        }

        this.fnSetMonthCalendar = function(aDate,oCfg)
        {
        	this.divBg.set_visible(false);
        	
         	var sFromMonth 	= aDate[0];
         	var sToMonth	= aDate[1];
        	
        	if (Util.isNull(sFromMonth) || sFromMonth == "000001")  sFromMonth = Util.today();
        	if (Util.isNull(sToMonth) 	|| sToMonth == "000001")  	sToMonth = Util.today();
        	
        	this.fnSetMonth(sFromMonth, this.divFrom);
        	this.fnSetMonth(sToMonth, this.divTo);
        	
        	if (oCfg) this.fvValidate = oCfg.validate;
        }

        this.fnSetMonth = function(sYYYYMM,oDiv)
        {
        	var sYear	= sYYYYMM.substr(0, 4);
        	var sMonth	= sYYYYMM.substr(4, 2);

        	// 선택된 월력에 유효성체크
        	if (oDiv.name == "divFrom")
        	{
        // 		if (this.fvToMonth && sYYYYMM > this.fvToMonth)
        // 		{
        // 			this.divBg.divAlert.staMsg.set_text("시작월[" + sYYYYMM + "]이 종료월[" + this.fvToMonth + "]보다 큽니다.");
        // 			this.divBg.set_visible(true);
        // 			return;
        // 		}
        // 		
        // 		if (this.fvToMonth && !this.fnPeriodValidate(sYYYYMM+"01", this.fvToMonth+"01")) return;
        		
        		this.fvFromMonth = sYYYYMM;
        	}
        	else
        	{
        // 		if (this.fvFromMonth && this.fvFromMonth > sYYYYMM)
        // 		{
        // 			this.divBg.divAlert.staMsg.set_text("종료월[" + sYYYYMM + "]이 시작월[" + this.fvFromMonth + "]보다 작습니다.");
        // 			this.divBg.set_visible(true);
        // 			return;
        // 		}
        // 		
        // 		if (this.fvFromMonth && !this.fnPeriodValidate(this.fvFromMonth+"01", sYYYYMM+"01")) return;

        		this.fvToMonth = sYYYYMM;
        	}

        	oDiv.staMonth.set_value(sYear);

        	// focusing 처리
        	for (var i=1; i<=12; i++)
        	{
        		var sIdx = String(i).lpad("0", 2);
        		var oBtn = oDiv.components["btnMonth"+sIdx];
        		if (oBtn)
        		{
        			oBtn.set_cssclass("btn_WF_Calmm" + (sIdx == sMonth ? "_S" : ""));
        		}
        	}
        }

        this.divBg_divAlert_btnConfirm_onclick = function(obj,e)
        {
        	this.divBg.set_visible(false);
        }

        this.btn_Common_onclick = function(obj,e)
        {
        	var sDate = obj.parent.name == "divFrom" ? this.fvFromMonth : this.fvToMonth;
        	switch (obj.name)
        	{
        		case "btnYearPrev" :
        			var sYear	= parseInt(sDate.substr(0, 4)) - 1;
        			var sMonth	= sDate.substr(4, 2);			
        			sDate = sYear.toString() + sMonth;
        			this.fnSetMonth(sDate, obj.parent);
        			break;

        		case "btnYearNext" :
        			var sYear	= parseInt(sDate.substr(0, 4)) + 1;
        			var sMonth	= sDate.substr(4, 2);
        			sDate = sYear.toString() + sMonth;
        			this.fnSetMonth(sDate, obj.parent);
        			break;
        			
        		case "btnMonth01" :
        		case "btnMonth02" :
        		case "btnMonth03" :
        		case "btnMonth04" :
        		case "btnMonth05" :
        		case "btnMonth06" :
        		case "btnMonth07" :
        		case "btnMonth08" :
        		case "btnMonth09" :
        		case "btnMonth10" :
        		case "btnMonth11" :
        		case "btnMonth12" :
        			sDate = String(sDate).substr(0, 4) + Util.right(obj.name, 2);
        			this.fnSetMonth(sDate, obj.parent);
        			break;
        	}
        }

        this.fnSetAlertMsg = function(sMsg)
        {
        	this.divBg.divAlert.staMsg.set_text(sMsg);
        	this.divBg.set_visible(true);
        }

        this.fnPeriodValidate = function(sFrDate,sToDate)
        {
        	try
        	{
        		if (!Util.trim(this.fvValidate)) return true;

        		sFrDate = Util.trim(sFrDate);
        		sToDate = Util.trim(sToDate);

        		// month(개월), year(년도)
        		var aValidate 	= Util.trim(this.fvValidate).split(":");
        		var sSeparation = String(aValidate[0]).toLowerCase();
        		var nDuration 	= parseInt(aValidate[1]);
        		var nGap 		= 0;
        		switch (sSeparation)
        		{
        			case "month" : 
        				nGap = Util.diffMonth(sFrDate, sToDate);
        				break;
        			case "year" : 
        				nGap = Util.diffMonth(sFrDate, sToDate) / 12;
        				break;
        			default :
        				Util.trace("com::com_calendar_peroid.xfdl -> fnPeriodValidate() : 구분값이 없습니다. " + sSeparation);
        				return true;
        		}
        		
        		if (nGap > nDuration)
        		{
        			var sMsg = "선택한 일자가 지정한 범위[" + nDuration + (sSeparation == "month" ? "개월" : "년") + "]를 초과했습니다.";
        			this.fnSetAlertMsg(sMsg);
        			return false;
        		}
        	}
        	catch(e)
        	{
        		Util.trim(e.message);
        	}
        	
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.cfnOnload, this);
            this.divFrom.btn_month_prev0.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnYearPrev.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnYearNext.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth01.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth02.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth03.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth04.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth05.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth06.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth07.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth08.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth09.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth10.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth11.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divFrom.btnMonth12.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btn_month_prev0.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnYearPrev.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnYearNext.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth01.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth02.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth03.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth04.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth05.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth06.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth07.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth08.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth09.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth10.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth11.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divTo.btnMonth12.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);
            this.btnConfirm.addEventHandler("onclick", this.btnConfirm_onclick, this);
            this.divBg.divAlert.btnConfirm.addEventHandler("onclick", this.divBg_divAlert_btnConfirm_onclick, this);

        };

        this.loadIncludeScript("com_calendar_month_period.xfdl");

       
    };
}
)();
