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
                this.set_name("YEAA0070T03");
                this.set_classname("YEAA0070T01");
                this.set_titletext("종근무지");
                this._setFormPosition(0,0,1024,493);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "9", null, "127", "21", null, "168", this);
            obj.set_taborder("12");
            obj.set_text("근로소득내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "9", "12", "127", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("근로소득내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_BFWORK", "absolute", "10", "34", null, null, "10", "200", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_BFWORK");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"79\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"회사명\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무시작일\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무종료일\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"감면시작일\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"감면종료일\"/><Cell col=\"7\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"급여총액\"/><Cell col=\"8\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"상여총액\"/><Cell col=\"9\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"인정상여\"/><Cell col=\"10\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"주식매수선택권행사이익\"/><Cell col=\"11\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"우리사주인출금\"/><Cell col=\"12\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"임원퇴직소득한도초과액\"/><Cell col=\"13\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"국민연금\"/><Cell col=\"14\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"건강보험\"/><Cell col=\"15\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"고용보험\"/><Cell col=\"16\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"소득세\"/><Cell col=\"17\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"지방소득세\"/><Cell col=\"18\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"농특세\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BIZ_NO\" mask=\"###-##-#####\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR001\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR002\" editlimit=\"40\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR003\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR004\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR005\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_STR006\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM002\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM003\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM004\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM005\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM006\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM007\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM008\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM009\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM010\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM011\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_BFW_NUM012\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"text\"/><Cell col=\"5\" displaytype=\"text\"/><Cell col=\"6\" displaytype=\"text\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM001&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM002&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM003&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM004&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM005&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM006&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM007&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM008&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM009&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM010&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM011&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFW_NUM012&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "119", "12", "168", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow01", "absolute", null, "9", "62", "21", "77", null, this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow01", "absolute", null, "9", "64", "21", "10", null, this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "28", "216", "6", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "111", "15", "10", "13", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_BFNTAX", "absolute", "10", null, "390", "159", null, "8", this);
            obj.set_taborder("7");
            obj.set_binddataset("dsYEA_BFNTAX");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"215\" band=\"left\"/><Column size=\"172\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"비과세/감면 항목\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"비과세액/감면금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_NON_TAX_CD\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_BFN_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_BFN_NUM001&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow02", "absolute", "336", null, "64", "21", null, "171", this);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow02", "absolute", "271", null, "62", "21", null, "171", this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "119", null, "168", "21", null, "168", this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "111", null, "10", "13", null, "173", this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 493, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("YEAA0070T01");
            		p.set_titletext("종근무지");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("YEAA0070T03.xfdl", function() {
        this.btnAddRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_BfworkAddRow();
        }

        this.btnDelRow01_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_BfworkDelRow();
        }

        this.btnAddRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_BfntaxAddRow();
        }

        this.btnDelRow02_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_BfntaxDelRow();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAddRow01.addEventHandler("onclick", this.btnAddRow01_OnClick, this);
            this.btnDelRow01.addEventHandler("onclick", this.btnDelRow01_OnClick, this);
            this.btnDelRow02.addEventHandler("onclick", this.btnDelRow02_OnClick, this);
            this.btnAddRow02.addEventHandler("onclick", this.btnAddRow02_OnClick, this);

        };

        this.loadIncludeScript("YEAA0070T03.xfdl");

       
    };
}
)();
