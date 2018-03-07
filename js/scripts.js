//business logic
function Report(subject,type,county,position,report,message) {
    this.subject = subject;
    this.type= type;
    this.county =county;
      this.position= position;
        this.report = report;
          this.message = message;
}


// user interface logic
$(document).ready(function() {
$("form#start-page").submit(function(event) {
    event.preventDefault();

    var inputtedSubject = $(this).find("input.inputtedSubject").val();
    var inputtedType = $(this).find("input.type").val();
    var inputtedCounty = $(this).find("input.county").val();
    var inputtedPosition = $(this).find("input.position").val();
    var inputtedReport = $(this).find("input.report").val();
    var inputtedMessage = $(this).find("input.message").val();
});
});
