(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("WWSA0010");
                this.set_classname("dept_list");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("IBATIS xml 생성");
                this.set_name("WWSA0010");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_color("powderblue");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YES\" type=\"STRING\" size=\"256\"/><Column id=\"PACKAGE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "127", "970", "619", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsResult");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.style.set_background("#f5f5f5ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"137\"/><Column size=\"139\"/><Column size=\"259\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"패키지\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"controlcolor: ;\" text=\"bind:CHK_YES\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:ROW_NUM\" expr=\"expr:currow + 1\"/><Cell col=\"2\" edittype=\"text\" style=\"align:center;\" text=\"bind:PACKAGE_NAME\"/><Cell col=\"3\" text=\"bind:CHK_YES\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("XML_DIR", "absolute", "156", "56", "324", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("query");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "503", "38", "96", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "607", "38", "96", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "34", "52", "118", "30", null, null, this);
            obj.set_text("SQL_MAP폴더");
            this.addChild(obj.name, obj);

            obj = new Edit("TARGET_FOLDER", "absolute", "156", "20", "324", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("D:\\Java_Project\\CoreERP_eGOV\\src\\main\\resources\\core\\config\\sqlmap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "34", "16", "86", "30", null, null, this);
            obj.set_text("생성폴더");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "370", "84", "86", "30", null, null, this);
            obj.set_text("덮어쓰기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("OVERWRITE_YES", "absolute", "448", "90", "57", "18", null, null, this);
            obj.set_taborder("1");
            obj.set_truevalue("1");
            obj.set_value("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "34", "84", "118", "30", null, null, this);
            obj.set_text("패키지");
            this.addChild(obj.name, obj);

            obj = new Edit("PACKAGE_NAME", "absolute", "156", "88", "200", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("PKG_NAME");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dept_list");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("IBATIS xml 생성");
            		p.style.set_color("powderblue");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WWSA0010.xfdl", function() {
        this.fn_Search = function() {
        	
        	//var sTargetPath = new String(this.TARGET_FOLDER.value);
        	var id = "SEARCH";
        	var url = application.GBL_HTTPURL+"core/erp/tmp/TMPA0020_SEARCH00.do?CALL_TYPE=NEXACRO";
        	var inDs = "";
        	var outDs = "dsResult=dsResult";
        	var args = "PACKAGE_NAME=" + this.PACKAGE_NAME.value;
        	var callback = "fn_PostProcess";
        	this.transaction(id, url, inDs, outDs, args, callback);
        }

        

        this.fn_PostProcess = function(svcId,retCode,message) {
        	
        	if (retCode != 0) {
        		
        		alert(message);
        		
        	} else {
        		
        		if (svcId == "SEARCH") {
        			alert("조회 성공");
        		} else if (svcId == "SAVE") {
        			alert("저장 성공");
        		}
        		
        	}
        	
        }
        this.fn_Save = function(obj,e)
        {
        	var id = "SAVE";
        	var url = application.GBL_HTTPURL+"core/erp/tmp/TMPA0020_SAVE00.do?CALL_TYPE=NEXACRO";
        	var inDs = "dsResult=dsResult:U";
        	var outDs = "dsResult=dsResult";
        	var args = "";
        	args += "TARGET_FOLDER=" + this.TARGET_FOLDER.value;
        	args += " XML_DIR=" + this.XML_DIR.value;
        	args += " OVERWRITE_YES=" + this.OVERWRITE_YES.value;
        	var callback = "fn_PostProcess";
        	this.transaction(id, url, inDs, outDs, args, callback);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_search.addEventHandler("onclick", this.fn_Search, this);
            this.btn_save.addEventHandler("onclick", this.fn_Save, this);

        };

        this.loadIncludeScript("WWSA0010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
