package core.ifw.utl;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeSet;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 파일에 관련된 유틸들
 *
 * <br><br>
 * Copyright Notice: Copyright 1998-2008 By INBUS CO, LTD. All rights reserved.
 *
 * @author 조 정 호
 * @since: 2008. 03. 28
 */
public class FileUtil {
    /**
     * Logger for this class
     * 
     */
    private static final Logger logger = LoggerFactory.getLogger(FileUtil.class);

    public static void fileEncodingTest( String sKey ) throws Exception {

        

        BufferedReader reader = null;
        FileWriter writer = null;
        try {
            StringBuffer sb = new StringBuffer();
            reader = new BufferedReader( new FileReader( sKey ) );
            
            String s;
            boolean isImport = false;
            
            
            String sImportDAO = "import ";
            
            //2015.05.11 시큐어코딩처리
            /*while( (s = reader.readLine()) != null ) { //시큐어대상

                logger.debug( new  String(s.getBytes("utf-8"), "euc-kr"));
                logger.debug( new  String(s.getBytes("utf-8"), "ksc5601"));
                logger.debug( new  String(s.getBytes("utf-8"), "x-windows-949"));
                logger.debug( new  String(s.getBytes("utf-8"), "iso-8859-1"));

                logger.debug( new  String(s.getBytes("iso-8859-1"), "euc-kr"));
                logger.debug( new  String(s.getBytes("iso-8859-1"), "ksc5601"));
                logger.debug( new  String(s.getBytes("iso-8859-1"), "x-windows-949"));
                logger.debug( new  String(s.getBytes("iso-8859-1"), "utf-8"));

                logger.debug( new  String(s.getBytes("euc-kr"), "ksc5601"));
                logger.debug( new  String(s.getBytes("euc-kr"), "utf-8"));
                logger.debug( new  String(s.getBytes("euc-kr"), "x-windows-949"));
                logger.debug( new  String(s.getBytes("euc-kr"), "iso-8859-1"));

                logger.debug( new  String(s.getBytes("ksc5601"), "euc-kr"));
                logger.debug( new  String(s.getBytes("ksc5601"), "utf-8"));
                logger.debug( new  String(s.getBytes("ksc5601"), "x-windows-949"));
                logger.debug( new  String(s.getBytes("ksc5601"), "iso-8859-1"));

                logger.debug( new  String(s.getBytes("x-windows-949"), "euc-kr"));
                logger.debug( new  String(s.getBytes("x-windows-949"), "utf-8"));
                logger.debug( new  String(s.getBytes("x-windows-949"), "ksc5601"));
                logger.debug( new  String(s.getBytes("x-windows-949"), "iso-8859-1"));
            }*/ //시큐어대상
            
            
            logger.debug("sb->" + sb.toString());
            
            //writer = new FileWriter(key);
            //writer.write(sb.toString());
            
        } catch (Exception e) {
        	logger.warn("예외 발생");
            
        } finally {
            if (reader != null) {
            	try {reader.close();} catch (IOException e) { logger.warn(e.getMessage()); }
            }
        }


    }
    
    /**
     * 파일로 부터 문자열을 읽어서 스트링으로 반환
     * @param dirPath
     * @param fileName
     * @return
     */
    public static String read(String dirPath, String fileName) throws FileNotFoundException, IOException{
        StringBuffer sb                 = new StringBuffer();

        BufferedReader in = null;
        String      s                   = null;
        try {
            in                          = new BufferedReader(new FileReader(dirPath+fileName));

            /*while((s = in.readLine()) != null) { //시큐어대상
                sb.append(s);
                sb.append("\n");
            }*/
            
            if (in != null) {
                while((s = in.readLine()) != null) { 
                    sb.append(s);
                    sb.append("\n");
                }            	
            }
            
        } catch (FileNotFoundException e) {
            logger.warn(e.getMessage());
        } catch (IOException e) {
            logger.warn(e.getMessage());
        } finally{
            //try {in.close();} catch (IOException e) {logger.error(e.getMessage());} //시큐어대상
            //2015.05.11 시큐어처리
        	if(in != null) {
                try {in.close();} catch (IOException e) {logger.warn(e.getMessage());}
            }
        }

        return sb.toString();
    }

