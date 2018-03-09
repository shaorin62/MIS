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
                this.set_name("comp_Grid_Sort");
                this.set_classname("GridSort");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sort", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"INT\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">A</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">C</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">D</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">E</Col><Col id=\"Column2\">3</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">F</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">G</Col><Col id=\"Column2\">4</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">H</Col><Col id=\"Column2\">D</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">I</Col><Col id=\"Column2\">5</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">J</Col><Col id=\"Column2\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Kylie</Col><Col id=\"HIRE_DATE\">20040521</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Vivian</Col><Col id=\"HIRE_DATE\">20010806</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Walter</Col><Col id=\"HIRE_DATE\">20070628</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20040819</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kerry</Col><Col id=\"HIRE_DATE\">20091104</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Russell</Col><Col id=\"HIRE_DATE\">20010915</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Ina</Col><Col id=\"HIRE_DATE\">20101105</Col><Col id=\"SALARY\">100</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20030328</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Josephine</Col><Col id=\"HIRE_DATE\">20051126</Col><Col id=\"SALARY\">300</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Leo</Col><Col id=\"HIRE_DATE\">20071127</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Erica</Col><Col id=\"HIRE_DATE\">20050319</Col><Col id=\"SALARY\">400</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Nicole</Col><Col id=\"HIRE_DATE\">20120223</Col><Col id=\"SALARY\">600</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Boris</Col><Col id=\"HIRE_DATE\">20120203</Col><Col id=\"SALARY\">10</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ali</Col><Col id=\"HIRE_DATE\">20020803</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Violet</Col><Col id=\"HIRE_DATE\">20081204</Col><Col id=\"SALARY\">30</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Indigo</Col><Col id=\"HIRE_DATE\">20030327</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Oliver</Col><Col id=\"HIRE_DATE\">20011109</Col><Col id=\"SALARY\">40</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kane</Col><Col id=\"HIRE_DATE\">20040415</Col><Col id=\"SALARY\">60</Col><Col id=\"GENDER\">W</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">ShinSoo Choo</Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Yuna Kim</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"FULL_NAME\">Sumi Jo</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS Park</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "50", "400", "368", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:EMPL_ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:GENDER\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:MARRIED\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:SALARY\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("1) Sort & Popup Detail");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "472", "116", "380", "400", null, null, this);
            obj.style.set_background("aliceblue");
            obj.style.set_border("1 solid #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "330", "6", "42", "24", null, null, this.PopupDiv00);
            obj.set_taborder("8");
            obj.set_text("close");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8", "9", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("9");
            obj.set_text("EmplID");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "8", "49", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("10");
            obj.set_text("FullName");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "8", "89", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("11");
            obj.set_text("DeptID");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "8", "129", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("12");
            obj.set_text("HireDate");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "8", "169", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("13");
            obj.set_text("Gender");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "8", "209", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("14");
            obj.set_text("Married");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "8", "249", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("15");
            obj.set_text("Salary");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "8", "289", "80", "30", null, null, this.PopupDiv00);
            obj.set_taborder("16");
            obj.set_text("Memo");
            obj.style.set_border("1 solid #80808099");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum bold");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Edit("edtFullName", "absolute", "95", "49", "173", "30", null, null, this.PopupDiv00);
            obj.set_taborder("17");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new MaskEdit("mskEmpID", "absolute", "96", "9", "173", "30", null, null, this.PopupDiv00);
            obj.set_taborder("18");
            obj.set_type("string");
            obj.set_mask("AA-###");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Calendar("calHireDate", "absolute", "96", "129", "173", "30", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new CheckBox("chkMarried", "absolute", "97", "209", "173", "30", null, null, this.PopupDiv00);
            obj.set_taborder("20");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new MaskEdit("mskSalary", "absolute", "95", "249", "173", "30", null, null, this.PopupDiv00);
            obj.set_taborder("21");
            obj.set_mask("#,###");
            this.PopupDiv00.addChild(obj.name, obj);
            obj = new Radio("rdoGender", "absolute", "96", "169", "173", "30", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            var rdoGender_innerdataset = new Dataset("rdoGender_innerdataset", this.PopupDiv00.rdoGender);
            rdoGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row></Rows>");
            obj.set_innerdataset(rdoGender_innerdataset);
            obj.set_taborder("22");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_padding("0 0 0 30");
            obj = new Combo("cmbDeptID", "absolute", "94", "89", "173", "30", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj = new TextArea("txtMemo", "absolute", "96", "289", "273", "102", null, null, this.PopupDiv00);
            obj.set_taborder("24");
            this.PopupDiv00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 380, 400, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("aliceblue");
            		p.style.set_border("1 solid #808080ff");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GridSort");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","PopupDiv00.edtFullName","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","PopupDiv00.mskEmpID","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","PopupDiv00.calHireDate","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","PopupDiv00.chkMarried","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","PopupDiv00.mskSalary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","PopupDiv00.rdoGender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","PopupDiv00.cmbDeptID","value","ds_emp","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","PopupDiv00.txtMemo","value","ds_emp","EMPL_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Grid_Sort.xfdl", "Lib::Common.xjs");
        this.registerScript("Grid_Sort.xfdl", function() {
        //include "Lib::Common.xjs"

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.cfn_GridSort(obj, e);
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var objRect = this.Grid00.getCellRect(e.row, e.col);
        	var nX = objRect.left;
        	var nY = objRect.bottom;

        	this.PopupDiv00.trackPopupByComponent(this.Grid00, nX, nY, 380, 400);
        }

        this.Button_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.PopupDiv00.Button02.addEventHandler("onclick", this.Button_onclick, this);

        };

        this.loadIncludeScript("Grid_Sort.xfdl");

       
    };
}
)();
