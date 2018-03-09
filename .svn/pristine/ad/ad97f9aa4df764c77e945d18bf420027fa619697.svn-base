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
                this.set_name("Grid4");
                this.set_classname("Grid4");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"m_id\" type=\"STRING\" size=\"256\"/><Column id=\"m_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_lv\" type=\"STRING\" size=\"256\"/><Column id=\"m_st\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"m_id\">1</Col><Col id=\"m_nm\">Main1</Col><Col id=\"m_lv\">0</Col><Col id=\"m_st\">0</Col></Row><Row><Col id=\"m_id\">2</Col><Col id=\"m_nm\">Sub1</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">1</Col></Row><Row><Col id=\"m_id\">3</Col><Col id=\"m_nm\">Leaf1</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">0</Col></Row><Row><Col id=\"m_id\">4</Col><Col id=\"m_nm\">Leaf2</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">0</Col></Row><Row><Col id=\"m_id\">5</Col><Col id=\"m_nm\">Main2</Col><Col id=\"m_lv\">0</Col><Col id=\"m_st\">1</Col></Row><Row><Col id=\"m_id\">6</Col><Col id=\"m_nm\">Sub2</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">0</Col></Row><Row><Col id=\"m_id\">7</Col><Col id=\"m_nm\">Leaf3</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_explorer", this);
            obj._setContents("<ColumnInfo><Column id=\"m_id\" type=\"STRING\" size=\"256\"/><Column id=\"m_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_lv\" type=\"STRING\" size=\"256\"/><Column id=\"m_st\" type=\"STRING\" size=\"256\"/><Column id=\"m_image\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"m_id\">1</Col><Col id=\"m_nm\">Project 'BUX_Project'</Col><Col id=\"m_lv\">0</Col><Col id=\"m_st\">1</Col><Col id=\"m_image\">Images::img_tree_project.png</Col></Row><Row><Col id=\"m_id\">2</Col><Col id=\"m_nm\">TypeDefinition</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">0</Col><Col id=\"m_image\">Images::img_tree_type.png</Col></Row><Row><Col id=\"m_id\">3</Col><Col id=\"m_nm\">Components</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_image\">Images::img_tree_comp.png</Col></Row><Row><Col id=\"m_id\">4</Col><Col id=\"m_nm\">Update</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_image\">Images::img_tree_update.png</Col></Row><Row><Col id=\"m_id\">5</Col><Col id=\"m_nm\">GlobalVariables</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">1</Col><Col id=\"m_image\">Images::img_tree_global.png</Col></Row><Row><Col id=\"m_id\">6</Col><Col id=\"m_nm\">Variables</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">1</Col><Col id=\"m_image\">Images::img_tree_variables.png</Col></Row><Row><Col id=\"m_id\">7</Col><Col id=\"m_nm\">gvUserID</Col><Col id=\"m_lv\">3</Col><Col id=\"m_st\">2</Col><Col id=\"m_image\">Images::img_tree_var.png</Col></Row><Row><Col id=\"m_nm\">Datasets</Col><Col id=\"m_image\">Images::img_tree_datasets.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">1</Col><Col id=\"m_id\">8</Col></Row><Row><Col id=\"m_nm\">gds_menu</Col><Col id=\"m_image\">Images::img_tree_dataset.png</Col><Col id=\"m_lv\">3</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">9</Col></Row><Row><Col id=\"m_nm\">Images</Col><Col id=\"m_image\">Images::img_tree_image.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">10</Col></Row><Row><Col id=\"m_nm\">ADL 'MDI_Main'</Col><Col id=\"m_image\">Images::img_tree_adl.png</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">1</Col><Col id=\"m_id\">11</Col></Row><Row><Col id=\"m_nm\">MainFrame</Col><Col id=\"m_image\">Images::img_tree_mf.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">1</Col><Col id=\"m_id\">12</Col></Row><Row><Col id=\"m_nm\">VFrameSet0</Col><Col id=\"m_image\">Images::img_tree_vfs.png</Col><Col id=\"m_lv\">3</Col><Col id=\"m_st\">0</Col><Col id=\"m_id\">13</Col></Row><Row><Col id=\"m_nm\">ChildFrame0</Col><Col id=\"m_image\">Images::img_tree_cf.png</Col><Col id=\"m_lv\">4</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">14</Col></Row><Row><Col id=\"m_nm\">HFrameSet0</Col><Col id=\"m_image\">Images::img_tree_hfs.png</Col><Col id=\"m_lv\">4</Col><Col id=\"m_st\">0</Col><Col id=\"m_id\">15</Col></Row><Row><Col id=\"m_nm\">ChildFrame1</Col><Col id=\"m_image\">Images::img_tree_cf.png</Col><Col id=\"m_lv\">5</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">16</Col></Row><Row><Col id=\"m_nm\">FrameSet0</Col><Col id=\"m_image\">Images::img_tree_fs.png</Col><Col id=\"m_lv\">5</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">17</Col></Row><Row><Col id=\"m_nm\">Themes</Col><Col id=\"m_image\">Images::img_tree_themes.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">0</Col><Col id=\"m_id\">18</Col></Row><Row><Col id=\"m_nm\">black.xtheme</Col><Col id=\"m_image\">Images::img_tree_theme.png</Col><Col id=\"m_lv\">3</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">19</Col></Row><Row><Col id=\"m_nm\">ADL 'BUX_Project'</Col><Col id=\"m_image\">Images::img_tree_adl.png</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">0</Col><Col id=\"m_id\">20</Col></Row><Row><Col id=\"m_nm\">Base</Col><Col id=\"m_image\">Images::img_tree_service.png</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">1</Col><Col id=\"m_id\">21</Col></Row><Row><Col id=\"m_nm\">Hello</Col><Col id=\"m_image\">Images::img_tree_form.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">22</Col></Row><Row><Col id=\"m_nm\">Basic1</Col><Col id=\"m_image\">Images::img_tree_service.png</Col><Col id=\"m_lv\">1</Col><Col id=\"m_st\">0</Col><Col id=\"m_id\">23</Col></Row><Row><Col id=\"m_nm\">SaveEMP1</Col><Col id=\"m_image\">Images::img_tree_form.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">24</Col></Row><Row><Col id=\"m_nm\">SaveEMP2</Col><Col id=\"m_image\">Images::img_tree_form.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">25</Col></Row><Row><Col id=\"m_nm\">SelectEMP</Col><Col id=\"m_image\">Images::img_tree_form.png</Col><Col id=\"m_lv\">2</Col><Col id=\"m_st\">2</Col><Col id=\"m_id\">26</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "30", "50", "296", "194", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"136\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"tree\"/><Cell col=\"1\" text=\"level\"/><Cell col=\"2\" text=\"status\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"linetype:onlyvert;background:transparent;background2:transparent;\" text=\"bind:m_nm\" treelevel=\"bind:m_lv\" treestate=\"bind:m_st\"/><Cell col=\"1\" style=\"background:transparent;background2:transparent;\" text=\"bind:m_lv\"/><Cell col=\"2\" style=\"background:transparent;background2:transparent;\" text=\"bind:m_st\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "30", "294", "296", "426", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_explorer");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.style.set_background("@gradation");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"206\"/><Column size=\"40\"/></Columns><Rows><Row size=\"20\"/></Rows><Band id=\"body\" style=\"background:#e1e1e1ff;cellline:0 solid #808080ff ;cellbackground:#e1e1e1ff;cellbackground2:#e1e1e1ff;cellcolor2: ;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:m_nm\" treelevel=\"bind:m_lv\" treestate=\"bind:m_st\" treeexpandimage=\"bind:m_image\" treecollapseimage=\"bind:m_image\" treeitemimage=\"bind:m_image\"/><Cell col=\"1\" text=\"bind:m_st\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "20", "150", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("1) tree");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "268", "150", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2) tree image");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Grid4");
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

        this.loadIncludeScript("Grid_Tree.xfdl");

       
    };
}
)();