    /**
     * 현재 폴더만 검색하자.
     * @param dirPath
     * @param findExt
     * @return
     */
    public static Map getCurDirList(String dirPath, List findExt) {
        return FileUtil.getDirList(dirPath, findExt, true);
    }
    
    /**
     * 하위 폴더까지 검색
     * @param dirPath
     * @param findExt
     * @return
     */
    public static Map getDirList(String dirPath, List findExt) {
        return FileUtil.getDirList(dirPath, findExt, false);
    }

    /**
    * 해당 리렉토리의 dirList Url을 가져옴
    * @param dirPath
    * @return HashMap
    */
   public static Map getDirList(String dirPath, List findExt, boolean isCurDir) {
       Map          fileList            = new HashMap();
       Map          childList           = null;
       File         dir                 = null;
       File         file                = null;
       String[]     child               = null;
       String       fileName            = null;

       Iterator     it                  = null;
       String       key                 = null;
       String       value               = null;

       //URL          realPath            = new FileUtil().getClass().getResource(dirPath);
       if(dirPath != null) {
           dir                          = new File(dirPath);

           if(dir.isDirectory()) {
               child                    = dir.list();

               for(int i=0; i<child.length; i++) {
                   fileName             = child[i];
                   file                 = new File(dir, fileName);

                   //자식 Query 파일 리스트를 현재 Query 파일 리스트로 옮김
                   if(file.isDirectory()) {
                       
                       if( isCurDir ) continue; //현재 Directory 만 검색할것인가 여부를 결정하자.!!!!
                       
                       
                       childList        = getDirList(dirPath+File.separator+fileName, findExt);

                       it = childList.keySet().iterator();
                       while(it.hasNext()) {
                           key          = (String)it.next();
                           value        = (String)childList.get(key);

                           fileList.put(key, value);
                       }
                   }
                   //파일일 경우 파일 패스 경로를 담음
                   else if(file.isFile()){
                       int      index   = fileName.lastIndexOf(".");
                       String   ext     = null;
                       if (index != -1) {
                           ext          = fileName.substring(index + 1);
                           if(ext != null
                                   && findExt.contains(ext)) {
                               fileList.put(dirPath+File.separator+fileName, fileName);
                           }
                       }
                   }
               }
           }
       }

       return fileList;
   }

   /**
    * InputStreamReader 를 읽어서 문서 파일을 생성
    * @param dirPath
    * @param fileName
    * @param is
    * @return
    */
   public static boolean createTextFile(String dirPath
           , String fileName
           , Reader is) throws FileNotFoundException, IOException{
       return createTextFile(dirPath, fileName, is, "");
   }

   /**
    * InputStreamReader 를 읽어서 문서 파일을 생성
    * @param dirPath
    * @param fileName
    * @param is
    * @param carriageReturnStr 개행문자를 변환시킬 문자
    * @return
    */
   public static boolean createTextFile(String dirPath
           , String fileName
           , Reader is
           , String carriageReturnStr) throws FileNotFoundException, IOException{
       return createTextFile(dirPath, fileName, is, carriageReturnStr, false);
   }

   /**
    * InputStreamReader 를 읽어서 기존 문서 파일에 덧붙임
    * @param dirPath
    * @param fileName
    * @param is
    * @return
    */
   public static boolean appendTextFile(String dirPath
           , String fileName
           , Reader is) throws FileNotFoundException, IOException{
       return appendTextFile(dirPath, fileName, is, "");
   }

   /**
    * InputStreamReader 를 읽어서 기존 문서 파일에 덧붙임
    * @param dirPath
    * @param fileName
    * @param is
    * @param carriageReturnStr 개행문자를 변환시킬 문자
    * @return
    */
   public static boolean appendTextFile(String dirPath
           , String fileName
           , Reader is
           , String carriageReturnStr) throws FileNotFoundException, IOException{
       return createTextFile(dirPath, fileName, is, carriageReturnStr, true);
   }

