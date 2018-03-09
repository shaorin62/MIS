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
                this.set_name("mnuleft");
                this.set_classname("mnuleft");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,290,750);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 02</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFavMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">즐겨찾기메뉴1</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴2</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴3</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴4</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴5</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴6</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴7</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴8</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴9</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴10</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴11</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴12</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴13</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴14</Col><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\">즐겨찾기메뉴15</Col><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "0", "60", null, null, "0", this);
            obj.set_taborder("26");
            obj.set_cssclass("div_LF_box");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "0", "0", "60", "60", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MenuClose");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "0", "60", "60", "60", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_SubMenu");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "0", "120", "60", "60", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Bookmark");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut1", "absolute", "19", "193", "22", "22", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_cssclass("btn_LF_MenuNm");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut00", "absolute", "19", "226", "22", "22", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_cssclass("btn_LF_MenuNm");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut02", "absolute", "19", "259", "22", "22", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_cssclass("btn_LF_MenuNm");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut03", "absolute", "19", "292", "22", "22", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut04", "absolute", "19", "325", "22", "22", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut05", "absolute", "19", "358", "22", "22", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut06", "absolute", "19", "391", "22", "22", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut07", "absolute", "19", "424", "22", "22", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut08", "absolute", "19", "457", "22", "22", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_shortCut09", "absolute", "19", "490", "22", "22", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("btn_LF_MenuNm");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "60", "0", "230", null, null, "0", this);
            obj.set_taborder("27");
            obj.set_text("Div01");
            obj.set_cssclass("div_LF_box02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "14", "44", "201", null, null, "44", this.Div01);
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_taborder("8");
            obj.set_binddataset("dsFavMenu");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"175\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:center middle;\" text=\"expr:currow &lt; 10 ?  &quot;URL('theme://images/grd_LF_0&quot; + (currow+1) + &quot;.png')&quot; : &quot;URL('theme://images/grd_LF_Bkmk.png')&quot;\"/><Cell col=\"1\" style=\"padding: ;\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "15", null, "64", "21", null, "12", this.Div01);
            obj.set_taborder("5");
            obj.set_text("↑ 위로");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "82", null, "65", "21", null, "12", this.Div01);
            obj.set_taborder("6");
            obj.set_text("↓ 아래로");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "150", null, "64", "21", null, "12", this.Div01);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "14", "14", "201", "27", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_cssclass("Edit_LF_search");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "185", "16", "28", "23", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_search");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid03", "absolute", "14", "44", "201", null, null, "44", this.Div01);
            obj.set_taborder("2");
            obj.set_treeinitstatus("expand,null");
            obj.set_binddataset("grd");
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_treeusecheckbox("false");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"padding:0 0 0 -3;\" text=\"bind:Column\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button20", "absolute", "15", null, "96", "21", null, "12", this.Div01);
            obj.set_taborder("3");
            obj.set_text("전체펼침");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "118", null, "96", "21", null, "12", this.Div01);
            obj.set_taborder("4");
            obj.set_text("전체닫힘");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "328", "0", "60", "60", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_LF_MenuClose_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "328", "68", "60", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_LF_SubMenu_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "328", "136", "60", "60", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_LF_Bookmark_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "328", "225", "60", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_LF_MenuOpen");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "328", "293", "60", "60", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_LF_MenuOpen_S");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "395", "11", "187", "38", null, null, this);
            obj.set_taborder("34");
            obj.set_text("class = btn_LF_MenuClose_S");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "329", "360", "228", "38", null, null, this);
            obj.set_taborder("35");
            obj.set_text("※ OFF, MENU, MYMENU 를 클릭하면\r\n기존 class에 _S로 변경됨");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "395", "75", "187", "38", null, null, this);
            obj.set_taborder("36");
            obj.set_text("class = btn_LF_SubMenu_S");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "395", "144", "187", "38", null, null, this);
            obj.set_taborder("37");
            obj.set_text("class = btn_LF_Bookmark_S");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "395", "234", "187", "38", null, null, this);
            obj.set_taborder("38");
            obj.set_text("class = btn_LF_MenuOpen");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "395", "302", "187", "38", null, null, this);
            obj.set_taborder("39");
            obj.set_text("class = btn_LF_MenuOpen_S");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "74", "41", "201", "266", null, null, this);
            obj.set_cssclass("pdiv_LF_search");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid03", "absolute", "2", "1", "197", "262", null, null, this.PopupDiv00);
            obj.set_cssclass("grd_LF_Mymenu");
            obj.set_taborder("0");
            obj.set_binddataset("grd");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.style.set_background("#ffffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell style=\"padding:0 0 0 8;\" text=\"bind:Column\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 60, 0, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_cssclass("div_LF_box");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 230, 750, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div01");
            		p.set_cssclass("div_LF_box02");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 201, 266, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("pdiv_LF_search");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 290, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mnuleft");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("leftFrame_pul.xfdl");

       
    };
}
)();
