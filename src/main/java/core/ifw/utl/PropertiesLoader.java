package core.ifw.utl;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class PropertiesLoader implements Map{
    private Map         dataSourceList;
    private long        lasted;

    private String      fileName;

    public PropertiesLoader(String fileName) {
        this.fileName               = fileName;
        reloadProperties();
    }

    /**
     * properties가 변경 되었는지 검사
     * @param fileName
     */
    synchronized private void reloadProperties() {
        PropertiesUtil  prop        = new PropertiesUtil();

        try {
            if(dataSourceList == null || prop.isModify(fileName, lasted)) {
                dataSourceList      = prop.getProperties(fileName);
                lasted              = prop.lastModify(fileName);
            }
        } catch (Exception e) {
            dataSourceList = new HashMap();
        }
    }

    /**
     * properties를 반환
     * @return HashMap
     */
    /*
    public Map getProperties() {
        reloadProperties();

        return dataSourceList;
    }
    */

    /**
     * 해당되는 키의 값을 반환
     * @param key
     * @return
     */
    synchronized public Object get(Object key) {
        reloadProperties();

        Object value = "";

        try {
            value = dataSourceList.get(key);
        }catch(Exception e) {
            value = "";
        }

        return value;
    }
    
    
    //저장된 값을 가지고 properties 파일에 기입하게 하자.
    public String writeFile() {
        PropertiesUtil  prop        = new PropertiesUtil();
        
        return prop.writeProperties(fileName, dataSourceList);
    }

    public void clear() {
        dataSourceList.clear();
    }

    public boolean containsKey(Object key) {
        return dataSourceList.containsKey(key);
    }

    public boolean containsValue(Object value) {
        return dataSourceList.containsValue(value);
    }

    public Set entrySet() {
        return dataSourceList.entrySet();
    }

    public boolean isEmpty() {
        return dataSourceList.isEmpty();
    }

    public Set keySet() {
        return dataSourceList.keySet();
    }

    public Object put(Object arg0, Object arg1) {
        return dataSourceList.put(arg0, arg1);
    }

    public void putAll(Map arg0) {
        dataSourceList.putAll(arg0);
    }

    public Object remove(Object key) {
        return dataSourceList.remove(key);
    }

    public int size() {
        return dataSourceList.size();
    }

    public Collection values() {
        return dataSourceList.values();
    }
}
