<script type="text/javascript">

//JK Popup Window Script (version 3.0)- By JavaScript Kit (http://www.javascriptkit.com)
//Visit JavaScriptKit.com for free JavaScripts
//This notice must stay intact for legal use
//Win Type: Pop Under | 12 minutes period
    
//Specify URLs to randomly select from and popup/popunder:
//To display a single URL, just remove all but the first entry below:
var popurls=new Array()
popurls[0]="http://www.javascriptkit.com"
popurls[1]="http://www.dynamicdrive.com"
popurls[2]="http://www.webmasterpick.com"
popurls[3]="http://www.codingforums.com"

function openpopup(popurl){
var winpops=window.open(popurl,"child","width=,height=,toolbar,location,directories,status,scrollbars,menubar,resizable")
winpops.blur()
window.focus()
}

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

popfrequency="12 minutes"

function resetcookie(){
var expireDate = new Date()
expireDate.setMinutes(expireDate.getMinutes()-10)
document.cookie = "jkpopunder=;path=/;expires=" + expireDate.toGMTString()
}

function loadornot(){
if (get_cookie('jkpopunder')==''){
openpopup(popurls[Math.floor(Math.random()*(popurls.length))])
var expireDate = new Date()
expireDate.setMinutes(expireDate.getMinutes()+parseInt(popfrequency))
document.cookie = "jkpopunder="+parseInt(popfrequency)+";path=/;expires=" + expireDate.toGMTString()
}
}

if (get_cookie('jkpopunder')!=parseInt(popfrequency))
resetcookie()
loadornot()

</script>
