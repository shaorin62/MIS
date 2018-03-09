package core.ifw.cmm.result;

import java.util.List;


public interface CoreResultDataIF {
	
    public Object getPlatformData();
    
    public void addVariableList(String sKey, String sVal);
    
    public void setResultMessage(String code, String msg);
    
    public void addDataSet(String sDsName, List list) throws Exception;
    
    public void addDataSet(String sDsName, Object dataSet) throws Exception;
    
    public void addDataSet(String dsname, List list, Class clsVoClass) throws Exception;
    
}
