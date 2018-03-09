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
                this.set_name("Guide_04");
                this.set_classname("guide02_new");
                this.set_titletext("Grid(그리드종류별)");
                this._setFormPosition(0,0,1187,2649);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ABX12345</Col><Col id=\"Column7\">URL('theme://images/grd_img01.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0001</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1,000,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">CSD12345</Col><Col id=\"Column7\">URL('theme://images/grd_img02.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0002</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ERSA12345</Col><Col id=\"Column7\">URL('theme://images/grd_img03.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0003</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">GFHS1234</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0001</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">EWRWE123</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0002</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">SAD12345</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0003</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">YI1234500</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0001</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">DFGZ1234</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0002</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ABX12345</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0003</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">GJF123450</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">999</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">RYGJ12345</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\"/></Row><Row><Col id=\"Column6\">0</Col><Col id=\"Column8\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_comp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">URL('theme://images/grd_img01.png')</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">URL('theme://images/grd_img02.png')</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">URL('theme://images/grd_img03.png')</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">100000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">홍길동</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123,456,789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column9\">URL('theme://images/btn_WF_Search.png')</Col><Col id=\"Column11\">[Undefined]</Col></Row><Row><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 02</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">1 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("da_grd02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">AFC고도화시스템</Col><Col id=\"Column3\">AFC고도화시스템</Col><Col id=\"Column4\">AFC고도화시스템</Col><Col id=\"Column5\">AFC고도화시스템</Col><Col id=\"Column6\">AFC고도화시스템</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">7</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">8</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">9</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">11</Col><Col id=\"Column2\">농협유통eSCM</Col><Col id=\"Column3\">농협유통eSCM</Col><Col id=\"Column4\">농협유통eSCM</Col><Col id=\"Column5\">농협유통eSCM</Col><Col id=\"Column6\">농협유통eSCM</Col><Col id=\"Column7\">20140101</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("da_grd00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ABX12345</Col><Col id=\"Column7\">URL('theme://images/grd_img01.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0001</Col><Col id=\"Column9\">정상</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">1,000,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">CSD12345</Col><Col id=\"Column7\">URL('theme://images/grd_img02.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0002</Col><Col id=\"Column9\">정상</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">1,000,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">ERSA12345</Col><Col id=\"Column7\">URL('theme://images/grd_img03.png')</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0003</Col><Col id=\"Column9\">정상</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">1,000</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">GFHS1234</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0001</Col><Col id=\"Column9\">정상</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">EWRWE123</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0002</Col><Col id=\"Column9\">실패</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">SAD12345</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0003</Col><Col id=\"Column9\">실패</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">YI1234500</Col><Col id=\"Column6\">0</Col><Col id=\"Column8\">코드명0001</Col><Col id=\"Column9\">실패</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">1,000,000,000,001</Col><Col id=\"Column2\">정확한 글자수제한은 시스템에 따라 달라질 수 있습니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">20140101</Col><Col id=\"Column5\">DFGZ1234</Col><Col id=\"Column6\">1</Col><Col id=\"Column8\">코드명0002</Col><Col id=\"Column9\">실패</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid05", "absolute", "8", "251", null, "239", "25", null, this);
            obj.set_taborder("37");
            obj.set_binddataset("da_grd");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"574\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"제목(Left)\"/><Cell col=\"2\" text=\"링크\"/><Cell col=\"3\" text=\"단위(Right)\"/><Cell col=\"4\" text=\"작성자(Center)\"/><Cell col=\"5\" text=\"작성일(Center)\"/><Cell col=\"6\" text=\"코드(Center)\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:Column2\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column5\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:Column1\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column5\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"123,456,789\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "8", "880", null, "265", "25", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("da_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"487\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"203\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"제목(Left)\"/><Cell col=\"2\" text=\"단위(Right)\"/><Cell col=\"3\" text=\"작성자(Center)\"/><Cell col=\"4\" text=\"작성일(Center)\"/><Cell col=\"5\" text=\"코드(Center)\"/><Cell col=\"6\" text=\"코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:Column2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column1\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:Column8\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_sum03\" text=\"소계\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_sum03\" text=\"43,843,145\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_sum03\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_sum03\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_sum03\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_sum03\"/><Cell row=\"1\" colspan=\"2\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_sum02\" text=\"소계\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_sum02\" text=\"43,843,145\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"1\" col=\"6\" cssclass=\"Cellgrd_WF_sum02\"/><Cell row=\"2\" colspan=\"2\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_sum01\" text=\"소계\"/><Cell row=\"2\" col=\"2\" cssclass=\"Cellgrd_WF_sum01\" text=\"43,843,145\"/><Cell row=\"2\" col=\"3\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"2\" col=\"4\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"2\" col=\"5\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"2\" col=\"6\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"3\" colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell row=\"3\" col=\"2\" text=\"123,456,789\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "8", "1522", null, "171", "25", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("da_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"90\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"항목&#13;&#10;하위항목\" wordwrap=\"true\"/><Cell col=\"3\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"4\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"5\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"6\" text=\"Double&#13;&#10;line\" wordwrap=\"true\"/><Cell col=\"7\" text=\"Date\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "8", "1298", null, "184", "25", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("da_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"45\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" colspan=\"2\" text=\"Column1\"/><Cell col=\"4\" colspan=\"3\" text=\"Column2\"/><Cell col=\"7\" rowspan=\"2\" text=\"Date\"/><Cell row=\"1\" col=\"2\" text=\"Column1-1\"/><Cell row=\"1\" col=\"3\" text=\"Column1-2\"/><Cell row=\"1\" col=\"4\" text=\"Column2-1\"/><Cell row=\"1\" col=\"5\" text=\"Column2-2\"/><Cell row=\"1\" col=\"6\" text=\"Column2-3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "8", "1746", "270", "421", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("grd");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Grid Tree\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:Column\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "318", "1205", "171", "18", null, null, this);
            obj.set_taborder("17");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum02</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "449", "1078", "1", "131", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "405", "1054", "1", "133", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "53", "789", "19", "17", null, null, this);
            obj.set_taborder("21");
            obj.set_text("45");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "731", "1143", "23", "1", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "742", "1040", "1", "103", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "731", "1118", "23", "1", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "731", "1092", "23", "1", null, null, this);
            obj.set_taborder("25");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "731", "1066", "23", "1", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "753", "1122", "40", "18", null, null, this);
            obj.set_taborder("27");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "753", "1097", "40", "18", null, null, this);
            obj.set_taborder("28");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "753", "1071", "40", "18", null, null, this);
            obj.set_taborder("29");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "17", "789", "19", "17", null, null, this);
            obj.set_taborder("32");
            obj.set_text("25");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "389", "1746", null, "213", "25", null, this);
            obj.set_taborder("33");
            obj.set_binddataset("da_grd02");
            obj.set_scrollbars("none");
            obj.set_selecttype("cell");
            obj.set_useselcolor("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구분\" wordwrap=\"true\"/><Cell col=\"2\" text=\"수도권\" wordwrap=\"true\"/><Cell col=\"3\" text=\"광역시\" wordwrap=\"true\"/><Cell col=\"4\" text=\"기타지방\" wordwrap=\"true\"/><Cell col=\"5\" text=\"지방\"/><Cell col=\"6\" text=\"전체\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell col=\"2\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"3\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"4\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"5\" text=\"00000000\"/><Cell col=\"6\" text=\"00000000\"/><Cell row=\"1\" rowspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"본부부서\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell row=\"1\" col=\"2\" text=\"00000000\"/><Cell row=\"1\" col=\"3\" text=\"00000000\"/><Cell row=\"1\" col=\"4\" text=\"00000000\"/><Cell row=\"1\" col=\"5\" text=\"00000000\"/><Cell row=\"1\" col=\"6\" text=\"00000000\"/><Cell row=\"2\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"본부\"/><Cell row=\"2\" col=\"2\" text=\"00000000\"/><Cell row=\"2\" col=\"3\" text=\"00000000\"/><Cell row=\"2\" col=\"4\" text=\"00000000\"/><Cell row=\"2\" col=\"5\" text=\"00000000\"/><Cell row=\"2\" col=\"6\" text=\"00000000\"/><Cell row=\"3\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"지역본부\"/><Cell row=\"3\" col=\"2\" text=\"00000000\"/><Cell row=\"3\" col=\"3\" text=\"00000000\"/><Cell row=\"3\" col=\"4\" text=\"00000000\"/><Cell row=\"3\" col=\"5\" text=\"00000000\"/><Cell row=\"3\" col=\"6\" text=\"00000000\"/><Cell row=\"4\" rowspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"영업점\"/><Cell row=\"4\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell row=\"4\" col=\"2\" text=\"00000000\"/><Cell row=\"4\" col=\"3\" text=\"00000000\"/><Cell row=\"4\" col=\"4\" text=\"00000000\"/><Cell row=\"4\" col=\"5\" text=\"00000000\"/><Cell row=\"4\" col=\"6\" text=\"00000000\"/><Cell row=\"5\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"국내\"/><Cell row=\"5\" col=\"2\" text=\"00000000\"/><Cell row=\"5\" col=\"3\" text=\"00000000\"/><Cell row=\"5\" col=\"4\" text=\"00000000\"/><Cell row=\"5\" col=\"5\" text=\"00000000\"/><Cell row=\"5\" col=\"6\" text=\"00000000\"/><Cell row=\"6\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"해외\"/><Cell row=\"6\" col=\"2\" text=\"00000000\"/><Cell row=\"6\" col=\"3\" text=\"00000000\"/><Cell row=\"6\" col=\"4\" text=\"00000000\"/><Cell row=\"6\" col=\"5\" text=\"00000000\"/><Cell row=\"6\" col=\"6\" text=\"00000000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "355", "1228", "171", "18", null, null, this);
            obj.set_taborder("34");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum01</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "488", "1106", "1", "126", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06", "absolute", "389", "1975", null, "184", "25", null, this);
            obj.set_taborder("36");
            obj.set_binddataset("da_grd02");
            obj.set_selecttype("cell");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell col=\"2\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"3\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"4\" displaytype=\"text\" text=\"00000000\"/><Cell col=\"5\" text=\"00000000\"/><Cell col=\"6\" text=\"00000000\"/><Cell row=\"1\" rowspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"본부부서\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell row=\"1\" col=\"2\" text=\"00000000\"/><Cell row=\"1\" col=\"3\" text=\"00000000\"/><Cell row=\"1\" col=\"4\" text=\"00000000\"/><Cell row=\"1\" col=\"5\" text=\"00000000\"/><Cell row=\"1\" col=\"6\" text=\"00000000\"/><Cell row=\"2\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"본부\"/><Cell row=\"2\" col=\"2\" text=\"00000000\"/><Cell row=\"2\" col=\"3\" text=\"00000000\"/><Cell row=\"2\" col=\"4\" text=\"00000000\"/><Cell row=\"2\" col=\"5\" text=\"00000000\"/><Cell row=\"2\" col=\"6\" text=\"00000000\"/><Cell row=\"3\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"지역본부\"/><Cell row=\"3\" col=\"2\" text=\"00000000\"/><Cell row=\"3\" col=\"3\" text=\"00000000\"/><Cell row=\"3\" col=\"4\" text=\"00000000\"/><Cell row=\"3\" col=\"5\" text=\"00000000\"/><Cell row=\"3\" col=\"6\" text=\"00000000\"/><Cell row=\"4\" rowspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"영업점\"/><Cell row=\"4\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"전체\"/><Cell row=\"4\" col=\"2\" text=\"00000000\"/><Cell row=\"4\" col=\"3\" text=\"00000000\"/><Cell row=\"4\" col=\"4\" text=\"00000000\"/><Cell row=\"4\" col=\"5\" text=\"00000000\"/><Cell row=\"4\" col=\"6\" text=\"00000000\"/><Cell row=\"5\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"국내\"/><Cell row=\"5\" col=\"2\" text=\"00000000\"/><Cell row=\"5\" col=\"3\" text=\"00000000\"/><Cell row=\"5\" col=\"4\" text=\"00000000\"/><Cell row=\"5\" col=\"5\" text=\"00000000\"/><Cell row=\"5\" col=\"6\" text=\"00000000\"/><Cell row=\"6\" col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"해외\"/><Cell row=\"6\" col=\"2\" text=\"00000000\"/><Cell row=\"6\" col=\"3\" text=\"00000000\"/><Cell row=\"6\" col=\"4\" text=\"00000000\"/><Cell row=\"6\" col=\"5\" text=\"00000000\"/><Cell row=\"6\" col=\"6\" text=\"00000000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "8", "228", "398", "23", null, null, this);
            obj.set_taborder("42");
            obj.set_text("조회 그리드(그리드의 기본 정렬은 Center로 함)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "8", "600", "404", "23", null, null, this);
            obj.set_taborder("49");
            obj.set_text("CRUD 그리드(그리드의 기본 정렬은 Center로 함)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid09", "absolute", "8", "623", null, "164", "25", null, this);
            obj.set_taborder("50");
            obj.set_binddataset("ds_comp");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"45\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"필수 Edit\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Calendar\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_HeadLink\" text=\"링크\"/><Cell col=\"7\" text=\"정형텍스트\"/><Cell col=\"8\" text=\"비정형텍스트\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"Expand\"/><Cell col=\"11\" text=\"Button\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:Column7\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"mask\" style=\"align:right middle;\" text=\"bind:Column2\" mask=\"###,###\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:Column3\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:left middle;\" text=\"bind:Column4\" calendardisplay=\"display\"/><Cell col=\"6\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_BodyLink\" text=\"bind:Column5\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:Column6\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignLt\" text=\"bind:Column7\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column8\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"normal\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "85", "774", "1", "10", null, null, this);
            obj.set_taborder("51");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "35", "774", "1", "10", null, null, this);
            obj.set_taborder("53");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "8", "778", "77", "1", null, null, this);
            obj.set_taborder("54");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "8", "774", "1", "10", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "614", "592", "203", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("class : <b v='true'>Cellgrd_WF_HeadLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "693", "610", "1", "26", null, null, this);
            obj.set_taborder("59");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "685", "771", "1", "27", null, null, this);
            obj.set_taborder("60");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "646", "794", "210", "18", null, null, this);
            obj.set_taborder("61");
            obj.set_text("class : <b v='true'>Cellgrd_WF_BodyLink</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "137", "774", "1", "21", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "131", "799", "141", "36", null, null, this);
            obj.set_taborder("67");
            obj.set_text("display 정렬은\r\nalign : left middle");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "329", "774", "1", "21", null, null, this);
            obj.set_taborder("68");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "323", "799", "141", "36", null, null, this);
            obj.set_taborder("69");
            obj.set_text("display 정렬은\r\nalign : right middle");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "753", "1045", "40", "18", null, null, this);
            obj.set_taborder("70");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "731", "1040", "23", "1", null, null, this);
            obj.set_taborder("71");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "8", "857", "554", "23", null, null, this);
            obj.set_taborder("72");
            obj.set_text("그리드 : 합계/소계 샘플");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "42", "1135", "1", "21", null, null, this);
            obj.set_taborder("73");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "28", "1157", "235", "55", null, null, this);
            obj.set_taborder("74");
            obj.set_text("★★summary의 기본 정렬은 우측임\r\n합계, 소계 등 텍스트의 정렬은  \r\nalign : center middle");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ffff80ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "8", "1275", "554", "23", null, null, this);
            obj.set_taborder("75");
            obj.set_text("Multi Head 그리드 ==>>(해더에 3줄이상일 경우 높이 24)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "1499", "554", "23", null, null, this);
            obj.set_taborder("76");
            obj.set_text("Head text가 두줄로 들어갈 경우 그리드");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "8", "1723", "226", "23", null, null, this);
            obj.set_taborder("77");
            obj.set_text("Tree 그리드");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "389", "1723", "266", "23", null, null, this);
            obj.set_taborder("78");
            obj.set_text("예외 그리드(롤이 고정인 그리드)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "279", "1183", "173", "18", null, null, this);
            obj.set_taborder("81");
            obj.set_text("class : <b v='true'>Cellgrd_WF_sum03</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "672", "1776", "23", "1", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "672", "1802", "23", "1", null, null, this);
            obj.set_taborder("83");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "638", "1754", "40", "18", null, null, this);
            obj.set_taborder("84");
            obj.set_text("H : 31");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "638", "1782", "40", "18", null, null, this);
            obj.set_taborder("85");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "683", "1749", "1", "54", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "672", "1748", "23", "1", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "638", "1753", "40", "18", null, null, this);
            obj.set_taborder("88");
            obj.set_text("H : 29");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "672", "2002", "23", "1", null, null, this);
            obj.set_taborder("89");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "672", "2028", "23", "1", null, null, this);
            obj.set_taborder("90");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "638", "1980", "40", "18", null, null, this);
            obj.set_taborder("91");
            obj.set_text("H : 31");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "638", "2008", "40", "18", null, null, this);
            obj.set_taborder("92");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "683", "1976", "1", "53", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "672", "1977", "23", "1", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "638", "1981", "40", "18", null, null, this);
            obj.set_taborder("95");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("96");
            obj.set_text("Grid Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", null, "30", "25", "1869", "0", null, this);
            obj.set_taborder("97");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "0", "30", "8", "1869", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "100", "578", "1", "58", null, null, this);
            obj.set_taborder("102");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "275", "578", "1", "58", null, null, this);
            obj.set_taborder("103");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "526", "258", "40", "18", null, null, this);
            obj.set_taborder("104");
            obj.set_text("H : 29");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "504", "251", "23", "1", null, null, this);
            obj.set_taborder("105");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "515", "252", "1", "55", null, null, this);
            obj.set_taborder("106");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "526", "286", "40", "18", null, null, this);
            obj.set_taborder("107");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "504", "307", "23", "1", null, null, this);
            obj.set_taborder("109");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "504", "281", "23", "1", null, null, this);
            obj.set_taborder("110");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "260", "574", "203", "18", null, null, this);
            obj.set_taborder("111");
            obj.set_text("class : <b v='true'>Cellgrd_WF_edit</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ffff40ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "45", "574", "203", "18", null, null, this);
            obj.set_taborder("112");
            obj.set_text("class : <b v='true'>Cellgrd_WF_essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ffff40ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "812", "428", "1", "70", null, null, this);
            obj.set_taborder("113");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "794", "498", "234", "18", null, null, this);
            obj.set_taborder("114");
            obj.set_text("우측정렬 align : right middle");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "140", "404", "1", "94", null, null, this);
            obj.set_taborder("115");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "122", "498", "234", "18", null, null, this);
            obj.set_taborder("116");
            obj.set_text("좌측정렬 align : left middle");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "9", "494", "44", "1", null, null, this);
            obj.set_taborder("117");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "52", "443", "1", "58", null, null, this);
            obj.set_taborder("118");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "24", "499", "19", "17", null, null, this);
            obj.set_taborder("119");
            obj.set_text("45");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "8", "443", "1", "58", null, null, this);
            obj.set_taborder("120");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "999", "226", "74", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "1076", "226", "86", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "388", "334", "238", "25", null, null, this);
            obj.set_taborder("123");
            obj.set_text("★ 그리드 > 수정된 Row 컬러 : <b v='true'>#fff4dcff</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#fff4dcff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "388", "386", "238", "25", null, null, this);
            obj.set_taborder("124");
            obj.set_text("★ 그리드 > 추가된 Row 컬러 : <b v='true'>#d1f6ffff</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#d1f6ffff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "377", "1873", "35", "142", null, null, this);
            obj.set_taborder("125");
            obj.style.set_border("1 solid #ff0000ff,0 solid #ff0000ff,1 solid #ff0000ff,1 solid #ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "318", "1927", "133", "41", null, null, this);
            obj.set_taborder("126");
            obj.set_text("class : \r\n<b v='true'>Cellgrd_WF_Head</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ffff80ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "1073", "595", "1", "70", null, null, this);
            obj.set_taborder("127");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "845", "551", "299", "52", null, null, this);
            obj.set_taborder("128");
            obj.set_text("expandshow=   show\r\nexpandsize=     20 \r\nexpandimage=  theme://images/btn_WF_Search.png");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ff0000ff");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07", "absolute", "8", "70", null, "109", "25", null, this);
            obj.set_taborder("129");
            obj.set_binddataset("da_grd");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"항목\"/><Cell col=\"3\" text=\"항목\"/><Cell col=\"4\" text=\"항목\"/><Cell col=\"5\" text=\"항목\"/><Cell col=\"6\" text=\"항목\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "47", "294", "23", null, null, this);
            obj.set_taborder("130");
            obj.set_text("퍼블리싱용  그리드(복사용)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLDPT", "absolute", "8", "2203", null, "422", "629", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("131");
            obj.set_binddataset("dsTB_CPLDPT");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"130\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"예산과목\"/><Cell col=\"1\" text=\"예산과목명\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"합계\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" edittype=\"none\" style=\"align:center;line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:BDSB_CODE\"/><Cell col=\"1\" rowspan=\"5\" edittype=\"none\" style=\"align:left;line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:BDSB_NAME\"/><Cell col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,###\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_ATAL\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_ATAL\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_ATAL\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_ATAL\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"5\" colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"1\" col=\"2\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BADD_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BTOT_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('REMA_ATAL'), 0)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "599", "2353", "582", "63", null, null, this);
            obj.set_taborder("132");
            obj.set_text("★★그리드 더블클릭 > 그리드 Editor 창 > 하단에 있는 cell 선택하고\r\n우측의 속성 중 Style > line => 0 none, 1 solid #f0f0f0, 1 solid #cacaca, 1 solid #f0f0f0 \r\n하면 셀의 아래쪽 라인에만 짙은 선이 보임");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_background("#ffff80ff");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "3", "2354", "589", "18", null, null, this);
            obj.set_taborder("133");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid #ff0000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "462", "1304", "39", "18", null, null, this);
            obj.set_taborder("134");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "462", "1330", "39", "18", null, null, this);
            obj.set_taborder("135");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "462", "1356", "39", "18", null, null, this);
            obj.set_taborder("136");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "434", "1377", "23", "1", null, null, this);
            obj.set_taborder("137");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "434", "1351", "23", "1", null, null, this);
            obj.set_taborder("138");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "434", "1326", "23", "1", null, null, this);
            obj.set_taborder("139");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "434", "1300", "23", "1", null, null, this);
            obj.set_taborder("140");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "445", "1301", "1", "77", null, null, this);
            obj.set_taborder("141");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "317", "1535", "39", "18", null, null, this);
            obj.set_taborder("142");
            obj.set_text("H : 39");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "317", "1567", "39", "18", null, null, this);
            obj.set_taborder("143");
            obj.set_text("H : 26");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "299", "1588", "23", "1", null, null, this);
            obj.set_taborder("144");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "319", "1531", "39", "18", null, null, this);
            obj.set_taborder("145");
            obj.set_text("H : 39");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "310", "1523", "1", "66", null, null, this);
            obj.set_taborder("146");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "299", "1562", "23", "1", null, null, this);
            obj.set_taborder("147");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "299", "1523", "23", "1", null, null, this);
            obj.set_taborder("148");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 2649, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Grid(그리드종류별)");

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
            this.Static49.addEventHandler("onclick", this.Static49_onclick, this);
            this.Static63.addEventHandler("onclick", this.Static63_onclick, this);
            this.Static65.addEventHandler("onclick", this.Static65_onclick, this);
            this.Static72.addEventHandler("onclick", this.Static63_onclick, this);
            this.grdTB_CPLDPT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Static96.addEventHandler("onclick", this.Static63_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static15_onclick, this);

        };

        this.loadIncludeScript("05_Guide_grid.xfdl");

       
    };
}
)();
