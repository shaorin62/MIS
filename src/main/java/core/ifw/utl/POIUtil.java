/*
 * POIUtil
 * 
 * Version 1.0
 *
 * Date 2007-06-12
 * 
 * Copyright 
 * 
 * Description POI Package 와 관련된 함수들 모음
 */

package core.ifw.utl;

import java.math.BigDecimal;
import java.text.FieldPosition;
import java.text.SimpleDateFormat;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.poi.hssf.usermodel.HSSFRow;

public class POIUtil {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(POIUtil.class);
    
    /**
     * 해당 컬럼의 값을 String 으로 반환해 온다.
     * @param poiRow        - row Object
     * @param currentCell   - 해당 column 의 index
     * @return
     */
    public static String getString(HSSFRow poiRow, int currentCell) {
        String result = null;
        try {
            int cellType = poiRow.getCell((short) currentCell).getCellType();
            
            // CellType is
            //0: Numericc
            if(cellType == 0) {
                result = String.valueOf(new BigDecimal(poiRow.getCell((short) currentCell).getNumericCellValue()).toBigInteger());
            } 
            //1: String
            else if(cellType == 1) {
                result = poiRow.getCell((short) currentCell).getStringCellValue();
            } 
            //2: Formula
            else if(cellType == 2) {
            } 
            //3: Blank
            else if(cellType == 3) {
                result = "";
            }
            //4: Boolean
            else if(cellType == 4) {
                result = new Boolean(poiRow.getCell((short) currentCell).getBooleanCellValue()).toString();
            }
            //5: Error
            else {
                result = "";
            }
        }
        //값이 비어있거나(null) 에러가 날때 
        catch (Exception e) {
            result = "";
        }
        
        logger.debug(currentCell+":"+result);
        return result.trim();
    }
    
    /**
     * 가져오는 값을 int 형으로 가져온다.
     * @param poiRow
     * @param currentCell
     * @return
     */
    public static int getInt(HSSFRow poiRow, int currentCell) {
        int result = 0;
        
        try {
            result = new Integer(getString(poiRow, currentCell)).intValue();
        } catch(Exception e) {
            result = 0;
        }
        
        return result;
    }
    
    /**
     * 가져오는 값을 long 형으로 가져온다.
     * @param poiRow
     * @param currentCell
     * @return
     */
    public static long getLong(HSSFRow poiRow, int currentCell) {
        long result = 0;
        
        try {
            result = new Long(getString(poiRow, currentCell)).longValue();
        } catch(Exception e) {
            result = 0;
        }
        
        return result;
    }
    
    /**
     * 가져오는 값을 double 형으로 가져온다.
     * @param poiRow
     * @param currentCell
     * @return
     */
    public static double getDouble(HSSFRow poiRow, int currentCell) {
        double result = 0;
        
        try {
            result = new Double(getString(poiRow, currentCell)).doubleValue();
        } catch(Exception e) {
            result = 0;
        }
        
        return result;
    }
    
    /**
     * 문자열을 날짜 형태로 변환해서 반환
     * @param poiRow
     * @param currentCell
     * @param format
     * @return
     */
    public static String getDateString(HSSFRow poiRow, int currentCell, String format) {
        if(format == null || format.equals("")) 
            format = "yyyy-MM-dd";
        
        String result = "";
        String cellVal = "";
        try {
            cellVal = getString(poiRow, currentCell);
            
            if(cellVal != null && !cellVal.equals("")) {
                SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
                SimpleDateFormat df = new SimpleDateFormat(format);
                
                result = df.format( formatter.parse(cellVal) );
            }
        } catch(Exception e) {
            result = "";
        }
        
        return result;
    }
}
