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
                this.set_name("YEAA0070T06");
                this.set_classname("YEAA0070T01");
                this.set_titletext("의료명세");
                this._setFormPosition(0,0,1024,493);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdYEA_MEDISP", "absolute", "10", "34", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_MEDISP");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"94\" band=\"left\"/><Column size=\"111\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업자번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"상호\"/><Cell col=\"3\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급&#10;건수\"/><Cell col=\"4\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"지급액\"/><Cell col=\"5\" displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"의료증빙코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"난임시술비&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:YEA_MES_STR003\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:YEA_MES_STR007\" mask=\"###-##-#####\" editimemode=\"native\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_MES_STR006\" editlimit=\"40\" editimemode=\"native\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_MES_NUM001\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:YEA_MES_NUM002\" editlimit=\"15\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:YEA_MES_STR001\" combodataset=\"dsEVID_CODE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" editfilter=\"none\" style=\"align:center;background:white;background2:white;\" text=\"bind:YEA_MES_STR008\" editlimit=\"-1\" editlengthunit=\"utf16\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_MES_NUM001&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;YEA_MES_NUM002&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "10", "13", "168", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, "9", "62", "21", "77", null, this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, "9", "64", "21", "10", null, this);
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


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 493, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("YEAA0070T01");
            		p.set_titletext("의료명세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("YEAA0070T06.xfdl", function() {
        this.btnAddRow_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_MedispAddRow();
        }

        this.btnDelRow_OnClick = function(obj,e)
        {
        	this.parent.parent.parent.fn_MedispDelRow();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAddRow.addEventHandler("onclick", this.btnAddRow_OnClick, this);
            this.btnDelRow.addEventHandler("onclick", this.btnDelRow_OnClick, this);

        };

        this.loadIncludeScript("YEAA0070T06.xfdl");

       
    };
}
)();
