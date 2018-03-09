package core.ifw.cmm.request;

import java.util.List;
import java.util.Map;

public interface CoreRequestIF {

    public Map getMapVariableList();

    public List getDataSet(String dsname) throws Exception;

    public Map getDataSetOnRow(String dsname) throws Exception;

    public Map getDataSetAll() throws Exception;

    public Map getSaveDataSetAll() throws Exception;
    
    public Object getSessionValue(String name) throws Exception;
    

}
