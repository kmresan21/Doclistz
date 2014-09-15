// This is a JavaScript file

function getemployeedetails(){
   var URL = "http://trainingsite.rubixsoftsolutions.com/ProcessRequest.aspx?saction=processrequest&txt_employeeid=1";
   APIRequestCall('processrequest', 'processrequest',URL); 
    
}

function APIRequestCall(Xml, Method, URL) {
       
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", URL, false);
    xmlHttp.send(null);
    ProcessResponseXml(Method,xmlHttp.responseText);
}

function ProcessResponseXml(method, response) {
    
    if (method == "processrequest") {
         document.getElementById('processrequestresponse').innerHTML = response;
    }else if(method == "validuserlogin"){
    document.getElementById('loginstatus').innerHTML = response;
    }
}  

function isvalidemailid(f) {
    var str = f.value;

    if (str != "") {
        var len = str.length;
        f.style.background = "#fffbff";
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (len != "") {
            if (!(filter.test(str))) {
                f.style.background = "#FFFFB3"; return false;

            } else return true;
        }
    } else return false;

}


function validatelogin(){
    var reqireinfo="";
    var username=document.getElementById("txt_username").value;
    var password=document.getElementById("txt_password").value;
    reqireinfo = "Invalid values\n\n";
    if(username=="" || isvalidemailid(document.getElementById("txt_username")) == false){
        reqireinfo = reqireinfo + "UserName \n"
    }
    if(password==""){
        reqireinfo = reqireinfo + "Password \n"
    }

    if(reqireinfo != "Invalid values\n\n"){
        alert(reqireinfo);
    }else{
        URL = "http://www.doclistz.com/ProcessRequest.aspx?username=" + username+"&password="+password+"&saction=validuserlogin";
        APIRequestCall('validuserlogin', 'validuserlogin',URL);
    }
}

