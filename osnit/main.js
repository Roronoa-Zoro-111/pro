function gotopage() {
    let input = document.getElementById("data").value;

    if(input === "via image"){
        window.location.href = "https://images.google.com/?gws_rd=ssl";
    }
    else if(input === "via video serch"){
        window.location.href = "https://www.google.com/videohp?gws_rd=ssl";
    }
    else if(input === "via video analysis"){
        window.location.href = "https://tools.digitalmethods.net/netvizz/youtube/";
    }
    else if(input === "via username"){
        window.location.href = "https://usersearch.org/";
    }
    else if(input === "via email"){
        window.location.href = "https://www.voilanorbert.com/";
    }
    else if(input === "via mobile number"){
        window.location.href = "http://www.truecaller.com/";
    }
    
}