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
                this.set_name("frmNexaTestFormChild");
                this.set_classname("frmNexaTestFormChild");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,500,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"A1\">1</Col><Col id=\"A2\">A</Col></Row><Row><Col id=\"A1\">2</Col><Col id=\"A2\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset2", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"B1\" type=\"STRING\" size=\"256\"/><Column id=\"B2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"B1\">A</Col><Col id=\"B2\">가</Col></Row><Row><Col id=\"B1\">B</Col><Col id=\"B2\">나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "23", "88", "132", "14", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("부모창에서 받은 변수 1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "23", "116", "132", "14", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("부모창에서 받은 변수 2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "158", "84", "138", "24", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "158", "110", "138", "24", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "20", "164", "132", "35", null, null, this);
            obj.set_taborder("4");
            obj.set_text("일반종료(반환없음)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "20", "201", "132", "35", null, null, this);
            obj.set_taborder("5");
            obj.set_text("문자열 반환 종료");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "20", "238", "132", "35", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Array 반환 종료");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "20", "275", "132", "35", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Object 반환 종료");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "20", "312", "132", "35", null, null, this);
            obj.set_taborder("8");
            obj.set_text("부모창의 Dataset 처리");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmNexaTestFormChild");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmNexaTestFormChild.xfdl", "script::lib_script_common.xjs");
        this.registerScript("frmNexaTestFormChild.xfdl", function() {
        //include "script::lib_script_common.xjs";

        this.sArg1 = "";
        this.sArg2 = "";

        if (this.opener != null) {
        	
        	this.sArg1 = this.parent.sArg1;
        	this.sArg2 = this.parent.sArg2;
        	
        }

        this.fn_FormLoadPorcess = function(obj,e) {

        	this.Edit00.set_value(this.sArg1)  //Prent 창에서 보낸 변수 받기
        	this.Edit01.set_value(this.sArg2)  //Prent 창에서 보낸 변수 받기

        }

        //일반 종료
        this.fn_NormalClose = function(obj,e) {

        	this.fnc_PopupClose("");

        }

        //문자열 반환 종료
        this.fn_StringReturnClose = function(obj,e) {

        	this.fnc_PopupClose("Return Value : KSD");

        }

        //Array 반환 종료
        this.fn_ArrayReturnClose = function(obj,e) {

        	//var arrReturn = ["arr Return 1", "arr Return 2", "arr Return 3"];
        	var arrReturn =  new Array();
        		arrReturn[0] = "첫번째 반환 값(KSD1)";
        		arrReturn[1] = "두번째 반환 값(KSD2)";
        		arrReturn[2] = "세번째 반환 값(KSD3)";
        	this.fnc_PopupClose(arrReturn);

        }

        //Array & Dataset 반환
        this.fn_ObjectReturnClose = function(obj,e) {

        	//var arr = ["arr Reurn 1", this.Dataset1.saveXML(), this.Dataset1.saveXML()];
        	var arrReturn =  new Array();
        		arrReturn[0] = "첫번째 반환 값(KSD1)"
        		arrReturn[1] = this.Dataset1.saveXML();
        		arrReturn[2] = this.Dataset2.saveXML();
        	this.fnc_PopupClose(arrReturn);

        }

        //부모창의 Dataset 처리
        this.fn_ParentDataset = function(obj,e) {

        	var iRow = this.opener.dsTest1.addRow();
        	this.opener.TextArea01.set_value("dfasfdasdfds");
        	this.opener.dsTest1.setColumn(iRow, "C1", "팝업에서 보낸 자료");
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadPorcess, this);
            this.Button00.addEventHandler("onclick", this.fn_NormalClose, this);
            this.Button01.addEventHandler("onclick", this.fn_StringReturnClose, this);
            this.Button02.addEventHandler("onclick", this.fn_ArrayReturnClose, this);
            this.Button03.addEventHandler("onclick", this.fn_ObjectReturnClose, this);
            this.Button04.addEventHandler("onclick", this.fn_ParentDataset, this);

        };

        this.loadIncludeScript("frmNexaTestFormChild.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
