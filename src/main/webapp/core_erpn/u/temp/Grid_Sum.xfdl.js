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
                this.set_name("comp_Grid_Sum");
                this.set_classname("GridSort");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_suppress", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Kylie</Col><Col id=\"HIRE_DATE\">20040521</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Vivian</Col><Col id=\"HIRE_DATE\">20010806</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Walter</Col><Col id=\"HIRE_DATE\">20070628</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20040819</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kerry</Col><Col id=\"HIRE_DATE\">20091104</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Russell</Col><Col id=\"HIRE_DATE\">20010915</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Ina</Col><Col id=\"HIRE_DATE\">20101105</Col><Col id=\"SALARY\">100</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20030328</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Josephine</Col><Col id=\"HIRE_DATE\">20051126</Col><Col id=\"SALARY\">300</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Leo</Col><Col id=\"HIRE_DATE\">20071127</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Erica</Col><Col id=\"HIRE_DATE\">20050319</Col><Col id=\"SALARY\">400</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Nicole</Col><Col id=\"HIRE_DATE\">20120223</Col><Col id=\"SALARY\">600</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Boris</Col><Col id=\"HIRE_DATE\">20120203</Col><Col id=\"SALARY\">10</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ali</Col><Col id=\"HIRE_DATE\">20020803</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Violet</Col><Col id=\"HIRE_DATE\">20081204</Col><Col id=\"SALARY\">30</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Indigo</Col><Col id=\"HIRE_DATE\">20030327</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Oliver</Col><Col id=\"HIRE_DATE\">20011109</Col><Col id=\"SALARY\">40</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kane</Col><Col id=\"HIRE_DATE\">20040415</Col><Col id=\"SALARY\">60</Col><Col id=\"GENDER\">W</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subsum", this);
            obj.set_keystring("G:-CORP,-DEPT");
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Kylie</Col><Col id=\"HIRE_DATE\">20040521</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Vivian</Col><Col id=\"HIRE_DATE\">20010806</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Walter</Col><Col id=\"HIRE_DATE\">20070628</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20040819</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kerry</Col><Col id=\"HIRE_DATE\">20091104</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Russell</Col><Col id=\"HIRE_DATE\">20010915</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Ina</Col><Col id=\"HIRE_DATE\">20101105</Col><Col id=\"SALARY\">100</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Bert</Col><Col id=\"HIRE_DATE\">20030328</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Josephine</Col><Col id=\"HIRE_DATE\">20051126</Col><Col id=\"SALARY\">300</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Leo</Col><Col id=\"HIRE_DATE\">20071127</Col><Col id=\"SALARY\">200</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Erica</Col><Col id=\"HIRE_DATE\">20050319</Col><Col id=\"SALARY\">400</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Nicole</Col><Col id=\"HIRE_DATE\">20120223</Col><Col id=\"SALARY\">600</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Boris</Col><Col id=\"HIRE_DATE\">20120203</Col><Col id=\"SALARY\">10</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ali</Col><Col id=\"HIRE_DATE\">20020803</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Violet</Col><Col id=\"HIRE_DATE\">20081204</Col><Col id=\"SALARY\">30</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Indigo</Col><Col id=\"HIRE_DATE\">20030327</Col><Col id=\"SALARY\">20</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Oliver</Col><Col id=\"HIRE_DATE\">20011109</Col><Col id=\"SALARY\">40</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kane</Col><Col id=\"HIRE_DATE\">20040415</Col><Col id=\"SALARY\">60</Col><Col id=\"GENDER\">W</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "50", "320", "458", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_suppress");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CORP\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\" style=\"cellbackground2:#ffffffff;\"><Cell text=\"bind:CORP\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:DEPT\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "376", "50", "406", "651", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_subsum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CORP\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"getRowLevel\"/></Band><Band id=\"body\" style=\"cellbackground2:#ffffffff;\"><Cell style=\"background:khaki;background2:khaki;\" text=\"expr:(dataset.getRowLevel(rowidx) == 0, CORP, dataset.getColumn(rowidx-dataset.getRowLevel(rowidx), &quot;CORP&quot;))\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" style=\"background:EXPR(dataset.getRowLevel(currow) == 0 ? &quot;lightyellow&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;khaki&quot;));background2:EXPR(dataset.getRowLevel(currow) == 0 ? &quot;lightyellow&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;khaki&quot;));\" text=\"expr:(dataset.getRowLevel(rowidx) == 0, this.col, dataset.getColumn(rowidx-dataset.getRowLevel(rowidx), this.col))\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"background:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));background2:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));\" text=\"bind:NAME\"/><Cell col=\"3\" style=\"background:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));background2:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));\" text=\"bind:SALARY\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));background2:EXPR(dataset.getRowLevel(currow) == 2 ? &quot;khaki&quot; : (dataset.getRowLevel(currow) == 1 ? &quot;lightyellow&quot; : &quot;&quot;));\" text=\"expr:dataset.getRowLevel(rowidx)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1) supress");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "364", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("2) subsum");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "530", "21", "48", "26", null, null, this);
            obj.set_taborder("4");
            obj.set_text("SUM");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "581", "21", "48", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_text("AVG");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "632", "21", "48", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_text("MAX");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "683", "21", "48", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_text("MIN");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "734", "21", "48", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_text("COUNT");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Grid_Sum.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {
        	var objColumnInfo = this.ds_subsum.getColumnInfo("SALARY");
        	objColumnInfo.set_prop(obj.text);

        	this.ds_subsum.updateSortGroup();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheaddblclick", this.Grid00_onheaddblclick, this);
            this.Grid01.addEventHandler("onheaddblclick", this.Grid00_onheaddblclick, this);
            this.Button00.addEventHandler("onclick", this.Button_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button_onclick, this);

        };

        this.loadIncludeScript("Grid_Sum.xfdl");

       
    };
}
)();
