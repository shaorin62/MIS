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
                this.set_name("comp_Menu");
                this.set_classname("comp_Button");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"m_id\" type=\"STRING\" size=\"256\"/><Column id=\"m_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_lv\" type=\"STRING\" size=\"256\"/><Column id=\"m_chk\" type=\"STRING\" size=\"256\"/><Column id=\"m_enable\" type=\"STRING\" size=\"256\"/><Column id=\"m_hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"m_id\">1</Col><Col id=\"m_nm\">Main1</Col><Col id=\"m_lv\">0</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\"/></Row><Row><Col id=\"m_id\">2</Col><Col id=\"m_nm\">Sub1</Col><Col id=\"m_lv\">1</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\"/></Row><Row><Col id=\"m_id\">3</Col><Col id=\"m_nm\">Leaf1</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">1</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\">F1</Col></Row><Row><Col id=\"m_id\">4</Col><Col id=\"m_nm\">Leaf2</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">0</Col><Col id=\"m_hotkey\">F2</Col></Row><Row><Col id=\"m_id\">5</Col><Col id=\"m_nm\">Main2</Col><Col id=\"m_lv\">0</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">6</Col><Col id=\"m_nm\">Sub2</Col><Col id=\"m_lv\">1</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">7</Col><Col id=\"m_nm\">Leaf3</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">1</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\">F3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Menu("Menu00", "absolute", "30", "50", "400", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_menu");
            obj.set_captioncolumn("m_nm");
            obj.set_enablecolumn("m_enable");
            obj.set_idcolumn("m_id");
            obj.set_levelcolumn("m_lv");
            obj.set_checkboxcolumn("m_chk");
            obj.set_hotkeycolumn("m_hotkey");

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1) innerdataset");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_Button");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

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

        };

        this.loadIncludeScript("Menu.xfdl");

       
    };
}
)();
