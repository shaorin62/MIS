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
                this.set_titletext("suppress, row autosizing");
                this.set_name("test_grid_autosizingtype_row");
                this.set_classname("test_grid_autosizingtype_row");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111111111111111111111111111111111111111111111SDFHA;SDJFLKASJDF;LJAKSDLFKJASD;KFJAL;SJF;LAKSJF;ASJFLSDFL;AJF;ASDJF;LASFL;KADLKFJASDJF;LSJFLSDFLASDLKASDFLKAD;LKAS;FDKASLKA;LSKJFLDJFALSJLSJF</Col><Col id=\"Column1\">4313241234DDJSKFJA;SLKJF;LKADJF;LKASJFL;KASJF;LKASJFLASLKSD;JFLAJF;SDJF;LSJF;LASDJLASDFLKAJF;JALK;JASLJFL;AJFKADJLASFASDJKL</Col><Col id=\"Column5\">ASDFASDFJASDKLFJA;LSJFL;KADJFLK;ASJFLK;ASJFLK;ASJF;LKASFLKASJF;KAJLKFJASDLJFA;SJFLASF;LSJFLAJFLASDFKASLSD</Col><Col id=\"Column4\">ASFDASDFASDF</Col><Col id=\"Column3\">FDSAADSFASDF</Col><Col id=\"Column2\">ASFDASDFASD</Col></Row><Row><Col id=\"Column0\">11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "13", "120", "411", "267", null, null, this);
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj.set_binddataset("Dataset00");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell style=\"padding: ;\" text=\"bind:Column0\" wordwrap=\"char\" suppress=\"1\" suppressalign=\"middle,over\" autosizerow=\"limitmax\"/><Cell col=\"1\" text=\"bind:Column1\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "16", "806", "83", null, null, this);
            obj.set_taborder("1");
            obj.set_text("grid.autosizingtype=\"row\"\r\ngrid.extendsizetype=\"row\"\r\n<Cell suppress=\"1\" suppressalign=\"middle,over\" autosizerow=\"limitmax\"/>\r\n<Cell col=\"1\" text=\"bind:Column1\" autosizerow=\"limitmin\"/>");
            obj.style.set_color("#333333ff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "19", "416", "301", "316", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" wordwrap=\"char\"/><Cell col=\"1\" text=\"bind:Column1\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "626", "334", "265", "68", null, null, this);
            obj.set_taborder("3");
            obj.set_text("autosizerow=\"limitmin\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "448", "64", "413", "315", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/><Column size=\"164\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" text=\"bind:Column0\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:Column1\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"1\" text=\"bind:Column2\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"2\" col=\"1\" text=\"bind:Column3\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"3\" col=\"1\" text=\"bind:Column4\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"4\" col=\"1\" text=\"bind:Column5\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "440", "408", "413", "302", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset00");
            obj.set_extendsizetype("none");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"225\"/><Column size=\"183\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell displaytype=\"decoratetext\" edittype=\"textarea\" text=\"bind:Column0\" wordwrap=\"char\" suppress=\"1\" suppressalign=\"middle\" autosizerow=\"limitmax\"/><Cell col=\"1\" text=\"bind:Column1\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_grid_autosizingtype_row");
            		p.set_titletext("suppress, row autosizing");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample_grid_autosizingtype_row.xfdl", function() {
         
        this.Static01_onclick = function(obj,e)
        {
        	
        }
         
        this.Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("sample_grid_autosizingtype_row.xfdl");

       
    };
}
)();