   /**
    * InputStreamReader 를 읽어서 문서 파일을 생성
    * @param dirPath
    * @param fileName
    * @param is
    * @param carriageReturnStr 개행문자를 변환시킬 문자
    * @param isAppend 덧붙일 것인지 여부를 결정
    * @return
    */
   public static boolean createTextFile(String dirPath
           , String fileName
           , Reader is
           , String carriageReturnStr
           , boolean isAppend) throws FileNotFoundException, IOException{
       boolean result           = false;
       String line              = null;

       BufferedReader reader    = new BufferedReader(is);
       BufferedWriter writer    = null;
       try {
           //폴더 생성
           createDir(dirPath);

           writer = new BufferedWriter(new FileWriter(dirPath+fileName, isAppend));
           
           /*while((line = reader.readLine()) != null) //시큐어대상
               writer.write(line+carriageReturnStr);

           reader.close(); //시큐어대상
           writer.close();*/
           
           //2015.05.11 시큐어처리
           if (reader != null) {
               while((line = reader.readLine()) != null)
                   writer.write(line+carriageReturnStr);

               reader.close();
               writer.close();
           }
           
       } catch (FileNotFoundException e) {
           logger.warn(e.getMessage());
       } catch (IOException e) {
           logger.warn(e.getMessage());
       }

       logger.debug("createTextFile result:"+result);
       return result;
   }

   /**
    * Stream을 읽어서 파일을 생성함
    * @param dirPath 경로의 끝부분은 꼭 '/' 을(를) 붙여야 함
    * @param fileName
    * @param inputStream
    * @return
    */
   public static boolean createFile(String dirPath
           , String fileName
           , InputStream is) throws FileNotFoundException, IOException{
       boolean result           = false;
       byte readByte[]          = new byte[4096];
       int i                    = 0;

       BufferedInputStream bis  = new BufferedInputStream(is);
       BufferedOutputStream bos = null;
       try {
           bos = new BufferedOutputStream(
                   new DataOutputStream(
                           new FileOutputStream(dirPath+fileName)));

           while ((i = bis.read(readByte, 0, 4096)) != -1)
               bos.write(readByte, 0, i);

           bis.close();
           bos.close();
       } catch (FileNotFoundException e) {
           logger.warn(e.getMessage());
       } catch (IOException e) {
           logger.warn(e.getMessage());
       }

       return result;
   }

   /**
    * 파일 있는지 여부 검증
    * @param dirPath
    * @param fileName
    * @return
    */
   public static boolean isCreatedFile(String dirPath, String fileName) {
       boolean result = false;
       File file = new File(dirPath, fileName);

       if(file.isFile() && file.length() > 0) {
           result = true;
       }

       logger.debug("isCreatedFile result:"+result);
       return result;
   }

   /**
    * dir을 만든다.
    * @param dirPath
    * @return
    */
   public static boolean createDir(String dirPath) {
       boolean result = false;

       File file = new File(dirPath);
       
       // 비어있을경우에만 넣아야 된다.
       // 만약 동일한 이름의 파일이 있다면 동일한 이름의 폴더를 생성해야 된다.
       if( !file.exists() || !file.isDirectory() ) {
           
           result = file.mkdir();
       }

       return result;
   }
   
   /**
    * 해당되는 폴더 전체를 다 생성하게 하자.
    * @param sDirPath
    * @return
    */
   public static boolean createDirAll(String sDirPath) throws Exception {

       boolean isResult = true;
       
       try {
       
           // 구분자 변경
           sDirPath = sDirPath.replaceAll("\\\\", "/");
           sDirPath = sDirPath.replaceAll("//", "/");
           
           
           // 진입부 변경
           /*
           if( sDirPath.indexOf(":/") != -1 ) {
               int iFindIdx = sDirPath.indexOf(":/");
               
               sDirPath = sDirPath.substring(iFindIdx+2);
           }
           */
           logger.debug("sDirPath->" + sDirPath);
           
           
           
           String[] aDirPath = sDirPath.split("/");
           if( aDirPath.length > 0 ) {
               String sSubDirPath = aDirPath[0];
               
               for (int i = 1; i < aDirPath.length; i++) {
                   
                   sSubDirPath += "/";
                   if( aDirPath[i] != null )
                       sSubDirPath += aDirPath[i];
                   
                   
                   logger.debug("i->"+i+" " +aDirPath[i] + " " + sSubDirPath);
                   FileUtil.createDir(sSubDirPath);
                   
               }
           }
           
       } catch(Exception e) {
           isResult = false;
           
           logger.warn("예외 발생");
           
       }
       
       
       return isResult;
   }
   
