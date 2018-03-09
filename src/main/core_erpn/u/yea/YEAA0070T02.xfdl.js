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
                this.set_name("YEAA0070T01");
                this.set_classname("YEAA0070T01");
                this.set_titletext("근로소득");
                this._setFormPosition(0,0,1024,493);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdYEA_PAYDTL", "absolute", "10", "24", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_PAYDTL");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" displaytype=\"text\" text=\"지급년월\"/><Cell col=\"1\" colspan=\"7\" displaytype=\"text\" text=\"근로소득지급명세\"/><Cell col=\"8\" colspan=\"4\" displaytype=\"text\" text=\"비과세소득\"/><Cell col=\"12\" colspan=\"12\" displaytype=\"text\" text=\"근로소득원천징수액\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"급여액\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"기타소득\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"상여액\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"인정상여\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"주식매수&#10;선택권&#10;행사이익\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"우리사주&#10;인출금\"/><Cell row=\"1\" col=\"7\" rowspan=\"2\" text=\"임원&#10;퇴직소득&#10;한도초과액\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"국외근로\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"출산보육수당\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" displaytype=\"text\" text=\"비과세학자금\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" displaytype=\"text\" text=\"신고제외&#10;비과세\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" displaytype=\"text\" text=\"감면세액\"/><Cell row=\"1\" col=\"13\" colspan=\"3\" displaytype=\"text\" text=\"기납부세액\"/><Cell row=\"1\" col=\"16\" colspan=\"3\" text=\"납부특례세액\"/><Cell row=\"1\" col=\"19\" colspan=\"5\" displaytype=\"text\" text=\"징수의무자 자체증빙 지출액\"/><Cell row=\"2\" col=\"13\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"2\" col=\"14\" displaytype=\"text\" text=\"지방소득세\"/><Cell row=\"2\" col=\"15\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"2\" col=\"16\" text=\"소득세\"/><Cell row=\"2\" col=\"17\" text=\"지방소득세\"/><Cell row=\"2\" col=\"18\" text=\"농특세\"/><Cell row=\"2\" col=\"19\" displaytype=\"text\" text=\"연금보험\"/><Cell row=\"2\" col=\"20\" displaytype=\"text\" text=\"건강보험\"/><Cell row=\"2\" col=\"21\" displaytype=\"text\" text=\"고용보험\"/><Cell row=\"2\" col=\"22\" displaytype=\"text\" text=\"노동조합비\"/><Cell row=\"2\" col=\"23\" displaytype=\"text\" text=\"기부금\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:YEA_PAY_YYMM\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM001\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM002\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM003\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM004\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM005\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM006\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:YEA_PAY_NUM007\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM009\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM011\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM026\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM013\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM014\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM015\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM016\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM017\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM018\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM019\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM020\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM021\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"20\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM022\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"21\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM023\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"22\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM024\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:YEA_PAY_NUM025\" mask=\"#,##0\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM001&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM002&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM003&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM004&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM005&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM006&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"dataset.getSum(&quot;YEA_PAY_NUM007&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM009&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM011&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM026&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM013&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM014&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM015&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM016&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM017&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM018&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM019&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM020&quot;)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM021&quot;)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM022&quot;)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM023&quot;)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM024&quot;)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_PAY_NUM025&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "10", "2", "168", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "17", "216", "6", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 493, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("YEAA0070T01");
            		p.set_titletext("근로소득");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("YEAA0070T02.xfdl", function() {

        this.btnAddRow_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_FamiAddRow();
        }

        this.btnDelRow_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_FamiDelRow();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("YEAA0070T02.xfdl");

       
    };
}
)();
