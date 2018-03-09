package core.ifw.utl;

import java.io.ByteArrayInputStream;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

/**
 * Excel 파일을 읽어들여서 처리하게 하자.
 *
 * <br><br>
 * Copyright Notice: Copyright 1998-2010 By INBUS CO, LTD. All rights reserved.
 *
 * @author 조 정 호
 * @since: 2010. 11. 1.
 */
public class POILoader {
    
    private HSSFWorkbook poiWorkbook;
    private HSSFSheet poiSheet;
    private HSSFRow poiRow;
    private int iPoiRow; 
    private int iHeaderCount;
    private int iCellCount;
    
    /**
     * Excel을 생성
     * @param file
     * @throws Exception
     */
    public POILoader(byte[] file) throws Exception {
        
        //워크북을 생성!
        poiWorkbook = new HSSFWorkbook(new POIFSFileSystem(new ByteArrayInputStream(file)));
        
        //시트 이름과 시트번호를 추출
        poiSheet = poiWorkbook.getSheetAt(0);//첫번째 시트
        
        iPoiRow = 0;
    }
    
    /**
     * 헤더가 몇줄인지 판별하자.
     * (설정을 하면 줄을 바라보고 있는 count가 초기화 된다. 주의)
     * @param iHeaderCount
     */
    public void setHeaderCount( int iHeaderCount ) {
        
        this.iPoiRow = iHeaderCount;
        
        this.iHeaderCount = iHeaderCount;
    }
    
    /**
     * 컬럼 갯수를 설정하자.
     * @param iCellCount
     */
    public void setCellCount( int iCellCount ) {
        this.iCellCount = iCellCount;
    }
    
    
    /**
     * 커서를 돌림
     * @return
     */
    public boolean next() throws Exception {
        
        if( iPoiRow < poiSheet.getPhysicalNumberOfRows() ) {
            
            //리스트에서 한줄을 읽어 셀 정보를 가져온다.
            poiRow = poiSheet.getRow(iPoiRow);
            
            iPoiRow++;
            
            return true;
        } else {
            return false;
        }
        
    }
    
    /**
     * 셋 갯수가 맞는지 여부를 확인하자.
     * @return 문제가 되는 줄 번호 반환 (-1 이면 성공, 0 ~ * 이면 문제가 있다고 판단)
     * @throws Exception
     */
    public int checkCellCount() throws Exception {
        if( iCellCount == 0 ) throw new Exception("셀 갯수를 등록해 놓으세요.");
        
        //헤더 카운트는 무시하고 진행 할 수 있게 하자.
        for (int i = iHeaderCount; i < poiSheet.getPhysicalNumberOfRows(); i++) {
            //리스트에서 한줄을 읽어 셀 정보를 가져온다.
            HSSFRow curRow = poiSheet.getRow(i);
            
            if( iCellCount != curRow.getPhysicalNumberOfCells() ) {
                return i;
            }
        }
        
        return -1;
    }
    
    /**
     * 커서 index 0으로 초기화
     * @throws Exception
     */
    public void reset() throws Exception {
        iPoiRow = 0;
    }
    
    /**
     * 컬럼 갯수가 같은지 여부를 확인
     * @return
     * @throws Exception
     */
    public boolean isCellCount() throws Exception {
        return iCellCount == poiRow.getPhysicalNumberOfCells();
    }
    
    /**
     * 문자열을 가지고 옵시다.
     * @param iCell
     * @return
     * @throws Exception
     */
    public String getString( int iCell) throws Exception {
        return POIUtil.getString(poiRow, iCell);
    }

}
