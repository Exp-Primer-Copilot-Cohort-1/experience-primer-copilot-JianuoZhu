function skillsmember() {
    var skills = document.getElementById("skills");
    var skillsvalue = skills.options[skills.selectedIndex].value;
    var skillsname = skills.options[skills.selectedIndex].text;
    var skillslist = document.getElementById("skillslist");
    var skillslistvalue = skillslist.value;
    var skillslistname = skillslist.options[skillslist.selectedIndex].text;
    var skillslistlength = skillslist.length;
    if (skillslistlength == 0) {
        var skillslistvalue = skillsvalue;
        var skillslistname = skillsname;
        var skillslistlength = skillslist.length;
        var skillslistoption = document.createElement("option");
        skillslistoption.text = skillslistname;
        skillslistoption.value = skillslistvalue;
        skillslist.add(skillslistoption);
    } else {
        var skillslistvalue = skillslist.value;
        var skillslistname = skillslist.options[skillslist.selectedIndex].text;
        var skillslistlength = skillslist.length;
        var skillslistoption = document.createElement("option");
        skillslistoption.text = skillslistname;
        skillslistoption.value = skillslistvalue;
        skillslist.add(skillslistoption);
    }
}