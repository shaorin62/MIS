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
                this.set_name("comCalendarDiv");
                this.set_titletext("comCalendarDiv");
                this._setFormPosition(0,0,745,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("CALN_WEEK00", "absolute", "0%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("2");
            obj.set_cssclass("styCalendarHeadSun");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK01", "absolute", "14.2857%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("3");
            obj.set_cssclass("styCalendarHead");
            obj.set_text("월");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK02", "absolute", "28.5714%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("4");
            obj.set_cssclass("styCalendarHead");
            obj.set_text("화");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK03", "absolute", "42.8%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("5");
            obj.set_cssclass("styCalendarHead");
            obj.set_text("수");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK04", "absolute", "57.14%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("6");
            obj.set_cssclass("styCalendarHead");
            obj.set_text("목");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK05", "absolute", "71.4285%", "0", "14.6%", null, null, "0", this);
            obj.set_taborder("7");
            obj.set_cssclass("styCalendarHead");
            obj.set_text("금");
            this.addChild(obj.name, obj);

            obj = new Static("CALN_WEEK06", "absolute", "85.77%", "0", "14.23%", null, null, "0", this);
            obj.set_taborder("8");
            obj.set_cssclass("styCalendarHeadSat");
            obj.set_text("토");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 745, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("comCalendarDiv");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comCalendarHead.xfdl", function() {

        this.fv_nYear;
        this.fv_nMonth;
        this.fv_nDay;
        this.fv_nFirstDay = -1;
        //함수기능은 업무화면에서 구현한다.

        /*  onclick  */
        this.date_onclick = function(obj,e)
        {
        	var objDiv = null;
        	if (obj instanceof Div)
        	{
        		objDiv = obj;
        	}
        	else if (obj instanceof Static)
        	{
        		objDiv = obj.parent;
        	}
        	
        	/*
        	divDate를 클릭했을 때 아래 컴포넌트중 하나에서 이벤트가 발생한다.
        	(DIV)divDate00~41
        	(Static)divDateXX.CALN_DATE
        	(Static)divDateXX.HOGB_NAME0~3

        	objDiv는 divDateXX가 선택 되고, 
        	divDateXX.CALN_DATE 가 visible 인지 확인한 후에 text를 가져오면 날짜를 가져올수 있다.
        	
        	*/
        	
        	//this.parent는 업무화면이다.
        	//var objParent = this.parent;
        	//objParent.fn_ondayClick(nDay);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.CALN_WEEK00.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK01.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK02.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK03.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK04.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK05.addEventHandler("onclick", this.date_onclick, this);
            this.CALN_WEEK06.addEventHandler("onclick", this.date_onclick, this);

        };

        this.loadIncludeScript("comCalendarHead.xfdl");

       
    };
}
)();
