
function buildRows(id,data){
const tbody=document.getElementById(id);

data.forEach(item=>{
const tr=document.createElement("tr");

tr.innerHTML=`
<td>${item[0]}</td>
<td>${item[1]}</td>
<td>
<a href="pdfs/${item[2]}" target="_blank">
pdfs/${item[2]}
</a>
</td>
`;

tbody.appendChild(tr);
});
}

buildRows("sectionB",websiteConfig.sectionB);
buildRows("sectionC",websiteConfig.sectionC);

document.getElementById("youtubeFrame").src=websiteConfig.youtubeVideo;
document.getElementById("youtubeLink").href=websiteConfig.youtubeVideo;
document.getElementById("youtubeLink").innerText=websiteConfig.youtubeVideo;
