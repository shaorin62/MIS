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
                this.set_name("composite_periodCalendar_month");
                this.set_classname("composite_periodMonthCalendar");
                this.set_titletext("기간달력(월)");
                this._setFormPosition(0,0,147,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calToMonth", "absolute", "72", "0", "75", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("class").set("cal_WF_noico");
            obj.set_cssclass("cal_WF_ComCal");
            obj.set_value("null");

            obj = new Calendar("calFromMonth", "absolute", "0", "0", "60", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("class").set("cal_WF_noico");
            obj.set_cssclass("cal_WF_ComCal");
            obj.set_value("null");

            obj = new Static("Static00", "absolute", "61", "0", "11", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.getSetter("class").set("sta_WF_txt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal", "absolute", "122", "0", "24", "21", null, null, this);
            obj.set_taborder("2");
            obj.getSetter("class").set("btn_WF_cal_ico");
            obj.set_cssclass("btn_WF_ComCal");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 147, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("composite_periodMonthCalendar");
            		p.set_titletext("기간달력(월)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("composite_periodCalendar_month.xfdl", "lib::commonloader.xjs");
        this.registerScript("composite_periodCalendar_month.xfdl", function() {
        /*=================================================================================================
         * 01. 업무구분	: Common
         * 02. 화면        	: composite_periodMonthCalendar.xfdl
         * 03. 화면 설명  	: 기간 월달력
         * 04. 작성자     	: 
         * 05. 작성일     	: 
         * 06. 수정이력   	:
         * 07. 주의사항 	: 
         *-------------------------------------------------------------------------------------------------
         *     수정일        이  름                          사유
         *-------------------------------------------------------------------------------------------------
         *
         *===============================================================================================*/
        //include "lib::commonloader.xjs";

        /*=================================================================================================
         * 1. Declare FORM Variable
         *===============================================================================================*/
        this.fvFormType = "P"; 	// mandatory : Main(M),Div(D),Tabpage(T),Popup(P)
        this.fvDate 	= "";

        this.fvConfig 	= null;
        /*=================================================================================================
         * 2. FORM Initialize & Common function
         *===============================================================================================*/
        /**
         * 화면Onload함수
         * @param  {Object} obj load된 Form
         */
        this.cfnOnload = function(obj)
        {
        	// 화면이 onload되면서 호출되는 함수
        //	this.comf_initForm(obj);
        	
        	this.fvDate = Util.today();
        	if (this.fvDate)
        	{
        		this.calFromMonth.set_value(this.fvDate);
        		this.calToMonth.set_value(this.fvDate);
        	}
        }

        this.fnSetConfig = function(oCfg)
        {
        	this.fvConfig = oCfg;

        	if (oCfg.binddataset && oCfg.frombindcolumn && oCfg.tobindcolumn)
        	{
        		var sFromBindItemNm = "_bndPeriodCalendarFrom";
        		var oFromBindItem = new BindItem();
        			oFromBindItem.init(sFromBindItemNm, "calFromMonth", "value", oCfg.binddataset, oCfg.frombindcolumn);
        		this.addChild(sFromBindItemNm, oFromBindItem); // Add Object to Parent Form 
        		oFromBindItem.bind(); // Bind Object  
        		
        		var sToBindItemNm = "_bndPeriodCalendarTo";
        		var oToBindItem = new BindItem();
        			oToBindItem.init(sToBindItemNm, "calToMonth", "value", oCfg.binddataset, oCfg.tobindcolumn);
        		this.addChild(sToBindItemNm, oToBindItem); // Add Object to Parent Form 
        		oToBindItem.bind(); // Bind Object  
        	}
        	
        	if (oCfg.essential)
        	{
        		this.fnSetEssential();
        	}
        }

        
        this.fnSetEssential = function()
        {
        	this.calFromMonth.set_cssclass("cal_WF_ComCal_P");
        	this.calToMonth.set_cssclass("cal_WF_ComCal_P");
        }

        this.btnCal_onclick =function(obj,e)
        {
        	if (Util.isNull(this.calFromMonth.value)) 	this.calFromMonth.value = this.fvDate;
        	if (Util.isNull(this.calToMonth.value)) 	this.calToMonth.value 	= this.fvDate;
        	
        	var aDate = new Array(2);
        		aDate[0] = Util.trim(this.calFromMonth.value).substr(0, 6);
        		aDate[1] = Util.trim(this.calToMonth.value).substr(0, 6);
        	
        	var nLeft = 0, nWidth=454, nHeight=248, nTop = this.calFromMonth.getOffsetBottom()+1;
        	var sPoupDivNm 	= "_pdiv_popup_periodMonthCalendar";
        	var oPopupDiv 	= this.components[sPoupDivNm];
        	if (oPopupDiv)
        	{}
        	else
        	{
        		oPopupDiv = new PopupDiv();
        		oPopupDiv.init(sPoupDivNm, "absolute", 0, 0, nWidth, nHeight);
        		oPopupDiv.set_async(false);
        //		oPopupDiv.set_url("com::com_calendar_month_period.xfdl");
        		oPopupDiv.set_tabstop(false);
        		oPopupDiv.set_scrollbars("none");
        		this.addChild(sPoupDivNm, oPopupDiv);
        		oPopupDiv.show();
        	}

        	if (oPopupDiv.isPopup())
        	{
        		oPopupDiv.closePopup();
        		return;
        	}
        	
        	// PopupDiv호출시 화면 보정처리	
        	oPopupDiv.set_url("com::com_calendar_month_period.xfdl");	
        	oPopupDiv.fnSetMonthCalendar(aDate, this.fvConfig);
        	
        	var oFrame 	= this.comf_getFrame("main");
        	var oForm	= this.parent;

        	// adjust for popupsize
        //	var nConvX = system.screenToClientX(oFrame, system.clientToScreenX(oForm, this.getOffsetLeft()) - (oForm.hscrollbar.pos || 0));
        	var nConvY = system.screenToClientY(oFrame, system.clientToScreenY(oForm, this.getOffsetBottom()) - (oForm.vscrollbar.pos || 0));
        	if ((nConvY + nHeight) > oFrame.getOffsetHeight())
        	{
        		nTop = nTop - (nHeight+this.getOffsetHeight()+2);
        	}
        	
        	oPopupDiv.trackPopupByComponent(this.calFromMonth, nLeft, nTop, nWidth, nHeight, "fnPopupDivCallback");
        }

        this.fnPopupDivCallback = function(sPdivNm,aRtnValue)
        {
        	if (aRtnValue)
        	{
        		this.calFromMonth.set_value(aRtnValue[0]);
        		this.calToMonth.set_value(aRtnValue[1]);
        	}
        }

        /**
         * 기간월달력 날짜설정 함수
         * @param {Array} aDate 설정할 날짜배열
         */
        this.fnSetDate = function(aDate)
        {
        	if (aDate && aDate.length == 2)
        	{
        		this.calFromMonth.set_value(aDate[0] || this.fvDate);
        		this.calToMonth.set_value(aDate[1] || this.fvDate);
        	}
        	else
        	{
        		if (Util.isNull(this.calFromMonth.value)) 	this.calFromMonth.set_value(this.fvDate);
        		if (Util.isNull(this.calToMonth.value)) 	this.calToMonth.set_value(this.fvDate);
        	}
        }

        /**
         * 기간월달력 현재날짜 반환
         * @return {Array} 현재날짜(배열)
         */
        this.fnGetDate = function()
        {
        	return [Util.trim(this.calFromMonth.value).substring(0, 6), Util.trim(this.calToMonth.value).substring(0, 6)];
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.cfnOnload, this);
            this.calToMonth.addEventHandler("onchanged", this.cal_ToMonth_onchanged, this);
            this.calFromMonth.addEventHandler("onchanged", this.cal_FromMonth_onchanged, this);
            this.btnCal.addEventHandler("onclick", this.btnCal_onclick, this);

        };

        this.loadIncludeScript("composite_periodCalendar_month.xfdl");

       
    };
}
)();
