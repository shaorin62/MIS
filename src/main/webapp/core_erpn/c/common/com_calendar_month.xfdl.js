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
                this.set_name("com_popupcalendar");
                this.set_classname("com_popupcalendar");
                this.set_titletext("Calendar[Month]");
                this._setFormPosition(0,0,212,189);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMonth", "absolute", "1", "0", "212", "189", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Edit("staMonth", "absolute", "45", "0", "122", "30", null, null, this.divMonth);
            obj.set_taborder("13");
            obj.set_value("2015");
            obj.set_visible("true");
            obj.set_cssclass("edt_WF_Calendaryy");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth01", "absolute", "3", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm01.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth02", "absolute", "55", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm02.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth03", "absolute", "107", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm03.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth04", "absolute", "159", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm04.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth05", "absolute", "3", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm05.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth06", "absolute", "55", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm06.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth07", "absolute", "107", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm07.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth08", "absolute", "159", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm08.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth09", "absolute", "3", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm09.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth10", "absolute", "55", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm10.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth11", "absolute", "107", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm11.png')");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth12", "absolute", "159", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calmm");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm12.png')");
            this.divMonth.addChild(obj.name, obj);

            obj = new Button("btnMonthNext", "absolute", "189", "0", "22", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalNext");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonthPrev", "absolute", "1", "0", "22", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalPrev");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this.divMonth,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.divMonth.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("com_popupcalendar");
            		p.set_titletext("Calendar[Month]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("com_calendar_month.xfdl", "lib::commonloader.xjs");
        this.registerScript("com_calendar_month.xfdl", function() {
        //include "lib::commonloader.xjs";

        this.fvSelecteYm;
        this.fvOriginalYm;

        this.com_popupcalendar_onload = function(obj,e)
        {
        //	this.fnSetMonthCalendar(obj._calendar_date)
        }

        this.com_popupcalendar_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27)	// ESC
        	{
        		this.closePopup(fvOriginalYm);
        	}
        }

        this.fnSetMonthCalendar = function(strDate)
        {
        	this.fvSelecteYm	= String(strDate);
        	this.fvOriginalYm	= String(strDate);
        	
        	if (Util.isNull(this.fvSelecteYm) || this.fvSelecteYm == "000001" || this.fvSelecteYm.length == 0) 
        	{
        		this.fvSelecteYm = Util.today();
        	}
        	
        	this.fnSetYearMonth(this.fvSelecteYm);
        }

        this.fnSetYearMonth = function(sYYYYMM)
        {
        	var sYear	= sYYYYMM.substr(0, 4);
        	var sMonth	= sYYYYMM.substr(4, 2);

        	this.divMonth.staMonth.set_value(sYear);

        	// Focusing 처리(선택된 버튼으로 표시되도록 처리)
        	for (var i=1; i<=12; i++)
        	{
        		var sIdx = String(i).lpad("0", 2);
        		var oBtn = this.divMonth.components["btnMonth"+sIdx];
        		if (oBtn) oBtn.class = "btn_WF_Calmm" + (sIdx == sMonth ? "_S" : "");
        	}	
        }

        this.btn_Common_onclick = function(obj,e)
        {
        	var sBtnID = obj.name;
        	
        	switch(sBtnID)
        	{
        		case "btnMonthPrev" :
        			var strYear		= parseInt(this.fvSelecteYm.substr(0, 4));
        			var strMonth	= this.fvSelecteYm.substr(4, 2);
        			
        			strYear = strYear-1;

        			this.fvSelecteYm = strYear.toString() + strMonth;
        			this.fnSetYearMonth(this.fvSelecteYm);
        			break;

        		case "btnMonthNext" :
        			var strYear		= parseInt(this.fvSelecteYm.substr(0, 4));
        			var strMonth	= this.fvSelecteYm.substr(4, 2);

        			strYear = strYear +1;

        			this.fvSelecteYm = strYear.toString() + strMonth;
        			this.fnSetYearMonth(this.fvSelecteYm);
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
        			var strYear	= String(this.fvSelecteYm).substr(0, 4);
        			this.fvSelecteYm = strYear + Util.right(sBtnID, 2);
        			
        			this.closePopup(this.fvSelecteYm);
        			break;
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.com_popupcalendar_onload, this);
            this.addEventHandler("onkeydown", this.com_popupcalendar_onkeydown, this);
            this.divMonth.btnMonth01.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth02.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth03.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth04.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth05.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth06.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth07.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth08.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth09.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth10.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth11.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.divMonth.btnMonth12.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.btnMonthNext.addEventHandler("onclick", this.btn_Common_onclick, this);
            this.btnMonthPrev.addEventHandler("onclick", this.btn_Common_onclick, this);

        };

        this.loadIncludeScript("com_calendar_month.xfdl");

       
    };
}
)();
