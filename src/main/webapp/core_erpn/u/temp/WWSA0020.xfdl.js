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
                this.set_name("WWSA0020");
                this.set_classname("dept_list");
                this.getSetter("inheritanceid").set("");
                this.set_titletext("자바생성");
                this.set_name("WWSA0010");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_color("powderblue");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult1", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YES\" type=\"STRING\" size=\"256\"/><Column id=\"PACKAGE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResult2", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "127", "442", "619", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsResult1");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.style.set_background("#f5f5f5ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"70\"/><Column size=\"259\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"패키지\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"controlcolor: ;\" text=\"bind:CHK_YES\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:ROW_NUM\" expr=\"expr:currow + 1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:PACKAGE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("TARGET_PACKAGE", "absolute", "612", "56", "324", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("core.erp");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "948", "16", "52", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "948", "56", "52", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "506", "52", "118", "30", null, null, this);
            obj.set_text("생성패키지");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("TARGET_FOLDER", "absolute", "612", "20", "324", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("D:\\Java_Project\\CoreERP_eGOV\\src\\main\\java");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "506", "16", "86", "30", null, null, this);
            obj.set_text("생성폴더");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "506", "84", "86", "30", null, null, this);
            obj.set_text("덮어쓰기");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("SOURCE_PACKAGE", "absolute", "116", "56", "324", "30", null, null, this);
            obj.set_taborder("1");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "34", "52", "118", "30", null, null, this);
            obj.set_text("소스패키지");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("SOURCE_FOLDER", "absolute", "116", "20", "388", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_value("D:\\Core_Project\\CORE_ERP\\src\\erp\\u\\evm");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "34", "16", "86", "30", null, null, this);
            obj.set_text("소스폴더");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new CheckBox("OVERWRITE_YES", "absolute", "616", "90", "57", "18", null, null, this);
            obj.set_taborder("1");
            obj.set_value("1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "480", "128", "442", "619", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsResult2");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.style.set_background("#f5f5f5ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"70\"/><Column size=\"219\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"프로그램\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"controlcolor: ;\" text=\"bind:CHK_YES\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:ROW_NUM\" expr=\"expr:currow + 1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:FILE_NAME\"/><Cell col=\"3\" text=\"bind:CHK_YES\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dept_list");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("자바생성");
            		p.style.set_color("powderblue");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","SOURCE_PACKAGE","value","dsResult1","PACKAGE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","TARGET_PACKAGE","value","dsResult2","");
            this.addChild(obj.name, obj);
            obj.bind();

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WWSA0020.xfdl", function() {
        this.fn_PostProcess = function(svcId,retCode,message) {
        	
        	if (retCode != 0) {
        		
        		alert(message);
        		
        	} else {
        		
        		if (svcId == "SEARCH00") {
        			alert("조회 성공");
        			this.dsResult1.rowposition = 0;
        		} else if (svcId == "SEARCH01") {
        			this.dsResult2.rowposition = 0;
        		} else if (svcId == "SAVE") {
        			alert("저장 성공");
        		}
        		
        	}
        	
        }

        this.fn_search = function()
        {
        	var id = "SEARCH00";
        	var url = application.GBL_HTTPURL+"core/erp/tmp/TMPA0030_SEARCH00.do?CALL_TYPE=NEXACRO";
        	var inDs = "";
        	var outDs = "dsResult1=dsResult1";
        	var args = "SOURCE_FOLDER=" + this.SOURCE_FOLDER.value;
        	var callback = "fn_PostProcess";
        	this.transaction(id, url, inDs, outDs, args, callback);
        }

        
        this.fn_search1 = function()
        {
        	var id = "SEARCH01";
        	var url = application.GBL_HTTPURL+"core/erp/tmp/TMPA0030_SEARCH01.do?CALL_TYPE=NEXACRO";
        	var inDs = "";
        	var outDs = "dsResult2=dsResult2";
        	var args = "SOURCE_FOLDER=" + this.SOURCE_FOLDER.value;
        	args += " SOURCE_PACKAGE=" + this.dsResult1.getColumn(this.dsResult1.rowposition, "PACKAGE_NAME");
        	var callback = "fn_PostProcess";
        	this.transaction(id, url, inDs, outDs, args, callback);
        }

        
        this.fn_save = function(obj,e)
        {
        	var id = "SAVE00";
        	var url = application.GBL_HTTPURL+"core/erp/tmp/TMPA0030_SAVE00.do?CALL_TYPE=NEXACRO";
        	var inDs = "dsResult2=dsResult2:U";
        	var outDs = "dsResult2=dsResult2";
        	var args = "SOURCE_FOLDER=" + this.SOURCE_FOLDER.value;
        	args += " SOURCE_PACKAGE=" + this.SOURCE_PACKAGE.value;
        	args += " TARGET_FOLDER=" + this.TARGET_FOLDER.value;
        	args += " TARGET_PACKAGE=" + this.TARGET_PACKAGE.value;
        	args += " OVERWRITE_YES=" + this.OVERWRITE_YES.value;
        	var callback = "fn_PostProcess";
        	this.transaction(id, url, inDs, outDs, args, callback);
        }

        this.dsResult1_onrowposchanged = function(obj,e) {

        	this.fn_search1();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsResult1.addEventHandler("onrowposchanged", this.dsResult1_onrowposchanged, this);
            this.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.SOURCE_PACKAGE.addEventHandler("oneditclick", this.SOURCE_PACKAGE_oneditclick, this);
            this.Grid01.addEventHandler("onheaddblclick", this.Grid01_onheaddblclick, this);

        };

        this.loadIncludeScript("WWSA0020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
