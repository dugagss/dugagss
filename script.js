function buildRows(id, data) {
  const tbody = document.getElementById(id);
  data.forEach(function(item) {
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + item[0] + "</td>" +
      "<td>" + item[1] + "</td>" +
      "<td><a href=\"" + item[2] + "\" target=\"_blank\">" + item[2] + "</a></td>";
    tbody.appendChild(tr);
  });
}

buildRows("sectionB", websiteConfig.sectionB);
buildRows("sectionC", websiteConfig.sectionC);

var ytLink = document.getElementById("youtubeLink");
ytLink.href = websiteConfig.youtubeVideo;
ytLink.innerText = websiteConfig.youtubeVideo;
