<?php 
    /*连接数据库*/	
    header("content-type:application/json");
    include("conn1.php"); 
/*     echo "连接成功"; */
    /*获取id*/
    $id = $_GET['id'];
/*     $id = 1; */
    $json = '';
    $tmp= [];
 $sql = "SELECT * FROM detail where id='{$id}'";
$result = $mysqli->query($sql);
if($result){
    //echo "查询成功<br>";
while ($row = mysqli_fetch_array($result,MYSQL_ASSOC))
{
//数据赋值
$tmp['id'] = $row["id"];
$tmp['sightName'] = $row["sightName"];
$tmp['bannerImg'] = $row["bannerImg"];
$tmp['gallaryImgs'] = explode(",",$row["gallaryImgs"]);
$tmp['categoryList'] = [
    ['title'=>$row["title"]],
    ['title'=>$row["content"]]
];
} 
   $json = json_encode($tmp);
   echo "{".'"ret"'.":".'true'.','.'"data"'.":".$json."}";  
}else{
echo "查询失败";
}  
$mysqli->close();
?>