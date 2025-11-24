diableCookies = false;

function checkCsAndCloseBox(idOfCloseBtn, idOfParentDiv, animToRemove, animToAdd, timeUntilHidden, cookie, elmToRemove)
{
  closeBox(idOfCloseBtn, idOfParentDiv, animToRemove, animToAdd, timeUntilHidden);
  checkCookie(cookie, elmToRemove, idOfParentDiv);
}

function closeBox(idOfCloseBtn, idOfParentDiv, animToRemove, animToAdd, timeUntilHidden) {
  
  document.getElementById
  (idOfParentDiv).classList.remove(animToRemove);
  document.getElementById(idOfParentDiv).classList.add(animToAdd);
  
  if(idOfCloseBtn != '')
  {
    setTimeout(hideElement, timeUntilHidden, idOfCloseBtn);
  }
  setTimeout(hideElement, timeUntilHidden, idOfParentDiv);
}

function MakeCookie(cookie, value = 'true') {
  const d = new Date();
    d.setTime(d.getTime() + (15*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookie + "=" + value + ";" + expires + ";path=/";
}

function retrieveCookie(cookieName){
  let name = cookieName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++)
  {
    let c = ca[i];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cookie, idOfDiv, elmToRemove) {
  
  /*if(diableCookies == true)
  {
    return
  }*/
  
  let cookieToCheck = retrieveCookie(cookie);
  if (cookieToCheck != "")
  {
    hideElement(idOfDiv, elmToRemove);
  }
  else {
    MakeCookie(cookie);
  }
}

function hideElement(idOfDiv, elmToRemove)
{
  if (elmToRemove != "")
  {  
    document.getElementById(idOfDiv).classList.remove(elmToRemove);
  }
  
  document.getElementById(idOfDiv).style.visibility = 'hidden';
}

function Onload()
{
  var cookieEnabled = retrieveCookie('Checkbox');
  userPreference = document.getElementById("Checkbox");
  
  if (cookieEnabled == 'false')
  {
    userPreference.checked = false;
    
    let cookiesToCheck3 = retrieveCookie('ClosedPopup');
    //cookiesToCheck3 = '';
    
    Document.cookie = 'ClosedPopup' + "=; expires = Thu 01 Jan 1966 00:00:00 UTC; path=/;"; 
    //alert(Document.cookie);
    
  }
  else if (cookieEnabled == 'true')
  {
    userPreference.checked = true;
  }
  
  let cookiesToCheck = retrieveCookie('ClosedCookies');
  if(cookiesToCheck != "")
  {
    hideElement('cookie', 'openCookies');
  }
  
  let cookiesToCheck2 = retrieveCookie('ClosedPopup');
  //alert(cookiesToCheck2);
  if(cookiesToCheck2 != "")
  {
    hideElement('popupDiv', 'openPopup');
  }
}

function reveal(itemToShow) {
  document.getElementById(itemToShow).style.visibility = 'visible'; 
}

function Confirm(checkbox, idOfParentDiv, animToRemove, animToAdd, timeUntilHidden)
{
  
 Document.cookie = 'Checkbox' + "=; expires = Thu 01 Jan 1966 00:00:00 UTC; path=/;"; 
  
  userPreference = document.getElementById(checkbox).checked;
  
  if (userPreference == true)
  {
    MakeCookie('Checkbox', 'true');
    checkCsAndCloseBox('', idOfParentDiv, animToRemove, animToAdd, timeUntilHidden, 'ClosedCookies', idOfParentDiv, 'openCookies')
  }
  else {
    MakeCookie('Checkbox', 'false');
    closeBox('', idOfParentDiv, animToRemove, animToAdd, timeUntilHidden);
  }
  
  document.getElementById('moreOptionsDiv').style.visibility = 'hidden';
  
}