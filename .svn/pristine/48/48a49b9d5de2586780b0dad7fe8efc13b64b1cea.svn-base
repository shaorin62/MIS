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
                this.set_name("comp_PopupMenu");
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
            obj = new Button("Button00", "absolute", "30", "50", "150", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) Basic");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "184", "50", "100", "30", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "30", "109", "100", "70", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_menu");
            obj.set_idcolumn("m_id");
            obj.set_captioncolumn("m_nm");
            obj.set_levelcolumn("m_lv");
            obj.style.set_itemheight("30");
            obj.style.set_itembordertype("normal 20 0");
            obj.set_checkboxcolumn("m_chk");
            obj.set_enablecolumn("m_enable");
            obj.set_hotkeycolumn("m_hotkey");


            
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
        this.registerScript("PopupMenu.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this.Button00, 0);
        	var nY = system.clientToScreenY(this.Button00, parseInt(obj.height));

        	this.PopupMenu00.trackPopup(system.screenToClientX(this, nX),
        	                            system.screenToClientY(this, nY));
        }

        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        	this.Edit00.set_value(e.id);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);

        };

        this.loadIncludeScript("PopupMenu.xfdl");

       
    };
}
)();