   /**
    * 파일의 확장자를 리턴한다.
    * @param fileName String
    * @return String
    */
   public static synchronized String getExtension(String fileName) {
       if (fileName == null || fileName.lastIndexOf(".") == -1 ||
           fileName.lastIndexOf(".") + 1 >= fileName.length())return "";
       String result = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length());
       return result.toLowerCase();
   }
   
   /**
    * 파일을 복사합니다.
    * @param oriFile
    * @param tagFile
 * @throws Exception 
    */
   public static void fileCopy(String oriFile, String tagFile) throws Exception {
       FileUtil.fileCopy(oriFile, tagFile, false);
   }
   
   /**
    * 파일을 복사합니다. 동일한 파일이 있을 경우 파일을 덮어 쓰게 합니다.
    * @param oriFile
    * @param tagFile
 * @throws Exception 
    */
   public static void fileCopyOverWrite(String oriFile, String tagFile) throws Exception {
       FileUtil.fileCopy(oriFile, tagFile, true);
   }
   
   /**
    * 파일을 복사해옵시다.
    * @param oriFile
    * @param tagFile
    * @param isOverWrite
 * @throws Exception 
    */
   public static void fileCopy(String oriFile, String tagFile, boolean isOverWrite) throws Exception {

       try {
           // 파일 객체 생성
           File srcFile = new File(oriFile);
           File objFile = new File(tagFile);

           // 파일 검사
           if(!srcFile.exists() || !srcFile.isFile()) {
               throw new Exception(oriFile + ":: 원본파일이 존재하지 않거나 파일이 아닙니다");
           }
           if(objFile.exists()) {
               if(objFile.isFile()) {
                   if( isOverWrite ) {
                       logger.debug("overwrite - " + tagFile);
                   } else {
                       throw new Exception(oriFile + ":: 같은 이름의 파일이 존재합니다.");
                   }
               } else {
                   throw new Exception(oriFile + ":: 같은 이름의 디렉토리가 존재합니다.");
               }
           }

           // 파일 스트림 생성
           BufferedInputStream srcStream = new BufferedInputStream(
                                       new FileInputStream(srcFile));
           BufferedOutputStream objStream = new BufferedOutputStream(
                                       new FileOutputStream(objFile));

           // 복사
           int b;
           while((b = srcStream.read()) != -1) {
               objStream.write(b);
           }

           srcStream.close();
           objStream.close();
           
       } catch (Exception e) {
    	   logger.warn("예외 발생");
           
           throw e;
       }
   }

    /**
     * 파일 폴더에 속해 있는 모든 하위 파일 & 폴더까지 다 지워보자.
     * @param dirPath - 해당 폴더 url 
     */
    public static void deleteDir(String dirPath) {
        File         dir                 = null;
        File         file                = null;
        String[]     child               = null;
        String       fileName            = null;

        //URL          realPath            = new FileUtil().getClass().getResource(dirPath);
        if(dirPath != null) {
            dir                          = new File(dirPath);

            if(dir.isDirectory()) {
                child                    = dir.list();

                for(int i=0; i<child.length; i++) {
                    fileName             = child[i];
                    file                 = new File(dir, fileName);

                    //자식 Query 파일 리스트를 다 지운 다음 자기 폴더 자체도 지워보자.
                    if(file.isDirectory()) {
                        deleteDir(dirPath+File.separator+fileName);

                        file.delete();
                    }
                    //파일일 경우 파일 자체를 지우게 해둠.
                    else if(file.isFile()){
                        file.delete();
                    }
                }
            }
        }
    }
    
    /**
     * 파일 이름을 변경해둠
     * @param fromFile
     * @param toFile
     * @return
     * @throws IOException
     */
    public static boolean rename(File fromFile, File toFile) throws IOException {
        if (fromFile.isDirectory()) {
            File[] files = fromFile.listFiles();
            if (files == null) {
                // 디렉토리 내 아무것도 없는 경우
                return fromFile.renameTo(toFile);
            } else {
                // 디렉토리내 파일 또는 디렉토리가 존재하는 경우
                if (!toFile.mkdirs()) {
                    return false;
                }
                for (File eachFile : files) {
                    File toFileChild = new File(toFile, eachFile.getName());
                    if (eachFile.isDirectory()) {
                        if (!rename(eachFile, toFileChild)) {
                            return false;
                        }
                    } else {
                        if (!eachFile.renameTo(toFileChild)) {
                            return false;
                        }
                    }
                }
                return fromFile.delete();
            }
        } else {
            // 파일인 경우
            if (fromFile.getParent() != null) {
                if (!toFile.mkdirs()) {
                    return false;
                }
            }
            return fromFile.renameTo(toFile);
        }
    }
   
    /**
     * 진짜 파일 이름을 가지고 오자.
     * @param sFileName
     * @return [0] filePath, [1] fileName, [2] fileExt
     * @throws Exception
     */
    public static String[] getRealFileName(String sFileName) throws Exception {
        String sRealFile = sFileName;
        String sExt = "";
        
        if(sFileName.lastIndexOf(".") != -1) {
            sRealFile = sFileName.substring(0, sFileName.lastIndexOf("."));
            
            sExt = sFileName.substring( sFileName.lastIndexOf(".")+1, sFileName.length() ); 
        }
        
        String sPath = sRealFile.substring(0, sFileName.lastIndexOf( File.separator ));
        sRealFile = sRealFile.substring( sRealFile.lastIndexOf( File.separator )+1, sRealFile.length() );
        
        return new String[] {sPath, sRealFile, sExt};
    }
    
    /**
     * 최종이름을 가지고 온다.
     * test_1.txt 이런식으로 되어 있는 파일의 경우 test_2.txt 가 반환되도록 처리할거다.
     * @throws Exception
     */
    public static String getLastFileName(String sFileName) throws Exception {
        String[] aFileName = FileUtil.getRealFileName(sFileName);
        
        String sPath = aFileName[0];
        String sFile = aFileName[1];
        String sExt  = aFileName[2];
        
        List<String> listExt = new ArrayList<String>();
        listExt.add(sExt);
        //sFile.split("_");
        
        boolean isFine = false;

        
        //최대 idx 가 파일 이름안에 있는지를 보자.
        int iMaxIdx = 0;
        if( sFile.lastIndexOf("_") != -1 ) {
            
            int iCompIdx = 0;
            try {
                iCompIdx = Integer.parseInt(sFile.substring( sFile.lastIndexOf("_")+1, sFile.length() ));
            } catch (Exception e) {
            	logger.warn("@Exception "+e.getMessage());
            }
            sFile = sFile.substring(0, sFile.lastIndexOf("_"));
            
            logger.debug("iCompIdx->" + iCompIdx);
            
            if( iMaxIdx < iCompIdx) iMaxIdx = iCompIdx;
        }
        logger.debug("sFile->" + sFile + " sPath->" + sPath + " sExt->" + sExt);
        
        
        //해당되는 폴더를 다 뒤지면서 같은 파일 이름이 있는지 확인해 보자.
        Map<String, String> fileList = FileUtil.getCurDirList(sPath, listExt);
        
        Iterator<String> it = new TreeSet( fileList.keySet() ).iterator();
        
        while( it.hasNext() ) {
            String sKey = it.next();
            
            
            //비교할 파일이름을 가지고 오자.
            String sFindFileName = FileUtil.getRealFileName(sKey)[1];
            if( sFindFileName.lastIndexOf("_") != -1 ) {
                
                
                //비교할 이름이 같지 않으면 무시 
                String sCompFileName = sFindFileName.substring(0, sFindFileName.lastIndexOf("_"));
                if( !sFile.equals( sCompFileName ) ) continue;
                
                
                //이름이 같으면 현재 번호랑 비교해서 가장 큰 번호를 가지고 온다.
                int iCompIdx = 0;
                try {
                    iCompIdx = Integer.parseInt(sFindFileName.substring( sFindFileName.lastIndexOf("_")+1, sFindFileName.length() ));
                } catch (Exception e) {
                	logger.warn("@Exception "+e.getMessage());
                }
                logger.debug("sFile->" + sFile + " iCompIdx->" + iMaxIdx + " " + iCompIdx);
                
                
                if( iMaxIdx <= iCompIdx) {
                    
                    isFine = true;
                    iMaxIdx = iCompIdx;
                    
                    //max 값 비교를 잘 하지 못한다 확인해 보자.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }
            } 
            
            //비교할 파일이 없는 경우 파일의 첫번째 인지 여부를 먼저 확인해 보자.
            else {
                if( sFile.equals( sFindFileName ) ) {
                    isFine = true;
                    iMaxIdx++;
                }
            }
        }
        
        
        //isFine flag 값의 경우 자기 자신보다 큰 idx 를 가지고 있는 파일명칭을 발견했는지 여부를 발견하는 함수임
        if( isFine ) iMaxIdx ++;
        
        
        //반환할 이름을 조립하자.
        String sRtn = sPath + File.separator + sFile;
        if( iMaxIdx > 1 ) {
            sRtn += "_" + iMaxIdx;
        }
        sRtn += (sExt.equals("") ? "" : ".") + sExt;
        logger.debug(sFileName + " getLastFileName->" + sRtn);
        return sRtn;
    }
    
    private static final int COMPRESSION_LEVEL = 8;
    private static final int BUFFER_SIZE = 1024 * 2;
    
    /**
     * 지정된 폴더를 Zip 파일로 압축한다.
     * @param sourcePath - 압축 대상 디렉토리
     * @param output - 저장 zip 파일 이름
     * @throws Exception
     */
    public static void zip(String sourcePath, String output) throws Exception {

        // 압축 대상(sourcePath)이 디렉토리나 파일이 아니면 리턴한다.
        File sourceFile = new File(sourcePath);
        if (!sourceFile.isFile() && !sourceFile.isDirectory()) {
            throw new Exception("압축 대상의 파일을 찾을 수가 없습니다.");
        }

        // output 의 확장자가 zip이 아니면 리턴한다.
        if (!FileUtil.getExtension(output).equalsIgnoreCase("zip")) {
            throw new Exception("압축 후 저장 파일명의 확장자를 확인하세요");
        }

        ZipOutputStream zos = null;

        try {
            zos = new ZipOutputStream( 
                    new BufferedOutputStream( 
                            new FileOutputStream(output) 
                            ) 
                    );
            zos.setLevel(COMPRESSION_LEVEL); // 압축 레벨 - 최대 압축률은9, 디폴트8
            zipEntry(sourceFile, sourcePath, zos); // Zip 파일 생성
            zos.finish(); // ZipOutputStream finish
        } finally {
            if (zos != null) {
                zos.close();
            }
        }
    }
    
    /**
     * 압축
     * @param sourceFile
     * @param sourcePath
     * @param zos
     * @throws Exception
     */
    private static void zipEntry(File sourceFile, String sourcePath, ZipOutputStream zos) throws Exception {
        // sourceFile 이 디렉토리인 경우 하위 파일 리스트 가져와 재귀호출
        if (sourceFile.isDirectory()) {
            if (sourceFile.getName().equalsIgnoreCase(".metadata")) { // .metadata 디렉토리 return
                return;
            }
            File[] fileArray = sourceFile.listFiles(); // sourceFile 의 하위 파일 리스트
            for (int i = 0; i < fileArray.length; i++) {
                zipEntry(fileArray[i], sourcePath, zos); // 재귀 호출
            }
        } else { // sourcehFile 이 디렉토리가 아닌 경우
            BufferedInputStream bis = null;
            try {
                String sFilePath = sourceFile.getPath();
                String zipEntryName = sFilePath.substring(sourcePath.length() + 1, sFilePath.length());

                bis = new BufferedInputStream(new FileInputStream(sourceFile));
                ZipEntry zentry = new ZipEntry(zipEntryName);
                zentry.setTime(sourceFile.lastModified());
                zos.putNextEntry(zentry);

                byte[] buffer = new byte[BUFFER_SIZE];
                int cnt = 0;
                while ((cnt = bis.read(buffer, 0, BUFFER_SIZE)) != -1) {
                    zos.write(buffer, 0, cnt);
                }
                zos.closeEntry();
            } finally {
                if (bis != null) {
                    bis.close();
                }
            }
        }
    }
    
    public static void main(String[] args) {
        
        String sFilePath = "C:\\Users\\Administrator\\.inbus\\psaHMS.properties";
        
        try {
            FileUtil.getLastFileName(sFilePath);
        } catch (Exception e) {
            // TODO Auto-generated catch block
        	logger.warn("예외 발생");
            
        }
        
    }
}
