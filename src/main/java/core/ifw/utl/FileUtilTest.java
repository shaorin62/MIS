package core.ifw.utl;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * 
 *
 * <br><br>
 * Copyright Notice: Copyright 1998-2010 By INBUS CO, LTD. All rights reserved.
 *
 * @author 조 정 호
 * @since: 2010. 10. 19.
 */
public class FileUtilTest {
	
	private static final Logger logger = LoggerFactory.getLogger(FileUtilTest.class);
	
    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void testCreateFile() {
        try {
            String sSaveFileName    = "HRMD0040" + System.currentTimeMillis();
            FileInputStream is          = new FileInputStream("c:\\log.txt");
            String dirPath  = "c:\\temp\\iphrm";
            
            FileUtil.createFile(dirPath + File.separator, sSaveFileName, is);
        } catch(Exception e) {
        	logger.warn("예외 발생");
            
        }
    }

}
